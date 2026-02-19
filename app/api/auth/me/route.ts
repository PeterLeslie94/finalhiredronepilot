import { NextRequest, NextResponse } from 'next/server';

import { getOptionalSessionIdentity } from '@/lib/server/auth';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const identity = await getOptionalSessionIdentity(request);
  if (!identity) {
    return NextResponse.json({ authenticated: false });
  }

  return NextResponse.json({
    authenticated: true,
    email: identity.email,
    role: identity.role,
    admin_id: identity.admin_id,
    pilot_id: identity.pilot_id,
    session_expires_at: identity.expires_at,
  });
}

