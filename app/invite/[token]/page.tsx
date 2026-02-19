'use client';

import { useEffect, useState } from 'react';
import { MapPin, Calendar, FileText, User, Mail, Phone } from 'lucide-react';
import { formatServiceSlug, toLocalDate, flexibilityLabel } from '@/lib/utils/format';

type Props = {
  params: Promise<{ token: string }>;
};

type InviteData = {
  invitation_id: string;
  enquiry_id: string;
  invite_status: string;
  pilot: { id: string; name: string; email: string };
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

export default function InvitePage({ params }: Props) {
  const [data, setData] = useState<InviteData | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    params.then((p) => {
      fetch(`/api/pilot-invites/${p.token}`)
        .then(async (res) => {
          const body = await res.json();
          if (!res.ok) throw new Error(body.error || 'Invalid invite link');
          setData(body);
        })
        .catch((err) => {
          setError(err instanceof Error ? err.message : 'Failed to load invite');
        })
        .finally(() => setLoading(false));
    });
  }, [params]);

  if (loading) {
    return (
      <section className="section bg-background-alt">
        <div className="container max-w-3xl">
          <div className="animate-pulse space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-4" />
              <div className="space-y-3">
                <div className="h-4 bg-gray-100 rounded w-full" />
                <div className="h-4 bg-gray-100 rounded w-3/4" />
                <div className="h-4 bg-gray-100 rounded w-2/3" />
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-4" />
              <div className="space-y-3">
                <div className="h-4 bg-gray-100 rounded w-1/2" />
                <div className="h-4 bg-gray-100 rounded w-1/3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="section bg-background-alt">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-lg border border-red-200 p-8 text-center">
            <h1 className="text-xl font-bold text-gray-900 mb-2">Invite Not Found</h1>
            <p className="text-sm text-red-600">
              {error || 'This invite link is invalid or has been removed.'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-background-alt">
      <div className="container max-w-3xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-teal">
            {formatServiceSlug(data.enquiry.service_slug)}
          </h1>
          <p className="text-sm text-text-secondary mt-1">
            You have been invited to quote on this project. Review the details below and contact the client directly.
          </p>
        </div>

        {/* Project Details */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-teal" />
            Project Details
          </h2>

          <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-4 text-sm mb-6">
            <div>
              <dt className="flex items-center gap-1.5 text-text-secondary mb-1">
                <FileText className="h-3.5 w-3.5" />
                Service
              </dt>
              <dd className="font-medium text-gray-900">
                {formatServiceSlug(data.enquiry.service_slug)}
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-text-secondary mb-1">
                <MapPin className="h-3.5 w-3.5" />
                Location
              </dt>
              <dd className="font-medium text-gray-900">
                {data.enquiry.site_location_text}, {data.enquiry.postcode}
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-text-secondary mb-1">
                <Calendar className="h-3.5 w-3.5" />
                Date Needed
              </dt>
              <dd className="font-medium text-gray-900">
                {data.enquiry.date_needed
                  ? toLocalDate(data.enquiry.date_needed)
                  : 'Not specified'}
                <span className="text-text-secondary font-normal ml-1">
                  ({flexibilityLabel(data.enquiry.date_flexibility)})
                </span>
              </dd>
            </div>
          </dl>

          <div>
            <h3 className="text-sm font-medium text-text-secondary mb-2">Job Details</h3>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
              {data.brief}
            </div>
          </div>
        </div>

        {/* Client Contact */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <User className="h-5 w-5 text-teal" />
            Client Contact
          </h2>
          <p className="text-sm text-text-secondary mb-4">
            Contact the client directly to discuss requirements and provide your quote.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <User className="h-4 w-4 text-gray-400 flex-shrink-0" />
              <span className="font-medium text-gray-900">{data.client.name}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
              <a
                href={`mailto:${data.client.email}`}
                className="text-teal hover:underline"
              >
                {data.client.email}
              </a>
            </div>
            {data.client.phone && (
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <a
                  href={`tel:${data.client.phone}`}
                  className="text-teal hover:underline"
                >
                  {data.client.phone}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
