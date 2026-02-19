import { NextRequest, NextResponse } from 'next/server';

import { SESSION_COOKIE_NAME } from '@/lib/server/auth';
import { query } from '@/lib/server/database';
import { hashToken } from '@/lib/server/security';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const raw = request.cookies.get(SESSION_COOKIE_NAME)?.value?.trim() || '';

  if (raw) {
    const tokenHash = hashToken(raw);
    await query(`UPDATE auth_sessions SET revoked_at = now() WHERE session_token_hash = $1 AND revoked_at IS NULL`, [tokenHash]).catch(
      () => {},
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: '',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: new Date(0),
  });
  return response;
}

