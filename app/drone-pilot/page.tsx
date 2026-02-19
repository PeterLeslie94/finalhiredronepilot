'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  MapPin,
  Calendar,
  ChevronRight,
  RefreshCw,
  LogOut,
  Inbox,
  User,
} from 'lucide-react';
import StatusBadge from '@/components/admin/StatusBadge';
import {
  formatServiceSlug,
  toLocalDate,
} from '@/lib/utils/format';

type InviteRow = {
  invitation_id: string;
  enquiry_id: string;
  invite_round: number;
  invite_status: string;
  sent_at: string;
  opened_at: string | null;
  service_slug: string;
  date_needed: string | null;
  date_flexibility: string;
  site_location_text: string;
  postcode: string;
};

function StatsBar({ items }: { items: InviteRow[] }) {
  const total = items.length;
  const pending = items.filter(
    (i) => i.invite_status === 'SENT' || i.invite_status === 'OPENED',
  ).length;
  const declined = items.filter((i) => i.invite_status === 'DECLINED').length;

  const stats = [
    { label: 'Total Invites', value: total, color: 'text-teal' },
    { label: 'Active', value: pending, color: 'text-amber-600' },
    { label: 'Declined', value: declined, color: 'text-red-600' },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-white rounded-lg border border-gray-200 p-4 text-center"
        >
          <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
          <p className="text-xs text-text-secondary mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((n) => (
        <div
          key={n}
          className="bg-white rounded-lg border border-gray-200 p-5 animate-pulse"
        >
          <div className="flex justify-between mb-3">
            <div className="h-5 bg-gray-200 rounded w-2/3" />
            <div className="h-5 bg-gray-200 rounded-full w-16" />
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-100 rounded w-3/4" />
            <div className="h-4 bg-gray-100 rounded w-1/2" />
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100">
            <div className="h-4 bg-gray-100 rounded w-1/3" />
          </div>
        </div>
      ))}
    </div>
  );
}

function InviteCard({ item }: { item: InviteRow }) {
  const isExpiredOrDeclined =
    item.invite_status === 'EXPIRED' || item.invite_status === 'DECLINED';
  const isActionable = !isExpiredOrDeclined;

  return (
    <Link
      href={`/drone-pilot/invites/${item.invitation_id}`}
      className={`group block bg-white rounded-lg border border-gray-200 p-5 transition-all hover:shadow-md ${
        isActionable ? 'hover:border-gold' : ''
      } ${isExpiredOrDeclined ? 'opacity-60' : ''}`}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-semibold text-gray-900 group-hover:text-teal transition-colors">
          {formatServiceSlug(item.service_slug)}
        </h3>
        <StatusBadge status={item.invite_status} type="invite" />
      </div>

      <div className="space-y-1.5 text-sm text-text-secondary">
        <p className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
          {item.site_location_text}, {item.postcode}
        </p>
        <p className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
          {item.date_needed ? toLocalDate(item.date_needed) : 'No fixed date'}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
        {isActionable ? (
          <span className="text-sm font-medium text-gold">View details</span>
        ) : (
          <span className="text-sm text-text-secondary">No action needed</span>
        )}
        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-teal transition-colors" />
      </div>
    </Link>
  );
}

export default function DronePilotDashboardPage() {
  const [items, setItems] = useState<InviteRow[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/pilot/me/invites');
      const body = (await response.json()) as { items?: InviteRow[]; error?: string };
      if (!response.ok) {
        throw new Error(body.error || 'Failed to load invites');
      }
      setItems(body.items || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="section bg-background-alt">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-teal">Drone Pilot Dashboard</h1>
            <p className="text-text-secondary">
              View enquiries you have been invited to quote on.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              className="btn btn-outline-teal inline-flex items-center gap-2"
              href="/drone-pilot/profile"
            >
              <User className="h-4 w-4" />
              My Profile
            </Link>
            <button
              className="btn btn-outline-teal inline-flex items-center gap-2"
              onClick={load}
              disabled={loading}
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <Link
              className="btn btn-outline-teal inline-flex items-center gap-2"
              href="/logout"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Link>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 mb-6">
            {error}{' '}
            <Link href="/login" className="text-gold hover:underline ml-2">
              Go to login
            </Link>
          </div>
        )}

        {/* Loading state */}
        {loading && items.length === 0 && !error && <LoadingSkeleton />}

        {/* Loaded content */}
        {!loading && items.length === 0 && !error && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <Inbox className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <h2 className="text-lg font-semibold text-gray-900 mb-1">No invitations yet</h2>
            <p className="text-sm text-text-secondary">
              When you are invited to quote on a project, it will appear here.
            </p>
          </div>
        )}

        {items.length > 0 && (
          <>
            <StatsBar items={items} />
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((item) => (
                <InviteCard key={item.invitation_id} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
