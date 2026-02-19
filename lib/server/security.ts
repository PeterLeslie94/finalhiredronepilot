import crypto from 'crypto';

export function createInvitationToken(): { rawToken: string; tokenHash: string } {
  const rawToken = crypto.randomBytes(24).toString('hex');
  const tokenHash = hashToken(rawToken);
  return { rawToken, tokenHash };
}

function createToken(bytes: number): { rawToken: string; tokenHash: string } {
  const rawToken = crypto.randomBytes(bytes).toString('hex');
  const tokenHash = hashToken(rawToken);
  return { rawToken, tokenHash };
}

export function createMagicLinkToken(): { rawToken: string; tokenHash: string } {
  return createToken(32);
}

export function createSessionToken(): { rawToken: string; tokenHash: string } {
  return createToken(32);
}

export function hashToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex');
}
