import type { Metadata } from 'next';
import Link from 'next/link';

import { citySlugs } from '@/data/cities';
import { services } from '@/data/services';
import { getAllArticles } from '@/lib/contentful/blog';
import {
  getAllDroneBestPages,
  getAllDroneComparisons,
  getAllDroneReviews,
} from '@/lib/contentful/reviews';
import { query } from '@/lib/server/database';
import { hasPilotListingLiveAtColumn, publicPilotWhereClause } from '@/lib/server/pilot-listing';
import { pageMetadata } from '@/lib/seo/metadata';

type SiteLink = {
  path: string;
  label: string;
};

type PilotRow = {
  slug: string;
  name: string;
  business_name: string | null;
};

const PRIVATE_PREFIXES = ['/admin', '/api', '/auth', '/invite', '/login', '/logout', '/thank-you'] as const;

const coreLinks: SiteLink[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/services', label: 'Services' },
  { path: '/blog', label: 'Blog' },
  { path: '/drone-reviews', label: 'Drone Reviews' },
  { path: '/drone-comparisons', label: 'Drone Comparisons' },
  { path: '/best-drones', label: 'Best Drones' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/cities', label: 'Cities' },
  { path: '/resources', label: 'Resources' },
  { path: '/drone-statistics', label: 'Drone Statistics' },
  { path: '/caa-drone-theory-test', label: 'CAA Drone Theory Test' },
  { path: '/pilots', label: 'Pilot Directory' },
  { path: '/join-as-pilot', label: 'Join as Pilot' },
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Website Terms' },
  { path: '/marketplace-terms', label: 'Marketplace Terms' },
  { path: '/pilot-terms', label: 'Pilot Terms' },
  { path: '/marketplace-policy', label: 'Issue Policy' },
  { path: '/cookies', label: 'Cookie Policy' },
  { path: '/sitemap.xml', label: 'XML Sitemap' },
];

const resourceLinks: SiteLink[] = [
  { path: '/resources/calculators/area-measurement-tool', label: 'Area Measurement Tool' },
  { path: '/resources/calculators/flight-time-calculator', label: 'Flight Time Calculator' },
  { path: '/resources/calculators/roi-calculator', label: 'ROI Calculator' },
  { path: '/resources/calculators/survey-cost-estimator', label: 'Survey Cost Estimator' },
  { path: '/drone-reviews', label: 'Drone Reviews Hub' },
  { path: '/drone-comparisons', label: 'Drone Comparisons Hub' },
  { path: '/best-drones', label: 'Best Drones Hub' },
];

export const revalidate = 3600;

export const metadata: Metadata = pageMetadata({
  title: 'HTML Sitemap | HireDronePilot',
  description:
    'Browse all public pages on HireDronePilot including services, cities, resources, blog articles, and pilot profiles.',
  path: '/html-sitemap',
  robots: {
    index: true,
    follow: true,
  },
});

function formatSlug(slug: string): string {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function isPublicPath(path: string): boolean {
  return !PRIVATE_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`));
}

function dedupeByPath(links: SiteLink[]): SiteLink[] {
  const seen = new Set<string>();
  const output: SiteLink[] = [];

  for (const link of links) {
    if (!isPublicPath(link.path)) continue;
    if (seen.has(link.path)) continue;
    seen.add(link.path);
    output.push(link);
  }

  return output;
}

function alphaSort(links: SiteLink[]): SiteLink[] {
  return [...links].sort((a, b) => a.label.localeCompare(b.label));
}

async function getBlogLinks(): Promise<SiteLink[]> {
  try {
    const articles = await getAllArticles();
    const links = articles.map((article) => ({
      path: `/blog/${article.slug}`,
      label: article.title,
      publishedDate: article.publishedDate,
    }));

    return links
      .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
      .map(({ path, label }) => ({ path, label }));
  } catch {
    return [];
  }
}

async function getDroneReviewLinks(): Promise<SiteLink[]> {
  try {
    const reviews = await getAllDroneReviews();
    return reviews.map((review) => ({
      path: `/drone-reviews/${review.slug}`,
      label: review.title,
    }));
  } catch {
    return [];
  }
}

async function getDroneComparisonLinks(): Promise<SiteLink[]> {
  try {
    const comparisons = await getAllDroneComparisons();
    return comparisons.map((comparison) => ({
      path: `/drone-comparisons/${comparison.slug}`,
      label: comparison.title,
    }));
  } catch {
    return [];
  }
}

async function getBestDroneLinks(): Promise<SiteLink[]> {
  try {
    const bestPages = await getAllDroneBestPages();
    return bestPages.map((page) => ({
      path: `/best-drones/${page.slug}`,
      label: page.title,
    }));
  } catch {
    return [];
  }
}

async function getPilotLinks(): Promise<SiteLink[]> {
  try {
    const hasListingLiveAtColumn = await hasPilotListingLiveAtColumn();
    const result = await query<PilotRow>(
      `SELECT slug, name, business_name
       FROM pilots
       WHERE ${publicPilotWhereClause(hasListingLiveAtColumn)}
       ORDER BY created_at DESC`,
    );

    return result.rows
      .filter((pilot) => pilot.slug)
      .map((pilot) => ({
        path: `/pilots/${pilot.slug}`,
        label: pilot.business_name ? `${pilot.name} (${pilot.business_name})` : pilot.name,
      }));
  } catch {
    return [];
  }
}

function Section({ title, links, emptyText }: { title: string; links: SiteLink[]; emptyText?: string }) {
  return (
    <section className="rounded-2xl border border-border bg-white p-6 md:p-8">
      <h2 className="text-2xl font-bold text-teal">{title}</h2>
      {links.length === 0 ? (
        <p className="mt-4 text-sm text-text-secondary">{emptyText || 'No links available right now.'}</p>
      ) : (
        <ul className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
          {links.map((link) => (
            <li key={link.path}>
              <Link href={link.path} className="text-sm text-teal hover:text-gold transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default async function HtmlSitemapPage() {
  const serviceLinks = alphaSort(
    dedupeByPath(
      services.map((service) => ({
        path: `/services/${service.slug}`,
        label: service.title,
      })),
    ),
  );

  const cityLinks = alphaSort(
    dedupeByPath(
      citySlugs.map((city) => ({
        path: `/cities/${city}`,
        label: formatSlug(city),
      })),
    ),
  );

  const [blogLinks, pilotLinks, reviewLinks, comparisonLinks, bestDroneLinks] = await Promise.all([
    getBlogLinks(),
    getPilotLinks(),
    getDroneReviewLinks(),
    getDroneComparisonLinks(),
    getBestDroneLinks(),
  ]);

  return (
    <section className="section bg-background-alt">
      <div className="container max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold text-teal">HTML Sitemap</h1>
        <p className="mt-3 text-text-secondary max-w-3xl">
          A complete index of public HireDronePilot pages to help users and search engines discover content.
        </p>

        <div className="mt-8 space-y-6">
          <Section title="Core Pages" links={dedupeByPath(coreLinks)} />
          <Section title="Services" links={serviceLinks} />
          <Section title="Cities" links={cityLinks} />
          <Section title="Resources & Calculators" links={dedupeByPath(resourceLinks)} />
          <Section
            title="Drone Reviews"
            links={dedupeByPath(reviewLinks)}
            emptyText="Drone review links are temporarily unavailable."
          />
          <Section
            title="Drone Comparisons"
            links={dedupeByPath(comparisonLinks)}
            emptyText="Drone comparison links are temporarily unavailable."
          />
          <Section
            title="Best Drones"
            links={dedupeByPath(bestDroneLinks)}
            emptyText="Best-drone ranking pages are temporarily unavailable."
          />
          <Section
            title="Blog Articles"
            links={dedupeByPath(blogLinks)}
            emptyText="Blog articles are temporarily unavailable."
          />
          <Section
            title="Pilot Profiles"
            links={dedupeByPath(pilotLinks)}
            emptyText="Pilot profile links are temporarily unavailable."
          />
        </div>
      </div>
    </section>
  );
}
