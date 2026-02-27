'use client';

import { useCallback, useEffect, useState } from 'react';
import { X, ExternalLink, Search } from 'lucide-react';

import AdminCard from '@/components/admin/AdminCard';
import ConfirmDialog from '@/components/admin/ConfirmDialog';

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
  backlink_token_hash: string | null;
};

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
  notes: string;
  tier: string;
  active: boolean;
};

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
      const response = await fetch(`/api/admin/pilots/${detail.id}/`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...editForm,
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
                        onChange={(event) => setEditForm((current) => current ? { ...current, name: event.target.value } : current)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Business Name</label>
                      <input
                        type="text"
                        value={editForm.business_name}
                        onChange={(event) => setEditForm((current) => current ? { ...current, business_name: event.target.value } : current)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Email</label>
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(event) => setEditForm((current) => current ? { ...current, email: event.target.value } : current)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Phone</label>
                      <input
                        type="text"
                        value={editForm.phone}
                        onChange={(event) => setEditForm((current) => current ? { ...current, phone: event.target.value } : current)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Website</label>
                      <input
                        type="text"
                        value={editForm.website_url}
                        onChange={(event) => setEditForm((current) => current ? { ...current, website_url: event.target.value } : current)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Profile Photo URL</label>
                      <input
                        type="text"
                        value={editForm.profile_photo_url}
                        onChange={(event) => setEditForm((current) => current ? { ...current, profile_photo_url: event.target.value } : current)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Two Sentence Summary</label>
                      <textarea
                        rows={3}
                        value={editForm.two_sentence_summary}
                        onChange={(event) => setEditForm((current) => current ? { ...current, two_sentence_summary: event.target.value } : current)}
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
                        onChange={(event) => setEditForm((current) => current ? { ...current, licence_level: event.target.value } : current)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Insurance Provider</label>
                      <input
                        type="text"
                        value={editForm.insurance_provider}
                        onChange={(event) => setEditForm((current) => current ? { ...current, insurance_provider: event.target.value } : current)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Insurance Expiry</label>
                      <input
                        type="date"
                        value={editForm.insurance_expiry}
                        onChange={(event) => setEditForm((current) => current ? { ...current, insurance_expiry: event.target.value } : current)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Flyer ID</label>
                      <input
                        type="text"
                        value={editForm.flyer_id}
                        onChange={(event) => setEditForm((current) => current ? { ...current, flyer_id: event.target.value } : current)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Operator ID</label>
                      <input
                        type="text"
                        value={editForm.operator_id}
                        onChange={(event) => setEditForm((current) => current ? { ...current, operator_id: event.target.value } : current)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Tier</label>
                      <select
                        value={editForm.tier}
                        onChange={(event) => setEditForm((current) => current ? { ...current, tier: event.target.value } : current)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white"
                      >
                        <option value="VERIFIED_OPERATOR">Verified Operator</option>
                        <option value="INTEGRATED_OPERATOR">Integrated Operator</option>
                      </select>
                    </div>
                  </div>
                </AdminCard>

                <AdminCard title="Admin Controls">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-700">Active</label>
                      <button
                        type="button"
                        onClick={() => setEditForm((current) => current ? { ...current, active: !current.active } : current)}
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
                        onChange={(event) => setEditForm((current) => current ? { ...current, notes: event.target.value } : current)}
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
