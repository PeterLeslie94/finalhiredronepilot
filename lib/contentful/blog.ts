import { Document } from '@contentful/rich-text-types';
import { getContentfulClient } from './client';
import type { BlogArticle, BlogCategory, Author } from '@/data/blog';

const CONTENT_TYPE_BLOG_POST = 'blogPost';
const CONTENT_TYPE_CATEGORY = 'category';

// Default author if Contentful entry does not provide one
const DEFAULT_AUTHOR: Author = {
  name: 'Peter Leslie',
  role: 'Owner & Drone Pilot',
  image: '/images/peter_leslie.webp',
  bio: 'Founder of HireDronePilot, helping UK clients compare quotes from independent drone pilots through a single streamlined platform.',
};

// Default category for posts without one
const DEFAULT_CATEGORY: BlogCategory = {
  slug: 'uncategorized',
  name: 'Uncategorized',
  description: 'General articles',
};

interface ContentfulCategoryFields {
  slug?: string;
  name?: string;
  description?: string;
}

interface ContentfulAssetFields {
  title?: string;
  description?: string;
  file?: {
    url?: string;
    details?: {
      image?: {
        width?: number;
        height?: number;
      };
    };
  };
}

interface ContentfulAuthorFields {
  name?: string;
  bio?: string;
  role?: string;
  avatar?: {
    fields?: ContentfulAssetFields;
  };
}

interface ContentfulBlogPostFields {
  slug?: string;
  title?: string;
  excerpt?: string;
  featuredImageAlt?: string;
  publishDate?: string;
  updatedDate?: string;
  seoTitle?: string;
  seoDescription?: string;
  content?: Document;
  readingTime?: number;
  author?: {
    fields?: ContentfulAuthorFields;
  };
  category?: {
    fields?: ContentfulCategoryFields;
  };
  featuredImage?: {
    fields?: ContentfulAssetFields;
  };
  keyTakeaway1?: string;
  keyTakeaway2?: string;
  keyTakeaway3?: string;
  keyTakeaway4?: string;
  keyTakeaway5?: string;
}

interface ContentfulBlogPostEntry {
  fields: ContentfulBlogPostFields;
}

function transformAsset(asset: { fields?: ContentfulAssetFields } | undefined) {
  if (!asset?.fields?.file?.url) return null;

  const details = asset.fields.file.details;
  const alt =
    typeof asset.fields.description === 'string'
      ? asset.fields.description
      : typeof asset.fields.title === 'string'
        ? asset.fields.title
        : '';

  return {
    url: `https:${asset.fields.file.url}`,
    alt,
    width: details?.image?.width ?? 1200,
    height: details?.image?.height ?? 630,
  };
}

function mapAuthor(fields: ContentfulBlogPostFields): Author {
  const authorFields = fields.author?.fields;
  if (!authorFields) {
    return DEFAULT_AUTHOR;
  }

  const avatar = transformAsset(authorFields.avatar);
  return {
    name: authorFields.name ?? DEFAULT_AUTHOR.name,
    role: authorFields.role ?? DEFAULT_AUTHOR.role,
    image: avatar?.url ?? DEFAULT_AUTHOR.image,
    bio: authorFields.bio ?? DEFAULT_AUTHOR.bio,
  };
}

