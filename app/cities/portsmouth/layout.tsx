import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Portsmouth | Professional Aerial Surveys in Portsmouth',
  description: 'Professional drone survey services in Portsmouth and Hampshire. CAA-approved drone operators delivering precision aerial data for naval, defence, and heritage projects. Get a free quote today.',
  keywords: 'drone survey portsmouth, aerial survey portsmouth, drone mapping portsmouth, drone surveyor portsmouth, topographic survey portsmouth, lidar survey portsmouth, drone services portsmouth, aerial photography portsmouth',
  alternates: {
    canonical: 'https://hiredronepilot.uk/cities/portsmouth',
  },
  openGraph: {
    title: 'Drone Survey Portsmouth | Professional Aerial Surveys',
    description: 'Professional drone survey services across Portsmouth and Hampshire. CAA-approved drone operators with naval and defence sector expertise.',
    url: 'https://hiredronepilot.uk/cities/portsmouth',
    siteName: 'Hire Drone Pilot',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Portsmouth | Professional Aerial Surveys',
    description: 'Professional drone survey services across Portsmouth and Hampshire. CAA-approved drone operators with naval and defence sector expertise.',
  },
};

export default function PortsmouthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
