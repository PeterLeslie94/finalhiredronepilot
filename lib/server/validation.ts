import {
  PILOT_AVAILABILITY_OPTIONS,
  PILOT_COVERAGE_REGIONS,
  PILOT_FAQ_QUESTIONS,
  PILOT_SERVICE_SLUGS,
  PILOT_SKILL_CATEGORIES,
  PILOT_SKILL_LEVELS,
  PilotAvailabilityStatus,
  PilotCoverageRegion,
  PilotSkillKey,
  PilotSkillLevel,
} from '@/lib/pilot-profile';
import { DATE_FLEXIBILITY, DateFlexibility, isInSet } from '@/lib/server/enums';

export type EnquiryInput = {
  name: string;
  email: string;
  phone: string;
  service_slug: string;
  date_needed: string | null;
  date_flexibility: DateFlexibility;
  site_location_text: string;
  postcode: string;
  job_details: string;
  consent_share_with_pilots: boolean;
  consent_policy_version: string;
  marketplace_terms_version: string;
  source_page: string | null;
  source_form: string;
};

export type PilotEquipmentItemInput = {
  name: string;
  details: string | null;
};

export type PilotPortfolioItemInput = {
  image_url: string;
  caption: string | null;
};

export type PilotSkillsLevelsInput = Record<PilotSkillKey, PilotSkillLevel>;

export type PilotApplicationInput = {
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
  base_city: string;
  coverage_uk_wide: boolean;
  coverage_regions: PilotCoverageRegion[];
  coverage_notes: string | null;
  availability_status: PilotAvailabilityStatus;
  google_business_profile_url: string | null;
  linkedin_url: string | null;
  instagram_url: string | null;
  youtube_url: string | null;
  facebook_url: string | null;
  total_projects_completed: number;
  years_experience: number;
  avg_response_hours: number;
  avg_quote_turnaround_hours: number;
  data_delivery_min_days: number;
  data_delivery_max_days: number;
  repeat_hire_rate_pct: number;
  member_since_year: number;
  top_service_slugs: string[];
  additional_services_note: string | null;
  equipment_items_json: PilotEquipmentItemInput[];
  portfolio_items_json: PilotPortfolioItemInput[];
  skills_levels_json: PilotSkillsLevelsInput;
  faq_coverage_answer: string;
  faq_qualifications_answer: string;
  faq_turnaround_answer: string;
  faq_formats_answer: string;
  faq_permissions_answer: string;
  consent_to_pilot_terms: boolean;
  pilot_terms_version: string;
  consent_source_page: string | null;
};

export type InviteSelectionInput = {
  selection_mode: 'ALL_ACTIVE' | 'INTEGRATED_ONLY' | 'MANUAL';
  include_pilot_ids: string[];
  exclude_pilot_ids: string[];
  allow_reinvite: boolean;
};

