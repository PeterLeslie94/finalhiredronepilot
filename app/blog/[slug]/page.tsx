import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  getArticleBySlug,
  getArticleSlugs,
  getRelatedArticles,
  ContentfulBlogArticle,
} from '@/lib/contentful/blog';
import ArticleHero from '@/components/blog/ArticleHero';
import ArticleContent from '@/components/blog/ArticleContent';
import AuthorCard from '@/components/blog/AuthorCard';
import TableOfContents from '@/components/blog/TableOfContents';
import RelatedArticles from '@/components/blog/RelatedArticles';
import SocialShareButtons from '@/components/blog/SocialShareButtons';
import MobileAuthorCard from '@/components/blog/MobileAuthorCard';
import ScrollProgressBar from '@/components/blog/ScrollProgressBar';
import DiagonalDivider from '@/components/DiagonalDivider';
import QuoteForm from '@/components/QuoteForm';
import { BlogPostingSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';

interface Props {
  params: Promise<{ slug: string }>;
}

const SITE_URL = 'https://hiredronepilot.uk';
export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const article: ContentfulBlogArticle | undefined = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | HireDronePilot',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: article.metaTitle || `${article.title} | HireDronePilot Blog`,
    description: article.metaDescription || article.excerpt,
    keywords: article.tags?.join(', '),
    openGraph: {
      type: 'article',
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt,
      publishedTime: article.publishedDate,
      authors: [article.author.name],
      tags: article.tags,
      images: [
        {
          url: article.featuredImage,
          alt: article.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt,
      images: [article.featuredImage],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const article: ContentfulBlogArticle | undefined = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles: ContentfulBlogArticle[] = await getRelatedArticles(article, 3);

  const breadcrumbItems = [
    { name: 'Home', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blog` },
    { name: article.title, url: `${SITE_URL}/blog/${article.slug}` },
  ];

  return (
    <>
      <BlogPostingSchema article={article} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ScrollProgressBar />

      <ArticleHero article={article} />

      {/* Mobile author - shown below hero and above article body */}
      <MobileAuthorCard author={article.author} />

      <section className="bg-white py-12">
        <div className="relative max-w-[1160px] mx-auto px-4">
          {/* Left: TOC sidebar */}
          <aside className="hidden lg:block absolute left-0 top-0 bottom-0 w-[240px]">
            <div className="sticky top-24">
              <TableOfContents
                content={undefined}
                contentfulContent={article.contentfulContent}
              />
            </div>
          </aside>

          {/* Center: Main content */}
          <div className="max-w-[650px] mx-auto">
            <ArticleContent
              content={undefined}
              contentfulContent={article.contentfulContent}
              keyTakeaways={article.keyTakeaways}
            />

            {article.tags && article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  Topics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gold hover:text-white transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                Share This Article
              </h4>
              <SocialShareButtons
                url={`${SITE_URL}/blog/${article.slug}`}
                title={article.title}
              />
            </div>
          </div>

          {/* Right: Author + CTA sidebar */}
          <aside className="hidden lg:block absolute right-0 top-0 bottom-0 w-[216px]">
            <div className="sticky top-24 space-y-6">
              <AuthorCard author={article.author} />
            </div>
          </aside>
        </div>
      </section>

      <RelatedArticles articles={relatedArticles} currentSlug={article.slug} />

      <DiagonalDivider fromColor="background-alt" toColor="teal" />

      <section className="section bg-teal">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
                Ready to Get Started?
              </h2>
              <h3 className="text-3xl font-bold text-white mb-4">
                Compare Drone Pilot Quotes
              </h3>
              <p className="text-white/80 text-lg mb-6">
                Tell us about your project once and compare responses from independent drone pilots.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white">One form, multiple quotes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white">Independent drone pilot network</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white">UK-wide service coverage</span>
                </div>
              </div>
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
