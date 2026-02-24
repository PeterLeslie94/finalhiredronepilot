import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Swansea | Professional Aerial Surveys in Swansea',
  description: 'Professional drone survey services in Swansea and West Wales. CAA-approved drone operators delivering precision aerial data for construction, coastal, and land projects. Get a free quote today.',
  keywords: 'drone survey swansea, aerial survey swansea, drone mapping swansea, drone surveyor swansea, topographic survey swansea, lidar survey swansea, drone services swansea, drone survey wales',
  alternates: {
    canonical: 'https://hiredronepilot.uk/cities/swansea',
  },
  openGraph: {
    title: 'Drone Survey Swansea | Professional Aerial Surveys',
    description: 'Professional drone survey services across Swansea and West Wales. CAA-approved drone operators for construction, coastal, and land projects.',
    url: 'https://hiredronepilot.uk/cities/swansea',
    siteName: 'Hire Drone Pilot',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Swansea | Professional Aerial Surveys',
    description: 'Professional drone survey services across Swansea and West Wales. CAA-approved drone operators for construction, coastal, and land projects.',
  },
};

export default function SwanseaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
