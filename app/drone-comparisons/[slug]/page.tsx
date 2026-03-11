import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';

import { ContentfulRichText } from '@/components/blog/ContentfulRichText';
import { BreadcrumbSchema, FAQSchema } from '@/components/SchemaMarkup';
import ComparisonTestSection from '@/components/reviews/ComparisonTestSection';
import EditorialMetricTable from '@/components/reviews/EditorialMetricTable';
import BestPageCard from '@/components/reviews/BestPageCard';
import ReviewCard from '@/components/reviews/ReviewCard';
import SectionNav from '@/components/reviews/SectionNav';
import {
  getAllDroneBestPages,
  getAllDroneComparisons,
  getDroneComparisonBySlug,
  getDroneComparisonCanonicalSlug,
  getDroneReviewBySlug,
} from '@/lib/contentful/reviews';
import { getComparisonPerformanceRows } from '@/lib/reviews/editorial';
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

  const [leftReview, rightReview, allBestPages] = await Promise.all([
    getDroneReviewBySlug(comparison.leftReviewSlug),
    getDroneReviewBySlug(comparison.rightReviewSlug),
    getAllDroneBestPages(),
  ]);

  if (!leftReview || !rightReview) notFound();

  const winner =
    comparison.winnerReviewSlug === leftReview.slug
      ? leftReview
      : comparison.winnerReviewSlug === rightReview.slug
        ? rightReview
        : null;

  const relatedBestPages = (comparison.relatedBestPageSlugs ?? [])
    .map((slugValue) => allBestPages.find((page) => page.slug === slugValue))
    .filter((page): page is NonNullable<typeof page> => Boolean(page));

  const pageSections = [
    { id: 'winner-summary', label: 'Winner Summary' },
    { id: 'compare-table', label: 'Performance Table' },
    { id: 'buying-advice', label: 'Who Should Buy Which' },
    ...comparison.categoryResults.map((result, index) => ({
      id: result.categoryId || result.label.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `result-${index}`,
      label: result.label,
    })),
    { id: 'full-analysis', label: 'Full Analysis' },
    { id: 'faq', label: 'FAQ' },
  ];

  const performanceRows = getComparisonPerformanceRows(leftReview, rightReview);

  const breadcrumbItems = [
    { name: 'Home', url: 'https://hiredronepilot.uk' },
    { name: 'Drone Comparisons', url: 'https://hiredronepilot.uk/drone-comparisons' },
    { name: comparison.title, url: `https://hiredronepilot.uk/drone-comparisons/${comparison.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={comparison.faq} />

      <section className="border-b border-border bg-white pt-[120px]">
        <div className="container py-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Drone Comparison</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight text-teal md:text-6xl">
            {comparison.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary md:text-xl">
            {comparison.excerpt}
          </p>
          <p className="mt-8 text-sm text-text-secondary">
            Updated {formatDate(comparison.updatedDate ?? comparison.publishedDate)}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container grid grid-cols-1 gap-12 py-10 xl:grid-cols-[minmax(0,1fr)_290px]">
          <main className="min-w-0 space-y-12">
            <section id="winner-summary" className="rounded-[2rem] border border-border bg-white p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr_1fr]">
                <article>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Left Drone</p>
                  <h2 className="mt-3 text-2xl font-bold text-teal">{leftReview.title.replace(/\s+Review$/, '')}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">{comparison.leftBuyIf}</p>
                  <Link
                    href={`/drone-reviews/${leftReview.slug}`}
                    className="mt-5 inline-flex text-sm font-semibold text-gold transition-colors hover:text-gold-hover"
                  >
                    Read full review
                  </Link>
                </article>

                <article className="border-y border-border py-6 lg:border-x lg:border-y-0 lg:px-8 lg:py-0">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Winner Summary</p>
                  <h2 className="mt-3 text-3xl font-bold text-teal">
                    {winner ? winner.title.replace(/\s+Review$/, '') : 'No clear winner'}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-text-primary">{comparison.winnerSummary}</p>
                  {comparison.priceNote ? (
                    <p className="mt-4 text-sm leading-relaxed text-text-secondary">{comparison.priceNote}</p>
                  ) : null}
                </article>

                <article>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Right Drone</p>
                  <h2 className="mt-3 text-2xl font-bold text-teal">{rightReview.title.replace(/\s+Review$/, '')}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">{comparison.rightBuyIf}</p>
                  <Link
                    href={`/drone-reviews/${rightReview.slug}`}
                    className="mt-5 inline-flex text-sm font-semibold text-gold transition-colors hover:text-gold-hover"
                  >
                    Read full review
                  </Link>
                </article>
              </div>
            </section>

            <div className="xl:hidden">
              <SectionNav sections={pageSections} />
            </div>

            <section id="compare-table" className="border-t border-border pt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Performance Table</p>
              <h2 className="mt-3 text-3xl font-bold text-teal">How the two drones compare at a glance</h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary">
                These are the headline measurements and field notes that shaped the recommendation before the deeper category breakdown.
              </p>
              <div className="mt-8">
                <EditorialMetricTable
                  columnHeaders={[
                    leftReview.title.replace(/\s+Review$/, ''),
                    rightReview.title.replace(/\s+Review$/, ''),
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

            <section id="buying-advice" className="border-t border-border pt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Buying Advice</p>
              <h2 className="mt-3 text-3xl font-bold text-teal">Who should buy which</h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-text-primary">{comparison.winnerSummary}</p>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <article>
                  <h3 className="text-lg font-bold text-teal">{leftReview.title.replace(/\s+Review$/, '')}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{comparison.leftBuyIf}</p>
                </article>
                <article>
                  <h3 className="text-lg font-bold text-teal">{rightReview.title.replace(/\s+Review$/, '')}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{comparison.rightBuyIf}</p>
                </article>
              </div>
            </section>

            {comparison.categoryResults.map((result) => (
              <ComparisonTestSection
                key={`${comparison.slug}-${result.label}`}
                result={result}
                leftReview={leftReview}
                rightReview={rightReview}
              />
            ))}

            <section id="full-analysis" className="border-t border-border pt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Full Analysis</p>
              <h2 className="mt-3 text-3xl font-bold text-teal">The nuance behind the winner</h2>
              <div className="mt-8 max-w-3xl">
                <ContentfulRichText content={comparison.contentfulContent} keyTakeaways={comparison.keyTakeaways} />
              </div>
            </section>

            <section id="faq" className="border-t border-border pt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">FAQ</p>
              <h2 className="mt-3 text-3xl font-bold text-teal">Quick answers before you buy</h2>
              <div className="mt-8 divide-y divide-border rounded-[2rem] border border-border bg-white">
                {comparison.faq.map((item) => (
                  <article key={item.question} className="px-6 py-6">
                    <h3 className="text-lg font-bold text-teal">{item.question}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>

            {relatedBestPages.length > 0 ? (
              <section className="border-t border-border pt-12">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Related Best Pages</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">See the broader rankings</h2>
                <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
                  {relatedBestPages.map((page) => (
                    <BestPageCard key={page.slug} page={page} />
                  ))}
                </div>
              </section>
            ) : null}

            <section className="border-t border-border pt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Full Reviews</p>
              <h2 className="mt-3 text-3xl font-bold text-teal">Read the source reviews</h2>
              <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
                <ReviewCard review={leftReview} />
                <ReviewCard review={rightReview} />
              </div>
            </section>
          </main>

          <aside className="hidden xl:block">
            <div className="sticky top-24 space-y-6">
              <SectionNav sections={pageSections} />

              <article className="rounded-[2rem] border border-border bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Winner Snapshot</p>
                <h2 className="mt-4 text-2xl font-bold text-teal">
                  {winner ? winner.title.replace(/\s+Review$/, '') : 'Tie'}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{comparison.winnerSummary}</p>
              </article>

              <article className="rounded-[2rem] border border-border bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Quick Links</p>
                <div className="mt-4 space-y-3 text-sm">
                  <Link
                    href={`/drone-reviews/${leftReview.slug}`}
                    className="block font-semibold text-teal transition-colors hover:text-gold"
                  >
                    {leftReview.title}
                  </Link>
                  <Link
                    href={`/drone-reviews/${rightReview.slug}`}
                    className="block font-semibold text-teal transition-colors hover:text-gold"
                  >
                    {rightReview.title}
                  </Link>
                  <Link href="/best-drones" className="block font-semibold text-teal transition-colors hover:text-gold">
                    Browse best drone guides
                  </Link>
                </div>
              </article>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