export type AdminEnquiryUpdateInput = {
  service_slug: string;
  date_needed: string | null;
  date_flexibility: DateFlexibility;
  site_location_text: string;
  postcode: string;
  job_details: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const COVERAGE_REGION_SET = new Set<string>(PILOT_COVERAGE_REGIONS);
const AVAILABILITY_SET = new Set<string>(PILOT_AVAILABILITY_OPTIONS.map((item) => item.value));
const SERVICE_SLUG_SET = new Set<string>(PILOT_SERVICE_SLUGS);
const SKILL_LEVEL_SET = new Set<string>(PILOT_SKILL_LEVELS);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function parseBoolean(value: unknown): boolean {
  return value === true || value === 'true' || value === 'on' || value === 1 || value === '1';
}

function parseJsonLike(value: unknown): unknown {
  if (typeof value !== 'string') return value;
  const trimmed = value.trim();
  if (!trimmed) return value;
  if (!trimmed.startsWith('{') && !trimmed.startsWith('[')) return value;
  try {
    return JSON.parse(trimmed);
  } catch {
    return value;
  }
}

function parseIntegerInRange(
  value: unknown,
  {
    field,
    min,
    max,
    required = true,
  }: {
    field: string;
    min: number;
    max: number;
    required?: boolean;
  },
): number | null {
  if (value === null || value === undefined || value === '') {
    if (required) throw new Error(`${field} is required`);
    return null;
  }

  const num = typeof value === 'number' ? value : Number(asTrimmedString(value, 32));
  if (!Number.isInteger(num)) throw new Error(`${field} must be a whole number`);
  if (num < min || num > max) throw new Error(`${field} must be between ${min} and ${max}`);
  return num;
}

function parseStringArray(value: unknown, maxItems: number, itemMaxLen = 180): string[] {
  const source = parseJsonLike(value);
  const raw = Array.isArray(source)
    ? source.map((item) => asTrimmedString(item, itemMaxLen))
    : asTrimmedString(source, maxItems * itemMaxLen)
        .split(',')
        .map((item) => item.trim().slice(0, itemMaxLen));

  const deduped: string[] = [];
  for (const item of raw) {
    if (!item || deduped.includes(item)) continue;
    deduped.push(item);
    if (deduped.length >= maxItems) break;
  }
  return deduped;
}

function parseOptionalUrl(value: unknown, fieldLabel: string): string | null {
  const raw = asTrimmedString(value, 500);
  if (!raw) return null;
  const normalized = normalizeWebsiteUrl(raw);
  if (!normalized) throw new Error(`Invalid ${fieldLabel}`);
  return normalized;
}

function parseCoverageRegions(value: unknown): PilotCoverageRegion[] {
  const regions = parseStringArray(value, PILOT_COVERAGE_REGIONS.length, 40)
    .map((item) => item.toUpperCase().replace(/[\s-]+/g, '_'))
    .filter(Boolean);

  for (const region of regions) {
    if (!COVERAGE_REGION_SET.has(region)) {
      throw new Error(`Invalid coverage region: ${region}`);
    }
  }

  return regions as PilotCoverageRegion[];
}

function parseAvailabilityStatus(value: unknown): PilotAvailabilityStatus {
  const normalized = asTrimmedString(value, 40).toUpperCase();
  if (!normalized || !AVAILABILITY_SET.has(normalized)) {
    throw new Error('Availability status is required');
  }
  return normalized as PilotAvailabilityStatus;
}

function parseTopServiceSlugs(value: unknown, required: boolean): string[] {
  const slugs = parseStringArray(value, 6, 120).map((item) => item.toLowerCase());
  if (!slugs.length) {
    if (required) throw new Error('Exactly 6 top services are required');
    return [];
  }
  if (slugs.length !== 6) {
    throw new Error('Exactly 6 top services are required');
  }
  for (const slug of slugs) {
    if (!SERVICE_SLUG_SET.has(slug)) {
      throw new Error(`Invalid service selection: ${slug}`);
    }
  }
  return slugs;
}

function parseEquipmentItems(value: unknown, required: boolean): PilotEquipmentItemInput[] {
  const source = parseJsonLike(value);
  if (!Array.isArray(source)) {
    if (required) throw new Error('At least one equipment entry is required');
    return [];
  }

  const items: PilotEquipmentItemInput[] = [];
  for (const rawItem of source) {
    if (items.length >= 12) break;

    if (typeof rawItem === 'string') {
      const name = asTrimmedString(rawItem, 160);
      if (!name) continue;
      items.push({ name, details: null });
      continue;
    }

    if (!isRecord(rawItem)) continue;
    const name = asTrimmedString(rawItem.name, 160);
    if (!name) continue;
    const details = asTrimmedString(rawItem.details, 600) || null;
    items.push({ name, details });
  }

  if (!items.length && required) {
    throw new Error('At least one equipment entry is required');
  }

  return items;
}

function isDataImageUrl(value: string): boolean {
  return /^data:image\/(png|jpeg|jpg|webp);base64,/i.test(value);
}

function parsePortfolioItems(value: unknown, required: boolean): PilotPortfolioItemInput[] {
  const source = parseJsonLike(value);
  if (!Array.isArray(source)) {
    if (required) throw new Error('At least one portfolio image is required');
    return [];
  }

  const items: PilotPortfolioItemInput[] = [];
  for (const rawItem of source) {
    if (items.length >= 3) break;

    if (typeof rawItem === 'string') {
      const imageUrl = asTrimmedString(rawItem, 2_000_000);
      if (!imageUrl) continue;
      if (!isDataImageUrl(imageUrl) && !normalizeWebsiteUrl(imageUrl)) {
        throw new Error('Portfolio images must be uploaded files or valid URLs');
      }
      items.push({ image_url: imageUrl, caption: null });
      continue;
    }

    if (!isRecord(rawItem)) continue;

    const rawUrl = asTrimmedString(rawItem.image_url ?? rawItem.url ?? rawItem.data_url, 2_000_000);
    if (!rawUrl) continue;

    const normalizedUrl = isDataImageUrl(rawUrl) ? rawUrl : normalizeWebsiteUrl(rawUrl);
    if (!normalizedUrl) {
      throw new Error('Portfolio images must be uploaded files or valid URLs');
    }

    const caption = asTrimmedString(rawItem.caption, 220) || null;
    items.push({ image_url: normalizedUrl, caption });
  }

  if (items.length > 3) {
    throw new Error('Maximum 3 portfolio images are allowed');
  }

  if (!items.length && required) {
    throw new Error('At least one portfolio image is required');
  }

  return items;
}

function parseSkillsLevels(value: unknown, required: boolean): PilotSkillsLevelsInput {
  const source = parseJsonLike(value);
  if (!isRecord(source)) {
    if (required) throw new Error('Skill levels are required');
    return {} as PilotSkillsLevelsInput;
  }

  const next = {} as PilotSkillsLevelsInput;

  for (const category of PILOT_SKILL_CATEGORIES) {
    const rawLevel = asTrimmedString(source[category.key], 32);
    if (!rawLevel) {
      if (required) throw new Error(`Skill level is required for ${category.label}`);
      continue;
    }
    if (!SKILL_LEVEL_SET.has(rawLevel)) {
      throw new Error(`Invalid skill level for ${category.label}`);
    }
    next[category.key] = rawLevel as PilotSkillLevel;
  }

  if (required) {
    for (const category of PILOT_SKILL_CATEGORIES) {
      if (!next[category.key]) {
        throw new Error(`Skill level is required for ${category.label}`);
      }
    }
  }

  return next;
}

function parseFaqAnswer(value: unknown, label: string, required: boolean): string | null {
  const answer = asTrimmedString(value, 1000);
  if (!answer) {
    if (required) throw new Error(`${label} answer is required`);
    return null;
  }
  if (answer.length < 12) {
    throw new Error(`${label} answer must be at least 12 characters`);
  }
  return answer;
}

export function asTrimmedString(value: unknown, max = 10000): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
}

