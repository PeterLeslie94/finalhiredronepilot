'use client';

import { useMemo, useRef, useState } from 'react';

import PhotoUploader from '@/components/PhotoUploader';
import PortfolioUploader, { PortfolioDraftItem } from '@/components/PortfolioUploader';
import HoneypotField from '@/components/HoneypotField';
import { HONEYPOT_FIELD_NAME } from '@/lib/honeypot';
import {
  PILOT_AVAILABILITY_OPTIONS,
  PILOT_COVERAGE_LABELS,
  PILOT_COVERAGE_REGIONS,
  PILOT_FAQ_QUESTIONS,
  PILOT_SERVICE_LEVELS,
  PILOT_SERVICE_OPTIONS,
  PilotCoverageRegion,
  PilotServiceLevel,
} from '@/lib/pilot-profile';

type Step = 1 | 2 | 3 | 4 | 5;

type EquipmentDraftItem = {
  name: string;
  details: string;
};

type PilotFormValues = {
  pilot_name: string;
  business_name: string;
  email: string;
  phone: string;
  website_url: string;
  base_city: string;

  insurance_provider: string;
  insurance_expiry: string;
  flyer_id: string;
  operator_id: string;
  licence_level: string;

  top_service_slugs: string[];
  additional_services_note: string;
  availability_status: string;
  coverage_uk_wide: boolean;
  coverage_regions: PilotCoverageRegion[];
  coverage_notes: string;
  total_projects_completed: string;
  years_experience: string;
  drone_flight_hours_total: string;
  drones_owned_total: string;
  avg_quote_turnaround_hours: string;
  data_delivery_min_days: string;
  data_delivery_max_days: string;
  member_since_year: string;
  top_service_ratings_json: Record<string, PilotServiceLevel | ''>;

  profile_photo_url: string;
  equipment_items_json: EquipmentDraftItem[];
  portfolio_items_json: PortfolioDraftItem[];

  two_sentence_summary: string;
  faq_coverage_answer: string;
  faq_qualifications_answer: string;
  faq_turnaround_answer: string;
  faq_formats_answer: string;
  faq_permissions_answer: string;
  google_business_profile_url: string;
  linkedin_url: string;
  instagram_url: string;
  youtube_url: string;
  facebook_url: string;

  consent_to_pilot_terms: boolean;
  pilot_terms_version: string;
  consent_source_page: string;
};

type PilotFormField = keyof PilotFormValues;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LICENCE_OPTIONS = ['A2 CofC', 'GVC'] as const;
const PILOT_TERMS_VERSION = 'pilot-terms-v1';

const CURRENT_YEAR = new Date().getUTCFullYear();

const INITIAL_VALUES: PilotFormValues = {
  pilot_name: '',
  business_name: '',
  email: '',
  phone: '',
  website_url: '',
  base_city: '',

  insurance_provider: '',
  insurance_expiry: '',
  flyer_id: '',
  operator_id: '',
  licence_level: '',

  top_service_slugs: [],
  additional_services_note: '',
  availability_status: 'AVAILABLE',
  coverage_uk_wide: true,
  coverage_regions: [],
  coverage_notes: '',
  total_projects_completed: '',
  years_experience: '',
  drone_flight_hours_total: '',
  drones_owned_total: '',
  avg_quote_turnaround_hours: '',
  data_delivery_min_days: '',
  data_delivery_max_days: '',
  member_since_year: String(CURRENT_YEAR),
  top_service_ratings_json: {},

  profile_photo_url: '',
  equipment_items_json: [{ name: '', details: '' }],
  portfolio_items_json: [],

  two_sentence_summary: '',
  faq_coverage_answer: '',
  faq_qualifications_answer: '',
  faq_turnaround_answer: '',
  faq_formats_answer: '',
  faq_permissions_answer: '',
  google_business_profile_url: '',
  linkedin_url: '',
  instagram_url: '',
  youtube_url: '',
  facebook_url: '',

  consent_to_pilot_terms: false,
  pilot_terms_version: PILOT_TERMS_VERSION,
  consent_source_page: '/join-as-pilot',
};

const STEP_FIELDS: Record<Step, PilotFormField[]> = {
  1: ['pilot_name', 'business_name', 'email', 'phone', 'website_url', 'base_city'],
  2: ['insurance_provider', 'flyer_id', 'operator_id', 'licence_level'],
  3: [
    'top_service_slugs',
    'top_service_ratings_json',
    'availability_status',
    'coverage_regions',
    'total_projects_completed',
    'years_experience',
    'drone_flight_hours_total',
    'drones_owned_total',
    'avg_quote_turnaround_hours',
    'data_delivery_min_days',
    'data_delivery_max_days',
    'member_since_year',
  ],
  4: ['profile_photo_url', 'equipment_items_json', 'portfolio_items_json'],
  5: [
    'two_sentence_summary',
    'faq_coverage_answer',
    'faq_qualifications_answer',
    'faq_turnaround_answer',
    'faq_formats_answer',
    'faq_permissions_answer',
    'consent_to_pilot_terms',
  ],
};

