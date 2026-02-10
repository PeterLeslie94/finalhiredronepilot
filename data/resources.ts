// ===== Calculator Types =====
export interface Calculator {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

export const calculators: Calculator[] = [
  {
    slug: 'survey-cost-estimator',
    title: 'Drone Survey Cost Estimator',
    shortDescription: 'Get an instant estimate for your drone survey project based on site size and requirements.',
    description: 'Our interactive cost estimator helps you budget for your drone survey project. Enter your site details to receive an indicative price range, then request a formal quote for accurate pricing.',
    icon: 'Calculator',
    features: [
      'Site size based pricing',
      'Multiple deliverable options',
      'Instant price range estimate',
      'Request formal quote option',
    ],
    seoTitle: 'Drone Survey Cost Calculator | Instant Price Estimates UK',
    seoDescription: 'Calculate drone survey costs instantly. Get accurate price estimates based on site size, deliverables, and requirements. Free tool from UK drone survey experts.',
    seoKeywords: ['drone survey cost', 'drone survey price', 'aerial survey cost calculator', 'UK drone survey pricing'],
  },
  {
    slug: 'flight-time-calculator',
    title: 'Drone Flight Time Calculator',
    shortDescription: 'Calculate estimated flight time and battery requirements for your survey project.',
    description: 'Plan your drone survey operation with our flight time calculator. Estimate coverage rates, battery requirements, and total flight time based on your site specifications.',
    icon: 'Clock',
    features: [
      'Multiple drone models',
      'Weather conditions factor',
      'Battery count estimation',
      'Coverage rate calculation',
    ],
    seoTitle: 'Drone Flight Time Calculator | Plan Your Survey Operation',
    seoDescription: 'Calculate drone flight times for survey operations. Factor in area coverage, drone model, and conditions. Free planning tool for UK drone surveys.',
    seoKeywords: ['drone flight time', 'drone battery calculator', 'survey flight planning', 'drone coverage calculator'],
  },
  {
    slug: 'roi-calculator',
    title: 'Drone Survey ROI Calculator',
    shortDescription: 'Compare drone surveys vs traditional methods and calculate your potential savings.',
    description: 'Discover the cost benefits of drone surveying over traditional methods. Compare time savings, cost reductions, and safety improvements with our ROI calculator.',
    icon: 'TrendingUp',
    features: [
      'Traditional vs drone comparison',
      'Time savings calculation',
      'Cost savings estimate',
      'Safety benefit valuation',
    ],
    seoTitle: 'Drone Survey ROI Calculator | Cost Savings Analysis UK',
    seoDescription: 'Calculate ROI for drone surveys vs traditional methods. See potential savings in time, cost, and safety. Free comparison tool for UK projects.',
    seoKeywords: ['drone survey ROI', 'drone vs traditional survey cost', 'aerial survey savings', 'drone survey benefits'],
  },
  {
    slug: 'area-measurement-tool',
    title: 'Area Measurement Tool',
    shortDescription: 'Draw and calculate the area of your site to help estimate survey requirements.',
    description: 'Our interactive area measurement tool helps you calculate site dimensions for drone survey planning. Draw your site boundary and get instant area calculations in multiple units.',
    icon: 'Ruler',
    features: [
      'Interactive map drawing',
      'Multiple unit conversions',
      'Perimeter calculation',
      'Export measurements',
    ],
    seoTitle: 'Site Area Measurement Tool | Calculate Survey Coverage UK',
    seoDescription: 'Measure your site area online for drone survey planning. Draw boundaries, calculate hectares, and estimate coverage. Free tool for UK projects.',
    seoKeywords: ['site area calculator', 'land measurement tool', 'hectare calculator', 'survey area measurement'],
  },
];

export function getCalculatorBySlug(slug: string): Calculator | undefined {
  return calculators.find((c) => c.slug === slug);
}

// ===== Video Types =====
export type VideoCategory = 'tutorial' | 'case-study' | 'explainer' | 'equipment';

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeId: string;
  duration: string;
  category: VideoCategory;
  tags: string[];
  publishedDate: string;
}

export const videoCategories: { slug: VideoCategory; name: string }[] = [
  { slug: 'tutorial', name: 'Tutorials' },
  { slug: 'case-study', name: 'Case Studies' },
  { slug: 'explainer', name: 'Explainers' },
  { slug: 'equipment', name: 'Equipment' },
];

export const videos: Video[] = [
  {
    id: 'intro-drone-surveying',
    title: 'Introduction to Drone Surveying',
    description: 'Learn the fundamentals of professional drone surveying and how it compares to traditional methods.',
    thumbnail: '/images/resources/videos/intro-surveying-thumb.avif',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '8:45',
    category: 'explainer',
    tags: ['beginner', 'surveying basics'],
    publishedDate: '2024-01-15',
  },
  {
    id: 'photogrammetry-explained',
    title: 'Photogrammetry Explained: From Photos to 3D Models',
    description: 'Understand how aerial photographs are transformed into accurate 3D models and maps.',
    thumbnail: '/images/resources/videos/photogrammetry-thumb.avif',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '12:30',
    category: 'tutorial',
    tags: ['photogrammetry', '3D modelling'],
    publishedDate: '2024-02-20',
  },
  {
    id: 'dji-matrice-review',
    title: 'DJI Matrice 350 RTK: Full Review for Surveyors',
    description: 'In-depth review of the DJI Matrice 350 RTK for professional surveying applications.',
    thumbnail: '/images/resources/videos/matrice-review-thumb.avif',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '15:20',
    category: 'equipment',
    tags: ['DJI', 'enterprise', 'RTK'],
    publishedDate: '2024-03-10',
  },
  {
    id: 'construction-site-case-study',
    title: 'Case Study: 50-Acre Construction Site Survey',
    description: 'See how we surveyed a large construction site in just one day using drone technology.',
    thumbnail: '/images/resources/videos/construction-case-study-thumb.avif',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '6:15',
    category: 'case-study',
    tags: ['construction', 'large site'],
    publishedDate: '2024-04-05',
  },
];

