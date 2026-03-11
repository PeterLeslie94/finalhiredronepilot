import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ContentfulRichText } from '@/components/blog/ContentfulRichText';
import {
  BreadcrumbSchema,
  FAQSchema,
  ProductReviewSchema,
} from '@/components/SchemaMarkup';
import EditorialMetricTable from '@/components/reviews/EditorialMetricTable';
import BestPageCard from '@/components/reviews/BestPageCard';
import ComparisonCard from '@/components/reviews/ComparisonCard';
import ReviewCard from '@/components/reviews/ReviewCard';
import ReviewEditorialSummary from '@/components/reviews/ReviewEditorialSummary';
import ReviewTestSection from '@/components/reviews/ReviewTestSection';
import SectionNav from '@/components/reviews/SectionNav';
import { getScoreCategoryDefinition } from '@/data/drone-review-types';
import {
  getAllDroneBestPages,
  getAllDroneComparisons,
  getAllDroneReviews,
  getDroneReviewBySlug,
  getRelatedDroneReviews,
} from '@/lib/contentful/reviews';
import { getMetricHelpText, getReviewPerformanceTable } from '@/lib/reviews/editorial';
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
  const reviews = await getAllDroneReviews();
  return reviews.map((review) => ({ slug: review.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const review = await getDroneReviewBySlug(slug);

  if (!review) {
    return {
      title: 'Drone Review Not Found | HireDronePilot',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${review.title} | HireDronePilot`,
    description: review.summary,
    alternates: {
      canonical: canonicalUrl(`/drone-reviews/${review.slug}`),
    },
    openGraph: {
      title: review.title,
      description: review.summary,
      type: 'article',
      images: [
        {
          url: review.featuredImage,
          alt: review.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: review.title,
      description: review.summary,
      images: [review.featuredImage],
    },
  };
}

export default async function DroneReviewPage({ params }: Props) {
  const { slug } = await params;
  const review = await getDroneReviewBySlug(slug);

  if (!review) notFound();

  const [relatedReviews, allComparisons, allBestPages] = await Promise.all([
    getRelatedDroneReviews(review, 3),
    getAllDroneComparisons(),
    getAllDroneBestPages(),
  ]);

  const allReviews = [review, ...relatedReviews];
  const reviewMap = new Map(allReviews.map((entry) => [entry.slug, entry]));
  const performanceRows = getReviewPerformanceTable(review);

  const pageSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'performance-tests', label: 'Performance Tests' },
    { id: 'how-it-differs', label: "How It's Different" },
    { id: 'weighted-score', label: 'Weighted Score' },
    ...review.scoreBreakdown.map((score) => ({
      id: score.categoryId,
      label: getScoreCategoryDefinition(score.categoryId).label,
    })),
    { id: 'full-review', label: 'Full Review' },
    { id: 'faq', label: 'FAQ' },
  ];

  const relatedComparisons = (review.relatedComparisonSlugs ?? [])
    .map((comparisonSlug) => allComparisons.find((entry) => entry.slug === comparisonSlug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))
    .map((comparison) => {
      const leftReview = reviewMap.get(comparison.leftReviewSlug);
      const rightReview = reviewMap.get(comparison.rightReviewSlug);
      if (!leftReview || !rightReview) return null;
      return { comparison, leftReview, rightReview };
    })
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  const relatedBestPages = (review.relatedBestPageSlugs ?? [])
    .map((bestPageSlug) => allBestPages.find((entry) => entry.slug === bestPageSlug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  const breadcrumbItems = [
    { name: 'Home', url: 'https://hiredronepilot.uk' },
    { name: 'Drone Reviews', url: 'https://hiredronepilot.uk/drone-reviews' },
    { name: review.title, url: `https://hiredronepilot.uk/drone-reviews/${review.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ProductReviewSchema review={review} />
      <FAQSchema faqs={review.faq} />

      <section className="border-b border-border bg-white pt-[120px]">
        <div className="container py-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">{review.manufacturer} Review</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight text-teal md:text-6xl">
            {review.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary md:text-xl">
            {review.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm text-text-secondary">
            <span>Updated {formatDate(review.updatedDate ?? review.publishedDate)}</span>
            <span>Firmware: {review.testRun.firmware}</span>
            <span>{review.priceLabel}</span>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container grid grid-cols-1 gap-12 py-10 xl:grid-cols-[minmax(0,1fr)_290px]">
          <main className="min-w-0 space-y-12">
            <section id="overview" className="overflow-hidden rounded-[2rem] border border-border bg-white">
              <div className="grid gap-0 lg:grid-cols-[320px_minmax(0,1fr)]">
                <div className="relative aspect-square bg-background-alt">
                  <Image
                    src={review.featuredImage}
                    alt={review.featuredImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 320px"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Overall Verdict</p>
                      <p className="mt-4 text-lg leading-relaxed text-text-primary">{review.verdict}</p>
                    </div>
                    <div className="shrink-0 xl:text-right">
                      <p className="text-5xl font-bold text-teal">{review.overallScore.toFixed(1)}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-text-secondary">
                        overall score
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
                    <a
                      href={review.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-teal-dark transition-colors hover:bg-gold-light"
                    >
                      Check Amazon Price
                    </a>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      Affiliate note: if you buy through partner links, HireDronePilot may earn a commission at no
                      extra cost to you.
                    </p>
                  </div>

                  <dl className="mt-8 grid gap-4 text-sm md:grid-cols-3">
                    <div>
                      <dt className="font-semibold text-teal">Updated</dt>
                      <dd className="mt-1 text-text-secondary">{formatDate(review.updatedDate ?? review.publishedDate)}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-teal">Firmware Tested</dt>
                      <dd className="mt-1 text-text-secondary">{review.testRun.firmware}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-teal">Price Context</dt>
                      <dd className="mt-1 text-text-secondary">{review.priceLabel}</dd>
                    </div>
                  </dl>

                  <div className="mt-8 grid gap-8 border-t border-border pt-8 md:grid-cols-2">
                    <section>
                      <h2 className="text-lg font-bold text-teal">Best For</h2>
                      <ul className="mt-4 space-y-3">
                        {review.buyIf.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                            <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                    <section>
                      <h2 className="text-lg font-bold text-teal">Considerations</h2>
                      <ul className="mt-4 space-y-3">
                        {review.avoidIf.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                            <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </section>

            <div className="xl:hidden">
              <SectionNav sections={pageSections} />
            </div>

            <section id="performance-tests" className="border-t border-border pt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Performance Tests</p>
              <h2 className="mt-3 text-3xl font-bold text-teal">The headline results from field testing</h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary">
                These are the top-line results that shaped the review before the category-by-category scoring below.
              </p>
              <div className="mt-8">
                <EditorialMetricTable
                  columnHeaders={[review.title.replace(/\s+Review$/, ''), 'Field note']}
                  rows={performanceRows.map((item) => ({
                    id: item.metricId ?? item.label,
                    label: item.label,
                    helpText: getMetricHelpText(item),
                    values: [item.value, item.notes ?? '—'],
                  }))}
                />
              </div>
            </section>

            <ReviewEditorialSummary review={review} />

            <section id="weighted-score" className="border-t border-border pt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Score Breakdown</p>
              <h2 className="mt-3 text-3xl font-bold text-teal">How the weighted score was built</h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary">
                Each weighted section below explains what we tested, why it matters, and the evidence that fed the final score.
              </p>
            </section>

            {review.scoreBreakdown.map((score) => (
              <ReviewTestSection key={score.categoryId} review={review} score={score} />
            ))}

            <section id="full-review" className="border-t border-border pt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Full Review</p>
              <h2 className="mt-3 text-3xl font-bold text-teal">Extended notes from the field tests</h2>
              <div className="mt-8 max-w-3xl">
                <ContentfulRichText content={review.contentfulContent} keyTakeaways={review.keyTakeaways} />
              </div>

              {review.gallery.length > 0 ? (
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {review.gallery.map((item) => (
                    <figure key={`${item.src}-${item.caption ?? item.alt}`} className="space-y-3">
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
            </section>

            <section id="faq" className="border-t border-border pt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">FAQ</p>
              <h2 className="mt-3 text-3xl font-bold text-teal">Common buyer questions</h2>
              <div className="mt-8 divide-y divide-border rounded-[2rem] border border-border bg-white">
                {review.faq.map((item) => (
                  <article key={item.question} className="px-6 py-6">
                    <h3 className="text-lg font-bold text-teal">{item.question}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>

            {relatedComparisons.length > 0 ? (
              <section className="border-t border-border pt-12">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Compare It</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">Head-to-head pages related to this review</h2>
                <div className="mt-8 space-y-6">
                  {relatedComparisons.map(({ comparison, leftReview, rightReview }) => (
                    <ComparisonCard
                      key={comparison.slug}
                      comparison={comparison}
                      leftReview={leftReview}
                      rightReview={rightReview}
                    />
                  ))}
                </div>
              </section>
            ) : null}

            {relatedBestPages.length > 0 ? (
              <section className="border-t border-border pt-12">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Best Pages</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">See where it ranks</h2>
                <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
                  {relatedBestPages.map((page) => (
                    <BestPageCard key={page.slug} page={page} />
                  ))}
                </div>
              </section>
            ) : null}

            <section className="border-t border-border pt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Related Reviews</p>
              <h2 className="mt-3 text-3xl font-bold text-teal">Keep comparing</h2>
              <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
                {relatedReviews.map((entry) => (
                  <ReviewCard key={entry.slug} review={entry} />
                ))}
              </div>
            </section>
          </main>

          <aside className="hidden xl:block">
            <div className="sticky top-24 space-y-6">
              <SectionNav sections={pageSections} />

              <article className="rounded-[2rem] border border-border bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Review Snapshot</p>
                <p className="mt-4 text-5xl font-bold text-teal">{review.overallScore.toFixed(1)}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-text-secondary">
                  overall score
                </p>
                <a
                  href={review.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gold px-4 py-3 text-sm font-semibold text-teal-dark transition-colors hover:bg-gold-light"
                >
                  Check Amazon Price
                </a>
                <p className="mt-4 text-xs leading-relaxed text-text-secondary">
                  Affiliate note: partner links may earn HireDronePilot a commission at no extra cost to you.
                </p>
              </article>

              <article className="rounded-[2rem] border border-border bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Test Conditions</p>
                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-teal">Location</dt>
                    <dd className="mt-1 text-text-secondary">{review.testRun.location}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-teal">Date</dt>
                    <dd className="mt-1 text-text-secondary">{formatDate(review.testRun.testDate)}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-teal">Wind</dt>
                    <dd className="mt-1 text-text-secondary">{review.testRun.wind}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-teal">Temperature</dt>
                    <dd className="mt-1 text-text-secondary">{review.testRun.temperature}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-teal">Light</dt>
                    <dd className="mt-1 text-text-secondary">{review.testRun.light}</dd>
                  </div>
                </dl>
              </article>

              <article className="rounded-[2rem] border border-border bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Quick Read</p>
                <div className="mt-4 space-y-5">
                  <div>
                    <p className="font-semibold text-teal">Advantages</p>
                    <ul className="mt-2 space-y-2 text-sm text-text-secondary">
                      {review.pros.slice(0, 3).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-teal">Watch-outs</p>
                    <ul className="mt-2 space-y-2 text-sm text-text-secondary">
                      {review.cons.slice(0, 3).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>

              <article className="rounded-[2rem] border border-border bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Useful Links</p>
                <div className="mt-4 space-y-3 text-sm">
                  <Link href="/drone-reviews" className="block font-semibold text-teal transition-colors hover:text-gold">
                    Browse all drone reviews
                  </Link>
                  <Link href="/drone-comparisons" className="block font-semibold text-teal transition-colors hover:text-gold">
                    Browse drone comparisons
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
