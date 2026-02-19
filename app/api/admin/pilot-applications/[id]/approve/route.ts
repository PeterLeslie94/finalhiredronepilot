import { NextRequest, NextResponse } from 'next/server';

import { logEmail, logPilotApplicationEvent } from '@/lib/server/audit';
import { AuthError, requireAdminAccess } from '@/lib/server/auth';
import { withTransaction } from '@/lib/server/database';
import { fireEmail } from '@/lib/server/email';
import { jsonError } from '@/lib/server/http';
import { createInvitationToken } from '@/lib/server/security';
import { generateUniqueSlug } from '@/lib/server/slugify';

export const runtime = 'nodejs';

type PilotApplicationRow = {
  id: string;
  pilot_name: string;
  business_name: string;
  email: string;
  phone: string;
  website_url: string | null;
  profile_photo_url: string | null;
  two_sentence_summary: string;
  insurance_provider: string;
  insurance_expiry: string | null;
  flyer_id: string;
  operator_id: string;
  licence_level: string;
  status: string;
  created_pilot_id: string | null;
};

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { adminId } = await requireAdminAccess(request);
    const { id } = await params;

    type ApproveResult =
      | { applicationId: string; pilotId: string; alreadyLinked: true }
      | { applicationId: string; pilotId: string; alreadyLinked: false; slug: string; rawToken: string; email: string; pilotName: string; websiteUrl: string | null };

    const result: ApproveResult = await withTransaction(async (client) => {
      const appResult = await client.query<PilotApplicationRow>(
        `SELECT * FROM pilot_applications WHERE id = $1 FOR UPDATE`,
        [id],
      );
      const app = appResult.rows[0];
      if (!app) {
        throw new Error('Pilot application not found');
      }

      if (app.created_pilot_id) {
        await client.query(
          `UPDATE pilot_applications
           SET status = 'APPROVED', reviewed_by_admin_id = $2, reviewed_at = now(), updated_at = now()
           WHERE id = $1`,
          [id, adminId],
        );
        return { applicationId: id, pilotId: app.created_pilot_id, alreadyLinked: true };
      }

      const slug = await generateUniqueSlug(app.pilot_name, client);
      const { rawToken, tokenHash } = createInvitationToken();

      const pilotInsert = await client.query<{ id: string }>(
        `INSERT INTO pilots
          (
            name,
            business_name,
            email,
            phone,
            website_url,
            profile_photo_url,
            two_sentence_summary,
            active,
            licence_level,
            insurance_provider,
            insurance_expiry,
            flyer_id,
            operator_id,
            slug,
            backlink_token_hash
          )
          VALUES ($1,$2,$3,$4,$5,$6,$7,true,$8,$9,$10,$11,$12,$13,$14)
          RETURNING id`,
        [
          app.pilot_name,
          app.business_name,
          app.email,
          app.phone,
          app.website_url,
          app.profile_photo_url,
          app.two_sentence_summary,
          app.licence_level,
          app.insurance_provider,
          app.insurance_expiry,
          app.flyer_id,
          app.operator_id,
          slug,
          tokenHash,
        ],
      );

      const pilotId = pilotInsert.rows[0].id;

      // Ensure the email is only ever associated to a drone pilot identity (never admin).
      const identityEmail = String(app.email || '').trim().toLowerCase();
      if (!identityEmail) {
        throw new Error('Pilot email is missing');
      }
      const existingIdentity = await client.query<{ id: string; role: string }>(
        `SELECT id, role::text FROM user_identities WHERE email = $1 LIMIT 1`,
        [identityEmail],
      );
      if (existingIdentity.rows[0] && existingIdentity.rows[0].role !== 'DRONE_PILOT') {
        throw new Error('Email is already registered as an admin account');
      }
      if (!existingIdentity.rows[0]) {
        await client.query(
          `INSERT INTO user_identities (email, role, pilot_id) VALUES ($1, 'DRONE_PILOT', $2)`,
          [identityEmail, pilotId],
        );
      }

      await client.query(
        `UPDATE pilot_applications
         SET status = 'APPROVED',
             reviewed_by_admin_id = $2,
             reviewed_at = now(),
             created_pilot_id = $3,
             updated_at = now()
         WHERE id = $1`,
        [id, adminId, pilotId],
      );

      await logPilotApplicationEvent(
        id,
        'APPLICATION_APPROVED',
        { pilot_id: pilotId },
        'ADMIN',
        adminId,
        client,
      );
      return {
        applicationId: id,
        pilotId,
        alreadyLinked: false,
        slug,
        rawToken,
        email: String(app.email),
        pilotName: String(app.pilot_name),
        websiteUrl: app.website_url,
      };
    });

    if (!result.alreadyLinked) {
      const emailLogId = await logEmail('pilot_approved', result.email, 'QUEUED', 'PILOT', result.pilotId);
      fireEmail(emailLogId, result.email, {
        templateKey: 'pilot_approved',
        pilotName: result.pilotName,
        pilotId: result.pilotId,
        slug: result.slug,
        backlinkToken: result.rawToken,
        websiteUrl: result.websiteUrl,
      });
    }

    return NextResponse.json({ applicationId: result.applicationId, pilotId: result.pilotId });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to approve pilot application';
    if (error instanceof AuthError) {
      return jsonError(message, 401);
    }
    const status = message.includes('not found') ? 404 : 400;
    return jsonError(message, status);
  }
}
