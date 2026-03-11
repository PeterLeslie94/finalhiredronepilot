import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ContentfulRichText } from '@/components/blog/ContentfulRichText';
import {
  BreadcrumbSchema,
  FAQSchema,
  RankedItemListSchema,
} from '@/components/SchemaMarkup';
import RankedReviewCard from '@/components/reviews/RankedReviewCard';
import SectionNav from '@/components/reviews/SectionNav';
import {
  getAllDroneBestPages,
  getDroneBestPageBySlug,
  getRankedReviewsForBestPage,
} from '@/lib/contentful/reviews';
import { canonicalUrl } from '@/lib/seo/metadata';
import { getScoreCategoryDefinition } from '@/data/drone-review-types';

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
  { id: 'ranking', label: 'Ranking' },
  { id: 'methodology', label: 'Methodology' },
  { id: 'full-analysis', label: 'Full Analysis' },
  { id: 'faq', label: 'FAQ' },
];

export async function generateStaticParams() {
  const bestPages = await getAllDroneBestPages();
  return bestPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getDroneBestPageBySlug(slug);

  if (!page) {
    return {
      title: 'Best Drones Page Not Found | HireDronePilot',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${page.title} | HireDronePilot`,
    description: page.excerpt,
    alternates: {
      canonical: canonicalUrl(`/best-drones/${page.slug}`),
    },
  };
}

export default async function BestDronesDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = await getDroneBestPageBySlug(slug);
  if (!page) notFound();

  const rankedReviews = await getRankedReviewsForBestPage(page);
  const methodologyWeights = Object.entries({
    ...(page.ruleSet.scoreWeights ?? {}),
  })
    .map(([categoryId, weight]) => ({
      categoryId,
      weight,
      label: getScoreCategoryDefinition(categoryId as Parameters<typeof getScoreCategoryDefinition>[0]).label,
    }))
    .sort((left, right) => right.weight - left.weight);

  const breadcrumbItems = [
    { name: 'Home', url: 'https://hiredronepilot.uk' },
    { name: 'Best Drones', url: 'https://hiredronepilot.uk/best-drones' },
    { name: page.title, url: `https://hiredronepilot.uk/best-drones/${page.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={page.faq} />
      <RankedItemListSchema
        name={page.title}
        url={`https://hiredronepilot.uk/best-drones/${page.slug}`}
        items={rankedReviews.map((entry) => ({
          position: entry.position,
          name: entry.review.title.replace(' Review', ''),
          url: `https://hiredronepilot.uk/drone-reviews/${entry.review.slug}`,
          description: entry.review.summary,
        }))}
      />

      <section className="relative -mt-[120px] overflow-hidden bg-gradient-to-b from-teal via-teal-dark to-teal-darker pt-[120px] text-white">
        <div className="container py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Best Drones</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            {page.excerpt}
          </p>
          <p className="mt-6 text-sm text-white/75">Updated {formatDate(page.updatedDate ?? page.publishedDate)}</p>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Methodology Summary</p>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/80">{page.methodologySummary}</p>
          </div>
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
            <section id="ranking">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Ranking</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">The current order</h2>
              </div>
              <div className="space-y-6">
                {rankedReviews.map((entry) => (
                  <RankedReviewCard key={entry.review.slug} entry={entry} />
                ))}
              </div>
            </section>

            <section id="methodology">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Methodology</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">What this page rewards most</h2>
              </div>
              <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <p className="text-sm leading-relaxed text-text-secondary">{page.intro}</p>
                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {methodologyWeights.map((weight) => (
                    <article key={weight.categoryId} className="rounded-2xl bg-background-alt p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{weight.weight}% weight</p>
                      <h3 className="mt-2 text-base font-bold text-teal">{weight.label}</h3>
                    </article>
                  ))}
                </div>
                {(page.ruleSet.requiredUseCaseTags ?? []).length > 0 ? (
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Eligibility</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(page.ruleSet.requiredUseCaseTags ?? []).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-teal px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </section>

            <section id="full-analysis">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Full Analysis</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">The narrative behind the ranking</h2>
              </div>
              <article className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <ContentfulRichText content={page.contentfulContent} keyTakeaways={page.keyTakeaways} />
              </article>
            </section>

            <section id="faq">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">FAQ</p>
                <h2 className="mt-3 text-3xl font-bold text-teal">Ranking questions buyers actually ask</h2>
              </div>
              <div className="space-y-4">
                {page.faq.map((item) => (
                  <article key={item.question} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-teal">{item.question}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-border bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Explore More</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/drone-reviews" className="btn btn-outline-teal">
                  Browse all reviews
                </Link>
                <Link href="/drone-comparisons" className="btn btn-outline-teal">
                  Browse comparisons
                </Link>
              </div>
            </section>
          </main>
        </div>
      </section>
    </>
  );
}
