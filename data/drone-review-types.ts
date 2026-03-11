import { Document } from '@contentful/rich-text-types';

export type ScoreCategoryId =
  | 'camera-image-quality'
  | 'flight-performance-wind-stability'
  | 'battery-real-flight-time'
  | 'safety-obstacle-avoidance'
  | 'ease-of-use'
  | 'tracking-intelligent-features'
  | 'controller-app-experience'
  | 'value-for-money'
  | 'portability-setup-speed';

export type DroneReviewCategory =
  | 'beginner'
  | 'camera'
  | 'travel'
  | 'fpv'
  | 'all-rounder'
  | 'specialist';

export interface ScoreCategoryDefinition {
  id: ScoreCategoryId;
  label: string;
  weight: number;
  description: string;
  testSummary: string;
}

export interface ReviewScoreBreakdown {
  categoryId: ScoreCategoryId;
  score: number;
  summary: string;
}

export interface DroneSpecSheetItem {
  label: string;
  value: string;
}

export interface DroneMetricSetItem {
  label: string;
  value: string;
  notes?: string;
}

export interface ReviewMediaItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DroneTestRun {
  firmware: string;
  location: string;
  testDate: string;
  wind: string;
  temperature: string;
  light: string;
  notes?: string;
}

export interface DroneReview {
  slug: string;
  title: string;
  manufacturer: string;
  category: DroneReviewCategory;
  summary: string;
  featuredImage: string;
  featuredImageAlt: string;
  publishedDate: string;
  updatedDate?: string;
  priceLabel: string;
  priceValue: number;
  affiliateUrl: string;
  verdict: string;
  buyIf: string[];
  avoidIf: string[];
  overallScore: number;
  featured: boolean;
  useCaseTags: string[];
  pros: string[];
  cons: string[];
  specs: DroneSpecSheetItem[];
  benchmarkSummary: DroneMetricSetItem[];
  scoreBreakdown: ReviewScoreBreakdown[];
  testRun: DroneTestRun;
  gallery: ReviewMediaItem[];
  faq: FAQItem[];
  keyTakeaways?: string[];
  contentfulContent: Document;
  relatedReviewSlugs?: string[];
  relatedComparisonSlugs?: string[];
  relatedBestPageSlugs?: string[];
}

export interface DroneComparisonCategoryResult {
  label: string;
  winner: 'left' | 'right' | 'tie';
  summary: string;
}

export interface DroneComparison {
  slug: string;
  aliasSlugs?: string[];
  title: string;
  excerpt: string;
  publishedDate: string;
  updatedDate?: string;
  leftReviewSlug: string;
  rightReviewSlug: string;
  winnerReviewSlug: string;
  winnerSummary: string;
  leftBuyIf: string;
  rightBuyIf: string;
  priceNote?: string;
  categoryResults: DroneComparisonCategoryResult[];
  faq: FAQItem[];
  keyTakeaways?: string[];
  contentfulContent: Document;
  relatedBestPageSlugs?: string[];
}

export interface BestPageOverride {
  reviewSlug: string;
  position: number;
  reason: string;
}

export interface BestPageRuleSet {
  requiredUseCaseTags?: string[];
  eligibleReviewSlugs?: string[];
  includeManufacturers?: string[];
  excludeManufacturers?: string[];
  maxPrice?: number;
  scoreWeights?: Partial<Record<ScoreCategoryId, number>>;
  overrides?: BestPageOverride[];
}

export interface DroneBestPageReviewNote {
  reviewSlug: string;
  award: string;
  whyThisPick: string;
  whoShouldSkipIt: string;
}

export interface DroneBestPage {
  slug: string;
  title: string;
  excerpt: string;
  targetKeyword: string;
  publishedDate: string;
  updatedDate?: string;
  intro: string;
  methodologySummary: string;
  keyTakeaways?: string[];
  faq: FAQItem[];
  ruleSet: BestPageRuleSet;
  reviewNotes: DroneBestPageReviewNote[];
  contentfulContent: Document;
}

export interface DroneReviewsSnapshot {
  generated_at: string;
  reviews: DroneReview[];
  comparisons: DroneComparison[];
  bestPages: DroneBestPage[];
  reviewSlugs: string[];
  comparisonSlugs: string[];
  bestPageSlugs: string[];
}

