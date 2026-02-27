'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, RefreshCw, Save, Send, XCircle, Search } from 'lucide-react';

import AdminCard from '@/components/admin/AdminCard';
import StatusBadge from '@/components/admin/StatusBadge';
import { services } from '@/data/services';

type Enquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service_slug: string;
  site_location_text: string;
  postcode: string;
  date_needed: string | null;
  date_flexibility: 'FIXED' | 'WITHIN_WEEK' | 'WITHIN_MONTH' | 'ASAP';
  job_details: string;
  status: string;
  created_at: string;
};

type Invite = {
  id: string;
  pilot_name: string;
  pilot_email: string;
  status: string;
  sent_at: string;
};

type EnquiryEvent = {
  id: string;
  event_type: string;
  actor: string;
  detail: string;
  created_at: string;
};

type EmailLog = {
  id: string;
  template_key: string;
  recipient: string;
  status: string;
  sent_at: string | null;
};

type EnquiryDetailResponse = {
  enquiry: Enquiry;
  events: EnquiryEvent[];
  invites: Invite[];
  email_logs: EmailLog[];
};

type PilotOption = {
  id: string;
  name: string;
  email: string;
  tier: string;
};

type EditForm = {
  service_slug: string;
  date_flexibility: 'FIXED' | 'WITHIN_WEEK' | 'WITHIN_MONTH' | 'ASAP';
  date_needed: string;
  site_location_text: string;
  postcode: string;
  job_details: string;
};

type InviteSelectionMode = 'ALL_ACTIVE' | 'INTEGRATED_ONLY' | 'MANUAL';

type Props = {
  params: Promise<{ id: string }>;
};

function toLocalDateTime(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleString('en-GB');
}

function formatServiceSlug(slug: string) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

const DATE_FLEX_OPTIONS: Array<{ value: EditForm['date_flexibility']; label: string }> = [
  { value: 'ASAP', label: 'As soon as possible' },
  { value: 'WITHIN_WEEK', label: 'Within a week' },
  { value: 'WITHIN_MONTH', label: 'Within a month' },
  { value: 'FIXED', label: 'Fixed date' },
];

const SERVICE_OPTIONS = Array.from(new Map(services.map((service) => [service.slug, service])).values()).map((service) => ({
  value: service.slug,
  label: service.title,
}));

function toEditForm(enquiry: Enquiry): EditForm {
  return {
    service_slug: enquiry.service_slug,
    date_flexibility: enquiry.date_flexibility,
    date_needed: enquiry.date_needed || '',
    site_location_text: enquiry.site_location_text || '',
    postcode: enquiry.postcode || '',
    job_details: enquiry.job_details || '',
  };
}

