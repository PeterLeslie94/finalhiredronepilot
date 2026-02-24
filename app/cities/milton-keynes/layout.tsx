import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Survey Milton Keynes | Professional Aerial Surveys in Milton Keynes',
  description: 'Professional drone survey services in Milton Keynes and Buckinghamshire. CAA-approved drone operators delivering precision aerial data for logistics, tech parks, and new developments. Get a free quote today.',
  keywords: 'drone survey milton keynes, aerial survey milton keynes, drone mapping milton keynes, drone surveyor milton keynes, topographic survey milton keynes, lidar survey milton keynes, drone services milton keynes, aerial photography milton keynes, mk drone survey',
  alternates: {
    canonical: 'https://hiredronepilot.uk/cities/milton-keynes',
  },
  openGraph: {
    title: 'Drone Survey Milton Keynes | Professional Aerial Surveys',
    description: 'Professional drone survey services across Milton Keynes and surrounding areas. CAA-approved drone operators with expertise in logistics and new development surveys.',
    url: 'https://hiredronepilot.uk/cities/milton-keynes',
    siteName: 'Hire Drone Pilot',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Survey Milton Keynes | Professional Aerial Surveys',
    description: 'Professional drone survey services across Milton Keynes and surrounding areas. CAA-approved drone operators with expertise in logistics and new development surveys.',
  },
};

export default function MiltonKeynesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
