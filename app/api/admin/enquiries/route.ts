import { NextRequest, NextResponse } from 'next/server';

import { AuthError, requireAdminAccess } from '@/lib/server/auth';
import { query } from '@/lib/server/database';
import { jsonError } from '@/lib/server/http';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    await requireAdminAccess(request);

    const status = request.nextUrl.searchParams.get('status');
    const limit = Number(request.nextUrl.searchParams.get('limit') || 100);

    const values: unknown[] = [];
    const where: string[] = [];
    if (status) {
      values.push(status);
      where.push(`e.status = $${values.length}`);
    }
    values.push(Math.max(1, Math.min(limit, 200)));
    const limitParam = `$${values.length}`;

    const result = await query(
      `
      SELECT
        e.id,
        e.name,
        e.email,
        e.phone,
        e.service_slug,
        e.date_needed,
        e.date_flexibility,
        e.site_location_text,
        e.postcode,
        e.status,
        e.created_at,
        e.updated_at,
        COUNT(DISTINCT pi.id) AS invite_count
      FROM enquiries e
      LEFT JOIN pilot_invitations pi ON pi.enquiry_id = e.id
      ${where.length ? `WHERE ${where.join(' AND ')}` : ''}
      GROUP BY e.id
      ORDER BY e.created_at DESC
      LIMIT ${limitParam}
      `,
      values,
    );

    return NextResponse.json({ items: result.rows });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load enquiries';
    const status = error instanceof AuthError ? 401 : 500;
    return jsonError(message, status);
  }
}
