import Image from 'next/image';

import { ContentfulRichText } from '@/components/blog/ContentfulRichText';
import EditorialMetricTable from '@/components/reviews/EditorialMetricTable';
import InlineHelpTooltip from '@/components/reviews/InlineHelpTooltip';
import { DroneReview, ReviewScoreBreakdown, getScoreCategoryDefinition } from '@/data/drone-review-types';
import { getMetricHelpText, getReviewDataPoints } from '@/lib/reviews/editorial';

interface ReviewTestSectionProps {
  review: DroneReview;
  score: ReviewScoreBreakdown;
}

export default function ReviewTestSection({ review, score }: ReviewTestSectionProps) {
  const definition = getScoreCategoryDefinition(score.categoryId);
  const dataPoints = getReviewDataPoints(review, score);
  const sectionTitle = score.sectionTitle ?? definition.label;

  return (
    <section id={score.categoryId} className="border-t border-border pt-12">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            {definition.weight}% weighted score
          </p>
          <h3 className="mt-3 text-3xl font-bold text-teal">{sectionTitle}</h3>
          <p className="mt-5 text-lg leading-relaxed text-text-primary">{score.summary}</p>
        </div>
        <div className="shrink-0 lg:text-right">
          <p className="text-5xl font-bold text-teal">{score.score.toFixed(1)}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-text-secondary">
            out of 10
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <section>
          <div className="flex items-center gap-2">
            <h4 className="text-base font-bold text-teal">What is this?</h4>
            <InlineHelpTooltip label={`More about ${sectionTitle}`} text={definition.description} />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">{definition.whatIsThis}</p>
        </section>
        <section>
          <div className="flex items-center gap-2">
            <h4 className="text-base font-bold text-teal">Why does this matter?</h4>
            <InlineHelpTooltip
              label={`Why ${sectionTitle} matters`}
              text="This explains why the category changes the buyer experience, not just how it was measured."
            />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">{definition.whyItMatters}</p>
        </section>
      </div>

      {dataPoints.length > 0 ? (
        <div className="mt-8">
          <div className="mb-4 flex items-center gap-2">
            <h4 className="text-base font-bold text-teal">{score.dataSummaryTitle ?? 'Data Summary'}</h4>
            <InlineHelpTooltip
              label={`How ${sectionTitle} was tested`}
              text={definition.testSummary}
            />
          </div>
          <EditorialMetricTable
            columnHeaders={[review.title.replace(/\s+Review$/, '')]}
            rows={dataPoints.map((item) => ({
              id: `${score.categoryId}-${item.metricId ?? item.label}`,
              label: item.label,
              helpText: getMetricHelpText(item),
              values: [item.value],
              note: item.notes,
            }))}
          />
        </div>
      ) : null}

      {score.body ? (
        <div className="mt-8 max-w-3xl">
          <ContentfulRichText content={score.body} />
        </div>
      ) : null}

      {score.media && score.media.length > 0 ? (
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {score.media.map((item) => (
            <figure key={`${score.categoryId}-${item.src}-${item.caption ?? item.alt}`} className="space-y-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-background-alt">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {item.caption ? (
                <figcaption className="text-sm leading-relaxed text-text-secondary">{item.caption}</figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      ) : null}

      {score.explanationLinkUrl && score.explanationLinkLabel ? (
        <a
          href={score.explanationLinkUrl}
          className="mt-6 inline-flex text-sm font-semibold text-gold transition-colors hover:text-gold-hover"
        >
          {score.explanationLinkLabel}
        </a>
      ) : null}
    </section>
  );
}
