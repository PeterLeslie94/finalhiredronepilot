import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Sheffield | Professional Aerial Surveys in Sheffield',
  description: 'Professional drone survey services in Sheffield and South Yorkshire. CAA-approved drone operators delivering precision aerial data for steel, manufacturing, university, and construction projects. Get a free quote today.',
  keywords: 'drone survey sheffield, aerial survey sheffield, drone mapping sheffield, drone surveyor sheffield, topographic survey sheffield, lidar survey sheffield, drone services sheffield, aerial photography sheffield, south yorkshire drone survey',
  alternates: {
    canonical: 'https://skykam.co.uk/areas/sheffield',
  },
  openGraph: {
    title: 'Drone Survey Sheffield | Professional Aerial Surveys',
    description: 'Professional drone survey services across South Yorkshire. CAA-approved drone operators with Sheffield industrial expertise.',
    url: 'https://skykam.co.uk/areas/sheffield',
    siteName: 'Skykam Drone Inspections',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Sheffield | Professional Aerial Surveys',
    description: 'Professional drone survey services across South Yorkshire. CAA-approved drone operators with Sheffield industrial expertise.',
  },
};

export default function SheffieldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
