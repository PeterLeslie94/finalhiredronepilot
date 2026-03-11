import { BLOCKS, Document } from '@contentful/rich-text-types';

import { ContentfulRichText } from '@/components/blog/ContentfulRichText';
import InlineHelpTooltip from '@/components/reviews/InlineHelpTooltip';
import { ReviewScoreBreakdown, getScoreCategoryDefinition } from '@/data/drone-review-types';

interface ReviewTestSectionProps {
  score: ReviewScoreBreakdown;
}

function createFallbackDocument(text?: string): Document | null {
  if (!text) return null;

  return {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: [
      {
        nodeType: BLOCKS.PARAGRAPH,
        data: {},
        content: [
          {
            nodeType: 'text',
            value: text,
            marks: [],
            data: {},
          },
        ],
      },
    ],
  };
}

export default function ReviewTestSection({ score }: ReviewTestSectionProps) {
  const definition = getScoreCategoryDefinition(score.categoryId);
  const sectionTitle = score.sectionTitle ?? definition.label;
  const body = score.body ?? createFallbackDocument(score.summary);

  return (
    <section id={score.categoryId} className="pt-10 first:pt-0">
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

      {body ? (
        <div className="mt-6 max-w-none">
          <ContentfulRichText content={body} />
        </div>
      ) : null}
    </section>
  );
}
