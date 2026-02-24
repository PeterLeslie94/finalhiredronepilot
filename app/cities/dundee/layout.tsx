import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Dundee | Our Headquarters - Professional Aerial Surveys',
  description: 'Professional drone survey services from our Dundee headquarters. CAA-approved drone operators delivering precision aerial data for gaming, biotech, and construction projects. Same-day response available from our local base.',
  keywords: 'drone survey dundee, aerial survey dundee, drone mapping dundee, drone surveyor dundee, topographic survey dundee, lidar survey dundee, drone services dundee, dundee drone company',
  alternates: {
    canonical: 'https://hiredronepilot.uk/cities/dundee',
  },
  openGraph: {
    title: 'Drone Survey Dundee | Our Headquarters - Professional Aerial Surveys',
    description: 'Professional drone survey services from our Dundee headquarters. Same-day mobilisation available for local projects.',
    url: 'https://hiredronepilot.uk/cities/dundee',
    siteName: 'Hire Drone Pilot',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Dundee | Our Headquarters - Professional Aerial Surveys',
    description: 'Professional drone survey services from our Dundee headquarters. Same-day mobilisation available for local projects.',
  },
};

export default function DundeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
