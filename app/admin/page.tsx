'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { Bell, FileText, RefreshCw, UserPlus, BadgeCheck } from 'lucide-react';

type EnquiryRow = {
  id: string;
  name: string;
  email: string;
  service_slug: string;
  status: string;
  invite_count: string;
  created_at: string;
};

type PilotApplicationRow = {
  id: string;
  pilot_name: string;
  business_name: string;
  status: string;
  backlink_confirmed_at: string | null;
  created_at: string;
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

type QueueCardProps = {
  title: string;
  subtitle: string;
  count: number;
  icon: ReactNode;
  children: ReactNode;
};

function QueueCard({ title, subtitle, count, icon, children }: QueueCardProps) {
  return (
    <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-5">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h2 className="text-base font-semibold text-gray-900">{title}</h2>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
          {icon}
          {count}
        </div>
      </div>
      {children}
    </section>
  );
}

export default function AdminDashboardPage() {
  const [enquiries, setEnquiries] = useState<EnquiryRow[]>([]);
  const [newApplications, setNewApplications] = useState<PilotApplicationRow[]>([]);
  const [upgradeReady, setUpgradeReady] = useState<PilotApplicationRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const [enquiriesRes, appsRes, upgradesRes] = await Promise.all([
        fetch('/api/admin/enquiries?status=ACK_SENT&limit=25'),
        fetch('/api/admin/pilot-applications?status=SUBMITTED&limit=25'),
        fetch('/api/admin/pilot-applications?upgrade_ready=true&limit=25'),
      ]);

      const enquiriesBody = (await enquiriesRes.json()) as {
        items?: EnquiryRow[];
        error?: string;
      };
      const appsBody = (await appsRes.json()) as {
        items?: PilotApplicationRow[];
        error?: string;
      };
      const upgradesBody = (await upgradesRes.json()) as {
        items?: PilotApplicationRow[];
        error?: string;
      };

      if (!enquiriesRes.ok) throw new Error(enquiriesBody.error || 'Failed to load enquiries');
      if (!appsRes.ok) throw new Error(appsBody.error || 'Failed to load pilot applications');
      if (!upgradesRes.ok) throw new Error(upgradesBody.error || 'Failed to load upgrade queue');

      setEnquiries(enquiriesBody.items || []);
      setNewApplications(appsBody.items || []);
      setUpgradeReady(upgradesBody.items || []);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Failed to load dashboard');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-sm text-gray-500">Simple action queues for daily operations.</p>
        </div>
        <button
          type="button"
          onClick={() => void load()}
          disabled={loading}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#f97316] text-white rounded-lg font-medium text-sm hover:bg-[#e8650d] transition-colors disabled:opacity-60"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          {loading ? 'Loading...' : 'Refresh'}
        </button>
      </div>

      {error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-4">
          {error}
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <QueueCard
          title="New Enquiries"
          subtitle="Client submissions awaiting review"
          count={enquiries.length}
          icon={<FileText className="w-3.5 h-3.5" />}
        >
          <div className="space-y-2 max-h-[26rem] overflow-y-auto pr-1">
            {enquiries.length === 0 ? (
              <p className="text-sm text-gray-500">No new enquiries.</p>
            ) : (
              enquiries.map((item) => (
                <Link
                  key={item.id}
                  href={`/admin/enquiries/${item.id}`}
                  className="block rounded-lg border border-gray-200 px-3 py-2 hover:border-[#f97316]/40 hover:bg-orange-50 transition-colors"
                >
                  <p className="text-sm font-medium text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500 truncate">{formatServiceSlug(item.service_slug)}</p>
                  <p className="text-xs text-gray-400 mt-1">{toLocalDateTime(item.created_at)}</p>
                </Link>
              ))
            )}
          </div>
        </QueueCard>

        <QueueCard
          title="New Pilot Applications"
          subtitle="Fresh applicants to review"
          count={newApplications.length}
          icon={<UserPlus className="w-3.5 h-3.5" />}
        >
          <div className="space-y-2 max-h-[26rem] overflow-y-auto pr-1">
            {newApplications.length === 0 ? (
              <p className="text-sm text-gray-500">No new applications.</p>
            ) : (
              newApplications.map((item) => (
                <Link
                  key={item.id}
                  href={`/admin/pilot-applications?selected=${item.id}`}
                  className="block rounded-lg border border-gray-200 px-3 py-2 hover:border-[#f97316]/40 hover:bg-orange-50 transition-colors"
                >
                  <p className="text-sm font-medium text-gray-900">{item.pilot_name}</p>
                  <p className="text-xs text-gray-500 truncate">{item.business_name || 'No business name'}</p>
                  <p className="text-xs text-gray-400 mt-1">{toLocalDateTime(item.created_at)}</p>
                </Link>
              ))
            )}
          </div>
        </QueueCard>

        <QueueCard
          title="Badge Upgrades"
          subtitle="Pilots who confirmed backlink/badge"
          count={upgradeReady.length}
          icon={<BadgeCheck className="w-3.5 h-3.5" />}
        >
          <div className="space-y-2 max-h-[26rem] overflow-y-auto pr-1">
            {upgradeReady.length === 0 ? (
              <p className="text-sm text-gray-500">No upgrade-ready pilots.</p>
            ) : (
              upgradeReady.map((item) => (
                <Link
                  key={item.id}
                  href={`/admin/pilot-applications?selected=${item.id}&view=upgrade`}
                  className="block rounded-lg border border-gray-200 px-3 py-2 hover:border-[#f97316]/40 hover:bg-orange-50 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium text-gray-900 truncate">{item.pilot_name}</p>
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-green-700">
                      <Bell className="w-3 h-3" />
                      Ready
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">{item.business_name || 'No business name'}</p>
                  <p className="text-xs text-gray-400 mt-1">{toLocalDateTime(item.created_at)}</p>
                </Link>
              ))
            )}
          </div>
        </QueueCard>
      </div>
    </div>
  );
}
