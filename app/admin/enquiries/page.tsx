'use client';

import { useCallback, useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

import StatusBadge from '@/components/admin/StatusBadge';

type EnquiryStatus = 'NEW' | 'ACK_SENT' | 'INVITES_SENT' | 'CLOSED';
type StatusFilter = EnquiryStatus | 'ALL';

type EnquiryRow = {
  id: string;
  name: string;
  email: string;
  service_slug: string;
  site_location_text: string;
  postcode: string;
  status: EnquiryStatus;
  invite_count: string | number;
  updated_at: string;
  created_at: string;
};

type StatusCounts = Record<StatusFilter, number>;

type EnquiryListResponse = {
  items?: EnquiryRow[];
  next_cursor?: string | null;
  status_counts?: Partial<StatusCounts>;
  error?: string;
};

const STATUS_OPTIONS: Array<{ value: StatusFilter; label: string }> = [
  { value: 'ALL', label: 'All' },
  { value: 'NEW', label: 'New' },
  { value: 'ACK_SENT', label: 'Acknowledged' },
  { value: 'INVITES_SENT', label: 'Invites Sent' },
  { value: 'CLOSED', label: 'Closed' },
];

const EMPTY_COUNTS: StatusCounts = {
  ALL: 0,
  NEW: 0,
  ACK_SENT: 0,
  INVITES_SENT: 0,
  CLOSED: 0,
};

function toLocalDateTime(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleString('en-GB');
}

function formatServiceSlug(slug: string) {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function AdminEnquiriesPage() {
  const router = useRouter();

  const [items, setItems] = useState<EnquiryRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState('');
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('ALL');
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusCounts, setStatusCounts] = useState<StatusCounts>(EMPTY_COUNTS);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchQuery(searchInput.trim());
    }, 300);
    return () => clearTimeout(timeout);
  }, [searchInput]);

  const load = useCallback(
    async ({
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
        const params = new URLSearchParams({
          status: statusFilter,
          limit: '100',
        });
        if (searchQuery) params.set('q', searchQuery);
        if (cursor) params.set('cursor', cursor);

        const response = await fetch(`/api/admin/enquiries?${params.toString()}`);
        const body = (await response.json()) as EnquiryListResponse;
        if (!response.ok) throw new Error(body.error || 'Failed to load enquiries');

        const incoming = body.items || [];
        setItems((current) => (append ? [...current, ...incoming] : incoming));
        setNextCursor(body.next_cursor ?? null);
        setStatusCounts({
          ALL: Number(body.status_counts?.ALL ?? 0),
          NEW: Number(body.status_counts?.NEW ?? 0),
          ACK_SENT: Number(body.status_counts?.ACK_SENT ?? 0),
          INVITES_SENT: Number(body.status_counts?.INVITES_SENT ?? 0),
          CLOSED: Number(body.status_counts?.CLOSED ?? 0),
        });
      } catch (loadError) {
        setError(loadError instanceof Error ? loadError.message : 'Failed to load enquiries');
      } finally {
        if (append) {
          setLoadingMore(false);
        } else {
          setLoading(false);
        }
      }
    },
    [searchQuery, statusFilter],
  );

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Enquiries</h1>
          <p className="text-sm text-gray-500">Review all enquiries by stage and location.</p>
        </div>
        <button
          type="button"
          onClick={() => void load()}
          disabled={loading || loadingMore}
          className="px-4 py-2 bg-[#f97316] text-white rounded-lg font-medium text-sm hover:bg-[#e8650d] transition-colors disabled:opacity-60"
        >
          {loading ? 'Loading...' : 'Refresh'}
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {STATUS_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setStatusFilter(option.value)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                statusFilter === option.value
                  ? 'bg-[#f97316] text-white border-[#f97316]'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              {option.label} ({statusCounts[option.value]})
            </button>
          ))}
        </div>

        <div className="relative w-full md:max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder="Search by client, email, service, or postcode"
            className="w-full border border-gray-300 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#f97316]"
          />
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
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Client</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Service</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Location</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Stage</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Invites</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Updated</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map((item) => (
              <tr
                key={item.id}
                onClick={() => router.push(`/admin/enquiries/${item.id}`)}
                className="cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <td className="p-3">
                  <div className="font-medium text-gray-900">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.email}</div>
                </td>
                <td className="p-3 text-gray-700">{formatServiceSlug(item.service_slug)}</td>
                <td className="p-3 text-gray-700">
                  {[item.site_location_text, item.postcode].filter(Boolean).join(' • ') || 'Not provided'}
                </td>
                <td className="p-3">
                  <StatusBadge status={item.status} type="enquiry" />
                </td>
                <td className="p-3 text-gray-700">{Number(item.invite_count || 0)}</td>
                <td className="p-3 text-gray-500 text-xs">{toLocalDateTime(item.updated_at)}</td>
                <td className="p-3 text-gray-500 text-xs">{toLocalDateTime(item.created_at)}</td>
              </tr>
            ))}
            {items.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-6 text-gray-500 text-center">
                  No enquiries found.
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
    </div>
  );
}
