import { NextRequest, NextResponse } from 'next/server';

import { SESSION_COOKIE_NAME } from '@/lib/server/auth';
import { withTransaction } from '@/lib/server/database';
import { createSessionToken, hashToken } from '@/lib/server/security';

export const runtime = 'nodejs';

type MagicLinkRow = {
  id: string;
  identity_id: string;
  expires_at: string;
  used_at: string | null;
  role: 'ADMIN' | 'DRONE_PILOT';
  admin_id: string | null;
  pilot_id: string | null;
};

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token')?.trim() || '';
  if (!token) {
    return NextResponse.redirect(new URL('/login?error=missing_token', request.url), 303);
  }

  try {
    const tokenHash = hashToken(token);
    const now = new Date();
    const sessionExpiry = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

    const result = await withTransaction(async (client) => {
      const found = await client.query<MagicLinkRow>(
        `
        SELECT
          ml.id,
          ml.identity_id,
          ml.expires_at::text,
          ml.used_at::text,
          i.role,
          i.admin_id,
          i.pilot_id
        FROM auth_magic_links ml
        JOIN user_identities i ON i.id = ml.identity_id
        WHERE ml.token_hash = $1
        FOR UPDATE
        `,
        [tokenHash],
      );
      const row = found.rows[0];
      if (!row) {
        throw new Error('Invalid link');
      }
      if (row.used_at) {
        throw new Error('Link already used');
      }
      const expiresAtMs = new Date(row.expires_at).getTime();
      if (Number.isFinite(expiresAtMs) && now.getTime() > expiresAtMs) {
        throw new Error('Link expired');
      }

      await client.query(`UPDATE auth_magic_links SET used_at = now() WHERE id = $1 AND used_at IS NULL`, [row.id]);

      const { rawToken: rawSessionToken, tokenHash: sessionTokenHash } = createSessionToken();
      await client.query(
        `INSERT INTO auth_sessions (identity_id, session_token_hash, expires_at)
         VALUES ($1, $2, $3)`,
        [row.identity_id, sessionTokenHash, sessionExpiry.toISOString()],
      );

      if (row.role === 'ADMIN' && row.admin_id) {
        await client.query(`UPDATE admins SET last_login_at = now() WHERE id = $1`, [row.admin_id]);
      }

      return { role: row.role, rawSessionToken };
    });

    const redirectTo = result.role === 'ADMIN' ? '/admin' : '/drone-pilot';
    const response = NextResponse.redirect(new URL(redirectTo, request.url), 303);
    response.cookies.set({
      name: SESSION_COOKIE_NAME,
      value: result.rawSessionToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      expires: sessionExpiry,
    });
    return response;
  } catch {
    return NextResponse.redirect(new URL('/login?error=invalid_or_expired', request.url), 303);
  }
}
