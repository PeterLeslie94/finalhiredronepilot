import Link from 'next/link';

import { DroneComparison, DroneReview } from '@/data/drone-review-types';

interface ComparisonCardProps {
  comparison: DroneComparison;
  leftReview: DroneReview;
  rightReview: DroneReview;
}

export default function ComparisonCard({
  comparison,
  leftReview,
  rightReview,
}: ComparisonCardProps) {
  const winner =
    comparison.winnerReviewSlug === leftReview.slug
      ? leftReview
      : comparison.winnerReviewSlug === rightReview.slug
        ? rightReview
        : null;

  return (
    <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-teal px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Comparison
        </span>
        {winner ? (
          <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">
            Winner: {winner.title.replace(' Review', '')}
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 text-2xl font-bold text-teal">{comparison.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{comparison.excerpt}</p>
      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded-2xl bg-background-alt p-4">
          <p className="text-xs uppercase tracking-wide text-text-secondary">Left Drone</p>
          <p className="mt-1 font-semibold text-teal">{leftReview.title.replace(' Review', '')}</p>
          <p className="mt-2 text-sm text-text-secondary">{comparison.leftBuyIf}</p>
        </div>
        <div className="rounded-2xl bg-background-alt p-4">
          <p className="text-xs uppercase tracking-wide text-text-secondary">Right Drone</p>
          <p className="mt-1 font-semibold text-teal">{rightReview.title.replace(' Review', '')}</p>
          <p className="mt-2 text-sm text-text-secondary">{comparison.rightBuyIf}</p>
        </div>
      </div>
      <Link
        href={`/drone-comparisons/${comparison.slug}`}
        className="mt-5 inline-flex text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
      >
        View Comparison
      </Link>
    </article>
  );
}
