import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Cardiff | Professional Aerial Surveys in Cardiff',
  description: 'Professional drone survey services in Cardiff and South Wales. CAA-approved drone operators delivering precision aerial data for construction, infrastructure, and land projects. Get a free quote today.',
  keywords: 'drone survey cardiff, aerial survey cardiff, drone mapping cardiff, drone surveyor cardiff, topographic survey cardiff, lidar survey cardiff, drone services cardiff, drone survey wales',
  alternates: {
    canonical: 'https://hiredronepilot.uk/cities/cardiff',
  },
  openGraph: {
    title: 'Drone Survey Cardiff | Professional Aerial Surveys',
    description: 'Professional drone survey services across Cardiff and South Wales. CAA-approved drone operators for construction, infrastructure, and land projects.',
    url: 'https://hiredronepilot.uk/cities/cardiff',
    siteName: 'Hire Drone Pilot',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Cardiff | Professional Aerial Surveys',
    description: 'Professional drone survey services across Cardiff and South Wales. CAA-approved drone operators for construction, infrastructure, and land projects.',
  },
};

export default function CardiffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
