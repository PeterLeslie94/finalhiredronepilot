import Image from 'next/image';

import { ContentfulRichText } from '@/components/blog/ContentfulRichText';
import InlineHelpTooltip from '@/components/reviews/InlineHelpTooltip';
import { DroneReview, ReviewScoreBreakdown, getScoreCategoryDefinition } from '@/data/drone-review-types';
import { getReviewDataPoints, getScoreSummaryTitle, ScoreCategoryStats } from '@/lib/reviews/editorial';

interface ReviewTestSectionProps {
  review: DroneReview;
  score: ReviewScoreBreakdown;
  scoreStats?: ScoreCategoryStats | null;
}

function getFallbackMedia(review: DroneReview, score: ReviewScoreBreakdown) {
  if (score.media && score.media.length > 0) return score.media;
  if (score.categoryId === 'camera-image-quality') return review.gallery.slice(0, 2);
  return [];
}

export default function ReviewTestSection({ review, score, scoreStats }: ReviewTestSectionProps) {
  const definition = getScoreCategoryDefinition(score.categoryId);
  const dataPoints = getReviewDataPoints(review, score);
  const sectionTitle = score.sectionTitle ?? definition.label;
  const mediaItems = getFallbackMedia(review, score);

  const summaryRows = scoreStats
    ? [
        { label: 'Average Score', value: scoreStats.average.toFixed(1), tone: 'average' as const },
        { label: 'Best Score', value: scoreStats.best.toFixed(1), tone: 'best' as const },
        { label: 'Worst Score', value: scoreStats.worst.toFixed(1), tone: 'worst' as const },
      ]
    : [];

  return (
    <section id={score.categoryId} className="pt-8">
      <div className="flex items-center gap-3">
        <div className="inline-flex min-w-14 items-center justify-center border-2 border-lime-500 bg-white px-3 py-1 text-[1.8rem] font-bold leading-none text-lime-600">
          {score.score.toFixed(1)}
        </div>
        <div className="flex items-center gap-2">
          <h3 className="text-[2rem] font-bold leading-tight text-text-primary">{sectionTitle}</h3>
          <InlineHelpTooltip
            label={`More about ${sectionTitle}`}
            text={definition.description}
            whatIsThis={definition.whatIsThis}
            whyItMatters={definition.whyItMatters}
            summaryTitle={score.dataSummaryTitle ?? getScoreSummaryTitle(sectionTitle)}
            summaryRows={summaryRows}
            explanationLink={
              score.explanationLinkUrl && score.explanationLinkLabel
                ? {
                    href: score.explanationLinkUrl,
                    label: score.explanationLinkLabel,
                  }
                : undefined
            }
          />
        </div>
      </div>

      <p className="mt-5 text-[1.15rem] leading-8 text-text-primary">{score.summary}</p>

      {dataPoints.length > 0 ? (
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {dataPoints.map((item) => (
            <article key={`${score.categoryId}-${item.metricId ?? item.label}`} className="border border-[#d9d9d9] bg-white p-4 text-center">
              <p className="text-[1.35rem] font-bold text-text-primary">{item.label}</p>
              <p className="mt-5 text-[2.1rem] font-semibold leading-none text-gold">{item.value}</p>
              {item.notes ? (
                <p className="mt-4 text-[0.95rem] leading-6 text-text-secondary">{item.notes}</p>
              ) : null}
            </article>
          ))}
        </div>
      ) : null}

      {mediaItems.length > 0 ? (
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {mediaItems.map((item) => (
            <figure key={`${score.categoryId}-${item.src}-${item.caption ?? item.alt}`} className="border border-[#d9d9d9] bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-background-alt">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {(item.caption || item.alt) ? (
                <figcaption className="px-4 py-3 text-center text-[1rem] leading-6 text-text-secondary">
                  {item.caption ?? item.alt}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      ) : null}

      {score.body ? (
        <div className="mt-8 max-w-none">
          <ContentfulRichText content={score.body} />
        </div>
      ) : null}
    </section>
  );
}
