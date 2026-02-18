import { NextResponse } from 'next/server';

import { query } from '@/lib/server/database';
import { jsonError } from '@/lib/server/http';
import { hashToken } from '@/lib/server/security';

export const runtime = 'nodejs';

export async function GET(_request: Request, { params }: { params: Promise<{ token: string }> }) {
  try {
    const { token } = await params;
    const tokenHash = hashToken(token);

    const result = await query<{
      invitation_id: string;
      enquiry_id: string;
      token_expires_at: string;
      invite_status: string;
      pilot_id: string;
      pilot_name: string;
      pilot_email: string;
      service_slug: string;
      date_needed: string | null;
      date_flexibility: string;
      site_location_text: string;
      postcode: string;
      job_details: string;
      brief_text: string | null;
      bid_id: string | null;
      bid_status: string | null;
      bid_price_amount: string | null;
      bid_eta_days: number | null;
      bid_submitted_at: string | null;
    }>(
      `
      SELECT
        pi.id AS invitation_id,
        pi.enquiry_id,
        pi.token_expires_at::text,
        pi.status::text AS invite_status,
        p.id AS pilot_id,
        p.name AS pilot_name,
        p.email AS pilot_email,
        e.service_slug,
        e.date_needed::text,
        e.date_flexibility::text,
        e.site_location_text,
        e.postcode,
        e.job_details,
        ebv.content_text AS brief_text,
        b.id AS bid_id,
        b.status::text AS bid_status,
        b.price_amount::text AS bid_price_amount,
        b.eta_days AS bid_eta_days,
        b.submitted_at::text AS bid_submitted_at
      FROM pilot_invitations pi
      JOIN pilots p ON p.id = pi.pilot_id
      JOIN enquiries e ON e.id = pi.enquiry_id
      LEFT JOIN enquiry_brief_versions ebv ON ebv.id = e.approved_brief_version_id
      LEFT JOIN bids b ON b.invitation_id = pi.id
      WHERE pi.token_hash = $1
      LIMIT 1
      `,
      [tokenHash],
    );

    const row = result.rows[0];
    if (!row) {
      return jsonError('Invite not found', 404);
    }

    const now = Date.now();
    const expiresAt = new Date(row.token_expires_at).getTime();
    if (Number.isFinite(expiresAt) && now > expiresAt) {
      await query(`UPDATE pilot_invitations SET status = 'EXPIRED' WHERE id = $1 AND status <> 'SUBMITTED'`, [row.invitation_id]);
      return jsonError('Invite link has expired', 410);
    }

    if (row.invite_status !== 'SUBMITTED') {
      await query(
        `UPDATE pilot_invitations
         SET status = 'OPENED', opened_at = COALESCE(opened_at, now())
         WHERE id = $1 AND status = 'SENT'`,
        [row.invitation_id],
      );
    }

    return NextResponse.json({
      invitation_id: row.invitation_id,
      enquiry_id: row.enquiry_id,
      invite_status: row.invite_status,
      expires_at: row.token_expires_at,
      pilot: {
        id: row.pilot_id,
        name: row.pilot_name,
        email: row.pilot_email,
      },
      brief: row.brief_text || row.job_details,
      enquiry: {
        service_slug: row.service_slug,
        date_needed: row.date_needed,
        date_flexibility: row.date_flexibility,
        site_location_text: row.site_location_text,
        postcode: row.postcode,
      },
      bid: row.bid_id
        ? {
            id: row.bid_id,
            status: row.bid_status,
            price_amount: row.bid_price_amount,
            eta_days: row.bid_eta_days,
            submitted_at: row.bid_submitted_at,
          }
        : null,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load invite';
    return jsonError(message, 400);
  }
}
