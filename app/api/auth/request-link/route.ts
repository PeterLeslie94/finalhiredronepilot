import { NextRequest, NextResponse } from 'next/server';

import { logEmail } from '@/lib/server/audit';
import { query, withTransaction } from '@/lib/server/database';
import { fireEmail } from '@/lib/server/email';
import { jsonError, parseBody, wantsHtmlRedirect } from '@/lib/server/http';
import { createMagicLinkToken } from '@/lib/server/security';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type IdentityRow = {
  id: string;
  email: string;
  role: 'ADMIN' | 'DRONE_PILOT';
};

export async function POST(request: NextRequest) {
  try {
    const payload = await parseBody(request);
    const emailRaw = typeof payload.email === 'string' ? payload.email : '';
    const email = emailRaw.trim().toLowerCase().slice(0, 200);

    // Always return a generic success response to avoid account enumeration.
    const genericSuccess = () => {
      if (wantsHtmlRedirect(request)) {
        return NextResponse.redirect(new URL('/auth/check-email', request.url), 303);
      }
      return NextResponse.json({ ok: true });
    };

    if (!EMAIL_RE.test(email)) {
      // Generic response even for invalid email to avoid subtle enumeration.
      return genericSuccess();
    }

    const identityRes = await query<IdentityRow>(
      `SELECT id, email, role FROM user_identities WHERE email = $1 LIMIT 1`,
      [email],
    );
    const identity = identityRes.rows[0];
    if (!identity) {
      return genericSuccess();
    }

    const origin = new URL(request.url).origin;
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
    const message = error instanceof Error ? error.message : 'Failed to request login link';
    return jsonError(message, 500);
  }
}