export function normalizeWebsiteUrl(value: string): string | null {
  if (!value) return null;
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    const url = new URL(withProtocol);
    if (!url.hostname) return null;
    return url.toString();
  } catch {
    return null;
  }
}

function normalizeLicenceLevel(value: unknown): string {
  const rawValues = Array.isArray(value)
    ? value.map((item) => asTrimmedString(item, 40))
    : asTrimmedString(value, 200)
        .split(',')
        .map((item) => item.trim());

  const mapped = rawValues
    .map((item) => item.toUpperCase().replace(/[\s_-]+/g, ''))
    .map((item) => {
      if (item === 'A2COFC') return 'A2 CofC';
      if (item === 'GVC') return 'GVC';
      return '';
    })
    .filter(Boolean);

  return Array.from(new Set(mapped)).join(', ');
}

export function parseDate(value: unknown): string | null {
  const raw = asTrimmedString(value, 32);
  if (!raw) return null;
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString().slice(0, 10);
}

function normalizePostcode(raw: string): string {
  const normalized = raw.toUpperCase().replace(/\s+/g, ' ').trim();
  if (!normalized) return 'UNKNOWN';
  return normalized;
}

export function validateEnquiryPayload(payload: Record<string, unknown>): EnquiryInput {
  const name = asTrimmedString(payload.name, 100);
  const email = asTrimmedString(payload.email, 200).toLowerCase();
  const phone = asTrimmedString(payload.phone, 50);

  if (name.length < 2) throw new Error('Name must be at least 2 characters');
  if (!EMAIL_RE.test(email)) throw new Error('Invalid email');
  if (phone.length < 6) throw new Error('Phone must be at least 6 characters');

  const serviceSlug = asTrimmedString(payload.service_slug, 120) || 'drone-survey';
  const dateNeeded = parseDate(payload.date_needed);

  const rawFlex = asTrimmedString(payload.date_flexibility, 20).toUpperCase() || 'ASAP';
  if (!isInSet(rawFlex, DATE_FLEXIBILITY)) {
    throw new Error('Invalid date flexibility');
  }
  const dateFlexibility = rawFlex;
  if (dateFlexibility === 'FIXED' && !dateNeeded) {
    throw new Error('Date is required when date flexibility is FIXED');
  }

  const siteLocationText = asTrimmedString(payload.site_location_text, 240) || 'Not provided';
  const postcode = normalizePostcode(asTrimmedString(payload.postcode, 20) || 'UNKNOWN');

  const jobDetails = asTrimmedString(payload.job_details || payload.message, 4000) || 'No details provided';
  const consent = parseBoolean(payload.consent_share_with_pilots);
  if (!consent) throw new Error('Consent is required');

  const consentPolicyVersion = asTrimmedString(payload.consent_policy_version, 80) || 'marketplace-consent-v2';
  const marketplaceTermsVersion = asTrimmedString(payload.marketplace_terms_version, 80);
  if (!marketplaceTermsVersion) throw new Error('Marketplace terms version is required');
  const sourcePage = asTrimmedString(payload.source_page, 500) || null;
  const sourceForm = asTrimmedString(payload.source_form || payload['form-name'], 120) || 'legacy-form';

  return {
    name,
    email,
    phone,
    service_slug: serviceSlug,
    date_needed: dateNeeded,
    date_flexibility: dateFlexibility,
    site_location_text: siteLocationText,
    postcode,
    job_details: jobDetails,
    consent_share_with_pilots: true,
    consent_policy_version: consentPolicyVersion,
    marketplace_terms_version: marketplaceTermsVersion,
    source_page: sourcePage,
    source_form: sourceForm,
  };
}

