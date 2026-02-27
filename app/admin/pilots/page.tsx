'use client';

import { useCallback, useEffect, useState } from 'react';
import { X, ExternalLink, Search } from 'lucide-react';

import AdminCard from '@/components/admin/AdminCard';
import ConfirmDialog from '@/components/admin/ConfirmDialog';
import PhotoUploader from '@/components/PhotoUploader';
import PortfolioUploader, { PortfolioDraftItem } from '@/components/PortfolioUploader';
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

type PilotRow = {
  id: string;
  name: string;
  business_name: string | null;
  email: string;
  phone: string | null;
  active: boolean;
  licence_level: string | null;
  insurance_provider: string | null;
  insurance_expiry: string | null;
  tier: string;
  slug: string | null;
  integrated_confirmed_at: string | null;
  created_at: string;
  updated_at: string | null;
};

type PilotDetail = PilotRow & {
  notes: string | null;
  profile_photo_url: string | null;
  two_sentence_summary: string | null;
  website_url: string | null;
  flyer_id: string | null;
  operator_id: string | null;
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
  backlink_token_hash: string | null;
};

type EquipmentDraftItem = {
  name: string;
  details: string;
};

type PilotServiceRatingsDraft = Record<string, PilotServiceLevel | ''>;

type PilotEditForm = {
  name: string;
  business_name: string;
  email: string;
  phone: string;
  website_url: string;
  profile_photo_url: string;
  two_sentence_summary: string;
  licence_level: string;
  insurance_provider: string;
  insurance_expiry: string;
  flyer_id: string;
  operator_id: string;
  base_city: string;
  coverage_uk_wide: boolean;
  coverage_regions: PilotCoverageRegion[];
  coverage_notes: string;
  availability_status: string;
  google_business_profile_url: string;
  linkedin_url: string;
  instagram_url: string;
  youtube_url: string;
  facebook_url: string;
  total_projects_completed: string;
  years_experience: string;
  drone_flight_hours_total: string;
  drones_owned_total: string;
  avg_quote_turnaround_hours: string;
  data_delivery_min_days: string;
  data_delivery_max_days: string;
  member_since_year: string;
  top_service_slugs: string[];
  top_service_ratings_json: PilotServiceRatingsDraft;
  additional_services_note: string;
  equipment_items_json: EquipmentDraftItem[];
  portfolio_items_json: PortfolioDraftItem[];
  faq_coverage_answer: string;
  faq_qualifications_answer: string;
  faq_turnaround_answer: string;
  faq_formats_answer: string;
  faq_permissions_answer: string;
  notes: string;
  tier: string;
  active: boolean;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function parseCoverageRegions(value: unknown): PilotCoverageRegion[] {
  if (!Array.isArray(value)) return [];
  const allowed = new Set<string>(PILOT_COVERAGE_REGIONS);
  const normalized = value
    .map((item) => (typeof item === 'string' ? item.trim().toUpperCase().replace(/[\s-]+/g, '_') : ''))
    .filter((item): item is PilotCoverageRegion => Boolean(item) && allowed.has(item));
  return Array.from(new Set(normalized));
}

function parseTopServiceSlugs(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  const allowed = new Set<string>(PILOT_SERVICE_OPTIONS.map((service) => service.slug));
  const normalized = value
    .map((item) => (typeof item === 'string' ? item.trim().toLowerCase() : ''))
    .filter((item) => Boolean(item) && allowed.has(item));
  return Array.from(new Set(normalized)).slice(0, 6);
}

function parseTopServiceRatings(value: unknown): PilotServiceRatingsDraft {
  if (!isRecord(value)) return {};
  const allowedServices = new Set<string>(PILOT_SERVICE_OPTIONS.map((service) => service.slug));
  const allowedLevels = new Set(PILOT_SERVICE_LEVELS);
  const next: PilotServiceRatingsDraft = {};
  for (const [rawSlug, rawLevel] of Object.entries(value)) {
    const slug = rawSlug.trim().toLowerCase();
    if (!slug || !allowedServices.has(slug)) continue;
    if (typeof rawLevel !== 'string') continue;
    const level = rawLevel.trim();
    if (!allowedLevels.has(level as PilotServiceLevel)) continue;
    next[slug] = level as PilotServiceLevel;
  }
  return next;
}

function parseEquipmentItems(value: unknown): EquipmentDraftItem[] {
  if (!Array.isArray(value)) return [];
  const items = value
    .map((item) => {
      if (!isRecord(item)) return null;
      const name = typeof item.name === 'string' ? item.name.trim() : '';
      const details = typeof item.details === 'string' ? item.details.trim() : '';
      if (!name) return null;
      return { name, details };
    })
    .filter((item): item is EquipmentDraftItem => Boolean(item));
  return items.slice(0, 12);
}

function parsePortfolioItems(value: unknown): PortfolioDraftItem[] {
  if (!Array.isArray(value)) return [];
  const items = value
    .map((item) => {
      if (typeof item === 'string') {
        const imageUrl = item.trim();
        if (!imageUrl) return null;
        return { image_url: imageUrl };
      }
      if (!isRecord(item)) return null;
      const imageUrl = typeof item.image_url === 'string' ? item.image_url.trim() : '';
      if (!imageUrl) return null;
      return { image_url: imageUrl };
    })
    .filter((item): item is PortfolioDraftItem => Boolean(item));
  return items.slice(0, 3);
}

function parseNullableInteger(value: string): number | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  const parsed = Number(trimmed);
  if (!Number.isInteger(parsed)) {
    throw new Error('Numeric fields must be whole numbers.');
  }
  return parsed;
}

