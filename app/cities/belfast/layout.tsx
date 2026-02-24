import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Belfast | Professional Aerial Surveys in Belfast',
  description: 'Professional drone survey services in Belfast and Northern Ireland. CAA-approved drone operators delivering precision aerial data for construction, infrastructure, and land projects. Get a free quote today.',
  keywords: 'drone survey belfast, aerial survey belfast, drone mapping belfast, drone surveyor belfast, topographic survey belfast, lidar survey belfast, drone services belfast, drone survey northern ireland',
  alternates: {
    canonical: 'https://hiredronepilot.uk/cities/belfast',
  },
  openGraph: {
    title: 'Drone Survey Belfast | Professional Aerial Surveys',
    description: 'Professional drone survey services across Belfast and Northern Ireland. CAA-approved drone operators for construction, infrastructure, and land projects.',
    url: 'https://hiredronepilot.uk/cities/belfast',
    siteName: 'Hire Drone Pilot',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Belfast | Professional Aerial Surveys',
    description: 'Professional drone survey services across Belfast and Northern Ireland. CAA-approved drone operators for construction, infrastructure, and land projects.',
  },
};

export default function BelfastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
