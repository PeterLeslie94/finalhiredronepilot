import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Oxford | Professional Aerial Surveys in Oxford',
  description: 'Professional drone survey services in Oxford and Oxfordshire. CAA-approved drone operators delivering precision aerial data for automotive, university, publishing, and research projects. Get a free quote today.',
  keywords: 'drone survey oxford, aerial survey oxford, drone mapping oxford, drone surveyor oxford, topographic survey oxford, lidar survey oxford, drone services oxford, aerial photography oxford, oxford university drone survey',
  alternates: {
    canonical: 'https://skykam.co.uk/areas/oxford',
  },
  openGraph: {
    title: 'Drone Survey Oxford | Professional Aerial Surveys',
    description: 'Professional drone survey services across Oxford and Oxfordshire. CAA-approved drone operators with expertise in automotive and research facility surveys.',
    url: 'https://skykam.co.uk/areas/oxford',
    siteName: 'Skykam Drone Inspections',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Oxford | Professional Aerial Surveys',
    description: 'Professional drone survey services across Oxford and Oxfordshire. CAA-approved drone operators with expertise in automotive and research facility surveys.',
  },
};

export default function OxfordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
