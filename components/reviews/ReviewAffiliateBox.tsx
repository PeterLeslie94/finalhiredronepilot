import Image from 'next/image';

import {
  DroneReview,
  getScoreCategoryDefinition,
  reviewScoreCategoryOrder,
} from '@/data/drone-review-types';

interface ReviewAffiliateBoxProps {
  review: DroneReview;
}

export default function ReviewAffiliateBox({ review }: ReviewAffiliateBoxProps) {
  const scoresByCategory = new Map(
    review.scoreBreakdown.map((score) => [score.categoryId, score]),
  );

  return (
    <section className="my-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="grid gap-0 md:grid-cols-[220px_minmax(0,1fr)]">
        <div className="relative aspect-square border-b border-gray-200 bg-gray-50 md:border-b-0 md:border-r">
          <Image
            src={review.featuredImage}
            alt={review.featuredImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 220px"
          />
        </div>

        <div className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Overall Score
              </p>
              <p className="mt-2 text-4xl font-bold text-gray-900">
                {review.overallScore.toFixed(1)}
              </p>
            </div>
            <a
              href={review.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-teal-dark transition-colors hover:bg-gold-light"
            >
              Check Amazon Price
            </a>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {reviewScoreCategoryOrder.map((categoryId) => {
              const score = scoresByCategory.get(categoryId);
              if (!score) return null;

              return (
                <div
                  key={categoryId}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-3 py-3"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-base font-bold text-gray-900 shadow-sm">
                    {score.score.toFixed(1)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-snug text-gray-900">
                      {getScoreCategoryDefinition(categoryId).label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Best For</h2>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                {review.buyIf.length > 0 ? (
                  review.buyIf.map((item) => <li key={item}>• {item}</li>)
                ) : (
                  <li>• Buyers who want a stronger all-round recommendation.</li>
                )}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900">Considerations</h2>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                {review.avoidIf.length > 0 ? (
                  review.avoidIf.map((item) => <li key={item}>• {item}</li>)
                ) : (
                  <li>• Check the full section scores if you care about a specific tradeoff.</li>
                )}
              </ul>
            </div>
          </div>

          <p className="mt-6 text-xs leading-5 text-gray-500">
            Affiliate disclosure: if you buy through this link, HireDronePilot may earn a commission
            at no extra cost to you.
          </p>
        </div>
      </div>
    </section>
  );
}
