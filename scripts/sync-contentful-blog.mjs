#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

import { createClient } from 'contentful';

const CONTENT_TYPE_BLOG_POST = 'blogPost';
const CONTENT_TYPE_CATEGORY = 'category';
const SNAPSHOT_PATH = path.resolve(process.cwd(), 'data/generated/contentful-blog.json');

const DEFAULT_AUTHOR = {
  name: 'Peter Leslie',
  role: 'Owner & Drone Pilot',
  image: '/images/peter_leslie.webp',
  bio: 'Founder of HireDronePilot, helping UK clients compare quotes from independent drone pilots through a single streamlined platform.',
};

const DEFAULT_CATEGORY = {
  slug: 'uncategorized',
  name: 'Uncategorized',
  description: 'General articles',
};

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const text = fs.readFileSync(filePath, 'utf8');
  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const idx = line.indexOf('=');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (!key) continue;

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function hasSnapshotFile() {
  return fs.existsSync(SNAPSHOT_PATH);
}

function ensureSnapshotDir() {
  const dir = path.dirname(SNAPSHOT_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function transformAsset(asset) {
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

function mapAuthor(fields) {
  const authorFields = fields.author?.fields;
  if (!authorFields) return DEFAULT_AUTHOR;

  const avatar = transformAsset(authorFields.avatar);
  return {
    name: authorFields.name ?? DEFAULT_AUTHOR.name,
    role: authorFields.role ?? DEFAULT_AUTHOR.role,
    image: avatar?.url ?? DEFAULT_AUTHOR.image,
    bio: authorFields.bio ?? DEFAULT_AUTHOR.bio,
  };
}

function mapContentfulToArticle(entry) {
  const fields = entry.fields ?? {};

  const keyTakeaways = [
    fields.keyTakeaway1,
    fields.keyTakeaway2,
    fields.keyTakeaway3,
    fields.keyTakeaway4,
    fields.keyTakeaway5,
  ].filter((item) => typeof item === 'string' && item.length > 0);

  const categoryFields = fields.category?.fields;
  const category =
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
    featuredImageAlt:
      fields.featuredImageAlt || featuredImage.alt || fields.title || 'Blog article image',
    category,
    author: mapAuthor(fields),
    publishedDate: fields.publishDate ?? new Date(0).toISOString(),
    updatedDate: fields.updatedDate,
    readingTime: fields.readingTime ?? 5,
    tags: [],
    keyTakeaways: keyTakeaways.length > 0 ? keyTakeaways : undefined,
    content: [],
    contentfulContent:
      fields.content ?? { nodeType: 'document', data: {}, content: [] },
    metaTitle: fields.seoTitle,
    metaDescription: fields.seoDescription,
    relatedSlugs: [],
  };
}

async function fetchSnapshotData() {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
    throw new Error('Missing Contentful credentials in environment');
  }

  const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
    environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  });

  const currentDate = new Date().toISOString();

  const [articleEntries, categoryEntries] = await Promise.all([
    client.getEntries({
      content_type: CONTENT_TYPE_BLOG_POST,
      order: ['-fields.publishDate'],
      include: 2,
      'fields.publishDate[lte]': currentDate,
    }),
    client.getEntries({
      content_type: CONTENT_TYPE_CATEGORY,
    }),
  ]);

  const articles = articleEntries.items.map(mapContentfulToArticle);

  const categories = categoryEntries.items
    .map((entry) => {
      const fields = entry?.fields ?? {};
      return {
        slug: fields.slug ?? '',
        name: fields.name ?? 'Uncategorized',
        description: fields.description,
      };
    })
    .filter((category) => category.slug.length > 0);

  return {
    generated_at: new Date().toISOString(),
    articles,
    categories,
    slugs: articles
      .map((article) => article.slug)
      .filter((slug) => typeof slug === 'string' && slug.length > 0),
  };
}

function writeSnapshot(snapshot) {
  ensureSnapshotDir();

  const tempPath = `${SNAPSHOT_PATH}.tmp`;
  fs.writeFileSync(tempPath, `${JSON.stringify(snapshot, null, 2)}\n`, 'utf8');
  fs.renameSync(tempPath, SNAPSHOT_PATH);
}

async function run() {
  loadEnvFile(path.resolve(process.cwd(), '.env.local'));
  loadEnvFile(path.resolve(process.cwd(), '.env'));

  try {
    const snapshot = await fetchSnapshotData();
    writeSnapshot(snapshot);
    console.log(
      `Synced Contentful blog snapshot (${snapshot.articles.length} articles) -> ${SNAPSHOT_PATH}`,
    );
  } catch (error) {
    if (hasSnapshotFile()) {
      const message = error instanceof Error ? error.message : String(error);
      console.warn(
        `Contentful sync failed (${message}). Keeping existing snapshot at ${SNAPSHOT_PATH}.`,
      );
      process.exit(0);
    }

    const message = error instanceof Error ? error.message : String(error);
    console.error(
      `Contentful sync failed and no snapshot exists at ${SNAPSHOT_PATH}: ${message}`,
    );
    process.exit(1);
  }
}

run();
