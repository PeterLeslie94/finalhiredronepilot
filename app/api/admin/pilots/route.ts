import { NextRequest, NextResponse } from 'next/server';

import { AuthError, requireAdminAccess } from '@/lib/server/auth';
import { query } from '@/lib/server/database';
import { jsonError } from '@/lib/server/http';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    await requireAdminAccess(request);

    const active = request.nextUrl.searchParams.get('active');
    const search = request.nextUrl.searchParams.get('search');

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

    const result = await query(
      `
      SELECT
        p.id, p.name, p.business_name, p.email, p.phone, p.active,
        p.licence_level, p.insurance_provider, p.insurance_expiry,
        p.tier::text, p.slug, p.integrated_confirmed_at,
        p.created_at, p.updated_at
      FROM pilots p
      ${where.length ? `WHERE ${where.join(' AND ')}` : ''}
      ORDER BY p.created_at DESC
      `,
      values,
    );

    return NextResponse.json({ pilots: result.rows });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load pilots';
    const status = error instanceof AuthError ? 401 : 500;
    return jsonError(message, status);
  }
}