export function validatePilotApplicationPayload(payload: Record<string, unknown>): PilotApplicationInput {
  const pilotName = asTrimmedString(payload.pilot_name || payload.name, 120);
  const businessName = asTrimmedString(payload.business_name, 180);
  const email = asTrimmedString(payload.email, 200).toLowerCase();
  const phone = asTrimmedString(payload.phone, 50);
  const websiteRaw = asTrimmedString(payload.website_url, 300);
  const websiteUrl = normalizeWebsiteUrl(websiteRaw);
  const profilePhotoUrl = asTrimmedString(payload.profile_photo_url, 2_000_000) || null;
  const summary = asTrimmedString(payload.two_sentence_summary, 1000);
  const insuranceProvider = asTrimmedString(payload.insurance_provider, 180);
  const insuranceExpiry = parseDate(payload.insurance_expiry);
  const flyerId = asTrimmedString(payload.flyer_id, 80);
  const operatorId = asTrimmedString(payload.operator_id, 80);
  const licenceLevel = normalizeLicenceLevel(payload.licence_level);
  const consentToPilotTerms = parseBoolean(payload.consent_to_pilot_terms);
  const pilotTermsVersion = asTrimmedString(payload.pilot_terms_version, 80);
  const consentSourcePage = asTrimmedString(payload.consent_source_page, 500) || null;

  if (pilotName.length < 2) throw new Error('Pilot name is required');
  if (businessName.length < 2) throw new Error('Business name is required');
  if (!EMAIL_RE.test(email)) throw new Error('Invalid email');
  if (phone.length < 6) throw new Error('Phone is required');
  if (!websiteRaw) throw new Error('Website URL is required');
  if (!websiteUrl) throw new Error('Invalid website URL');
  if (!profilePhotoUrl) throw new Error('Profile photo is required');
  if (summary.length < 20) throw new Error('Summary must be at least 20 characters');
  if (!insuranceProvider) throw new Error('Insurance provider is required');
  if (!flyerId) throw new Error('Flyer ID is required');
  if (!operatorId) throw new Error('Operator ID is required');
  if (!licenceLevel) throw new Error('Licence level is required');
  if (!consentToPilotTerms) throw new Error('Pilot terms consent is required');
  if (!pilotTermsVersion) throw new Error('Pilot terms version is required');

  const baseCity = asTrimmedString(payload.base_city, 120);
  if (baseCity.length < 2) throw new Error('Base city is required');

  const coverageUkWide = parseBoolean(payload.coverage_uk_wide);
  const coverageRegions = parseCoverageRegions(payload.coverage_regions);
  if (!coverageUkWide && coverageRegions.length === 0) {
    throw new Error('Select at least one coverage region or set UK-wide coverage');
  }

  const coverageNotes = asTrimmedString(payload.coverage_notes, 400) || null;
  const availabilityStatus = parseAvailabilityStatus(payload.availability_status);

  const totalProjectsCompleted = parseIntegerInRange(payload.total_projects_completed, {
    field: 'Total projects completed',
    min: 0,
    max: 500000,
  })!;
  const yearsExperience = parseIntegerInRange(payload.years_experience, {
    field: 'Years experience',
    min: 0,
    max: 80,
  })!;
  const avgResponseHours = parseIntegerInRange(payload.avg_response_hours, {
    field: 'Average response hours',
    min: 1,
    max: 720,
  })!;
  const avgQuoteTurnaroundHours = parseIntegerInRange(payload.avg_quote_turnaround_hours, {
    field: 'Average quote turnaround hours',
    min: 1,
    max: 720,
  })!;
  const dataDeliveryMinDays = parseIntegerInRange(payload.data_delivery_min_days, {
    field: 'Minimum data delivery days',
    min: 1,
    max: 365,
  })!;
  const dataDeliveryMaxDays = parseIntegerInRange(payload.data_delivery_max_days, {
    field: 'Maximum data delivery days',
    min: 1,
    max: 365,
  })!;
  if (dataDeliveryMaxDays < dataDeliveryMinDays) {
    throw new Error('Maximum data delivery days cannot be lower than minimum data delivery days');
  }
  const repeatHireRatePct = parseIntegerInRange(payload.repeat_hire_rate_pct, {
    field: 'Repeat hire rate',
    min: 0,
    max: 100,
  })!;

  const currentYear = new Date().getUTCFullYear();
  const memberSinceYear = parseIntegerInRange(payload.member_since_year, {
    field: 'Member since year',
    min: 2000,
    max: currentYear,
  })!;

  const topServiceSlugs = parseTopServiceSlugs(payload.top_service_slugs, true);
  const additionalServicesNote = asTrimmedString(payload.additional_services_note, 600) || null;
  const equipmentItemsJson = parseEquipmentItems(payload.equipment_items_json, true);
  const portfolioItemsJson = parsePortfolioItems(payload.portfolio_items_json, true);
  const skillsLevelsJson = parseSkillsLevels(payload.skills_levels_json, true);

  const faqCoverageAnswer = parseFaqAnswer(payload.faq_coverage_answer, 'Coverage', true)!;
  const faqQualificationsAnswer = parseFaqAnswer(payload.faq_qualifications_answer, 'Qualifications', true)!;
  const faqTurnaroundAnswer = parseFaqAnswer(payload.faq_turnaround_answer, 'Turnaround', true)!;
  const faqFormatsAnswer = parseFaqAnswer(payload.faq_formats_answer, 'Formats', true)!;
  const faqPermissionsAnswer = parseFaqAnswer(payload.faq_permissions_answer, 'Permissions', true)!;

  return {
    pilot_name: pilotName,
    business_name: businessName,
    email,
    phone,
    website_url: websiteUrl,
    profile_photo_url: profilePhotoUrl,
    two_sentence_summary: summary,
    insurance_provider: insuranceProvider,
    insurance_expiry: insuranceExpiry,
    flyer_id: flyerId,
    operator_id: operatorId,
    licence_level: licenceLevel,
    base_city: baseCity,
    coverage_uk_wide: coverageUkWide,
    coverage_regions: coverageRegions,
    coverage_notes: coverageNotes,
    availability_status: availabilityStatus,
    google_business_profile_url: parseOptionalUrl(payload.google_business_profile_url, 'Google Business profile URL'),
    linkedin_url: parseOptionalUrl(payload.linkedin_url, 'LinkedIn URL'),
    instagram_url: parseOptionalUrl(payload.instagram_url, 'Instagram URL'),
    youtube_url: parseOptionalUrl(payload.youtube_url, 'YouTube URL'),
    facebook_url: parseOptionalUrl(payload.facebook_url, 'Facebook URL'),
    total_projects_completed: totalProjectsCompleted,
    years_experience: yearsExperience,
    avg_response_hours: avgResponseHours,
    avg_quote_turnaround_hours: avgQuoteTurnaroundHours,
    data_delivery_min_days: dataDeliveryMinDays,
    data_delivery_max_days: dataDeliveryMaxDays,
    repeat_hire_rate_pct: repeatHireRatePct,
    member_since_year: memberSinceYear,
    top_service_slugs: topServiceSlugs,
    additional_services_note: additionalServicesNote,
    equipment_items_json: equipmentItemsJson,
    portfolio_items_json: portfolioItemsJson,
    skills_levels_json: skillsLevelsJson,
    faq_coverage_answer: faqCoverageAnswer,
    faq_qualifications_answer: faqQualificationsAnswer,
    faq_turnaround_answer: faqTurnaroundAnswer,
    faq_formats_answer: faqFormatsAnswer,
    faq_permissions_answer: faqPermissionsAnswer,
    consent_to_pilot_terms: true,
    pilot_terms_version: pilotTermsVersion,
    consent_source_page: consentSourcePage,
  };
}