function normalizeWebsiteInput(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return '';
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function isValidWebsite(raw: string): boolean {
  const normalized = normalizeWebsiteInput(raw);
  if (!normalized) return false;
  try {
    const url = new URL(normalized);
    return Boolean(url.hostname);
  } catch {
    return false;
  }
}

function validateNumberField(value: string, min: number, max: number, label: string): string {
  const trimmed = value.trim();
  if (!trimmed) return `${label} is required.`;
  if (!/^-?\d+$/.test(trimmed)) return `${label} must be a whole number.`;
  const parsed = Number(trimmed);
  if (parsed < min || parsed > max) return `${label} must be between ${min} and ${max}.`;
  return '';
}

function validateField(field: PilotFormField, values: PilotFormValues): string {
  switch (field) {
    case 'pilot_name':
      return values.pilot_name.trim().length >= 2 ? '' : 'Drone pilot name must be at least 2 characters.';
    case 'business_name':
      return values.business_name.trim().length >= 2 ? '' : 'Business name must be at least 2 characters.';
    case 'email':
      return EMAIL_RE.test(values.email.trim()) ? '' : 'Enter a valid email address.';
    case 'phone':
      return values.phone.trim().length >= 6 ? '' : 'Phone number must be at least 6 characters.';
    case 'website_url':
      if (!values.website_url.trim()) return 'Website URL is required.';
      return isValidWebsite(values.website_url) ? '' : 'Enter a valid website URL.';
    case 'base_city':
      return values.base_city.trim().length >= 2 ? '' : 'Base city is required.';
    case 'insurance_provider':
      return values.insurance_provider.trim() ? '' : 'Insurance provider is required.';
    case 'insurance_expiry':
      if (!values.insurance_expiry.trim()) return '';
      return Number.isNaN(new Date(values.insurance_expiry).getTime()) ? 'Enter a valid insurance expiry date.' : '';
    case 'flyer_id':
      return values.flyer_id.trim() ? '' : 'Flyer ID is required.';
    case 'operator_id':
      return values.operator_id.trim() ? '' : 'Operator ID is required.';
    case 'licence_level':
      return values.licence_level.trim() ? '' : 'Select at least one licence level.';
    case 'top_service_slugs':
      return values.top_service_slugs.length === 6
        ? ''
        : 'Select exactly 6 top services to feature on your profile.';
    case 'top_service_ratings_json': {
      if (values.top_service_slugs.length !== 6) return '';
      const missingRating = values.top_service_slugs.find(
        (slug) => !values.top_service_ratings_json[slug],
      );
      return missingRating ? 'Set a rating for each selected top service.' : '';
    }
    case 'availability_status':
      return values.availability_status ? '' : 'Availability status is required.';
    case 'coverage_regions':
      if (values.coverage_uk_wide) return '';
      return values.coverage_regions.length > 0
        ? ''
        : 'Select at least one coverage region or enable UK-wide coverage.';
    case 'total_projects_completed':
      return validateNumberField(values.total_projects_completed, 0, 500000, 'Total projects completed');
    case 'years_experience':
      return validateNumberField(values.years_experience, 0, 80, 'Years experience');
    case 'drone_flight_hours_total':
      return validateNumberField(values.drone_flight_hours_total, 0, 500000, 'Drone flight hours');
    case 'drones_owned_total':
      return validateNumberField(values.drones_owned_total, 0, 200, 'Drones owned');
    case 'avg_quote_turnaround_hours':
      return validateNumberField(values.avg_quote_turnaround_hours, 1, 720, 'Average quote turnaround hours');
    case 'data_delivery_min_days':
      return validateNumberField(values.data_delivery_min_days, 1, 365, 'Minimum data delivery days');
    case 'data_delivery_max_days': {
      const err = validateNumberField(values.data_delivery_max_days, 1, 365, 'Maximum data delivery days');
      if (err) return err;
      const min = Number(values.data_delivery_min_days || 0);
      const max = Number(values.data_delivery_max_days || 0);
      return max >= min ? '' : 'Maximum data delivery days cannot be lower than minimum data delivery days.';
    }
    case 'member_since_year':
      return validateNumberField(values.member_since_year, 2000, CURRENT_YEAR, 'Member since year');
    case 'profile_photo_url':
      return values.profile_photo_url.trim() ? '' : 'Please upload a square 1:1 headshot.';
    case 'equipment_items_json': {
      const validRows = values.equipment_items_json.filter((item) => item.name.trim().length > 0);
      return validRows.length > 0 ? '' : 'Add at least one equipment or drone entry.';
    }
    case 'portfolio_items_json':
      if (values.portfolio_items_json.length === 0) return 'Add at least one portfolio image.';
      if (values.portfolio_items_json.length > 3) return 'You can upload up to 3 portfolio images.';
      return '';
    case 'two_sentence_summary':
      return values.two_sentence_summary.trim().length >= 20
        ? ''
        : 'Profile summary must be at least 20 characters.';
    case 'faq_coverage_answer':
    case 'faq_qualifications_answer':
    case 'faq_turnaround_answer':
    case 'faq_formats_answer':
    case 'faq_permissions_answer':
      return values[field].trim().length >= 12 ? '' : 'Each FAQ answer should be at least 12 characters.';
    case 'google_business_profile_url':
    case 'linkedin_url':
    case 'instagram_url':
    case 'youtube_url':
    case 'facebook_url':
      if (!values[field].trim()) return '';
      return isValidWebsite(values[field]) ? '' : 'Enter a valid URL.';
    case 'consent_to_pilot_terms':
      return values.consent_to_pilot_terms
        ? ''
        : 'You must accept the drone pilot terms to continue.';
    case 'pilot_terms_version':
      return values.pilot_terms_version.trim() ? '' : 'Drone pilot terms version is required.';
    case 'consent_source_page':
    case 'additional_services_note':
    case 'coverage_notes':
      return '';
    default:
      return '';
  }
}

function stepForField(field: PilotFormField): Step {
  if (STEP_FIELDS[1].includes(field)) return 1;
  if (STEP_FIELDS[2].includes(field)) return 2;
  if (STEP_FIELDS[3].includes(field)) return 3;
  if (STEP_FIELDS[4].includes(field)) return 4;
  return 5;
}

export default function PilotApplyPage() {
  const [step, setStep] = useState<Step>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [selectedLicences, setSelectedLicences] = useState<string[]>([]);
  const [values, setValues] = useState<PilotFormValues>(INITIAL_VALUES);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<PilotFormField, string>>>({});

  const photoDropzoneRef = useRef<HTMLDivElement | null>(null);

  const inputClass = 'form-input';

  const setFieldValue = <K extends PilotFormField>(field: K, value: PilotFormValues[K]) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setFormError('');
    setSuccessMessage('');
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const setFieldError = (field: PilotFormField, message: string) => {
    setFieldErrors((prev) => ({ ...prev, [field]: message }));
  };

  const focusField = (field: PilotFormField) => {
    if (field === 'profile_photo_url') {
      photoDropzoneRef.current?.focus();
      photoDropzoneRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    const input = document.querySelector<HTMLElement>(`[name="${field}"]`);
    input?.focus();
    input?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const validateFields = (fields: PilotFormField[], sourceValues: PilotFormValues) => {
    let firstInvalid: PilotFormField | null = null;
    const nextErrors: Partial<Record<PilotFormField, string>> = { ...fieldErrors };

    for (const field of fields) {
      const error = validateField(field, sourceValues);
      if (error) {
        nextErrors[field] = error;
        if (!firstInvalid) firstInvalid = field;
      } else {
        delete nextErrors[field];
      }
    }

    setFieldErrors(nextErrors);
    return { valid: firstInvalid === null, firstInvalid };
  };

  const goNextStep = () => {
    const { valid, firstInvalid } = validateFields(STEP_FIELDS[step], values);
    if (!valid && firstInvalid) {
      focusField(firstInvalid);
      return;
    }
    if (step < 5) setStep((prev) => (prev + 1) as Step);
  };

  const goPrevStep = () => {
    if (step > 1) setStep((prev) => (prev - 1) as Step);
  };

  const toggleLicence = (licence: (typeof LICENCE_OPTIONS)[number]) => {
    const nextSelection = selectedLicences.includes(licence)
      ? selectedLicences.filter((item) => item !== licence)
      : [...selectedLicences, licence];

    setSelectedLicences(nextSelection);
    setFieldValue('licence_level', nextSelection.join(', '));
  };

  const toggleServiceSlug = (slug: string) => {
    const hasSlug = values.top_service_slugs.includes(slug);
    const next = hasSlug
      ? values.top_service_slugs.filter((item) => item !== slug)
      : values.top_service_slugs.length < 6
        ? [...values.top_service_slugs, slug]
        : values.top_service_slugs;
    setFieldValue('top_service_slugs', next);
    const nextRatings: Record<string, PilotServiceLevel | ''> = {};
    for (const selectedSlug of next) {
      nextRatings[selectedSlug] = values.top_service_ratings_json[selectedSlug] || '';
    }
    setFieldValue('top_service_ratings_json', nextRatings);
  };

  const setServiceRating = (slug: string, level: PilotServiceLevel | '') => {
    setFieldValue('top_service_ratings_json', {
      ...values.top_service_ratings_json,
      [slug]: level,
    });
  };

  const toggleCoverageRegion = (region: PilotCoverageRegion) => {
    const hasRegion = values.coverage_regions.includes(region);
    const next = hasRegion
      ? values.coverage_regions.filter((item) => item !== region)
      : [...values.coverage_regions, region];
    setFieldValue('coverage_regions', next as PilotCoverageRegion[]);
  };

  const equipmentRows = useMemo(
    () => values.equipment_items_json,
    [values.equipment_items_json],
  );

  const setEquipmentRow = (index: number, key: keyof EquipmentDraftItem, nextValue: string) => {
    const nextRows = equipmentRows.map((row, rowIndex) =>
      rowIndex === index ? { ...row, [key]: nextValue } : row,
    );
    setFieldValue('equipment_items_json', nextRows);
  };

  const addEquipmentRow = () => {
    if (equipmentRows.length >= 12) return;
    setFieldValue('equipment_items_json', [...equipmentRows, { name: '', details: '' }]);
  };

  const removeEquipmentRow = (index: number) => {
    if (equipmentRows.length === 1) {
      setFieldValue('equipment_items_json', [{ name: '', details: '' }]);
      return;
    }
    setFieldValue('equipment_items_json', equipmentRows.filter((_, rowIndex) => rowIndex !== index));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError('');
    setSuccessMessage('');

    const submitFormData = new FormData(event.currentTarget);
    const honeypotRaw = submitFormData.get(HONEYPOT_FIELD_NAME);
    const honeypot = typeof honeypotRaw === 'string' ? honeypotRaw : '';

    const allFields = [
      ...STEP_FIELDS[1],
      ...STEP_FIELDS[2],
      ...STEP_FIELDS[3],
      ...STEP_FIELDS[4],
      ...STEP_FIELDS[5],
    ];

    const cleanedEquipment = values.equipment_items_json
      .map((item) => ({
        name: item.name.trim(),
        details: item.details.trim(),
      }))
      .filter((item) => item.name.length > 0);

    const cleanedServiceRatings = Object.fromEntries(
      values.top_service_slugs
        .map((slug) => [slug, values.top_service_ratings_json[slug]])
        .filter((entry): entry is [string, PilotServiceLevel] => Boolean(entry[1])),
    );

    const payload: PilotFormValues = {
      ...values,
      website_url: normalizeWebsiteInput(values.website_url),
      google_business_profile_url: normalizeWebsiteInput(values.google_business_profile_url),
      linkedin_url: normalizeWebsiteInput(values.linkedin_url),
      instagram_url: normalizeWebsiteInput(values.instagram_url),
      youtube_url: normalizeWebsiteInput(values.youtube_url),
      facebook_url: normalizeWebsiteInput(values.facebook_url),
      equipment_items_json: cleanedEquipment,
      portfolio_items_json: values.portfolio_items_json,
      top_service_ratings_json: cleanedServiceRatings,
      consent_source_page: typeof window !== 'undefined' ? window.location.pathname : values.consent_source_page,
      pilot_terms_version: values.pilot_terms_version || PILOT_TERMS_VERSION,
    };

    const submissionPayload = {
      ...payload,
      [HONEYPOT_FIELD_NAME]: honeypot,
    };

    const { valid, firstInvalid } = validateFields(allFields, payload);
    if (!valid && firstInvalid) {
      setStep(stepForField(firstInvalid));
      focusField(firstInvalid);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/pilot-applications/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionPayload),
      });

      const body = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(body.error || 'Failed to submit application');
      }

      setSuccessMessage(
        'Application received. We review each profile and will contact you if we need anything else.',
      );
      setValues(INITIAL_VALUES);
      setFieldErrors({});
      setSelectedLicences([]);
      setStep(1);
    } catch (submitError) {
      setFormError(submitError instanceof Error ? submitError.message : 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepTitle =
    step === 1
      ? 'Business Details'
      : step === 2
        ? 'Compliance Details'
        : step === 3
          ? 'Profile Metrics & Services'
          : step === 4
            ? 'Media & Equipment'
            : 'FAQ, Links & Consent';

  return (
    <section className="-mt-[104px] bg-teal pt-[152px] pb-20 md:pt-[176px] md:pb-24">
      <div className="container max-w-5xl">
        <div className="grid gap-3 sm:grid-cols-3 mb-6">
          <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-wide text-white/60">Application time</p>
            <p className="text-white font-semibold">~8 minutes</p>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-wide text-white/60">Profile depth</p>
            <p className="text-white font-semibold">Structured pilot profile</p>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-wide text-white/60">Review process</p>
            <p className="text-white font-semibold">Admin checked before approval</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Drone Pilot Application</h1>
          <p className="text-white/70 mb-6">
            Join our independent drone pilot network. Complete the steps below and we will review
            your profile.
          </p>

          <div className="mb-6">
            <div className="flex items-center justify-between text-sm text-white/80 mb-2">
              <span>{stepTitle}</span>
              <span>
                Step {step} of 5
              </span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <div key={value} className={`h-1.5 rounded-full ${value <= step ? 'bg-gold' : 'bg-white/20'}`} />
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <HoneypotField />

            {step === 1 ? (
              <div className="space-y-4">
                <div>
                  <input
                    name="pilot_name"
                    className={inputClass}
                    placeholder="Drone Pilot Name *"
                    value={values.pilot_name}
                    onChange={(event) => setFieldValue('pilot_name', event.target.value)}
                    onBlur={() => setFieldError('pilot_name', validateField('pilot_name', values))}
                    required
                  />
                  {fieldErrors.pilot_name ? <p className="text-red-200 text-sm mt-1">{fieldErrors.pilot_name}</p> : null}
                </div>

                <div>
                  <input
                    name="business_name"
                    className={inputClass}
                    placeholder="Business Name *"
                    value={values.business_name}
                    onChange={(event) => setFieldValue('business_name', event.target.value)}
                    onBlur={() => setFieldError('business_name', validateField('business_name', values))}
                    required
                  />
                  {fieldErrors.business_name ? (
                    <p className="text-red-200 text-sm mt-1">{fieldErrors.business_name}</p>
                  ) : null}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <input
                      type="email"
                      name="email"
                      className={inputClass}
                      placeholder="Email *"
                      value={values.email}
                      onChange={(event) => setFieldValue('email', event.target.value)}
                      onBlur={() => setFieldError('email', validateField('email', values))}
                      required
                    />
                    {fieldErrors.email ? <p className="text-red-200 text-sm mt-1">{fieldErrors.email}</p> : null}
                  </div>

                  <div>
                    <input
                      name="phone"
                      className={inputClass}
                      placeholder="Phone *"
                      value={values.phone}
                      onChange={(event) => setFieldValue('phone', event.target.value)}
                      onBlur={() => setFieldError('phone', validateField('phone', values))}
                      required
                    />
                    {fieldErrors.phone ? <p className="text-red-200 text-sm mt-1">{fieldErrors.phone}</p> : null}
                  </div>
                </div>

                <div>
                  <input
                    type="url"
                    name="website_url"
                    className={inputClass}
                    placeholder="Website URL *"
                    value={values.website_url}
                    onChange={(event) => setFieldValue('website_url', event.target.value)}
                    onBlur={() => {
                      const normalized = normalizeWebsiteInput(values.website_url);
                      if (normalized) setFieldValue('website_url', normalized);
                      setFieldError('website_url', validateField('website_url', { ...values, website_url: normalized }));
                    }}
                    required
                  />
                  <p className="text-white/60 text-xs mt-1">Use your business website (we accept URLs without https).</p>
                  {fieldErrors.website_url ? <p className="text-red-200 text-sm mt-1">{fieldErrors.website_url}</p> : null}
                </div>

                <div>
                  <input
                    name="base_city"
                    className={inputClass}
                    placeholder="Base City / Area *"
                    value={values.base_city}
                    onChange={(event) => setFieldValue('base_city', event.target.value)}
                    onBlur={() => setFieldError('base_city', validateField('base_city', values))}
                    required
                  />
                  {fieldErrors.base_city ? <p className="text-red-200 text-sm mt-1">{fieldErrors.base_city}</p> : null}
                </div>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="space-y-4">
                <div>
                  <input
                    name="insurance_provider"
                    className={inputClass}
                    placeholder="Insurance Provider *"
                    value={values.insurance_provider}
                    onChange={(event) => setFieldValue('insurance_provider', event.target.value)}
                    onBlur={() => setFieldError('insurance_provider', validateField('insurance_provider', values))}
                    required
                  />
                  {fieldErrors.insurance_provider ? (
                    <p className="text-red-200 text-sm mt-1">{fieldErrors.insurance_provider}</p>
                  ) : null}
                </div>

                <div>
                  <input
                    type="date"
                    name="insurance_expiry"
                    className={inputClass}
                    value={values.insurance_expiry}
                    onChange={(event) => setFieldValue('insurance_expiry', event.target.value)}
                  />
                  <p className="text-white/60 text-xs mt-1">Optional: insurance expiry date.</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <input
                      name="flyer_id"
                      className={inputClass}
                      placeholder="Flyer ID *"
                      value={values.flyer_id}
                      onChange={(event) => setFieldValue('flyer_id', event.target.value)}
                      onBlur={() => setFieldError('flyer_id', validateField('flyer_id', values))}
                      required
                    />
                    <p className="text-white/60 text-xs mt-1">CAA-issued flyer ID.</p>
                    {fieldErrors.flyer_id ? <p className="text-red-200 text-sm mt-1">{fieldErrors.flyer_id}</p> : null}
                  </div>

                  <div>
                    <input
                      name="operator_id"
                      className={inputClass}
                      placeholder="Operator ID *"
                      value={values.operator_id}
                      onChange={(event) => setFieldValue('operator_id', event.target.value)}
                      onBlur={() => setFieldError('operator_id', validateField('operator_id', values))}
                      required
                    />
                    <p className="text-white/60 text-xs mt-1">CAA-issued operator ID.</p>
                    {fieldErrors.operator_id ? (
                      <p className="text-red-200 text-sm mt-1">{fieldErrors.operator_id}</p>
                    ) : null}
                  </div>
                </div>

                <div className="rounded-xl border border-white/20 bg-white/5 p-4 space-y-3">
                  <p className="text-white font-semibold">Licence Level *</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {LICENCE_OPTIONS.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-white/90"
                      >
                        <input
                          type="checkbox"
                          checked={selectedLicences.includes(option)}
                          onChange={() => toggleLicence(option)}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                  {fieldErrors.licence_level ? (
                    <p className="text-red-200 text-sm mt-1">{fieldErrors.licence_level}</p>
                  ) : null}
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div className="space-y-5">
                <div className="rounded-xl border border-white/20 bg-white/5 p-4 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-white font-semibold">Top Services (select exactly 6) *</p>
                    <span className="text-xs text-white/60">{values.top_service_slugs.length}/6 selected</span>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {PILOT_SERVICE_OPTIONS.map((service) => {
                      const checked = values.top_service_slugs.includes(service.slug);
                      const disabled = !checked && values.top_service_slugs.length >= 6;
                      return (
                        <label
                          key={service.slug}
                          className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors ${
                            checked
                              ? 'border-gold/70 bg-gold/10 text-white'
                              : 'border-white/20 bg-white/5 text-white/90'
                          } ${disabled ? 'opacity-60' : ''}`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            disabled={disabled}
                            onChange={() => toggleServiceSlug(service.slug)}
                          />
                          <span>{service.title}</span>
                        </label>
                      );
                    })}
                  </div>
                  {fieldErrors.top_service_slugs ? <p className="text-red-200 text-sm">{fieldErrors.top_service_slugs}</p> : null}
                  {values.top_service_slugs.length > 0 ? (
                    <div className="mt-3 grid gap-2">
                      {values.top_service_slugs.map((slug) => {
                        const service = PILOT_SERVICE_OPTIONS.find((item) => item.slug === slug);
                        return (
                          <div key={`rating-${slug}`} className="grid gap-2 sm:grid-cols-[1fr,220px] sm:items-center">
                            <label className="text-sm text-white/90">{service?.title || slug}</label>
                            <select
                              className={inputClass}
                              value={values.top_service_ratings_json[slug] || ''}
                              onChange={(event) => setServiceRating(slug, event.target.value as PilotServiceLevel | '')}
                            >
                              <option value="" className="text-gray-900">Select rating</option>
                              {PILOT_SERVICE_LEVELS.map((level) => (
                                <option key={`${slug}-${level}`} value={level} className="text-gray-900">
                                  {level}
                                </option>
                              ))}
                            </select>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                  {fieldErrors.top_service_ratings_json ? <p className="text-red-200 text-sm">{fieldErrors.top_service_ratings_json}</p> : null}
                </div>

                <div>
                  <textarea
                    name="additional_services_note"
                    className={`${inputClass} resize-none`}
                    rows={3}
                    placeholder="Optional: additional service capabilities"
                    value={values.additional_services_note}
                    onChange={(event) => setFieldValue('additional_services_note', event.target.value)}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm text-white mb-1">Availability *</label>
                    <select
                      name="availability_status"
                      className={inputClass}
                      value={values.availability_status}
                      onChange={(event) => setFieldValue('availability_status', event.target.value)}
                    >
                      {PILOT_AVAILABILITY_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value} className="text-gray-900">
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {fieldErrors.availability_status ? <p className="text-red-200 text-sm mt-1">{fieldErrors.availability_status}</p> : null}
                  </div>

                  <div className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 flex items-center gap-2">
                    <input
                      id="coverage-uk-wide"
                      type="checkbox"
                      checked={values.coverage_uk_wide}
                      onChange={(event) => setFieldValue('coverage_uk_wide', event.target.checked)}
                    />
                    <label htmlFor="coverage-uk-wide" className="text-sm text-white/90">UK-wide coverage</label>
                  </div>
                </div>

                <div className="rounded-xl border border-white/20 bg-white/5 p-4 space-y-3">
                  <p className="text-white font-semibold">Coverage Regions</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {PILOT_COVERAGE_REGIONS.map((region) => (
                      <label key={region} className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-white/90">
                        <input
                          type="checkbox"
                          checked={values.coverage_regions.includes(region)}
                          disabled={values.coverage_uk_wide}
                          onChange={() => toggleCoverageRegion(region)}
                        />
                        <span>{PILOT_COVERAGE_LABELS[region]}</span>
                      </label>
                    ))}
                  </div>
                  <textarea
                    name="coverage_notes"
                    className={`${inputClass} resize-none`}
                    rows={2}
                    placeholder="Optional: travel notes / primary areas"
                    value={values.coverage_notes}
                    onChange={(event) => setFieldValue('coverage_notes', event.target.value)}
                  />
                  {fieldErrors.coverage_regions ? <p className="text-red-200 text-sm">{fieldErrors.coverage_regions}</p> : null}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      type="number"
                      name="total_projects_completed"
                      className={inputClass}
                      placeholder="Total Career Projects *"
                      value={values.total_projects_completed}
                      onChange={(event) => setFieldValue('total_projects_completed', event.target.value)}
                      onBlur={() => setFieldError('total_projects_completed', validateField('total_projects_completed', values))}
                    />
                    {fieldErrors.total_projects_completed ? <p className="text-red-200 text-sm mt-1">{fieldErrors.total_projects_completed}</p> : null}
                  </div>
                  <div>
                    <input
                      type="number"
                      name="years_experience"
                      className={inputClass}
                      placeholder="Years Experience *"
                      value={values.years_experience}
                      onChange={(event) => setFieldValue('years_experience', event.target.value)}
                      onBlur={() => setFieldError('years_experience', validateField('years_experience', values))}
                    />
                    {fieldErrors.years_experience ? <p className="text-red-200 text-sm mt-1">{fieldErrors.years_experience}</p> : null}
                  </div>
                  <div>
                    <input
                      type="number"
                      name="drone_flight_hours_total"
                      className={inputClass}
                      placeholder="Drone Flight Hours *"
                      value={values.drone_flight_hours_total}
                      onChange={(event) => setFieldValue('drone_flight_hours_total', event.target.value)}
                      onBlur={() => setFieldError('drone_flight_hours_total', validateField('drone_flight_hours_total', values))}
                    />
                    {fieldErrors.drone_flight_hours_total ? <p className="text-red-200 text-sm mt-1">{fieldErrors.drone_flight_hours_total}</p> : null}
                  </div>
                  <div>
                    <input
                      type="number"
                      name="drones_owned_total"
                      className={inputClass}
                      placeholder="Drones Owned *"
                      value={values.drones_owned_total}
                      onChange={(event) => setFieldValue('drones_owned_total', event.target.value)}
                      onBlur={() => setFieldError('drones_owned_total', validateField('drones_owned_total', values))}
                    />
                    {fieldErrors.drones_owned_total ? <p className="text-red-200 text-sm mt-1">{fieldErrors.drones_owned_total}</p> : null}
                  </div>
                  <div>
                    <input
                      type="number"
                      name="avg_quote_turnaround_hours"
                      className={inputClass}
                      placeholder="Average Quote Turnaround (Hours) *"
                      value={values.avg_quote_turnaround_hours}
                      onChange={(event) => setFieldValue('avg_quote_turnaround_hours', event.target.value)}
                      onBlur={() => setFieldError('avg_quote_turnaround_hours', validateField('avg_quote_turnaround_hours', values))}
                    />
                    {fieldErrors.avg_quote_turnaround_hours ? <p className="text-red-200 text-sm mt-1">{fieldErrors.avg_quote_turnaround_hours}</p> : null}
                  </div>
                  <div>
                    <input
                      type="number"
                      name="data_delivery_min_days"
                      className={inputClass}
                      placeholder="Data Delivery Min Days *"
                      value={values.data_delivery_min_days}
                      onChange={(event) => setFieldValue('data_delivery_min_days', event.target.value)}
                      onBlur={() => setFieldError('data_delivery_min_days', validateField('data_delivery_min_days', values))}
                    />
                    {fieldErrors.data_delivery_min_days ? <p className="text-red-200 text-sm mt-1">{fieldErrors.data_delivery_min_days}</p> : null}
                  </div>
                  <div>
                    <input
                      type="number"
                      name="data_delivery_max_days"
                      className={inputClass}
                      placeholder="Data Delivery Max Days *"
                      value={values.data_delivery_max_days}
                      onChange={(event) => setFieldValue('data_delivery_max_days', event.target.value)}
                      onBlur={() => setFieldError('data_delivery_max_days', validateField('data_delivery_max_days', values))}
                    />
                    {fieldErrors.data_delivery_max_days ? <p className="text-red-200 text-sm mt-1">{fieldErrors.data_delivery_max_days}</p> : null}
                  </div>
                  <div>
                    <input
                      type="number"
                      name="member_since_year"
                      className={inputClass}
                      placeholder="Member Since Year *"
                      value={values.member_since_year}
                      onChange={(event) => setFieldValue('member_since_year', event.target.value)}
                      onBlur={() => setFieldError('member_since_year', validateField('member_since_year', values))}
                    />
                    {fieldErrors.member_since_year ? <p className="text-red-200 text-sm mt-1">{fieldErrors.member_since_year}</p> : null}
                  </div>
                </div>
              </div>
            ) : null}

            {step === 4 ? (
              <div className="space-y-5">
                <div ref={photoDropzoneRef} className="space-y-3">
                  <p className="text-white font-semibold text-sm">Drone Pilot Headshot (1:1 square) *</p>
                  <PhotoUploader
                    value={values.profile_photo_url}
                    onChange={(url) => setFieldValue('profile_photo_url', url)}
                    error={fieldErrors.profile_photo_url}
                    className="[&_div[role=button]]:border-white/35 [&_div[role=button]]:bg-white/5 [&_div[role=button]_.text-gray-600]:text-white/80 [&_div[role=button]_.text-gray-400]:text-white/60 [&_p.text-red-600]:text-red-200 [&_button.text-red-600]:text-gold [&_button.text-red-600:hover]:text-gold-light"
                  />
                </div>

                <div className="rounded-xl border border-white/20 bg-white/5 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-white font-semibold">Equipment & Drones *</p>
                    <button type="button" className="text-xs text-gold hover:text-gold-light" onClick={addEquipmentRow}>
                      + Add Row
                    </button>
                  </div>
                  {equipmentRows.map((item, index) => (
                    <div key={`equipment-${index}`} className="grid gap-2 sm:grid-cols-[1.2fr,1fr,auto]">
                      <input
                        className={inputClass}
                        placeholder="Equipment name (e.g. DJI Mavic 3 Enterprise)"
                        value={item.name}
                        onChange={(event) => setEquipmentRow(index, 'name', event.target.value)}
                      />
                      <input
                        className={inputClass}
                        placeholder="Optional details"
                        value={item.details}
                        onChange={(event) => setEquipmentRow(index, 'details', event.target.value)}
                      />
                      <button
                        type="button"
                        className="rounded-lg border border-white/20 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
                        onClick={() => removeEquipmentRow(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  {fieldErrors.equipment_items_json ? <p className="text-red-200 text-sm">{fieldErrors.equipment_items_json}</p> : null}
                </div>

                <div>
                  <p className="text-white font-semibold text-sm mb-2">Portfolio Images (up to 3) *</p>
                  <PortfolioUploader
                    value={values.portfolio_items_json}
                    onChange={(items) => setFieldValue('portfolio_items_json', items)}
                    maxItems={3}
                    error={fieldErrors.portfolio_items_json}
                  />
                </div>
              </div>
            ) : null}

            {step === 5 ? (
              <div className="space-y-5">
                <div>
                  <textarea
                    name="two_sentence_summary"
                    className={`${inputClass} resize-none`}
                    rows={5}
                    placeholder="Two sentence summary *"
                    value={values.two_sentence_summary}
                    onChange={(event) => setFieldValue('two_sentence_summary', event.target.value)}
                    onBlur={() => setFieldError('two_sentence_summary', validateField('two_sentence_summary', values))}
                    required
                  />
                  <p className="text-white/60 text-xs mt-1">
                    Include key sectors, typical jobs, and what makes your service stand out.
                  </p>
                  {fieldErrors.two_sentence_summary ? (
                    <p className="text-red-200 text-sm mt-1">{fieldErrors.two_sentence_summary}</p>
                  ) : null}
                </div>

                <div className="rounded-xl border border-white/20 bg-white/5 p-4 space-y-4">
                  <p className="text-white font-semibold">Profile FAQ Answers *</p>
                  {PILOT_FAQ_QUESTIONS.map((faq) => {
                    const fieldKey = (`faq_${faq.key}_answer`) as PilotFormField;
                    return (
                      <div key={faq.key}>
                        <label className="block text-sm text-white/90 mb-1">{faq.question}</label>
                        <textarea
                          name={fieldKey}
                          className={`${inputClass} resize-none`}
                          rows={2}
                          value={values[fieldKey] as string}
                          onChange={(event) => setFieldValue(fieldKey, event.target.value as never)}
                          onBlur={() => setFieldError(fieldKey, validateField(fieldKey, values))}
                          placeholder="1-2 sentence answer"
                        />
                        {fieldErrors[fieldKey] ? <p className="text-red-200 text-sm mt-1">{fieldErrors[fieldKey]}</p> : null}
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-xl border border-white/20 bg-white/5 p-4 space-y-3">
                  <p className="text-white font-semibold">Links & Social Profiles</p>
                  <input
                    name="google_business_profile_url"
                    className={inputClass}
                    placeholder="Google Business profile/reviews URL (optional)"
                    value={values.google_business_profile_url}
                    onChange={(event) => setFieldValue('google_business_profile_url', event.target.value)}
                    onBlur={() => setFieldError('google_business_profile_url', validateField('google_business_profile_url', values))}
                  />
                  <p className="text-white/60 text-xs">Add your Google profile link to show a verified business badge on your profile.</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      name="linkedin_url"
                      className={inputClass}
                      placeholder="LinkedIn URL (optional)"
                      value={values.linkedin_url}
                      onChange={(event) => setFieldValue('linkedin_url', event.target.value)}
                      onBlur={() => setFieldError('linkedin_url', validateField('linkedin_url', values))}
                    />
                    <input
                      name="instagram_url"
                      className={inputClass}
                      placeholder="Instagram URL (optional)"
                      value={values.instagram_url}
                      onChange={(event) => setFieldValue('instagram_url', event.target.value)}
                      onBlur={() => setFieldError('instagram_url', validateField('instagram_url', values))}
                    />
                    <input
                      name="youtube_url"
                      className={inputClass}
                      placeholder="YouTube URL (optional)"
                      value={values.youtube_url}
                      onChange={(event) => setFieldValue('youtube_url', event.target.value)}
                      onBlur={() => setFieldError('youtube_url', validateField('youtube_url', values))}
                    />
                    <input
                      name="facebook_url"
                      className={inputClass}
                      placeholder="Facebook URL (optional)"
                      value={values.facebook_url}
                      onChange={(event) => setFieldValue('facebook_url', event.target.value)}
                      onBlur={() => setFieldError('facebook_url', validateField('facebook_url', values))}
                    />
                  </div>
                  {fieldErrors.google_business_profile_url ? <p className="text-red-200 text-sm">{fieldErrors.google_business_profile_url}</p> : null}
                  {fieldErrors.linkedin_url ? <p className="text-red-200 text-sm">{fieldErrors.linkedin_url}</p> : null}
                  {fieldErrors.instagram_url ? <p className="text-red-200 text-sm">{fieldErrors.instagram_url}</p> : null}
                  {fieldErrors.youtube_url ? <p className="text-red-200 text-sm">{fieldErrors.youtube_url}</p> : null}
                  {fieldErrors.facebook_url ? <p className="text-red-200 text-sm">{fieldErrors.facebook_url}</p> : null}
                </div>

                <label className="rounded-xl border border-white/20 bg-white/5 p-4 flex items-start gap-3 text-white/85 text-sm">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={values.consent_to_pilot_terms}
                    onChange={(event) => setFieldValue('consent_to_pilot_terms', event.target.checked)}
                    required
                  />
                  <span>
                    I confirm I operate as an independent drone pilot and accept the{' '}
                    <a href="/pilot-terms" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                      Drone Pilot Terms
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                      Privacy Policy
                    </a>
                    . I understand HireDronePilot is an intro marketplace and facilitator only,
                    performs basic document checks only, and does not verify authenticity of uploaded
                    documents.
                  </span>
                </label>
                {fieldErrors.consent_to_pilot_terms ? (
                  <p className="text-red-200 text-sm mt-1">{fieldErrors.consent_to_pilot_terms}</p>
                ) : null}
              </div>
            ) : null}

            {formError ? <p className="text-red-200 text-sm">{formError}</p> : null}
            {successMessage ? <p className="text-green-200 text-sm">{successMessage}</p> : null}

            <div className="sticky bottom-3 md:bottom-auto md:static z-20 bg-teal/95 backdrop-blur rounded-xl border border-white/10 p-3">
              <div
                className={`flex flex-col-reverse gap-3 sm:flex-row ${
                  step === 1 ? 'sm:justify-end' : 'sm:justify-between'
                }`}
              >
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={goPrevStep}
                    className="btn btn-outline-white sm:w-auto w-full disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    Back
                  </button>
                ) : null}

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={goNextStep}
                    className="btn btn-primary btn-shimmer sm:w-auto w-full"
                    disabled={isSubmitting}
                  >
                    Next
                  </button>
                ) : (
                  <button className="btn btn-primary btn-shimmer sm:w-auto w-full" disabled={isSubmitting} type="submit">
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
