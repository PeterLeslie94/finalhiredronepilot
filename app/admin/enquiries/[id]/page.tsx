'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowLeft, Mail, RefreshCw, Send, XCircle } from 'lucide-react';
import StatusBadge from '@/components/admin/StatusBadge';
import AdminCard from '@/components/admin/AdminCard';
import CollapsibleSection from '@/components/admin/CollapsibleSection';

type Enquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service_slug: string;
  site_location_text: string;
  postcode: string;
  date_needed: string;
  date_flexibility: string;
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
  opened_at: string | null;
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
  subject: string;
  status: string;
  sent_at: string | null;
  created_at: string;
  related_entity_id: string | null;
};

type EnquiryDetailResponse = {
  enquiry: Enquiry;
  events: EnquiryEvent[];
  invites: Invite[];
  email_logs: EmailLog[];
};

type Props = {
  params: Promise<{ id: string }>;
};

function toLocalDateTime(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleString('en-GB');
}

function formatServiceSlug(slug: string) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatTemplateKey(key: string): string {
  const map: Record<string, string> = {
    auth_magic_link: 'Magic Link',
    enquiry_ack: 'Enquiry Ack',
    pilot_invite: 'Pilot Invite',
    client_acknowledgement: 'Client Ack',
  };
  return map[key] || key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

const EMAIL_STATUS_COLORS: Record<string, string> = {
  QUEUED: 'bg-gray-100 text-gray-700',
  SENT: 'bg-green-100 text-green-800',
  FAILED: 'bg-red-100 text-red-800',
  DELIVERED: 'bg-blue-100 text-blue-800',
  BOUNCED: 'bg-amber-100 text-amber-800',
};

function truncateEmail(email: string | null | undefined, max = 28): string {
  if (!email) return '—';
  return email.length > max ? email.slice(0, max) + '...' : email;
}

export default function AdminEnquiryDetailPage({ params }: Props) {
  const [enquiryId, setEnquiryId] = useState('');
  const [data, setData] = useState<EnquiryDetailResponse | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [inviteResult, setInviteResult] = useState('');
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    params.then((p) => setEnquiryId(p.id));
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
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Failed to load');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!enquiryId) return;
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enquiryId]);

  const sendInvites = async () => {
    if (enquiry?.status === 'CLOSED') {
      setError('Cannot send invites for a closed enquiry.');
      return;
    }
    try {
      const response = await fetch(`/api/admin/enquiries/${enquiryId}/invite/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          include_pilot_ids: [],
          exclude_pilot_ids: [],
        }),
      });
      const body = (await response.json()) as { error?: string; invites_created?: number };
      if (!response.ok) throw new Error(body.error || 'Failed to send invites');
      setInviteResult(`Invites queued: ${body.invites_created ?? 0}`);
      await load();
    } catch (runError) {
      setError(runError instanceof Error ? runError.message : 'Invite failed');
    }
  };

  const closeEnquiry = async () => {
    try {
      setClosing(true);
      const response = await fetch(`/api/admin/enquiries/${enquiryId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'close' }),
      });
      const body = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok) throw new Error(body.error || 'Failed to close enquiry');
      await load();
    } catch (closeError) {
      setError(closeError instanceof Error ? closeError.message : 'Failed to close enquiry');
    } finally {
      setClosing(false);
    }
  };

  const enquiry = data?.enquiry;
  const invites = data?.invites ?? [];
  const events = data?.events ?? [];
  const emailLogs = data?.email_logs ?? [];
  const canSendInvites = Boolean(enquiryId) && enquiry != null && enquiry.status !== 'CLOSED';

  const inviteCounts = invites.reduce(
    (acc, inv) => {
      acc[inv.status] = (acc[inv.status] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <div>
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Dashboard
          </Link>
          {enquiry && (
            <>
              <span className="text-gray-300">/</span>
              <h1 className="text-lg font-bold text-gray-900">{enquiry.name}</h1>
              <StatusBadge status={enquiry.status} type="enquiry" />
            </>
          )}
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-4">
          {error}
        </div>
      )}
      {inviteResult && (
        <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg p-3 mb-4">
          {inviteResult}
        </div>
      )}

      {/* Action bar */}
      <AdminCard className="mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={load}
            disabled={!enquiryId || loading}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Loading...' : 'Refresh'}
          </button>
          {enquiry && enquiry.status !== 'CLOSED' && (
            <button
              onClick={closeEnquiry}
              disabled={closing || !enquiryId}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              <XCircle className="w-4 h-4" />
              {closing ? 'Closing...' : 'Close Enquiry'}
            </button>
          )}
          <button
            onClick={sendInvites}
            disabled={!canSendInvites}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#f97316] text-white rounded-lg font-medium text-sm hover:bg-[#e8650d] transition-colors ml-auto"
          >
            <Send className="w-4 h-4" />
            Send Invites
          </button>
        </div>
      </AdminCard>

      {data && enquiry ? (
        <>
          {/* Two-column layout */}
          <div className="grid gap-6 lg:grid-cols-3 mb-6">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Client info */}
              <AdminCard title="Client Information">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
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
                    <dt className="text-gray-500 text-xs font-medium">Service</dt>
                    <dd className="text-gray-900">{formatServiceSlug(enquiry.service_slug)}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 text-xs font-medium">Location</dt>
                    <dd className="text-gray-900">
                      {enquiry.site_location_text}
                      {enquiry.postcode ? `, ${enquiry.postcode}` : ''}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 text-xs font-medium">Preferred Date</dt>
                    <dd className="text-gray-900">
                      {enquiry.date_needed || 'Flexible'}
                      {enquiry.date_flexibility ? ` (${enquiry.date_flexibility})` : ''}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-gray-500 text-xs font-medium">Job Details</dt>
                    <dd className="text-gray-900 whitespace-pre-wrap">{enquiry.job_details}</dd>
                  </div>
                </dl>
              </AdminCard>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              {/* Status summary */}
              <AdminCard title="Status">
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500 text-xs font-medium">Enquiry Status</dt>
                    <dd className="mt-1">
                      <StatusBadge status={enquiry.status} type="enquiry" />
                    </dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 text-xs font-medium">Created</dt>
                    <dd className="text-gray-900">{toLocalDateTime(enquiry.created_at)}</dd>
                  </div>
                </dl>
              </AdminCard>

              {/* Invites summary */}
              <AdminCard title={`Invites (${invites.length})`}>
                {invites.length === 0 ? (
                  <p className="text-sm text-gray-500">No invites sent yet.</p>
                ) : (
                  <>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {Object.entries(inviteCounts).map(([status, count]) => (
                        <div key={status} className="text-xs text-gray-600">
                          <StatusBadge status={status} type="invite" />{' '}
                          <span className="font-medium">{count}</span>
                        </div>
                      ))}
                    </div>
                    <CollapsibleSection title="Individual Invites">
                      <div className="pt-3 space-y-2 max-h-80 overflow-y-auto">
                        {invites.map((inv) => (
                          <div
                            key={inv.id}
                            className="flex items-center justify-between text-xs border-b border-gray-50 pb-2"
                          >
                            <div>
                              <div className="text-gray-900 font-medium">{inv.pilot_name}</div>
                              <div className="text-gray-400">
                                {toLocalDateTime(inv.sent_at)}
                              </div>
                            </div>
                            <StatusBadge status={inv.status} type="invite" />
                          </div>
                        ))}
                      </div>
                    </CollapsibleSection>
                  </>
                )}
              </AdminCard>

              {/* Email Logs */}
              <CollapsibleSection
                title="Email Log"
                badge={
                  <span className="text-xs text-gray-400">{emailLogs.length}</span>
                }
              >
                <div className="pt-3">
                  {emailLogs.length === 0 ? (
                    <p className="text-sm text-gray-500">No emails logged.</p>
                  ) : (
                    <div className="space-y-2 max-h-80 overflow-y-auto">
                      {emailLogs.map((log) => {
                        const statusColor =
                          EMAIL_STATUS_COLORS[log.status] || 'bg-gray-100 text-gray-700';
                        return (
                          <div
                            key={log.id}
                            className="flex items-start justify-between gap-2 text-xs border-b border-gray-50 pb-2"
                          >
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 mb-0.5">
                                <Mail className="w-3 h-3 text-gray-400 shrink-0" />
                                <span className="font-medium text-gray-900 truncate">
                                  {formatTemplateKey(log.template_key)}
                                </span>
                              </div>
                              <div className="text-gray-500 truncate pl-5" title={log.recipient}>
                                {truncateEmail(log.recipient)}
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-1 shrink-0">
                              <span
                                className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium ${statusColor}`}
                              >
                                {log.status}
                              </span>
                              <span className="text-gray-400 text-[10px]">
                                {log.sent_at ? toLocalDateTime(log.sent_at) : 'Pending'}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </CollapsibleSection>

              {/* Complaint templates */}
              <CollapsibleSection title="Complaint Templates">
                <ul className="list-disc pl-5 text-xs text-gray-600 space-y-2 pt-3">
                  <li>
                    We have recorded this issue and signposted direct resolution between the
                    client and independent drone pilot.
                  </li>
                  <li>
                    HireDronePilot is not party to the service contract and acts as a
                    facilitator and record keeper only.
                  </li>
                </ul>
              </CollapsibleSection>
            </div>
          </div>

          {/* Events / Audit log */}
          <CollapsibleSection
            title="Audit Log"
            badge={<span className="text-xs text-gray-400">{events.length} events</span>}
          >
            <div className="pt-3">
              {events.length === 0 ? (
                <p className="text-sm text-gray-500">No events recorded.</p>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {events.map((ev) => (
                    <div
                      key={ev.id}
                      className="flex items-start gap-3 text-sm border-l-2 border-gray-200 pl-3"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900 text-xs">
                            {ev.event_type}
                          </span>
                          {ev.actor && (
                            <span className="text-xs text-gray-400">{ev.actor}</span>
                          )}
                        </div>
                        {ev.detail && (
                          <p className="text-xs text-gray-600 mt-0.5">{ev.detail}</p>
                        )}
                      </div>
                      <span className="text-xs text-gray-400 whitespace-nowrap">
                        {toLocalDateTime(ev.created_at)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CollapsibleSection>
        </>
      ) : (
        !loading && <p className="text-gray-500">Loading enquiry data...</p>
      )}
    </div>
  );
}
