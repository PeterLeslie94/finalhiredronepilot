import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Manchester | Professional Aerial Surveys in Manchester',
  description: 'Professional drone survey services in Manchester and Greater Manchester. CAA-approved drone operators delivering precision aerial data for construction, media, tech, and infrastructure projects. Get a free quote today.',
  keywords: 'drone survey manchester, aerial survey manchester, drone mapping manchester, drone surveyor manchester, topographic survey manchester, lidar survey manchester, drone services manchester, aerial photography manchester',
  alternates: {
    canonical: 'https://skykam.co.uk/areas/manchester',
  },
  openGraph: {
    title: 'Drone Survey Manchester | Professional Aerial Surveys',
    description: 'Professional drone survey services across Greater Manchester. CAA-approved drone operators with Manchester airspace expertise.',
    url: 'https://skykam.co.uk/areas/manchester',
    siteName: 'Skykam Drone Inspections',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Manchester | Professional Aerial Surveys',
    description: 'Professional drone survey services across Greater Manchester. CAA-approved drone operators with Manchester airspace expertise.',
  },
};

export default function ManchesterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
