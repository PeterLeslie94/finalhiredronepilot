import { ContentfulRichText } from '@/components/blog/ContentfulRichText';
import EditorialMetricTable from '@/components/reviews/EditorialMetricTable';
import InlineHelpTooltip from '@/components/reviews/InlineHelpTooltip';
import { DroneComparisonCategoryResult, DroneReview } from '@/data/drone-review-types';
import {
  getComparisonCategoryId,
  getComparisonMethodology,
  getMetricHelpText,
  getReviewDataPoints,
  getReviewScoreByCategory,
} from '@/lib/reviews/editorial';

interface ComparisonTestSectionProps {
  result: DroneComparisonCategoryResult;
  leftReview: DroneReview;
  rightReview: DroneReview;
}

function getWinnerLabel(result: DroneComparisonCategoryResult, leftReview: DroneReview, rightReview: DroneReview) {
  if (result.winner === 'left') return leftReview.title.replace(/\s+Review$/, '');
  if (result.winner === 'right') return rightReview.title.replace(/\s+Review$/, '');
  return 'Tie';
}

export default function ComparisonTestSection({
  result,
  leftReview,
  rightReview,
}: ComparisonTestSectionProps) {
  const categoryId = getComparisonCategoryId(result);
  const methodology = getComparisonMethodology(result);
  const leftScore = categoryId ? getReviewScoreByCategory(leftReview, categoryId) : undefined;
  const rightScore = categoryId ? getReviewScoreByCategory(rightReview, categoryId) : undefined;
  const leftData = leftScore ? getReviewDataPoints(leftReview, leftScore) : [];
  const rightData = rightScore ? getReviewDataPoints(rightReview, rightScore) : [];
  const rightByKey = new Map(
    rightData.map((item) => [item.metricId ?? item.label.toLowerCase(), item]),
  );
  const seen = new Set<string>();

  const comparisonRows = leftData.map((item) => {
    const key = item.metricId ?? item.label.toLowerCase();
    seen.add(key);
    const matchingRight = rightByKey.get(key);
    return {
      id: `${result.label}-${key}`,
      label: item.label,
      helpText: getMetricHelpText(item),
      values: [item.value, matchingRight?.value ?? '—'],
      note: item.notes ?? matchingRight?.notes,
    };
  });

  for (const item of rightData) {
    const key = item.metricId ?? item.label.toLowerCase();
    if (seen.has(key)) continue;
    comparisonRows.push({
      id: `${result.label}-${key}`,
      label: item.label,
      helpText: getMetricHelpText(item),
      values: ['—', item.value],
      note: item.notes,
    });
  }

  return (
    <section
      id={categoryId ?? result.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
      className="border-t border-border pt-12"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Category Result</p>
          <h3 className="mt-3 text-3xl font-bold text-teal">{methodology?.label ?? result.label}</h3>
          <p className="mt-5 text-lg leading-relaxed text-text-primary">{result.summary}</p>
        </div>
        <div className="shrink-0">
          <span className="inline-flex rounded-full bg-background-alt px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-text-secondary">
            Winner: {getWinnerLabel(result, leftReview, rightReview)}
          </span>
        </div>
      </div>

      {(leftScore || rightScore) ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              {leftReview.title.replace(/\s+Review$/, '')}
            </p>
            <p className="mt-3 text-4xl font-bold text-teal">{leftScore?.score.toFixed(1) ?? '—'}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-text-secondary">out of 10</p>
            {leftScore ? (
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">{leftScore.summary}</p>
            ) : null}
          </div>
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              {rightReview.title.replace(/\s+Review$/, '')}
            </p>
            <p className="mt-3 text-4xl font-bold text-teal">{rightScore?.score.toFixed(1) ?? '—'}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-text-secondary">out of 10</p>
            {rightScore ? (
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">{rightScore.summary}</p>
            ) : null}
          </div>
        </div>
      ) : null}

      {methodology ? (
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section>
            <div className="flex items-center gap-2">
              <h4 className="text-base font-bold text-teal">What is this?</h4>
              <InlineHelpTooltip label={`More about ${methodology.label}`} text={methodology.whatIsThis} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{methodology.whatIsThis}</p>
          </section>
          <section>
            <div className="flex items-center gap-2">
              <h4 className="text-base font-bold text-teal">Why does this matter?</h4>
              <InlineHelpTooltip
                label={`Why ${methodology.label} matters`}
                text={methodology.whyItMatters}
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{methodology.whyItMatters}</p>
          </section>
        </div>
      ) : null}

      {comparisonRows.length > 0 ? (
        <div className="mt-8">
          <div className="mb-4 flex items-center gap-2">
            <h4 className="text-base font-bold text-teal">Data Summary</h4>
            {methodology ? (
              <InlineHelpTooltip label={`How ${methodology.label} was tested`} text={methodology.dataSummaryHelpText} />
            ) : null}
          </div>
          <EditorialMetricTable
            columnHeaders={[
              leftReview.title.replace(/\s+Review$/, ''),
              rightReview.title.replace(/\s+Review$/, ''),
            ]}
            rows={comparisonRows}
          />
        </div>
      ) : null}

      {result.body ? (
        <div className="mt-8 max-w-3xl">
          <ContentfulRichText content={result.body} />
        </div>
      ) : null}
    </section>
  );
}
