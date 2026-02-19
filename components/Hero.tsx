'use client';

import Link from 'next/link';

interface HeroProps {
  title: React.ReactNode;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  mobileBackgroundImage?: string;
  showBadge?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCta = { text: 'Compare Quotes', href: '/quote' },
  secondaryCta = { text: 'Our Services', href: '/services' },
  backgroundImage = '/images/hero-bg.jpg',
  mobileBackgroundImage,
  showBadge = true,
}: HeroProps) {
  return (
    <section className="relative min-h-[800px] md:min-h-[600px] flex items-start overflow-hidden bg-teal -mt-[120px] pt-[120px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        {/* Desktop background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        {/* Mobile background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{
            backgroundImage: `url(${mobileBackgroundImage || backgroundImage})`,
          }}
        />
      </div>


      {/* Content */}
      <div className="container relative z-20 py-16 lg:py-24">
        <div className="max-w-2xl mt-8 md:mt-0">
          {subtitle && (
            <p className="text-gold font-semibold uppercase tracking-wider mb-4 text-sm md:text-base">
              {subtitle}
            </p>
          )}

          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>

          {description && (
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
              className="btn btn-primary btn-shimmer"
            >
              {primaryCta.text}
            </button>
            <Link href={secondaryCta.href} className="btn btn-outline-white">
              {secondaryCta.text}
            </Link>
          </div>

          {/* Urgency message */}
          <p className="mt-4 text-white/70 text-sm flex items-center gap-2">
            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Avg Response within 5 Mins • Or call{' '}
            <a href="tel:+441334804554" className="text-gold hover:underline font-medium">
              +44 1334 804554
            </a>
          </p>

        </div>
      </div>

      {/* Bottom Diagonal Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 z-30">
        <svg
          className="absolute bottom-0 w-full h-16 md:h-20"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="white"
        >
          <path d="M0,80 L1440,80 L1440,0 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
