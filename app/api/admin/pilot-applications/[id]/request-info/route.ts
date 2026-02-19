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
    const message = typeof payload.message === 'string' ? payload.message.trim().slice(0, 1000) : '';

    if (!message) {
      return jsonError('message is required', 400);
    }

    await withTransaction(async (client) => {
      const found = await client.query<{ id: string }>(`SELECT id FROM pilot_applications WHERE id = $1 FOR UPDATE`, [id]);
      if (!found.rows[0]) {
        throw new Error('Pilot application not found');
      }

      await client.query(
        `UPDATE pilot_applications
         SET status = 'NEEDS_INFO', review_notes = $2, reviewed_by_admin_id = $3, reviewed_at = now(), updated_at = now()
         WHERE id = $1`,
        [id, message, adminId],
      );

      await logPilotApplicationEvent(
        id,
        'APPLICATION_NEEDS_INFO',
        { message },
        'ADMIN',
        adminId,
        client,
      );
    });

    return NextResponse.json({ application_id: id, status: 'NEEDS_INFO' });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to mark pilot application as needs-info';
    if (error instanceof AuthError) {
      return jsonError(message, 401);
    }
    const status = message.includes('not found') ? 404 : 400;
    return jsonError(message, status);
  }
}
