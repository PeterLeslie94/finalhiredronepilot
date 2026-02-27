import { NextRequest, NextResponse } from 'next/server';

import { AuthError, requireAdminAccess } from '@/lib/server/auth';
import { query } from '@/lib/server/database';
import { assertTrustedOrigin, jsonError, parseBody, RequestOriginError } from '@/lib/server/http';
import { validateAdminEnquiryUpdatePayload } from '@/lib/server/validation';

export const runtime = 'nodejs';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await requireAdminAccess(request);
    const { id } = await params;

    const enquiry = await query(
      `SELECT * FROM enquiries WHERE id = $1`,
      [id],
    );
    if (!enquiry.rows[0]) {
      return jsonError('Enquiry not found', 404);
    }

    const [events, invites, emailLogs] = await Promise.all([
      query(`SELECT * FROM enquiry_events WHERE enquiry_id = $1 ORDER BY created_at ASC`, [id]),
      query(
        `SELECT pi.*, p.name AS pilot_name, p.email AS pilot_email
         FROM pilot_invitations pi
         JOIN pilots p ON p.id = pi.pilot_id
         WHERE pi.enquiry_id = $1
         ORDER BY pi.invite_round ASC, pi.sent_at ASC`,
        [id],
      ),
      query(
        `SELECT * FROM email_logs
         WHERE related_entity_id = $1
         ORDER BY sent_at DESC NULLS LAST`,
        [id],
      ),
    ]);

    return NextResponse.json({
      enquiry: enquiry.rows[0],
      events: events.rows,
      invites: invites.rows,
      email_logs: emailLogs.rows,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load enquiry';
    const status = error instanceof AuthError ? 401 : 500;
    return jsonError(message, status);
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    assertTrustedOrigin(request);
    const { adminId } = await requireAdminAccess(request);
    const { id } = await params;
    const payload = await parseBody(request);

    if (payload.action === 'close') {
      const result = await query(
        `UPDATE enquiries
         SET status = 'CLOSED', closed_at = now(), updated_at = now()
         WHERE id = $1 AND status != 'CLOSED'
         RETURNING id`,
        [id],
      );

      if (result.rows.length === 0) {
        return jsonError('Enquiry not found or already closed', 404);
      }

      return NextResponse.json({ ok: true, status: 'CLOSED' });
    }

    if (payload.action === 'update_details') {
      const input = validateAdminEnquiryUpdatePayload(payload);
      const result = await query(
        `UPDATE enquiries
         SET service_slug = $2,
             date_needed = $3,
             date_flexibility = $4::date_flexibility,
             site_location_text = $5,
             postcode = $6,
             job_details = $7,
             updated_at = now()
         WHERE id = $1
         RETURNING *`,
        [
          id,
          input.service_slug,
          input.date_needed,
          input.date_flexibility,
          input.site_location_text,
          input.postcode,
          input.job_details,
        ],
      );
      if (!result.rows[0]) {
        return jsonError('Enquiry not found', 404);
      }

      await query(
        `INSERT INTO enquiry_events (enquiry_id, actor_type, actor_id, event_type, payload_json, created_at)
         VALUES ($1, 'ADMIN', $2, 'ENQUIRY_UPDATED', $3::jsonb, now())`,
        [
          id,
          adminId,
          JSON.stringify({
            service_slug: input.service_slug,
            date_flexibility: input.date_flexibility,
            date_needed: input.date_needed,
            site_location_text: input.site_location_text,
            postcode: input.postcode,
          }),
        ],
      );

      return NextResponse.json({ ok: true, enquiry: result.rows[0] });
    }

    return jsonError('Invalid action', 400);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to update enquiry';
    const status = error instanceof AuthError ? 401 : error instanceof RequestOriginError ? 403 : 500;
    return jsonError(message, status);
  }
}
