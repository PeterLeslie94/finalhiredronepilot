import { MetadataRoute } from 'next';

import { citySlugs } from '@/data/cities';
import { services } from '@/data/services';
import { getAllArticles } from '@/lib/contentful/blog';
import { query } from '@/lib/server/database';

export const revalidate = 3600;

const BASE_URL = 'https://hiredronepilot.uk';

function asDate(value: string | Date | undefined | null, fallback: Date): Date {
  if (!value) return fallback;
  const parsed = value instanceof Date ? value : new Date(value);
  return Number.isNaN(parsed.getTime()) ? fallback : parsed;
}

function toAbsoluteUrl(path: string): string {
  if (path === '/') return BASE_URL;
  return `${BASE_URL}${path.replace(/\/+$/, '')}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const stableLastModified = process.env.VERCEL_GIT_COMMIT_DATE
    ? new Date(process.env.VERCEL_GIT_COMMIT_DATE)
    : new Date('2026-01-01T00:00:00.000Z');

  const staticPaths: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }> = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/pricing', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/cities', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/resources', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/resources/calculators/area-measurement-tool', changeFrequency: 'monthly', priority: 0.75 },
    { path: '/resources/calculators/flight-time-calculator', changeFrequency: 'monthly', priority: 0.75 },
    { path: '/resources/calculators/roi-calculator', changeFrequency: 'monthly', priority: 0.75 },
    { path: '/resources/calculators/survey-cost-estimator', changeFrequency: 'monthly', priority: 0.75 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/marketplace-terms', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/pilot-terms', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/marketplace-policy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/cookies', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/drone-statistics', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/caa-drone-theory-test', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/pilots', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/join-as-pilot', changeFrequency: 'monthly', priority: 0.7 },
  ];

  const staticPages: MetadataRoute.Sitemap = staticPaths.map((entry) => ({
    url: toAbsoluteUrl(entry.path),
    lastModified: stableLastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  const serviceSlugs = Array.from(new Set(services.map((service) => service.slug)));

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: toAbsoluteUrl(`/services/${slug}`),
    lastModified: stableLastModified,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = citySlugs.map((city) => ({
    url: toAbsoluteUrl(`/cities/${city}`),
    lastModified: stableLastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const articles = await getAllArticles();
    blogPages = articles.map((article) => ({
      url: toAbsoluteUrl(`/blog/${article.slug}`),
      lastModified: asDate(article.updatedDate || article.publishedDate, stableLastModified),
      changeFrequency: 'monthly',
      priority: 0.8,
    }));
  } catch {
    // Graceful fallback if content snapshot is unavailable.
  }

  let pilotPages: MetadataRoute.Sitemap = [];
  try {
    const result = await query<{ slug: string; updated_at: string | Date }>(
      'SELECT slug, updated_at FROM pilots WHERE active = true',
    );
    pilotPages = result.rows.map((pilot) => ({
      url: toAbsoluteUrl(`/pilots/${pilot.slug}`),
      lastModified: asDate(pilot.updated_at, stableLastModified),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  } catch {
    // Graceful fallback if DB is unavailable.
  }

  const deduped = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const entry of [...staticPages, ...servicePages, ...locationPages, ...blogPages, ...pilotPages]) {
    deduped.set(entry.url, entry);
  }

  return Array.from(deduped.values());
}
