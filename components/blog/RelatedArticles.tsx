'use client';

import Link from 'next/link';
import { BlogArticle } from '@/data/blog';

interface RelatedArticlesProps {
  articles: BlogArticle[];
  currentSlug: string;
}

export default function RelatedArticles({ articles, currentSlug }: RelatedArticlesProps) {
  const relatedArticles = articles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, 3);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="bg-white border-t border-gray-200">
      <div className="container py-16">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 text-center font-heading mb-12">
          Keep Learning
        </h2>

        {/* Text-only grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1160px] mx-auto">
          {relatedArticles.map((article) => (
            <div key={article.slug}>
              <Link
                href={`/blog/${article.slug}`}
                className="text-xl font-bold text-gold hover:text-gold-hover transition-colors"
              >
                {article.title}
              </Link>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {article.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