function toLocalDateTime(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleString('en-GB');
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return 'Not provided';
  const parsed = new Date(dateStr);
  if (Number.isNaN(parsed.getTime())) return dateStr;
  return parsed.toLocaleDateString('en-GB');
}

function isExpiredOrSoon(dateStr: string | null): 'expired' | 'soon' | 'ok' {
  if (!dateStr) return 'ok';
  const parsed = new Date(dateStr);
  if (Number.isNaN(parsed.getTime())) return 'ok';
  const now = new Date();
  if (parsed < now) return 'expired';
  const thirtyDays = 30 * 24 * 60 * 60 * 1000;
  if (parsed.getTime() - now.getTime() < thirtyDays) return 'soon';
  return 'ok';
}

function toEditForm(detail: PilotDetail): PilotEditForm {
  const topServiceSlugs = parseTopServiceSlugs(detail.top_service_slugs);
  const topServiceRatingsRaw = parseTopServiceRatings(detail.top_service_ratings_json);
  const topServiceRatings: PilotServiceRatingsDraft = {};
  for (const slug of topServiceSlugs) {
    topServiceRatings[slug] = topServiceRatingsRaw[slug] || '';
  }

  return {
    name: detail.name || '',
    business_name: detail.business_name || '',
    email: detail.email || '',
    phone: detail.phone || '',
    website_url: detail.website_url || '',
    profile_photo_url: detail.profile_photo_url || '',
    two_sentence_summary: detail.two_sentence_summary || '',
    licence_level: detail.licence_level || '',
    insurance_provider: detail.insurance_provider || '',
    insurance_expiry: detail.insurance_expiry || '',
    flyer_id: detail.flyer_id || '',
    operator_id: detail.operator_id || '',
    base_city: detail.base_city || '',
    coverage_uk_wide: detail.coverage_uk_wide ?? false,
    coverage_regions: parseCoverageRegions(detail.coverage_regions),
    coverage_notes: detail.coverage_notes || '',
    availability_status: detail.availability_status || 'AVAILABLE',
    google_business_profile_url: detail.google_business_profile_url || '',
    linkedin_url: detail.linkedin_url || '',
    instagram_url: detail.instagram_url || '',
    youtube_url: detail.youtube_url || '',
    facebook_url: detail.facebook_url || '',
    total_projects_completed: detail.total_projects_completed?.toString() || '',
    years_experience: detail.years_experience?.toString() || '',
    drone_flight_hours_total: detail.drone_flight_hours_total?.toString() || '',
    drones_owned_total: detail.drones_owned_total?.toString() || '',
    avg_quote_turnaround_hours: detail.avg_quote_turnaround_hours?.toString() || '',
    data_delivery_min_days: detail.data_delivery_min_days?.toString() || '',
    data_delivery_max_days: detail.data_delivery_max_days?.toString() || '',
    member_since_year: detail.member_since_year?.toString() || '',
    top_service_slugs: topServiceSlugs,
    top_service_ratings_json: topServiceRatings,
    additional_services_note: detail.additional_services_note || '',
    equipment_items_json: parseEquipmentItems(detail.equipment_items_json),
    portfolio_items_json: parsePortfolioItems(detail.portfolio_items_json),
    faq_coverage_answer: detail.faq_coverage_answer || '',
    faq_qualifications_answer: detail.faq_qualifications_answer || '',
    faq_turnaround_answer: detail.faq_turnaround_answer || '',
    faq_formats_answer: detail.faq_formats_answer || '',
    faq_permissions_answer: detail.faq_permissions_answer || '',
    notes: detail.notes || '',
    tier: detail.tier || 'VERIFIED_OPERATOR',
    active: detail.active,
  };
}

