import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowUpRight,
  BadgeCheck,
  Camera,
  CheckCircle2,
  Globe2,
  Link2,
  Linkedin,
  MapPin,
  Monitor,
  Shield,
  Sparkles,
  Star,
  Youtube,
} from 'lucide-react';

import {
  hrefFromServiceSlug,
  PILOT_COVERAGE_LABELS,
  PILOT_FAQ_QUESTIONS,
  PILOT_SKILL_CATEGORIES,
  titleFromServiceSlug,
} from '@/lib/pilot-profile';
import { canonicalUrl } from '@/lib/seo/metadata';
import { query } from '@/lib/server/database';

export const revalidate = 3600;

type EquipmentItem = {
  name: string;
  details: string | null;
};

type PortfolioItem = {
  image_url: string;
  caption: string | null;
};

type PilotProfile = {
  id: string;
  name: string;
  business_name: string | null;
  slug: string;
  tier: string;
  profile_photo_url: string | null;
  two_sentence_summary: string | null;
  licence_level: string | null;
  website_url: string | null;
  insurance_provider: string | null;
  insurance_expiry: string | null;
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
  avg_response_hours: number | null;
  avg_quote_turnaround_hours: number | null;
  data_delivery_min_days: number | null;
  data_delivery_max_days: number | null;
  repeat_hire_rate_pct: number | null;
  member_since_year: number | null;
  top_service_slugs: string[] | null;
  additional_services_note: string | null;
  equipment_items_json: unknown;
  portfolio_items_json: unknown;
  skills_levels_json: unknown;
  faq_coverage_answer: string | null;
  faq_qualifications_answer: string | null;
  faq_turnaround_answer: string | null;
  faq_formats_answer: string | null;
  faq_permissions_answer: string | null;
};

const PILOT_RICH_PROFILE_COLUMNS = [
  'base_city',
  'coverage_uk_wide',
  'coverage_regions',
  'coverage_notes',
  'availability_status',
  'google_business_profile_url',
  'linkedin_url',
  'instagram_url',
  'youtube_url',
  'facebook_url',
  'total_projects_completed',
  'years_experience',
  'avg_response_hours',
  'avg_quote_turnaround_hours',
  'data_delivery_min_days',
  'data_delivery_max_days',
  'repeat_hire_rate_pct',
  'member_since_year',
  'top_service_slugs',
  'additional_services_note',
  'equipment_items_json',
  'portfolio_items_json',
  'skills_levels_json',
  'faq_coverage_answer',
  'faq_qualifications_answer',
  'faq_turnaround_answer',
  'faq_formats_answer',
  'faq_permissions_answer',
] as const;

let hasRichPilotProfileColumnsPromise: Promise<boolean> | null = null;

function toArray<T>(value: unknown, fallback: T[]): T[] {
  if (Array.isArray(value)) return value as T[];
  if (typeof value === 'string' && value.trim()) {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? (parsed as T[]) : fallback;
    } catch {
      return fallback;
    }
  }
  return fallback;
}

function toRecord(value: unknown): Record<string, string> {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value as Record<string, string>;
  }
  if (typeof value === 'string' && value.trim()) {
    try {
      const parsed = JSON.parse(value);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        return parsed as Record<string, string>;
      }
    } catch {
      return {};
    }
  }
  return {};
}

