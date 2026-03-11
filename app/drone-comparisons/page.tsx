import type { Metadata } from 'next';

import { BreadcrumbSchema } from '@/components/SchemaMarkup';
import ComparisonCard from '@/components/reviews/ComparisonCard';
import {
  getAllDroneComparisons,
  getAllDroneReviews,
} from '@/lib/contentful/reviews';
import { pageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Drone Comparisons | Side-by-Side Buying Guides | HireDronePilot',
  description:
    'See structured drone comparisons with clear winner summaries, category-by-category results, and links back to the full reviews.',
  path: '/drone-comparisons',
});

export default async function DroneComparisonsPage() {
  const [comparisons, reviews] = await Promise.all([
    getAllDroneComparisons(),
    getAllDroneReviews(),
  ]);

  const reviewMap = new Map(reviews.map((review) => [review.slug, review]));
  const cards = comparisons
    .map((comparison) => {
      const leftReview = reviewMap.get(comparison.leftReviewSlug);
      const rightReview = reviewMap.get(comparison.rightReviewSlug);
      if (!leftReview || !rightReview) return null;
      return { comparison, leftReview, rightReview };
    })
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  const breadcrumbItems = [
    { name: 'Home', url: 'https://hiredronepilot.uk' },
    { name: 'Drone Comparisons', url: 'https://hiredronepilot.uk/drone-comparisons' },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <section className="relative -mt-[120px] overflow-hidden bg-gradient-to-b from-teal via-teal-dark to-teal-darker pt-[120px] text-white">
        <div className="container py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Drone Comparisons</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Side-by-side decision pages for the drones buyers cross-shop most.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            These pages reuse the same review data, then add a short verdict about who should buy
            which model and why the recommendation changes depending on budget, portability, or
            camera priorities.
          </p>
        </div>
      </section>

      <section className="section bg-background-alt">
        <div className="container space-y-6">
          {cards.map(({ comparison, leftReview, rightReview }) => (
            <ComparisonCard
              key={comparison.slug}
              comparison={comparison}
              leftReview={leftReview}
              rightReview={rightReview}
            />
          ))}
        </div>
      </section>
    </>
  );
}
