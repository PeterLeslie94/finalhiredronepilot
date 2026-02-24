import { NextRequest, NextResponse } from 'next/server';

import { AuthError, requireAdminAccess } from '@/lib/server/auth';
import { query } from '@/lib/server/database';
import { jsonError } from '@/lib/server/http';

export const runtime = 'nodejs';

function parseCursor(cursor: string | null): { createdAt: string; id: string } | null {
  if (!cursor) return null;
  const [createdAt, id] = cursor.split('|');
  if (!createdAt || !id) return null;
  return { createdAt, id };
}

export async function GET(request: NextRequest) {
  try {
    await requireAdminAccess(request);

    const status = request.nextUrl.searchParams.get('status');
    const limit = Number(request.nextUrl.searchParams.get('limit') || 100);
    const cursor = parseCursor(request.nextUrl.searchParams.get('cursor'));
    const pageSize = Math.max(1, Math.min(limit, 200));

    const values: unknown[] = [];
    const where: string[] = [];
    if (status) {
      values.push(status);
      where.push(`e.status = $${values.length}`);
    }

    if (cursor) {
      values.push(cursor.createdAt, cursor.id);
      where.push(`(e.created_at, e.id) < ($${values.length - 1}::timestamptz, $${values.length}::uuid)`);
    }

    values.push(pageSize);
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
      ORDER BY e.created_at DESC, e.id DESC
      LIMIT ${limitParam}
      `,
      values,
    );

    const rows = result.rows as Array<{ id: string; created_at: string }>;
    const last = rows.at(-1);
    const nextCursor = rows.length === pageSize && last ? `${last.created_at}|${last.id}` : null;

    return NextResponse.json({ items: rows, next_cursor: nextCursor });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load enquiries';
    const status = error instanceof AuthError ? 401 : 500;
    return jsonError(message, status);
  }
}
