import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ArticleHero from '@/components/blog/ArticleHero';
import ScrollProgressBar from '@/components/blog/ScrollProgressBar';
import {
  BreadcrumbSchema,
  FAQSchema,
  ProductReviewSchema,
} from '@/components/SchemaMarkup';
import ReviewAffiliateBox from '@/components/reviews/ReviewAffiliateBox';
import ReviewTestSection from '@/components/reviews/ReviewTestSection';
import {
  getAllDroneReviews,
  getDroneReviewBySlug,
} from '@/lib/contentful/reviews';
import { canonicalUrl } from '@/lib/seo/metadata';
import { BlogArticle, defaultAuthor } from '@/data/blog';
import { DroneReview, reviewScoreCategoryOrder } from '@/data/drone-review-types';

interface Props {
  params: Promise<{ slug: string }>;
}

function getReviewAuthor(review: DroneReview) {
  return {
    ...defaultAuthor,
    name: review.author?.name ?? defaultAuthor.name,
    role: review.author?.role ?? defaultAuthor.role,
    image: review.author?.image ?? defaultAuthor.image,
    bio: review.author?.bio ?? defaultAuthor.bio,
  };
}

function getReviewCategory(review: DroneReview) {
  return {
    slug: review.editorialCategory?.slug ?? 'drone-reviews',
    name: review.editorialCategory?.name ?? 'Drone Reviews',
    description: review.editorialCategory?.description,
  };
}

function buildHeroArticle(review: DroneReview): BlogArticle {
  return {
    slug: review.slug,
    title: review.title,
    excerpt: review.summary,
    featuredImage: review.featuredImage,
    featuredImageAlt: review.featuredImageAlt,
    category: getReviewCategory(review),
    author: getReviewAuthor(review),
    publishedDate: review.updatedDate ?? review.publishedDate,
    updatedDate: review.updatedDate,
    readingTime: review.readingTime ?? 8,
    tags: [],
    content: [],
  };
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
    title: review.seoTitle || `${review.title} | HireDronePilot`,
    description: review.seoDescription || review.summary,
    alternates: {
      canonical: canonicalUrl(`/drone-reviews/${review.slug}`),
    },
    openGraph: {
      title: review.seoTitle || review.title,
      description: review.seoDescription || review.summary,
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
      title: review.seoTitle || review.title,
      description: review.seoDescription || review.summary,
      images: [review.featuredImage],
    },
  };
}

export default async function DroneReviewPage({ params }: Props) {
  const { slug } = await params;
  const review = await getDroneReviewBySlug(slug);

  if (!review) notFound();

  const scoreByCategory = new Map(
    review.scoreBreakdown.map((score) => [score.categoryId, score]),
  );
  const orderedScores = reviewScoreCategoryOrder
    .map((categoryId) => scoreByCategory.get(categoryId))
    .filter((score): score is NonNullable<typeof score> => Boolean(score));

  const breadcrumbItems = [
    { name: 'Home', url: 'https://hiredronepilot.uk' },
    { name: 'Drone Reviews', url: 'https://hiredronepilot.uk/drone-reviews' },
    { name: review.title, url: `https://hiredronepilot.uk/drone-reviews/${review.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ProductReviewSchema review={review} />
      {review.faq.length > 0 ? <FAQSchema faqs={review.faq} /> : null}
      <ScrollProgressBar />

      <ArticleHero article={buildHeroArticle(review)} />

      <section className="bg-white py-12">
        <div className="relative mx-auto max-w-[1160px] px-4">
          <div className="mx-auto max-w-[650px]">
            <p className="text-lg leading-relaxed text-gray-700">
              {review.summary}
            </p>

            <ReviewAffiliateBox review={review} />

            <div className="space-y-4">
              {orderedScores.map((score) => (
                <ReviewTestSection
                  key={score.categoryId}
                  score={score}
                />
              ))}
            </div>

            {review.faq.length > 0 ? (
              <section id="faq" className="mt-14 border-t border-gray-200 pt-10">
                <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <div className="mt-6 space-y-6">
                  {review.faq.map((item) => (
                    <article key={item.question}>
                      <h3 className="text-xl font-semibold text-gray-900">{item.question}</h3>
                      <p className="mt-3 text-base leading-relaxed text-gray-700">{item.answer}</p>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
