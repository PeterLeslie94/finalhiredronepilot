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

export type ReviewMetricId =
  | 'median-real-flight-time'
  | 'hover-drift-moderate-wind'
  | 'tracking-success'
  | 'bag-to-air-time'
  | 'camera-setup'
  | 'claimed-flight-time'
  | 'weight'
  | 'obstacle-sensing'
  | 'test-lighting'
  | 'wind-conditions'
  | 'firmware-tested'
  | 'price-positioning'
  | 'travel-footprint'
  | 'setup-friction'
  | 'safety-profile'
  | 'controller-experience'
  | 'specialist-fit'
  | (string & {});

export interface ScoreCategoryDefinition {
  id: ScoreCategoryId;
  label: string;
  weight: number;
  description: string;
  whatIsThis: string;
  whyItMatters: string;
  testSummary: string;
}

export interface ReviewScoreBreakdown {
  categoryId: ScoreCategoryId;
  score: number;
  summary?: string;
  sectionTitle?: string;
  body?: Document;
  dataSummaryTitle?: string;
  dataPoints?: DroneMetricSetItem[];
  media?: ReviewMediaItem[];
  explanationLinkUrl?: string;
  explanationLinkLabel?: string;
}

export interface DroneReviewAuthor {
  name: string;
  role?: string;
  image?: string;
  bio?: string;
  linkedin?: string;
}

export interface DroneReviewEditorialCategory {
  slug: string;
  name: string;
  description?: string;
  color?: string;
}

export interface DroneSpecSheetItem {
  label: string;
  value: string;
}

