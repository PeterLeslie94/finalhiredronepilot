import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Brighton | Professional Aerial Surveys in Brighton',
  description: 'Professional drone survey services in Brighton and East Sussex. CAA-approved drone operators delivering precision aerial data for tech, creative, and tourism projects. Get a free quote today.',
  keywords: 'drone survey brighton, aerial survey brighton, drone mapping brighton, drone surveyor brighton, topographic survey brighton, lidar survey brighton, drone services brighton, aerial photography brighton',
  alternates: {
    canonical: 'https://hiredronepilot.uk/cities/brighton',
  },
  openGraph: {
    title: 'Drone Survey Brighton | Professional Aerial Surveys',
    description: 'Professional drone survey services across Brighton and East Sussex. CAA-approved drone operators with tech and creative sector expertise.',
    url: 'https://hiredronepilot.uk/cities/brighton',
    siteName: 'Hire Drone Pilot',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Brighton | Professional Aerial Surveys',
    description: 'Professional drone survey services across Brighton and East Sussex. CAA-approved drone operators with tech and creative sector expertise.',
  },
};

export default function BrightonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
