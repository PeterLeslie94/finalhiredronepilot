import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Bristol | Professional Aerial Surveys in Bristol',
  description: 'Professional drone survey services in Bristol and the South West. CAA-approved drone operators delivering precision aerial data for construction, aerospace, and tech projects. Get a free quote today.',
  keywords: 'drone survey bristol, aerial survey bristol, drone mapping bristol, drone surveyor bristol, topographic survey bristol, lidar survey bristol, drone services bristol, aerial photography bristol',
  alternates: {
    canonical: 'https://skykam.co.uk/areas/bristol',
  },
  openGraph: {
    title: 'Drone Survey Bristol | Professional Aerial Surveys',
    description: 'Professional drone survey services across Bristol and the South West. CAA-approved drone operators with aerospace and tech sector expertise.',
    url: 'https://skykam.co.uk/areas/bristol',
    siteName: 'Skykam Drone Inspections',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Bristol | Professional Aerial Surveys',
    description: 'Professional drone survey services across Bristol and the South West. CAA-approved drone operators with aerospace and tech sector expertise.',
  },
};

export default function BristolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
