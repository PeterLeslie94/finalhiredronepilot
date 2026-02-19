import { NextRequest, NextResponse } from 'next/server';

import { AuthError, requireAdminAccess } from '@/lib/server/auth';
import { query } from '@/lib/server/database';
import { jsonError } from '@/lib/server/http';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    await requireAdminAccess(request);

    const status = request.nextUrl.searchParams.get('status');
    const limit = Number(request.nextUrl.searchParams.get('limit') || 50);

    const values: unknown[] = [];
    const where: string[] = [];

    if (status) {
      values.push(status);
      where.push(`status = $${values.length}`);
    }

    values.push(Math.max(1, Math.min(limit, 200)));
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
      ORDER BY created_at DESC
      LIMIT ${limitParam}
    `;

    const result = await query(sql, values);
    return NextResponse.json({ items: result.rows });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load pilot applications';
    const status = error instanceof AuthError ? 401 : 500;
    return jsonError(message, status);
  }
}
