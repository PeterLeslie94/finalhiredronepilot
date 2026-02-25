import { NextResponse } from 'next/server';

import { query } from '@/lib/server/database';
import { jsonError } from '@/lib/server/http';
import { hashToken } from '@/lib/server/security';

export const runtime = 'nodejs';
const INVITE_TOKEN_TTL_DAYS = Math.max(1, Number(process.env.PILOT_INVITE_TOKEN_TTL_DAYS || 30));

function hasInviteExpired(sentAtRaw: string): boolean {
  const sentAtMs = new Date(sentAtRaw).getTime();
  if (!Number.isFinite(sentAtMs)) return true;
  const ttlMs = INVITE_TOKEN_TTL_DAYS * 24 * 60 * 60 * 1000;
  return Date.now() > sentAtMs + ttlMs;
}

export async function GET(_request: Request, { params }: { params: Promise<{ token: string }> }) {
  try {
    const { token } = await params;
    const tokenHash = hashToken(token);

    const result = await query<{
      invitation_id: string;
      enquiry_id: string;
      invite_status: string;
      sent_at: string;
      pilot_id: string;
      pilot_name: string;
      pilot_email: string;
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
        pi.sent_at::text AS sent_at,
        p.id AS pilot_id,
        p.name AS pilot_name,
        p.email AS pilot_email,
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
      JOIN pilots p ON p.id = pi.pilot_id
      JOIN enquiries e ON e.id = pi.enquiry_id
      WHERE pi.token_hash = $1
      LIMIT 1
      `,
      [tokenHash],
    );

    const row = result.rows[0];
    if (!row) {
      return jsonError('Invite not found', 404);
    }

    if (row.invite_status !== 'SENT' && row.invite_status !== 'OPENED') {
      return jsonError('Invite not found', 404);
    }

    if (hasInviteExpired(row.sent_at)) {
      await query(
        `UPDATE pilot_invitations
         SET status = 'EXPIRED'
         WHERE id = $1 AND status IN ('SENT', 'OPENED')`,
        [row.invitation_id],
      ).catch(() => {});
      return jsonError('Invite expired', 410);
    }

    // Mark as opened (best-effort)
    await query(
      `UPDATE pilot_invitations
       SET status = 'OPENED', opened_at = COALESCE(opened_at, now())
       WHERE id = $1 AND status = 'SENT'`,
      [row.invitation_id],
    ).catch(() => {});

    return NextResponse.json({
      invitation_id: row.invitation_id,
      enquiry_id: row.enquiry_id,
      invite_status: row.invite_status,
      pilot: {
        id: row.pilot_id,
        name: row.pilot_name,
        email: row.pilot_email,
      },
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
  } catch {
    return jsonError('Failed to load invite', 500);
  }
}
