import { Metadata } from 'next';
import { getCalculatorBySlug } from '@/data/resources';

const calculator = getCalculatorBySlug('survey-cost-estimator');

export const metadata: Metadata = {
  title: calculator?.seoTitle || 'Drone Survey Cost Calculator | Instant Price Estimates UK',
  description: calculator?.seoDescription || 'Calculate drone survey costs instantly. Get accurate price estimates based on site size, deliverables, and requirements. Free tool from UK drone survey experts.',
  keywords: calculator?.seoKeywords || ['drone survey cost', 'drone survey price', 'aerial survey cost calculator', 'UK drone survey pricing'],
  openGraph: {
    title: calculator?.seoTitle || 'Drone Survey Cost Calculator | Instant Price Estimates UK',
    description: calculator?.seoDescription || 'Calculate drone survey costs instantly. Get accurate price estimates based on site size, deliverables, and requirements.',
    url: 'https://hiredronepilot.uk/resources/calculators/survey-cost-estimator',
    siteName: 'Hire Drone Pilot',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: calculator?.seoTitle || 'Drone Survey Cost Calculator',
    description: calculator?.seoDescription || 'Calculate drone survey costs instantly.',
  },
  alternates: {
    canonical: 'https://hiredronepilot.uk/resources/calculators/survey-cost-estimator',
  },
};

export default function SurveyCostEstimatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
