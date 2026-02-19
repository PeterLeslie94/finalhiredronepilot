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
  consent_to_pilot_terms: boolean;
  pilot_terms_version: string;
  consent_source_page: string | null;
};

export type InviteSelectionInput = {
  include_pilot_ids: string[];
  exclude_pilot_ids: string[];
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  const consent = payload.consent_share_with_pilots === true || payload.consent_share_with_pilots === 'true' || payload.consent_share_with_pilots === 'on';
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
  const consentToPilotTerms = payload.consent_to_pilot_terms === true || payload.consent_to_pilot_terms === 'true' || payload.consent_to_pilot_terms === 'on';
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

  return {
    include_pilot_ids: includePilotIds,
    exclude_pilot_ids: excludePilotIds,
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
  };
}