export interface DroneMetricSetItem {
  metricId?: ReviewMetricId;
  label: string;
  value: string;
  comparisonValue?: string;
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
  author?: DroneReviewAuthor;
  editorialCategory?: DroneReviewEditorialCategory;
  seoTitle?: string;
  seoDescription?: string;
  readingTime?: number;
  priceLabel: string;
  priceValue: number;
  affiliateUrl: string;
  verdict: string;
  differenceSummary?: string;
  buyIf: string[];
  avoidIf: string[];
  overallScore: number;
  featured: boolean;
  useCaseTags: string[];
  pros: string[];
  neutralFactors?: string[];
  cons: string[];
  specs: DroneSpecSheetItem[];
  performanceTable?: DroneMetricSetItem[];
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
  categoryId?: ScoreCategoryId;
  label: string;
  winner: 'left' | 'right' | 'tie';
  summary: string;
  body?: Document;
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
    whatIsThis:
      'This score reflects how good the drone’s photos and videos actually look in real-world use. We assess detail, dynamic range, colour, low-light behaviour, and stabilisation across the same repeatable scenes.',
    whyItMatters:
      'Camera performance is the main reason many buyers move beyond a casual first drone. Better image quality gives you more usable files, more flexibility in editing, and fewer situations where the footage falls apart once conditions change.',
    testSummary:
      'Run the same daylight and low-light photo/video scenes on every drone and compare detail, dynamic range, colour, noise, and processing.',
  },
  {
    id: 'flight-performance-wind-stability',
    label: 'Flight Performance & Wind Stability',
    weight: 15,
    description:
      'How confident, responsive, and stable the drone feels in the air, especially when hovering, braking, and dealing with wind.',
    whatIsThis:
      'This score measures how planted, responsive, and confidence-inspiring the drone feels once it is airborne. It covers hover behaviour, braking, control smoothness, and how calm the platform stays once the wind starts to matter.',
    whyItMatters:
      'A drone that feels nervous in the air is harder to trust and harder to shoot with consistently. Strong flight behaviour means cleaner footage, fewer corrections, and less stress when the conditions are not perfect.',
    testSummary:
      'Use the same hover, forward, lateral, ascent, descent, and braking passes in light and moderate wind to score drift, control, and footage stability.',
  },
  {
    id: 'battery-real-flight-time',
    label: 'Battery & Real Flight Time',
    weight: 12,
    description:
      'The drone’s actual usable endurance in practice rather than the headline number on the box, plus battery charging and ownership practicality.',
    whatIsThis:
      'This score tracks the drone’s real-world endurance rather than the optimistic claim on the box. It reflects how long the drone actually stays useful in mixed shooting, plus how practical the battery system feels overall.',
    whyItMatters:
      'Flight time affects how often you land, swap batteries, and lose momentum in the field. Better endurance means fewer interruptions, more usable takes per session, and a less frustrating ownership experience.',
    testSummary:
      'Fly three mixed-use battery runs from full charge to the defined cutoff and record the best, worst, and median real-world endurance.',
  },
  {
    id: 'safety-obstacle-avoidance',
    label: 'Safety & Obstacle Avoidance',
    weight: 12,
    description:
      'How well the drone protects the pilot from avoidable mistakes through warnings, braking behaviour, sensing coverage, and return-to-home confidence.',
    whatIsThis:
      'This score covers the safety systems that help prevent avoidable mistakes, including sensing coverage, warning behaviour, braking, and return-to-home confidence.',
    whyItMatters:
      'Strong safety systems reduce the chances of an expensive error and make the drone less intimidating to fly. They matter even more when you are shooting in unfamiliar places or learning how much you can trust the aircraft.',
    testSummary:
      'Run controlled obstacle and return-to-home checks in a safe open area, logging warnings, stopping distance, rerouting, and confidence.',
  },
  {
    id: 'ease-of-use',
    label: 'Ease of Use',
    weight: 10,
    description:
      'How simple it is to get the drone ready, understand the menus, and fly well without unnecessary setup friction.',
    whatIsThis:
      'This score measures how easy the drone is to live with from the moment you unpack it. It covers setup friction, menu clarity, onboarding, and how quickly a normal buyer can start flying confidently.',
    whyItMatters:
      'Ease of use changes how often the drone actually gets used. If setup is awkward or the software feels unclear, the drone becomes a chore rather than something you want to take out regularly.',
    testSummary:
      'Time the setup process from bag to launch, note menu clarity, and judge whether a normal buyer could get comfortable quickly.',
  },
  {
    id: 'tracking-intelligent-features',
    label: 'Tracking & Intelligent Features',
    weight: 10,
    description:
      'How reliable and genuinely useful the drone’s automated subject-tracking and smart flight features are in real use.',
    whatIsThis:
      'This score looks at how dependable and useful the drone’s smart tools are in practice, especially subject tracking, automated framing, and follow modes.',
    whyItMatters:
      'Intelligent features can make solo shooting much easier, but only if they work reliably. Good tracking expands what you can film alone; bad tracking creates false confidence and missed footage.',
    testSummary:
      'Run the same walking or cycling route with turns and partial occlusion, then score subject retention, framing, reacquisition, and mode usefulness.',
  },
  {
    id: 'controller-app-experience',
    label: 'Controller & App Experience',
    weight: 8,
    description:
      'How polished the overall control experience feels, including controller comfort, app layout, connection stability, and live-view usability.',
    whatIsThis:
      'This score focuses on the control layer around the drone: controller ergonomics, live view quality, app layout, telemetry clarity, and connection stability outdoors.',
    whyItMatters:
      'A good aircraft can still be frustrating if the controller or app gets in the way. The smoother this experience feels, the easier it is to stay focused on the shot rather than the interface.',
    testSummary:
      'Assess ergonomics, screen visibility, lag, map/telemetry usefulness, connection reliability, and overall app friction in normal outdoor use.',
  },
  {
    id: 'value-for-money',
    label: 'Value for Money',
    weight: 8,
    description:
      'What the drone actually delivers relative to its price, including features, camera performance, battery ecosystem cost, and buyer tradeoffs.',
    whatIsThis:
      'This score weighs the drone’s real performance against what it costs to buy and live with. It includes the feature set, camera output, battery ecosystem, and how much headroom you get for the money.',
    whyItMatters:
      'Value is not about finding the cheapest drone. It is about whether the performance jump is obvious enough to justify the spend once you compare it with the nearest alternatives.',
    testSummary:
      'Compare real performance against price, included accessories, upgrade costs, and whether a cheaper alternative covers most of the same ground.',
  },
  {
    id: 'portability-setup-speed',
    label: 'Portability & Setup Speed',
    weight: 5,
    description:
      'How easy the drone is to carry, pack, unpack, and relaunch when you want to fly without friction.',
    whatIsThis:
      'This score reflects how easy the drone is to carry, unpack, and relaunch without friction. It combines folded footprint, kit burden, and how quickly the drone can go from packed to airborne.',
    whyItMatters:
      'Portability shapes whether the drone makes it into your bag in the first place. Fast, low-friction setup matters for travellers and casual owners because convenience often determines how much a drone actually gets flown.',
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

export const reviewScoreCategoryOrder: ScoreCategoryId[] = scoreCategoryDefinitions.map(
  (category) => category.id,
);
