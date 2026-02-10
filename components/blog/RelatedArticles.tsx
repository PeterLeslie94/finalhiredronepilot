'use client';

import Link from 'next/link';
import { BlogArticle } from '@/data/blog';
import ArticleCard from './ArticleCard';

interface RelatedArticlesProps {
  articles: BlogArticle[];
  currentSlug: string;
}

export default function RelatedArticles({ articles, currentSlug }: RelatedArticlesProps) {
  // Filter out current article and limit to 3
  const relatedArticles = articles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, 3);

  if (relatedArticles.length === 0) {
    return null;
  }

  // Adaptive grid based on article count
  const gridCols =
    relatedArticles.length === 1
      ? 'grid-cols-1 max-w-md mx-auto'
      : relatedArticles.length === 2
      ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto'
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="section bg-background-alt">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold font-semibold uppercase tracking-wider mb-3">
            Keep Reading
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-teal">
            Related Articles
          </h2>
        </div>

        {/* Articles Grid */}
        <div className={`grid ${gridCols} gap-6`}>
          {relatedArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              slug={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              featuredImage={article.featuredImage}
              featuredImageAlt={article.featuredImageAlt}
              category={article.category}
              author={article.author}
              publishedDate={article.publishedDate}
              readingTime={article.readingTime}
              variant="default"
            />
          ))}
        </div>

        {/* View All Articles Link */}
        <div className="text-center mt-10">
          <Link
            href="/resources/blog"
            className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-hover transition-colors"
          >
            View All Articles
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