async function getPilot(slug: string): Promise<PilotProfile | null> {
  if (!hasRichPilotProfileColumnsPromise) {
    hasRichPilotProfileColumnsPromise = (async () => {
      try {
        const check = await query<{ missing_count: number }>(
          `SELECT COUNT(*)::int AS missing_count
             FROM unnest($1::text[]) AS c(column_name)
             LEFT JOIN information_schema.columns cols
               ON cols.table_schema = 'public'
              AND cols.table_name = 'pilots'
              AND cols.column_name = c.column_name
            WHERE cols.column_name IS NULL`,
          [PILOT_RICH_PROFILE_COLUMNS],
        );
        return (check.rows[0]?.missing_count ?? 1) === 0;
      } catch {
        return false;
      }
    })();
  }

  const hasRichProfileColumns = await hasRichPilotProfileColumnsPromise;

  const richProfileSelect = hasRichProfileColumns
    ? `base_city,
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
      faq_permissions_answer`
    : `NULL::text AS base_city,
      false AS coverage_uk_wide,
      NULL::text[] AS coverage_regions,
      NULL::text AS coverage_notes,
      NULL::text AS availability_status,
      NULL::text AS google_business_profile_url,
      NULL::text AS linkedin_url,
      NULL::text AS instagram_url,
      NULL::text AS youtube_url,
      NULL::text AS facebook_url,
      NULL::int AS total_projects_completed,
      NULL::int AS years_experience,
      NULL::int AS avg_response_hours,
      NULL::int AS avg_quote_turnaround_hours,
      NULL::int AS data_delivery_min_days,
      NULL::int AS data_delivery_max_days,
      NULL::int AS repeat_hire_rate_pct,
      NULL::int AS member_since_year,
      NULL::text[] AS top_service_slugs,
      NULL::text AS additional_services_note,
      '[]'::jsonb AS equipment_items_json,
      '[]'::jsonb AS portfolio_items_json,
      '{}'::jsonb AS skills_levels_json,
      NULL::text AS faq_coverage_answer,
      NULL::text AS faq_qualifications_answer,
      NULL::text AS faq_turnaround_answer,
      NULL::text AS faq_formats_answer,
      NULL::text AS faq_permissions_answer`;

  const result = await query<PilotProfile>(
    `SELECT
      id,
      name,
      business_name,
      slug,
      tier::text,
      profile_photo_url,
      two_sentence_summary,
      licence_level,
      website_url,
      insurance_provider,
      insurance_expiry::text,
      ${richProfileSelect}
     FROM pilots
     WHERE slug = $1 AND active = true`,
    [slug],
  );
  return result.rows[0] ?? null;
}

export async function generateStaticParams() {
  try {
    const result = await query<{ slug: string }>('SELECT slug FROM pilots WHERE active = true');
    return result.rows.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pilot = await getPilot(slug);
  if (!pilot) return { title: 'Pilot Not Found | HireDronePilot' };

  const title = `${pilot.name}${pilot.business_name ? ` — ${pilot.business_name}` : ''} | HireDronePilot`;
  const description = pilot.two_sentence_summary
    ? pilot.two_sentence_summary
    : `${pilot.name} is a verified drone pilot on HireDronePilot. Get a quote for your drone survey project.`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl(`/pilots/${pilot.slug}`),
    },
    openGraph: {
      title,
      description,
      type: 'profile',
      ...(pilot.profile_photo_url ? { images: [{ url: pilot.profile_photo_url }] } : {}),
    },
  };
}

function licenceLevelLabel(level: string | null): string {
  if (!level) return 'CAA Registered';
  const labels: Record<string, string> = {
    A2_COFC: 'A2 Certificate of Competency',
    GVC: 'General VLOS Certificate (GVC)',
    STS: 'Specific Category (STS)',
    OPERATIONAL_AUTHORISATION: 'Operational Authorisation',
  };
  return labels[level] || level;
}

function availabilityLabel(status: string | null): string {
  if (status === 'LIMITED') return 'Limited Availability';
  if (status === 'UNAVAILABLE') return 'Currently Unavailable';
  return 'Available for New Projects';
}

function availabilityStyles(status: string | null): string {
  if (status === 'LIMITED') return 'bg-amber-50 border-amber-200 text-amber-700';
  if (status === 'UNAVAILABLE') return 'bg-gray-100 border-gray-200 text-gray-600';
  return 'bg-emerald-50 border-emerald-200 text-emerald-700';
}

