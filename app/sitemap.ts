import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
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
      url: `${baseUrl}/areas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
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
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const services = [
    'drone-topographic-survey',
    'lidar-mapping',
    'drone-photogrammetry-survey',
    'drone-roof-survey',
    'drone-construction-monitoring',
    'drone-volumetric-survey',
    'drone-site-survey',
    'drone-land-survey',
    'drone-facade-survey',
    'drone-bridge-inspection',
    'drone-mining-survey',
    'drone-agricultural-survey',
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
    'drone-solar-farm-survey',
    'drone-forestry-survey',
    'drone-utility-survey',
    'drone-road-survey',
    'drone-corridor-mapping',
    'drone-setting-out-survey',
    'drone-as-built-survey',
    'drone-flood-risk-survey',
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // Location pages - 30 UK cities
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
  ];

  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/areas/${location}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
