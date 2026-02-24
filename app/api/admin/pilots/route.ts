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

    const active = request.nextUrl.searchParams.get('active');
    const search = request.nextUrl.searchParams.get('search');
    const limit = Number(request.nextUrl.searchParams.get('limit') || 100);
    const cursor = parseCursor(request.nextUrl.searchParams.get('cursor'));
    const pageSize = Math.max(1, Math.min(limit, 200));

    const values: unknown[] = [];
    const where: string[] = [];

    if (active !== null && active !== '') {
      values.push(active === 'true');
      where.push(`p.active = $${values.length}`);
    }

    if (search) {
      values.push(`%${search}%`);
      const idx = values.length;
      where.push(
        `(p.name ILIKE $${idx} OR p.email ILIKE $${idx} OR p.business_name ILIKE $${idx})`,
      );
    }

    if (cursor) {
      values.push(cursor.createdAt, cursor.id);
      where.push(`(p.created_at, p.id) < ($${values.length - 1}::timestamptz, $${values.length}::uuid)`);
    }

    values.push(pageSize);
    const limitParam = `$${values.length}`;

    const result = await query(
      `
      SELECT
        p.id, p.name, p.business_name, p.email, p.phone, p.active,
        p.licence_level, p.insurance_provider, p.insurance_expiry,
        p.tier::text, p.slug, p.integrated_confirmed_at,
        p.created_at, p.updated_at
      FROM pilots p
      ${where.length ? `WHERE ${where.join(' AND ')}` : ''}
      ORDER BY p.created_at DESC, p.id DESC
      LIMIT ${limitParam}
      `,
      values,
    );

    const rows = result.rows as Array<{ id: string; created_at: string }>;
    const last = rows.at(-1);
    const nextCursor = rows.length === pageSize && last ? `${last.created_at}|${last.id}` : null;

    return NextResponse.json({ pilots: rows, next_cursor: nextCursor });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load pilots';
    const status = error instanceof AuthError ? 401 : 500;
    return jsonError(message, status);
  }
}
