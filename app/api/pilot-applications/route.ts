import { NextResponse } from 'next/server';

import { logEmail, logPilotApplicationEvent } from '@/lib/server/audit';
import { withTransaction } from '@/lib/server/database';
import { fireEmail } from '@/lib/server/email';
import { jsonError, parseBody } from '@/lib/server/http';
import { isHoneypotTripped } from '@/lib/honeypot';
import { createInvitationToken } from '@/lib/server/security';
import { validatePilotApplicationPayload } from '@/lib/server/validation';

export const runtime = 'nodejs';
const BACKLINK_TOKEN_TTL_DAYS = Math.max(1, Number(process.env.BACKLINK_TOKEN_TTL_DAYS || 30));

export async function POST(request: Request) {
  try {
    const payload = await parseBody(request);
    if (isHoneypotTripped(payload)) {
      return NextResponse.json(
        {
          application_id: null,
          status: 'SUBMITTED',
        },
        { status: 201 },
      );
    }
    if (!payload.consent_source_page) {
      payload.consent_source_page = request.headers.get('referer');
    }
    const input = validatePilotApplicationPayload(payload);

    const { tokenHash: backlinkTokenHash } = createInvitationToken();
    const backlinkTokenExpiresAt = new Date(Date.now() + BACKLINK_TOKEN_TTL_DAYS * 24 * 60 * 60 * 1000);

    const created = await withTransaction(async (client) => {
      const result = await client.query<{ id: string; status: string }>(
        `INSERT INTO pilot_applications
          (
            pilot_name,
            business_name,
            email,
            phone,
            website_url,
            profile_photo_url,
            two_sentence_summary,
            insurance_provider,
            insurance_expiry,
            flyer_id,
            operator_id,
            licence_level,
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
            avg_response_hours,
            avg_quote_turnaround_hours,
            data_delivery_min_days,
            data_delivery_max_days,
            repeat_hire_rate_pct,
            member_since_year,
            top_service_slugs,
            additional_services_note,
            equipment_items_json,
            portfolio_items_json,
            skills_levels_json,
            faq_coverage_answer,
            faq_qualifications_answer,
            faq_turnaround_answer,
            faq_formats_answer,
            faq_permissions_answer,
            consent_to_pilot_terms,
            pilot_terms_version,
            consent_timestamp,
            consent_source_page,
            backlink_token_hash,
            backlink_token_expires_at,
            status
          )
          VALUES (
            $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,
            $13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,
            now(),$43,$44,$45,'SUBMITTED'
          )
          RETURNING id, status`,
        [
          input.pilot_name,
          input.business_name,
          input.email,
          input.phone,
          input.website_url,
          input.profile_photo_url,
          input.two_sentence_summary,
          input.insurance_provider,
          input.insurance_expiry,
          input.flyer_id,
          input.operator_id,
          input.licence_level,
          input.base_city,
          input.coverage_uk_wide,
          input.coverage_regions,
          input.coverage_notes,
          input.availability_status,
          input.google_business_profile_url,
          input.linkedin_url,
          input.instagram_url,
          input.youtube_url,
          input.facebook_url,
          input.total_projects_completed,
          input.years_experience,
          input.avg_response_hours,
          input.avg_quote_turnaround_hours,
          input.data_delivery_min_days,
          input.data_delivery_max_days,
          input.repeat_hire_rate_pct,
          input.member_since_year,
          input.top_service_slugs,
          input.additional_services_note,
          input.equipment_items_json,
          input.portfolio_items_json,
          input.skills_levels_json,
          input.faq_coverage_answer,
          input.faq_qualifications_answer,
          input.faq_turnaround_answer,
          input.faq_formats_answer,
          input.faq_permissions_answer,
          input.consent_to_pilot_terms,
          input.pilot_terms_version,
          input.consent_source_page,
          backlinkTokenHash,
          backlinkTokenExpiresAt.toISOString(),
        ],
      );

      const applicationId = result.rows[0].id;
      await logPilotApplicationEvent(
        applicationId,
        'APPLICATION_SUBMITTED',
        { email: input.email },
        'APPLICANT',
        null,
        client,
      );
      const emailLogId = await logEmail('pilot_application_received', input.email, 'QUEUED', 'PILOT_APPLICATION', applicationId, client);
      return {
        id: result.rows[0].id,
        status: result.rows[0].status,
        emailLogId,
        applicantEmail: input.email,
        applicantName: input.pilot_name,
        websiteUrl: input.website_url as string | null,
      };
    });

    fireEmail(created.emailLogId, created.applicantEmail, {
      templateKey: 'pilot_application_received',
      applicantName: created.applicantName,
    });

    return NextResponse.json(
      {
        application_id: created.id,
        status: created.status,
      },
      { status: 201 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to submit pilot application';
    return jsonError(message, 400);
  }
}
