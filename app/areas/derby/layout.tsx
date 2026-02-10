import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Derby | Professional Aerial Surveys in Derby',
  description: 'Professional drone survey services in Derby and Derbyshire. CAA-approved drone operators delivering precision aerial data for rail, aerospace, Rolls-Royce, and construction projects. Get a free quote today.',
  keywords: 'drone survey derby, aerial survey derby, drone mapping derby, drone surveyor derby, topographic survey derby, lidar survey derby, drone services derby, aerial photography derby, rolls-royce drone survey',
  alternates: {
    canonical: 'https://skykam.co.uk/areas/derby',
  },
  openGraph: {
    title: 'Drone Survey Derby | Professional Aerial Surveys',
    description: 'Professional drone survey services across Derby and Derbyshire. CAA-approved drone operators with expertise in rail, aerospace, and Rolls-Royce projects.',
    url: 'https://skykam.co.uk/areas/derby',
    siteName: 'Skykam Drone Inspections',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Derby | Professional Aerial Surveys',
    description: 'Professional drone survey services across Derby and Derbyshire. CAA-approved drone operators with expertise in rail, aerospace, and Rolls-Royce projects.',
  },
};

export default function DerbyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
