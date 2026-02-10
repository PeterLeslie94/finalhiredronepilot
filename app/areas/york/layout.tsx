import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey York | Professional Aerial Surveys in York',
  description: 'Professional drone survey services in York and North Yorkshire. CAA-approved drone operators delivering precision aerial data for heritage, construction, university, and rail projects. Get a free quote today.',
  keywords: 'drone survey york, aerial survey york, drone mapping york, drone surveyor york, topographic survey york, lidar survey york, drone services york, aerial photography york, heritage survey york',
  alternates: {
    canonical: 'https://skykam.co.uk/areas/york',
  },
  openGraph: {
    title: 'Drone Survey York | Professional Aerial Surveys',
    description: 'Professional drone survey services across York and North Yorkshire. CAA-approved drone operators with heritage and historic site expertise.',
    url: 'https://skykam.co.uk/areas/york',
    siteName: 'Skykam Drone Inspections',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey York | Professional Aerial Surveys',
    description: 'Professional drone survey services across York and North Yorkshire. CAA-approved drone operators with heritage and historic site expertise.',
  },
};

export default function YorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
