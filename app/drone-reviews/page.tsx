import type { Metadata } from 'next';
import Link from 'next/link';

import BestPageCard from '@/components/reviews/BestPageCard';
import ComparisonCard from '@/components/reviews/ComparisonCard';
import ReviewCard from '@/components/reviews/ReviewCard';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';
import {
  getAllDroneBestPages,
  getAllDroneComparisons,
  getAllDroneReviews,
  getFeaturedDroneReviews,
} from '@/lib/contentful/reviews';
import { pageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Drone Reviews | Lab-Tested Buying Guides | HireDronePilot',
  description:
    'Browse structured drone reviews with repeatable field-test data, score breakdowns, comparison links, and buyer-focused verdicts.',
  path: '/drone-reviews',
});

export default async function DroneReviewsPage() {
  const [featuredReviews, allReviews, allComparisons, allBestPages] = await Promise.all([
    getFeaturedDroneReviews(3),
    getAllDroneReviews(),
    getAllDroneComparisons(),
    getAllDroneBestPages(),
  ]);

  const reviewMap = new Map(allReviews.map((review) => [review.slug, review]));
  const comparisonCards = allComparisons
    .slice(0, 2)
    .map((comparison) => {
      const leftReview = reviewMap.get(comparison.leftReviewSlug);
      const rightReview = reviewMap.get(comparison.rightReviewSlug);
      if (!leftReview || !rightReview) return null;
      return { comparison, leftReview, rightReview };
    })
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  const breadcrumbItems = [
    { name: 'Home', url: 'https://hiredronepilot.uk' },
    { name: 'Drone Reviews', url: 'https://hiredronepilot.uk/drone-reviews' },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <section className="relative -mt-[120px] overflow-hidden bg-gradient-to-b from-teal via-teal-dark to-teal-darker pt-[120px] text-white">
        <div className="container relative py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Drone Reviews</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Structured drone reviews built from repeatable field tests.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            Every review ties verdicts back to the same core tests: setup speed, camera scenes,
            real flight time, wind behaviour, tracking, obstacle response, controller feel, and
            overall ownership value.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#featured" className="btn btn-primary">
              Explore Featured Reviews
            </Link>
            <Link href="/best-drones" className="btn btn-outline-white">
              Browse Best Drones
            </Link>
          </div>
        </div>
      </section>

      <section id="featured" className="section bg-background-alt">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Featured Reviews</p>
              <h2 className="mt-3 text-3xl font-bold text-teal md:text-4xl">Start with the most useful reads</h2>
            </div>
            <Link href="/best-drones" className="text-sm font-semibold text-gold hover:text-gold-dark transition-colors">
              See all ranking pages
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-3">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.slug} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid grid-cols-1 gap-12 xl:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Best Pages</p>
            <h2 className="mt-3 text-3xl font-bold text-teal md:text-4xl">Use-case rankings with explicit methodology</h2>
            <div className="mt-8 space-y-6">
              {allBestPages.map((page) => (
                <BestPageCard key={page.slug} page={page} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Head-to-Head</p>
            <h2 className="mt-3 text-3xl font-bold text-teal md:text-4xl">Quick decision pages for close calls</h2>
            <div className="mt-8 space-y-6">
              {comparisonCards.map(({ comparison, leftReview, rightReview }) => (
                <ComparisonCard
                  key={comparison.slug}
                  comparison={comparison}
                  leftReview={leftReview}
                  rightReview={rightReview}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
