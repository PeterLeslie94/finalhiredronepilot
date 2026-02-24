import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Southampton | Professional Aerial Surveys in Southampton',
  description: 'Professional drone survey services in Southampton and Hampshire. CAA-approved drone operators delivering precision aerial data for port, cruise, and university projects. Get a free quote today.',
  keywords: 'drone survey southampton, aerial survey southampton, drone mapping southampton, drone surveyor southampton, topographic survey southampton, lidar survey southampton, drone services southampton, aerial photography southampton',
  alternates: {
    canonical: 'https://hiredronepilot.uk/cities/southampton',
  },
  openGraph: {
    title: 'Drone Survey Southampton | Professional Aerial Surveys',
    description: 'Professional drone survey services across Southampton and Hampshire. CAA-approved drone operators with port and maritime sector expertise.',
    url: 'https://hiredronepilot.uk/cities/southampton',
    siteName: 'Hire Drone Pilot',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Southampton | Professional Aerial Surveys',
    description: 'Professional drone survey services across Southampton and Hampshire. CAA-approved drone operators with port and maritime sector expertise.',
  },
};

export default function SouthamptonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