export function getVideosByCategory(category: VideoCategory): Video[] {
  return videos.filter((v) => v.category === category);
}

export function getAllVideos(): Video[] {
  return videos;
}

// ===== Drone Review Types =====
export type DroneCategory = 'enterprise' | 'prosumer' | 'compact' | 'fixed-wing';

export interface DroneSpecs {
  flightTime: string;
  camera: string;
  range: string;
  weight: string;
  price: string;
}

export interface DroneReview {
  id: string;
  slug: string;
  name: string;
  manufacturer: string;
  image: string;
  rating: number;
  shortSummary: string;
  fullReview: string;
  pros: string[];
  cons: string[];
  specs: DroneSpecs;
  bestFor: string[];
  category: DroneCategory;
  reviewDate: string;
  featured: boolean;
}

export const droneCategories: { slug: DroneCategory; name: string }[] = [
  { slug: 'enterprise', name: 'Enterprise' },
  { slug: 'prosumer', name: 'Prosumer' },
  { slug: 'compact', name: 'Compact' },
  { slug: 'fixed-wing', name: 'Fixed Wing' },
];

export const droneReviews: DroneReview[] = [
  {
    id: 'dji-matrice-350-rtk',
    slug: 'dji-matrice-350-rtk-review',
    name: 'DJI Matrice 350 RTK',
    manufacturer: 'DJI',
    image: '/images/photos/dji matrice 350.webp',
    rating: 4.5,
    shortSummary: 'The gold standard for professional drone surveying with exceptional reliability and payload flexibility.',
    fullReview: 'The DJI Matrice 350 RTK represents the pinnacle of enterprise drone technology for surveying applications. With its impressive 55-minute flight time, IP55 weather resistance, and support for dual gimbals, it handles virtually any surveying challenge you can throw at it.',
    pros: [
      'Excellent flight time (55 minutes)',
      'IP55 weather resistance',
      'Dual gimbal support',
      'Reliable RTK positioning',
      'Hot-swappable batteries',
    ],
    cons: [
      'High initial investment',
      'Requires training',
      'Heavy for transport',
    ],
    specs: {
      flightTime: '55 minutes',
      camera: 'Zenmuse compatible',
      range: '20 km',
      weight: '6.47 kg',
      price: '£10,000+',
    },
    bestFor: ['Large-scale mapping', 'Infrastructure inspection', 'Multi-sensor work'],
    category: 'enterprise',
    reviewDate: '2024-03-15',
    featured: true,
  },
  {
    id: 'dji-mavic-3-enterprise',
    slug: 'dji-mavic-3-enterprise-review',
    name: 'DJI Mavic 3 Enterprise',
    manufacturer: 'DJI',
    image: '/images/photos/dji mavic 3.avif',
    rating: 4.5,
    shortSummary: 'Compact yet powerful, the Mavic 3 Enterprise delivers professional results in a portable package.',
    fullReview: 'The Mavic 3 Enterprise bridges the gap between portability and professional capability. Its 4/3 CMOS sensor captures stunning detail, while RTK module support ensures survey-grade accuracy.',
    pros: [
      'Highly portable design',
      '45-minute flight time',
      'Excellent image quality',
      'RTK module available',
      'Mechanical shutter option',
    ],
    cons: [
      'Limited payload options',
      'Smaller sensor than dedicated mapping drones',
    ],
    specs: {
      flightTime: '45 minutes',
      camera: '4/3 CMOS, 20MP',
      range: '15 km',
      weight: '920g',
      price: '£4,000+',
    },
    bestFor: ['Small to medium sites', 'Roof inspections', 'Quick deployments'],
    category: 'prosumer',
    reviewDate: '2024-02-20',
    featured: true,
  },
  {
    id: 'wingtra-one-gen-ii',
    slug: 'wingtra-one-gen-ii-review',
    name: 'WingtraOne Gen II',
    manufacturer: 'Wingtra',
    image: '/images/photos/wingtra one.webp',
    rating: 4,
    shortSummary: 'VTOL efficiency meets survey-grade accuracy for large-area mapping projects.',
    fullReview: 'The WingtraOne Gen II combines vertical takeoff and landing with fixed-wing flight efficiency. Cover up to 400 hectares in a single flight with centimetre-level accuracy.',
    pros: [
      'Massive coverage area',
      'VTOL convenience',
      'Survey-grade accuracy',
      'Excellent for corridors',
    ],
    cons: [
      'Higher price point',
      'Requires open landing area',
      'Learning curve for operation',
    ],
    specs: {
      flightTime: '59 minutes',
      camera: '42MP full-frame',
      range: '400 hectares/flight',
      weight: '4.2 kg',
      price: '£20,000+',
    },
    bestFor: ['Large-area mapping', 'Corridor surveys', 'Agricultural applications'],
    category: 'fixed-wing',
    reviewDate: '2024-01-10',
    featured: false,
  },
];

export function getReviewBySlug(slug: string): DroneReview | undefined {
  return droneReviews.find((r) => r.slug === slug);
}

export function getFeaturedReviews(): DroneReview[] {
  return droneReviews.filter((r) => r.featured);
}

export function getReviewsByCategory(category: DroneCategory): DroneReview[] {
  return droneReviews.filter((r) => r.category === category);
}

export function getAllReviews(): DroneReview[] {
  return droneReviews;
}
