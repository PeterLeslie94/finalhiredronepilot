import { Metadata } from 'next';
import { getCalculatorBySlug } from '@/data/resources';

const calculator = getCalculatorBySlug('area-measurement-tool');

export const metadata: Metadata = {
  title: calculator?.seoTitle || 'Site Area Measurement Tool | Calculate Survey Coverage UK',
  description: calculator?.seoDescription || 'Measure your site area online for drone survey planning. Draw boundaries, calculate hectares, and estimate coverage. Free tool from UK drone survey experts.',
  keywords: calculator?.seoKeywords?.join(', ') || 'site area calculator, land measurement tool, hectare calculator, survey area measurement',
  openGraph: {
    title: calculator?.seoTitle || 'Site Area Measurement Tool',
    description: calculator?.seoDescription || 'Measure your site area online for drone survey planning.',
    type: 'website',
    locale: 'en_GB',
  },
};

export default function AreaMeasurementToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
