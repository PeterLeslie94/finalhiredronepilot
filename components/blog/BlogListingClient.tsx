'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { BlogArticle, BlogCategory } from '@/data/blog';
import ArticleCard from '@/components/blog/ArticleCard';
import CategoryFilter from '@/components/blog/CategoryFilter';
import DiagonalDivider from '@/components/DiagonalDivider';
import QuoteForm from '@/components/QuoteForm';
import { ArrowLeft, BookOpen } from 'lucide-react';

interface BlogListingClientProps {
  articles: BlogArticle[];
  categories: BlogCategory[];
}

export default function BlogListingClient({ articles, categories }: BlogListingClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter and sort articles
  const filteredArticles = useMemo(() => {
    let filtered = [...articles];

    // Filter by category if selected
    if (selectedCategory) {
      filtered = filtered.filter((a) => a.category.slug === selectedCategory);
    }

    // Sort by date (newest first)
    filtered.sort(
      (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );

    return filtered;
  }, [articles, selectedCategory]);

  // Separate featured (first) article from the rest
  const featuredArticle = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[700px] md:min-h-[550px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-dark via-teal to-teal-light" />
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        <div className="container pt-8 pb-52 lg:pb-40 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/resources" className="hover:text-white transition-colors">
                Resources
              </Link>
              <span>/</span>
              <span className="text-white">Blog</span>
            </nav>

            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drone Survey Insights & Guides
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Expert articles, technical guides, and industry insights to help you
              understand drone surveying and make informed decisions for your projects.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/resources" className="btn btn-outline-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Resources
              </Link>
              <a href="#articles" className="btn btn-primary">
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Articles
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20">
          <svg
            className="absolute bottom-0 w-full h-20"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            fill="white"
          >
            <path d="M0,80 L1440,80 L1440,0 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="section bg-white">
        <div className="container">
          <div className="text-center mb-8">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Articles
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Latest from the Blog
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              Stay up to date with drone surveying technology, best practices, and industry trends.
            </p>

            {/* Category Filter */}
            <CategoryFilter
              categories={categories}
              activeCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-background-alt rounded-full mb-4">
                <BookOpen className="w-8 h-8 text-text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-teal mb-2">No articles found</h3>
              <p className="text-text-secondary mb-4">
                There are no articles in this category yet. Check back soon or browse all articles.
              </p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="btn btn-primary"
              >
                View All Articles
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Featured Article */}
              {featuredArticle && (
                <ArticleCard
                  key={featuredArticle.slug}
                  slug={featuredArticle.slug}
                  title={featuredArticle.title}
                  excerpt={featuredArticle.excerpt}
                  featuredImage={featuredArticle.featuredImage}
                  featuredImageAlt={featuredArticle.featuredImageAlt}
                  category={featuredArticle.category}
                  author={featuredArticle.author}
                  publishedDate={featuredArticle.publishedDate}
                  readingTime={featuredArticle.readingTime}
                  variant="featured"
                />
              )}

              {/* Remaining Articles Grid */}
              {remainingArticles.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {remainingArticles.map((article) => (
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
              )}
            </div>
          )}
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="teal" />

      {/* CTA Section */}
      <section className="section bg-teal">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
                Ready to Start?
              </h2>
              <h3 className="text-3xl font-bold text-white mb-4">
                Compare Quotes for Your Project
              </h3>
              <p className="text-white/80 text-lg mb-6">
                Have questions about drone surveying for your project? Get in touch
                for expert advice and a free no-obligation quote.
              </p>
              <ul className="space-y-3">
                {['Free no-obligation quote', 'Avg Response within 5 Mins', 'Expert consultation included'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
