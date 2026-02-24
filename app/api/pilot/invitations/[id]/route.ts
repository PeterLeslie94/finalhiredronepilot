import { NextRequest, NextResponse } from 'next/server';

import { AuthError, requirePilotAccess } from '@/lib/server/auth';
import { query } from '@/lib/server/database';
import { jsonError, parseBody } from '@/lib/server/http';

export const runtime = 'nodejs';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { pilotId } = await requirePilotAccess(request);
    const { id } = await params;

    const result = await query<{
      invitation_id: string;
      enquiry_id: string;
      invite_status: string;
      invite_round: number;
      sent_at: string;
      opened_at: string | null;
      service_slug: string;
      date_needed: string | null;
      date_flexibility: string;
      site_location_text: string;
      postcode: string;
      job_details: string;
      client_name: string;
      client_email: string;
      client_phone: string;
    }>(
      `
      SELECT
        pi.id AS invitation_id,
        pi.enquiry_id,
        pi.status::text AS invite_status,
        pi.invite_round,
        pi.sent_at::text,
        pi.opened_at::text,
        e.service_slug,
        e.date_needed::text,
        e.date_flexibility::text,
        e.site_location_text,
        e.postcode,
        e.job_details,
        e.name AS client_name,
        e.email AS client_email,
        e.phone AS client_phone
      FROM pilot_invitations pi
      JOIN enquiries e ON e.id = pi.enquiry_id
      WHERE pi.id = $1 AND pi.pilot_id = $2
      LIMIT 1
      `,
      [id, pilotId],
    );

    const row = result.rows[0];
    if (!row) {
      return jsonError('Invitation not found', 404);
    }

    // Mark invite as opened (best-effort).
    if (row.invite_status === 'SENT') {
      void query(
        `UPDATE pilot_invitations SET status = 'OPENED', opened_at = COALESCE(opened_at, now()) WHERE id = $1 AND status = 'SENT'`,
        [row.invitation_id],
      ).catch(() => {});
    }

    return NextResponse.json({
      invitation_id: row.invitation_id,
      enquiry_id: row.enquiry_id,
      invite_status: row.invite_status,
      invite_round: row.invite_round,
      sent_at: row.sent_at,
      opened_at: row.opened_at,
      brief: row.job_details,
      enquiry: {
        service_slug: row.service_slug,
        date_needed: row.date_needed,
        date_flexibility: row.date_flexibility,
        site_location_text: row.site_location_text,
        postcode: row.postcode,
      },
      client: {
        name: row.client_name,
        email: row.client_email,
        phone: row.client_phone,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load invitation';
    if (error instanceof AuthError) {
      return jsonError(message, 401);
    }
    return jsonError(message, 500);
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { pilotId } = await requirePilotAccess(request);
    const { id } = await params;
    const payload = await parseBody(request);

    if (payload.action !== 'decline') {
      return jsonError('Invalid action', 400);
    }

    const result = await query(
      `UPDATE pilot_invitations
       SET status = 'DECLINED'
       WHERE id = $1 AND pilot_id = $2 AND status IN ('SENT', 'OPENED')
       RETURNING id`,
      [id, pilotId],
    );

    if (result.rows.length === 0) {
      return jsonError('Invitation not found or cannot be declined', 404);
    }

    return NextResponse.json({ ok: true, status: 'DECLINED' });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to decline invitation';
    if (error instanceof AuthError) {
      return jsonError(message, 401);
    }
    return jsonError(message, 500);
  }
}
