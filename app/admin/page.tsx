'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FileText, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import KpiCard from '@/components/admin/KpiCard';
import StatusBadge from '@/components/admin/StatusBadge';

type EnquiryRow = {
  id: string;
  name: string;
  email: string;
  service_slug: string;
  status: string;
  invite_count: string;
  created_at: string;
};

const STATUSES: Array<{ value: string; label: string }> = [
  { value: '', label: 'All statuses' },
  { value: 'NEW', label: 'New' },
  { value: 'ACK_SENT', label: 'Ack sent' },
  { value: 'INVITES_SENT', label: 'Invites sent' },
  { value: 'CLOSED', label: 'Closed' },
];

function toLocalDateTime(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleString('en-GB');
}

function formatServiceSlug(slug: string) {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function AdminDashboardPage() {
  const [items, setItems] = useState<EnquiryRow[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState('');
  const [searchText, setSearchText] = useState('');

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const url = new URL('/api/admin/enquiries', window.location.origin);
      url.searchParams.set('limit', '200');
      if (statusFilter) url.searchParams.set('status', statusFilter);

      const response = await fetch(url.toString());
      const body = (await response.json()) as { items?: EnquiryRow[]; error?: string };
      if (!response.ok) {
        throw new Error(body.error || 'Failed to load enquiries');
      }
      setItems(body.items || []);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Failed to load enquiries');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter]);

  const normalizedQuery = searchText.trim().toLowerCase();
  const visibleItems = normalizedQuery
    ? items.filter((item) => {
        const haystack = [
          item.name,
          item.email,
          item.service_slug,
          item.status,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return haystack.includes(normalizedQuery);
      })
    : items;

  const total = items.length;
  const newCount = items.filter((item) => item.status === 'NEW').length;
  const ackSent = items.filter((item) => item.status === 'ACK_SENT').length;
  const invitesSent = items.filter((item) => item.status === 'INVITES_SENT').length;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Manage enquiries, review details, and send invites to pilots.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <KpiCard
          label="Total Enquiries"
          value={total}
          icon={<FileText className="w-5 h-5" />}
        />
        <KpiCard
          label="New"
          value={newCount}
          icon={<AlertCircle className="w-5 h-5" />}
          highlight={newCount > 0}
        />
        <KpiCard
          label="Acknowledged"
          value={ackSent}
          icon={<CheckCircle className="w-5 h-5" />}
        />
        <KpiCard
          label="Invites Sent"
          value={invitesSent}
          icon={<Clock className="w-5 h-5" />}
        />
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
        <div className="flex flex-wrap items-end gap-3">
          <div className="flex-1 min-w-[220px]">
            <label className="text-xs text-gray-500 font-medium">Search</label>
            <input
              className="mt-1 block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Name, email, service, status..."
            />
          </div>

          <div className="min-w-[220px]">
            <label className="text-xs text-gray-500 font-medium">Status</label>
            <select
              className="mt-1 block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {STATUSES.map((option) => (
                <option key={option.value || 'all'} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={load}
            className="px-4 py-2 bg-[#f97316] text-white rounded-lg font-medium text-sm hover:bg-[#e8650d] transition-colors"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Refresh'}
          </button>
        </div>

        <div className="mt-3 text-xs text-gray-500 flex flex-wrap gap-4">
          <span>
            Showing <strong className="text-gray-900">{visibleItems.length}</strong> of{' '}
            <strong className="text-gray-900">{items.length}</strong>
          </span>
        </div>

        {error ? <p className="mt-2 text-red-600 text-sm">{error}</p> : null}
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Client</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Service</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Status</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Invites</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Created</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wide"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {visibleItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-3">
                  <div className="font-medium text-gray-900">{item.name}</div>
                  <div className="text-gray-500 text-xs">{item.email}</div>
                </td>
                <td className="p-3 text-gray-700">{formatServiceSlug(item.service_slug)}</td>
                <td className="p-3">
                  <StatusBadge status={item.status} type="enquiry" />
                </td>
                <td className="p-3 text-gray-700">
                  {item.invite_count}
                </td>
                <td className="p-3 text-gray-500 text-xs">{toLocalDateTime(item.created_at)}</td>
                <td className="p-3">
                  <Link
                    href={`/admin/enquiries/${item.id}`}
                    className="px-3 py-1.5 bg-[#f97316] text-white rounded-lg font-medium text-xs hover:bg-[#e8650d] transition-colors"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
            {visibleItems.length === 0 ? (
              <tr>
                <td className="p-6 text-gray-500 text-center" colSpan={6}>
                  No enquiries loaded.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
