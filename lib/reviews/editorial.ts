import { BLOCKS, Document } from '@contentful/rich-text-types';

import {
  DroneComparisonCategoryResult,
  DroneMetricSetItem,
  DroneReview,
  ReviewMetricId,
  ReviewScoreBreakdown,
  ScoreCategoryId,
  getScoreCategoryDefinition,
} from '@/data/drone-review-types';

interface ReviewMetricDefinition {
  id: ReviewMetricId;
  helpText: string;
  aliases: string[];
}

export interface ComparisonPerformanceRow {
  id: string;
  label: string;
  helpText?: string;
  leftValue: string;
  rightValue: string;
  notes?: string;
}

export interface ScoreCategoryStats {
  average: number;
  best: number;
  worst: number;
}

const metricDefinitions: ReviewMetricDefinition[] = [
  {
    id: 'median-real-flight-time',
    helpText:
      'Median real flight time is the middle result across the repeated mixed-use battery runs. It gives a more dependable picture than a single best-case flight.',
    aliases: ['median real flight time', 'real flight time', 'battery endurance'],
  },
  {
    id: 'hover-drift-moderate-wind',
    helpText:
      'Hover drift records how much the drone wanders or visibly corrects in moderate wind while holding a fixed position over the same marked area.',
    aliases: ['hover drift in moderate wind', 'hover drift', 'wind stability'],
  },
  {
    id: 'tracking-success',
    helpText:
      'Tracking success reflects how well the drone kept, framed, and reacquired the same moving subject on repeated walking or cycling routes.',
    aliases: ['tracking success', 'tracking', 'dynamic tracking feel'],
  },
  {
    id: 'bag-to-air-time',
    helpText:
      'Bag-to-air time is the real setup time from packed kit to takeoff-ready, including unfolding, controller startup, and GPS acquisition.',
    aliases: ['bag-to-air time', 'bag to air time'],
  },
  {
    id: 'camera-setup',
    helpText:
      'Camera setup describes the hardware configuration being tested, which changes how much flexibility and image headroom the drone offers.',
    aliases: ['camera setup'],
  },
  {
    id: 'claimed-flight-time',
    helpText:
      'Claimed flight time is the manufacturer headline figure. It is useful context, but it is not the same thing as real mixed-use endurance.',
    aliases: ['claimed flight time'],
  },
  {
    id: 'weight',
    helpText:
      'Weight affects travel friendliness, wind behaviour, and sometimes regulatory convenience depending on the class of drone.',
    aliases: ['weight'],
  },
  {
    id: 'obstacle-sensing',
    helpText:
      'Obstacle sensing describes the direction and coverage of the drone’s safety sensors. Coverage affects how much help the drone can offer before a mistake becomes expensive.',
    aliases: ['obstacle sensing'],
  },
  {
    id: 'test-lighting',
    helpText:
      'Lighting conditions are logged so the image-quality results can be compared fairly across drones and across daylight versus low-light retests.',
    aliases: ['test lighting', 'light conditions'],
  },
  {
    id: 'wind-conditions',
    helpText:
      'Wind conditions are logged because they directly affect flight behaviour, hover precision, footage stability, and overall confidence.',
    aliases: ['wind conditions'],
  },
  {
    id: 'firmware-tested',
    helpText:
      'Firmware version matters because smart features, safety behaviour, and camera processing can change over time.',
    aliases: ['firmware tested', 'firmware'],
  },
  {
    id: 'price-positioning',
    helpText:
      'Price positioning gives fast context on where the drone sits in the market before you weigh that against its performance.',
    aliases: ['price positioning', 'price label'],
  },
  {
    id: 'travel-footprint',
    helpText:
      'Travel footprint is the practical burden of carrying the drone, controller, and batteries when you actually leave the house with it.',
    aliases: ['travel footprint', 'portability'],
  },
  {
    id: 'setup-friction',
    helpText:
      'Setup friction is a shorthand for how fiddly or immediate the drone feels between opening the bag and getting a clean takeoff.',
    aliases: ['setup friction', 'setup complexity'],
  },
  {
    id: 'safety-profile',
    helpText:
      'Safety profile is a summary judgment on how reassuring the drone feels once you combine sensing coverage, warnings, braking, and return-to-home behaviour.',
    aliases: ['safety profile'],
  },
  {
    id: 'controller-experience',
    helpText:
      'Controller experience covers ergonomics, screen visibility, app clarity, and how polished the overall control layer feels in the field.',
    aliases: ['controller experience', 'controller and app experience'],
  },
  {
    id: 'specialist-fit',
    helpText:
      'Specialist fit flags when a drone is tuned for a narrower purpose rather than broad all-round consumer use.',
    aliases: ['specialist fit', 'best fit', 'launch position'],
  },
];

