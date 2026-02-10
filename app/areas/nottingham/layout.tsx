import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Nottingham | Professional Aerial Surveys in Nottingham',
  description: 'Professional drone survey services in Nottingham and Nottinghamshire. CAA-approved drone operators delivering precision aerial data for pharmaceutical, retail, university, and construction projects. Get a free quote today.',
  keywords: 'drone survey nottingham, aerial survey nottingham, drone mapping nottingham, drone surveyor nottingham, topographic survey nottingham, lidar survey nottingham, drone services nottingham, aerial photography nottingham',
  alternates: {
    canonical: 'https://skykam.co.uk/areas/nottingham',
  },
  openGraph: {
    title: 'Drone Survey Nottingham | Professional Aerial Surveys',
    description: 'Professional drone survey services across Nottingham and Nottinghamshire. CAA-approved drone operators with expertise in pharmaceutical, retail, and university projects.',
    url: 'https://skykam.co.uk/areas/nottingham',
    siteName: 'Skykam Drone Inspections',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Nottingham | Professional Aerial Surveys',
    description: 'Professional drone survey services across Nottingham and Nottinghamshire. CAA-approved drone operators with expertise in pharmaceutical, retail, and university projects.',
  },
};

export default function NottinghamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