export interface RankedBestPageReview {
  review: DroneReview;
  position: number;
  computedScore: number;
  award: string;
  whyThisPick: string;
  whoShouldSkipIt: string;
  overrideReason?: string;
}

export const scoreCategoryDefinitions: ScoreCategoryDefinition[] = [
  {
    id: 'camera-image-quality',
    label: 'Camera & Image Quality',
    weight: 20,
    description:
      'How good the drone’s photos and videos look in real-world use, including detail, dynamic range, colour, low-light behaviour, and stabilisation.',
    testSummary:
      'Run the same daylight and low-light photo/video scenes on every drone and compare detail, dynamic range, colour, noise, and processing.',
  },
  {
    id: 'flight-performance-wind-stability',
    label: 'Flight Performance & Wind Stability',
    weight: 15,
    description:
      'How confident, responsive, and stable the drone feels in the air, especially when hovering, braking, and dealing with wind.',
    testSummary:
      'Use the same hover, forward, lateral, ascent, descent, and braking passes in light and moderate wind to score drift, control, and footage stability.',
  },
  {
    id: 'battery-real-flight-time',
    label: 'Battery & Real Flight Time',
    weight: 12,
    description:
      'The drone’s actual usable endurance in practice rather than the headline number on the box, plus battery charging and ownership practicality.',
    testSummary:
      'Fly three mixed-use battery runs from full charge to the defined cutoff and record the best, worst, and median real-world endurance.',
  },
  {
    id: 'safety-obstacle-avoidance',
    label: 'Safety & Obstacle Avoidance',
    weight: 12,
    description:
      'How well the drone protects the pilot from avoidable mistakes through warnings, braking behaviour, sensing coverage, and return-to-home confidence.',
    testSummary:
      'Run controlled obstacle and return-to-home checks in a safe open area, logging warnings, stopping distance, rerouting, and confidence.',
  },
  {
    id: 'ease-of-use',
    label: 'Ease of Use',
    weight: 10,
    description:
      'How simple it is to get the drone ready, understand the menus, and fly well without unnecessary setup friction.',
    testSummary:
      'Time the setup process from bag to launch, note menu clarity, and judge whether a normal buyer could get comfortable quickly.',
  },
  {
    id: 'tracking-intelligent-features',
    label: 'Tracking & Intelligent Features',
    weight: 10,
    description:
      'How reliable and genuinely useful the drone’s automated subject-tracking and smart flight features are in real use.',
    testSummary:
      'Run the same walking or cycling route with turns and partial occlusion, then score subject retention, framing, reacquisition, and mode usefulness.',
  },
  {
    id: 'controller-app-experience',
    label: 'Controller & App Experience',
    weight: 8,
    description:
      'How polished the overall control experience feels, including controller comfort, app layout, connection stability, and live-view usability.',
    testSummary:
      'Assess ergonomics, screen visibility, lag, map/telemetry usefulness, connection reliability, and overall app friction in normal outdoor use.',
  },
  {
    id: 'value-for-money',
    label: 'Value for Money',
    weight: 8,
    description:
      'What the drone actually delivers relative to its price, including features, camera performance, battery ecosystem cost, and buyer tradeoffs.',
    testSummary:
      'Compare real performance against price, included accessories, upgrade costs, and whether a cheaper alternative covers most of the same ground.',
  },
  {
    id: 'portability-setup-speed',
    label: 'Portability & Setup Speed',
    weight: 5,
    description:
      'How easy the drone is to carry, pack, unpack, and relaunch when you want to fly without friction.',
    testSummary:
      'Measure folded size, kit burden, travel friendliness, and how quickly the drone can go from packed to airborne.',
  },
];

export const defaultBestPageWeights = scoreCategoryDefinitions.reduce(
  (weights, category) => {
    weights[category.id] = category.weight;
    return weights;
  },
  {} as Record<ScoreCategoryId, number>,
);

export function getScoreCategoryDefinition(id: ScoreCategoryId): ScoreCategoryDefinition {
  const match = scoreCategoryDefinitions.find((category) => category.id === id);
  if (!match) {
    throw new Error(`Unknown score category: ${id}`);
  }
  return match;
}
