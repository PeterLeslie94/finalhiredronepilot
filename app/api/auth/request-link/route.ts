import { NextRequest, NextResponse } from 'next/server';

import { logEmail } from '@/lib/server/audit';
import { isAllowedAdminLoginEmail } from '@/lib/server/auth-config';
import { query, withTransaction } from '@/lib/server/database';
import { fireEmail } from '@/lib/server/email';
import { consumeRateLimit } from '@/lib/server/rate-limit';
import { getCanonicalAppOrigin, getClientIp, jsonError, parseBody, wantsHtmlRedirect } from '@/lib/server/http';
import { createMagicLinkToken } from '@/lib/server/security';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type IdentityRow = {
  id: string;
  email: string;
};

export async function POST(request: NextRequest) {
  try {
    // Always return a generic success response to avoid account enumeration.
    const genericSuccess = () => {
      if (wantsHtmlRedirect(request)) {
        return NextResponse.redirect(new URL('/auth/check-email', request.url), 303);
      }
      return NextResponse.json({ ok: true });
    };

    const authRateLimitWindowMs = Math.max(30_000, Number(process.env.AUTH_RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000));
    const authRateLimitMax = Math.max(1, Number(process.env.AUTH_RATE_LIMIT_MAX || 20));
    const requester = getClientIp(request) || 'unknown';
    const authRateLimit = consumeRateLimit({
      scope: 'auth-request-link',
      identifier: requester,
      windowMs: authRateLimitWindowMs,
      max: authRateLimitMax,
    });

    if (!authRateLimit.allowed) {
      return genericSuccess();
    }

    const payload = await parseBody(request);
    const emailRaw = typeof payload.email === 'string' ? payload.email : '';
    const email = emailRaw.trim().toLowerCase().slice(0, 200);

    if (!EMAIL_RE.test(email)) {
      // Generic response even for invalid email to avoid subtle enumeration.
      return genericSuccess();
    }
    if (!isAllowedAdminLoginEmail(email)) {
      // Generic response for non-allowlisted emails to avoid account enumeration.
      return genericSuccess();
    }

    const identityRes = await query<IdentityRow>(
      `SELECT id, email
       FROM user_identities
       WHERE email = $1
         AND role = 'ADMIN'
       LIMIT 1`,
      [email],
    );
    const identity = identityRes.rows[0];
    if (!identity) {
      return genericSuccess();
    }

    const origin = getCanonicalAppOrigin(request);
    const now = Date.now();
    const expiresAt = new Date(now + 15 * 60 * 1000);

    const output = await withTransaction(async (client) => {
      const recentCountRes = await client.query<{ cnt: string }>(
        `
        SELECT COUNT(*)::text AS cnt
        FROM auth_magic_links
        WHERE identity_id = $1
          AND created_at > now() - interval '15 minutes'
        `,
        [identity.id],
      );
      const cnt = Number(recentCountRes.rows[0]?.cnt || '0');
      if (Number.isFinite(cnt) && cnt >= 5) {
        return { throttled: true, magicLinkUrl: null as string | null };
      }

      const { rawToken, tokenHash } = createMagicLinkToken();
      const inserted = await client.query<{ id: string }>(
        `INSERT INTO auth_magic_links (identity_id, token_hash, expires_at)
         VALUES ($1, $2, $3)
         RETURNING id`,
        [identity.id, tokenHash, expiresAt.toISOString()],
      );

      const magicLinkUrl = `${origin}/api/auth/verify?token=${rawToken}`;
      const emailLogId = await logEmail('auth_magic_link', identity.email, 'QUEUED', 'AUTH_MAGIC_LINK', inserted.rows[0].id, client);

      return { throttled: false, magicLinkUrl, emailLogId };
    });

    if (!output.throttled && output.magicLinkUrl && output.emailLogId) {
      fireEmail(output.emailLogId, email, { templateKey: 'auth_magic_link', magicLinkUrl: output.magicLinkUrl });
    }

    if (wantsHtmlRedirect(request)) {
      return NextResponse.redirect(new URL('/auth/check-email', request.url), 303);
    }

    // For local/dev ergonomics: allow copying the link without wiring an email provider yet.
    const includeDevLink = process.env.NODE_ENV !== 'production';
    return NextResponse.json({
      ok: true,
      throttled: output.throttled,
      ...(includeDevLink && output.magicLinkUrl ? { magic_link_url: output.magicLinkUrl } : {}),
    });
  } catch (error) {
    console.error('[auth/request-link] Failed to request login link', {
      name: error instanceof Error ? error.name : 'UnknownError',
      message: error instanceof Error ? error.message : String(error),
    });
    return jsonError('Failed to request login link', 500);
  }
}
