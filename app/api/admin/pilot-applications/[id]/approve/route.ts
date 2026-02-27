import { NextRequest, NextResponse } from 'next/server';

import { logEmail, logPilotApplicationEvent } from '@/lib/server/audit';
import { AuthError, requireAdminAccess } from '@/lib/server/auth';
import { withTransaction } from '@/lib/server/database';
import { fireEmail } from '@/lib/server/email';
import { assertTrustedOrigin, jsonError, RequestOriginError } from '@/lib/server/http';
import { createInvitationToken } from '@/lib/server/security';
import { generateUniqueSlug } from '@/lib/server/slugify';

export const runtime = 'nodejs';
const BACKLINK_TOKEN_TTL_DAYS = Math.max(1, Number(process.env.BACKLINK_TOKEN_TTL_DAYS || 30));

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
  base_city: string | null;
  coverage_uk_wide: boolean;
  coverage_regions: string[] | null;
  coverage_notes: string | null;
  availability_status: string | null;
  google_business_profile_url: string | null;
  linkedin_url: string | null;
  instagram_url: string | null;
  youtube_url: string | null;
  facebook_url: string | null;
  total_projects_completed: number | null;
  years_experience: number | null;
  drone_flight_hours_total: number | null;
  drones_owned_total: number | null;
  avg_quote_turnaround_hours: number | null;
  data_delivery_min_days: number | null;
  data_delivery_max_days: number | null;
  member_since_year: number | null;
  top_service_slugs: string[] | null;
  top_service_ratings_json: unknown;
  additional_services_note: string | null;
  equipment_items_json: unknown;
  portfolio_items_json: unknown;
  faq_coverage_answer: string | null;
  faq_qualifications_answer: string | null;
  faq_turnaround_answer: string | null;
  faq_formats_answer: string | null;
  faq_permissions_answer: string | null;
  status: string;
  created_pilot_id: string | null;
};

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    assertTrustedOrigin(request);
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
      const backlinkTokenExpiresAt = new Date(Date.now() + BACKLINK_TOKEN_TTL_DAYS * 24 * 60 * 60 * 1000);

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
            base_city,
            coverage_uk_wide,
            coverage_regions,
            coverage_notes,
            availability_status,
            google_business_profile_url,
            linkedin_url,
            instagram_url,
            youtube_url,
            facebook_url,
            total_projects_completed,
            years_experience,
            drone_flight_hours_total,
            drones_owned_total,
            avg_quote_turnaround_hours,
            data_delivery_min_days,
            data_delivery_max_days,
            member_since_year,
            top_service_slugs,
            top_service_ratings_json,
            additional_services_note,
            equipment_items_json,
            portfolio_items_json,
            faq_coverage_answer,
            faq_qualifications_answer,
            faq_turnaround_answer,
            faq_formats_answer,
            faq_permissions_answer,
            slug,
            backlink_token_hash,
            backlink_token_expires_at
          )
          VALUES (
            $1,$2,$3,$4,$5,$6,$7,true,$8,$9,$10,$11,$12,
            $13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,
            $41,$42,$43
          )
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
          app.base_city,
          app.coverage_uk_wide,
          app.coverage_regions,
          app.coverage_notes,
          app.availability_status,
          app.google_business_profile_url,
          app.linkedin_url,
          app.instagram_url,
          app.youtube_url,
          app.facebook_url,
          app.total_projects_completed,
          app.years_experience,
          app.drone_flight_hours_total,
          app.drones_owned_total,
          app.avg_quote_turnaround_hours,
          app.data_delivery_min_days,
          app.data_delivery_max_days,
          app.member_since_year,
          app.top_service_slugs,
          app.top_service_ratings_json,
          app.additional_services_note,
          app.equipment_items_json,
          app.portfolio_items_json,
          app.faq_coverage_answer,
          app.faq_qualifications_answer,
          app.faq_turnaround_answer,
          app.faq_formats_answer,
          app.faq_permissions_answer,
          slug,
          tokenHash,
          backlinkTokenExpiresAt.toISOString(),
        ],
      );

      const pilotId = pilotInsert.rows[0].id;

      // Pilot dashboard login is retired, but we still prevent reusing admin account emails.
      const identityEmail = String(app.email || '').trim().toLowerCase();
      if (!identityEmail) {
        throw new Error('Pilot email is missing');
      }
      const existingIdentity = await client.query<{ id: string; role: string }>(
        `SELECT id, role::text FROM user_identities WHERE email = $1 LIMIT 1`,
        [identityEmail],
      );
      if (existingIdentity.rows[0] && existingIdentity.rows[0].role === 'ADMIN') {
        throw new Error('Email is already registered as an admin account');
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
    if (error instanceof RequestOriginError) {
      return jsonError(message, 403);
    }
    const status = message.includes('not found') ? 404 : 400;
    return jsonError(message, status);
  }
}
