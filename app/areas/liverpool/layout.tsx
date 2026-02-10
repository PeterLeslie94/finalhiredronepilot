import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Liverpool | Professional Aerial Surveys in Liverpool',
  description: 'Professional drone survey services in Liverpool and Merseyside. CAA-approved drone operators delivering precision aerial data for port, maritime, regeneration, and construction projects. Get a free quote today.',
  keywords: 'drone survey liverpool, aerial survey liverpool, drone mapping liverpool, drone surveyor liverpool, topographic survey liverpool, lidar survey liverpool, drone services liverpool, aerial photography liverpool, merseyside drone survey',
  alternates: {
    canonical: 'https://skykam.co.uk/areas/liverpool',
  },
  openGraph: {
    title: 'Drone Survey Liverpool | Professional Aerial Surveys',
    description: 'Professional drone survey services across Merseyside. CAA-approved drone operators with Liverpool airspace expertise.',
    url: 'https://skykam.co.uk/areas/liverpool',
    siteName: 'Skykam Drone Inspections',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Liverpool | Professional Aerial Surveys',
    description: 'Professional drone survey services across Merseyside. CAA-approved drone operators with Liverpool airspace expertise.',
  },
};

export default function LiverpoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