export function validateInviteSelectionPayload(payload: Record<string, unknown>): InviteSelectionInput {
  const includePilotIds = Array.isArray(payload.include_pilot_ids)
    ? payload.include_pilot_ids.map((id) => asTrimmedString(id, 64)).filter(Boolean)
    : [];
  const excludePilotIds = Array.isArray(payload.exclude_pilot_ids)
    ? payload.exclude_pilot_ids.map((id) => asTrimmedString(id, 64)).filter(Boolean)
    : [];

  const rawSelectionMode = asTrimmedString(payload.selection_mode, 24).toUpperCase();
  const selectionMode =
    rawSelectionMode === 'ALL_ACTIVE' ||
    rawSelectionMode === 'INTEGRATED_ONLY' ||
    rawSelectionMode === 'MANUAL'
      ? rawSelectionMode
      : includePilotIds.length > 0
        ? 'MANUAL'
        : 'ALL_ACTIVE';

  if (selectionMode === 'MANUAL' && includePilotIds.length === 0) {
    throw new Error('At least one pilot must be selected in manual mode');
  }

  const allowReinvite = payload.allow_reinvite === true;

  return {
    selection_mode: selectionMode,
    include_pilot_ids: includePilotIds,
    exclude_pilot_ids: excludePilotIds,
    allow_reinvite: allowReinvite,
  };
}

