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
import DiagonalDivider from '@/components/DiagonalDivider';
import QuoteForm from '@/components/QuoteForm';
import QuoteButton from '@/components/QuoteButton';
import { BlogPostingSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';

interface Props {
  params: Promise<{ slug: string }>;
}

const SITE_URL = 'https://hiredronepilot.uk';

const isContentfulConfigured = Boolean(
  process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN
);

export async function generateStaticParams() {
  if (!isContentfulConfigured) {
    return [];
  }

  try {
    const slugs = await getArticleSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.warn('Contentful fetch failed for blog static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (!isContentfulConfigured) {
    return {
      title: 'Blog Article | HireDronePilot',
      robots: { index: false, follow: false },
    };
  }

  let article: ContentfulBlogArticle | undefined;
  try {
    article = await getArticleBySlug(slug);
  } catch (error) {
    console.warn('Contentful fetch failed for blog metadata:', error);
  }

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

  if (!isContentfulConfigured) {
    notFound();
  }

  let article: ContentfulBlogArticle | undefined;
  try {
    article = await getArticleBySlug(slug);
  } catch (error) {
    console.warn('Contentful fetch failed for blog article:', error);
  }

  if (!article) {
    notFound();
  }

  let relatedArticles: ContentfulBlogArticle[] = [];
  try {
    relatedArticles = await getRelatedArticles(article, 3);
  } catch (error) {
    console.warn('Contentful fetch failed for related articles:', error);
  }

  const breadcrumbItems = [
    { name: 'Home', url: SITE_URL },
    { name: 'Resources', url: `${SITE_URL}/resources` },
    { name: 'Blog', url: `${SITE_URL}/resources/blog` },
    { name: article.title, url: `${SITE_URL}/resources/blog/${article.slug}` },
  ];

  return (
    <>
      <BlogPostingSchema article={article} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <ArticleHero article={article} />

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <ArticleContent
                content={undefined}
                contentfulContent={article.contentfulContent}
                keyTakeaways={article.keyTakeaways}
              />

              {article.tags && article.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4">
                    Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/resources/blog?tag=${encodeURIComponent(tag)}`}
                        className="px-3 py-1 bg-background-alt text-text-secondary text-sm rounded-full hover:bg-gold hover:text-teal-dark transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4">
                  Share This Article
                </h4>
                <SocialShareButtons
                  url={`${SITE_URL}/resources/blog/${article.slug}`}
                  title={article.title}
                />
              </div>
            </div>

            <div className="lg:col-span-4 lg:self-stretch">
              <div className="space-y-6">
                <AuthorCard author={article.author} />

                <div id="article-toc">
                  <TableOfContents
                    content={undefined}
                    contentfulContent={article.contentfulContent}
                  />
                </div>
              </div>

              <div className="mt-6 lg:sticky lg:top-24 lg:z-20">
                <div className="bg-background-alt border border-border rounded-2xl p-6">
                  <h3 className="text-teal font-bold text-lg mb-2">
                    Need a Drone Pilot?
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    Compare quotes from vetted drone pilots for your project.
                  </p>
                  <QuoteButton className="btn btn-primary w-full">
                    Compare Quotes
                  </QuoteButton>
                </div>
              </div>
            </div>
          </div>
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
                Tell us about your project once and compare responses from vetted drone pilots.
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
                  <span className="text-white">CAA-certified pilot network</span>
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
