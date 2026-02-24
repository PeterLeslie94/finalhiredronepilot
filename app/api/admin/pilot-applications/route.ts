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
    const limit = Number(request.nextUrl.searchParams.get('limit') || 50);
    const cursor = parseCursor(request.nextUrl.searchParams.get('cursor'));
    const pageSize = Math.max(1, Math.min(limit, 200));

    const values: unknown[] = [];
    const where: string[] = [];

    if (status) {
      values.push(status);
      where.push(`status = $${values.length}`);
    }

    if (cursor) {
      values.push(cursor.createdAt, cursor.id);
      where.push(`(created_at, id) < ($${values.length - 1}::timestamptz, $${values.length}::uuid)`);
    }

    values.push(pageSize);
    const limitParam = `$${values.length}`;

    const sql = `
      SELECT
        id,
        pilot_name,
        business_name,
        email,
        phone,
        licence_level,
        insurance_expiry,
        insurance_provider,
        flyer_id,
        operator_id,
        website_url,
        two_sentence_summary,
        review_notes,
        status,
        backlink_confirmed_at,
        created_at,
        reviewed_at
      FROM pilot_applications
      ${where.length ? `WHERE ${where.join(' AND ')}` : ''}
      ORDER BY created_at DESC, id DESC
      LIMIT ${limitParam}
    `;

    const result = await query(sql, values);
    const rows = result.rows as Array<{ id: string; created_at: string }>;
    const last = rows.at(-1);
    const nextCursor = rows.length === pageSize && last ? `${last.created_at}|${last.id}` : null;

    return NextResponse.json({ items: rows, next_cursor: nextCursor });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load pilot applications';
    const status = error instanceof AuthError ? 401 : 500;
    return jsonError(message, status);
  }
}
