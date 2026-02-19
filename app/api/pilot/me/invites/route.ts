import { NextRequest, NextResponse } from 'next/server';

import { AuthError, requirePilotAccess } from '@/lib/server/auth';
import { query } from '@/lib/server/database';
import { jsonError } from '@/lib/server/http';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const { pilotId } = await requirePilotAccess(request);

    const result = await query(
      `
      SELECT
        pi.id AS invitation_id,
        pi.enquiry_id,
        pi.invite_round,
        pi.status::text AS invite_status,
        pi.sent_at::text,
        pi.opened_at::text,
        e.service_slug,
        e.date_needed::text AS date_needed,
        e.date_flexibility::text AS date_flexibility,
        e.site_location_text,
        e.postcode
      FROM pilot_invitations pi
      JOIN enquiries e ON e.id = pi.enquiry_id
      WHERE pi.pilot_id = $1
      ORDER BY pi.sent_at DESC
      LIMIT 200
      `,
      [pilotId],
    );

    return NextResponse.json({ items: result.rows });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load invites';
    if (error instanceof AuthError) {
      return jsonError(message, 401);
    }
    return jsonError(message, 500);
  }
}
