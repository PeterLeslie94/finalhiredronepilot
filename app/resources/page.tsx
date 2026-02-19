import Link from 'next/link';
import { calculators } from '@/data/resources';
import { getLatestArticles } from '@/lib/contentful/blog';
import CalculatorCard from '@/components/resources/CalculatorCard';
import ArticleCard from '@/components/blog/ArticleCard';
import DiagonalDivider from '@/components/DiagonalDivider';
import QuoteForm from '@/components/QuoteForm';
import { BookOpen, Calculator } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';

const isContentfulConfigured = Boolean(
  process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN
);

export default async function ResourcesPage() {
  // Fetch blog articles from Contentful
  let latestArticles: Awaited<ReturnType<typeof getLatestArticles>> = [];
  if (isContentfulConfigured) {
    try {
      latestArticles = await getLatestArticles(3);
    } catch (error) {
      console.warn('Failed to fetch blog articles from Contentful:', error);
    }
  }

  const breadcrumbItems = [
    { name: 'Home', url: 'https://hiredronepilot.uk' },
    { name: 'Resources', url: 'https://hiredronepilot.uk/resources' },
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />

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
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Resources
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drone Survey Resources & Tools
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Free calculators, tutorials, and expert insights
              to help you plan and understand your aerial survey projects.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#calculators" className="btn btn-primary">
                <Calculator className="w-4 h-4 mr-2" />
                Calculators
              </a>
              <a href="#blog" className="btn btn-outline-white">
                <BookOpen className="w-4 h-4 mr-2" />
                Blog
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

      {/* Calculators Section */}
      <section id="calculators" className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Free Tools
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Survey Calculators
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Plan your drone survey project with our free interactive calculators.
              Get instant estimates for costs, flight times, and ROI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {calculators.map((calc) => (
              <CalculatorCard
                key={calc.slug}
                title={calc.title}
                description={calc.shortDescription}
                icon={calc.icon}
                href={`/resources/calculators/${calc.slug}`}
                features={calc.features}
              />
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="teal" />

      {/* Blog Section */}
      <section id="blog" className="section bg-teal">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-gold font-semibold uppercase tracking-wider mb-3">
                Insights
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                From the Blog
              </h2>
              <p className="text-white/80 text-lg max-w-2xl">
                Expert articles on drone surveying, industry trends, and technical guides.
              </p>
            </div>
            {latestArticles.length > 0 && (
              <Link
                href="/blog"
                className="mt-4 md:mt-0 inline-flex items-center text-gold font-semibold hover:text-gold-light transition-colors"
              >
                View All Articles
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
          {latestArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestArticles.map((article) => (
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
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                <BookOpen className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Blog Coming Soon</h3>
              <p className="text-white/70 text-lg max-w-md mx-auto">
                We&apos;re working on expert articles about drone surveying. Check back soon for insights, guides, and industry news.
              </p>
            </div>
          )}
        </div>
      </section>

      <DiagonalDivider fromColor="teal" toColor="white" />

      {/* Quote Section */}
      <section id="quote" className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
                Ready to Start?
              </h2>
              <h3 className="text-3xl font-bold text-teal mb-4">
                Compare Quotes for Your Project
              </h3>
              <p className="text-text-secondary text-lg mb-6">
                Used our calculators and ready for precise pricing? Tell us about
                your project and we&apos;ll provide a tailored quote within 24 hours.
              </p>
              <ul className="space-y-3">
                {['Free no-obligation quote', 'Avg Response within 5 Mins', 'Expert consultation included'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary">{item}</span>
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
