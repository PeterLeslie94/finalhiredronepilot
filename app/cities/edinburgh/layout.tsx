import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Edinburgh | Professional Aerial Surveys in Edinburgh',
  description: 'Professional drone survey services in Edinburgh and the Lothians. CAA-approved drone operators delivering precision aerial data for construction, heritage, and property projects. Based in nearby Dundee for fast response.',
  keywords: 'drone survey edinburgh, aerial survey edinburgh, drone mapping edinburgh, drone surveyor edinburgh, topographic survey edinburgh, lidar survey edinburgh, drone services edinburgh, heritage survey edinburgh',
  alternates: {
    canonical: 'https://hiredronepilot.uk/cities/edinburgh',
  },
  openGraph: {
    title: 'Drone Survey Edinburgh | Professional Aerial Surveys',
    description: 'Professional drone survey services across Edinburgh and the Lothians. CAA-approved drone operators with heritage survey expertise.',
    url: 'https://hiredronepilot.uk/cities/edinburgh',
    siteName: 'Hire Drone Pilot',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Edinburgh | Professional Aerial Surveys',
    description: 'Professional drone survey services across Edinburgh and the Lothians. CAA-approved drone operators with heritage survey expertise.',
  },
};

export default function EdinburghLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
