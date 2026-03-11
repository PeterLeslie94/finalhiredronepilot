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
import ReviewEditorialSummary from '@/components/reviews/ReviewEditorialSummary';
import ReviewTestSection from '@/components/reviews/ReviewTestSection';
import {
  getAllDroneBestPages,
  getAllDroneComparisons,
  getAllDroneReviews,
  getDroneReviewBySlug,
  getRelatedDroneReviews,
} from '@/lib/contentful/reviews';
import {
  getReviewPerformanceTable,
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

function joinTags(tags: string[]) {
  return tags.join(' • ');
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

  const [allReviews, relatedReviews, allComparisons, allBestPages] = await Promise.all([
    getAllDroneReviews(),
    getRelatedDroneReviews(review, 3),
    getAllDroneComparisons(),
    getAllDroneBestPages(),
  ]);

  const reviewMap = new Map(allReviews.map((entry) => [entry.slug, entry]));
  const performanceRows = getReviewPerformanceTable(review);
  const scoreStatsByCategory = new Map(
    review.scoreBreakdown.map((score) => [
      score.categoryId,
      getScoreCategoryStats(allReviews, score.categoryId),
    ]),
  );

  const relatedComparisons = (review.relatedComparisonSlugs ?? [])
    .map((comparisonSlug) => allComparisons.find((entry) => entry.slug === comparisonSlug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))
    .map((comparison) => {
      const leftReview = reviewMap.get(comparison.leftReviewSlug);
      const rightReview = reviewMap.get(comparison.rightReviewSlug);
      if (!leftReview || !rightReview) return null;
      return {
        slug: comparison.slug,
        title: comparison.title,
        subtitle: `${titleWithoutSuffix(leftReview.title)} vs ${titleWithoutSuffix(rightReview.title)}`,
      };
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

      <section className="border-b border-[#d8d8d8] bg-[#efefef] pt-[88px]">
        <div className="container py-8">
          <div className="mx-auto max-w-[820px]">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-gold">
              {review.manufacturer} Review
            </p>
            <h1 className="mt-3 text-[3rem] font-bold leading-tight text-text-primary md:text-[3.6rem]">
              {review.title}
            </h1>
            <p className="mt-4 max-w-[680px] text-[1.05rem] leading-8 text-text-secondary">
              {review.summary}
            </p>
            <p className="mt-5 text-[0.95rem] text-text-secondary">
              Updated {formatDate(review.updatedDate ?? review.publishedDate)} • Firmware {review.testRun.firmware} •{' '}
              {review.priceLabel}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#efefef]">
        <div className="container py-8">
          <main className="mx-auto max-w-[820px] space-y-10">
            <section id="overview" className="border border-[#d8d8d8] bg-white">
              <div className="grid gap-0 md:grid-cols-[220px_minmax(0,1fr)]">
                <div className="relative aspect-square border-b border-[#d8d8d8] bg-white md:border-b-0 md:border-r">
                  <Image
                    src={review.featuredImage}
                    alt={review.featuredImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 220px"
                  />
                </div>

                <div className="p-5 md:p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-[430px]">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold">Overall Verdict</p>
                      <p className="mt-3 text-[1.05rem] leading-8 text-text-primary">{review.verdict}</p>
                    </div>
                    <div className="shrink-0 border border-[#d8d8d8] bg-[#fafafa] px-4 py-3 text-center">
                      <p className="text-[2.5rem] font-bold leading-none text-text-primary">{review.overallScore.toFixed(1)}</p>
                      <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-text-secondary">
                        overall score
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href={review.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-gold px-4 py-2 text-[0.9rem] font-semibold text-teal-dark transition-colors hover:bg-gold-light"
                    >
                      Check Amazon Price
                    </a>
                    <p className="text-[0.82rem] leading-6 text-text-secondary">
                      Affiliate note: partner links may earn HireDronePilot a commission at no extra cost to you.
                    </p>
                  </div>

                  <div className="mt-5 grid gap-4 border-t border-[#e4e4e4] pt-5 md:grid-cols-3">
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-secondary">Updated</p>
                      <p className="mt-1 text-[0.95rem] text-text-primary">{formatDate(review.updatedDate ?? review.publishedDate)}</p>
                    </div>
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-secondary">Firmware</p>
                      <p className="mt-1 text-[0.95rem] text-text-primary">{review.testRun.firmware}</p>
                    </div>
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-secondary">Best fit</p>
                      <p className="mt-1 text-[0.95rem] text-text-primary">{joinTags(review.useCaseTags)}</p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-5 border-t border-[#e4e4e4] pt-5 md:grid-cols-2">
                    <section>
                      <h2 className="text-[1.05rem] font-bold text-text-primary">Best For</h2>
                      <ul className="mt-3 space-y-2 text-[0.95rem] leading-6 text-text-secondary">
                        {review.buyIf.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>
                    <section>
                      <h2 className="text-[1.05rem] font-bold text-text-primary">Considerations</h2>
                      <ul className="mt-3 space-y-2 text-[0.95rem] leading-6 text-text-secondary">
                        {review.avoidIf.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </section>

            <section id="performance-tests">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold">Performance Tests</p>
              <h2 className="mt-2 text-[2rem] font-bold text-text-primary">The headline results from field testing</h2>
              <p className="mt-3 text-[1rem] leading-7 text-text-secondary">
                These are the top-line results that shaped the review before the category-by-category scoring below.
              </p>
              <div className="mt-5">
                <EditorialMetricTable
                  columnHeaders={[titleWithoutSuffix(review.title), 'Field note']}
                  rows={performanceRows.map((item) => ({
                    id: item.metricId ?? item.label,
                    label: item.label,
                    values: [item.value, item.notes ?? '—'],
                  }))}
                />
              </div>
            </section>

            <ReviewEditorialSummary review={review} />

            <section id="weighted-score">
              <h2 className="text-[2rem] font-bold text-text-primary">How the weighted score was built</h2>
            </section>

            {review.scoreBreakdown.map((score) => (
              <ReviewTestSection
                key={score.categoryId}
                review={review}
                score={score}
                scoreStats={scoreStatsByCategory.get(score.categoryId)}
              />
            ))}

            <section id="full-review" className="pt-4">
              <h2 className="text-[2rem] font-bold text-text-primary">Extended notes from the field tests</h2>
              <div className="mt-5">
                <ContentfulRichText content={review.contentfulContent} keyTakeaways={review.keyTakeaways} />
              </div>
            </section>

            <section id="faq" className="pt-4">
              <h2 className="text-[2rem] font-bold text-text-primary">Frequently Asked Questions</h2>
              <div className="mt-5 divide-y divide-[#d8d8d8] border border-[#d8d8d8] bg-white">
                {review.faq.map((item) => (
                  <article key={item.question} className="px-5 py-5">
                    <h3 className="text-[1.1rem] font-bold text-text-primary">{item.question}</h3>
                    <p className="mt-3 text-[1rem] leading-7 text-text-secondary">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>

            {(relatedReviews.length > 0 || relatedComparisons.length > 0 || relatedBestPages.length > 0) ? (
              <section className="pt-4">
                <h2 className="text-[2rem] font-bold text-text-primary">Other Drones to Consider</h2>
                <div className="mt-6 grid gap-8 md:grid-cols-3">
                  {relatedReviews.length > 0 ? (
                    <div>
                      <h3 className="text-[1.15rem] font-bold text-text-primary">Related Reviews</h3>
                      <ul className="mt-3 space-y-2 text-[1rem] leading-7 text-gold">
                        {relatedReviews.map((entry) => (
                          <li key={entry.slug}>
                            <Link href={`/drone-reviews/${entry.slug}`} className="transition-colors hover:text-gold-hover">
                              {titleWithoutSuffix(entry.title)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {relatedComparisons.length > 0 ? (
                    <div>
                      <h3 className="text-[1.15rem] font-bold text-text-primary">Comparisons</h3>
                      <ul className="mt-3 space-y-2 text-[1rem] leading-7 text-gold">
                        {relatedComparisons.map((entry) => (
                          <li key={entry.slug}>
                            <Link href={`/drone-comparisons/${entry.slug}`} className="transition-colors hover:text-gold-hover">
                              {entry.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {relatedBestPages.length > 0 ? (
                    <div>
                      <h3 className="text-[1.15rem] font-bold text-text-primary">Best Guides</h3>
                      <ul className="mt-3 space-y-2 text-[1rem] leading-7 text-gold">
                        {relatedBestPages.map((page) => (
                          <li key={page.slug}>
                            <Link href={`/best-drones/${page.slug}`} className="transition-colors hover:text-gold-hover">
                              {page.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </section>
            ) : null}
          </main>
        </div>
      </section>
    </>
  );
}