export function validateAdminEnquiryUpdatePayload(payload: Record<string, unknown>): AdminEnquiryUpdateInput {
  const serviceSlug = asTrimmedString(payload.service_slug, 120) || 'drone-survey';
  const rawFlex = asTrimmedString(payload.date_flexibility, 20).toUpperCase() || 'ASAP';
  if (!isInSet(rawFlex, DATE_FLEXIBILITY)) {
    throw new Error('Invalid date flexibility');
  }
  const dateFlexibility = rawFlex;
  const dateNeeded = parseDate(payload.date_needed);
  if (dateFlexibility === 'FIXED' && !dateNeeded) {
    throw new Error('Date is required when date flexibility is FIXED');
  }
  const siteLocationText = asTrimmedString(payload.site_location_text, 240);
  if (!siteLocationText) {
    throw new Error('Location is required');
  }
  const postcode = normalizePostcode(asTrimmedString(payload.postcode, 20));
  const jobDetails = asTrimmedString(payload.job_details, 4000);
  if (jobDetails.length < 10) {
    throw new Error('Job details must be at least 10 characters');
  }

  return {
    service_slug: serviceSlug,
    date_needed: dateFlexibility === 'FIXED' ? dateNeeded : null,
    date_flexibility: dateFlexibility,
    site_location_text: siteLocationText,
    postcode,
    job_details: jobDetails,
  };
}