export default function AdminPilotsPage() {
  const [pilots, setPilots] = useState<PilotRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [error, setError] = useState('');

  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('true');

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [detail, setDetail] = useState<PilotDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  const [editForm, setEditForm] = useState<PilotEditForm | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');

  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);

  const load = useCallback(async ({
    cursor = null,
    append = false,
  }: {
    cursor?: string | null;
    append?: boolean;
  } = {}) => {
    if (append) {
      setLoadingMore(true);
    } else {
      setLoading(true);
      setError('');
    }

    try {
      const params = new URLSearchParams();
      params.set('active', activeFilter);
      if (search.trim()) params.set('search', search.trim());
      params.set('limit', '100');
      if (cursor) params.set('cursor', cursor);

      const response = await fetch(`/api/admin/pilots?${params.toString()}`);
      const body = (await response.json()) as {
        pilots?: PilotRow[];
        next_cursor?: string | null;
        error?: string;
      };
      if (!response.ok) throw new Error(body.error || 'Failed to load pilots');
      const incoming = body.pilots || [];
      setPilots((current) => (append ? [...current, ...incoming] : incoming));
      setNextCursor(body.next_cursor ?? null);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Failed to load pilots');
    } finally {
      if (append) {
        setLoadingMore(false);
      } else {
        setLoading(false);
      }
    }
  }, [activeFilter, search]);

  useEffect(() => {
    void load();
  }, [load]);

  const loadDetail = async (id: string) => {
    setSelectedId(id);
    setDetail(null);
    setEditForm(null);
    setSaveMsg('');
    setDetailLoading(true);
    try {
      const response = await fetch(`/api/admin/pilots/${id}`);
      const body = (await response.json()) as { pilot?: PilotDetail; error?: string };
      if (!response.ok) throw new Error(body.error || 'Failed to load pilot details');
      const pilot = body.pilot!;
      setDetail(pilot);
      setEditForm(toEditForm(pilot));
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Failed to load pilot details');
      setSelectedId(null);
    } finally {
      setDetailLoading(false);
    }
  };

  const handleSave = async () => {
    if (!detail || !editForm) return;
    setSaving(true);
    setSaveMsg('');
    try {
      const parsedMinDays = parseNullableInteger(editForm.data_delivery_min_days);
      const parsedMaxDays = parseNullableInteger(editForm.data_delivery_max_days);
      if (
        parsedMinDays !== null &&
        parsedMaxDays !== null &&
        parsedMaxDays < parsedMinDays
      ) {
        throw new Error('Maximum data delivery days cannot be lower than minimum data delivery days.');
      }

      const allowedServiceSlugs = new Set<string>(PILOT_SERVICE_OPTIONS.map((service) => service.slug));
      const normalizedTopServices = Array.from(new Set(
        editForm.top_service_slugs
          .map((slug) => slug.trim().toLowerCase())
          .filter((slug) => Boolean(slug) && allowedServiceSlugs.has(slug)),
      ));
      if (normalizedTopServices.length !== 0 && normalizedTopServices.length !== 6) {
        throw new Error('Select exactly 6 top services, or leave all top services empty.');
      }

      const normalizedRatings: Record<string, PilotServiceLevel> = {};
      for (const slug of normalizedTopServices) {
        const level = editForm.top_service_ratings_json[slug];
        if (!level) {
          throw new Error(`Please set a service rating for ${slug}.`);
        }
        if (!PILOT_SERVICE_LEVELS.includes(level as PilotServiceLevel)) {
          throw new Error(`Invalid service rating level for ${slug}.`);
        }
        normalizedRatings[slug] = level as PilotServiceLevel;
      }

      const normalizedCoverageRegions = Array.from(new Set(
        editForm.coverage_regions.filter((region) => PILOT_COVERAGE_REGIONS.includes(region)),
      ));
      const normalizedEquipment = parseEquipmentItems(editForm.equipment_items_json);
      const normalizedPortfolio = parsePortfolioItems(editForm.portfolio_items_json);

      const response = await fetch(`/api/admin/pilots/${detail.id}/`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: editForm.name,
          email: editForm.email,
          active: editForm.active,
          tier: editForm.tier,
          business_name: editForm.business_name || null,
          phone: editForm.phone || null,
          website_url: editForm.website_url || null,
          profile_photo_url: editForm.profile_photo_url || null,
          two_sentence_summary: editForm.two_sentence_summary || null,
          licence_level: editForm.licence_level || null,
          insurance_provider: editForm.insurance_provider || null,
          insurance_expiry: editForm.insurance_expiry || null,
          flyer_id: editForm.flyer_id || null,
          operator_id: editForm.operator_id || null,
          base_city: editForm.base_city || null,
          coverage_uk_wide: editForm.coverage_uk_wide,
          coverage_regions: normalizedCoverageRegions,
          coverage_notes: editForm.coverage_notes || null,
          availability_status: editForm.availability_status || null,
          google_business_profile_url: editForm.google_business_profile_url || null,
          linkedin_url: editForm.linkedin_url || null,
          instagram_url: editForm.instagram_url || null,
          youtube_url: editForm.youtube_url || null,
          facebook_url: editForm.facebook_url || null,
          total_projects_completed: parseNullableInteger(editForm.total_projects_completed),
          years_experience: parseNullableInteger(editForm.years_experience),
          drone_flight_hours_total: parseNullableInteger(editForm.drone_flight_hours_total),
          drones_owned_total: parseNullableInteger(editForm.drones_owned_total),
          avg_quote_turnaround_hours: parseNullableInteger(editForm.avg_quote_turnaround_hours),
          data_delivery_min_days: parsedMinDays,
          data_delivery_max_days: parsedMaxDays,
          member_since_year: parseNullableInteger(editForm.member_since_year),
          top_service_slugs: normalizedTopServices,
          top_service_ratings_json: normalizedRatings,
          additional_services_note: editForm.additional_services_note || null,
          equipment_items_json: normalizedEquipment,
          portfolio_items_json: normalizedPortfolio,
          faq_coverage_answer: editForm.faq_coverage_answer || null,
          faq_qualifications_answer: editForm.faq_qualifications_answer || null,
          faq_turnaround_answer: editForm.faq_turnaround_answer || null,
          faq_formats_answer: editForm.faq_formats_answer || null,
          faq_permissions_answer: editForm.faq_permissions_answer || null,
          notes: editForm.notes || null,
        }),
      });

      const body = (await response.json()) as { pilot?: PilotDetail; error?: string };
      if (!response.ok) throw new Error(body.error || 'Failed to save pilot');
      const pilot = body.pilot!;
      setDetail(pilot);
      setEditForm(toEditForm(pilot));
      setSaveMsg('Saved successfully');
      void load();
    } catch (saveError) {
      setSaveMsg(saveError instanceof Error ? saveError.message : 'Failed to save pilot');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!detail) return;
    setSaving(true);
    setSaveMsg('');
    try {
      const response = await fetch(`/api/admin/pilots/${detail.id}/`, {
        method: 'DELETE',
      });
      const body = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(body.error || 'Failed to delete pilot');
      setConfirmDeleteOpen(false);
      setSelectedId(null);
      setDetail(null);
      setEditForm(null);
      setSaveMsg('');
      void load();
    } catch (deleteError) {
      setSaveMsg(deleteError instanceof Error ? deleteError.message : 'Failed to delete pilot');
    } finally {
      setSaving(false);
    }
  };

  const closePanel = () => {
    setSelectedId(null);
    setDetail(null);
    setEditForm(null);
    setSaveMsg('');
  };

  const setEditField = <K extends keyof PilotEditForm>(field: K, value: PilotEditForm[K]) => {
    setEditForm((current) => (current ? { ...current, [field]: value } : current));
  };

  const toggleCoverageRegion = (region: PilotCoverageRegion) => {
    setEditForm((current) => {
      if (!current) return current;
      const hasRegion = current.coverage_regions.includes(region);
      const next = hasRegion
        ? current.coverage_regions.filter((item) => item !== region)
        : [...current.coverage_regions, region];
      return { ...current, coverage_regions: next };
    });
  };

  const toggleTopService = (slug: string) => {
    setEditForm((current) => {
      if (!current) return current;
      const hasSlug = current.top_service_slugs.includes(slug);
      if (hasSlug) {
        const nextSlugs = current.top_service_slugs.filter((item) => item !== slug);
        const nextRatings = { ...current.top_service_ratings_json };
        delete nextRatings[slug];
        return {
          ...current,
          top_service_slugs: nextSlugs,
          top_service_ratings_json: nextRatings,
        };
      }
      if (current.top_service_slugs.length >= 6) return current;
      return {
        ...current,
        top_service_slugs: [...current.top_service_slugs, slug],
        top_service_ratings_json: {
          ...current.top_service_ratings_json,
          [slug]: '',
        },
      };
    });
  };

  const setTopServiceRating = (slug: string, level: PilotServiceLevel | '') => {
    setEditForm((current) => {
      if (!current) return current;
      return {
        ...current,
        top_service_ratings_json: {
          ...current.top_service_ratings_json,
          [slug]: level,
        },
      };
    });
  };

  const updateEquipmentRow = (index: number, field: keyof EquipmentDraftItem, value: string) => {
    setEditForm((current) => {
      if (!current) return current;
      const nextRows = current.equipment_items_json.map((item, rowIndex) => (
        rowIndex === index ? { ...item, [field]: value } : item
      ));
      return { ...current, equipment_items_json: nextRows };
    });
  };

  const addEquipmentRow = () => {
    setEditForm((current) => {
      if (!current || current.equipment_items_json.length >= 12) return current;
      return {
        ...current,
        equipment_items_json: [...current.equipment_items_json, { name: '', details: '' }],
      };
    });
  };

  const removeEquipmentRow = (index: number) => {
    setEditForm((current) => {
      if (!current) return current;
      return {
        ...current,
        equipment_items_json: current.equipment_items_json.filter((_, rowIndex) => rowIndex !== index),
      };
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pilot Directory</h1>
          <p className="text-sm text-gray-500">Edit profile details and deactivate pilots with Delete.</p>
        </div>
        <button
          type="button"
          className="px-4 py-2 bg-[#f97316] text-white rounded-lg font-medium text-sm hover:bg-[#e8650d] transition-colors"
          onClick={() => void load()}
          disabled={loading || loadingMore}
        >
          {loading ? 'Loading...' : 'Refresh'}
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="relative flex-1 min-w-[220px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search name, email, business"
            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316]/40 focus:border-[#f97316]"
          />
        </div>
        <select
          value={activeFilter}
          onChange={(event) => setActiveFilter(event.target.value)}
          className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316]/40 focus:border-[#f97316] bg-white"
        >
          <option value="true">Active</option>
          <option value="false">Inactive / Deleted</option>
          <option value="">All Pilots</option>
        </select>
      </div>

      {error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-4">{error}</div>
      ) : null}

      <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Name</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Email</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Active</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Tier</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Insurance Expiry</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Licence</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {pilots.map((pilot) => {
              const insuranceStatus = isExpiredOrSoon(pilot.insurance_expiry);
              return (
                <tr
                  key={pilot.id}
                  onClick={() => void loadDetail(pilot.id)}
                  className={`cursor-pointer transition-colors ${
                    selectedId === pilot.id ? 'bg-orange-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <td className="p-3">
                    <div className="font-medium text-gray-900">{pilot.name}</div>
                    {pilot.business_name ? <div className="text-xs text-gray-500">{pilot.business_name}</div> : null}
                  </td>
                  <td className="p-3 text-gray-700">{pilot.email}</td>
                  <td className="p-3">
                    <span
                      className={`inline-block w-2.5 h-2.5 rounded-full ${pilot.active ? 'bg-green-500' : 'bg-red-500'}`}
                      title={pilot.active ? 'Active' : 'Inactive'}
                    />
                  </td>
                  <td className="p-3">
                    {pilot.tier === 'INTEGRATED_OPERATOR' ? (
                      <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Integrated</span>
                    ) : (
                      <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Verified</span>
                    )}
                  </td>
                  <td className="p-3">
                    <span
                      className={
                        insuranceStatus === 'expired'
                          ? 'text-red-600 font-medium'
                          : insuranceStatus === 'soon'
                            ? 'text-amber-600 font-medium'
                            : 'text-gray-700'
                      }
                    >
                      {formatDate(pilot.insurance_expiry)}
                    </span>
                    {insuranceStatus === 'expired' ? <span className="ml-1 text-xs text-red-500">Expired</span> : null}
                    {insuranceStatus === 'soon' ? <span className="ml-1 text-xs text-amber-500">Expiring soon</span> : null}
                  </td>
                  <td className="p-3 text-gray-700">{pilot.licence_level || 'N/A'}</td>
                  <td className="p-3 text-gray-500 text-xs">{toLocalDateTime(pilot.created_at)}</td>
                </tr>
              );
            })}
            {pilots.length === 0 && !loading ? (
              <tr>
                <td colSpan={7} className="p-6 text-gray-500 text-center">No pilots found.</td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      {nextCursor ? (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => void load({ cursor: nextCursor, append: true })}
            disabled={loading || loadingMore}
            className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loadingMore ? 'Loading...' : 'Load More'}
          </button>
        </div>
      ) : null}

      {selectedId ? (
        <>
          <div className="fixed inset-0 bg-black/30 z-[150]" onClick={closePanel} />
          <div className="fixed top-0 right-0 h-full w-full max-w-2xl bg-[#f8fafc] shadow-xl z-[151] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                {detail ? (
                  <>
                    <h2 className="text-lg font-bold text-gray-900">{detail.name}</h2>
                    <div className="text-xs text-gray-500 mt-1">{detail.email}</div>
                  </>
                ) : (
                  <h2 className="text-lg font-bold text-gray-900">Loading...</h2>
                )}
              </div>
              <button type="button" onClick={closePanel} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {detailLoading ? (
              <div className="p-6 text-sm text-gray-500">Loading pilot details...</div>
            ) : null}

            {detail && editForm && !detailLoading ? (
              <div className="p-6 space-y-5">
                <AdminCard title="Profile Details">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Name</label>
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(event) => setEditField('name', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Business Name</label>
                      <input
                        type="text"
                        value={editForm.business_name}
                        onChange={(event) => setEditField('business_name', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Email</label>
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(event) => setEditField('email', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Phone</label>
                      <input
                        type="text"
                        value={editForm.phone}
                        onChange={(event) => setEditField('phone', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Base City</label>
                      <input
                        type="text"
                        value={editForm.base_city}
                        onChange={(event) => setEditField('base_city', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Website</label>
                      <input
                        type="text"
                        value={editForm.website_url}
                        onChange={(event) => setEditField('website_url', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-medium text-gray-500 mb-2">Profile Photo</label>
                      <PhotoUploader
                        value={editForm.profile_photo_url}
                        onChange={(next) => setEditField('profile_photo_url', next)}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Two Sentence Summary</label>
                      <textarea
                        rows={3}
                        value={editForm.two_sentence_summary}
                        onChange={(event) => setEditField('two_sentence_summary', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg resize-y"
                      />
                    </div>
                  </div>
                </AdminCard>

                <AdminCard title="Qualification Details">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Licence Level</label>
                      <input
                        type="text"
                        value={editForm.licence_level}
                        onChange={(event) => setEditField('licence_level', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Insurance Provider</label>
                      <input
                        type="text"
                        value={editForm.insurance_provider}
                        onChange={(event) => setEditField('insurance_provider', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Insurance Expiry</label>
                      <input
                        type="date"
                        value={editForm.insurance_expiry}
                        onChange={(event) => setEditField('insurance_expiry', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Flyer ID</label>
                      <input
                        type="text"
                        value={editForm.flyer_id}
                        onChange={(event) => setEditField('flyer_id', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Operator ID</label>
                      <input
                        type="text"
                        value={editForm.operator_id}
                        onChange={(event) => setEditField('operator_id', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                </AdminCard>

                <AdminCard title="Coverage & Availability">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Availability</label>
                      <select
                        value={editForm.availability_status}
                        onChange={(event) => setEditField('availability_status', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white"
                      >
                        {PILOT_AVAILABILITY_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
                      <div>
                        <p className="text-sm font-medium text-gray-800">UK-wide coverage</p>
                        <p className="text-xs text-gray-500">Enable when this pilot can travel nationwide.</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setEditField('coverage_uk_wide', !editForm.coverage_uk_wide)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          editForm.coverage_uk_wide ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            editForm.coverage_uk_wide ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-2">Coverage Regions</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {PILOT_COVERAGE_REGIONS.map((region) => (
                          <label key={region} className="flex items-center gap-2 text-sm text-gray-700 rounded border border-gray-200 px-3 py-2 bg-white">
                            <input
                              type="checkbox"
                              checked={editForm.coverage_regions.includes(region)}
                              onChange={() => toggleCoverageRegion(region)}
                            />
                            <span>{PILOT_COVERAGE_LABELS[region]}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Coverage Notes</label>
                      <textarea
                        rows={3}
                        value={editForm.coverage_notes}
                        onChange={(event) => setEditField('coverage_notes', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg resize-y"
                      />
                    </div>
                  </div>
                </AdminCard>

                <AdminCard title="Business Links">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Google Business Profile URL</label>
                      <input
                        type="text"
                        value={editForm.google_business_profile_url}
                        onChange={(event) => setEditField('google_business_profile_url', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">LinkedIn URL</label>
                      <input
                        type="text"
                        value={editForm.linkedin_url}
                        onChange={(event) => setEditField('linkedin_url', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Instagram URL</label>
                      <input
                        type="text"
                        value={editForm.instagram_url}
                        onChange={(event) => setEditField('instagram_url', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">YouTube URL</label>
                      <input
                        type="text"
                        value={editForm.youtube_url}
                        onChange={(event) => setEditField('youtube_url', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Facebook URL</label>
                      <input
                        type="text"
                        value={editForm.facebook_url}
                        onChange={(event) => setEditField('facebook_url', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                </AdminCard>

                <AdminCard title="Performance Metrics">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Total Projects Completed</label>
                      <input
                        type="number"
                        value={editForm.total_projects_completed}
                        onChange={(event) => setEditField('total_projects_completed', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Years Experience</label>
                      <input
                        type="number"
                        value={editForm.years_experience}
                        onChange={(event) => setEditField('years_experience', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Drone Flight Hours</label>
                      <input
                        type="number"
                        value={editForm.drone_flight_hours_total}
                        onChange={(event) => setEditField('drone_flight_hours_total', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Drones Owned</label>
                      <input
                        type="number"
                        value={editForm.drones_owned_total}
                        onChange={(event) => setEditField('drones_owned_total', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Quote Turnaround (hours)</label>
                      <input
                        type="number"
                        value={editForm.avg_quote_turnaround_hours}
                        onChange={(event) => setEditField('avg_quote_turnaround_hours', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Member Since Year</label>
                      <input
                        type="number"
                        value={editForm.member_since_year}
                        onChange={(event) => setEditField('member_since_year', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Data Delivery Min (days)</label>
                      <input
                        type="number"
                        value={editForm.data_delivery_min_days}
                        onChange={(event) => setEditField('data_delivery_min_days', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Data Delivery Max (days)</label>
                      <input
                        type="number"
                        value={editForm.data_delivery_max_days}
                        onChange={(event) => setEditField('data_delivery_max_days', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                </AdminCard>

                <AdminCard title="Top Services">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-medium text-gray-500">Select Services</label>
                      <span className="text-xs text-gray-500">{editForm.top_service_slugs.length}/6 selected</span>
                    </div>

                    <div className="max-h-64 overflow-y-auto rounded-lg border border-gray-200 bg-white p-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {PILOT_SERVICE_OPTIONS.map((service) => {
                          const checked = editForm.top_service_slugs.includes(service.slug);
                          const disabled = !checked && editForm.top_service_slugs.length >= 6;
                          return (
                            <label
                              key={service.slug}
                              className={`flex items-center gap-2 rounded px-2 py-1.5 text-sm ${
                                disabled ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-50'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                disabled={disabled}
                                onChange={() => toggleTopService(service.slug)}
                              />
                              <span>{service.title}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {editForm.top_service_slugs.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {editForm.top_service_slugs.map((slug) => {
                          const service = PILOT_SERVICE_OPTIONS.find((item) => item.slug === slug);
                          return (
                            <div key={slug}>
                              <label className="block text-xs font-medium text-gray-500 mb-1">
                                {service?.title || slug}
                              </label>
                              <select
                                value={editForm.top_service_ratings_json[slug] || ''}
                                onChange={(event) => setTopServiceRating(slug, event.target.value as PilotServiceLevel | '')}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white"
                              >
                                <option value="">Select level...</option>
                                {PILOT_SERVICE_LEVELS.map((level) => (
                                  <option key={level} value={level}>{level}</option>
                                ))}
                              </select>
                            </div>
                          );
                        })}
                      </div>
                    ) : null}

                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Additional Services Note</label>
                      <textarea
                        rows={2}
                        value={editForm.additional_services_note}
                        onChange={(event) => setEditField('additional_services_note', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg resize-y"
                      />
                    </div>
                  </div>
                </AdminCard>

                <AdminCard title="Equipment & Portfolio">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-medium text-gray-500">Drones / Equipment</label>
                        <button
                          type="button"
                          onClick={addEquipmentRow}
                          className="text-xs font-medium text-[#f97316] hover:text-[#e8650d]"
                        >
                          Add Row
                        </button>
                      </div>
                      {editForm.equipment_items_json.length > 0 ? (
                        <div className="space-y-2">
                          {editForm.equipment_items_json.map((row, index) => (
                            <div key={`equipment-${index}`} className="grid gap-2 sm:grid-cols-[1.1fr,1fr,auto]">
                              <input
                                type="text"
                                value={row.name}
                                onChange={(event) => updateEquipmentRow(index, 'name', event.target.value)}
                                placeholder="Name"
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                              />
                              <input
                                type="text"
                                value={row.details}
                                onChange={(event) => updateEquipmentRow(index, 'details', event.target.value)}
                                placeholder="Details"
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                              />
                              <button
                                type="button"
                                onClick={() => removeEquipmentRow(index)}
                                className="px-3 py-2 text-xs border border-red-200 text-red-600 rounded-lg hover:bg-red-50"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">No equipment rows added yet.</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-2">Portfolio Images</label>
                      <div className="rounded-xl bg-slate-900 p-3">
                        <PortfolioUploader
                          value={editForm.portfolio_items_json}
                          onChange={(items) => setEditField('portfolio_items_json', items)}
                          maxItems={3}
                        />
                      </div>
                    </div>
                  </div>
                </AdminCard>

                <AdminCard title="FAQ Answers">
                  <div className="space-y-3">
                    {[
                      { question: PILOT_FAQ_QUESTIONS[0].question, field: 'faq_coverage_answer' as const },
                      { question: PILOT_FAQ_QUESTIONS[1].question, field: 'faq_qualifications_answer' as const },
                      { question: PILOT_FAQ_QUESTIONS[2].question, field: 'faq_turnaround_answer' as const },
                      { question: PILOT_FAQ_QUESTIONS[3].question, field: 'faq_formats_answer' as const },
                      { question: PILOT_FAQ_QUESTIONS[4].question, field: 'faq_permissions_answer' as const },
                    ].map((item) => (
                      <div key={item.field}>
                        <label className="block text-xs font-medium text-gray-500 mb-1">{item.question}</label>
                        <textarea
                          rows={3}
                          value={editForm[item.field]}
                          onChange={(event) => setEditField(item.field, event.target.value)}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg resize-y"
                        />
                      </div>
                    ))}
                  </div>
                </AdminCard>

                <AdminCard title="Admin Controls">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Tier</label>
                      <select
                        value={editForm.tier}
                        onChange={(event) => setEditField('tier', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white"
                      >
                        <option value="VERIFIED_OPERATOR">Verified Operator</option>
                        <option value="INTEGRATED_OPERATOR">Integrated Operator</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-700">Active</label>
                      <button
                        type="button"
                        onClick={() => setEditField('active', !editForm.active)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          editForm.active ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            editForm.active ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Admin Notes</label>
                      <textarea
                        rows={4}
                        value={editForm.notes}
                        onChange={(event) => setEditField('notes', event.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg resize-y"
                      />
                    </div>

                    <div className="text-xs text-gray-500">
                      <div>Joined: {toLocalDateTime(detail.created_at)}</div>
                      {detail.updated_at ? <div>Last Updated: {toLocalDateTime(detail.updated_at)}</div> : null}
                      {detail.slug ? (
                        <a
                          href={`/pilots/${detail.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#f97316] hover:underline mt-1"
                        >
                          /pilots/{detail.slug}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : null}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={handleSave}
                        disabled={saving}
                        className="px-4 py-2 bg-[#f97316] text-white rounded-lg font-medium text-sm hover:bg-[#e8650d] transition-colors disabled:opacity-60"
                      >
                        {saving ? 'Saving...' : 'Save Changes'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setConfirmDeleteOpen(true)}
                        disabled={saving}
                        className="px-4 py-2 bg-white text-red-600 border border-red-200 rounded-lg font-medium text-sm hover:bg-red-50 transition-colors disabled:opacity-60"
                      >
                        Delete
                      </button>
                      {saveMsg ? (
                        <span className={`text-sm ${saveMsg.toLowerCase().includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                          {saveMsg}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </AdminCard>
              </div>
            ) : null}
          </div>
        </>
      ) : null}

      <ConfirmDialog
        open={confirmDeleteOpen}
        title="Delete Pilot"
        message="Delete will deactivate this pilot and hide them from the default active list. Historical records are kept."
        confirmLabel="Delete"
        variant="danger"
        onConfirm={() => void handleDelete()}
        onCancel={() => setConfirmDeleteOpen(false)}
      />
    </div>
  );
}
