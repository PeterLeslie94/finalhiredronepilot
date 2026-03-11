import { NextResponse } from 'next/server';

import { logEmail, logPilotApplicationEvent } from '@/lib/server/audit';
import { withTransaction } from '@/lib/server/database';
import { fireEmail } from '@/lib/server/email';
import { consumeRateLimit } from '@/lib/server/rate-limit';
import {
  assertTrustedOrigin,
  getClientIp,
  jsonError,
  parseBody,
  RequestOriginError,
} from '@/lib/server/http';
import { isHoneypotTripped } from '@/lib/honeypot';
import { validatePilotApplicationPayload } from '@/lib/server/validation';

export const runtime = 'nodejs';
const RATE_LIMIT_WINDOW_MS = Math.max(30_000, Number(process.env.PILOT_APPLICATION_RATE_LIMIT_WINDOW_MS || 10 * 60 * 1000));
const RATE_LIMIT_MAX = Math.max(1, Number(process.env.PILOT_APPLICATION_RATE_LIMIT_MAX || 10));
const MIN_COMPLETION_MS = Math.max(2_000, Number(process.env.PILOT_APPLICATION_MIN_COMPLETION_MS || 8_000));
const MAX_COMPLETION_MS = Math.max(
  MIN_COMPLETION_MS,
  Number(process.env.PILOT_APPLICATION_MAX_COMPLETION_MS || 14 * 24 * 60 * 60 * 1000),
);
type PgErrorLike = {
  code?: string;
  message?: string;
};

function toJsonbParam(value: unknown, fallback: unknown): string {
  const source = value ?? fallback;
  try {
    return JSON.stringify(source);
  } catch {
    return JSON.stringify(fallback);
  }
}

function isJsonSyntaxDbError(error: unknown): boolean {
  if (!error || typeof error !== 'object') return false;
  const pgError = error as PgErrorLike;
  if (pgError.code !== '22P02') return false;
  const message = String(pgError.message || '').toLowerCase();
  return (
    message.includes('invalid input syntax for type json') ||
    message.includes('invalid input syntax for type jsonb')
  );
}

function maskedSubmissionResponse() {
  return NextResponse.json(
    {
      application_id: null,
      status: 'SUBMITTED',
    },
    { status: 201 },
  );
}

function hasSuspiciousCompletionTiming(payload: Record<string, unknown>): boolean {
  const raw = payload.form_started_at;
  const startedAtMs =
    typeof raw === 'number'
      ? raw
      : typeof raw === 'string'
        ? Number(raw.trim())
        : Number.NaN;

  if (!Number.isFinite(startedAtMs) || startedAtMs <= 0) return true;
  const elapsedMs = Date.now() - startedAtMs;
  if (!Number.isFinite(elapsedMs)) return true;
  return elapsedMs < MIN_COMPLETION_MS || elapsedMs > MAX_COMPLETION_MS;
}

export async function POST(request: Request) {
  try {
    assertTrustedOrigin(request);

    const requester = getClientIp(request) || 'unknown';
    const rateLimit = consumeRateLimit({
      scope: 'pilot-application-intake',
      identifier: requester,
      windowMs: RATE_LIMIT_WINDOW_MS,
      max: RATE_LIMIT_MAX,
    });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Too many pilot applications submitted. Please try again shortly.' },
        { status: 429, headers: { 'Retry-After': String(rateLimit.retryAfterSec) } },
      );
    }

    const payload = await parseBody(request);
    if (isHoneypotTripped(payload)) {
      return maskedSubmissionResponse();
    }
    if (hasSuspiciousCompletionTiming(payload)) {
      return maskedSubmissionResponse();
    }
    if (!payload.consent_source_page) {
      payload.consent_source_page = request.headers.get('referer');
    }
    const input = validatePilotApplicationPayload(payload);

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
            consent_to_pilot_terms,
            pilot_terms_version,
            consent_timestamp,
            consent_source_page,
            status
          )
          VALUES (
            $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,
            $13,$14,$15::text[],$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31::text[],$32::jsonb,$33,$34::jsonb,$35::jsonb,$36,$37,$38,$39,$40,$41,$42,
            now(),$43,'SUBMITTED'
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
          input.drone_flight_hours_total,
          input.drones_owned_total,
          input.avg_quote_turnaround_hours,
          input.data_delivery_min_days,
          input.data_delivery_max_days,
          input.member_since_year,
          input.top_service_slugs,
          toJsonbParam(input.top_service_ratings_json, {}),
          input.additional_services_note,
          toJsonbParam(input.equipment_items_json, []),
          toJsonbParam(input.portfolio_items_json, []),
          input.faq_coverage_answer,
          input.faq_qualifications_answer,
          input.faq_turnaround_answer,
          input.faq_formats_answer,
          input.faq_permissions_answer,
          input.consent_to_pilot_terms,
          input.pilot_terms_version,
          input.consent_source_page,
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
    if (error instanceof RequestOriginError) {
      return jsonError(error.message, 403);
    }
    if (isJsonSyntaxDbError(error)) {
      console.error('Pilot application submit JSONB serialization error', error);
      return jsonError(
        'Something went wrong while submitting your application. Please try again.',
        400,
      );
    }
    const message = error instanceof Error ? error.message : 'Failed to submit pilot application';
    return jsonError(message, 400);
  }
}
