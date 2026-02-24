import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { query } from '@/lib/server/database';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import TrustBadge from '@/components/TrustBadge';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Drone Pilots Directory | HireDronePilot',
  description:
    'Browse our directory of verified drone pilots across the UK. Every operator is CAA-registered, insured, and ready to quote on your project.',
  openGraph: {
    title: 'Drone Pilots Directory | HireDronePilot',
    description:
      'Browse our directory of verified drone pilots across the UK.',
    type: 'website',
  },
};

type PilotCard = {
  id: string;
  name: string;
  business_name: string | null;
  slug: string;
  tier: string;
  profile_photo_url: string | null;
  two_sentence_summary: string | null;
};

export default async function PilotsDirectoryPage() {
  const result = await query<PilotCard>(
    `SELECT id, name, business_name, slug, tier, profile_photo_url, two_sentence_summary
     FROM pilots
     WHERE active = true
     ORDER BY CASE tier WHEN 'INTEGRATED_OPERATOR' THEN 0 ELSE 1 END, created_at DESC`,
  );
  const pilots = result.rows;

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-teal -mt-[120px] pt-[120px] py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Drone Pilots Directory
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Browse our network of verified drone operators across the UK. Every pilot is CAA-registered, insured, and ready to quote on your project.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <TrustBadge animated={false} />
            <Link
              href="/join-as-pilot"
              className="btn btn-primary btn-shimmer inline-block"
            >
              Join As a Drone Pilot
            </Link>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          {pilots.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No pilots listed yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pilots.map((pilot) => (
                <Link
                  key={pilot.id}
                  href={`/pilots/${pilot.slug}`}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-orange-200 transition-all duration-300"
                >
                  {/* Photo */}
                  <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                    {pilot.profile_photo_url ? (
                      <Image
                        src={pilot.profile_photo_url}
                        alt={pilot.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-5xl font-bold text-gray-300">
                          {pilot.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    {/* Tier Badge Overlay */}
                    <div className="absolute top-3 right-3">
                      {pilot.tier === 'INTEGRATED_OPERATOR' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-600 text-white shadow-sm">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Website Verified
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-sm">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Verified
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {pilot.name}
                    </h2>
                    {pilot.business_name && (
                      <p className="text-sm text-gray-500 mt-0.5">{pilot.business_name}</p>
                    )}
                    {pilot.two_sentence_summary && (
                      <p className="text-sm text-gray-600 mt-3 line-clamp-2 leading-relaxed">
                        {pilot.two_sentence_summary}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Need a Drone Survey?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Submit your project details and receive quotes from verified pilots in your area.
          </p>
          <Link
            href="/contact"
            className="btn btn-primary btn-shimmer inline-block"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
