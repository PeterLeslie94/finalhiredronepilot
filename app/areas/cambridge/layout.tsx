import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Cambridge | Professional Aerial Surveys in Cambridge',
  description: 'Professional drone survey services in Cambridge and Cambridgeshire. CAA-approved drone operators delivering precision aerial data for biotech, research, university, and construction projects. Get a free quote today.',
  keywords: 'drone survey cambridge, aerial survey cambridge, drone mapping cambridge, drone surveyor cambridge, topographic survey cambridge, lidar survey cambridge, drone services cambridge, aerial photography cambridge, cambridge university drone survey',
  alternates: {
    canonical: 'https://skykam.co.uk/areas/cambridge',
  },
  openGraph: {
    title: 'Drone Survey Cambridge | Professional Aerial Surveys',
    description: 'Professional drone survey services across Cambridge and Cambridgeshire. CAA-approved drone operators with expertise in biotech and research facility surveys.',
    url: 'https://skykam.co.uk/areas/cambridge',
    siteName: 'Skykam Drone Inspections',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Cambridge | Professional Aerial Surveys',
    description: 'Professional drone survey services across Cambridge and Cambridgeshire. CAA-approved drone operators with expertise in biotech and research facility surveys.',
  },
};

export default function CambridgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
