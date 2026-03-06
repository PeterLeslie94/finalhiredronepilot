import { NextRequest } from 'next/server';

import { query } from '@/lib/server/database';
import { hashToken } from '@/lib/server/security';

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

export type AuthRole = 'ADMIN' | 'DRONE_PILOT';

export type SessionIdentity = {
  session_id: string;
  identity_id: string;
  email: string;
  role: AuthRole;
  admin_id: string | null;
  pilot_id: string | null;
  expires_at: string;
  revoked_at: string | null;
};

export const SESSION_COOKIE_NAME = 'hdp_session';
export type AdminAccess = { adminId: string; identityId: string; email: string };

function normalizeSessionToken(rawSessionToken: string | null | undefined): string | null {
  const token = rawSessionToken?.trim() || '';
  return token || null;
}

function getSessionTokenFromRequest(request: NextRequest): string | null {
  return normalizeSessionToken(request.cookies.get(SESSION_COOKIE_NAME)?.value ?? null);
}

async function getSessionIdentityByToken(rawSessionToken: string): Promise<SessionIdentity | null> {
  const tokenHash = hashToken(rawSessionToken);
  const result = await query<SessionIdentity>(
    `
    SELECT
      s.id AS session_id,
      s.identity_id,
      i.email,
      i.role,
      i.admin_id,
      i.pilot_id,
      s.expires_at::text,
      s.revoked_at::text
    FROM auth_sessions s
    JOIN user_identities i ON i.id = s.identity_id
    WHERE s.session_token_hash = $1
    LIMIT 1
    `,
    [tokenHash],
  );
  return result.rows[0] || null;
}

export async function getOptionalSessionIdentityBySessionToken(
  rawSessionToken: string | null,
): Promise<SessionIdentity | null> {
  const normalizedToken = normalizeSessionToken(rawSessionToken);
  if (!normalizedToken) return null;

  const identity = await getSessionIdentityByToken(normalizedToken);
  if (!identity) return null;

  if (identity.revoked_at) return null;

  const now = Date.now();
  const expiresAtMs = new Date(identity.expires_at).getTime();
  if (Number.isFinite(expiresAtMs) && now > expiresAtMs) {
    return null;
  }

  // Best-effort last_seen_at update; don't fail the request if it errors.
  void query(`UPDATE auth_sessions SET last_seen_at = now() WHERE id = $1`, [identity.session_id]).catch(() => {});

  return identity;
}

export async function getOptionalSessionIdentity(request: NextRequest): Promise<SessionIdentity | null> {
  return getOptionalSessionIdentityBySessionToken(getSessionTokenFromRequest(request));
}

export async function requireAdminAccessFromSessionToken(rawSessionToken: string | null): Promise<AdminAccess> {
  const identity = await getOptionalSessionIdentityBySessionToken(rawSessionToken);
  if (!identity) {
    throw new AuthError('Authentication required');
  }
  if (identity.role !== 'ADMIN' || !identity.admin_id) {
    throw new AuthError('Admin access required');
  }
  return { adminId: identity.admin_id, identityId: identity.identity_id, email: identity.email };
}

export async function requireAdminAccess(request: NextRequest): Promise<AdminAccess> {
  return requireAdminAccessFromSessionToken(getSessionTokenFromRequest(request));
}
