import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Newcastle | Professional Aerial Surveys in Newcastle',
  description: 'Professional drone survey services in Newcastle and the North East. CAA-approved drone operators delivering precision aerial data for energy, offshore, regeneration, and construction projects. Get a free quote today.',
  keywords: 'drone survey newcastle, aerial survey newcastle, drone mapping newcastle, drone surveyor newcastle, topographic survey newcastle, lidar survey newcastle, drone services newcastle, aerial photography newcastle, north east drone survey, tyne and wear drone survey',
  alternates: {
    canonical: 'https://hiredronepilot.uk/cities/newcastle',
  },
  openGraph: {
    title: 'Drone Survey Newcastle | Professional Aerial Surveys',
    description: 'Professional drone survey services across the North East. CAA-approved drone operators with Newcastle and offshore expertise.',
    url: 'https://hiredronepilot.uk/cities/newcastle',
    siteName: 'Hire Drone Pilot',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Newcastle | Professional Aerial Surveys',
    description: 'Professional drone survey services across the North East. CAA-approved drone operators with Newcastle and offshore expertise.',
  },
};

export default function NewcastleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
