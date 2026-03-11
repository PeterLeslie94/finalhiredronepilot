import type { Metadata } from 'next';

import { BreadcrumbSchema } from '@/components/SchemaMarkup';
import BestPageCard from '@/components/reviews/BestPageCard';
import { getAllDroneBestPages } from '@/lib/contentful/reviews';
import { pageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Best Drones | Ranked Buying Guides | HireDronePilot',
  description:
    'Browse use-case-specific best-drone rankings built from the same weighted review system, with explicit methodology and documented editorial overrides.',
  path: '/best-drones',
});

export default async function BestDronesPage() {
  const bestPages = await getAllDroneBestPages();

  const breadcrumbItems = [
    { name: 'Home', url: 'https://hiredronepilot.uk' },
    { name: 'Best Drones', url: 'https://hiredronepilot.uk/best-drones' },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <section className="relative -mt-[120px] overflow-hidden bg-gradient-to-b from-teal via-teal-dark to-teal-darker pt-[120px] text-white">
        <div className="container py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Best Drones</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Ranked pages built from the same underlying review data.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            These pages do not hand-wave their winners. Each ranking starts from structured review
            data, then applies a use-case-specific weighting profile and any explicit editorial
            override notes.
          </p>
        </div>
      </section>

      <section className="section bg-background-alt">
        <div className="container grid grid-cols-1 gap-6 xl:grid-cols-2">
          {bestPages.map((page) => (
            <BestPageCard key={page.slug} page={page} />
          ))}
        </div>
      </section>
    </>
  );
}
