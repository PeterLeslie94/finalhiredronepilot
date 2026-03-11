#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

import { createClient } from 'contentful';

const CONTENTFUL_PAGE_LIMIT = 100;
const SNAPSHOT_PATH = path.resolve(process.cwd(), 'data/generated/contentful-drone-reviews.json');
const CONTENT_TYPE_REVIEW = 'droneReview';
const CONTENT_TYPE_COMPARISON = 'droneComparison';
const CONTENT_TYPE_BEST_PAGE = 'droneBestPage';

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

function transformAsset(asset, fallbackAlt) {
  if (!asset?.fields?.file?.url) return null;

  return {
    url: `https:${asset.fields.file.url}`,
    alt:
      typeof asset.fields.description === 'string'
        ? asset.fields.description
        : typeof asset.fields.title === 'string'
          ? asset.fields.title
          : fallbackAlt,
  };
}

function pickArray(value) {
  return Array.isArray(value) ? value : [];
}

function mapFaqItems(items) {
  return pickArray(items)
    .map((item) => {
      const fields = item?.fields ?? {};
      if (!fields.question || !fields.answer) return null;
      return {
        question: fields.question,
        answer: fields.answer,
      };
    })
    .filter(Boolean);
}

function mapMediaGallery(items) {
  return pickArray(items)
    .map((item) => {
      const asset = transformAsset(item, 'Drone review media');
      if (!asset) return null;
      return {
        src: asset.url,
        alt: asset.alt,
        caption: item?.fields?.title,
      };
    })
    .filter(Boolean);
}

function mapScoreBreakdown(items) {
  return pickArray(items)
    .map((item) => {
      const fields = item?.fields ?? {};
      if (!fields.categoryId || typeof fields.score !== 'number') return null;
      return {
        categoryId: fields.categoryId,
        score: fields.score,
        summary: fields.summary ?? '',
      };
    })
    .filter(Boolean);
}

function mapMetricSet(items) {
  return pickArray(items)
    .map((item) => {
      const fields = item?.fields ?? {};
      if (!fields.label || !fields.value) return null;
      return {
        label: fields.label,
        value: fields.value,
        notes: fields.notes,
      };
    })
    .filter(Boolean);
}

function mapSpecSheet(items) {
  return pickArray(items)
    .map((item) => {
      const fields = item?.fields ?? {};
      if (!fields.label || !fields.value) return null;
      return {
        label: fields.label,
        value: fields.value,
      };
    })
    .filter(Boolean);
}

function mapReview(entry) {
  const fields = entry?.fields ?? {};
  const hero = transformAsset(fields.featuredImage, fields.title ?? 'Drone review image');

  if (!fields.slug || !fields.title || !hero) {
    throw new Error(`Drone review entry is missing required fields (slug/title/featuredImage).`);
  }

  return {
    slug: fields.slug,
    title: fields.title,
    manufacturer: fields.manufacturer ?? 'Unknown',
    category: fields.category ?? 'all-rounder',
    summary: fields.summary ?? '',
    featuredImage: hero.url,
    featuredImageAlt: fields.featuredImageAlt ?? hero.alt,
    publishedDate: fields.publishDate ?? new Date(0).toISOString(),
    updatedDate: fields.updatedDate,
    priceLabel: fields.priceLabel ?? 'Price unavailable',
    priceValue: fields.priceValue ?? 0,
    affiliateUrl: fields.affiliateUrl ?? 'https://www.amazon.co.uk/',
    verdict: fields.verdict ?? '',
    buyIf: pickArray(fields.buyIf).filter((item) => typeof item === 'string'),
    avoidIf: pickArray(fields.avoidIf).filter((item) => typeof item === 'string'),
    overallScore: fields.overallScore ?? 0,
    featured: Boolean(fields.featured),
    useCaseTags: pickArray(fields.useCaseTags).filter((item) => typeof item === 'string'),
    pros: pickArray(fields.pros).filter((item) => typeof item === 'string'),
    cons: pickArray(fields.cons).filter((item) => typeof item === 'string'),
    specs: mapSpecSheet(fields.specs),
    benchmarkSummary: mapMetricSet(fields.benchmarkSummary),
    scoreBreakdown: mapScoreBreakdown(fields.scoreBreakdown),
    testRun: {
      firmware: fields.firmwareTested ?? 'Unknown',
      location: fields.testLocation ?? 'Unknown',
      testDate: fields.testDate ?? new Date(0).toISOString(),
      wind: fields.windConditions ?? 'Unknown',
      temperature: fields.temperature ?? 'Unknown',
      light: fields.lightConditions ?? 'Unknown',
      notes: fields.testNotes,
    },
    gallery: mapMediaGallery(fields.gallery),
    faq: mapFaqItems(fields.faq),
    keyTakeaways: pickArray(fields.keyTakeaways).filter((item) => typeof item === 'string'),
    contentfulContent: fields.content ?? { nodeType: 'document', data: {}, content: [] },
    relatedReviewSlugs: pickArray(fields.relatedReviews).map((item) => item?.fields?.slug).filter(Boolean),
    relatedComparisonSlugs: pickArray(fields.relatedComparisons).map((item) => item?.fields?.slug).filter(Boolean),
    relatedBestPageSlugs: pickArray(fields.relatedBestPages).map((item) => item?.fields?.slug).filter(Boolean),
  };
}

