/**
 * generate-linking-csv.ts
 *
 * One-off script that produces /data/internal-linking-audit.csv
 * with three columns: URL | SEO Keywords for Linking | Pages Already Linking Here
 *
 * Usage: npx tsx scripts/generate-linking-csv.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// ---------------------------------------------------------------------------
// 1. Collect all URLs
// ---------------------------------------------------------------------------

// Import service slugs + titles
import { services } from '../data/services';
import { citySlugs } from '../data/cities';
import { calculators } from '../data/resources';

const serviceUrls = services.map((s) => ({
  url: `/services/${s.slug}`,
  title: s.title,
  category: s.category,
  type: 'service' as const,
}));

const cityUrls = citySlugs.map((slug) => ({
  url: `/cities/${slug}`,
  title: slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' '),
  type: 'city' as const,
}));

const calculatorUrls = calculators.map((c) => ({
  url: `/resources/calculators/${c.slug}`,
  title: c.title,
  type: 'calculator' as const,
}));

interface StaticPage {
  url: string;
  title: string;
  type: 'static';
}

const staticPages: StaticPage[] = [
  { url: '/', title: 'Home', type: 'static' },
  { url: '/about', title: 'About', type: 'static' },
  { url: '/contact', title: 'Contact', type: 'static' },
  { url: '/pricing', title: 'Pricing', type: 'static' },
  { url: '/blog', title: 'Blog', type: 'static' },
  { url: '/services', title: 'Services', type: 'static' },
  { url: '/cities', title: 'Cities', type: 'static' },
  { url: '/pilots', title: 'Pilots', type: 'static' },
  { url: '/resources', title: 'Resources', type: 'static' },
  { url: '/join-as-pilot', title: 'Join as Pilot', type: 'static' },
  { url: '/drone-statistics', title: 'Drone Statistics', type: 'static' },
  { url: '/caa-drone-theory-test', title: 'CAA Drone Theory Test', type: 'static' },
  { url: '/privacy', title: 'Privacy Policy', type: 'static' },
  { url: '/terms', title: 'Website Terms', type: 'static' },
  { url: '/marketplace-terms', title: 'Marketplace Terms', type: 'static' },
  { url: '/pilot-terms', title: 'Pilot Terms', type: 'static' },
  { url: '/marketplace-policy', title: 'Issue Policy', type: 'static' },
  { url: '/cookies', title: 'Cookie Policy', type: 'static' },
  { url: '/html-sitemap', title: 'HTML Sitemap', type: 'static' },
];

type PageEntry = {
  url: string;
  title: string;
  type: 'service' | 'city' | 'calculator' | 'static';
  category?: string;
};

const allPages: PageEntry[] = [
  ...staticPages,
  ...serviceUrls,
  ...cityUrls,
  ...calculatorUrls,
];

// ---------------------------------------------------------------------------
// 2. Generate keyword variations per URL
// ---------------------------------------------------------------------------

const staticKeywords: Record<string, string[]> = {
  '/': [
    'Hire Drone Pilot',
    'Drone Pilot UK',
    'HireDronePilot',
    'Drone Survey UK',
    'Hire a Drone Pilot',
    'UK Drone Services',
    'Compare Drone Pilot Quotes',
  ],
  '/about': [
    'About HireDronePilot',
    'About Us',
    'Our Story',
    'Peter Leslie Drone Pilot',
    'Who We Are',
    'Founder',
  ],
  '/contact': [
    'Contact Us',
    'Get a Drone Quote',
    'Request a Quote',
    'Hire a Drone Pilot',
    'Free Drone Survey Quote',
    'Get in Touch',
  ],
  '/pricing': [
    'Drone Pricing',
    'Drone Costs UK',
    'Drone Survey Costs',
    'How Much Does a Drone Survey Cost',
    'Drone Pilot Day Rates',
    'Drone Hire Cost',
    'Drone Service Pricing',
  ],
  '/blog': [
    'Drone Blog',
    'Drone Industry News',
    'Drone Survey Articles',
    'Drone Insights',
    'Aerial Survey Blog',
  ],
  '/services': [
    'Drone Services',
    'Our Services',
    'Drone Survey Services',
    'All Drone Services',
    'Professional Drone Services UK',
  ],
  '/cities': [
    'Drone Services by City',
    'UK Drone Coverage',
    'Drone Pilots Near Me',
    'Local Drone Services',
    'Drone Survey Locations UK',
  ],
  '/pilots': [
    'Drone Pilots Directory',
    'Find a Drone Pilot',
    'Verified Drone Pilots',
    'UK Drone Pilots',
    'Browse Drone Pilots',
  ],
  '/resources': [
    'Drone Resources',
    'Drone Survey Resources',
    'Drone Calculators',
    'Drone Guides',
    'Drone Tools',
  ],
  '/join-as-pilot': [
    'Join as Drone Pilot',
    'Become a Drone Pilot',
    'Register as Pilot',
    'Drone Pilot Registration',
    'Join Our Network',
    'List as Drone Pilot',
  ],
  '/drone-statistics': [
    'UK Drone Statistics',
    'Drone Industry Statistics',
    'Drone Market Data',
    'UK Drone Industry',
    'Drone Stats',
    'Drone Industry Growth',
  ],
  '/caa-drone-theory-test': [
    'CAA Drone Theory Test',
    'Drone Theory Test Practice',
    'CAA Exam Preparation',
    'Drone Pilot Theory Test',
    'A2 CofC Theory Test',
    'Drone Licence Theory',
  ],
  '/privacy': [
    'Privacy Policy',
    'Data Protection',
    'Privacy Notice',
  ],
  '/terms': [
    'Terms and Conditions',
    'Website Terms',
    'Terms of Use',
  ],
  '/marketplace-terms': [
    'Marketplace Terms',
    'Platform Terms',
    'Marketplace Conditions',
  ],
  '/pilot-terms': [
    'Pilot Terms',
    'Drone Pilot Terms',
    'Operator Terms',
  ],
  '/marketplace-policy': [
    'Issue Policy',
    'Marketplace Policy',
    'Dispute Resolution',
  ],
  '/cookies': [
    'Cookie Policy',
    'Cookie Notice',
    'Cookie Preferences',
  ],
  '/html-sitemap': [
    'HTML Sitemap',
    'Site Map',
    'All Pages',
  ],
};

const calculatorKeywords: Record<string, string[]> = {
  'survey-cost-estimator': [
    'Drone Survey Cost Estimator',
    'Survey Cost Calculator',
    'Drone Cost Calculator',
    'Estimate Drone Survey Cost',
    'Drone Pricing Calculator',
  ],
  'flight-time-calculator': [
    'Drone Flight Time Calculator',
    'Flight Time Estimator',
    'Drone Battery Calculator',
    'Flight Planning Tool',
    'Drone Flight Planner',
  ],
  'roi-calculator': [
    'Drone ROI Calculator',
    'Drone Survey ROI',
    'Return on Investment Calculator',
    'Drone Cost Savings Calculator',
    'Drone vs Traditional Cost',
  ],
  'area-measurement-tool': [
    'Area Measurement Tool',
    'Site Area Calculator',
    'Land Measurement Tool',
    'Survey Area Calculator',
    'Hectare Calculator',
  ],
};

function generateServiceKeywords(title: string, category: string): string[] {
  const keywords: string[] = [title];

  // Without "Drone" prefix
  const withoutDrone = title.replace(/^Drone\s+/i, '');
  if (withoutDrone !== title) {
    keywords.push(withoutDrone);
  }

  // Determine the core noun (Survey, Inspection, Photography, etc.)
  const isSurvey = /survey|mapping|monitoring|analysis/i.test(title);
  const isInspection = /inspection/i.test(title);
  const isPhotography = /photography|videographer/i.test(title);

  // Add "Drone" prefix if not present
  if (!title.startsWith('Drone')) {
    keywords.push(`Drone ${title}`);
  }

  // Survey variants
  if (isSurvey && !title.toLowerCase().includes('survey')) {
    keywords.push(title.replace(/mapping|monitoring|analysis/i, 'Survey'));
  }

  // "Services" variant
  keywords.push(`${title} Services`);

  // UK variant
  keywords.push(`${withoutDrone} UK`);

  // Category-level term
  if (category === 'Inspection Services') {
    if (!keywords.some((k) => k.toLowerCase().includes('inspection services'))) {
      keywords.push('Drone Inspection Services');
    }
  } else if (category === 'Surveying & Mapping') {
    if (!keywords.some((k) => k.toLowerCase().includes('survey services'))) {
      keywords.push('Drone Survey Services');
    }
  } else if (category === 'Photography & Video') {
    if (!keywords.some((k) => k.toLowerCase().includes('photography services'))) {
      keywords.push('Drone Photography Services');
    }
  } else if (category === 'Infrastructure') {
    keywords.push('Drone Infrastructure Services');
  } else if (category === 'Environmental & Land') {
    keywords.push('Drone Environmental Services');
  } else if (category === 'Specialist Services') {
    keywords.push('Specialist Drone Services');
  }

  // Additional natural variants for specific types
  if (isInspection) {
    const base = withoutDrone.replace(/\s*Inspection\s*/i, '');
    if (base.trim()) {
      keywords.push(`${base} Assessment`);
    }
  }

  if (isPhotography) {
    keywords.push('Aerial Photography');
  }

  // Dedupe (case-insensitive)
  const seen = new Set<string>();
  return keywords.filter((k) => {
    const lower = k.toLowerCase().trim();
    if (seen.has(lower)) return false;
    seen.add(lower);
    return true;
  });
}

