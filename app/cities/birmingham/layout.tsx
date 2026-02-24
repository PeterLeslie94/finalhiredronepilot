import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Birmingham | Professional Aerial Surveys in Birmingham',
  description: 'Professional drone survey services in Birmingham and the West Midlands. CAA-approved drone operators delivering precision aerial data for HS2, construction, automotive, and infrastructure projects. Get a free quote today.',
  keywords: 'drone survey birmingham, aerial survey birmingham, drone mapping birmingham, drone surveyor birmingham, topographic survey birmingham, lidar survey birmingham, drone services birmingham, aerial photography birmingham, hs2 drone survey',
  alternates: {
    canonical: 'https://hiredronepilot.uk/cities/birmingham',
  },
  openGraph: {
    title: 'Drone Survey Birmingham | Professional Aerial Surveys',
    description: 'Professional drone survey services across Birmingham and the West Midlands. CAA-approved drone operators with expertise in HS2 and major infrastructure projects.',
    url: 'https://hiredronepilot.uk/cities/birmingham',
    siteName: 'Hire Drone Pilot',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Birmingham | Professional Aerial Surveys',
    description: 'Professional drone survey services across Birmingham and the West Midlands. CAA-approved drone operators with expertise in HS2 and major infrastructure projects.',
  },
};

export default function BirminghamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