export default function AdminEnquiryDetailPage({ params }: Props) {
  const [enquiryId, setEnquiryId] = useState('');
  const [data, setData] = useState<EnquiryDetailResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [editForm, setEditForm] = useState<EditForm | null>(null);
  const [savingDetails, setSavingDetails] = useState(false);
  const [saveResult, setSaveResult] = useState('');

  const [inviteResult, setInviteResult] = useState('');
  const [closing, setClosing] = useState(false);

  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  const [sendingInvites, setSendingInvites] = useState(false);
  const [inviteMode, setInviteMode] = useState<InviteSelectionMode>('INTEGRATED_ONLY');
  const [allowReinvite, setAllowReinvite] = useState(false);
  const [pilotSearch, setPilotSearch] = useState('');
  const [manualPilotIds, setManualPilotIds] = useState<string[]>([]);
  const [pilotOptions, setPilotOptions] = useState<PilotOption[]>([]);
  const [loadingPilots, setLoadingPilots] = useState(false);

  useEffect(() => {
    params.then((resolved) => setEnquiryId(resolved.id));
  }, [params]);

  const load = async () => {
    if (!enquiryId) return;
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/admin/enquiries/${enquiryId}`);
      const body = (await response.json()) as EnquiryDetailResponse & { error?: string };
      if (!response.ok) throw new Error(body.error || 'Failed to load enquiry');
      setData(body);
      setEditForm(toEditForm(body.enquiry));
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Failed to load enquiry');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!enquiryId) return;
    void load();
  }, [enquiryId]);

  const loadPilotOptions = async () => {
    if (pilotOptions.length > 0) return;
    setLoadingPilots(true);
    try {
      const response = await fetch('/api/admin/pilots?active=true&limit=200');
      const body = (await response.json()) as {
        pilots?: Array<{ id: string; name: string; email: string; tier: string }>;
        error?: string;
      };
      if (!response.ok) throw new Error(body.error || 'Failed to load pilots');
      setPilotOptions((body.pilots || []).map((pilot) => ({
        id: pilot.id,
        name: pilot.name,
        email: pilot.email,
        tier: pilot.tier,
      })));
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Failed to load pilots');
    } finally {
      setLoadingPilots(false);
    }
  };

  const enquiry = data?.enquiry ?? null;
  const invites = data?.invites ?? [];
  const events = data?.events ?? [];
  const emailLogs = data?.email_logs ?? [];

  const canSendInvites = enquiry != null && enquiry.status !== 'CLOSED';
  const integratedCount = pilotOptions.filter((pilot) => pilot.tier === 'INTEGRATED_OPERATOR').length;

  const visiblePilotOptions = useMemo(() => {
    const query = pilotSearch.trim().toLowerCase();
    if (!query) return pilotOptions;
    return pilotOptions.filter((pilot) => `${pilot.name} ${pilot.email}`.toLowerCase().includes(query));
  }, [pilotOptions, pilotSearch]);

  const isDirty = useMemo(() => {
    if (!enquiry || !editForm) return false;
    return JSON.stringify(editForm) !== JSON.stringify(toEditForm(enquiry));
  }, [enquiry, editForm]);

  const saveDetails = async () => {
    if (!enquiryId || !editForm) return;
    setSavingDetails(true);
    setSaveResult('');
    setError('');
    try {
      const response = await fetch(`/api/admin/enquiries/${enquiryId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update_details',
          service_slug: editForm.service_slug,
          date_flexibility: editForm.date_flexibility,
          date_needed: editForm.date_flexibility === 'FIXED' ? editForm.date_needed || null : null,
          site_location_text: editForm.site_location_text,
          postcode: editForm.postcode,
          job_details: editForm.job_details,
        }),
      });
      const body = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(body.error || 'Failed to save enquiry details');
      setSaveResult('Saved enquiry details.');
      await load();
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : 'Failed to save enquiry details');
    } finally {
      setSavingDetails(false);
    }
  };

  const closeEnquiry = async () => {
    if (!enquiryId) return;
    setClosing(true);
    setError('');
    try {
      const response = await fetch(`/api/admin/enquiries/${enquiryId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'close' }),
      });
      const body = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(body.error || 'Failed to close enquiry');
      await load();
    } catch (closeError) {
      setError(closeError instanceof Error ? closeError.message : 'Failed to close enquiry');
    } finally {
      setClosing(false);
    }
  };

  const openInviteModal = async () => {
    if (!canSendInvites) return;
    setInviteResult('');
    setPilotSearch('');
    setInviteMode('INTEGRATED_ONLY');
    setManualPilotIds([]);
    setAllowReinvite(false);
    setInviteModalOpen(true);
    await loadPilotOptions();
  };

  const sendInvites = async () => {
    if (!enquiryId || !canSendInvites) return;
    if (inviteMode === 'MANUAL' && manualPilotIds.length === 0) {
      setError('Select at least one pilot for manual invite mode.');
      return;
    }

    setSendingInvites(true);
    setError('');
    try {
      const response = await fetch(`/api/admin/enquiries/${enquiryId}/invite/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          selection_mode: inviteMode,
          include_pilot_ids: inviteMode === 'MANUAL' ? manualPilotIds : [],
          exclude_pilot_ids: [],
          allow_reinvite: allowReinvite,
        }),
      });
      const body = (await response.json()) as { error?: string; invites_created?: number };
      if (!response.ok) throw new Error(body.error || 'Failed to send invites');
      setInviteResult(`Invites queued: ${body.invites_created ?? 0}`);
      setInviteModalOpen(false);
      await load();
    } catch (sendError) {
      setError(sendError instanceof Error ? sendError.message : 'Failed to send invites');
    } finally {
      setSendingInvites(false);
    }
  };

  const toggleManualPilot = (pilotId: string) => {
    setManualPilotIds((current) =>
      current.includes(pilotId) ? current.filter((id) => id !== pilotId) : [...current, pilotId],
    );
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Dashboard
          </Link>
          {enquiry ? (
            <>
              <span className="text-gray-300">/</span>
              <h1 className="text-lg font-bold text-gray-900">{enquiry.name}</h1>
              <StatusBadge status={enquiry.status} type="enquiry" />
            </>
          ) : null}
        </div>
      </div>

      {error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-4">{error}</div>
      ) : null}
      {saveResult ? (
        <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg p-3 mb-4">{saveResult}</div>
      ) : null}
      {inviteResult ? (
        <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg p-3 mb-4">{inviteResult}</div>
      ) : null}

      <AdminCard className="mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => void load()}
            disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Loading...' : 'Refresh'}
          </button>

          <button
            type="button"
            onClick={saveDetails}
            disabled={!isDirty || savingDetails || !editForm}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f766e] text-white rounded-lg font-medium text-sm hover:bg-[#0b5f59] transition-colors disabled:opacity-60"
          >
            <Save className="w-4 h-4" />
            {savingDetails ? 'Saving...' : 'Save Changes'}
          </button>

          {enquiry && enquiry.status !== 'CLOSED' ? (
            <button
              type="button"
              onClick={closeEnquiry}
              disabled={closing}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors disabled:opacity-60"
            >
              <XCircle className="w-4 h-4" />
              {closing ? 'Closing...' : 'Close Enquiry'}
            </button>
          ) : null}

          <button
            type="button"
            onClick={() => void openInviteModal()}
            disabled={!canSendInvites}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#f97316] text-white rounded-lg font-medium text-sm hover:bg-[#e8650d] transition-colors ml-auto disabled:opacity-60"
          >
            <Send className="w-4 h-4" />
            Send Invites
          </button>
        </div>
      </AdminCard>

      {enquiry && editForm ? (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <AdminCard title="Client Contact (Read Only)">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-gray-500 text-xs font-medium">Name</dt>
                  <dd className="text-gray-900 font-medium">{enquiry.name}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-xs font-medium">Email</dt>
                  <dd className="text-gray-900">{enquiry.email}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-xs font-medium">Phone</dt>
                  <dd className="text-gray-900">{enquiry.phone || 'N/A'}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-xs font-medium">Created</dt>
                  <dd className="text-gray-900">{toLocalDateTime(enquiry.created_at)}</dd>
                </div>
              </dl>
            </AdminCard>

            <AdminCard title="Enquiry Details (Editable)">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Service</label>
                  <select
                    value={editForm.service_slug}
                    onChange={(event) => setEditForm((current) => current ? { ...current, service_slug: event.target.value } : current)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]"
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                    {!SERVICE_OPTIONS.find((option) => option.value === editForm.service_slug) ? (
                      <option value={editForm.service_slug}>{formatServiceSlug(editForm.service_slug)}</option>
                    ) : null}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Date Flexibility</label>
                    <select
                      value={editForm.date_flexibility}
                      onChange={(event) => {
                        const value = event.target.value as EditForm['date_flexibility'];
                        setEditForm((current) => {
                          if (!current) return current;
                          return {
                            ...current,
                            date_flexibility: value,
                            date_needed: value === 'FIXED' ? current.date_needed : '',
                          };
                        });
                      }}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]"
                    >
                      {DATE_FLEX_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Date Needed</label>
                    <input
                      type="date"
                      value={editForm.date_needed}
                      onChange={(event) => setEditForm((current) => current ? { ...current, date_needed: event.target.value } : current)}
                      disabled={editForm.date_flexibility !== 'FIXED'}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] disabled:bg-gray-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Location</label>
                    <input
                      type="text"
                      value={editForm.site_location_text}
                      onChange={(event) => setEditForm((current) => current ? { ...current, site_location_text: event.target.value } : current)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Postcode</label>
                    <input
                      type="text"
                      value={editForm.postcode}
                      onChange={(event) => setEditForm((current) => current ? { ...current, postcode: event.target.value } : current)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Job Details</label>
                  <textarea
                    rows={8}
                    value={editForm.job_details}
                    onChange={(event) => setEditForm((current) => current ? { ...current, job_details: event.target.value } : current)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] resize-y"
                  />
                </div>
              </div>
            </AdminCard>
          </div>

          <div className="space-y-6">
            <AdminCard title={`Invites (${invites.length})`}>
              {invites.length === 0 ? (
                <p className="text-sm text-gray-500">No invites sent yet.</p>
              ) : (
                <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                  {invites.map((invite) => (
                    <div key={invite.id} className="rounded-lg border border-gray-200 p-2.5">
                      <p className="text-sm font-medium text-gray-900">{invite.pilot_name}</p>
                      <p className="text-xs text-gray-500 truncate">{invite.pilot_email}</p>
                      <div className="mt-1 flex items-center justify-between">
                        <StatusBadge status={invite.status} type="invite" />
                        <span className="text-xs text-gray-400">{toLocalDateTime(invite.sent_at)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </AdminCard>

            <AdminCard title={`Email Log (${emailLogs.length})`}>
              {emailLogs.length === 0 ? (
                <p className="text-sm text-gray-500">No emails logged.</p>
              ) : (
                <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                  {emailLogs.map((log) => (
                    <div key={log.id} className="rounded-lg border border-gray-200 p-2.5">
                      <p className="text-xs font-medium text-gray-900">{log.template_key}</p>
                      <p className="text-xs text-gray-500 truncate">{log.recipient}</p>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-gray-700">{log.status}</span>
                        <span className="text-xs text-gray-400">{log.sent_at ? toLocalDateTime(log.sent_at) : 'Pending'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </AdminCard>

            <AdminCard title={`Audit Log (${events.length})`}>
              {events.length === 0 ? (
                <p className="text-sm text-gray-500">No events recorded.</p>
              ) : (
                <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                  {events.map((event) => (
                    <div key={event.id} className="rounded-lg border border-gray-200 p-2.5">
                      <p className="text-xs font-medium text-gray-900">{event.event_type}</p>
                      {event.detail ? <p className="text-xs text-gray-600 mt-1">{event.detail}</p> : null}
                      <p className="text-xs text-gray-400 mt-1">{toLocalDateTime(event.created_at)}</p>
                    </div>
                  ))}
                </div>
              )}
            </AdminCard>
          </div>
        </div>
      ) : (
        !loading && <p className="text-sm text-gray-500">Loading enquiry details...</p>
      )}

      {inviteModalOpen ? (
        <div className="fixed inset-0 z-[220] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setInviteModalOpen(false)} />
          <div className="relative w-full max-w-2xl bg-white rounded-lg border border-gray-200 shadow-xl">
            <div className="px-5 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Send Invites</h3>
              <p className="text-sm text-gray-500">Choose who should receive this enquiry.</p>
            </div>

            <div className="p-5 space-y-4">
              {loadingPilots ? (
                <p className="text-sm text-gray-500">Loading pilots...</p>
              ) : (
                <>
                  <label className="flex items-start gap-2 rounded-lg border border-gray-200 p-3">
                    <input
                      type="radio"
                      checked={inviteMode === 'ALL_ACTIVE'}
                      onChange={() => setInviteMode('ALL_ACTIVE')}
                      className="mt-1"
                    />
                    <span>
                      <span className="block text-sm font-medium text-gray-900">All Pilots</span>
                      <span className="text-xs text-gray-500">All active pilots ({pilotOptions.length})</span>
                    </span>
                  </label>

                  <label className="flex items-start gap-2 rounded-lg border border-gray-200 p-3">
                    <input
                      type="radio"
                      checked={inviteMode === 'INTEGRATED_ONLY'}
                      onChange={() => setInviteMode('INTEGRATED_ONLY')}
                      className="mt-1"
                    />
                    <span>
                      <span className="block text-sm font-medium text-gray-900">All Verified Pilots</span>
                      <span className="text-xs text-gray-500">Integrated operators only ({integratedCount})</span>
                    </span>
                  </label>

                  <label className="flex items-start gap-2 rounded-lg border border-gray-200 p-3">
                    <input
                      type="radio"
                      checked={inviteMode === 'MANUAL'}
                      onChange={() => setInviteMode('MANUAL')}
                      className="mt-1"
                    />
                    <span>
                      <span className="block text-sm font-medium text-gray-900">Select Pilots</span>
                      <span className="text-xs text-gray-500">Pick individual pilots</span>
                    </span>
                  </label>

                  {inviteMode === 'MANUAL' ? (
                    <div className="rounded-lg border border-gray-200 p-3">
                      <div className="relative mb-3">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={pilotSearch}
                          onChange={(event) => setPilotSearch(event.target.value)}
                          placeholder="Search pilots by name or email"
                          className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]"
                        />
                      </div>
                      <div className="max-h-56 overflow-y-auto space-y-2">
                        {visiblePilotOptions.map((pilot) => (
                          <label key={pilot.id} className="flex items-start gap-2 rounded-md border border-gray-200 px-2.5 py-2">
                            <input
                              type="checkbox"
                              checked={manualPilotIds.includes(pilot.id)}
                              onChange={() => toggleManualPilot(pilot.id)}
                              className="mt-1"
                            />
                            <span>
                              <span className="block text-sm text-gray-900">{pilot.name}</span>
                              <span className="text-xs text-gray-500">{pilot.email}</span>
                            </span>
                          </label>
                        ))}
                        {visiblePilotOptions.length === 0 ? (
                          <p className="text-xs text-gray-500">No pilots match your search.</p>
                        ) : null}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">Selected: {manualPilotIds.length}</p>
                    </div>
                  ) : null}

                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={allowReinvite}
                      onChange={(event) => setAllowReinvite(event.target.checked)}
                    />
                    <span>Allow re-inviting pilots already invited in previous rounds</span>
                  </label>
                </>
              )}
            </div>

            <div className="px-5 py-4 border-t border-gray-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setInviteModalOpen(false)}
                className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => void sendInvites()}
                disabled={sendingInvites || loadingPilots}
                className="px-4 py-2 bg-[#f97316] text-white rounded-lg font-medium text-sm hover:bg-[#e8650d] transition-colors disabled:opacity-60"
              >
                {sendingInvites ? 'Sending...' : 'Send Invites'}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
