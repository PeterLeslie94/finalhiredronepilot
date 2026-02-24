import { MetadataRoute } from 'next';
import { query } from '@/lib/server/database';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://hiredronepilot.uk';

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cities`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/marketplace-terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/pilot-terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/marketplace-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/drone-statistics`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/caa-drone-theory-test`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pilots`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/join-as-pilot`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const services = [
    'drone-topographical-survey',
    'drone-lidar-mapping',
    'drone-photogrammetry-survey',
    'drone-roof-inspection',
    'drone-construction-monitoring',
    'drone-volumetric-survey',
    'drone-site-survey',
    'drone-land-survey',
    'drone-facade-survey',
    'drone-bridge-inspection',
    'drone-mining-survey',
    'drone-agricultural-survey',
    'drone-crop-spraying',
    'drone-gas-detection',
    'drone-environmental-survey',
    'drone-estate-survey',
    'drone-measured-building-survey',
    'drone-elevation-survey',
    'drone-wind-farm-survey',
    'drone-archaeological-survey',
    'drone-boundary-survey',
    'drone-industrial-survey',
    'drone-coastal-survey',
    'drone-landfill-survey',
    'drone-railway-survey',
    'drone-solar-survey',
    'drone-forestry-survey',
    'drone-utility-survey',
    'drone-road-survey',
    'drone-corridor-mapping',
    'drone-setting-out-survey',
    'drone-as-built-survey',
    'drone-flood-risk-survey',
    // New service pages
    'drone-photography',
    'drone-real-estate-photography',
    'drone-wedding-photography',
    'drone-thermal-imaging',
    'drone-surveys',
    'drone-bathymetric-survey',
    'drone-point-cloud-mapping',
    'drone-sonar-survey',
    'drone-videographer',
    'drone-water-quality-assessment',
    'drone-confined-space-inspection',
    'drone-ground-penetrating-radar',
    'drone-quarry-survey',
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // Location pages - 29 UK cities
  const locations = [
    'london',
    'edinburgh',
    'glasgow',
    'aberdeen',
    'dundee',
    'manchester',
    'liverpool',
    'leeds',
    'sheffield',
    'newcastle',
    'birmingham',
    'nottingham',
    'leicester',
    'coventry',
    'derby',
    'bristol',
    'southampton',
    'brighton',
    'portsmouth',
    'plymouth',
    'cambridge',
    'oxford',
    'norwich',
    'reading',
    'milton-keynes',
    'york',
    'cardiff',
    'swansea',
    'belfast',
  ];

  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/cities/${location}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Pilot profile pages
  let pilotPages: MetadataRoute.Sitemap = [];
  try {
    const result = await query<{ slug: string }>('SELECT slug FROM pilots WHERE active = true');
    pilotPages = result.rows.map((p) => ({
      url: `${baseUrl}/pilots/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  } catch {
    // Graceful fallback if DB unavailable at build time
  }

  return [...staticPages, ...servicePages, ...locationPages, ...pilotPages];
}