function normalizeKey(value: string): string {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function createMetricItem(
  label: string,
  value: string | undefined,
  notes?: string,
  metricId?: ReviewMetricId,
): DroneMetricSetItem | null {
  if (!value) return null;
  return { label, value, notes, metricId };
}

function findSpec(review: DroneReview, label: string): string | undefined {
  return review.specs.find((item) => normalizeKey(item.label) === normalizeKey(label))?.value;
}

function findMetric(review: DroneReview, label: string): DroneMetricSetItem | undefined {
  return review.benchmarkSummary.find((item) => normalizeKey(item.label) === normalizeKey(label));
}

function getQualitativeBand(score: number, bands: [number, string][]): string {
  for (const [threshold, label] of bands) {
    if (score >= threshold) return label;
  }
  return bands[bands.length - 1]?.[1] ?? '';
}

function getFirstParagraphText(content: Document): string | undefined {
  const paragraph = content?.content?.find((node) => node.nodeType === BLOCKS.PARAGRAPH);
  const text = paragraph?.content
    ?.map((child) => ('value' in child ? child.value : ''))
    .join('')
    .trim();

  return text || undefined;
}

export function resolveMetricId(metricId: string | undefined, label: string): ReviewMetricId | undefined {
  if (metricId) return metricId as ReviewMetricId;

  const normalized = normalizeKey(label);
  const match = metricDefinitions.find((definition) =>
    definition.aliases.some((alias) => normalizeKey(alias) === normalized),
  );

  return match?.id;
}

export function getMetricHelpText(metric: Pick<DroneMetricSetItem, 'metricId' | 'label'>): string | undefined {
  const resolvedId = resolveMetricId(metric.metricId, metric.label);
  return metricDefinitions.find((definition) => definition.id === resolvedId)?.helpText;
}

export function getReviewDifferenceSummary(review: DroneReview): string {
  return review.differenceSummary ?? getFirstParagraphText(review.contentfulContent) ?? review.verdict;
}

export function getReviewPerformanceTable(review: DroneReview): DroneMetricSetItem[] {
  const source = review.performanceTable && review.performanceTable.length > 0
    ? review.performanceTable
    : review.benchmarkSummary;

  return source.map((item) => ({
    ...item,
    metricId: resolveMetricId(item.metricId, item.label),
  }));
}

export function getReviewScoreByCategory(
  review: DroneReview,
  categoryId: ScoreCategoryId,
): ReviewScoreBreakdown | undefined {
  return review.scoreBreakdown.find((entry) => entry.categoryId === categoryId);
}

export function getComparisonCategoryId(result: DroneComparisonCategoryResult): ScoreCategoryId | undefined {
  if (result.categoryId) return result.categoryId;

  const normalized = normalizeKey(result.label);
  if (normalized.includes('camera') || normalized.includes('image')) return 'camera-image-quality';
  if (normalized.includes('wind') || normalized.includes('flight')) return 'flight-performance-wind-stability';
  if (normalized.includes('battery')) return 'battery-real-flight-time';
  if (normalized.includes('safety') || normalized.includes('obstacle')) return 'safety-obstacle-avoidance';
  if (normalized.includes('beginner') || normalized.includes('ease')) return 'ease-of-use';
  if (normalized.includes('tracking') || normalized.includes('feature')) return 'tracking-intelligent-features';
  if (normalized.includes('controller') || normalized.includes('app')) return 'controller-app-experience';
  if (normalized.includes('value')) return 'value-for-money';
  if (normalized.includes('portability') || normalized.includes('travel')) return 'portability-setup-speed';
  return undefined;
}

export function getReviewDataPoints(review: DroneReview, score: ReviewScoreBreakdown): DroneMetricSetItem[] {
  if (score.dataPoints && score.dataPoints.length > 0) {
    return score.dataPoints.map((item) => ({
      ...item,
      metricId: resolveMetricId(item.metricId, item.label),
    }));
  }

  const medianFlightTime = findMetric(review, 'Median Real Flight Time');
  const hoverDrift = findMetric(review, 'Hover Drift In Moderate Wind');
  const trackingSuccess = findMetric(review, 'Tracking Success') ?? findMetric(review, 'Dynamic Tracking Feel');
  const bagToAir = findMetric(review, 'Bag-To-Air Time');

  const fallbackByCategory: Record<ScoreCategoryId, Array<DroneMetricSetItem | null>> = {
    'camera-image-quality': [
      createMetricItem('Camera setup', findSpec(review, 'Camera Setup'), undefined, 'camera-setup'),
      createMetricItem('Test lighting', review.testRun.light, undefined, 'test-lighting'),
      createMetricItem(
        'Field note',
        getQualitativeBand(score.score, [
          [9.2, 'Excellent'],
          [8.6, 'Very strong'],
          [7.8, 'Good'],
          [0, 'Mixed'],
        ]),
        score.summary,
      ),
    ],
    'flight-performance-wind-stability': [
      hoverDrift
        ? {
            ...hoverDrift,
            metricId: resolveMetricId(hoverDrift.metricId, hoverDrift.label),
          }
        : null,
      createMetricItem('Wind conditions', review.testRun.wind, undefined, 'wind-conditions'),
      createMetricItem('Weight', findSpec(review, 'Weight'), undefined, 'weight'),
    ],
    'battery-real-flight-time': [
      medianFlightTime
        ? {
            ...medianFlightTime,
            metricId: resolveMetricId(medianFlightTime.metricId, medianFlightTime.label),
          }
        : null,
      createMetricItem('Claimed flight time', findSpec(review, 'Claimed Flight Time'), undefined, 'claimed-flight-time'),
      createMetricItem('Temperature', review.testRun.temperature),
    ],
    'safety-obstacle-avoidance': [
      createMetricItem('Obstacle sensing', findSpec(review, 'Obstacle Sensing'), undefined, 'obstacle-sensing'),
      createMetricItem(
        'Safety profile',
        getQualitativeBand(score.score, [
          [9.0, 'Very reassuring'],
          [8.4, 'Reassuring'],
          [7.6, 'Good'],
          [0, 'Basic'],
        ]),
        score.summary,
        'safety-profile',
      ),
      createMetricItem('Firmware tested', review.testRun.firmware, undefined, 'firmware-tested'),
    ],
    'ease-of-use': [
      bagToAir
        ? {
            ...bagToAir,
            metricId: resolveMetricId(bagToAir.metricId, bagToAir.label),
          }
        : null,
      createMetricItem(
        'Setup friction',
        getQualitativeBand(score.score, [
          [9.0, 'Very low'],
          [8.4, 'Low'],
          [7.5, 'Moderate'],
          [0, 'High'],
        ]),
        review.testRun.notes,
        'setup-friction',
      ),
      createMetricItem('Test location', review.testRun.location),
    ],
    'tracking-intelligent-features': [
      trackingSuccess
        ? {
            ...trackingSuccess,
            metricId: resolveMetricId(trackingSuccess.metricId, trackingSuccess.label),
          }
        : null,
      createMetricItem('Test route', review.testRun.location),
      createMetricItem('Field note', getQualitativeBand(score.score, [
        [9.0, 'Very dependable'],
        [8.4, 'Dependable'],
        [7.5, 'Usable'],
        [0, 'Limited'],
      ])),
    ],
    'controller-app-experience': [
      createMetricItem(
        'Controller experience',
        getQualitativeBand(score.score, [
          [9.0, 'Polished'],
          [8.4, 'Very good'],
          [7.5, 'Good'],
          [0, 'Functional'],
        ]),
        score.summary,
        'controller-experience',
      ),
      bagToAir
        ? {
            ...bagToAir,
            metricId: resolveMetricId(bagToAir.metricId, bagToAir.label),
          }
        : null,
      createMetricItem('Firmware tested', review.testRun.firmware, undefined, 'firmware-tested'),
    ],
    'value-for-money': [
      createMetricItem('Price positioning', review.priceLabel, undefined, 'price-positioning'),
      createMetricItem('Best fit', findSpec(review, 'Best Fit'), undefined, 'specialist-fit'),
      createMetricItem('Launch position', findSpec(review, 'Launch Position'), undefined, 'specialist-fit'),
    ],
    'portability-setup-speed': [
      createMetricItem('Weight', findSpec(review, 'Weight'), undefined, 'weight'),
      bagToAir
        ? {
            ...bagToAir,
            metricId: resolveMetricId(bagToAir.metricId, bagToAir.label),
          }
        : null,
      createMetricItem('Travel footprint', findSpec(review, 'Best Fit'), undefined, 'travel-footprint'),
    ],
  };

  return fallbackByCategory[score.categoryId].filter((item): item is DroneMetricSetItem => Boolean(item));
}

export function getComparisonPerformanceRows(
  leftReview: DroneReview,
  rightReview: DroneReview,
): ComparisonPerformanceRow[] {
  const leftMetrics = getReviewPerformanceTable(leftReview);
  const rightMetrics = getReviewPerformanceTable(rightReview);
  const rightById = new Map<string, DroneMetricSetItem>();

  for (const item of rightMetrics) {
    const id = resolveMetricId(item.metricId, item.label) ?? normalizeKey(item.label);
    rightById.set(id, item);
  }

  const rows: ComparisonPerformanceRow[] = [];
  const seen = new Set<string>();

  for (const item of leftMetrics) {
    const id = resolveMetricId(item.metricId, item.label) ?? normalizeKey(item.label);
    const matchingRight = rightById.get(id);
    rows.push({
      id,
      label: item.label,
      helpText: getMetricHelpText(item),
      leftValue: item.value,
      rightValue: matchingRight?.comparisonValue ?? matchingRight?.value ?? '—',
      notes: item.notes ?? matchingRight?.notes,
    });
    seen.add(id);
  }

  for (const item of rightMetrics) {
    const id = resolveMetricId(item.metricId, item.label) ?? normalizeKey(item.label);
    if (seen.has(id)) continue;
    rows.push({
      id,
      label: item.label,
      helpText: getMetricHelpText(item),
      leftValue: '—',
      rightValue: item.value,
      notes: item.notes,
    });
  }

  return rows.slice(0, 6);
}

export function getComparisonMethodology(result: DroneComparisonCategoryResult) {
  const categoryId = getComparisonCategoryId(result);
  if (!categoryId) return null;

  const definition = getScoreCategoryDefinition(categoryId);
  return {
    categoryId,
    label: definition.label,
    whatIsThis: definition.whatIsThis,
    whyItMatters: definition.whyItMatters,
    dataSummaryHelpText: definition.testSummary,
  };
}

export function getScoreCategoryStats(
  reviews: DroneReview[],
  categoryId: ScoreCategoryId,
): ScoreCategoryStats | null {
  const values = reviews
    .map((review) => getReviewScoreByCategory(review, categoryId)?.score)
    .filter((value): value is number => typeof value === 'number');

  if (values.length === 0) return null;

  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
  const best = Math.max(...values);
  const worst = Math.min(...values);

  return {
    average: Number(average.toFixed(1)),
    best: Number(best.toFixed(1)),
    worst: Number(worst.toFixed(1)),
  };
}

export function getScoreSummaryTitle(label: string): string {
  return `${label} Score Summary`;
}
