// ===== Blog Types =====

export interface Author {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface BlogCategory {
  slug: string;
  name: string;
  description?: string;
}

export type RichTextBlockType =
  | 'paragraph'
  | 'heading2'
  | 'heading3'
  | 'image'
  | 'bulletList'
  | 'numberedList'
  | 'quote'
  | 'codeBlock';

export interface RichTextBlock {
  type: RichTextBlockType;
  content?: string;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  featuredImageAlt: string;
  category: BlogCategory;
  author: Author;
  publishedDate: string;
  updatedDate?: string;
  readingTime: number;
  tags: string[];
  keyTakeaways?: string[];
  content: RichTextBlock[];
  metaTitle?: string;
  metaDescription?: string;
  relatedSlugs?: string[];
}

// ===== Categories =====
export const blogCategories: BlogCategory[] = [
  {
    slug: 'industry-insights',
    name: 'Industry Insights',
    description: 'Latest trends and news in drone surveying'
  },
  {
    slug: 'technical-guides',
    name: 'Technical Guides',
    description: 'How-to guides and technical deep-dives'
  },
  {
    slug: 'case-studies',
    name: 'Case Studies',
    description: 'Real project examples and outcomes'
  },
  {
    slug: 'company-news',
    name: 'Company News',
    description: 'Updates from Skykam Drone Inspections'
  },
];

// ===== Default Author =====
export const defaultAuthor: Author = {
  name: 'James Leslie',
  role: 'Owner, Engineer & Drone Pilot',
  image: '/images/about-surveyor.avif',
  bio: 'Former RAF engineer with extensive experience in surveying and UAV operations. James founded Skykam Drone Inspections to bring professional aerial surveying to clients across the UK.',
};

// ===== Sample Articles =====
export const articles: BlogArticle[] = [
  {
    slug: 'understanding-topographic-survey-accuracy',
    title: 'Understanding Topographic Survey Accuracy: A Complete Guide',
    excerpt: 'Learn what factors affect drone topographic survey accuracy and how to ensure your project meets required specifications for planning applications and engineering design.',
    featuredImage: '/images/services/topographic/service-drone-topographic-survey.avif',
    featuredImageAlt: 'Drone capturing topographic survey data over development site',
    category: blogCategories[1], // Technical Guides
    author: defaultAuthor,
    publishedDate: '2024-11-15T09:00:00Z',
    readingTime: 8,
    tags: ['topographic survey', 'accuracy', 'RTK', 'photogrammetry', 'GCP'],
    keyTakeaways: [
      'Ground Control Points (GCPs) are the foundation of survey-grade accuracy, with a minimum of 5 recommended for most projects.',
      'Both RTK and PPK positioning can achieve centimetre-level accuracy, with RTK offering real-time feedback and PPK providing more flexibility.',
      'Modern drone surveys achieve ±2-3cm horizontal and ±3-5cm vertical accuracy with proper methodology.',
      'Flight parameters including altitude, overlap, and speed significantly impact final data quality.',
      'UK planning applications typically require ±5cm vertical accuracy, which drone surveys comfortably exceed.',
    ],
    content: [
      {
        type: 'paragraph',
        content: 'When commissioning a drone topographic survey, understanding accuracy is crucial for ensuring your project meets its requirements. Whether you need data for planning applications, engineering design, or construction monitoring, the accuracy of your survey determines its usefulness and acceptance by regulatory bodies.',
      },
      {
        type: 'heading2',
        content: 'What Determines Survey Accuracy?',
      },
      {
        type: 'paragraph',
        content: 'Several factors influence the accuracy of a drone topographic survey. Understanding these helps you make informed decisions when specifying your project requirements.',
      },
      {
        type: 'bulletList',
        items: [
          'Ground Control Points (GCPs) - Survey markers with known coordinates that anchor your aerial data to real-world positions',
          'RTK/PPK Technology - Real-time or post-processed kinematic positioning for centimetre-level drone location',
          'Flight Parameters - Altitude, overlap percentage, and flight speed all affect data quality',
          'Camera and Sensor Quality - Higher resolution sensors capture more detail',
          'Processing Software - Advanced photogrammetry algorithms improve accuracy',
        ],
      },
      {
        type: 'heading2',
        content: 'GCPs: The Foundation of Accuracy',
      },
      {
        type: 'paragraph',
        content: 'Ground Control Points are perhaps the most critical factor in achieving survey-grade accuracy. These are physical markers placed across your site that are surveyed using traditional methods (total station or GNSS) to establish their precise coordinates.',
      },
      {
        type: 'paragraph',
        content: 'For most engineering applications, we recommend a minimum of 5 GCPs distributed evenly across the site, with additional points for larger or more complex areas. The placement strategy significantly impacts final accuracy.',
      },
      {
        type: 'heading2',
        content: 'RTK vs PPK: Which is Better?',
      },
      {
        type: 'paragraph',
        content: 'Both RTK (Real-Time Kinematic) and PPK (Post-Processed Kinematic) can achieve centimetre-level accuracy, but they work differently:',
      },
      {
        type: 'bulletList',
        items: [
          'RTK requires a constant radio link between base station and drone during flight',
          'PPK processes positioning data after the flight, offering more flexibility',
          'RTK provides immediate feedback on data quality during capture',
          'PPK is more reliable in areas with radio interference or signal obstacles',
        ],
      },
      {
        type: 'heading2',
        content: 'Typical Accuracy Levels',
      },
      {
        type: 'paragraph',
        content: 'With proper methodology, drone topographic surveys can achieve:',
      },
      {
        type: 'bulletList',
        items: [
          'Horizontal accuracy: ±2-3cm with GCPs and RTK/PPK',
          'Vertical accuracy: ±3-5cm with GCPs and RTK/PPK',
          'Relative accuracy: Often better than ±1cm within the survey area',
        ],
      },
      {
        type: 'quote',
        content: 'For planning applications in the UK, surveyors typically require ±5cm vertical accuracy. Modern drone surveys comfortably exceed this specification when proper methodology is followed.',
      },
      {
        type: 'heading2',
        content: 'Conclusion',
      },
      {
        type: 'paragraph',
        content: 'Understanding the factors that affect survey accuracy helps you specify the right requirements for your project. At Skykam Drone Inspections, we work with clients to determine the appropriate accuracy specification and methodology for each project, ensuring deliverables meet your needs while optimising costs.',
      },
    ],
    relatedSlugs: ['how-drone-surveys-transforming-construction'],
  },
  {
    slug: 'how-drone-surveys-transforming-construction',
    title: 'How Drone Surveys Are Transforming UK Construction Sites',
    excerpt: 'Discover how construction companies across the UK are using drone survey technology to cut costs, improve safety, and accelerate project timelines.',
    featuredImage: '/images/services/construction/service-drone-construction-monitoring.avif',
    featuredImageAlt: 'Aerial view of construction site captured by drone',
    category: blogCategories[0], // Industry Insights
    author: defaultAuthor,
    publishedDate: '2024-10-28T09:00:00Z',
    readingTime: 6,
    tags: ['construction', 'progress monitoring', 'BIM', 'site surveys', 'cost savings'],
    keyTakeaways: [
      'Drone surveys reduce survey time by 70-80% for large construction sites compared to traditional methods.',
      'Regular drone monitoring creates a visual timeline invaluable for verifying contractor claims and documenting progress.',
      'Construction companies report 40% surveying cost reductions while getting more frequent updates.',
      'Drone data integrates seamlessly with BIM workflows for clash detection and construction verification.',
      'Early adopters of drone technology are gaining competitive advantage in an increasingly digital construction industry.',
    ],
    content: [
      {
        type: 'paragraph',
        content: 'The UK construction industry is undergoing a digital transformation, and drone surveying is at the forefront of this change. From small residential developments to major infrastructure projects, construction companies are discovering the significant advantages of aerial survey technology.',
      },
      {
        type: 'heading2',
        content: 'The Traditional Surveying Challenge',
      },
      {
        type: 'paragraph',
        content: 'Traditional ground-based surveys have served the construction industry well, but they come with inherent limitations. Large sites can take days or weeks to survey, access to certain areas may be dangerous or impossible, and the resulting data provides limited spatial context.',
      },
      {
        type: 'heading2',
        content: 'Enter Drone Technology',
      },
      {
        type: 'paragraph',
        content: 'Drone surveys address these challenges head-on. A site that would take a week to survey traditionally can often be captured in a single day. The resulting orthomosaics and 3D models provide comprehensive site documentation that stakeholders can access remotely.',
      },
      {
        type: 'bulletList',
        items: [
          '70-80% reduction in survey time for large sites',
          'Improved safety by eliminating the need to access hazardous areas',
          'Comprehensive documentation for dispute resolution',
          'Easy integration with BIM workflows',
          'Regular progress monitoring at fraction of traditional costs',
        ],
      },
      {
        type: 'heading2',
        content: 'Real Cost Savings',
      },
      {
        type: 'paragraph',
        content: 'The financial benefits extend beyond the survey itself. Construction managers report fewer errors, better coordination between trades, and reduced rework. When problems are identified earlier through regular drone monitoring, the cost of remediation is significantly lower.',
      },
      {
        type: 'quote',
        content: 'We reduced our surveying costs by 40% while getting weekly progress updates instead of monthly. The visibility this gives us has improved our project management significantly.',
      },
      {
        type: 'heading2',
        content: 'Progress Monitoring Revolution',
      },
      {
        type: 'paragraph',
        content: 'Perhaps the most transformative application is regular progress monitoring. Monthly or even weekly drone flights create a visual timeline of construction progress, invaluable for:',
      },
      {
        type: 'bulletList',
        items: [
          'Verifying contractor claims and payment applications',
          'Documenting site conditions for insurance purposes',
          'Communicating progress to stakeholders and investors',
          'Identifying delays before they become critical',
          'Creating as-built records for handover',
        ],
      },
      {
        type: 'heading2',
        content: 'Integration with BIM',
      },
      {
        type: 'paragraph',
        content: 'Drone survey data integrates seamlessly with Building Information Modelling (BIM) workflows. Point clouds and 3D models can be overlaid with design models to verify construction accuracy and identify clashes before they become costly problems on site.',
      },
      {
        type: 'heading2',
        content: 'The Future is Aerial',
      },
      {
        type: 'paragraph',
        content: 'As the technology continues to mature and regulations evolve, drone surveys will become even more integrated into construction workflows. Companies that adopt this technology now are positioning themselves for competitive advantage in an increasingly digital industry.',
      },
    ],
    relatedSlugs: ['understanding-topographic-survey-accuracy'],
  },
];

// ===== Helper Functions =====
export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): BlogArticle[] {
  return articles.filter((a) => a.category.slug === categorySlug);
}

export function getRelatedArticles(article: BlogArticle, limit: number = 3): BlogArticle[] {
  if (!article.relatedSlugs || article.relatedSlugs.length === 0) {
    // Return other articles from same category
    return articles
      .filter((a) => a.slug !== article.slug && a.category.slug === article.category.slug)
      .slice(0, limit);
  }

  return article.relatedSlugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter((a): a is BlogArticle => a !== undefined)
    .slice(0, limit);
}

export function getAllArticles(): BlogArticle[] {
  return articles;
}

export function getLatestArticles(limit: number = 3): BlogArticle[] {
  return [...articles]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, limit);
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug);
}
