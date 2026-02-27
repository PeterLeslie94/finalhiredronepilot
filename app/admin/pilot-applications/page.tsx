'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { X, ExternalLink } from 'lucide-react';
import StatusBadge from '@/components/admin/StatusBadge';
import AdminCard from '@/components/admin/AdminCard';
import ConfirmDialog from '@/components/admin/ConfirmDialog';

type PilotApplication = {
  id: string;
  pilot_name: string;
  business_name: string;
  email: string;
  phone: string;
  licence_level: string;
  insurance_expiry: string | null;
  insurance_provider: string | null;
  flyer_id: string | null;
  operator_id: string | null;
  website_url: string | null;
  two_sentence_summary: string | null;
  review_notes: string | null;
  status: string;
  backlink_confirmed_at: string | null;
  created_at: string;
  reviewed_at: string | null;
};

function toLocalDateTime(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleString('en-GB');
}

function isExpired(dateStr: string | null): boolean {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  return !Number.isNaN(d.getTime()) && d < new Date();
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return 'Not provided';
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-GB');
}

export default function AdminPilotApplicationsPage() {
  const searchParams = useSearchParams();
  const [items, setItems] = useState<PilotApplication[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [confirmRejectId, setConfirmRejectId] = useState<string | null>(null);
  const [queueView, setQueueView] = useState<'default' | 'upgrade'>(
    searchParams.get('view') === 'upgrade' ? 'upgrade' : 'default',
  );

  const selected = items.find((i) => i.id === selectedId) ?? null;

  const load = async ({
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
      const params = new URLSearchParams({ limit: '100' });
      if (queueView === 'upgrade') params.set('upgrade_ready', 'true');
      if (cursor) params.set('cursor', cursor);

      const response = await fetch(`/api/admin/pilot-applications?${params.toString()}`);
      const body = (await response.json()) as {
        items?: PilotApplication[];
        next_cursor?: string | null;
        error?: string;
      };
      if (!response.ok) throw new Error(body.error || 'Failed to load applications');
      const incoming = body.items || [];
      setItems((current) => (append ? [...current, ...incoming] : incoming));
      setNextCursor(body.next_cursor ?? null);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Failed to load');
    } finally {
      if (append) {
        setLoadingMore(false);
      } else {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queueView]);

  useEffect(() => {
    const selectedFromQuery = searchParams.get('selected');
    if (selectedFromQuery) {
      setSelectedId(selectedFromQuery);
    }
    const view = searchParams.get('view');
    setQueueView(view === 'upgrade' ? 'upgrade' : 'default');
  }, [searchParams]);

  const updateStatus = async (id: string, action: 'approve' | 'reject' | 'request-info') => {
    try {
      const payload =
        action === 'reject'
          ? { reason: 'Not suitable for current network requirements.' }
          : action === 'request-info'
            ? { message: 'Please provide additional details for compliance review.' }
            : {};

      const response = await fetch(`/api/admin/pilot-applications/${id}/${action}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const body = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(body.error || `Failed to ${action}`);
      await load();
    } catch (statusError) {
      setError(statusError instanceof Error ? statusError.message : 'Action failed');
    }
  };

  const handleRejectConfirm = async () => {
    if (!confirmRejectId) return;
    await updateStatus(confirmRejectId, 'reject');
    setConfirmRejectId(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pilot Applications</h1>
          <p className="text-sm text-gray-500">Click a row to view full details and take action.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setQueueView('default')}
            className={`px-3 py-2 rounded-lg border text-xs font-medium transition-colors ${
              queueView === 'default'
                ? 'bg-[#f97316] text-white border-[#f97316]'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            All Applications
          </button>
          <button
            type="button"
            onClick={() => setQueueView('upgrade')}
            className={`px-3 py-2 rounded-lg border text-xs font-medium transition-colors ${
              queueView === 'upgrade'
                ? 'bg-[#f97316] text-white border-[#f97316]'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Badge Upgrades
          </button>
          <button
            className="px-4 py-2 bg-[#f97316] text-white rounded-lg font-medium text-sm hover:bg-[#e8650d] transition-colors"
            onClick={() => void load()}
            disabled={loading || loadingMore}
          >
            {loading ? 'Loading...' : 'Refresh'}
          </button>
        </div>
      </div>

      {error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-4">
          {error}
        </div>
      ) : null}

      <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Drone Pilot</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Licence</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Insurance Expiry</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Status</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Backlink</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Applied</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map((item) => (
              <tr
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`cursor-pointer transition-colors ${
                  selectedId === item.id
                    ? 'bg-orange-50'
                    : 'hover:bg-gray-50'
                }`}
              >
                <td className="p-3">
                  <div className="font-medium text-gray-900">{item.pilot_name}</div>
                  <div className="text-xs text-gray-500">{item.business_name}</div>
                </td>
                <td className="p-3 text-gray-700">{item.licence_level}</td>
                <td className="p-3">
                  <span className={isExpired(item.insurance_expiry) ? 'text-red-600 font-medium' : 'text-gray-700'}>
                    {formatDate(item.insurance_expiry)}
                  </span>
                  {isExpired(item.insurance_expiry) && (
                    <span className="ml-1 text-xs text-red-500">Expired</span>
                  )}
                </td>
                <td className="p-3">
                  <StatusBadge status={item.status} type="pilot" />
                </td>
                <td className="p-3">
                  {item.backlink_confirmed_at ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-700">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      Confirmed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400">
                      <span className="w-2 h-2 rounded-full bg-gray-300" />
                      Pending
                    </span>
                  )}
                </td>
                <td className="p-3 text-gray-500 text-xs">{toLocalDateTime(item.created_at)}</td>
              </tr>
            ))}
            {items.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-6 text-gray-500 text-center">
                  No applications loaded.
                </td>
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

      {/* Detail slide-out panel */}
      {selected && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-[150]"
            onClick={() => setSelectedId(null)}
          />
          <div className="fixed top-0 right-0 h-full w-full max-w-lg bg-[#f8fafc] shadow-xl z-[151] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">{selected.pilot_name}</h2>
                <StatusBadge status={selected.status} type="pilot" />
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {/* Contact */}
              <AdminCard title="Contact Details">
                <dl className="space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Business Name</dt>
                    <dd className="text-gray-900 font-medium">{selected.business_name || 'N/A'}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Email</dt>
                    <dd className="text-gray-900">{selected.email}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Phone</dt>
                    <dd className="text-gray-900">{selected.phone || 'N/A'}</dd>
                  </div>
                  {selected.website_url && (
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Website</dt>
                      <dd>
                        <a
                          href={selected.website_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#f97316] hover:underline inline-flex items-center gap-1 text-sm"
                        >
                          {selected.website_url.replace(/^https?:\/\//, '')}
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
                    <dd className="text-gray-900 font-medium">{selected.licence_level}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Flyer ID</dt>
                    <dd className="text-gray-900">{selected.flyer_id || 'N/A'}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Operator ID</dt>
                    <dd className="text-gray-900">{selected.operator_id || 'N/A'}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Insurance Provider</dt>
                    <dd className="text-gray-900">{selected.insurance_provider || 'N/A'}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Insurance Expiry</dt>
                    <dd>
                      <span className={isExpired(selected.insurance_expiry) ? 'text-red-600 font-medium' : 'text-gray-900'}>
                        {formatDate(selected.insurance_expiry)}
                      </span>
                      {isExpired(selected.insurance_expiry) && (
                        <span className="ml-1 text-xs text-red-500">Expired</span>
                      )}
                    </dd>
                  </div>
                </dl>
              </AdminCard>

              {/* Summary */}
              {selected.two_sentence_summary && (
                <AdminCard title="Pilot Summary">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {selected.two_sentence_summary}
                  </p>
                </AdminCard>
              )}

              {/* Dates & review */}
              <AdminCard title="Application Timeline">
                <dl className="space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Applied</dt>
                    <dd className="text-gray-900">{toLocalDateTime(selected.created_at)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Backlink Status</dt>
                    <dd>
                      {selected.backlink_confirmed_at ? (
                        <span className="text-green-700 font-medium">
                          Confirmed {toLocalDateTime(selected.backlink_confirmed_at)}
                        </span>
                      ) : (
                        <span className="text-gray-400">Not yet confirmed</span>
                      )}
                    </dd>
                  </div>
                  {selected.reviewed_at && (
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Reviewed</dt>
                      <dd className="text-gray-900">{toLocalDateTime(selected.reviewed_at)}</dd>
                    </div>
                  )}
                  {selected.review_notes && (
                    <div>
                      <dt className="text-gray-500 mb-1">Review Notes</dt>
                      <dd className="text-gray-700 text-xs bg-gray-50 rounded p-2 whitespace-pre-wrap">
                        {selected.review_notes}
                      </dd>
                    </div>
                  )}
                </dl>
              </AdminCard>

              {/* Actions */}
              <div className="border-t border-gray-200 pt-5">
                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Actions</h3>
                <div className="flex flex-wrap gap-3">
                  {selected.status !== 'APPROVED' && (
                    <button
                      className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium text-sm hover:bg-green-700 transition-colors"
                      onClick={() => updateStatus(selected.id, 'approve')}
                    >
                      Approve
                    </button>
                  )}
                  {selected.status !== 'NEEDS_INFO' && selected.status !== 'APPROVED' && (
                    <button
                      className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors"
                      onClick={() => updateStatus(selected.id, 'request-info')}
                    >
                      Request More Info
                    </button>
                  )}
                  {selected.status !== 'REJECTED' && selected.status !== 'APPROVED' && (
                    <button
                      className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium text-sm hover:bg-red-700 transition-colors"
                      onClick={() => setConfirmRejectId(selected.id)}
                    >
                      Reject
                    </button>
                  )}
                  {selected.status === 'APPROVED' && (
                    <p className="text-sm text-green-600 font-medium">This pilot has been approved.</p>
                  )}
                  {selected.status === 'REJECTED' && (
                    <p className="text-sm text-red-600 font-medium">This application was rejected.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <ConfirmDialog
        open={!!confirmRejectId}
        title="Reject Application"
        message="Are you sure you want to reject this pilot application? This will send a rejection notification to the applicant."
        confirmLabel="Reject"
        variant="danger"
        onConfirm={handleRejectConfirm}
        onCancel={() => setConfirmRejectId(null)}
      />
    </div>
  );
}