function mapComparison(entry) {
  const fields = entry?.fields ?? {};
  if (!fields.slug || !fields.title) {
    throw new Error('Drone comparison entry is missing required fields (slug/title).');
  }

  return {
    slug: fields.slug,
    aliasSlugs: pickArray(fields.aliasSlugs).filter((item) => typeof item === 'string'),
    title: fields.title,
    excerpt: fields.excerpt ?? '',
    publishedDate: fields.publishDate ?? new Date(0).toISOString(),
    updatedDate: fields.updatedDate,
    leftReviewSlug: fields.leftReview?.fields?.slug ?? '',
    rightReviewSlug: fields.rightReview?.fields?.slug ?? '',
    winnerReviewSlug: fields.winnerReview?.fields?.slug ?? '',
    winnerSummary: fields.winnerSummary ?? '',
    leftBuyIf: fields.leftBuyIf ?? '',
    rightBuyIf: fields.rightBuyIf ?? '',
    priceNote: fields.priceNote,
    categoryResults: pickArray(fields.categoryResults)
      .map((item) => {
        const resultFields = item?.fields ?? {};
        if (!resultFields.label || !resultFields.winner) return null;
        return {
          label: resultFields.label,
          winner: resultFields.winner,
          summary: resultFields.summary ?? '',
        };
      })
      .filter(Boolean),
    faq: mapFaqItems(fields.faq),
    keyTakeaways: pickArray(fields.keyTakeaways).filter((item) => typeof item === 'string'),
    contentfulContent: fields.content ?? { nodeType: 'document', data: {}, content: [] },
    relatedBestPageSlugs: pickArray(fields.relatedBestPages).map((item) => item?.fields?.slug).filter(Boolean),
  };
}

