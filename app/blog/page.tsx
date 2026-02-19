import { Metadata } from 'next';
import {
  getAllArticles,
  getBlogCategories,
  type ContentfulBlogArticle,
} from '@/lib/contentful/blog';
import type { BlogCategory } from '@/data/blog';
import BlogListingClient from '@/components/blog/BlogListingClient';
import { BlogListingSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';

const SITE_URL = 'https://hiredronepilot.uk';
const isContentfulConfigured = Boolean(
  process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN
);

export const metadata: Metadata = {
  title: 'Drone Pilot Blog | HireDronePilot',
  description:
    'Insights, guides, and practical advice about hiring and working with professional drone pilots across the UK.',
  openGraph: {
    title: 'HireDronePilot Blog',
    description:
      'Insights, guides, and practical advice for drone services, inspections, mapping, and surveys.',
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default async function BlogPage() {
  let articles: ContentfulBlogArticle[] = [];
  let categories: BlogCategory[] = [];

  if (isContentfulConfigured) {
    try {
      [articles, categories] = await Promise.all([getAllArticles(), getBlogCategories()]);
    } catch (error) {
      console.warn('Contentful fetch failed for blog listing:', error);
    }
  }

  const breadcrumbItems = [
    { name: 'Home', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blog` },
  ];

  const schemaArticles = articles.map((article) => ({
    title: article.title,
    url: `${SITE_URL}/blog/${article.slug}`,
    datePublished: article.publishedDate,
    author: article.author.name,
    image: article.featuredImage.startsWith('http')
      ? article.featuredImage
      : `${SITE_URL}${article.featuredImage}`,
    description: article.excerpt,
  }));

  return (
    <>
      <BlogListingSchema articles={schemaArticles} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <BlogListingClient articles={articles} categories={categories} />
    </>
  );
}
