import { ContentfulRichText } from '@/components/blog/ContentfulRichText';
import InlineHelpTooltip from '@/components/reviews/InlineHelpTooltip';
import { DroneComparisonCategoryResult, DroneReview } from '@/data/drone-review-types';
import {
  getComparisonCategoryId,
  getComparisonMethodology,
  getMetricHelpText,
  getScoreSummaryTitle,
  getReviewDataPoints,
  getReviewScoreByCategory,
  ScoreCategoryStats,
} from '@/lib/reviews/editorial';

interface ComparisonTestSectionProps {
  result: DroneComparisonCategoryResult;
  leftReview: DroneReview;
  rightReview: DroneReview;
  scoreStats?: ScoreCategoryStats | null;
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
  scoreStats,
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

  const summaryRows = scoreStats
    ? [
        { label: 'Average Score', value: scoreStats.average.toFixed(1), tone: 'average' as const },
        { label: 'Best Score', value: scoreStats.best.toFixed(1), tone: 'best' as const },
        { label: 'Worst Score', value: scoreStats.worst.toFixed(1), tone: 'worst' as const },
      ]
    : [];

  return (
    <section
      id={categoryId ?? result.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
      className="pt-8"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex rounded-full border border-[#d9d9d9] bg-white px-3 py-1 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-text-secondary">
          Winner: {getWinnerLabel(result, leftReview, rightReview)}
        </span>
        <div className="flex items-center gap-2">
          <h3 className="text-[2rem] font-bold leading-tight text-text-primary">{methodology?.label ?? result.label}</h3>
          {methodology ? (
            <InlineHelpTooltip
              label={`More about ${methodology.label}`}
              text={methodology.dataSummaryHelpText}
              whatIsThis={methodology.whatIsThis}
              whyItMatters={methodology.whyItMatters}
              summaryTitle={getScoreSummaryTitle(methodology.label)}
              summaryRows={summaryRows}
            />
          ) : null}
        </div>
      </div>

      <p className="mt-5 text-[1.15rem] leading-8 text-text-primary">{result.summary}</p>

      {(leftScore || rightScore) ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="border border-[#d9d9d9] bg-white p-4">
            <p className="text-[0.85rem] font-semibold uppercase tracking-[0.18em] text-gold">
              {leftReview.title.replace(/\s+Review$/, '')}
            </p>
            <p className="mt-4 text-[2.4rem] font-bold leading-none text-text-primary">{leftScore?.score.toFixed(1) ?? '—'}</p>
            {leftScore ? (
              <p className="mt-3 text-[0.98rem] leading-6 text-text-secondary">{leftScore.summary}</p>
            ) : null}
          </div>
          <div className="border border-[#d9d9d9] bg-white p-4">
            <p className="text-[0.85rem] font-semibold uppercase tracking-[0.18em] text-gold">
              {rightReview.title.replace(/\s+Review$/, '')}
            </p>
            <p className="mt-4 text-[2.4rem] font-bold leading-none text-text-primary">{rightScore?.score.toFixed(1) ?? '—'}</p>
            {rightScore ? (
              <p className="mt-3 text-[0.98rem] leading-6 text-text-secondary">{rightScore.summary}</p>
            ) : null}
          </div>
        </div>
      ) : null}

      {comparisonRows.length > 0 ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {comparisonRows.map((row) => (
            <article key={row.id} className="border border-[#d9d9d9] bg-white p-4">
              <p className="text-[1.05rem] font-bold text-text-primary">{row.label}</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-text-secondary">
                    {leftReview.title.replace(/\s+Review$/, '')}
                  </p>
                  <p className="mt-2 text-[1.2rem] font-semibold text-gold">{row.values[0]}</p>
                </div>
                <div>
                  <p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-text-secondary">
                    {rightReview.title.replace(/\s+Review$/, '')}
                  </p>
                  <p className="mt-2 text-[1.2rem] font-semibold text-gold">{row.values[1]}</p>
                </div>
              </div>
              {row.note ? (
                <p className="mt-4 text-[0.95rem] leading-6 text-text-secondary">{row.note}</p>
              ) : null}
            </article>
          ))}
        </div>
      ) : null}

      {result.body ? (
        <div className="mt-8 max-w-none">
          <ContentfulRichText content={result.body} />
        </div>
      ) : null}
    </section>
  );
}