export type PilotProfileInput = {
  name: string;
  business_name: string | null;
  phone: string | null;
  website_url: string | null;
  profile_photo_url: string | null;
  two_sentence_summary: string | null;
  insurance_provider: string | null;
  insurance_expiry: string | null;
  flyer_id: string | null;
  operator_id: string | null;
  base_city: string | null;
  coverage_uk_wide: boolean;
  coverage_regions: PilotCoverageRegion[];
  coverage_notes: string | null;
  availability_status: PilotAvailabilityStatus | null;
  google_business_profile_url: string | null;
  linkedin_url: string | null;
  instagram_url: string | null;
  youtube_url: string | null;
  facebook_url: string | null;
  total_projects_completed: number | null;
  years_experience: number | null;
  avg_response_hours: number | null;
  avg_quote_turnaround_hours: number | null;
  data_delivery_min_days: number | null;
  data_delivery_max_days: number | null;
  repeat_hire_rate_pct: number | null;
  member_since_year: number | null;
  top_service_slugs: string[];
  additional_services_note: string | null;
  equipment_items_json: PilotEquipmentItemInput[];
  portfolio_items_json: PilotPortfolioItemInput[];
  skills_levels_json: Partial<PilotSkillsLevelsInput>;
  faq_coverage_answer: string | null;
  faq_qualifications_answer: string | null;
  faq_turnaround_answer: string | null;
  faq_formats_answer: string | null;
  faq_permissions_answer: string | null;
};

