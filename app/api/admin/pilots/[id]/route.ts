import { NextRequest, NextResponse } from 'next/server';

import { PILOT_AVAILABILITY_OPTIONS, PILOT_COVERAGE_REGIONS, PILOT_SERVICE_LEVELS, PILOT_SERVICE_SLUGS } from '@/lib/pilot-profile';
import { AuthError, requireAdminAccess } from '@/lib/server/auth';
import { query } from '@/lib/server/database';
import { assertTrustedOrigin, jsonError, RequestOriginError } from '@/lib/server/http';
export const runtime = 'nodejs';

const COVERAGE_REGION_SET = new Set(PILOT_COVERAGE_REGIONS);
const AVAILABILITY_SET = new Set<string>(PILOT_AVAILABILITY_OPTIONS.map((item) => item.value));
const SERVICE_SLUG_SET = new Set(PILOT_SERVICE_SLUGS);
const SERVICE_LEVEL_SET = new Set(PILOT_SERVICE_LEVELS);

function asOptionalString(value: unknown, max = 1000): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim().slice(0, max);
  return trimmed || null;
}

function asOptionalInteger(value: unknown, field: string, min: number, max: number): number | null {
  if (value === null || value === undefined || value === '') return null;
  const num = typeof value === 'number' ? value : Number(value);
  if (!Number.isInteger(num)) {
    throw new Error(`${field} must be a whole number`);
  }
  if (num < min || num > max) {
    throw new Error(`${field} must be between ${min} and ${max}`);
  }
  return num;
}

