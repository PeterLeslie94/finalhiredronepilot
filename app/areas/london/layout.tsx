import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey London | Professional Aerial Surveys in London',
  description: 'Professional drone survey services in London and Greater London. CAA-approved drone operators delivering precision aerial data for construction, infrastructure, and land projects. Get a free quote today.',
  keywords: 'drone survey london, aerial survey london, drone mapping london, drone surveyor london, topographic survey london, lidar survey london, drone services london, aerial photography london',
  alternates: {
    canonical: 'https://skykam.co.uk/areas/london',
  },
  openGraph: {
    title: 'Drone Survey London | Professional Aerial Surveys',
    description: 'Professional drone survey services across Greater London. CAA-approved drone operators with London airspace expertise.',
    url: 'https://skykam.co.uk/areas/london',
    siteName: 'Skykam Drone Inspections',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey London | Professional Aerial Surveys',
    description: 'Professional drone survey services across Greater London. CAA-approved drone operators with London airspace expertise.',
  },
};

export default function LondonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
