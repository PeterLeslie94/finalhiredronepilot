import { DroneReview } from '@/data/drone-review-types';

import { getReviewDifferenceSummary } from '@/lib/reviews/editorial';

interface ReviewEditorialSummaryProps {
  review: DroneReview;
}

function renderList(items: string[]) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
          <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ReviewEditorialSummary({ review }: ReviewEditorialSummaryProps) {
  const neutralFactors = review.neutralFactors ?? [];

  return (
    <section id="how-it-differs" className="border-t border-border pt-12">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">How It&apos;s Different</p>
      <h2 className="mt-3 text-3xl font-bold text-teal">
        How is the {review.title.replace(/\s+Review$/, '')} different?
      </h2>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-text-primary">
        {getReviewDifferenceSummary(review)}
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <section>
          <h3 className="text-lg font-bold text-teal">Advantages</h3>
          <div className="mt-4">{renderList(review.pros)}</div>
        </section>

        {neutralFactors.length > 0 ? (
          <section>
            <h3 className="text-lg font-bold text-teal">Neutral Factors</h3>
            <div className="mt-4">{renderList(neutralFactors)}</div>
          </section>
        ) : null}

        <section>
          <h3 className="text-lg font-bold text-teal">Disadvantages</h3>
          <div className="mt-4">{renderList(review.cons)}</div>
        </section>
      </div>
    </section>
  );
}