function mapBestPage(entry) {
  const fields = entry?.fields ?? {};
  if (!fields.slug || !fields.title) {
    throw new Error('Best page entry is missing required fields (slug/title).');
  }

  return {
    slug: fields.slug,
    title: fields.title,
    excerpt: fields.excerpt ?? '',
    targetKeyword: fields.targetKeyword ?? fields.title,
    publishedDate: fields.publishDate ?? new Date(0).toISOString(),
    updatedDate: fields.updatedDate,
    intro: fields.intro ?? '',
    methodologySummary: fields.methodologySummary ?? '',
    keyTakeaways: pickArray(fields.keyTakeaways).filter((item) => typeof item === 'string'),
    faq: mapFaqItems(fields.faq),
    ruleSet: {
      requiredUseCaseTags: pickArray(fields.requiredUseCaseTags).filter((item) => typeof item === 'string'),
      eligibleReviewSlugs: pickArray(fields.eligibleReviews).map((item) => item?.fields?.slug).filter(Boolean),
      includeManufacturers: pickArray(fields.includeManufacturers).filter((item) => typeof item === 'string'),
      excludeManufacturers: pickArray(fields.excludeManufacturers).filter((item) => typeof item === 'string'),
      maxPrice: fields.maxPrice,
      scoreWeights: fields.scoreWeights ?? {},
      overrides: pickArray(fields.overrides)
        .map((item) => {
          const overrideFields = item?.fields ?? {};
          if (!overrideFields.review?.fields?.slug || typeof overrideFields.position !== 'number') return null;
          return {
            reviewSlug: overrideFields.review.fields.slug,
            position: overrideFields.position,
            reason: overrideFields.reason ?? '',
          };
        })
        .filter(Boolean),
    },
    reviewNotes: pickArray(fields.reviewNotes)
      .map((item) => {
        const noteFields = item?.fields ?? {};
        if (!noteFields.review?.fields?.slug || !noteFields.award) return null;
        return {
          reviewSlug: noteFields.review.fields.slug,
          award: noteFields.award,
          whyThisPick: noteFields.whyThisPick ?? '',
          whoShouldSkipIt: noteFields.whoShouldSkipIt ?? '',
        };
      })
      .filter(Boolean),
    contentfulContent: fields.content ?? { nodeType: 'document', data: {}, content: [] },
  };
}

async function fetchEntries(client, contentType) {
  const items = [];
  let skip = 0;

  while (true) {
    const page = await client.getEntries({
      content_type: contentType,
      order: ['-sys.updatedAt'],
      include: 4,
      limit: CONTENTFUL_PAGE_LIMIT,
      skip,
    });

    items.push(...page.items);
    skip += page.items.length;
    if (page.items.length === 0 || skip >= page.total) break;
  }

  return items;
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

  const [reviewEntries, comparisonEntries, bestPageEntries] = await Promise.all([
    fetchEntries(client, CONTENT_TYPE_REVIEW),
    fetchEntries(client, CONTENT_TYPE_COMPARISON),
    fetchEntries(client, CONTENT_TYPE_BEST_PAGE),
  ]);

  const reviews = reviewEntries.map(mapReview);
  const comparisons = comparisonEntries.map(mapComparison);
  const bestPages = bestPageEntries.map(mapBestPage);

  return {
    generated_at: new Date().toISOString(),
    reviews,
    comparisons,
    bestPages,
    reviewSlugs: reviews.map((review) => review.slug),
    comparisonSlugs: comparisons.map((comparison) => comparison.slug),
    bestPageSlugs: bestPages.map((page) => page.slug),
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
    const isEmptySnapshot =
      snapshot.reviews.length === 0
      && snapshot.comparisons.length === 0
      && snapshot.bestPages.length === 0;

    if (isEmptySnapshot && hasSnapshotFile()) {
      console.warn(
        `Contentful drone review schema exists but no review entries are published yet. Keeping existing snapshot at ${SNAPSHOT_PATH}.`,
      );
      process.exit(0);
    }

    writeSnapshot(snapshot);
    console.log(
      `Synced Contentful drone review snapshot (${snapshot.reviews.length} reviews, ${snapshot.comparisons.length} comparisons, ${snapshot.bestPages.length} best pages) -> ${SNAPSHOT_PATH}`,
    );
  } catch (error) {
    if (hasSnapshotFile()) {
      const message = error instanceof Error ? error.message : String(error);
      console.warn(
        `Drone review Contentful sync failed (${message}). Keeping existing snapshot at ${SNAPSHOT_PATH}.`,
      );
      process.exit(0);
    }

    const message = error instanceof Error ? error.message : String(error);
    console.error(
      `Drone review Contentful sync failed and no snapshot exists at ${SNAPSHOT_PATH}: ${message}`,
    );
    process.exit(1);
  }
}

run();
