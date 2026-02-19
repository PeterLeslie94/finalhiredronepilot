'use client';

import { useEffect, useState, useCallback } from 'react';
import { X, ExternalLink, Search } from 'lucide-react';
import AdminCard from '@/components/admin/AdminCard';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function toLocalDateTime(value: string) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleString('en-GB');
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return 'Not provided';
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-GB');
}

function isExpiredOrSoon(dateStr: string | null): 'expired' | 'soon' | 'ok' {
  if (!dateStr) return 'ok';
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return 'ok';
  const now = new Date();
  if (d < now) return 'expired';
  const thirtyDays = 30 * 24 * 60 * 60 * 1000;
  if (d.getTime() - now.getTime() < thirtyDays) return 'soon';
  return 'ok';
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function AdminPilotsPage() {
  const [pilots, setPilots] = useState<PilotRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Filters
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('');

  // Slide-out detail
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [detail, setDetail] = useState<PilotDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  // Editable fields in slide-out
  const [editActive, setEditActive] = useState(false);
  const [editNotes, setEditNotes] = useState('');
  const [editTier, setEditTier] = useState('VERIFIED_OPERATOR');
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');

  /* ---- Load list ---- */
  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams();
      if (activeFilter) params.set('active', activeFilter);
      if (search.trim()) params.set('search', search.trim());

      const res = await fetch(`/api/admin/pilots?${params.toString()}`);
      const body = (await res.json()) as { pilots?: PilotRow[]; error?: string };
      if (!res.ok) throw new Error(body.error || 'Failed to load pilots');
      setPilots(body.pilots || []);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load');
    } finally {
      setLoading(false);
    }
  }, [activeFilter, search]);

  useEffect(() => {
    void load();
  }, [load]);

  /* ---- Load detail ---- */
  const loadDetail = async (id: string) => {
    setSelectedId(id);
    setDetailLoading(true);
    setDetail(null);
    setSaveMsg('');
    try {
      const res = await fetch(`/api/admin/pilots/${id}`);
      const body = (await res.json()) as { pilot?: PilotDetail; error?: string };
      if (!res.ok) throw new Error(body.error || 'Failed to load pilot');
      const p = body.pilot!;
      setDetail(p);
      setEditActive(p.active);
      setEditNotes(p.notes || '');
      setEditTier(p.tier || 'VERIFIED_OPERATOR');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load pilot detail');
      setSelectedId(null);
    } finally {
      setDetailLoading(false);
    }
  };

  /* ---- Save changes ---- */
  const handleSave = async () => {
    if (!detail) return;
    setSaving(true);
    setSaveMsg('');
    try {
      const res = await fetch(`/api/admin/pilots/${detail.id}/`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          active: editActive,
          notes: editNotes,
          tier: editTier,
        }),
      });
      const body = (await res.json()) as { pilot?: PilotDetail; error?: string };
      if (!res.ok) throw new Error(body.error || 'Failed to save');
      setDetail(body.pilot!);
      setSaveMsg('Saved successfully');
      // Refresh the list to reflect changes
      void load();
    } catch (e) {
      setSaveMsg(e instanceof Error ? e.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  const closePanel = () => {
    setSelectedId(null);
    setDetail(null);
  };

  /* ---- Render ---- */
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pilot Directory</h1>
          <p className="text-sm text-gray-500">Manage registered drone pilots. Click a row to view and edit.</p>
        </div>
        <button
          className="px-4 py-2 bg-[#f97316] text-white rounded-lg font-medium text-sm hover:bg-[#e8650d] transition-colors"
          onClick={load}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Refresh'}
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search name, email, business..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316]/40 focus:border-[#f97316]"
          />
        </div>

        <select
          value={activeFilter}
          onChange={(e) => setActiveFilter(e.target.value)}
          className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316]/40 focus:border-[#f97316] bg-white"
        >
          <option value="">All Pilots</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      </div>

      {/* Error */}
      {error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-4">
          {error}
        </div>
      ) : null}

      {/* Table */}
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
                  onClick={() => loadDetail(pilot.id)}
                  className={`cursor-pointer transition-colors ${
                    selectedId === pilot.id ? 'bg-orange-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <td className="p-3">
                    <div className="font-medium text-gray-900">{pilot.name}</div>
                    {pilot.business_name && (
                      <div className="text-xs text-gray-500">{pilot.business_name}</div>
                    )}
                  </td>
                  <td className="p-3 text-gray-700">{pilot.email}</td>
                  <td className="p-3">
                    <span
                      className={`inline-block w-2.5 h-2.5 rounded-full ${
                        pilot.active ? 'bg-green-500' : 'bg-red-500'
                      }`}
                      title={pilot.active ? 'Active' : 'Inactive'}
                    />
                  </td>
                  <td className="p-3">
                    {pilot.tier === 'INTEGRATED_OPERATOR' ? (
                      <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Integrated
                      </span>
                    ) : (
                      <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Verified
                      </span>
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
                    {insuranceStatus === 'expired' && (
                      <span className="ml-1 text-xs text-red-500">Expired</span>
                    )}
                    {insuranceStatus === 'soon' && (
                      <span className="ml-1 text-xs text-amber-500">Expiring soon</span>
                    )}
                  </td>
                  <td className="p-3 text-gray-700">{pilot.licence_level || 'N/A'}</td>
                  <td className="p-3 text-gray-500 text-xs">{toLocalDateTime(pilot.created_at)}</td>
                </tr>
              );
            })}
            {pilots.length === 0 && !loading ? (
              <tr>
                <td colSpan={7} className="p-6 text-gray-500 text-center">
                  No pilots found.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      {/* Slide-out detail panel */}
      {selectedId && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-[150]"
            onClick={closePanel}
          />
          <div className="fixed top-0 right-0 h-full w-full max-w-lg bg-[#f8fafc] shadow-xl z-[151] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                {detail ? (
                  <>
                    <h2 className="text-lg font-bold text-gray-900">{detail.name}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          detail.active
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {detail.active ? 'Active' : 'Inactive'}
                      </span>
                      {detail.tier === 'INTEGRATED_OPERATOR' ? (
                        <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Integrated
                        </span>
                      ) : (
                        <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Verified
                        </span>
                      )}
                    </div>
                  </>
                ) : (
                  <h2 className="text-lg font-bold text-gray-900">Loading...</h2>
                )}
              </div>
              <button
                onClick={closePanel}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {detailLoading && (
              <div className="p-6 text-center text-gray-500 text-sm">Loading pilot details...</div>
            )}

            {detail && !detailLoading && (
              <div className="p-6 space-y-5">
                {/* Contact details */}
                <AdminCard title="Contact Details">
                  <dl className="space-y-2.5 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Business Name</dt>
                      <dd className="text-gray-900 font-medium">{detail.business_name || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Email</dt>
                      <dd className="text-gray-900">{detail.email}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Phone</dt>
                      <dd className="text-gray-900">{detail.phone || 'N/A'}</dd>
                    </div>
                    {detail.website_url && (
                      <div className="flex justify-between">
                        <dt className="text-gray-500">Website</dt>
                        <dd>
                          <a
                            href={detail.website_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#f97316] hover:underline inline-flex items-center gap-1 text-sm"
                          >
                            {detail.website_url.replace(/^https?:\/\//, '')}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </dd>
                      </div>
                    )}
                  </dl>
                </AdminCard>

                {/* Qualifications */}
                <AdminCard title="Qualifications">
                  <dl className="space-y-2.5 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Licence Level</dt>
                      <dd className="text-gray-900 font-medium">{detail.licence_level || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Flyer ID</dt>
                      <dd className="text-gray-900">{detail.flyer_id || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Operator ID</dt>
                      <dd className="text-gray-900">{detail.operator_id || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Insurance Provider</dt>
                      <dd className="text-gray-900">{detail.insurance_provider || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Insurance Expiry</dt>
                      <dd>
                        {(() => {
                          const s = isExpiredOrSoon(detail.insurance_expiry);
                          return (
                            <>
                              <span
                                className={
                                  s === 'expired'
                                    ? 'text-red-600 font-medium'
                                    : s === 'soon'
                                      ? 'text-amber-600 font-medium'
                                      : 'text-gray-900'
                                }
                              >
                                {formatDate(detail.insurance_expiry)}
                              </span>
                              {s === 'expired' && (
                                <span className="ml-1 text-xs text-red-500">Expired</span>
                              )}
                              {s === 'soon' && (
                                <span className="ml-1 text-xs text-amber-500">Expiring soon</span>
                              )}
                            </>
                          );
                        })()}
                      </dd>
                    </div>
                  </dl>
                </AdminCard>

                {/* Summary */}
                {detail.two_sentence_summary && (
                  <AdminCard title="Pilot Summary">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {detail.two_sentence_summary}
                    </p>
                  </AdminCard>
                )}

                {/* Timestamps */}
                <AdminCard title="Timeline">
                  <dl className="space-y-2.5 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Registered</dt>
                      <dd className="text-gray-900">{toLocalDateTime(detail.created_at)}</dd>
                    </div>
                    {detail.updated_at && (
                      <div className="flex justify-between">
                        <dt className="text-gray-500">Last Updated</dt>
                        <dd className="text-gray-900">{toLocalDateTime(detail.updated_at)}</dd>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Tier</dt>
                      <dd className="text-gray-900">
                        {detail.integrated_confirmed_at
                          ? `Integrated at ${toLocalDateTime(detail.integrated_confirmed_at)}`
                          : 'Verified Operator'}
                      </dd>
                    </div>
                    {detail.slug && (
                      <div className="flex justify-between">
                        <dt className="text-gray-500">Public Profile</dt>
                        <dd>
                          <a
                            href={`/pilots/${detail.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#f97316] hover:underline inline-flex items-center gap-1 text-sm"
                          >
                            /pilots/{detail.slug}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </dd>
                      </div>
                    )}
                  </dl>
                </AdminCard>

                {/* Editable fields */}
                <div className="border-t border-gray-200 pt-5">
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
                    Admin Controls
                  </h3>

                  <div className="space-y-4">
                    {/* Active toggle */}
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-700">Active</label>
                      <button
                        type="button"
                        onClick={() => setEditActive(!editActive)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          editActive ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            editActive ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Tier */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tier</label>
                      <select
                        value={editTier}
                        onChange={(e) => setEditTier(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316]/40 focus:border-[#f97316] bg-white"
                      >
                        <option value="VERIFIED_OPERATOR">Verified Operator</option>
                        <option value="INTEGRATED_OPERATOR">Integrated Operator</option>
                      </select>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Admin Notes
                      </label>
                      <textarea
                        value={editNotes}
                        onChange={(e) => setEditNotes(e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316]/40 focus:border-[#f97316] resize-vertical"
                        placeholder="Internal notes about this pilot..."
                      />
                    </div>

                    {/* Save */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handleSave}
                        disabled={saving}
                        className="px-4 py-2 bg-[#f97316] text-white rounded-lg font-medium text-sm hover:bg-[#e8650d] transition-colors disabled:opacity-50"
                      >
                        {saving ? 'Saving...' : 'Save Changes'}
                      </button>
                      {saveMsg && (
                        <span
                          className={`text-sm ${
                            saveMsg.includes('success') ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {saveMsg}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