export function validatePilotProfilePayload(payload: Record<string, unknown>): PilotProfileInput {
  const name = asTrimmedString(payload.name, 120);
  if (name.length < 2) throw new Error('Name must be at least 2 characters');

  const businessName = asTrimmedString(payload.business_name, 180) || null;
  const phone = asTrimmedString(payload.phone, 50) || null;

  const websiteRaw = asTrimmedString(payload.website_url, 300);
  const websiteUrl = websiteRaw ? normalizeWebsiteUrl(websiteRaw) : null;
  if (websiteRaw && !websiteUrl) throw new Error('Invalid website URL');

  const profilePhotoUrl = asTrimmedString(payload.profile_photo_url, 2_000_000) || null;
  const summary = asTrimmedString(payload.two_sentence_summary, 1000) || null;

  const insuranceProvider = asTrimmedString(payload.insurance_provider, 180) || null;
  const insuranceExpiry = parseDate(payload.insurance_expiry);

  const flyerId = asTrimmedString(payload.flyer_id, 80) || null;
  const operatorId = asTrimmedString(payload.operator_id, 80) || null;

  const baseCity = asTrimmedString(payload.base_city, 120) || null;
  const coverageUkWide = parseBoolean(payload.coverage_uk_wide);
  const coverageRegions = parseCoverageRegions(payload.coverage_regions);

  const availabilityRaw = asTrimmedString(payload.availability_status, 40).toUpperCase();
  const availabilityStatus = availabilityRaw
    ? parseAvailabilityStatus(availabilityRaw)
    : null;

  const dataDeliveryMinDays = parseIntegerInRange(payload.data_delivery_min_days, {
    field: 'Minimum data delivery days',
    min: 1,
    max: 365,
    required: false,
  });
  const dataDeliveryMaxDays = parseIntegerInRange(payload.data_delivery_max_days, {
    field: 'Maximum data delivery days',
    min: 1,
    max: 365,
    required: false,
  });
  if (
    dataDeliveryMinDays !== null &&
    dataDeliveryMaxDays !== null &&
    dataDeliveryMaxDays < dataDeliveryMinDays
  ) {
    throw new Error('Maximum data delivery days cannot be lower than minimum data delivery days');
  }

  const skills = parseSkillsLevels(payload.skills_levels_json, false);

  return {
    name,
    business_name: businessName,
    phone,
    website_url: websiteUrl,
    profile_photo_url: profilePhotoUrl,
    two_sentence_summary: summary,
    insurance_provider: insuranceProvider,
    insurance_expiry: insuranceExpiry,
    flyer_id: flyerId,
    operator_id: operatorId,
    base_city: baseCity,
    coverage_uk_wide: coverageUkWide,
    coverage_regions: coverageRegions,
    coverage_notes: asTrimmedString(payload.coverage_notes, 400) || null,
    availability_status: availabilityStatus,
    google_business_profile_url: parseOptionalUrl(payload.google_business_profile_url, 'Google Business profile URL'),
    linkedin_url: parseOptionalUrl(payload.linkedin_url, 'LinkedIn URL'),
    instagram_url: parseOptionalUrl(payload.instagram_url, 'Instagram URL'),
    youtube_url: parseOptionalUrl(payload.youtube_url, 'YouTube URL'),
    facebook_url: parseOptionalUrl(payload.facebook_url, 'Facebook URL'),
    total_projects_completed: parseIntegerInRange(payload.total_projects_completed, {
      field: 'Total projects completed',
      min: 0,
      max: 500000,
      required: false,
    }),
    years_experience: parseIntegerInRange(payload.years_experience, {
      field: 'Years experience',
      min: 0,
      max: 80,
      required: false,
    }),
    avg_response_hours: parseIntegerInRange(payload.avg_response_hours, {
      field: 'Average response hours',
      min: 1,
      max: 720,
      required: false,
    }),
    avg_quote_turnaround_hours: parseIntegerInRange(payload.avg_quote_turnaround_hours, {
      field: 'Average quote turnaround hours',
      min: 1,
      max: 720,
      required: false,
    }),
    data_delivery_min_days: dataDeliveryMinDays,
    data_delivery_max_days: dataDeliveryMaxDays,
    repeat_hire_rate_pct: parseIntegerInRange(payload.repeat_hire_rate_pct, {
      field: 'Repeat hire rate',
      min: 0,
      max: 100,
      required: false,
    }),
    member_since_year: parseIntegerInRange(payload.member_since_year, {
      field: 'Member since year',
      min: 2000,
      max: new Date().getUTCFullYear(),
      required: false,
    }),
    top_service_slugs: parseTopServiceSlugs(payload.top_service_slugs, false),
    additional_services_note: asTrimmedString(payload.additional_services_note, 600) || null,
    equipment_items_json: parseEquipmentItems(payload.equipment_items_json, false),
    portfolio_items_json: parsePortfolioItems(payload.portfolio_items_json, false),
    skills_levels_json: skills,
    faq_coverage_answer: parseFaqAnswer(payload.faq_coverage_answer, PILOT_FAQ_QUESTIONS[0].question, false),
    faq_qualifications_answer: parseFaqAnswer(payload.faq_qualifications_answer, PILOT_FAQ_QUESTIONS[1].question, false),
    faq_turnaround_answer: parseFaqAnswer(payload.faq_turnaround_answer, PILOT_FAQ_QUESTIONS[2].question, false),
    faq_formats_answer: parseFaqAnswer(payload.faq_formats_answer, PILOT_FAQ_QUESTIONS[3].question, false),
    faq_permissions_answer: parseFaqAnswer(payload.faq_permissions_answer, PILOT_FAQ_QUESTIONS[4].question, false),
  };
}
