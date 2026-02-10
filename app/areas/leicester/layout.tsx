import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Leicester | Professional Aerial Surveys in Leicester',
  description: 'Professional drone survey services in Leicester and Leicestershire. CAA-approved drone operators delivering precision aerial data for textiles, manufacturing, space technology, and construction projects. Get a free quote today.',
  keywords: 'drone survey leicester, aerial survey leicester, drone mapping leicester, drone surveyor leicester, topographic survey leicester, lidar survey leicester, drone services leicester, aerial photography leicester',
  alternates: {
    canonical: 'https://skykam.co.uk/areas/leicester',
  },
  openGraph: {
    title: 'Drone Survey Leicester | Professional Aerial Surveys',
    description: 'Professional drone survey services across Leicester and Leicestershire. CAA-approved drone operators with expertise in textiles, manufacturing, and space technology projects.',
    url: 'https://skykam.co.uk/areas/leicester',
    siteName: 'Skykam Drone Inspections',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Leicester | Professional Aerial Surveys',
    description: 'Professional drone survey services across Leicester and Leicestershire. CAA-approved drone operators with expertise in textiles, manufacturing, and space technology projects.',
  },
};

export default function LeicesterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
