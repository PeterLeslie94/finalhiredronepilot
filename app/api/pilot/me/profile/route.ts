import { NextRequest, NextResponse } from 'next/server';

import { AuthError, requirePilotAccess } from '@/lib/server/auth';
import { query } from '@/lib/server/database';
import { jsonError, parseBody } from '@/lib/server/http';
import { validatePilotProfilePayload } from '@/lib/server/validation';

export const runtime = 'nodejs';

type PilotProfileRow = {
  id: string;
  name: string;
  business_name: string | null;
  email: string;
  phone: string | null;
  website_url: string | null;
  profile_photo_url: string | null;
  two_sentence_summary: string | null;
  insurance_provider: string | null;
  insurance_expiry: string | null;
  flyer_id: string | null;
  operator_id: string | null;
  licence_level: string | null;
  created_at: string;
  updated_at: string;
};

export async function GET(request: NextRequest) {
  try {
    const { pilotId, email } = await requirePilotAccess(request);

    const result = await query<PilotProfileRow>(
      `
      SELECT
        p.id,
        p.name,
        p.business_name,
        $2::text AS email,
        p.phone,
        p.website_url,
        p.profile_photo_url,
        p.two_sentence_summary,
        p.insurance_provider,
        p.insurance_expiry::text AS insurance_expiry,
        p.flyer_id,
        p.operator_id,
        p.licence_level,
        p.created_at::text AS created_at,
        p.updated_at::text AS updated_at
      FROM pilots p
      WHERE p.id = $1
      LIMIT 1
      `,
      [pilotId, email],
    );

    const row = result.rows[0];
    if (!row) {
      return jsonError('Pilot profile not found', 404);
    }

    return NextResponse.json({ profile: row });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load profile';
    if (error instanceof AuthError) {
      return jsonError(message, 401);
    }
    return jsonError(message, 500);
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { pilotId } = await requirePilotAccess(request);
    const payload = await parseBody(request);
    const data = validatePilotProfilePayload(payload);

    const result = await query(
      `
      UPDATE pilots
      SET
        name = $2,
        business_name = $3,
        phone = $4,
        website_url = $5,
        profile_photo_url = $6,
        two_sentence_summary = $7,
        insurance_provider = $8,
        insurance_expiry = $9,
        flyer_id = $10,
        operator_id = $11,
        updated_at = now()
      WHERE id = $1
      RETURNING id
      `,
      [
        pilotId,
        data.name,
        data.business_name,
        data.phone,
        data.website_url,
        data.profile_photo_url,
        data.two_sentence_summary,
        data.insurance_provider,
        data.insurance_expiry,
        data.flyer_id,
        data.operator_id,
      ],
    );

    if (result.rowCount === 0) {
      return jsonError('Pilot not found', 404);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to update profile';
    if (error instanceof AuthError) {
      return jsonError(message, 401);
    }
    return jsonError(message, 400);
  }
}