export default async function PilotProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pilot = await getPilot(slug);
  if (!pilot) notFound();

  const topServices = pilot.top_service_slugs ?? [];
  const equipment = toArray<EquipmentItem>(pilot.equipment_items_json, []).filter((item) => item?.name);
  const portfolio = toArray<PortfolioItem>(pilot.portfolio_items_json, []).filter((item) => item?.image_url);
  const skills = toRecord(pilot.skills_levels_json);

  const faqAnswers: Array<{ question: string; answer: string }> = [
    { question: PILOT_FAQ_QUESTIONS[0].question, answer: pilot.faq_coverage_answer || '' },
    { question: PILOT_FAQ_QUESTIONS[1].question, answer: pilot.faq_qualifications_answer || '' },
    { question: PILOT_FAQ_QUESTIONS[2].question, answer: pilot.faq_turnaround_answer || '' },
    { question: PILOT_FAQ_QUESTIONS[3].question, answer: pilot.faq_formats_answer || '' },
    { question: PILOT_FAQ_QUESTIONS[4].question, answer: pilot.faq_permissions_answer || '' },
  ].filter((item) => item.answer.trim().length > 0);

  const coverageParts: string[] = [];
  if (pilot.coverage_uk_wide) {
    coverageParts.push('United Kingdom');
  } else {
    const regionLabels = (pilot.coverage_regions || [])
      .map((region) => PILOT_COVERAGE_LABELS[region as keyof typeof PILOT_COVERAGE_LABELS])
      .filter(Boolean);
    if (regionLabels.length > 0) coverageParts.push(regionLabels.join(', '));
  }
  if (pilot.coverage_notes) coverageParts.push(pilot.coverage_notes);

  const hasStats = [
    pilot.total_projects_completed,
    pilot.years_experience,
    pilot.avg_response_hours,
    pilot.repeat_hire_rate_pct,
  ].some((value) => value !== null);

  const hasSocials = [pilot.linkedin_url, pilot.instagram_url, pilot.youtube_url, pilot.facebook_url].some(Boolean);

  return (
    <main className="bg-[#f8fafc] pb-28">
      <section className="bg-teal -mt-[120px] pt-[130px] pb-16 md:pb-20">
        <div className="container max-w-6xl">
          <div className="text-sm text-white/70 mb-5 flex flex-wrap gap-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>›</span>
            <Link href="/pilots" className="hover:text-white">Drone Pilots</Link>
            <span>›</span>
            <span className="text-white">{pilot.name}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr),320px] lg:items-center">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-white/10 border border-white/15 shrink-0">
                {pilot.profile_photo_url ? (
                  <Image
                    src={pilot.profile_photo_url}
                    alt={pilot.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/40">
                      {pilot.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              <div className="min-w-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{pilot.name}</h1>
                {pilot.business_name ? <p className="text-white/75 mt-1">{pilot.business_name}</p> : null}
                {pilot.two_sentence_summary ? (
                  <p className="text-white/80 mt-3 max-w-2xl leading-relaxed">{pilot.two_sentence_summary}</p>
                ) : null}

                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white/90">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Verified Operator
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white/90">
                    <Shield className="w-3.5 h-3.5" />
                    {pilot.insurance_provider ? 'Insured' : 'Insurance status on file'}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white/90">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {licenceLevelLabel(pilot.licence_level)}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-wide text-white/60">Ready to hire?</p>
              <p className="text-white font-semibold mt-1">Request matched quotes in one brief.</p>
              <Link href="/contact" className="btn btn-primary btn-shimmer w-full mt-4 text-center">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container max-w-6xl grid gap-8 lg:grid-cols-[1fr,320px]">
          <div className="space-y-8">
            {hasStats ? (
              <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-2xl font-bold text-gold">{pilot.total_projects_completed ?? '—'}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">Pilot-reported total projects</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-2xl font-bold text-gold">{pilot.years_experience ?? '—'}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">Years in operation</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-2xl font-bold text-gold">{pilot.avg_response_hours ? `< ${pilot.avg_response_hours}h` : '—'}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">Avg first response time</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-2xl font-bold text-gold">
                    {pilot.repeat_hire_rate_pct !== null ? `${pilot.repeat_hire_rate_pct}%` : '—'}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">Repeat hire rate</p>
                </div>
              </section>
            ) : null}

            {topServices.length > 0 ? (
              <section className="rounded-2xl border border-gray-200 bg-white p-6">
                <h2 className="text-xl font-bold text-gray-900">Top Services</h2>
                <p className="text-sm text-gray-500 mt-1">Internal service pages linked for direct scope review.</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {topServices.map((slugItem) => (
                    <Link
                      key={slugItem}
                      href={hrefFromServiceSlug(slugItem)}
                      className="inline-flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 hover:border-orange-300 hover:bg-orange-50"
                    >
                      <span>{titleFromServiceSlug(slugItem)}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
                {pilot.additional_services_note ? (
                  <p className="text-sm text-gray-600 mt-3">{pilot.additional_services_note}</p>
                ) : null}
              </section>
            ) : null}

            {equipment.length > 0 ? (
              <section className="rounded-2xl border border-gray-200 bg-white p-6">
                <h2 className="text-xl font-bold text-gray-900">Equipment & Drones</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {equipment.map((item, index) => (
                    <div key={`${item.name}-${index}`} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-teal text-white flex items-center justify-center">
                          <Monitor className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{item.name}</p>
                          {item.details ? <p className="text-sm text-gray-600 mt-1">{item.details}</p> : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {portfolio.length > 0 ? (
              <section className="rounded-2xl border border-gray-200 bg-white p-6">
                <h2 className="text-xl font-bold text-gray-900">Portfolio</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {portfolio.map((item, index) => (
                    <figure key={`${item.image_url.slice(0, 48)}-${index}`} className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                      <img
                        src={item.image_url}
                        alt={item.caption || `${pilot.name} portfolio image ${index + 1}`}
                        className="h-36 w-full object-cover"
                      />
                      {item.caption ? <figcaption className="text-xs text-gray-600 p-2">{item.caption}</figcaption> : null}
                    </figure>
                  ))}
                </div>
              </section>
            ) : null}

            {Object.keys(skills).length > 0 ? (
              <section className="rounded-2xl border border-gray-200 bg-white p-6">
                <h2 className="text-xl font-bold text-gray-900">Expertise & Skills</h2>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {PILOT_SKILL_CATEGORIES.map((category) => {
                    const level = skills[category.key];
                    if (!level) return null;
                    return (
                      <div key={category.key} className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2">
                        <span className="text-sm text-gray-700">{category.label}</span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-700">
                          <Sparkles className="w-3 h-3" />
                          {level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </section>
            ) : null}

            {faqAnswers.length > 0 ? (
              <section className="rounded-2xl border border-gray-200 bg-white p-6">
                <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <div className="mt-4 space-y-3">
                  {faqAnswers.map((faq) => (
                    <article key={faq.question} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                      <h3 className="text-sm font-semibold text-gray-900">{faq.question}</h3>
                      <p className="text-sm text-gray-600 mt-1">{faq.answer}</p>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {pilot.google_business_profile_url ? (
              <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h2 className="text-lg font-bold text-blue-900">Google Reviews</h2>
                <p className="text-sm text-blue-800 mt-1">We will import your reviews to this profile.</p>
                <a
                  href={pilot.google_business_profile_url}
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                  className="inline-flex items-center gap-2 mt-3 rounded-lg border border-blue-300 px-3 py-2 text-sm font-medium text-blue-900 hover:bg-white"
                >
                  <Link2 className="w-4 h-4" />
                  View Google Business Profile
                </a>
              </section>
            ) : null}
          </div>

          <aside className="space-y-4">
            <div className={`rounded-2xl border p-4 ${availabilityStyles(pilot.availability_status)}`}>
              <p className="text-sm font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                {availabilityLabel(pilot.availability_status)}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 space-y-3">
              <h3 className="text-sm font-semibold text-gray-900">Pilot Quick Facts</h3>
              {pilot.avg_response_hours !== null ? (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Response Time</span>
                  <span className="font-medium text-gray-900">Under {pilot.avg_response_hours}h</span>
                </div>
              ) : null}
              {pilot.avg_quote_turnaround_hours !== null ? (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Quote Turnaround</span>
                  <span className="font-medium text-gray-900">{pilot.avg_quote_turnaround_hours}h</span>
                </div>
              ) : null}
              {pilot.data_delivery_min_days !== null && pilot.data_delivery_max_days !== null ? (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Data Delivery</span>
                  <span className="font-medium text-gray-900">{pilot.data_delivery_min_days}-{pilot.data_delivery_max_days} days</span>
                </div>
              ) : null}
              {pilot.member_since_year !== null ? (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Member Since</span>
                  <span className="font-medium text-gray-900">{pilot.member_since_year}</span>
                </div>
              ) : null}
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 space-y-3">
              <h3 className="text-sm font-semibold text-gray-900">Coverage</h3>
              <p className="text-sm text-gray-600 flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-orange-500" />
                {coverageParts.join(' · ') || 'Coverage details available on request.'}
              </p>
            </div>

            {(pilot.website_url || hasSocials) ? (
              <div className="rounded-2xl border border-gray-200 bg-white p-5 space-y-3">
                <h3 className="text-sm font-semibold text-gray-900">Links</h3>
                {pilot.website_url ? (
                  <a
                    href={pilot.website_url}
                    target="_blank"
                    rel="noopener nofollow noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-orange-700 hover:text-orange-800"
                  >
                    <Globe2 className="w-4 h-4" />
                    Website
                  </a>
                ) : null}

                {hasSocials ? (
                  <div className="flex items-center gap-2">
                    {pilot.linkedin_url ? (
                      <a href={pilot.linkedin_url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-gray-200 hover:border-orange-300">
                        <Linkedin className="w-4 h-4 text-gray-700" />
                      </a>
                    ) : null}
                    {pilot.youtube_url ? (
                      <a href={pilot.youtube_url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-gray-200 hover:border-orange-300">
                        <Youtube className="w-4 h-4 text-gray-700" />
                      </a>
                    ) : null}
                    {pilot.instagram_url ? (
                      <a href={pilot.instagram_url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-gray-200 hover:border-orange-300">
                        <Camera className="w-4 h-4 text-gray-700" />
                      </a>
                    ) : null}
                    {pilot.facebook_url ? (
                      <a href={pilot.facebook_url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-gray-200 hover:border-orange-300">
                        <Star className="w-4 h-4 text-gray-700" />
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ) : null}

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-gray-900">Request a Quote</h3>
              <p className="text-sm text-gray-600 mt-1">Share your brief once and compare qualified pilot responses.</p>
              <Link href="/contact" className="btn btn-primary btn-shimmer w-full mt-3 text-center">
                Request a Quote
              </Link>
            </div>

            <div className="text-xs text-gray-500 bg-white border border-gray-200 rounded-xl p-3">
              Stats are pilot-reported business metrics and are reviewed for profile completeness before publication.
            </div>
          </aside>
        </div>
      </section>

      <div className="fixed bottom-0 inset-x-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur">
        <div className="container max-w-6xl flex items-center gap-3 py-3">
          <div className="text-sm">
            <p className="font-semibold text-gray-900">{pilot.name}</p>
            <p className="text-xs text-gray-500">{pilot.business_name || 'Verified Drone Pilot'}</p>
          </div>
          <Link href="/contact" className="btn btn-primary btn-shimmer ml-auto">
            Request a Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
