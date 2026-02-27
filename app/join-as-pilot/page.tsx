'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import HoneypotField from '@/components/HoneypotField';
import PhotoUploader from '@/components/PhotoUploader';
import PortfolioUploader, { PortfolioDraftItem } from '@/components/PortfolioUploader';
import { HONEYPOT_FIELD_NAME } from '@/lib/honeypot';
import {
  PILOT_AVAILABILITY_OPTIONS,
  PILOT_COVERAGE_LABELS,
  PILOT_COVERAGE_REGIONS,
  PILOT_FAQ_QUESTIONS,
  PILOT_POPULAR_DRONE_MODELS,
  PILOT_SERVICE_GROUPS,
  PILOT_SERVICE_LEVELS,
  PILOT_SERVICE_OPTIONS,
  PilotCoverageRegion,
  PilotServiceLevel,
} from '@/lib/pilot-profile';

type Step = 1 | 2 | 3 | 4 | 5 | 6;

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

type StepDefinition = {
  title: string;
  shortLabel: string;
  fields: PilotFormField[];
};

type MiniStepDefinition = {
  title: string;
  fields: PilotFormField[];
};

type PilotApplicationDraftV2 = {
  version: number;
  savedAt: number;
  step: Step;
  miniStep: number;
  values: PilotFormValues;
};