function generateCityKeywords(cityName: string): string[] {
  return [
    `Drone Survey ${cityName}`,
    `${cityName} Drone Survey`,
    `Aerial Survey ${cityName}`,
    `Drone Services ${cityName}`,
    `Drone Pilot ${cityName}`,
    `Drone Mapping ${cityName}`,
    `Hire Drone Pilot ${cityName}`,
  ];
}

function getKeywords(page: PageEntry): string[] {
  if (page.type === 'static') {
    return staticKeywords[page.url] || [page.title];
  }

  if (page.type === 'service') {
    return generateServiceKeywords(page.title, page.category || '');
  }

  if (page.type === 'city') {
    return generateCityKeywords(page.title);
  }

  if (page.type === 'calculator') {
    const slug = page.url.split('/').pop() || '';
    return calculatorKeywords[slug] || [page.title];
  }

  return [page.title];
}

// ---------------------------------------------------------------------------
// 3. Scan codebase for existing internal links
// ---------------------------------------------------------------------------

const ROOT = path.resolve(__dirname, '..');

// Map: source label → file path
const filesToScan: Record<string, string> = {
  '/': path.join(ROOT, 'app/page.tsx'),
  '/about': path.join(ROOT, 'app/about/page.tsx'),
  '/services': path.join(ROOT, 'app/services/page.tsx'),
  '/services/[slug]': path.join(ROOT, 'app/services/[slug]/page.tsx'),
  '/pricing': path.join(ROOT, 'app/pricing/page.tsx'),
  '/resources': path.join(ROOT, 'app/resources/page.tsx'),
  '/pilots': path.join(ROOT, 'app/pilots/page.tsx'),
  '/contact': path.join(ROOT, 'app/contact/page.tsx'),
};

