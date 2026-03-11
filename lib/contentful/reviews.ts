import fs from 'node:fs/promises';
import path from 'node:path';

import { cache } from 'react';

import {
  defaultBestPageWeights,
  DroneBestPage,
  DroneComparison,
  DroneReview,
  DroneReviewsSnapshot,
  RankedBestPageReview,
  ScoreCategoryId,
} from '@/data/drone-review-types';

const SNAPSHOT_PATH = path.resolve(process.cwd(), 'data/generated/contentful-drone-reviews.json');

const readSnapshot = cache(async (): Promise<DroneReviewsSnapshot> => {
  let raw: string;
  try {
    raw = await fs.readFile(SNAPSHOT_PATH, 'utf8');
  } catch (error) {
    throw new Error(
      `Missing drone review snapshot at ${SNAPSHOT_PATH}. Run "npm run content:sync" or "npm run build" first.`,
      { cause: error as Error },
    );
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Invalid JSON in drone review snapshot at ${SNAPSHOT_PATH}.`, {
      cause: error as Error,
    });
  }

  if (!parsed || typeof parsed !== 'object') {
    throw new Error(`Invalid drone review snapshot format at ${SNAPSHOT_PATH}.`);
  }

  const snapshot = parsed as Partial<DroneReviewsSnapshot>;
  const reviews = Array.isArray(snapshot.reviews) ? snapshot.reviews : [];
  const comparisons = Array.isArray(snapshot.comparisons) ? snapshot.comparisons : [];
  const bestPages = Array.isArray(snapshot.bestPages) ? snapshot.bestPages : [];

  return {
    generated_at:
      typeof snapshot.generated_at === 'string' ? snapshot.generated_at : new Date(0).toISOString(),
    reviews,
    comparisons,
    bestPages,
    reviewSlugs: Array.isArray(snapshot.reviewSlugs)
      ? snapshot.reviewSlugs
      : reviews.map((review) => review.slug),
    comparisonSlugs: Array.isArray(snapshot.comparisonSlugs)
      ? snapshot.comparisonSlugs
      : comparisons.map((comparison) => comparison.slug),
    bestPageSlugs: Array.isArray(snapshot.bestPageSlugs)
      ? snapshot.bestPageSlugs
      : bestPages.map((page) => page.slug),
  };
});

export async function getAllDroneReviews(): Promise<DroneReview[]> {
  const snapshot = await readSnapshot();
  return snapshot.reviews;
}

export async function getFeaturedDroneReviews(limit?: number): Promise<DroneReview[]> {
  const reviews = await getAllDroneReviews();
  const featured = reviews.filter((review) => review.featured);
  return typeof limit === 'number' ? featured.slice(0, limit) : featured;
}

export async function getDroneReviewBySlug(slug: string): Promise<DroneReview | undefined> {
  const reviews = await getAllDroneReviews();
  return reviews.find((review) => review.slug === slug);
}

export async function getRelatedDroneReviews(review: DroneReview, limit: number = 3): Promise<DroneReview[]> {
  const reviews = await getAllDroneReviews();
  const relatedBySlug = (review.relatedReviewSlugs ?? [])
    .map((slug) => reviews.find((candidate) => candidate.slug === slug))
    .filter((candidate): candidate is DroneReview => Boolean(candidate));

  if (relatedBySlug.length > 0) {
    return relatedBySlug.slice(0, limit);
  }

  return reviews
    .filter(
      (candidate) =>
        candidate.slug !== review.slug &&
        candidate.category === review.category,
    )
    .slice(0, limit);
}

export async function getAllDroneComparisons(): Promise<DroneComparison[]> {
  const snapshot = await readSnapshot();
  return snapshot.comparisons;
}

export async function getDroneComparisonBySlug(slug: string): Promise<DroneComparison | undefined> {
  const comparisons = await getAllDroneComparisons();
  return comparisons.find(
    (comparison) => comparison.slug === slug || (comparison.aliasSlugs ?? []).includes(slug),
  );
}

export async function getDroneComparisonCanonicalSlug(slug: string): Promise<string | undefined> {
  const comparison = await getDroneComparisonBySlug(slug);
  return comparison?.slug;
}

export async function getAllDroneBestPages(): Promise<DroneBestPage[]> {
  const snapshot = await readSnapshot();
  return snapshot.bestPages;
}

export async function getDroneBestPageBySlug(slug: string): Promise<DroneBestPage | undefined> {
  const bestPages = await getAllDroneBestPages();
  return bestPages.find((page) => page.slug === slug);
}

function getWeightedScore(review: DroneReview, weights: Partial<Record<ScoreCategoryId, number>>): number {
  const categoryMap = review.scoreBreakdown.reduce(
    (acc, score) => {
      acc[score.categoryId] = score.score;
      return acc;
    },
    {} as Partial<Record<ScoreCategoryId, number>>,
  );

  return Object.entries(weights).reduce((total, [categoryId, weight]) => {
    if (!weight) return total;
    const categoryScore = categoryMap[categoryId as ScoreCategoryId] ?? 0;
    return total + (categoryScore * weight);
  }, 0);
}

function applyBestPageFilters(reviews: DroneReview[], page: DroneBestPage): DroneReview[] {
  const {
    eligibleReviewSlugs,
    requiredUseCaseTags,
    includeManufacturers,
    excludeManufacturers,
    maxPrice,
  } = page.ruleSet;

  return reviews.filter((review) => {
    if (eligibleReviewSlugs && eligibleReviewSlugs.length > 0 && !eligibleReviewSlugs.includes(review.slug)) {
      return false;
    }

    if (requiredUseCaseTags && requiredUseCaseTags.length > 0) {
      const matchesUseCase = requiredUseCaseTags.some((tag) => review.useCaseTags.includes(tag));
      if (!matchesUseCase) return false;
    }

    if (includeManufacturers && includeManufacturers.length > 0 && !includeManufacturers.includes(review.manufacturer)) {
      return false;
    }

    if (excludeManufacturers && excludeManufacturers.includes(review.manufacturer)) {
      return false;
    }

    if (typeof maxPrice === 'number' && review.priceValue > maxPrice) {
      return false;
    }

    return true;
  });
}

function applyOverrides(
  rankedReviews: DroneReview[],
  page: DroneBestPage,
): Array<{ review: DroneReview; overrideReason?: string }> {
  const working: Array<{ review: DroneReview; overrideReason?: string }> = rankedReviews.map((review) => ({
    review,
  }));

  for (const override of page.ruleSet.overrides ?? []) {
    const currentIndex = working.findIndex((entry) => entry.review.slug === override.reviewSlug);
    if (currentIndex === -1) continue;

    const [entry] = working.splice(currentIndex, 1);
    working.splice(Math.max(0, override.position - 1), 0, {
      ...entry,
      overrideReason: override.reason,
    });
  }

  return working;
}

export async function getRankedReviewsForBestPage(page: DroneBestPage): Promise<RankedBestPageReview[]> {
  const allReviews = await getAllDroneReviews();
  const candidateReviews = applyBestPageFilters(allReviews, page);
  const weights = {
    ...defaultBestPageWeights,
    ...(page.ruleSet.scoreWeights ?? {}),
  };
  const totalWeight = Object.values(weights).reduce((sum, value) => sum + value, 0) || 1;

  const sorted = [...candidateReviews].sort((left, right) => {
    const leftScore = getWeightedScore(left, weights) / totalWeight;
    const rightScore = getWeightedScore(right, weights) / totalWeight;
    return rightScore - leftScore;
  });

  const notesBySlug = new Map(page.reviewNotes.map((note) => [note.reviewSlug, note]));

  return applyOverrides(sorted, page).flatMap((entry, index) => {
      const note = notesBySlug.get(entry.review.slug);
      if (!note) return [];

      const computedScore = Number((getWeightedScore(entry.review, weights) / totalWeight).toFixed(1));
      return [
        {
          review: entry.review,
          position: index + 1,
          computedScore,
          award: note.award,
          whyThisPick: note.whyThisPick,
          whoShouldSkipIt: note.whoShouldSkipIt,
          overrideReason: entry.overrideReason,
        } satisfies RankedBestPageReview,
      ];
    });
}

export async function getLatestDroneReviewEntries(limit: number = 3): Promise<DroneReview[]> {
  const reviews = await getAllDroneReviews();
  return [...reviews]
    .sort(
      (left, right) =>
        new Date(right.updatedDate ?? right.publishedDate).getTime()
        - new Date(left.updatedDate ?? left.publishedDate).getTime(),
    )
    .slice(0, limit);
}
