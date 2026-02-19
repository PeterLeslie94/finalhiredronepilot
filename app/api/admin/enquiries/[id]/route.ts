import { NextRequest, NextResponse } from 'next/server';

import { AuthError, requireAdminAccess } from '@/lib/server/auth';
import { query } from '@/lib/server/database';
import { jsonError } from '@/lib/server/http';

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
