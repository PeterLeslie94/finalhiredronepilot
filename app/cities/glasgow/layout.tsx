import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Glasgow | Professional Aerial Surveys in Glasgow',
  description: 'Professional drone survey services in Glasgow and the Clyde Valley. CAA-approved drone operators delivering precision aerial data for construction, shipbuilding, and tech industry projects. Based in nearby Dundee for fast response.',
  keywords: 'drone survey glasgow, aerial survey glasgow, drone mapping glasgow, drone surveyor glasgow, topographic survey glasgow, lidar survey glasgow, drone services glasgow, industrial survey glasgow',
  alternates: {
    canonical: 'https://hiredronepilot.uk/cities/glasgow',
  },
  openGraph: {
    title: 'Drone Survey Glasgow | Professional Aerial Surveys',
    description: 'Professional drone survey services across Glasgow and the Clyde Valley. CAA-approved drone operators with industrial survey expertise.',
    url: 'https://hiredronepilot.uk/cities/glasgow',
    siteName: 'Hire Drone Pilot',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Glasgow | Professional Aerial Surveys',
    description: 'Professional drone survey services across Glasgow and the Clyde Valley. CAA-approved drone operators with industrial survey expertise.',
  },
};

export default function GlasgowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
