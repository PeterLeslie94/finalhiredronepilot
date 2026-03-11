import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';

import { ContentfulRichText } from '@/components/blog/ContentfulRichText';
import { BreadcrumbSchema, FAQSchema } from '@/components/SchemaMarkup';
import MetricGrid from '@/components/reviews/MetricGrid';
import SectionNav from '@/components/reviews/SectionNav';
import ReviewCard from '@/components/reviews/ReviewCard';
import BestPageCard from '@/components/reviews/BestPageCard';
import {
  getAllDroneBestPages,
  getAllDroneComparisons,
  getAllDroneReviews,
  getDroneComparisonBySlug,
  getDroneComparisonCanonicalSlug,
  getDroneReviewBySlug,
} from '@/lib/contentful/reviews';
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

const sections = [
  { id: 'winner-summary', label: 'Winner Summary' },
  { id: 'category-results', label: 'Category Results' },
  { id: 'headline-metrics', label: 'Headline Metrics' },
  { id: 'full-analysis', label: 'Full Analysis' },
  { id: 'faq', label: 'FAQ' },
];

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

  const breadcrumbItems = [
    { name: 'Home', url: 'https://hiredronepilot.uk' },
    { name: 'Drone Comparisons', url: 'https://hiredronepilot.uk/drone-comparisons' },
    { name: comparison.title, url: `https://hiredronepilot.uk/drone-comparisons/${comparison.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={comparison.faq} />

      <section className="relative -mt-[120px] overflow-hidden bg-gradient-to-b from-teal via-teal-dark to-teal-darker pt-[120px] text-white">
        <div className="container py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Drone Comparison</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            {comparison.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            {comparison.excerpt}
          </p>
          <p className="mt-6 text-sm text-white/75">Updated {formatDate(comparison.updatedDate ?? comparison.publishedDate)}</p>
          <div className="mt-8 lg:hidden">
            <SectionNav title="Quick Jumps" sections={sections} compact />
          </div>
        </div>
      </section>

      <section className="section bg-background-alt">
        <div className="container grid grid-cols-1 gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <SectionNav sections={sections} />
            </div>
          </aside>

          <main className="space-y-12">
            <section id="winner-summary">
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_auto_1fr]">
                <article className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Left Drone</p>
                  <h2 className="mt-3 text-2xl font-bold text-teal">{leftReview.title.replace(' Review', '')}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{comparison.leftBuyIf}</p>
                  <Link href={`/drone-reviews/${leftReview.slug}`} className="mt-5 inline-flex text-sm font-semibold text-gold hover:text-gold-dark transition-colors">
                    Read full review
                  </Link>
                </article>
                <div className="flex items-center justify-center">
                  <span className="rounded-full bg-teal px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white">
                    VS
                  </span>
                </div>
                <article className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Right Drone</p>
                  <h2 className="mt-3 text-2xl font-bold text-teal">{rightReview.title.replace(' Review', '')}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{comparison.rightBuyIf}</p>
                  <Link href={`/drone-reviews/${rightReview.slug}`} className="mt-5 inline-flex text-sm font-semibold text-gold hover:text-gold-dark transition-colors">
                    Read full review
                  </Link>
                </article>
              </div>
              <article className="mt-6 rounded-3xl bg-teal p-6 text-white shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Winner Summary</p>
                <h2 className="mt-4 text-3xl font-bold">
                  {winner ? winner.title.replace(' Review', '') : 'No clear winner'}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80">{comparison.winnerSummary}</p>
                {comparison.priceNote ? (
                  <p className="mt-4 text-sm leading-relaxed text-white/70">{comparison.priceNote}</p>
                ) : null}
              </article>
            </section>

            <section id="category-results">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Category Results</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">Where each drone wins</h2>
              </div>
              <div className="space-y-4">
                {comparison.categoryResults.map((result) => (
                  <article key={result.label} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-teal">{result.label}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{result.summary}</p>
                      </div>
                      <span className="rounded-full bg-background-alt px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-text-secondary">
                        {result.winner === 'left'
                          ? leftReview.title.replace(' Review', '')
                          : result.winner === 'right'
                            ? rightReview.title.replace(' Review', '')
                            : 'Tie'}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="headline-metrics">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Headline Metrics</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">The most useful benchmark notes</h2>
              </div>
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-teal">{leftReview.title.replace(' Review', '')}</h3>
                  <MetricGrid items={leftReview.benchmarkSummary} />
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-bold text-teal">{rightReview.title.replace(' Review', '')}</h3>
                  <MetricGrid items={rightReview.benchmarkSummary} />
                </div>
              </div>
            </section>

            <section id="full-analysis">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Full Analysis</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">The nuance behind the winner</h2>
              </div>
              <article className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <ContentfulRichText content={comparison.contentfulContent} keyTakeaways={comparison.keyTakeaways} />
              </article>
            </section>

            <section id="faq">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">FAQ</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">Quick answers before you buy</h2>
              </div>
              <div className="space-y-4">
                {comparison.faq.map((item) => (
                  <article key={item.question} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-teal">{item.question}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>

            {relatedBestPages.length > 0 ? (
              <section>
                <div className="mb-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Related Best Pages</p>
                  <h2 className="mt-3 text-3xl font-bold text-teal">See the broader rankings</h2>
                </div>
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                  {relatedBestPages.map((page) => (
                    <BestPageCard key={page.slug} page={page} />
                  ))}
                </div>
              </section>
            ) : null}

            <section>
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Full Reviews</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">Read the source reviews</h2>
              </div>
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <ReviewCard review={leftReview} />
                <ReviewCard review={rightReview} />
              </div>
            </section>
          </main>
        </div>
      </section>
    </>
  );
}
