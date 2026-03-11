#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

import { createClient } from 'contentful';

const CONTENTFUL_PAGE_LIMIT = 100;
const SNAPSHOT_PATH = path.resolve(process.cwd(), 'data/generated/contentful-drone-reviews.json');
const CONTENT_TYPE_REVIEW = 'droneReviewArticle';
const CONTENT_TYPE_COMPARISON = 'droneComparison';
const CONTENT_TYPE_BEST_PAGE = 'droneBestPage';
const EMPTY_DOCUMENT = { nodeType: 'document', data: {}, content: [] };
const REVIEW_SECTION_FIELDS = [
  ['cameraImageQualitySection', 'camera-image-quality'],
  ['flightPerformanceWindStabilitySection', 'flight-performance-wind-stability'],
  ['batteryRealFlightTimeSection', 'battery-real-flight-time'],
  ['safetyObstacleAvoidanceSection', 'safety-obstacle-avoidance'],
  ['easeOfUseSection', 'ease-of-use'],
  ['trackingIntelligentFeaturesSection', 'tracking-intelligent-features'],
  ['controllerAppExperienceSection', 'controller-app-experience'],
  ['valueForMoneySection', 'value-for-money'],
  ['portabilitySetupSpeedSection', 'portability-setup-speed'],
];

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

function readExistingSnapshot() {
  if (!hasSnapshotFile()) return null;

  try {
    return JSON.parse(fs.readFileSync(SNAPSHOT_PATH, 'utf8'));
  } catch {
    return null;
  }
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
        sectionTitle: fields.sectionTitle,
        body: fields.body,
        dataSummaryTitle: fields.dataSummaryTitle,
        dataPoints: mapMetricSet(fields.dataPoints),
        media: mapMediaGallery(fields.media),
        explanationLinkUrl: fields.explanationLinkUrl,
        explanationLinkLabel: fields.explanationLinkLabel,
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
        metricId: fields.metricId,
        label: fields.label,
        value: fields.value,
        comparisonValue: fields.comparisonValue,
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

function createSummaryDocument(text) {
  if (!text) return EMPTY_DOCUMENT;

  return {
    nodeType: 'document',
    data: {},
    content: [
      {
        nodeType: 'paragraph',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: text,
            marks: [],
            data: {},
          },
        ],
      },
    ],
  };
}

function mapAuthor(entry) {
  const fields = entry?.fields ?? {};
  if (!fields.name) return undefined;

  const avatar = transformAsset(fields.avatar, fields.name);

  return {
    name: fields.name,
    role: fields.role,
    image: avatar?.url,
    bio: fields.bio,
    linkedin: fields.linkedin,
  };
}

function mapEditorialCategory(entry) {
  const fields = entry?.fields ?? {};
  if (!fields.name || !fields.slug) return undefined;

  return {
    name: fields.name,
    slug: fields.slug,
    description: fields.description,
    color: fields.color,
  };
}

function mapScoreSection(entry, categoryId) {
  const fields = entry?.fields ?? {};
  if (typeof fields.score !== 'number') return null;

  return {
    categoryId,
    score: fields.score,
    summary: undefined,
    body: fields.body ?? createSummaryDocument(fields.summary ?? ''),
  };
}

function mapReviewArticle(entry) {
  const fields = entry?.fields ?? {};
  const hero = transformAsset(fields.featuredImage, fields.title ?? 'Drone review image');

  if (!fields.slug || !fields.title || !hero) {
    throw new Error(`Drone review article entry is missing required fields (slug/title/featuredImage).`);
  }

  const scoreBreakdown = REVIEW_SECTION_FIELDS.map(([fieldId, categoryId]) =>
    mapScoreSection(fields[fieldId], categoryId),
  ).filter(Boolean);

  return {
    slug: fields.slug,
    title: fields.title,
    manufacturer: fields.manufacturer ?? 'Unknown',
    category: 'all-rounder',
    summary: fields.excerpt ?? '',
    featuredImage: hero.url,
    featuredImageAlt: fields.featuredImageAlt ?? hero.alt,
    publishedDate: fields.publishDate ?? new Date(0).toISOString(),
    updatedDate: fields.updatedDate,
    author: mapAuthor(fields.author),
    editorialCategory: mapEditorialCategory(fields.category),
    seoTitle: fields.seoTitle,
    seoDescription: fields.seoDescription,
    readingTime: fields.readingTime,
    priceLabel: '',
    priceValue: 0,
    affiliateUrl: fields.affiliateUrl ?? 'https://www.amazon.co.uk/',
    verdict: '',
    differenceSummary: undefined,
    buyIf: pickArray(fields.bestFor).filter((item) => typeof item === 'string'),
    avoidIf: pickArray(fields.considerations).filter((item) => typeof item === 'string'),
    overallScore: fields.overallScore ?? 0,
    featured: Boolean(fields.featured),
    useCaseTags: [],
    pros: [],
    neutralFactors: [],
    cons: [],
    specs: [],
    performanceTable: [],
    benchmarkSummary: [],
    scoreBreakdown,
    testRun: {
      firmware: '',
      location: '',
      testDate: fields.publishDate ?? new Date(0).toISOString(),
      wind: '',
      temperature: '',
      light: '',
      notes: undefined,
    },
    gallery: [],
    faq: mapFaqItems(fields.faq),
    keyTakeaways: [],
    contentfulContent: EMPTY_DOCUMENT,
    relatedReviewSlugs: pickArray(fields.relatedReviews).map((item) => item?.fields?.slug).filter(Boolean),
    relatedComparisonSlugs: [],
    relatedBestPageSlugs: [],
  };
}

function mergeEntries(existingItems, fetchedItems) {
  const merged = new Map(
    pickArray(existingItems)
      .filter((item) => item && typeof item.slug === 'string')
      .map((item) => [item.slug, item]),
  );

  for (const item of pickArray(fetchedItems)) {
    if (!item || typeof item.slug !== 'string') continue;
    merged.set(item.slug, item);
  }

  return Array.from(merged.values());
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
          categoryId: resultFields.categoryId,
          label: resultFields.label,
          winner: resultFields.winner,
          summary: resultFields.summary ?? '',
          body: resultFields.body,
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

  const existingSnapshot = readExistingSnapshot() ?? {};

  const [reviewEntries, comparisonEntries, bestPageEntries] = await Promise.all([
    fetchEntries(client, CONTENT_TYPE_REVIEW),
    fetchEntries(client, CONTENT_TYPE_COMPARISON),
    fetchEntries(client, CONTENT_TYPE_BEST_PAGE),
  ]);

  const reviews = mergeEntries(existingSnapshot.reviews, reviewEntries.map(mapReviewArticle));
  const comparisons = mergeEntries(existingSnapshot.comparisons, comparisonEntries.map(mapComparison));
  const bestPages = mergeEntries(existingSnapshot.bestPages, bestPageEntries.map(mapBestPage));

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
