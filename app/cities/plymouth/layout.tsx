import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Plymouth | Professional Aerial Surveys in Plymouth',
  description: 'Professional drone survey services in Plymouth and Devon. CAA-approved drone operators delivering precision aerial data for naval, marine, and university projects. Get a free quote today.',
  keywords: 'drone survey plymouth, aerial survey plymouth, drone mapping plymouth, drone surveyor plymouth, topographic survey plymouth, lidar survey plymouth, drone services plymouth, aerial photography plymouth',
  alternates: {
    canonical: 'https://hiredronepilot.uk/cities/plymouth',
  },
  openGraph: {
    title: 'Drone Survey Plymouth | Professional Aerial Surveys',
    description: 'Professional drone survey services across Plymouth and Devon. CAA-approved drone operators with naval and marine sector expertise.',
    url: 'https://hiredronepilot.uk/cities/plymouth',
    siteName: 'Hire Drone Pilot',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Plymouth | Professional Aerial Surveys',
    description: 'Professional drone survey services across Plymouth and Devon. CAA-approved drone operators with naval and marine sector expertise.',
  },
};

export default function PlymouthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
