import { DroneReview } from '@/data/drone-review-types';

import { getReviewDifferenceSummary } from '@/lib/reviews/editorial';

interface ReviewEditorialSummaryProps {
  review: DroneReview;
}

function joinStatements(items: string[]) {
  return items
    .map((item) => item.trim().replace(/\.$/, ''))
    .filter(Boolean)
    .join('. ') + (items.length > 0 ? '.' : '');
}

export default function ReviewEditorialSummary({ review }: ReviewEditorialSummaryProps) {
  const neutralFactors = review.neutralFactors ?? [];

  return (
    <section id="how-it-differs" className="pt-8">
      <h2 className="text-[2rem] font-bold text-teal">
        How is the {review.title.replace(/\s+Review$/, '')} different?
      </h2>
      <p className="mt-4 text-[1.1rem] leading-8 text-text-primary">
        {getReviewDifferenceSummary(review)}
      </p>

      <div className="mt-8 space-y-7">
        <section>
          <h3 className="text-[1.4rem] font-bold text-teal">Advantages</h3>
          <p className="mt-3 text-[1.05rem] leading-8 text-text-secondary">{joinStatements(review.pros)}</p>
        </section>

        {neutralFactors.length > 0 ? (
          <section>
            <h3 className="text-[1.4rem] font-bold text-teal">Neutral Factors</h3>
            <p className="mt-3 text-[1.05rem] leading-8 text-text-secondary">{joinStatements(neutralFactors)}</p>
          </section>
        ) : null}

        <section>
          <h3 className="text-[1.4rem] font-bold text-teal">Disadvantages</h3>
          <p className="mt-3 text-[1.05rem] leading-8 text-text-secondary">{joinStatements(review.cons)}</p>
        </section>
      </div>
    </section>
  );
}