function asStringArray(value: unknown, maxItems: number): string[] | null {
  if (value === null || value === undefined || value === '') return null;
  if (!Array.isArray(value)) {
    throw new Error('Value must be an array');
  }
  const cleaned = value
    .map((item) => (typeof item === 'string' ? item.trim() : ''))
    .filter(Boolean);
  const deduped = Array.from(new Set(cleaned));
  return deduped.slice(0, maxItems);
}

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
        base_city, coverage_uk_wide, coverage_regions, coverage_notes, availability_status,
        google_business_profile_url, linkedin_url, instagram_url, youtube_url, facebook_url,
        total_projects_completed, years_experience, drone_flight_hours_total, drones_owned_total, avg_quote_turnaround_hours,
        data_delivery_min_days, data_delivery_max_days, member_since_year,
        top_service_slugs, additional_services_note, equipment_items_json, portfolio_items_json,
        top_service_ratings_json, faq_coverage_answer, faq_qualifications_answer, faq_turnaround_answer,
        faq_formats_answer, faq_permissions_answer,
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
      email: (v) => {
        if (typeof v !== 'string' || !v.trim()) throw new Error('email must be a non-empty string');
        return v.trim().toLowerCase();
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
      base_city: (v) => asOptionalString(v, 120),
      coverage_uk_wide: (v) => {
        if (typeof v !== 'boolean') throw new Error('coverage_uk_wide must be a boolean');
        return v;
      },
      coverage_regions: (v) => {
        const regions = asStringArray(v, PILOT_COVERAGE_REGIONS.length);
        if (!regions || regions.length === 0) return null;
        const normalized = regions.map((item) => item.toUpperCase().replace(/[\n\r\t\s-]+/g, '_'));
        for (const region of normalized) {
          if (!COVERAGE_REGION_SET.has(region as typeof PILOT_COVERAGE_REGIONS[number])) {
            throw new Error(`Invalid coverage region: ${region}`);
          }
        }
        return normalized;
      },
      coverage_notes: (v) => asOptionalString(v, 400),
      availability_status: (v) => {
        const next = asOptionalString(v, 40);
        if (!next) return null;
        const normalized = next.toUpperCase();
        if (!AVAILABILITY_SET.has(normalized)) {
          throw new Error('Invalid availability status');
        }
        return normalized;
      },
      google_business_profile_url: (v) => asOptionalString(v, 500),
      linkedin_url: (v) => asOptionalString(v, 500),
      instagram_url: (v) => asOptionalString(v, 500),
      youtube_url: (v) => asOptionalString(v, 500),
      facebook_url: (v) => asOptionalString(v, 500),
      total_projects_completed: (v) => asOptionalInteger(v, 'total_projects_completed', 0, 500000),
      years_experience: (v) => asOptionalInteger(v, 'years_experience', 0, 80),
      drone_flight_hours_total: (v) => asOptionalInteger(v, 'drone_flight_hours_total', 0, 500000),
      drones_owned_total: (v) => asOptionalInteger(v, 'drones_owned_total', 0, 200),
      avg_quote_turnaround_hours: (v) => asOptionalInteger(v, 'avg_quote_turnaround_hours', 1, 720),
      data_delivery_min_days: (v) => asOptionalInteger(v, 'data_delivery_min_days', 1, 365),
      data_delivery_max_days: (v) => asOptionalInteger(v, 'data_delivery_max_days', 1, 365),
      member_since_year: (v) => asOptionalInteger(v, 'member_since_year', 2000, new Date().getUTCFullYear()),
      top_service_slugs: (v) => {
        const slugs = asStringArray(v, 6);
        if (!slugs || slugs.length === 0) return null;
        if (slugs.length !== 6) throw new Error('top_service_slugs must contain exactly 6 services');
        const normalized = slugs.map((item) => item.toLowerCase());
        for (const slug of normalized) {
          if (!SERVICE_SLUG_SET.has(slug as typeof PILOT_SERVICE_SLUGS[number])) {
            throw new Error(`Invalid service slug: ${slug}`);
          }
        }
        return normalized;
      },
      top_service_ratings_json: (v) => {
        if (v === null || v === undefined || v === '') return {};
        if (typeof v !== 'object' || v === null || Array.isArray(v)) {
          throw new Error('top_service_ratings_json must be an object');
        }
        const next: Record<string, string> = {};
        for (const [rawSlug, rawLevel] of Object.entries(v)) {
          const slug = rawSlug.trim().toLowerCase();
          if (!slug) continue;
          if (!SERVICE_SLUG_SET.has(slug as typeof PILOT_SERVICE_SLUGS[number])) {
            throw new Error(`Invalid service slug in ratings: ${slug}`);
          }
          if (typeof rawLevel !== 'string') {
            throw new Error(`Invalid rating level for ${slug}`);
          }
          const level = rawLevel.trim();
          if (!SERVICE_LEVEL_SET.has(level as typeof PILOT_SERVICE_LEVELS[number])) {
            throw new Error(`Invalid rating level for ${slug}`);
          }
          next[slug] = level;
        }
        return next;
      },
      additional_services_note: (v) => asOptionalString(v, 600),
      equipment_items_json: (v) => (Array.isArray(v) ? v : []),
      portfolio_items_json: (v) => (Array.isArray(v) ? v : []),
      faq_coverage_answer: (v) => asOptionalString(v, 1000),
      faq_qualifications_answer: (v) => asOptionalString(v, 1000),
      faq_turnaround_answer: (v) => asOptionalString(v, 1000),
      faq_formats_answer: (v) => asOptionalString(v, 1000),
      faq_permissions_answer: (v) => asOptionalString(v, 1000),
      tier: (v) => {
        if (typeof v !== 'string' || !['VERIFIED_OPERATOR', 'INTEGRATED_OPERATOR'].includes(v)) {
          throw new Error('tier must be VERIFIED_OPERATOR or INTEGRATED_OPERATOR');
        }
        return v;
      },
    };

    const enumCastFields: Record<string, string> = {
      tier: '::pilot_tier_v2',
      coverage_regions: '::text[]',
      top_service_slugs: '::text[]',
      top_service_ratings_json: '::jsonb',
      equipment_items_json: '::jsonb',
      portfolio_items_json: '::jsonb',
    };

    const setClauses: string[] = [];
    const values: unknown[] = [];
    const normalizedUpdates: Record<string, unknown> = {};

    for (const [field, validator] of Object.entries(allowedFields)) {
      if (field in body) {
        const validated = validator(body[field]);
        normalizedUpdates[field] = validated;
        values.push(validated);
        const cast = enumCastFields[field] || '';
        setClauses.push(`${field} = $${values.length}${cast}`);
      }
    }

    const minDays = normalizedUpdates.data_delivery_min_days;
    const maxDays = normalizedUpdates.data_delivery_max_days;
    if (
      typeof minDays === 'number' &&
      typeof maxDays === 'number' &&
      maxDays < minDays
    ) {
      throw new Error('data_delivery_max_days cannot be lower than data_delivery_min_days');
    }

    const selectedServices = normalizedUpdates.top_service_slugs;
    const serviceRatings = normalizedUpdates.top_service_ratings_json;
    if (Array.isArray(selectedServices) && serviceRatings && typeof serviceRatings === 'object') {
      const selectedSet = new Set(selectedServices.map((slug) => String(slug)));
      const ratingKeys = Object.keys(serviceRatings as Record<string, unknown>);
      if (ratingKeys.length !== selectedSet.size) {
        throw new Error('top_service_ratings_json must include one rating per selected top service');
      }
      for (const key of ratingKeys) {
        if (!selectedSet.has(key)) {
          throw new Error(`top_service_ratings_json includes non-selected service: ${key}`);
        }
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
    if (typeof error === 'object' && error && 'code' in error && (error as { code?: string }).code === '23505') {
      return jsonError('Email is already in use', 400);
    }
    const message = error instanceof Error ? error.message : 'Failed to update pilot';
    const status = error instanceof AuthError ? 401 : error instanceof RequestOriginError ? 403 : 500;
    return jsonError(message, status);
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    assertTrustedOrigin(request);
    await requireAdminAccess(request);
    const { id } = await params;

    const result = await query(
      `UPDATE pilots
       SET active = false, updated_at = now()
       WHERE id = $1
       RETURNING *`,
      [id],
    );

    if (!result.rows[0]) {
      return jsonError('Pilot not found', 404);
    }

    return NextResponse.json({ pilot: result.rows[0], deleted: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to delete pilot';
    const status = error instanceof AuthError ? 401 : error instanceof RequestOriginError ? 403 : 500;
    return jsonError(message, status);
  }
}
