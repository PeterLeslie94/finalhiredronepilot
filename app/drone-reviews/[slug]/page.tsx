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
import MetricGrid from '@/components/reviews/MetricGrid';
import ScoreBreakdown from '@/components/reviews/ScoreBreakdown';
import SectionNav from '@/components/reviews/SectionNav';
import ReviewCard from '@/components/reviews/ReviewCard';
import ComparisonCard from '@/components/reviews/ComparisonCard';
import BestPageCard from '@/components/reviews/BestPageCard';
import {
  getAllDroneBestPages,
  getAllDroneComparisons,
  getAllDroneReviews,
  getDroneReviewBySlug,
  getRelatedDroneReviews,
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

const pageSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'score-breakdown', label: 'Score Breakdown' },
  { id: 'benchmark-summary', label: 'Benchmark Summary' },
  { id: 'spec-sheet', label: 'Spec Sheet' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'full-review', label: 'Full Review' },
  { id: 'faq', label: 'FAQ' },
];

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

      <section className="relative -mt-[120px] overflow-hidden bg-gradient-to-b from-teal via-teal-dark to-teal-darker pt-[120px] text-white">
        <div className="container py-14 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">{review.manufacturer}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            {review.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            {review.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/75">
            <span>Updated {formatDate(review.updatedDate ?? review.publishedDate)}</span>
            <span>•</span>
            <span>{review.testRun.firmware}</span>
            <span>•</span>
            <span>{review.priceLabel}</span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Buy If</p>
              <ul className="mt-4 space-y-3">
                {review.buyIf.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/80">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Avoid If</p>
              <ul className="mt-4 space-y-3">
                {review.avoidIf.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/80">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 lg:hidden">
            <SectionNav title="Quick Jumps" sections={pageSections} compact />
          </div>
        </div>
      </section>

      <section className="section bg-background-alt">
        <div className="container grid grid-cols-1 gap-10 lg:grid-cols-[220px_minmax(0,1fr)_300px]">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <SectionNav sections={pageSections} />
            </div>
          </aside>

          <main className="space-y-12">
            <section id="overview">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.1fr_0.9fr]">
                <article className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Verdict</p>
                  <p className="mt-4 text-lg leading-relaxed text-text-primary">{review.verdict}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {review.useCaseTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-background-alt px-3 py-1 text-xs font-semibold uppercase tracking-wide text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
                <article className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
                  <div className="relative h-full min-h-[260px]">
                    <Image
                      src={review.featuredImage}
                      alt={review.featuredImageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                  </div>
                </article>
              </div>
            </section>

            <section id="score-breakdown">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Score Breakdown</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">How the weighted score was built</h2>
              </div>
              <ScoreBreakdown scores={review.scoreBreakdown} />
            </section>

            <section id="benchmark-summary">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Benchmark Summary</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">The headline test results</h2>
              </div>
              <MetricGrid items={review.benchmarkSummary} />
            </section>

            <section id="spec-sheet">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Spec Sheet</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">Key buying context</h2>
              </div>
              <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
                <table className="min-w-full divide-y divide-gray-100">
                  <tbody>
                    {review.specs.map((spec) => (
                      <tr key={spec.label} className="border-b border-gray-100 last:border-0">
                        <th className="w-1/3 px-5 py-4 text-left text-sm font-semibold text-teal">{spec.label}</th>
                        <td className="px-5 py-4 text-sm text-text-secondary">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="gallery">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Gallery</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">Field imagery and test capture placeholders</h2>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {review.gallery.map((item) => (
                  <figure key={`${item.src}-${item.caption ?? item.alt}`} className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
                    <div className="relative aspect-[4/3]">
                      <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                    {item.caption ? (
                      <figcaption className="px-5 py-4 text-sm leading-relaxed text-text-secondary">
                        {item.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            </section>

            <section id="full-review">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Full Review</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">Extended notes from the field tests</h2>
              </div>
              <article className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <ContentfulRichText content={review.contentfulContent} keyTakeaways={review.keyTakeaways} />
              </article>
            </section>

            <section id="faq">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">FAQ</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">Common buyer questions</h2>
              </div>
              <div className="space-y-4">
                {review.faq.map((item) => (
                  <article key={item.question} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-teal">{item.question}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>

            {relatedComparisons.length > 0 ? (
              <section>
                <div className="mb-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Compare It</p>
                  <h2 className="mt-3 text-3xl font-bold text-teal">Head-to-head pages related to this review</h2>
                </div>
                <div className="space-y-6">
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
              <section>
                <div className="mb-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Best Pages</p>
                  <h2 className="mt-3 text-3xl font-bold text-teal">See where it ranks</h2>
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
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Related Reviews</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">Keep comparing</h2>
              </div>
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                {relatedReviews.map((entry) => (
                  <ReviewCard key={entry.slug} review={entry} />
                ))}
              </div>
            </section>
          </main>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <article className="rounded-3xl bg-teal p-6 text-white shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Overall Score</p>
                <p className="mt-3 text-6xl font-bold">{review.overallScore.toFixed(1)}</p>
                <p className="mt-1 text-sm text-white/75">weighted review result</p>
                <a
                  href={review.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gold px-4 py-3 text-sm font-semibold text-teal-dark transition-colors hover:bg-gold-light"
                >
                  Check Amazon Price
                </a>
                <p className="mt-4 text-xs leading-relaxed text-white/65">
                  Affiliate note: if you buy through partner links, HireDronePilot may earn a commission
                  at no extra cost to you.
                </p>
              </article>

              <article className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Test Conditions</p>
                <dl className="mt-4 space-y-3 text-sm">
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

              <article className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Quick Read</p>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="font-semibold text-teal">Best bits</p>
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
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
