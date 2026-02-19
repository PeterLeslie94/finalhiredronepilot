'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  FileText,
  LogOut,
  User,
  Mail,
  Phone,
} from 'lucide-react';
import StatusBadge from '@/components/admin/StatusBadge';
import AdminCard from '@/components/admin/AdminCard';
import {
  formatServiceSlug,
  toLocalDateTime,
  toLocalDate,
  flexibilityLabel,
} from '@/lib/utils/format';

type Props = {
  params: Promise<{ id: string }>;
};

type InviteDetail = {
  invitation_id: string;
  enquiry_id: string;
  invite_status: string;
  invite_round: number;
  sent_at: string;
  opened_at: string | null;
  brief: string;
  enquiry: {
    service_slug: string;
    date_needed: string | null;
    date_flexibility: string;
    site_location_text: string;
    postcode: string;
  };
  client: {
    name: string;
    email: string;
    phone: string;
  };
};

function DetailLoadingSkeleton() {
  return (
    <div className="grid lg:grid-cols-3 gap-6 animate-pulse">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-4" />
          <div className="space-y-3">
            <div className="h-4 bg-gray-100 rounded w-full" />
            <div className="h-4 bg-gray-100 rounded w-3/4" />
            <div className="h-4 bg-gray-100 rounded w-2/3" />
            <div className="h-4 bg-gray-100 rounded w-1/2" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4" />
          <div className="h-20 bg-gray-100 rounded" />
        </div>
      </div>
      <div className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-100 rounded w-full" />
            <div className="h-4 bg-gray-100 rounded w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DronePilotInvitePage({ params }: Props) {
  const [invitationId, setInvitationId] = useState('');
  const [invite, setInvite] = useState<InviteDetail | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    params.then((p) => setInvitationId(p.id));
  }, [params]);

  const load = async () => {
    if (!invitationId) return;
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/pilot/invitations/${invitationId}`);
      const body = (await response.json()) as InviteDetail & { error?: string };
      if (!response.ok) throw new Error(body.error || 'Failed to load invitation');
      setInvite(body);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invitationId]);

  return (
    <section className="section bg-background-alt">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              href="/drone-pilot"
              className="flex items-center gap-1 text-sm text-text-secondary hover:text-teal transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Dashboard
            </Link>
            {invite && (
              <>
                <span className="text-gray-300">/</span>
                <h1 className="text-xl font-bold text-teal truncate">
                  {formatServiceSlug(invite.enquiry.service_slug)}
                </h1>
                <StatusBadge status={invite.invite_status} type="invite" />
              </>
            )}
          </div>
          <Link
            className="btn btn-outline-teal inline-flex items-center gap-2"
            href="/logout"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Link>
        </div>

        {/* Error */}
        {error && !invite && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 mb-6">
            {error}{' '}
            <Link href="/login" className="text-gold hover:underline ml-2">
              Go to login
            </Link>
          </div>
        )}

        {/* Loading */}
        {loading && !invite && <DetailLoadingSkeleton />}

        {/* Content */}
        {invite && (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left column — 2/3 */}
            <div className="lg:col-span-2 space-y-6">
              <AdminCard title="Enquiry Details">
                <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                  <div>
                    <dt className="flex items-center gap-1.5 text-text-secondary mb-1">
                      <FileText className="h-3.5 w-3.5" />
                      Service
                    </dt>
                    <dd className="font-medium text-gray-900">
                      {formatServiceSlug(invite.enquiry.service_slug)}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1.5 text-text-secondary mb-1">
                      <MapPin className="h-3.5 w-3.5" />
                      Location
                    </dt>
                    <dd className="font-medium text-gray-900">
                      {invite.enquiry.site_location_text}, {invite.enquiry.postcode}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1.5 text-text-secondary mb-1">
                      <Calendar className="h-3.5 w-3.5" />
                      Date Needed
                    </dt>
                    <dd className="font-medium text-gray-900">
                      {invite.enquiry.date_needed
                        ? toLocalDate(invite.enquiry.date_needed)
                        : 'Not specified'}
                      <span className="text-text-secondary font-normal ml-1">
                        ({flexibilityLabel(invite.enquiry.date_flexibility)})
                      </span>
                    </dd>
                  </div>
                </dl>
              </AdminCard>

              <AdminCard title="Project Brief">
                <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                  {invite.brief}
                </div>
              </AdminCard>
            </div>

            {/* Right column — 1/3 */}
            <div className="space-y-6">
              <AdminCard title="Status">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Invite Status</span>
                    <StatusBadge status={invite.invite_status} type="invite" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Sent</span>
                    <span className="text-gray-900">{toLocalDateTime(invite.sent_at)}</span>
                  </div>
                  {invite.opened_at && (
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Opened</span>
                      <span className="text-gray-900">{toLocalDateTime(invite.opened_at)}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Round</span>
                    <span className="text-gray-900">{invite.invite_round}</span>
                  </div>
                </div>
              </AdminCard>

              {/* Client Contact */}
              <AdminCard title="Client Contact">
                <p className="text-sm text-text-secondary mb-4">
                  Contact the client directly to discuss requirements and provide your quote.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <User className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className="font-medium text-gray-900">{invite.client.name}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <a
                      href={`mailto:${invite.client.email}`}
                      className="text-teal hover:underline"
                    >
                      {invite.client.email}
                    </a>
                  </div>
                  {invite.client.phone && (
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      <a
                        href={`tel:${invite.client.phone}`}
                        className="text-teal hover:underline"
                      >
                        {invite.client.phone}
                      </a>
                    </div>
                  )}
                </div>
              </AdminCard>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
