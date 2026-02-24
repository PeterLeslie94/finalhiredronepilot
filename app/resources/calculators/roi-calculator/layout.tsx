import { Metadata } from 'next';
import { getCalculatorBySlug } from '@/data/resources';

const calculator = getCalculatorBySlug('roi-calculator');

export const metadata: Metadata = {
  title: calculator?.seoTitle || 'Drone Survey ROI Calculator | Cost Savings Analysis UK',
  description: calculator?.seoDescription || 'Calculate ROI for drone surveys vs traditional methods. See potential savings in time, cost, and safety. Free comparison tool for UK projects.',
  keywords: calculator?.seoKeywords?.join(', ') || 'drone survey ROI, drone vs traditional survey cost, aerial survey savings, drone survey benefits',
  alternates: {
    canonical: 'https://hiredronepilot.uk/resources/calculators/roi-calculator',
  },
  openGraph: {
    title: calculator?.seoTitle || 'Drone Survey ROI Calculator',
    description: calculator?.seoDescription || 'Calculate ROI for drone surveys vs traditional methods. See potential savings in time, cost, and safety.',
    url: 'https://hiredronepilot.uk/resources/calculators/roi-calculator',
    siteName: 'Hire Drone Pilot',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: calculator?.seoTitle || 'Drone Survey ROI Calculator',
    description: calculator?.seoDescription || 'Calculate ROI for drone surveys vs traditional methods.',
  },
};

export default function ROICalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
