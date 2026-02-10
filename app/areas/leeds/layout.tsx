import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Leeds | Professional Aerial Surveys in Leeds',
  description: 'Professional drone survey services in Leeds and West Yorkshire. CAA-approved drone operators delivering precision aerial data for finance, legal, property, and construction projects. Get a free quote today.',
  keywords: 'drone survey leeds, aerial survey leeds, drone mapping leeds, drone surveyor leeds, topographic survey leeds, lidar survey leeds, drone services leeds, aerial photography leeds, west yorkshire drone survey',
  alternates: {
    canonical: 'https://skykam.co.uk/areas/leeds',
  },
  openGraph: {
    title: 'Drone Survey Leeds | Professional Aerial Surveys',
    description: 'Professional drone survey services across West Yorkshire. CAA-approved drone operators with Leeds airspace expertise.',
    url: 'https://skykam.co.uk/areas/leeds',
    siteName: 'Skykam Drone Inspections',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Leeds | Professional Aerial Surveys',
    description: 'Professional drone survey services across West Yorkshire. CAA-approved drone operators with Leeds airspace expertise.',
  },
};

export default function LeedsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