type ServiceSection = {
  key: string;
  label: string;
  services: Array<{ slug: string; title: string }>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LICENCE_OPTIONS = ['A2 CofC', 'GVC'] as const;
const PILOT_TERMS_VERSION = 'pilot-terms-v1';

const CURRENT_YEAR = new Date().getUTCFullYear();

const DRAFT_STORAGE_KEY = 'pilot-application-draft-v1';
const DRAFT_VERSION = 2;
const DRAFT_MAX_AGE_MS = 14 * 24 * 60 * 60 * 1000;
const MAX_DRONE_ITEMS = 12;

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
  equipment_items_json: [],
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

const STEP_ORDER: Step[] = [1, 2, 3, 4, 5, 6];

const STEP_DEFINITIONS: Record<Step, StepDefinition> = {
  1: {
    title: 'Business Details',
    shortLabel: 'Business',
    fields: ['pilot_name', 'business_name', 'email', 'phone', 'website_url', 'base_city'],
  },
  2: {
    title: 'Compliance Details',
    shortLabel: 'Compliance',
    fields: ['insurance_provider', 'insurance_expiry', 'flyer_id', 'operator_id', 'licence_level'],
  },
  3: {
    title: 'Top Services & Ratings',
    shortLabel: 'Services',
    fields: ['top_service_slugs', 'top_service_ratings_json'],
  },
  4: {
    title: 'Coverage & Metrics',
    shortLabel: 'Coverage',
    fields: [
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
  },
  5: {
    title: 'Media & Equipment',
    shortLabel: 'Media',
    fields: ['profile_photo_url', 'equipment_items_json', 'portfolio_items_json'],
  },
  6: {
    title: 'FAQ, Links & Consent',
    shortLabel: 'Consent',
    fields: [
      'two_sentence_summary',
      'faq_coverage_answer',
      'faq_qualifications_answer',
      'faq_turnaround_answer',
      'faq_formats_answer',
      'faq_permissions_answer',
      'google_business_profile_url',
      'linkedin_url',
      'instagram_url',
      'youtube_url',
      'facebook_url',
      'consent_to_pilot_terms',
    ],
  },
};

const STEP_MINI_STEPS: Record<Step, MiniStepDefinition[]> = {
  1: [
    { title: 'What is your name?', fields: ['pilot_name'] },
    { title: 'What is your business name?', fields: ['business_name'] },
    { title: 'What is your email address?', fields: ['email'] },
    { title: 'What is your phone number?', fields: ['phone'] },
    { title: 'What is your website address?', fields: ['website_url'] },
    { title: 'Where are you based?', fields: ['base_city'] },
  ],
  2: [
    { title: 'Who is your insurance provider?', fields: ['insurance_provider'] },
    { title: 'When does your insurance expire?', fields: ['insurance_expiry'] },
    { title: 'What is your Flyer ID?', fields: ['flyer_id'] },
    { title: 'What is your Operator ID?', fields: ['operator_id'] },
    { title: 'What licence level do you hold?', fields: ['licence_level'] },
  ],
  3: [
    {
      title: 'Pick the 6 Services You Are Most Experienced In',
      fields: ['top_service_slugs'],
    },
    {
      title: 'Rate your experience in these services and add any additional notes',
      fields: ['top_service_ratings_json', 'additional_services_note'],
    },
  ],
  4: [
    { title: 'How quickly are you available for work?', fields: ['availability_status'] },
    { title: 'How much of the UK will you cover?', fields: ['coverage_regions', 'coverage_notes'] },
    { title: 'How many commercial drone jobs have you completed?', fields: ['total_projects_completed'] },
    { title: 'How many years have you been flying drones?', fields: ['years_experience'] },
    {
      title: 'How many total flight hours have you done (hobby + commercial)?',
      fields: ['drone_flight_hours_total'],
    },
    { title: 'How many drones do you own?', fields: ['drones_owned_total'] },
    { title: 'How quickly do you usually return quotes? (hours)', fields: ['avg_quote_turnaround_hours'] },
    { title: 'What is your minimum data delivery time (days)?', fields: ['data_delivery_min_days'] },
    { title: 'What is your maximum data delivery time (days)?', fields: ['data_delivery_max_days'] },
    { title: 'When did you first start flying drones?', fields: ['member_since_year'] },
  ],
  5: [
    { title: 'Upload your pilot headshot', fields: ['profile_photo_url'] },
    { title: 'Drones You Own', fields: ['equipment_items_json'] },
    { title: 'Add portfolio images', fields: ['portfolio_items_json'] },
  ],
  6: [
    { title: 'Describe yourself and your business in 2 sentences', fields: ['two_sentence_summary'] },
    { title: PILOT_FAQ_QUESTIONS[0].question, fields: ['faq_coverage_answer'] },
    { title: PILOT_FAQ_QUESTIONS[1].question, fields: ['faq_qualifications_answer'] },
    { title: PILOT_FAQ_QUESTIONS[2].question, fields: ['faq_turnaround_answer'] },
    { title: PILOT_FAQ_QUESTIONS[3].question, fields: ['faq_formats_answer'] },
    { title: PILOT_FAQ_QUESTIONS[4].question, fields: ['faq_permissions_answer'] },
    {
      title: 'Links & consent',
      fields: [
        'google_business_profile_url',
        'linkedin_url',
        'instagram_url',
        'youtube_url',
        'facebook_url',
        'consent_to_pilot_terms',
      ],
    },
  ],
};

const ALL_STEP_FIELDS: PilotFormField[] = STEP_ORDER.flatMap((step) => STEP_DEFINITIONS[step].fields);
const TOTAL_STEPS = STEP_ORDER.length;

const SERVICE_SLUG_SET = new Set<string>(PILOT_SERVICE_OPTIONS.map((service) => service.slug));
const SERVICE_LEVEL_SET = new Set<string>(PILOT_SERVICE_LEVELS);
const COVERAGE_REGION_SET = new Set<string>(PILOT_COVERAGE_REGIONS);
const AVAILABILITY_SET = new Set<string>(PILOT_AVAILABILITY_OPTIONS.map((option) => option.value));
const LICENCE_SET = new Set<string>(LICENCE_OPTIONS);
const SERVICE_TITLE_MAP = new Map<string, string>(PILOT_SERVICE_OPTIONS.map((service) => [service.slug, service.title]));
const POPULAR_DRONE_SET = new Set<string>(PILOT_POPULAR_DRONE_MODELS);
const URL_FIELDS = [
  'website_url',
  'google_business_profile_url',
  'linkedin_url',
  'instagram_url',
  'youtube_url',
  'facebook_url',
] as const;

const STRING_FIELDS = [
  'pilot_name',
  'business_name',
  'email',
  'phone',
  'website_url',
  'base_city',
  'insurance_provider',
  'insurance_expiry',
  'flyer_id',
  'operator_id',
  'licence_level',
  'additional_services_note',
  'availability_status',
  'coverage_notes',
  'total_projects_completed',
  'years_experience',
  'drone_flight_hours_total',
  'drones_owned_total',
  'avg_quote_turnaround_hours',
  'data_delivery_min_days',
  'data_delivery_max_days',
  'member_since_year',
  'profile_photo_url',
  'two_sentence_summary',
  'faq_coverage_answer',
  'faq_qualifications_answer',
  'faq_turnaround_answer',
  'faq_formats_answer',
  'faq_permissions_answer',
  'google_business_profile_url',
  'linkedin_url',
  'instagram_url',
  'youtube_url',
  'facebook_url',
  'pilot_terms_version',
  'consent_source_page',
] as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

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
      return validateNumberField(values.member_since_year, 2000, CURRENT_YEAR, 'Start year');
    case 'profile_photo_url':
      return values.profile_photo_url.trim() ? '' : 'Please upload a drone pilot headshot.';
    case 'equipment_items_json': {
      const validRows = values.equipment_items_json.filter((item) => item.name.trim().length > 0);
      return validRows.length > 0 ? '' : 'Select at least one drone you own.';
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

function normalizeLicenceLevelValue(raw: unknown): string {
  if (typeof raw !== 'string') return '';
  const normalized = raw
    .split(',')
    .map((item) => item.trim())
    .filter((item) => LICENCE_SET.has(item as (typeof LICENCE_OPTIONS)[number]));
  return Array.from(new Set(normalized)).join(', ');
}

function getSelectedLicences(value: string): string[] {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter((item): item is (typeof LICENCE_OPTIONS)[number] => LICENCE_SET.has(item as (typeof LICENCE_OPTIONS)[number]));
}

function sanitizeDraftValues(rawValues: unknown): PilotFormValues | null {
  if (!isRecord(rawValues)) return null;
  const source = rawValues;

  const next: PilotFormValues = { ...INITIAL_VALUES };

  for (const field of STRING_FIELDS) {
    const value = source[field];
    if (typeof value === 'string') {
      (next as Record<string, unknown>)[field] = value;
    }
  }

  next.licence_level = normalizeLicenceLevelValue(source.licence_level);

  next.coverage_uk_wide =
    typeof source.coverage_uk_wide === 'boolean'
      ? source.coverage_uk_wide
      : INITIAL_VALUES.coverage_uk_wide;

  next.consent_to_pilot_terms =
    typeof source.consent_to_pilot_terms === 'boolean'
      ? source.consent_to_pilot_terms
      : INITIAL_VALUES.consent_to_pilot_terms;

  if (!AVAILABILITY_SET.has(next.availability_status)) {
    next.availability_status = INITIAL_VALUES.availability_status;
  }

  if (Array.isArray(source.coverage_regions)) {
    const regions = source.coverage_regions
      .map((item) =>
        typeof item === 'string'
          ? item.trim().toUpperCase().replace(/[\s-]+/g, '_')
          : '',
      )
      .filter((item): item is PilotCoverageRegion => COVERAGE_REGION_SET.has(item));
    next.coverage_regions = Array.from(new Set(regions));
  }

  if (Array.isArray(source.top_service_slugs)) {
    const slugs = source.top_service_slugs
      .map((item) => (typeof item === 'string' ? item.trim().toLowerCase() : ''))
      .filter((item) => Boolean(item) && SERVICE_SLUG_SET.has(item));
    next.top_service_slugs = Array.from(new Set(slugs)).slice(0, 6);
  }

  const ratingsSource = isRecord(source.top_service_ratings_json)
    ? source.top_service_ratings_json
    : {};
  const sanitizedRatings: Record<string, PilotServiceLevel | ''> = {};
  for (const slug of next.top_service_slugs) {
    const rawLevel = ratingsSource[slug];
    sanitizedRatings[slug] =
      typeof rawLevel === 'string' && SERVICE_LEVEL_SET.has(rawLevel)
        ? (rawLevel as PilotServiceLevel)
        : '';
  }
  next.top_service_ratings_json = sanitizedRatings;

  if (Array.isArray(source.equipment_items_json)) {
    const rows = source.equipment_items_json
      .slice(0, MAX_DRONE_ITEMS)
      .map((item) => {
        if (!isRecord(item)) return null;
        const name = typeof item.name === 'string' ? item.name : '';
        if (!name.trim()) return null;
        return { name, details: '' };
      })
      .filter((item): item is EquipmentDraftItem => Boolean(item));
    next.equipment_items_json = rows;
  }

  if (Array.isArray(source.portfolio_items_json)) {
    next.portfolio_items_json = source.portfolio_items_json
      .slice(0, 3)
      .map((item) => {
        if (typeof item === 'string') {
          return item.trim() ? { image_url: item } : null;
        }
        if (!isRecord(item)) return null;
        if (typeof item.image_url !== 'string' || !item.image_url.trim()) return null;
        return { image_url: item.image_url };
      })
      .filter((item): item is PortfolioDraftItem => Boolean(item));
  }

  return next;
}

function clampDraftStep(raw: unknown): Step {
  if (typeof raw !== 'number' || !Number.isInteger(raw)) return 1;
  return STEP_ORDER.includes(raw as Step) ? (raw as Step) : 1;
}

function miniStepCount(step: Step): number {
  return STEP_MINI_STEPS[step].length;
}

function clampMiniStep(raw: unknown, step: Step): number {
  if (typeof raw !== 'number' || !Number.isInteger(raw)) return 1;
  const max = miniStepCount(step);
  if (raw < 1) return 1;
  if (raw > max) return max;
  return raw;
}

function stepForField(field: PilotFormField): { step: Step; miniStep: number } {
  for (const step of STEP_ORDER) {
    const foundIndex = STEP_MINI_STEPS[step].findIndex((mini) => mini.fields.includes(field));
    if (foundIndex >= 0) return { step, miniStep: foundIndex + 1 };
  }
  return { step: 6, miniStep: 1 };
}

export default function PilotApplyPage() {
  const [step, setStep] = useState<Step>(1);
  const [miniStep, setMiniStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [values, setValues] = useState<PilotFormValues>(INITIAL_VALUES);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<PilotFormField, string>>>({});
  const [isDraftReady, setIsDraftReady] = useState(false);

  const formTopRef = useRef<HTMLDivElement | null>(null);
  const ratingsSectionRef = useRef<HTMLDivElement | null>(null);
  const photoDropzoneRef = useRef<HTMLDivElement | null>(null);
  const portfolioUploaderRef = useRef<HTMLDivElement | null>(null);
  const pendingFocusRef = useRef<PilotFormField | null>(null);
  const skipNextDraftWriteRef = useRef(false);

  const inputClass = 'form-input border-white/30 bg-white/10';

  const selectedLicences = useMemo(
    () => getSelectedLicences(values.licence_level),
    [values.licence_level],
  );
  const selectedEquipmentNames = useMemo(
    () =>
      Array.from(
        new Set(
          values.equipment_items_json
            .map((item) => item.name.trim())
            .filter((name) => name.length > 0),
        ),
      ),
    [values.equipment_items_json],
  );
  const selectedPopularDrones = useMemo(
    () => selectedEquipmentNames.filter((name) => POPULAR_DRONE_SET.has(name)),
    [selectedEquipmentNames],
  );
  const selectedPopularDroneSet = useMemo(
    () => new Set(selectedPopularDrones),
    [selectedPopularDrones],
  );
  const customDroneNames = useMemo(
    () => selectedEquipmentNames.filter((name) => !POPULAR_DRONE_SET.has(name)),
    [selectedEquipmentNames],
  );
  const customDroneText = useMemo(
    () => customDroneNames.join('\n'),
    [customDroneNames],
  );

  const serviceSections = useMemo<ServiceSection[]>(() => {
    const seen = new Set<string>();
    const sections: ServiceSection[] = [];
    for (const group of PILOT_SERVICE_GROUPS) {
      const services: ServiceSection['services'] = [];
      for (const slug of group.serviceSlugs) {
        const title = SERVICE_TITLE_MAP.get(slug);
        if (!title) continue;
        seen.add(slug);
        services.push({ slug, title });
      }
      if (services.length === 0) continue;
      sections.push({
        key: group.key,
        label: group.label,
        services,
      });
    }

    const uncategorized = PILOT_SERVICE_OPTIONS
      .filter((service) => !seen.has(service.slug))
      .map((service) => ({ slug: service.slug, title: service.title }));

    if (uncategorized.length > 0) {
      sections.push({
        key: 'other',
        label: 'Other',
        services: uncategorized,
      });
    }

    return sections;
  }, []);

  const currentStepMiniSteps = STEP_MINI_STEPS[step];
  const currentMiniStepDefinition = currentStepMiniSteps[Math.max(0, miniStep - 1)] || currentStepMiniSteps[0];
  const currentMiniStepFields = currentMiniStepDefinition.fields;
  const isFirstMiniStep = miniStep <= 1;
  const isLastMiniStep = miniStep >= currentStepMiniSteps.length;

  const scrollToFormTop = useCallback((behavior: ScrollBehavior = 'smooth') => {
    formTopRef.current?.scrollIntoView({ behavior, block: 'start' });
  }, []);

  const clearDraft = useCallback(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem(DRAFT_STORAGE_KEY);
  }, []);

  const setStepWithScroll = useCallback(
    (nextStep: Step, nextMiniStep = 1, behavior: ScrollBehavior = 'smooth') => {
      setStep(nextStep);
      setMiniStep(clampMiniStep(nextMiniStep, nextStep));
      window.setTimeout(() => {
        scrollToFormTop(behavior);
      }, 0);
    },
    [scrollToFormTop],
  );

  const setMiniStepWithScroll = useCallback((nextMiniStep: number, behavior: ScrollBehavior = 'smooth') => {
    setMiniStep(clampMiniStep(nextMiniStep, step));
    window.setTimeout(() => {
      scrollToFormTop(behavior);
    }, 0);
  }, [scrollToFormTop, step]);

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
    setFieldErrors((prev) => {
      if (!message) {
        if (!prev[field]) return prev;
        const next = { ...prev };
        delete next[field];
        return next;
      }
      return { ...prev, [field]: message };
    });
  };

  const normalizeAndValidateUrlField = (field: typeof URL_FIELDS[number]) => {
    const normalized = normalizeWebsiteInput(values[field]);
    if (normalized) {
      setFieldValue(field, normalized);
    }
    setFieldError(field, validateField(field, { ...values, [field]: normalized }));
  };

  const focusField = useCallback((field: PilotFormField) => {
    if (field === 'profile_photo_url') {
      const trigger = photoDropzoneRef.current?.querySelector<HTMLElement>('[role="button"]');
      trigger?.focus();
      trigger?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (field === 'portfolio_items_json') {
      const trigger = portfolioUploaderRef.current?.querySelector<HTMLElement>('button[type="button"]');
      trigger?.focus();
      trigger?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (field === 'top_service_ratings_json') {
      const missingSlug = values.top_service_slugs.find((slug) => !values.top_service_ratings_json[slug]);
      if (missingSlug) {
        const ratingInput = document.querySelector<HTMLElement>(`[name="service_rating_${missingSlug}"]`);
        ratingInput?.focus();
        ratingInput?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      ratingsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (field === 'equipment_items_json') {
      const equipmentInput = document.querySelector<HTMLElement>('[name="popular_drone_model"], [name="other_drones"]');
      equipmentInput?.focus();
      equipmentInput?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const input = document.querySelector<HTMLElement>(`[name="${field}"]`);
    input?.focus();
    input?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [values.top_service_ratings_json, values.top_service_slugs]);

  const validateFields = useCallback((fields: PilotFormField[], sourceValues: PilotFormValues) => {
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
  }, [fieldErrors]);

  const goNextStep = () => {
    const { valid, firstInvalid } = validateFields(currentMiniStepFields, values);
    if (!valid && firstInvalid) {
      focusField(firstInvalid);
      return;
    }
    if (!isLastMiniStep) {
      setMiniStepWithScroll(miniStep + 1);
      return;
    }
    if (step < TOTAL_STEPS) {
      setStepWithScroll((step + 1) as Step, 1);
    }
  };

  const goPrevStep = () => {
    if (!isFirstMiniStep) {
      setMiniStepWithScroll(miniStep - 1);
      return;
    }
    if (step > 1) {
      const prevStep = (step - 1) as Step;
      setStepWithScroll(prevStep, miniStepCount(prevStep));
    }
  };

  const toggleLicence = (licence: (typeof LICENCE_OPTIONS)[number]) => {
    const nextSelection = selectedLicences.includes(licence)
      ? selectedLicences.filter((item) => item !== licence)
      : [...selectedLicences, licence];

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

    if (!hasSlug && next.length === 6) {
      window.setTimeout(() => {
        ratingsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    }
  };

  const setServiceRating = (slug: string, level: PilotServiceLevel | '') => {
    setFieldValue('top_service_ratings_json', {
      ...values.top_service_ratings_json,
      [slug]: level,
    });
  };

  const setOwnedDrones = (popularModels: string[], customInput: string) => {
    const customModels = customInput
      .split(/[\n,]+/)
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
    const names = Array.from(new Set([...popularModels, ...customModels])).slice(0, MAX_DRONE_ITEMS);
    setFieldValue(
      'equipment_items_json',
      names.map((name) => ({ name, details: '' })),
    );
  };

  const toggleCoverageRegion = (region: PilotCoverageRegion) => {
    const hasRegion = values.coverage_regions.includes(region);
    const next = hasRegion
      ? values.coverage_regions.filter((item) => item !== region)
      : [...values.coverage_regions, region];
    setFieldValue('coverage_uk_wide', false);
    setFieldValue('coverage_regions', next as PilotCoverageRegion[]);
  };

  const toggleUkNationwide = (checked: boolean) => {
    setFieldValue('coverage_uk_wide', checked);
    if (checked) {
      setFieldValue('coverage_regions', []);
    }
  };

  const togglePopularDroneModel = (model: string) => {
    const nextPopular = selectedPopularDroneSet.has(model)
      ? selectedPopularDrones.filter((item) => item !== model)
      : [...selectedPopularDrones, model];
    setOwnedDrones(nextPopular, customDroneText);
  };

  const setCustomDroneText = (text: string) => {
    setOwnedDrones(selectedPopularDrones, text);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const raw = window.localStorage.getItem(DRAFT_STORAGE_KEY);
      if (!raw) {
        setIsDraftReady(true);
        return;
      }

      const parsed = JSON.parse(raw) as Partial<PilotApplicationDraftV2>;
      if (
        parsed.version !== DRAFT_VERSION ||
        typeof parsed.savedAt !== 'number' ||
        Date.now() - parsed.savedAt > DRAFT_MAX_AGE_MS
      ) {
        clearDraft();
        setIsDraftReady(true);
        return;
      }

      const restoredValues = sanitizeDraftValues(parsed.values);
      if (!restoredValues) {
        clearDraft();
        setIsDraftReady(true);
        return;
      }

      setValues(restoredValues);
      const restoredStep = clampDraftStep(parsed.step);
      setStep(restoredStep);
      setMiniStep(clampMiniStep(parsed.miniStep, restoredStep));
    } catch {
      clearDraft();
    } finally {
      setIsDraftReady(true);
    }
  }, [clearDraft]);

  useEffect(() => {
    if (typeof window === 'undefined' || !isDraftReady) return;

    if (skipNextDraftWriteRef.current) {
      skipNextDraftWriteRef.current = false;
      return;
    }

    const timeout = window.setTimeout(() => {
      const draft: PilotApplicationDraftV2 = {
        version: DRAFT_VERSION,
        savedAt: Date.now(),
        step,
        miniStep,
        values,
      };

      try {
        window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
      } catch (error) {
        if (error instanceof DOMException && error.name === 'QuotaExceededError') {
          const reducedDraft: PilotApplicationDraftV2 = {
            ...draft,
            values: {
              ...values,
              profile_photo_url: '',
              portfolio_items_json: [],
            },
          };
          try {
            window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(reducedDraft));
          } catch {
            // If local storage remains unavailable, continue without draft persistence.
          }
        }
      }
    }, 300);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [isDraftReady, miniStep, step, values]);

  useEffect(() => {
    const pendingField = pendingFocusRef.current;
    if (!pendingField) return;

    pendingFocusRef.current = null;
    window.setTimeout(() => {
      focusField(pendingField);
    }, 0);
  }, [focusField, miniStep, step]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError('');
    setSuccessMessage('');

    const submitFormData = new FormData(event.currentTarget);
    const honeypotRaw = submitFormData.get(HONEYPOT_FIELD_NAME);
    const honeypot = typeof honeypotRaw === 'string' ? honeypotRaw : '';

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

    const { valid, firstInvalid } = validateFields(ALL_STEP_FIELDS, payload);
    if (!valid && firstInvalid) {
      const targetPosition = stepForField(firstInvalid);
      if (targetPosition.step !== step || targetPosition.miniStep !== miniStep) {
        pendingFocusRef.current = firstInvalid;
        setStepWithScroll(targetPosition.step, targetPosition.miniStep);
      } else {
        focusField(firstInvalid);
      }
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
      skipNextDraftWriteRef.current = true;
      clearDraft();
      setValues(INITIAL_VALUES);
      setFieldErrors({});
      setStep(1);
      setMiniStep(1);
      scrollToFormTop('smooth');
    } catch (submitError) {
      setFormError(submitError instanceof Error ? submitError.message : 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepTitle = STEP_DEFINITIONS[step].title;
  const stepMiniTitle = currentMiniStepDefinition.title;

  const fieldId = useCallback((field: PilotFormField) => `pilot-field-${field}`, []);
  const errorId = useCallback((field: PilotFormField) => `pilot-error-${field}`, []);

  const describedBy = useCallback((field: PilotFormField, ...hintIds: string[]) => {
    const ids = [...hintIds];
    if (fieldErrors[field]) ids.push(errorId(field));
    return ids.length > 0 ? ids.join(' ') : undefined;
  }, [errorId, fieldErrors]);

  const renderFieldError = useCallback((field: PilotFormField, className = 'text-red-200 text-sm mt-1') => {
    if (!fieldErrors[field]) return null;
    return (
      <p id={errorId(field)} role="alert" aria-live="polite" className={className}>
        {fieldErrors[field]}
      </p>
    );
  }, [errorId, fieldErrors]);

  return (
    <section className="-mt-[96px] bg-teal pt-[132px] pb-20 md:pt-[150px] md:pb-24">
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
          <div ref={formTopRef} />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Drone Pilot Application</h1>
          <p className="text-white/70 mb-6">
            Join our independent drone pilot network. Complete the steps below and we will review
            your profile.
          </p>

          <div className="mb-6">
            <div className="flex items-center justify-between text-sm text-white/80 mb-2">
              <span>{stepTitle}</span>
              <span>
                Step {step} of {TOTAL_STEPS}
              </span>
            </div>
            <div className="mb-3 rounded-lg border border-white/15 bg-white/5 px-3 py-2">
              <p className="text-white text-sm font-medium">{stepMiniTitle}</p>
              <p className="text-white/60 text-xs mt-0.5">
                Question {miniStep} of {currentStepMiniSteps.length}
              </p>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {STEP_ORDER.map((value) => (
                <div key={value} className={`h-1.5 rounded-full ${value <= step ? 'bg-gold' : 'bg-white/20'}`} />
              ))}
            </div>
            <div className="mt-2 grid grid-cols-6 gap-2 text-[10px] leading-tight text-white/65 md:text-xs">
              {STEP_ORDER.map((value) => (
                <span
                  key={`label-${value}`}
                  className={`text-center ${value === step ? 'text-white' : 'text-white/60'}`}
                >
                  <span className="md:hidden">{STEP_DEFINITIONS[value].shortLabel}</span>
                  <span className="hidden md:inline">{STEP_DEFINITIONS[value].title}</span>
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <HoneypotField />

            {step === 1 ? (
              <fieldset className="space-y-4">
                <legend className="sr-only">Business Details</legend>

                {miniStep === 1 ? (
                  <div>
                    <label htmlFor={fieldId('pilot_name')} className="block text-sm text-white mb-1">
                      Drone Pilot Name *
                    </label>
                    <input
                      id={fieldId('pilot_name')}
                      name="pilot_name"
                      autoComplete="name"
                      className={inputClass}
                      placeholder="e.g. Alex Smith"
                      value={values.pilot_name}
                      aria-invalid={Boolean(fieldErrors.pilot_name)}
                      aria-describedby={describedBy('pilot_name')}
                      onChange={(event) => setFieldValue('pilot_name', event.target.value)}
                      onBlur={() => setFieldError('pilot_name', validateField('pilot_name', values))}
                      required
                      autoFocus
                    />
                    {renderFieldError('pilot_name')}
                  </div>
                ) : null}

                {miniStep === 2 ? (
                  <div>
                    <label htmlFor={fieldId('business_name')} className="block text-sm text-white mb-1">
                      Business Name *
                    </label>
                    <input
                      id={fieldId('business_name')}
                      name="business_name"
                      autoComplete="organization"
                      className={inputClass}
                      placeholder="e.g. Test Drone Services Ltd"
                      value={values.business_name}
                      aria-invalid={Boolean(fieldErrors.business_name)}
                      aria-describedby={describedBy('business_name')}
                      onChange={(event) => setFieldValue('business_name', event.target.value)}
                      onBlur={() => setFieldError('business_name', validateField('business_name', values))}
                      required
                      autoFocus
                    />
                    {renderFieldError('business_name')}
                  </div>
                ) : null}

                {miniStep === 3 ? (
                  <div>
                    <label htmlFor={fieldId('email')} className="block text-sm text-white mb-1">
                      Email *
                    </label>
                    <input
                      id={fieldId('email')}
                      type="email"
                      name="email"
                      autoComplete="email"
                      className={inputClass}
                      placeholder="you@example.com"
                      value={values.email}
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={describedBy('email')}
                      onChange={(event) => setFieldValue('email', event.target.value)}
                      onBlur={() => setFieldError('email', validateField('email', values))}
                      required
                      autoFocus
                    />
                    {renderFieldError('email')}
                  </div>
                ) : null}

                {miniStep === 4 ? (
                  <div>
                    <label htmlFor={fieldId('phone')} className="block text-sm text-white mb-1">
                      Phone *
                    </label>
                    <input
                      id={fieldId('phone')}
                      type="tel"
                      inputMode="tel"
                      name="phone"
                      autoComplete="tel"
                      className={inputClass}
                      placeholder="e.g. 07700900000"
                      value={values.phone}
                      aria-invalid={Boolean(fieldErrors.phone)}
                      aria-describedby={describedBy('phone')}
                      onChange={(event) => setFieldValue('phone', event.target.value)}
                      onBlur={() => setFieldError('phone', validateField('phone', values))}
                      required
                      autoFocus
                    />
                    {renderFieldError('phone')}
                  </div>
                ) : null}

                {miniStep === 5 ? (
                  <div>
                    <label htmlFor={fieldId('website_url')} className="block text-sm text-white mb-1">
                      Website URL *
                    </label>
                    <input
                      id={fieldId('website_url')}
                      type="url"
                      name="website_url"
                      autoComplete="url"
                      className={inputClass}
                      placeholder="https://example.com"
                      value={values.website_url}
                      aria-invalid={Boolean(fieldErrors.website_url)}
                      aria-describedby={describedBy('website_url', 'pilot-website-url-hint')}
                      onChange={(event) => setFieldValue('website_url', event.target.value)}
                      onBlur={() => normalizeAndValidateUrlField('website_url')}
                      required
                      autoFocus
                    />
                    <p id="pilot-website-url-hint" className="text-white/60 text-xs mt-1">
                      Use your business website (we accept URLs without https).
                    </p>
                    {renderFieldError('website_url')}
                  </div>
                ) : null}

                {miniStep === 6 ? (
                  <div>
                    <label htmlFor={fieldId('base_city')} className="block text-sm text-white mb-1">
                      Base City / Area *
                    </label>
                    <input
                      id={fieldId('base_city')}
                      name="base_city"
                      autoComplete="address-level2"
                      className={inputClass}
                      placeholder="e.g. London"
                      value={values.base_city}
                      aria-invalid={Boolean(fieldErrors.base_city)}
                      aria-describedby={describedBy('base_city')}
                      onChange={(event) => setFieldValue('base_city', event.target.value)}
                      onBlur={() => setFieldError('base_city', validateField('base_city', values))}
                      required
                      autoFocus
                    />
                    {renderFieldError('base_city')}
                  </div>
                ) : null}
              </fieldset>
            ) : null}

            {step === 2 ? (
              <fieldset className="space-y-4">
                <legend className="sr-only">Compliance Details</legend>

                {miniStep === 1 ? (
                  <div>
                    <label htmlFor={fieldId('insurance_provider')} className="block text-sm text-white mb-1">
                      Insurance Provider *
                    </label>
                    <input
                      id={fieldId('insurance_provider')}
                      name="insurance_provider"
                      className={inputClass}
                      placeholder="e.g. Coverdrone"
                      value={values.insurance_provider}
                      aria-invalid={Boolean(fieldErrors.insurance_provider)}
                      aria-describedby={describedBy('insurance_provider')}
                      onChange={(event) => setFieldValue('insurance_provider', event.target.value)}
                      onBlur={() => setFieldError('insurance_provider', validateField('insurance_provider', values))}
                      required
                      autoFocus
                    />
                    {renderFieldError('insurance_provider')}
                  </div>
                ) : null}

                {miniStep === 2 ? (
                  <div>
                    <label htmlFor={fieldId('insurance_expiry')} className="block text-sm text-white mb-1">
                      Insurance Expiry Date
                    </label>
                    <input
                      id={fieldId('insurance_expiry')}
                      type="date"
                      name="insurance_expiry"
                      className={inputClass}
                      value={values.insurance_expiry}
                      onChange={(event) => setFieldValue('insurance_expiry', event.target.value)}
                      autoFocus
                    />
                    <p className="text-white/60 text-xs mt-1">Optional: insurance expiry date.</p>
                    {renderFieldError('insurance_expiry')}
                  </div>
                ) : null}

                {miniStep === 3 ? (
                  <div>
                    <label htmlFor={fieldId('flyer_id')} className="block text-sm text-white mb-1">
                      Flyer ID *
                    </label>
                    <input
                      id={fieldId('flyer_id')}
                      name="flyer_id"
                      autoComplete="off"
                      className={inputClass}
                      placeholder="e.g. FLY-123456"
                      value={values.flyer_id}
                      aria-invalid={Boolean(fieldErrors.flyer_id)}
                      aria-describedby={describedBy('flyer_id', 'pilot-flyer-id-hint')}
                      onChange={(event) => setFieldValue('flyer_id', event.target.value)}
                      onBlur={() => setFieldError('flyer_id', validateField('flyer_id', values))}
                      required
                      autoFocus
                    />
                    <p id="pilot-flyer-id-hint" className="text-white/60 text-xs mt-1">CAA-issued flyer ID.</p>
                    {renderFieldError('flyer_id')}
                  </div>
                ) : null}

                {miniStep === 4 ? (
                  <div>
                    <label htmlFor={fieldId('operator_id')} className="block text-sm text-white mb-1">
                      Operator ID *
                    </label>
                    <input
                      id={fieldId('operator_id')}
                      name="operator_id"
                      autoComplete="off"
                      className={inputClass}
                      placeholder="e.g. OP-789012"
                      value={values.operator_id}
                      aria-invalid={Boolean(fieldErrors.operator_id)}
                      aria-describedby={describedBy('operator_id', 'pilot-operator-id-hint')}
                      onChange={(event) => setFieldValue('operator_id', event.target.value)}
                      onBlur={() => setFieldError('operator_id', validateField('operator_id', values))}
                      required
                      autoFocus
                    />
                    <p id="pilot-operator-id-hint" className="text-white/60 text-xs mt-1">CAA-issued operator ID.</p>
                    {renderFieldError('operator_id')}
                  </div>
                ) : null}

                {miniStep === 5 ? (
                  <div className="rounded-xl border border-white/20 bg-white/5 p-4 space-y-3">
                    <p className="text-white font-semibold">Licence Level *</p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {LICENCE_OPTIONS.map((option) => {
                        const id = `${fieldId('licence_level')}-${option.toLowerCase().replace(/\s+/g, '-')}`;
                        return (
                          <label
                            htmlFor={id}
                            key={option}
                            className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-white/90"
                          >
                            <input
                              id={id}
                              type="checkbox"
                              name="licence_level"
                              checked={selectedLicences.includes(option)}
                              aria-invalid={Boolean(fieldErrors.licence_level)}
                              aria-describedby={describedBy('licence_level')}
                              onChange={() => toggleLicence(option)}
                              autoFocus={option === LICENCE_OPTIONS[0]}
                            />
                            <span>{option}</span>
                          </label>
                        );
                      })}
                    </div>
                    {renderFieldError('licence_level')}
                  </div>
                ) : null}
              </fieldset>
            ) : null}

            {step === 3 ? (
              <fieldset className="space-y-5">
                <legend className="sr-only">Top Services & Ratings</legend>

                {miniStep === 1 ? (
                  <div className="rounded-xl border border-white/20 bg-white/5 p-4 space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-white font-semibold">Top Services (select exactly 6) *</p>
                      <span className="text-xs text-white/60">{values.top_service_slugs.length}/6 selected</span>
                    </div>

                    <div className="space-y-3">
                      {serviceSections.map((section) => (
                        <div key={section.key} className="rounded-lg border border-white/15 bg-white/5 p-3">
                          <p className="text-xs uppercase tracking-wide text-white/60 mb-2">{section.label}</p>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {section.services.map((service) => {
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
                                    name="top_service_slugs"
                                    checked={checked}
                                    disabled={disabled}
                                    aria-invalid={Boolean(fieldErrors.top_service_slugs)}
                                    aria-describedby={describedBy('top_service_slugs')}
                                    onChange={() => toggleServiceSlug(service.slug)}
                                    autoFocus={section === serviceSections[0] && service.slug === serviceSections[0]?.services[0]?.slug}
                                  />
                                  <span>{service.title}</span>
                                </label>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                    {renderFieldError('top_service_slugs', 'text-red-200 text-sm')}
                  </div>
                ) : null}

                {miniStep === 2 ? (
                  <>
                    <div ref={ratingsSectionRef} className="rounded-xl border border-white/20 bg-white/5 p-4 space-y-3">
                      <p className="text-sm text-white/90">Set a rating for each selected top service.</p>
                      {values.top_service_slugs.length === 0 ? (
                        <p className="text-sm text-white/70">Select your top 6 services first.</p>
                      ) : (
                        <div className="grid gap-2">
                          {values.top_service_slugs.map((slug, index) => (
                            <div key={`rating-${slug}`} className="grid gap-2 sm:grid-cols-[1fr,220px] sm:items-center">
                              <label htmlFor={`service-rating-${slug}`} className="text-sm text-white/90">
                                {SERVICE_TITLE_MAP.get(slug) || slug}
                              </label>
                              <select
                                id={`service-rating-${slug}`}
                                name={`service_rating_${slug}`}
                                className={inputClass}
                                value={values.top_service_ratings_json[slug] || ''}
                                aria-invalid={Boolean(fieldErrors.top_service_ratings_json)}
                                aria-describedby={describedBy('top_service_ratings_json')}
                                onChange={(event) => setServiceRating(slug, event.target.value as PilotServiceLevel | '')}
                                autoFocus={index === 0}
                              >
                                <option value="" className="text-gray-900">Select rating</option>
                                {PILOT_SERVICE_LEVELS.map((level) => (
                                  <option key={`${slug}-${level}`} value={level} className="text-gray-900">
                                    {level}
                                  </option>
                                ))}
                              </select>
                            </div>
                          ))}
                        </div>
                      )}
                      {renderFieldError('top_service_ratings_json', 'text-red-200 text-sm')}
                    </div>

                    <div>
                      <label htmlFor={fieldId('additional_services_note')} className="block text-sm text-white mb-1">
                        Additional Service Capabilities
                      </label>
                      <textarea
                        id={fieldId('additional_services_note')}
                        name="additional_services_note"
                        className={`${inputClass} resize-none`}
                        rows={3}
                        placeholder="Optional: additional service capabilities"
                        value={values.additional_services_note}
                        onChange={(event) => setFieldValue('additional_services_note', event.target.value)}
                      />
                    </div>
                  </>
                ) : null}
              </fieldset>
            ) : null}

            {step === 4 ? (
              <fieldset className="space-y-5">
                <legend className="sr-only">Coverage & Metrics</legend>
                {miniStep === 1 ? (
                  <div>
                    <label htmlFor={fieldId('availability_status')} className="block text-sm text-white mb-1">
                      How quickly are you available for work? *
                    </label>
                    <select
                      id={fieldId('availability_status')}
                      name="availability_status"
                      className={inputClass}
                      value={values.availability_status}
                      aria-invalid={Boolean(fieldErrors.availability_status)}
                      aria-describedby={describedBy('availability_status')}
                      onChange={(event) => setFieldValue('availability_status', event.target.value)}
                      autoFocus
                    >
                      {PILOT_AVAILABILITY_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value} className="text-gray-900">
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {renderFieldError('availability_status')}
                  </div>
                ) : null}

                {miniStep === 2 ? (
                  <div className="rounded-xl border border-white/20 bg-white/5 p-4 space-y-3">
                    <p className="text-white font-semibold">How much of the UK will you cover? *</p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <label className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-white/90">
                        <input
                          type="checkbox"
                          name="coverage_uk_wide"
                          checked={values.coverage_uk_wide}
                          onChange={(event) => toggleUkNationwide(event.target.checked)}
                          aria-invalid={Boolean(fieldErrors.coverage_regions)}
                          aria-describedby={describedBy('coverage_regions')}
                          autoFocus
                        />
                        <span>UK Nationwide</span>
                      </label>
                      {PILOT_COVERAGE_REGIONS.map((region) => (
                        <label key={region} className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-white/90">
                          <input
                            type="checkbox"
                            name="coverage_regions"
                            checked={values.coverage_regions.includes(region)}
                            disabled={values.coverage_uk_wide}
                            aria-invalid={Boolean(fieldErrors.coverage_regions)}
                            aria-describedby={describedBy('coverage_regions')}
                            onChange={() => toggleCoverageRegion(region)}
                          />
                          <span>{PILOT_COVERAGE_LABELS[region]}</span>
                        </label>
                      ))}
                    </div>
                    <label htmlFor={fieldId('coverage_notes')} className="block text-sm text-white mb-1">
                      Coverage Notes
                    </label>
                    <textarea
                      id={fieldId('coverage_notes')}
                      name="coverage_notes"
                      className={`${inputClass} resize-none`}
                      rows={2}
                      placeholder="Optional: travel notes / primary areas"
                      value={values.coverage_notes}
                      onChange={(event) => setFieldValue('coverage_notes', event.target.value)}
                    />
                    {renderFieldError('coverage_regions', 'text-red-200 text-sm')}
                  </div>
                ) : null}

                {miniStep === 3 ? (
                  <div>
                    <label htmlFor={fieldId('total_projects_completed')} className="block text-sm text-white mb-1">
                      How Many Commercial Drone Jobs Have You Completed? *
                    </label>
                    <input
                      id={fieldId('total_projects_completed')}
                      type="number"
                      min={0}
                      max={500000}
                      step={1}
                      name="total_projects_completed"
                      className={inputClass}
                      value={values.total_projects_completed}
                      aria-invalid={Boolean(fieldErrors.total_projects_completed)}
                      aria-describedby={describedBy('total_projects_completed')}
                      onChange={(event) => setFieldValue('total_projects_completed', event.target.value)}
                      onBlur={() => setFieldError('total_projects_completed', validateField('total_projects_completed', values))}
                      autoFocus
                    />
                    {renderFieldError('total_projects_completed')}
                  </div>
                ) : null}

                {miniStep === 4 ? (
                  <div>
                    <label htmlFor={fieldId('years_experience')} className="block text-sm text-white mb-1">
                      How Many Years Have You Been Flying Drones? *
                    </label>
                    <input
                      id={fieldId('years_experience')}
                      type="number"
                      min={0}
                      max={80}
                      step={1}
                      name="years_experience"
                      className={inputClass}
                      value={values.years_experience}
                      aria-invalid={Boolean(fieldErrors.years_experience)}
                      aria-describedby={describedBy('years_experience')}
                      onChange={(event) => setFieldValue('years_experience', event.target.value)}
                      onBlur={() => setFieldError('years_experience', validateField('years_experience', values))}
                      autoFocus
                    />
                    {renderFieldError('years_experience')}
                  </div>
                ) : null}

                {miniStep === 5 ? (
                  <div>
                    <label htmlFor={fieldId('drone_flight_hours_total')} className="block text-sm text-white mb-1">
                      How Many Hours Have You Done Flying Drones (Hobby + Commercial)? *
                    </label>
                    <input
                      id={fieldId('drone_flight_hours_total')}
                      type="number"
                      min={0}
                      max={500000}
                      step={1}
                      name="drone_flight_hours_total"
                      className={inputClass}
                      value={values.drone_flight_hours_total}
                      aria-invalid={Boolean(fieldErrors.drone_flight_hours_total)}
                      aria-describedby={describedBy('drone_flight_hours_total')}
                      onChange={(event) => setFieldValue('drone_flight_hours_total', event.target.value)}
                      onBlur={() => setFieldError('drone_flight_hours_total', validateField('drone_flight_hours_total', values))}
                      autoFocus
                    />
                    {renderFieldError('drone_flight_hours_total')}
                  </div>
                ) : null}

                {miniStep === 6 ? (
                  <div>
                    <label htmlFor={fieldId('drones_owned_total')} className="block text-sm text-white mb-1">
                      How many drones do you own? *
                    </label>
                    <input
                      id={fieldId('drones_owned_total')}
                      type="number"
                      min={0}
                      max={200}
                      step={1}
                      name="drones_owned_total"
                      className={inputClass}
                      value={values.drones_owned_total}
                      aria-invalid={Boolean(fieldErrors.drones_owned_total)}
                      aria-describedby={describedBy('drones_owned_total')}
                      onChange={(event) => setFieldValue('drones_owned_total', event.target.value)}
                      onBlur={() => setFieldError('drones_owned_total', validateField('drones_owned_total', values))}
                      autoFocus
                    />
                    {renderFieldError('drones_owned_total')}
                  </div>
                ) : null}

                {miniStep === 7 ? (
                  <div>
                    <label htmlFor={fieldId('avg_quote_turnaround_hours')} className="block text-sm text-white mb-1">
                      Average Quote Turnaround (Hours) *
                    </label>
                    <input
                      id={fieldId('avg_quote_turnaround_hours')}
                      type="number"
                      min={1}
                      max={720}
                      step={1}
                      name="avg_quote_turnaround_hours"
                      className={inputClass}
                      value={values.avg_quote_turnaround_hours}
                      aria-invalid={Boolean(fieldErrors.avg_quote_turnaround_hours)}
                      aria-describedby={describedBy('avg_quote_turnaround_hours', 'pilot-turnaround-hint')}
                      onChange={(event) => setFieldValue('avg_quote_turnaround_hours', event.target.value)}
                      onBlur={() => setFieldError('avg_quote_turnaround_hours', validateField('avg_quote_turnaround_hours', values))}
                      autoFocus
                    />
                    <p id="pilot-turnaround-hint" className="text-white/60 text-xs mt-1">
                      Typical time to respond with a quote.
                    </p>
                    {renderFieldError('avg_quote_turnaround_hours')}
                  </div>
                ) : null}

                {miniStep === 8 ? (
                  <div>
                    <label htmlFor={fieldId('data_delivery_min_days')} className="block text-sm text-white mb-1">
                      Data Delivery Min Days *
                    </label>
                    <input
                      id={fieldId('data_delivery_min_days')}
                      type="number"
                      min={1}
                      max={365}
                      step={1}
                      name="data_delivery_min_days"
                      className={inputClass}
                      value={values.data_delivery_min_days}
                      aria-invalid={Boolean(fieldErrors.data_delivery_min_days)}
                      aria-describedby={describedBy('data_delivery_min_days')}
                      onChange={(event) => setFieldValue('data_delivery_min_days', event.target.value)}
                      onBlur={() => setFieldError('data_delivery_min_days', validateField('data_delivery_min_days', values))}
                      autoFocus
                    />
                    {renderFieldError('data_delivery_min_days')}
                  </div>
                ) : null}

                {miniStep === 9 ? (
                  <div>
                    <label htmlFor={fieldId('data_delivery_max_days')} className="block text-sm text-white mb-1">
                      Data Delivery Max Days *
                    </label>
                    <input
                      id={fieldId('data_delivery_max_days')}
                      type="number"
                      min={1}
                      max={365}
                      step={1}
                      name="data_delivery_max_days"
                      className={inputClass}
                      value={values.data_delivery_max_days}
                      aria-invalid={Boolean(fieldErrors.data_delivery_max_days)}
                      aria-describedby={describedBy('data_delivery_max_days')}
                      onChange={(event) => setFieldValue('data_delivery_max_days', event.target.value)}
                      onBlur={() => setFieldError('data_delivery_max_days', validateField('data_delivery_max_days', values))}
                      autoFocus
                    />
                    {renderFieldError('data_delivery_max_days')}
                  </div>
                ) : null}

                {miniStep === 10 ? (
                  <div>
                    <label htmlFor={fieldId('member_since_year')} className="block text-sm text-white mb-1">
                      When did you first start flying drones? *
                    </label>
                    <input
                      id={fieldId('member_since_year')}
                      type="number"
                      min={2000}
                      max={CURRENT_YEAR}
                      step={1}
                      name="member_since_year"
                      className={inputClass}
                      value={values.member_since_year}
                      aria-invalid={Boolean(fieldErrors.member_since_year)}
                      aria-describedby={describedBy('member_since_year', 'pilot-member-since-hint')}
                      onChange={(event) => setFieldValue('member_since_year', event.target.value)}
                      onBlur={() => setFieldError('member_since_year', validateField('member_since_year', values))}
                      autoFocus
                    />
                    <p id="pilot-member-since-hint" className="text-white/60 text-xs mt-1">
                      Enter the year you first started flying drones.
                    </p>
                    {renderFieldError('member_since_year')}
                  </div>
                ) : null}
              </fieldset>
            ) : null}

            {step === 5 ? (
              <fieldset className="space-y-5">
                <legend className="sr-only">Media & Equipment</legend>

                {miniStep === 1 ? (
                  <div ref={photoDropzoneRef} className="space-y-3">
                    <p className="text-white font-semibold text-sm">Drone Pilot Headshot *</p>
                    <p className="text-white/60 text-xs">Upload any image ratio. We automatically crop to square.</p>
                    <PhotoUploader
                      value={values.profile_photo_url}
                      onChange={(url) => setFieldValue('profile_photo_url', url)}
                      error={fieldErrors.profile_photo_url}
                      className="[&_div[role=button]]:border-white/35 [&_div[role=button]]:bg-white/5 [&_div[role=button]_.text-gray-600]:text-white/80 [&_div[role=button]_.text-gray-400]:text-white/60 [&_p.text-red-600]:text-red-200 [&_button.text-red-600]:text-gold [&_button.text-red-600:hover]:text-gold-light"
                    />
                  </div>
                ) : null}

                {miniStep === 2 ? (
                  <div className="rounded-xl border border-white/20 bg-white/5 p-4 space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-white font-semibold">Drones You Own *</p>
                      <span className="text-xs text-white/60">{selectedEquipmentNames.length}/{MAX_DRONE_ITEMS} selected</span>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {PILOT_POPULAR_DRONE_MODELS.map((model, index) => (
                        <label
                          key={model}
                          className={`flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-white/90 ${
                            !selectedPopularDroneSet.has(model) && selectedEquipmentNames.length >= MAX_DRONE_ITEMS
                              ? 'opacity-60'
                              : ''
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="popular_drone_model"
                            checked={selectedPopularDroneSet.has(model)}
                            disabled={!selectedPopularDroneSet.has(model) && selectedEquipmentNames.length >= MAX_DRONE_ITEMS}
                            onChange={() => togglePopularDroneModel(model)}
                            autoFocus={index === 0}
                          />
                          <span>{model}</span>
                        </label>
                      ))}
                    </div>
                    <p className="text-white/60 text-xs">You can list up to {MAX_DRONE_ITEMS} drones.</p>
                    <div>
                      <label htmlFor="other-drones" className="block text-sm text-white mb-1">
                        Other Drones
                      </label>
                      <textarea
                        id="other-drones"
                        name="other_drones"
                        className={`${inputClass} resize-y`}
                        rows={4}
                        placeholder="Add one drone per line (optional)"
                        value={customDroneText}
                        onChange={(event) => setCustomDroneText(event.target.value)}
                      />
                    </div>
                    {renderFieldError('equipment_items_json', 'text-red-200 text-sm')}
                  </div>
                ) : null}

                {miniStep === 3 ? (
                  <div ref={portfolioUploaderRef}>
                    <p className="text-white font-semibold text-sm mb-2">Portfolio Images (up to 3) *</p>
                    <PortfolioUploader
                      value={values.portfolio_items_json}
                      onChange={(items) => setFieldValue('portfolio_items_json', items)}
                      maxItems={3}
                      error={fieldErrors.portfolio_items_json}
                    />
                  </div>
                ) : null}
              </fieldset>
            ) : null}

            {step === 6 ? (
              <fieldset className="space-y-5">
                <legend className="sr-only">FAQ, Links & Consent</legend>
                {miniStep === 1 ? (
                  <div>
                    <label htmlFor={fieldId('two_sentence_summary')} className="block text-sm text-white mb-1">
                      Two Sentence Summary *
                    </label>
                    <textarea
                      id={fieldId('two_sentence_summary')}
                      name="two_sentence_summary"
                      className={`${inputClass} resize-none`}
                      rows={5}
                      placeholder="Describe yourself and your business in 2 sentences."
                      value={values.two_sentence_summary}
                      aria-invalid={Boolean(fieldErrors.two_sentence_summary)}
                      aria-describedby={describedBy('two_sentence_summary', 'pilot-summary-hint')}
                      onChange={(event) => setFieldValue('two_sentence_summary', event.target.value)}
                      onBlur={() => setFieldError('two_sentence_summary', validateField('two_sentence_summary', values))}
                      required
                      autoFocus
                    />
                    <p id="pilot-summary-hint" className="text-white/60 text-xs mt-1">
                      Describe yourself and your business in 2 sentences.
                    </p>
                    {renderFieldError('two_sentence_summary')}
                  </div>
                ) : null}

                {miniStep >= 2 && miniStep <= 6 ? (
                  <div>
                    {(() => {
                      const faqFieldByMiniStep: Record<number, PilotFormField> = {
                        2: 'faq_coverage_answer',
                        3: 'faq_qualifications_answer',
                        4: 'faq_turnaround_answer',
                        5: 'faq_formats_answer',
                        6: 'faq_permissions_answer',
                      };
                      const fieldKey = faqFieldByMiniStep[miniStep];
                      if (!fieldKey) return null;
                      const faqIndex = miniStep - 2;
                      const question = PILOT_FAQ_QUESTIONS[faqIndex]?.question || '';
                      return (
                        <>
                          <label htmlFor={fieldId(fieldKey)} className="block text-sm text-white mb-1">
                            {question} *
                          </label>
                          <textarea
                            id={fieldId(fieldKey)}
                            name={fieldKey}
                            className={`${inputClass} resize-none`}
                            rows={4}
                            value={values[fieldKey] as string}
                            aria-invalid={Boolean(fieldErrors[fieldKey])}
                            aria-describedby={describedBy(fieldKey)}
                            onChange={(event) => setFieldValue(fieldKey, event.target.value as never)}
                            onBlur={() => setFieldError(fieldKey, validateField(fieldKey, values))}
                            placeholder="1-2 sentence answer"
                            autoFocus
                          />
                          {renderFieldError(fieldKey)}
                        </>
                      );
                    })()}
                  </div>
                ) : null}

                {miniStep === 7 ? (
                  <>
                    <div className="rounded-xl border border-white/20 bg-white/5 p-4 space-y-3">
                      <p className="text-white font-semibold">Links & Social Profiles</p>
                      <label htmlFor={fieldId('google_business_profile_url')} className="block text-sm text-white mb-1">
                        Google Business Profile URL
                      </label>
                      <input
                        id={fieldId('google_business_profile_url')}
                        name="google_business_profile_url"
                        autoComplete="url"
                        className={inputClass}
                        placeholder="https://... (optional)"
                        value={values.google_business_profile_url}
                        aria-invalid={Boolean(fieldErrors.google_business_profile_url)}
                        aria-describedby={describedBy('google_business_profile_url', 'pilot-google-business-hint')}
                        onChange={(event) => setFieldValue('google_business_profile_url', event.target.value)}
                        onBlur={() => normalizeAndValidateUrlField('google_business_profile_url')}
                        autoFocus
                      />
                      <p id="pilot-google-business-hint" className="text-white/60 text-xs">
                        Add your Google profile link to show a verified business badge on your profile.
                      </p>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div>
                          <label htmlFor={fieldId('linkedin_url')} className="block text-sm text-white mb-1">LinkedIn URL</label>
                          <input
                            id={fieldId('linkedin_url')}
                            name="linkedin_url"
                            autoComplete="url"
                            className={inputClass}
                            placeholder="https://... (optional)"
                            value={values.linkedin_url}
                            aria-invalid={Boolean(fieldErrors.linkedin_url)}
                            aria-describedby={describedBy('linkedin_url')}
                            onChange={(event) => setFieldValue('linkedin_url', event.target.value)}
                            onBlur={() => normalizeAndValidateUrlField('linkedin_url')}
                          />
                          {renderFieldError('linkedin_url')}
                        </div>
                        <div>
                          <label htmlFor={fieldId('instagram_url')} className="block text-sm text-white mb-1">Instagram URL</label>
                          <input
                            id={fieldId('instagram_url')}
                            name="instagram_url"
                            autoComplete="url"
                            className={inputClass}
                            placeholder="https://... (optional)"
                            value={values.instagram_url}
                            aria-invalid={Boolean(fieldErrors.instagram_url)}
                            aria-describedby={describedBy('instagram_url')}
                            onChange={(event) => setFieldValue('instagram_url', event.target.value)}
                            onBlur={() => normalizeAndValidateUrlField('instagram_url')}
                          />
                          {renderFieldError('instagram_url')}
                        </div>
                        <div>
                          <label htmlFor={fieldId('youtube_url')} className="block text-sm text-white mb-1">YouTube URL</label>
                          <input
                            id={fieldId('youtube_url')}
                            name="youtube_url"
                            autoComplete="url"
                            className={inputClass}
                            placeholder="https://... (optional)"
                            value={values.youtube_url}
                            aria-invalid={Boolean(fieldErrors.youtube_url)}
                            aria-describedby={describedBy('youtube_url')}
                            onChange={(event) => setFieldValue('youtube_url', event.target.value)}
                            onBlur={() => normalizeAndValidateUrlField('youtube_url')}
                          />
                          {renderFieldError('youtube_url')}
                        </div>
                        <div>
                          <label htmlFor={fieldId('facebook_url')} className="block text-sm text-white mb-1">Facebook URL</label>
                          <input
                            id={fieldId('facebook_url')}
                            name="facebook_url"
                            autoComplete="url"
                            className={inputClass}
                            placeholder="https://... (optional)"
                            value={values.facebook_url}
                            aria-invalid={Boolean(fieldErrors.facebook_url)}
                            aria-describedby={describedBy('facebook_url')}
                            onChange={(event) => setFieldValue('facebook_url', event.target.value)}
                            onBlur={() => normalizeAndValidateUrlField('facebook_url')}
                          />
                          {renderFieldError('facebook_url')}
                        </div>
                      </div>
                      {renderFieldError('google_business_profile_url', 'text-red-200 text-sm')}
                    </div>

                    <label className="rounded-xl border border-white/20 bg-white/5 p-4 flex items-start gap-3 text-white/85 text-sm">
                      <input
                        id={fieldId('consent_to_pilot_terms')}
                        type="checkbox"
                        name="consent_to_pilot_terms"
                        className="mt-1"
                        checked={values.consent_to_pilot_terms}
                        aria-invalid={Boolean(fieldErrors.consent_to_pilot_terms)}
                        aria-describedby={describedBy('consent_to_pilot_terms')}
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
                    {renderFieldError('consent_to_pilot_terms')}
                  </>
                ) : null}
              </fieldset>
            ) : null}

            {formError ? <p className="text-red-200 text-sm" role="alert" aria-live="polite">{formError}</p> : null}
            {successMessage ? <p className="text-green-200 text-sm" role="status" aria-live="polite">{successMessage}</p> : null}

            <div className="sticky bottom-3 md:bottom-auto md:static z-20 bg-teal/95 backdrop-blur rounded-xl border border-white/10 p-3">
              <div
                className={`flex flex-col-reverse gap-3 sm:flex-row ${
                  step === 1 && isFirstMiniStep ? 'sm:justify-end' : 'sm:justify-between'
                }`}
              >
                {!(step === 1 && isFirstMiniStep) ? (
                  <button
                    type="button"
                    onClick={goPrevStep}
                    className="btn btn-outline-white sm:w-auto w-full disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    Back
                  </button>
                ) : null}

                {!(step === TOTAL_STEPS && isLastMiniStep) ? (
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
