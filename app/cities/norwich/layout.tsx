import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Norwich | Professional Aerial Surveys in Norwich',
  description: 'Professional drone survey services in Norwich and Norfolk. CAA-approved drone operators delivering precision aerial data for agriculture, insurance, heritage, and construction projects. Get a free quote today.',
  keywords: 'drone survey norwich, aerial survey norwich, drone mapping norwich, drone surveyor norwich, topographic survey norwich, lidar survey norwich, drone services norwich, aerial photography norwich, agricultural drone survey norfolk',
  alternates: {
    canonical: 'https://hiredronepilot.uk/cities/norwich',
  },
  openGraph: {
    title: 'Drone Survey Norwich | Professional Aerial Surveys',
    description: 'Professional drone survey services across Norwich and Norfolk. CAA-approved drone operators with expertise in agricultural and heritage surveys.',
    url: 'https://hiredronepilot.uk/cities/norwich',
    siteName: 'Hire Drone Pilot',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Norwich | Professional Aerial Surveys',
    description: 'Professional drone survey services across Norwich and Norfolk. CAA-approved drone operators with expertise in agricultural and heritage surveys.',
  },
};

export default function NorwichLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