// Transform Contentful entry to site BlogArticle format
function mapContentfulToArticle(
  entry: ContentfulBlogPostEntry
): BlogArticle & { contentfulContent: Document } {
  const fields = entry.fields;

  // Combine keyTakeaway1-5 into array
  const keyTakeaways = [
    fields.keyTakeaway1,
    fields.keyTakeaway2,
    fields.keyTakeaway3,
    fields.keyTakeaway4,
    fields.keyTakeaway5,
  ].filter((takeaway): takeaway is string => Boolean(takeaway));

  // Extract category from reference
  const categoryFields = fields.category?.fields;
  const category: BlogCategory =
    categoryFields?.slug && categoryFields?.name
      ? {
          slug: categoryFields.slug,
          name: categoryFields.name,
          description: categoryFields.description,
        }
      : DEFAULT_CATEGORY;

  const featuredImage = transformAsset(fields.featuredImage);
  if (!featuredImage) {
    throw new Error(`Blog post ${fields.slug ?? 'unknown'} is missing featured image`);
  }

  return {
    slug: fields.slug ?? '',
    title: fields.title ?? 'Untitled Article',
    excerpt: fields.excerpt ?? '',
    featuredImage: featuredImage.url,
    featuredImageAlt: fields.featuredImageAlt || featuredImage.alt || fields.title || 'Blog article image',
    category,
    author: mapAuthor(fields),
    publishedDate: fields.publishDate ?? new Date(0).toISOString(),
    updatedDate: fields.updatedDate,
    readingTime: fields.readingTime ?? 5,
    tags: [], // Not used - category is sufficient
    keyTakeaways: keyTakeaways.length > 0 ? keyTakeaways : undefined,
    content: [], // Empty array - we use contentfulContent for rich text
    contentfulContent: fields.content ?? ({ nodeType: 'document', data: {}, content: [] } as Document),
    metaTitle: fields.seoTitle,
    metaDescription: fields.seoDescription,
    relatedSlugs: [], // Auto-derived in getRelatedArticles()
  };
}

export interface ContentfulBlogArticle extends BlogArticle {
  contentfulContent: Document;
}

export async function getAllArticles(): Promise<ContentfulBlogArticle[]> {
  const client = getContentfulClient();
  const currentDate = new Date().toISOString();
  const entries = await client.getEntries({
    content_type: CONTENT_TYPE_BLOG_POST,
    order: ['-fields.publishDate'],
    include: 2,
    'fields.publishDate[lte]': currentDate,
  });
  return entries.items.map(mapContentfulToArticle);
}

export async function getArticleBySlug(slug: string): Promise<ContentfulBlogArticle | undefined> {
  const client = getContentfulClient();
  const currentDate = new Date().toISOString();
  const entries = await client.getEntries({
    content_type: CONTENT_TYPE_BLOG_POST,
    'fields.slug': slug,
    include: 2,
    limit: 1,
    'fields.publishDate[lte]': currentDate,
  });
  if (entries.items.length === 0) return undefined;
  return mapContentfulToArticle(entries.items[0]);
}

export async function getArticleSlugs(): Promise<string[]> {
  const client = getContentfulClient();
  const currentDate = new Date().toISOString();
  const entries = await client.getEntries({
    content_type: CONTENT_TYPE_BLOG_POST,
    select: ['fields.slug'],
    limit: 1000,
    'fields.publishDate[lte]': currentDate,
  });
  return entries.items
    .map((item) => (item as { fields?: { slug?: string } }).fields?.slug)
    .filter((slug): slug is string => Boolean(slug));
}

export async function getArticlesByCategory(categorySlug: string): Promise<ContentfulBlogArticle[]> {
  const allArticles = await getAllArticles();
  return allArticles.filter((article) => article.category.slug === categorySlug);
}

export async function getRelatedArticles(
  article: ContentfulBlogArticle,
  limit: number = 3
): Promise<ContentfulBlogArticle[]> {
  const allArticles = await getAllArticles();

  // Return other articles from same category, excluding current article
  return allArticles
    .filter((a) => a.slug !== article.slug && a.category.slug === article.category.slug)
    .slice(0, limit);
}

export async function getLatestArticles(limit: number = 3): Promise<ContentfulBlogArticle[]> {
  const client = getContentfulClient();
  const currentDate = new Date().toISOString();
  const entries = await client.getEntries({
    content_type: CONTENT_TYPE_BLOG_POST,
    order: ['-fields.publishDate'],
    include: 2,
    limit,
    'fields.publishDate[lte]': currentDate,
  });
  return entries.items.map(mapContentfulToArticle);
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  const client = getContentfulClient();
  const entries = await client.getEntries({
    content_type: CONTENT_TYPE_CATEGORY,
  });
  return entries.items
    .map((entry) => {
      const fields = (entry as { fields?: ContentfulCategoryFields }).fields;
      return {
        slug: fields?.slug ?? '',
        name: fields?.name ?? 'Uncategorized',
        description: fields?.description,
      };
    })
    .filter((category) => Boolean(category.slug));
}
