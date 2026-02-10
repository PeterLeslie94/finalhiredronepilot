import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Aberdeen | Professional Aerial Surveys in Aberdeen',
  description: 'Professional drone survey services in Aberdeen and Aberdeenshire. CAA-approved drone operators delivering precision aerial data for oil and gas, renewable energy, and construction projects. Based in nearby Dundee for fast response.',
  keywords: 'drone survey aberdeen, aerial survey aberdeen, drone mapping aberdeen, drone surveyor aberdeen, topographic survey aberdeen, lidar survey aberdeen, drone services aberdeen, oil gas survey aberdeen, energy survey aberdeen',
  alternates: {
    canonical: 'https://skykam.co.uk/areas/aberdeen',
  },
  openGraph: {
    title: 'Drone Survey Aberdeen | Professional Aerial Surveys',
    description: 'Professional drone survey services across Aberdeen and Aberdeenshire. CAA-approved drone operators with energy sector expertise.',
    url: 'https://skykam.co.uk/areas/aberdeen',
    siteName: 'Skykam Drone Inspections',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Aberdeen | Professional Aerial Surveys',
    description: 'Professional drone survey services across Aberdeen and Aberdeenshire. CAA-approved drone operators with energy sector expertise.',
  },
};

export default function AberdeenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
