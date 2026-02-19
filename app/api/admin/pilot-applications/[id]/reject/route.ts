import { NextRequest, NextResponse } from 'next/server';

import { logPilotApplicationEvent } from '@/lib/server/audit';
import { AuthError, requireAdminAccess } from '@/lib/server/auth';
import { withTransaction } from '@/lib/server/database';
import { jsonError, parseBody } from '@/lib/server/http';

export const runtime = 'nodejs';

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { adminId } = await requireAdminAccess(request);
    const { id } = await params;
    const payload = await parseBody(request);
    const reason = typeof payload.reason === 'string' ? payload.reason.trim().slice(0, 1000) : null;

    await withTransaction(async (client) => {
      const found = await client.query<{ id: string }>(`SELECT id FROM pilot_applications WHERE id = $1 FOR UPDATE`, [id]);
      if (!found.rows[0]) {
        throw new Error('Pilot application not found');
      }

      await client.query(
        `UPDATE pilot_applications
         SET status = 'REJECTED', review_notes = $2, reviewed_by_admin_id = $3, reviewed_at = now(), updated_at = now()
         WHERE id = $1`,
        [id, reason, adminId],
      );

      await logPilotApplicationEvent(
        id,
        'APPLICATION_REJECTED',
        { reason: reason ?? 'No reason provided' },
        'ADMIN',
        adminId,
        client,
      );
    });

    return NextResponse.json({ application_id: id, status: 'REJECTED' });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to reject pilot application';
    if (error instanceof AuthError) {
      return jsonError(message, 401);
    }
    const status = message.includes('not found') ? 404 : 400;
    return jsonError(message, status);
  }
}