// Add each individual service page (static route overrides for /services/[slug])
const servicesDirEntries = fs.readdirSync(path.join(ROOT, 'app/services'), { withFileTypes: true });
for (const entry of servicesDirEntries) {
  if (!entry.isDirectory() || entry.name.startsWith('[')) continue;
  const fp = path.join(ROOT, `app/services/${entry.name}/page.tsx`);
  if (fs.existsSync(fp)) {
    filesToScan[`/services/${entry.name}`] = fp;
  }
}

// Add standalone pages with body links
const standalonePages: Record<string, string> = {
  '/drone-statistics': 'app/drone-statistics/page.tsx',
  '/caa-drone-theory-test': 'app/caa-drone-theory-test/page.tsx',
};
for (const [route, rel] of Object.entries(standalonePages)) {
  const fp = path.join(ROOT, rel);
  if (fs.existsSync(fp)) {
    filesToScan[route] = fp;
  }
}

// Add each city page
for (const slug of citySlugs) {
  const fp = path.join(ROOT, `app/cities/${slug}/page.tsx`);
  if (fs.existsSync(fp)) {
    filesToScan[`/cities/${slug}`] = fp;
  }
}

/**
 * Extract internal href values from a TSX file.
 * Matches:
 *   - href="/path" and href='/path' (JSX attributes)
 *   - href={`/path`} and href={'/path'} (JSX expressions)
 *   - href: '/path' and href: "/path" (object properties in data arrays)
 *   - path: '/path' and path: "/path" (sitemap data arrays)
 * Ignores external URLs, anchors, tel:, mailto:, etc.
 */
