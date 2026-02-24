import fs from 'node:fs/promises';
import path from 'node:path';

import { Document } from '@contentful/rich-text-types';
import { cache } from 'react';

import type { BlogArticle, BlogCategory } from '@/data/blog';

export interface ContentfulBlogArticle extends BlogArticle {
  contentfulContent: Document;
}

interface BlogSnapshot {
  generated_at: string;
  articles: ContentfulBlogArticle[];
  categories: BlogCategory[];
  slugs: string[];
}

const SNAPSHOT_PATH = path.resolve(process.cwd(), 'data/generated/contentful-blog.json');

const readSnapshot = cache(async (): Promise<BlogSnapshot> => {
  let raw: string;
  try {
    raw = await fs.readFile(SNAPSHOT_PATH, 'utf8');
  } catch (error) {
    throw new Error(
      `Missing blog snapshot at ${SNAPSHOT_PATH}. Run \"npm run content:sync\" or \"npm run build\" first.`,
      { cause: error as Error },
    );
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Invalid JSON in blog snapshot at ${SNAPSHOT_PATH}.`, { cause: error as Error });
  }

  if (!parsed || typeof parsed !== 'object') {
    throw new Error(`Invalid blog snapshot format at ${SNAPSHOT_PATH}.`);
  }

  const snapshot = parsed as Partial<BlogSnapshot>;
  const articles = Array.isArray(snapshot.articles)
    ? snapshot.articles
    : [];
  const categories = Array.isArray(snapshot.categories)
    ? snapshot.categories
    : [];
  const slugs = Array.isArray(snapshot.slugs)
    ? snapshot.slugs
    : articles
        .map((article) => article?.slug)
        .filter((slug): slug is string => typeof slug === 'string' && slug.length > 0);

  return {
    generated_at:
      typeof snapshot.generated_at === 'string'
        ? snapshot.generated_at
        : new Date(0).toISOString(),
    articles,
    categories,
    slugs,
  };
});

export async function getAllArticles(): Promise<ContentfulBlogArticle[]> {
  const snapshot = await readSnapshot();
  return snapshot.articles;
}

export async function getArticleBySlug(slug: string): Promise<ContentfulBlogArticle | undefined> {
  const snapshot = await readSnapshot();
  return snapshot.articles.find((article) => article.slug === slug);
}

export async function getArticleSlugs(): Promise<string[]> {
  const snapshot = await readSnapshot();
  return snapshot.slugs;
}

export async function getArticlesByCategory(categorySlug: string): Promise<ContentfulBlogArticle[]> {
  const snapshot = await readSnapshot();
  return snapshot.articles.filter((article) => article.category.slug === categorySlug);
}

export async function getRelatedArticles(
  article: ContentfulBlogArticle,
  limit: number = 3,
): Promise<ContentfulBlogArticle[]> {
  const snapshot = await readSnapshot();

  if (article.relatedSlugs && article.relatedSlugs.length > 0) {
    const relatedFromSlugs = article.relatedSlugs
      .map((slug) => snapshot.articles.find((candidate) => candidate.slug === slug))
      .filter((candidate): candidate is ContentfulBlogArticle => Boolean(candidate))
      .slice(0, limit);

    if (relatedFromSlugs.length > 0) {
      return relatedFromSlugs;
    }
  }

  return snapshot.articles
    .filter((candidate) => candidate.slug !== article.slug && candidate.category.slug === article.category.slug)
    .slice(0, limit);
}

export async function getLatestArticles(limit: number = 3): Promise<ContentfulBlogArticle[]> {
  const snapshot = await readSnapshot();

  return [...snapshot.articles]
    .sort(
      (left, right) =>
        new Date(right.publishedDate).getTime() - new Date(left.publishedDate).getTime(),
    )
    .slice(0, limit);
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  const snapshot = await readSnapshot();
  return snapshot.categories;
}
