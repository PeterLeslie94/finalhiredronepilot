import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Reading | Professional Aerial Surveys in Reading',
  description: 'Professional drone survey services in Reading and Berkshire. CAA-approved drone operators delivering precision aerial data for tech companies, corporate headquarters, and Thames Valley developments. Get a free quote today.',
  keywords: 'drone survey reading, aerial survey reading, drone mapping reading, drone surveyor reading, topographic survey reading, lidar survey reading, drone services reading, aerial photography reading, thames valley drone survey',
  alternates: {
    canonical: 'https://hiredronepilot.uk/cities/reading',
  },
  openGraph: {
    title: 'Drone Survey Reading | Professional Aerial Surveys',
    description: 'Professional drone survey services across Reading and the Thames Valley. CAA-approved drone operators with expertise in corporate and tech park surveys.',
    url: 'https://hiredronepilot.uk/cities/reading',
    siteName: 'Hire Drone Pilot',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Reading | Professional Aerial Surveys',
    description: 'Professional drone survey services across Reading and the Thames Valley. CAA-approved drone operators with expertise in corporate and tech park surveys.',
  },
};

export default function ReadingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
