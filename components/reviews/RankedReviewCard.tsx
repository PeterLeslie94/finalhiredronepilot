import Link from 'next/link';

import { RankedBestPageReview } from '@/data/drone-review-types';

interface RankedReviewCardProps {
  entry: RankedBestPageReview;
}

export default function RankedReviewCard({ entry }: RankedReviewCardProps) {
  return (
    <article className="rounded-3xl border border-border bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-teal px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              #{entry.position}
            </span>
            <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">
              {entry.award}
            </span>
            {entry.overrideReason ? (
              <span className="rounded-full bg-background-alt px-3 py-1 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                Editorial override
              </span>
            ) : null}
          </div>
          <h3 className="mt-4 text-2xl font-bold text-teal">{entry.review.title.replace(' Review', '')}</h3>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">{entry.review.summary}</p>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-background-alt p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">Why This Pick</p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{entry.whyThisPick}</p>
            </div>
            <div className="rounded-2xl bg-background-alt p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">Who Should Skip It</p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{entry.whoShouldSkipIt}</p>
            </div>
          </div>
          {entry.overrideReason ? (
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              <strong className="text-teal">Override note:</strong> {entry.overrideReason}
            </p>
          ) : null}
        </div>
        <div className="min-w-[160px] rounded-3xl bg-teal p-5 text-white">
          <p className="text-xs uppercase tracking-wide text-white/70">Computed Score</p>
          <p className="mt-2 text-4xl font-bold">{entry.computedScore.toFixed(1)}</p>
          <p className="mt-1 text-sm text-white/75">weighted for this page</p>
          <Link
            href={`/drone-reviews/${entry.review.slug}`}
            className="mt-4 inline-flex text-sm font-semibold text-gold hover:text-gold-light transition-colors"
          >
            Read full review
          </Link>
        </div>
      </div>
    </article>
  );
}
