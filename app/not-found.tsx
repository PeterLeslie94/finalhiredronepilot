import Link from 'next/link';
import QuoteButton from '@/components/QuoteButton';

export default function NotFound() {
  return (
    <section className="section bg-white min-h-[60vh] flex items-center">
      <div className="container max-w-2xl text-center">
        <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
          Page Not Found
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-teal mb-4">404</h1>
        <p className="text-text-secondary text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Try searching our services or get a quote for your drone project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn btn-outline">
            Back to Home
          </Link>
          <QuoteButton className="btn btn-primary btn-shimmer">
            Compare Quotes
          </QuoteButton>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-text-secondary">
          <Link href="/services" className="hover:text-gold transition-colors">
            All Services
          </Link>
          <span className="text-border">|</span>
          <Link href="/cities" className="hover:text-gold transition-colors">
            Areas Covered
          </Link>
          <span className="text-border">|</span>
          <Link href="/contact" className="hover:text-gold transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
