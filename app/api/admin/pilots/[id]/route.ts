import { NextRequest, NextResponse } from 'next/server';

import { AuthError, requireAdminAccess } from '@/lib/server/auth';
import { query } from '@/lib/server/database';
import { assertTrustedOrigin, jsonError, RequestOriginError } from '@/lib/server/http';
export const runtime = 'nodejs';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await requireAdminAccess(request);
    const { id } = await params;

    const result = await query(
      `SELECT
        id, name, business_name, email, phone, active,
        licence_level, insurance_provider, insurance_expiry,
        notes, profile_photo_url, two_sentence_summary,
        website_url, flyer_id, operator_id,
        tier::text, slug, integrated_confirmed_at, backlink_token_hash,
        created_at, updated_at
      FROM pilots
      WHERE id = $1`,
      [id],
    );

    if (!result.rows[0]) {
      return jsonError('Pilot not found', 404);
    }

    return NextResponse.json({ pilot: result.rows[0] });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load pilot';
    const status = error instanceof AuthError ? 401 : 500;
    return jsonError(message, status);
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    assertTrustedOrigin(request);
    await requireAdminAccess(request);
    const { id } = await params;

    const body = (await request.json()) as Record<string, unknown>;

    // Fields that admin can edit
    const allowedFields: Record<string, (v: unknown) => unknown> = {
      active: (v) => {
        if (typeof v !== 'boolean') {
          throw new Error('active must be a boolean');
        }
        return v;
      },
      notes: (v) => (typeof v === 'string' ? v : null),
      name: (v) => {
        if (typeof v !== 'string' || !v.trim()) throw new Error('name must be a non-empty string');
        return v.trim();
      },
      business_name: (v) => (typeof v === 'string' ? v.trim() : null),
      phone: (v) => (typeof v === 'string' ? v.trim() : null),
      licence_level: (v) => (typeof v === 'string' ? v.trim() : null),
      insurance_provider: (v) => (typeof v === 'string' ? v.trim() : null),
      insurance_expiry: (v) => (typeof v === 'string' ? v.trim() : null),
      two_sentence_summary: (v) => (typeof v === 'string' ? v.trim() : null),
      website_url: (v) => (typeof v === 'string' ? v.trim() : null),
      flyer_id: (v) => (typeof v === 'string' ? v.trim() : null),
      operator_id: (v) => (typeof v === 'string' ? v.trim() : null),
      profile_photo_url: (v) => (typeof v === 'string' ? v.trim() : null),
      tier: (v) => {
        if (typeof v !== 'string' || !['VERIFIED_OPERATOR', 'INTEGRATED_OPERATOR'].includes(v)) {
          throw new Error('tier must be VERIFIED_OPERATOR or INTEGRATED_OPERATOR');
        }
        return v;
      },
    };

    const enumCastFields: Record<string, string> = {
      tier: '::pilot_tier_v2',
    };

    const setClauses: string[] = [];
    const values: unknown[] = [];

    for (const [field, validator] of Object.entries(allowedFields)) {
      if (field in body) {
        const validated = validator(body[field]);
        values.push(validated);
        const cast = enumCastFields[field] || '';
        setClauses.push(`${field} = $${values.length}${cast}`);
      }
    }

    if (setClauses.length === 0) {
      return jsonError('No valid fields provided for update', 400);
    }

    // Add updated_at
    setClauses.push('updated_at = now()');

    values.push(id);
    const idParam = `$${values.length}`;

    const result = await query(
      `UPDATE pilots SET ${setClauses.join(', ')} WHERE id = ${idParam} RETURNING *`,
      values,
    );

    if (!result.rows[0]) {
      return jsonError('Pilot not found', 404);
    }

    return NextResponse.json({ pilot: result.rows[0] });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to update pilot';
    const status = error instanceof AuthError ? 401 : error instanceof RequestOriginError ? 403 : 500;
    return jsonError(message, status);
  }
}
