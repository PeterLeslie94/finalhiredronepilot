import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { query } from '@/lib/server/database';
import { Award, MapPin } from 'lucide-react';
import TrustBadge from '@/components/TrustBadge';
import { canonicalUrl } from '@/lib/seo/metadata';

export const revalidate = 3600;

type PilotProfile = {
  id: string;
  name: string;
  business_name: string | null;
  slug: string;
  tier: string;
  profile_photo_url: string | null;
  two_sentence_summary: string | null;
  licence_level: string | null;
  website_url: string | null;
};

async function getPilot(slug: string): Promise<PilotProfile | null> {
  const result = await query<PilotProfile>(
    `SELECT id, name, business_name, slug, tier, profile_photo_url,
            two_sentence_summary, licence_level, website_url
     FROM pilots
     WHERE slug = $1 AND active = true`,
    [slug],
  );
  return result.rows[0] ?? null;
}

export async function generateStaticParams() {
  try {
    const result = await query<{ slug: string }>('SELECT slug FROM pilots WHERE active = true');
    return result.rows.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pilot = await getPilot(slug);
  if (!pilot) return { title: 'Pilot Not Found | HireDronePilot' };

  const title = `${pilot.name}${pilot.business_name ? ` — ${pilot.business_name}` : ''} | HireDronePilot`;
  const description = pilot.two_sentence_summary
    ? pilot.two_sentence_summary
    : `${pilot.name} is a verified drone pilot on HireDronePilot. Get a quote for your drone survey project.`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl(`/pilots/${pilot.slug}`),
    },
    openGraph: {
      title,
      description,
      type: 'profile',
      ...(pilot.profile_photo_url ? { images: [{ url: pilot.profile_photo_url }] } : {}),
    },
  };
}

function licenceLevelLabel(level: string | null): string {
  if (!level) return 'CAA Registered';
  const labels: Record<string, string> = {
    A2_COFC: 'A2 Certificate of Competency',
    GVC: 'General VLOS Certificate (GVC)',
    STS: 'Specific Category (STS)',
    OPERATIONAL_AUTHORISATION: 'Operational Authorisation',
  };
  return labels[level] || level.replace(/_/g, ' ');
}

export default async function PilotProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pilot = await getPilot(slug);
  if (!pilot) notFound();

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-teal -mt-[120px] pt-[120px] py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            {/* Photo */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-gray-700 flex-shrink-0 relative">
              {pilot.profile_photo_url ? (
                <Image
                  src={pilot.profile_photo_url}
                  alt={pilot.name}
                  fill
                  className="object-cover"
                  sizes="192px"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-500">
                    {pilot.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {pilot.name}
              </h1>
              {pilot.business_name && (
                <p className="text-lg text-white/70 mb-4">{pilot.business_name}</p>
              )}
              <div className="mt-4">
                <TrustBadge />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Summary */}
              {pilot.two_sentence_summary && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">About</h2>
                  <p className="text-gray-600 leading-relaxed">{pilot.two_sentence_summary}</p>
                </div>
              )}

              {/* Qualifications */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Qualifications</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                    <Award className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">CAA Licence Level</p>
                      <p className="text-sm text-gray-600">{licenceLevelLabel(pilot.licence_level)}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                    <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Coverage</p>
                      <p className="text-sm text-gray-600">United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Website */}
              {pilot.website_url && (
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Website</h3>
                  <a
                    href={pilot.website_url}
                    target="_blank"
                    rel="noopener nofollow noreferrer"
                    className="btn btn-outline-teal w-full text-center block"
                  >
                    View Website
                  </a>
                </div>
              )}

              {/* CTA Card */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Get a Quote</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Tell us about your project and we&apos;ll connect you with {pilot.name} and other qualified pilots.
                </p>
                <Link
                  href="/contact"
                  className="btn btn-primary btn-shimmer w-full text-center block"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