function extractHrefs(fileContent: string): string[] {
  const hrefs: string[] = [];

  let match: RegExpExecArray | null;

  // Match href="/..." (double quotes - JSX attribute)
  const doubleQuoteRegex = /href="(\/[^"]*?)"/g;
  while ((match = doubleQuoteRegex.exec(fileContent)) !== null) {
    hrefs.push(match[1]);
  }

  // Match href='/...' (single quotes - JSX attribute)
  const singleQuoteRegex = /href='(\/[^']*?)'/g;
  while ((match = singleQuoteRegex.exec(fileContent)) !== null) {
    hrefs.push(match[1]);
  }

  // Match href={`/...`} (template literals)
  const templateRegex = /href=\{`(\/[^`]*?)`\}/g;
  while ((match = templateRegex.exec(fileContent)) !== null) {
    hrefs.push(match[1]);
  }

  // Match href={'/...'} or href={"/..."} (expression with quotes)
  const exprSingleRegex = /href=\{'(\/[^']*?)'\}/g;
  while ((match = exprSingleRegex.exec(fileContent)) !== null) {
    hrefs.push(match[1]);
  }
  const exprDoubleRegex = /href=\{"(\/[^"]*?)"\}/g;
  while ((match = exprDoubleRegex.exec(fileContent)) !== null) {
    hrefs.push(match[1]);
  }

  // Match href: '/...' (object property with single quotes — data arrays)
  const objSingleRegex = /href:\s*'(\/[^']*?)'/g;
  while ((match = objSingleRegex.exec(fileContent)) !== null) {
    hrefs.push(match[1]);
  }

  // Match href: "/..." (object property with double quotes — data arrays)
  const objDoubleRegex = /href:\s*"(\/[^"]*?)"/g;
  while ((match = objDoubleRegex.exec(fileContent)) !== null) {
    hrefs.push(match[1]);
  }

  // Match path: '/...' (used in html-sitemap coreLinks/resourceLinks)
  const pathSingleRegex = /path:\s*'(\/[^']*?)'/g;
  while ((match = pathSingleRegex.exec(fileContent)) !== null) {
    hrefs.push(match[1]);
  }

  // Match path: "/..." (same as above, double quotes)
  const pathDoubleRegex = /path:\s*"(\/[^"]*?)"/g;
  while ((match = pathDoubleRegex.exec(fileContent)) !== null) {
    hrefs.push(match[1]);
  }

  // Match path: `/...${...}` and href: `/...${...}` (template literals in object properties)
  const pathTemplateRegex = /(?:path|href):\s*`(\/[^`]*?)`/g;
  while ((match = pathTemplateRegex.exec(fileContent)) !== null) {
    hrefs.push(match[1]);
  }

  // Filter out anchors (#...) and non-path values
  return hrefs
    .map((h) => h.split('#')[0]) // strip anchors
    .filter((h) => h.startsWith('/') && !h.startsWith('//'));
}

/**
 * For dynamic patterns (like /services/${service.slug}), expand them against
 * known slugs to determine which URLs they resolve to.
 */
function expandDynamicHrefs(hrefs: string[], sourceLabel: string): string[] {
  const expanded: string[] = [];

  for (const href of hrefs) {
    // Check if this is a template literal with ${...}
    if (href.includes('${')) {
      // /services/${service.slug} or /services/${relatedService.slug}
      if (href.includes('/services/${')) {
        // The service [slug] page links to /services, plus related services (first 3 excluding self)
        // We record this as linking to all service pages conceptually
        // But we'll add the specific pattern
        for (const s of services) {
          expanded.push(`/services/${s.slug}`);
        }
      } else if (href.includes('/cities/${')) {
        for (const c of citySlugs) {
          expanded.push(`/cities/${c}`);
        }
      } else if (href.includes('/pilots/${')) {
        // Skip dynamic pilot links - not in our URL list
      } else if (href.includes('/blog/${')) {
        // Skip blog links
      } else if (href.includes('/resources/calculators/${')) {
        for (const c of calculators) {
          expanded.push(`/resources/calculators/${c.slug}`);
        }
      }
    } else {
      expanded.push(href);
    }
  }

  return expanded;
}

// Build the reverse map: destination URL → set of source page labels
const linkingMap: Record<string, Set<string>> = {};

for (const page of allPages) {
  linkingMap[page.url] = new Set();
}

for (const [sourceLabel, filePath] of Object.entries(filesToScan)) {
  if (!fs.existsSync(filePath)) continue;

  const content = fs.readFileSync(filePath, 'utf-8');
  const rawHrefs = extractHrefs(content);
  const expandedHrefs = expandDynamicHrefs(rawHrefs, sourceLabel);

  for (const href of expandedHrefs) {
    // Normalise: strip trailing slash
    const normalised = href === '/' ? '/' : href.replace(/\/$/, '');

    if (linkingMap[normalised]) {
      // Don't count self-links
      if (normalised !== sourceLabel) {
        linkingMap[normalised].add(sourceLabel);
      }
    }
  }
}

// Special handling: the services listing page dynamically links to all services
// via <ServiceCard href={`/services/${service.slug}`}>
// We already handle this via expandDynamicHrefs, but ensure the services listing
// is recorded as the source.

// Special handling: html-sitemap links to everything via the coreLinks, service
// links, city links, and resource links arrays — these are all static data resolved
// at build time. We already extract them from the file.

// ---------------------------------------------------------------------------
// 4. Write the CSV
// ---------------------------------------------------------------------------

function escapeCSV(value: string): string {
  if (value.includes('"') || value.includes(',') || value.includes('\n') || value.includes('|')) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

const header = 'URL,SEO Keywords for Linking,Pages Already Linking Here';
const rows: string[] = [header];

for (const page of allPages) {
  const keywords = getKeywords(page);
  const linkers = linkingMap[page.url] || new Set();

  const keywordsStr = keywords.join(' | ');
  const linkersStr = [...linkers].sort().join(' | ');

  rows.push(
    `${escapeCSV(page.url)},${escapeCSV(keywordsStr)},${escapeCSV(linkersStr || '(none)')}`
  );
}

const outputPath = path.join(ROOT, 'data', 'internal-linking-audit.csv');
fs.writeFileSync(outputPath, rows.join('\n') + '\n', 'utf-8');

console.log(`\nInternal linking audit CSV written to: ${outputPath}`);
console.log(`Total URLs: ${allPages.length}`);
console.log(
  `  - Static pages: ${staticPages.length}`
);
console.log(`  - Service pages: ${serviceUrls.length}`);
console.log(`  - City pages: ${cityUrls.length}`);
console.log(`  - Calculator pages: ${calculatorUrls.length}`);

// Quick stats
let withLinks = 0;
let withoutLinks = 0;
for (const page of allPages) {
  const linkers = linkingMap[page.url];
  if (linkers && linkers.size > 0) withLinks++;
  else withoutLinks++;
}
console.log(`\nPages with incoming links: ${withLinks}`);
console.log(`Pages with NO incoming links: ${withoutLinks}`);
