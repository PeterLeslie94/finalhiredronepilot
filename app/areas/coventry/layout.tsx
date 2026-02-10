import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Coventry | Professional Aerial Surveys in Coventry',
  description: 'Professional drone survey services in Coventry and Warwickshire. CAA-approved drone operators delivering precision aerial data for automotive, manufacturing, university, and construction projects. Get a free quote today.',
  keywords: 'drone survey coventry, aerial survey coventry, drone mapping coventry, drone surveyor coventry, topographic survey coventry, lidar survey coventry, drone services coventry, aerial photography coventry',
  alternates: {
    canonical: 'https://skykam.co.uk/areas/coventry',
  },
  openGraph: {
    title: 'Drone Survey Coventry | Professional Aerial Surveys',
    description: 'Professional drone survey services across Coventry and Warwickshire. CAA-approved drone operators with expertise in automotive, manufacturing, and university projects.',
    url: 'https://skykam.co.uk/areas/coventry',
    siteName: 'Skykam Drone Inspections',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Coventry | Professional Aerial Surveys',
    description: 'Professional drone survey services across Coventry and Warwickshire. CAA-approved drone operators with expertise in automotive, manufacturing, and university projects.',
  },
};

export default function CoventryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
