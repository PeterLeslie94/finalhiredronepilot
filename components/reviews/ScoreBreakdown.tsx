import {
  getScoreCategoryDefinition,
  ReviewScoreBreakdown,
} from '@/data/drone-review-types';

interface ScoreBreakdownProps {
  scores: ReviewScoreBreakdown[];
}

export default function ScoreBreakdown({ scores }: ScoreBreakdownProps) {
  if (scores.length === 0) return null;

  return (
    <div className="space-y-4">
      {scores.map((score) => {
        const category = getScoreCategoryDefinition(score.categoryId);
        const width = `${Math.max(0, Math.min(score.score * 10, 100))}%`;

        return (
          <article key={score.categoryId} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="md:max-w-[72%]">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-teal">{category.label}</h3>
                  <span className="rounded-full bg-background-alt px-2 py-0.5 text-xs font-semibold text-text-secondary">
                    {category.weight}%
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{score.summary}</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-3xl font-bold text-teal">{score.score.toFixed(1)}</p>
                <p className="text-xs uppercase tracking-wide text-text-secondary">out of 10</p>
              </div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-background-alt">
              <div className="h-full rounded-full bg-gradient-to-r from-gold to-teal" style={{ width }} />
            </div>
          </article>
        );
      })}
    </div>
  );
}
