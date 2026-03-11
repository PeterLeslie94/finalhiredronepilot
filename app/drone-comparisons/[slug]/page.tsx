import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';

import { ContentfulRichText } from '@/components/blog/ContentfulRichText';
import { BreadcrumbSchema, FAQSchema } from '@/components/SchemaMarkup';
import ComparisonTestSection from '@/components/reviews/ComparisonTestSection';
import EditorialMetricTable from '@/components/reviews/EditorialMetricTable';
import {
  getAllDroneBestPages,
  getAllDroneComparisons,
  getAllDroneReviews,
  getDroneComparisonBySlug,
  getDroneComparisonCanonicalSlug,
  getDroneReviewBySlug,
} from '@/lib/contentful/reviews';
import {
  getComparisonCategoryId,
  getComparisonPerformanceRows,
  getScoreCategoryStats,
} from '@/lib/reviews/editorial';
import { canonicalUrl } from '@/lib/seo/metadata';

interface Props {
  params: Promise<{ slug: string }>;
}

function formatDate(value: string): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function titleWithoutSuffix(title: string): string {
  return title.replace(/\s+Review$/, '');
}

export async function generateStaticParams() {
  const comparisons = await getAllDroneComparisons();
  return comparisons.map((comparison) => ({ slug: comparison.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = await getDroneComparisonCanonicalSlug(slug);

  if (!canonicalSlug) {
    return {
      title: 'Drone Comparison Not Found | HireDronePilot',
      robots: { index: false, follow: false },
    };
  }

  const comparison = await getDroneComparisonBySlug(canonicalSlug);
  if (!comparison) {
    return {
      title: 'Drone Comparison Not Found | HireDronePilot',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${comparison.title} | HireDronePilot`,
    description: comparison.excerpt,
    alternates: {
      canonical: canonicalUrl(`/drone-comparisons/${comparison.slug}`),
    },
  };
}

export default async function DroneComparisonPage({ params }: Props) {
  const { slug } = await params;
  const canonicalSlug = await getDroneComparisonCanonicalSlug(slug);
  if (!canonicalSlug) notFound();
  if (canonicalSlug !== slug) redirect(`/drone-comparisons/${canonicalSlug}`);

  const comparison = await getDroneComparisonBySlug(canonicalSlug);
  if (!comparison) notFound();

  const [leftReview, rightReview, allBestPages, allReviews] = await Promise.all([
    getDroneReviewBySlug(comparison.leftReviewSlug),
    getDroneReviewBySlug(comparison.rightReviewSlug),
    getAllDroneBestPages(),
    getAllDroneReviews(),
  ]);

  if (!leftReview || !rightReview) notFound();

  const winner =
    comparison.winnerReviewSlug === leftReview.slug
      ? leftReview
      : comparison.winnerReviewSlug === rightReview.slug
        ? rightReview
        : null;

  const performanceRows = getComparisonPerformanceRows(leftReview, rightReview);
  const scoreStatsByCategory = new Map(
    comparison.categoryResults.map((result) => {
      const categoryId = getComparisonCategoryId(result);
      return [
        result.label,
        categoryId ? getScoreCategoryStats(allReviews, categoryId) : null,
      ] as const;
    }),
  );

  const relatedBestPages = (comparison.relatedBestPageSlugs ?? [])
    .map((slugValue) => allBestPages.find((page) => page.slug === slugValue))
    .filter((page): page is NonNullable<typeof page> => Boolean(page));

  const breadcrumbItems = [
    { name: 'Home', url: 'https://hiredronepilot.uk' },
    { name: 'Drone Comparisons', url: 'https://hiredronepilot.uk/drone-comparisons' },
    { name: comparison.title, url: `https://hiredronepilot.uk/drone-comparisons/${comparison.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={comparison.faq} />

      <section className="border-b border-[#d8d8d8] bg-[#efefef] pt-[88px]">
        <div className="container py-8">
          <div className="mx-auto max-w-[820px]">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-gold">
              Drone Comparison
            </p>
            <h1 className="mt-3 text-[3rem] font-bold leading-tight text-text-primary md:text-[3.6rem]">
              {comparison.title}
            </h1>
            <p className="mt-4 max-w-[680px] text-[1.05rem] leading-8 text-text-secondary">
              {comparison.excerpt}
            </p>
            <p className="mt-5 text-[0.95rem] text-text-secondary">
              Updated {formatDate(comparison.updatedDate ?? comparison.publishedDate)}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#efefef]">
        <div className="container py-8">
          <main className="mx-auto max-w-[820px] space-y-10">
            <section id="winner-summary" className="border border-[#d8d8d8] bg-white">
              <div className="grid gap-0 md:grid-cols-[1fr_1.2fr_1fr]">
                <article className="border-b border-[#d8d8d8] p-5 md:border-b-0 md:border-r">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold">
                    Left Drone
                  </p>
                  <h2 className="mt-3 text-[1.45rem] font-bold leading-tight text-text-primary">
                    {titleWithoutSuffix(leftReview.title)}
                  </h2>
                  <p className="mt-3 text-[0.98rem] leading-7 text-text-secondary">
                    {comparison.leftBuyIf}
                  </p>
                  <p className="mt-4 text-[0.82rem] text-text-secondary">
                    Overall score {leftReview.overallScore.toFixed(1)}
                  </p>
                  <Link
                    href={`/drone-reviews/${leftReview.slug}`}
                    className="mt-4 inline-flex text-[0.92rem] font-semibold text-gold transition-colors hover:text-gold-hover"
                  >
                    Read full review
                  </Link>
                </article>

                <article className="border-b border-[#d8d8d8] bg-[#fafafa] p-5 md:border-b-0 md:border-r md:px-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold">
                    Winner Summary
                  </p>
                  <h2 className="mt-3 text-[1.7rem] font-bold leading-tight text-text-primary">
                    {winner ? titleWithoutSuffix(winner.title) : 'No clear winner'}
                  </h2>
                  <p className="mt-4 text-[1rem] leading-7 text-text-primary">{comparison.winnerSummary}</p>
                  {comparison.priceNote ? (
                    <p className="mt-4 text-[0.95rem] leading-7 text-text-secondary">
                      {comparison.priceNote}
                    </p>
                  ) : null}
                </article>

                <article className="p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold">
                    Right Drone
                  </p>
                  <h2 className="mt-3 text-[1.45rem] font-bold leading-tight text-text-primary">
                    {titleWithoutSuffix(rightReview.title)}
                  </h2>
                  <p className="mt-3 text-[0.98rem] leading-7 text-text-secondary">
                    {comparison.rightBuyIf}
                  </p>
                  <p className="mt-4 text-[0.82rem] text-text-secondary">
                    Overall score {rightReview.overallScore.toFixed(1)}
                  </p>
                  <Link
                    href={`/drone-reviews/${rightReview.slug}`}
                    className="mt-4 inline-flex text-[0.92rem] font-semibold text-gold transition-colors hover:text-gold-hover"
                  >
                    Read full review
                  </Link>
                </article>
              </div>
            </section>

            <section id="performance-table">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold">
                Performance Table
              </p>
              <h2 className="mt-2 text-[2rem] font-bold text-text-primary">
                How the two drones compare at a glance
              </h2>
              <p className="mt-3 text-[1rem] leading-7 text-text-secondary">
                These are the headline test notes and benchmark rows that shaped the recommendation
                before the deeper category sections below.
              </p>
              <div className="mt-5">
                <EditorialMetricTable
                  columnHeaders={[
                    titleWithoutSuffix(leftReview.title),
                    titleWithoutSuffix(rightReview.title),
                  ]}
                  rows={performanceRows.map((row) => ({
                    id: row.id,
                    label: row.label,
                    helpText: row.helpText,
                    values: [row.leftValue, row.rightValue],
                    note: row.notes,
                  }))}
                />
              </div>
            </section>

            <section id="buying-advice">
              <h2 className="text-[2rem] font-bold text-text-primary">Who should buy which</h2>
              <p className="mt-4 text-[1.08rem] leading-8 text-text-primary">
                {comparison.winnerSummary}
              </p>
              <div className="mt-6 space-y-6 border-t border-[#d8d8d8] pt-6">
                <article>
                  <h3 className="text-[1.2rem] font-bold text-text-primary">
                    {titleWithoutSuffix(leftReview.title)}
                  </h3>
                  <p className="mt-2 text-[1rem] leading-7 text-text-secondary">
                    {comparison.leftBuyIf}
                  </p>
                </article>

                <article>
                  <h3 className="text-[1.2rem] font-bold text-text-primary">
                    {titleWithoutSuffix(rightReview.title)}
                  </h3>
                  <p className="mt-2 text-[1rem] leading-7 text-text-secondary">
                    {comparison.rightBuyIf}
                  </p>
                </article>
              </div>
            </section>

            {comparison.categoryResults.map((result) => (
              <ComparisonTestSection
                key={`${comparison.slug}-${result.label}`}
                result={result}
                leftReview={leftReview}
                rightReview={rightReview}
                scoreStats={scoreStatsByCategory.get(result.label)}
              />
            ))}

            <section id="full-analysis" className="pt-4">
              <h2 className="text-[2rem] font-bold text-text-primary">Extended comparison notes</h2>
              <div className="mt-5">
                <ContentfulRichText content={comparison.contentfulContent} keyTakeaways={comparison.keyTakeaways} />
              </div>
            </section>

            <section id="faq" className="pt-4">
              <h2 className="text-[2rem] font-bold text-text-primary">Frequently Asked Questions</h2>
              <div className="mt-5 divide-y divide-[#d8d8d8] border border-[#d8d8d8] bg-white">
                {comparison.faq.map((item) => (
                  <article key={item.question} className="px-5 py-5">
                    <h3 className="text-[1.1rem] font-bold text-text-primary">{item.question}</h3>
                    <p className="mt-3 text-[1rem] leading-7 text-text-secondary">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="pt-4">
              <h2 className="text-[2rem] font-bold text-text-primary">Keep Reading</h2>
              <div className="mt-6 grid gap-8 md:grid-cols-3">
                <div>
                  <h3 className="text-[1.15rem] font-bold text-text-primary">Full Reviews</h3>
                  <ul className="mt-3 space-y-2 text-[1rem] leading-7 text-gold">
                    <li>
                      <Link
                        href={`/drone-reviews/${leftReview.slug}`}
                        className="transition-colors hover:text-gold-hover"
                      >
                        {titleWithoutSuffix(leftReview.title)}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/drone-reviews/${rightReview.slug}`}
                        className="transition-colors hover:text-gold-hover"
                      >
                        {titleWithoutSuffix(rightReview.title)}
                      </Link>
                    </li>
                  </ul>
                </div>

                {relatedBestPages.length > 0 ? (
                  <div className="md:col-span-2">
                    <h3 className="text-[1.15rem] font-bold text-text-primary">Best Guides</h3>
                    <div className="mt-3 grid gap-x-10 gap-y-2 md:grid-cols-2">
                      {relatedBestPages.map((page) => (
                        <Link
                          key={page.slug}
                          href={`/best-drones/${page.slug}`}
                          className="text-[1rem] leading-7 text-gold transition-colors hover:text-gold-hover"
                        >
                          {page.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </section>
          </main>
        </div>
      </section>
    </>
  );
}
