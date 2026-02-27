'use client';

import { usePathname } from 'next/navigation';
import DroneCarousel from './DroneCarousel';
import SensorCard from './SensorCard';
import DiagonalDivider from './DiagonalDivider';
import { drones, sensors } from '@/data/equipment';

export default function EquipmentSection() {
  const pathname = usePathname();

  if (pathname?.startsWith('/services/')) {
    return null;
  }

  return (
    <>
      {/* Drone Fleet Section */}
      <section className="section bg-gradient-to-b from-white via-background-alt to-teal-dark overflow-hidden">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
              Drone Pilot Network Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Nationwide Drone Pilot Network. Enterprise-Grade Fleet Access.
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto mb-8">
              From one form, access independent drone pilots equipped with high-performance platforms and specialist payloads for complex UK projects.
            </p>

            {/* Differentiator Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-2">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-teal font-medium text-sm">High-Precision Navigation</span>
              </div>
              <div className="flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-2">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-teal font-medium text-sm">Specialist Sensor Payloads</span>
              </div>
              <div className="flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-2">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-teal font-medium text-sm">Mission-Ready Operators</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Carousel */}
        <div className="max-w-5xl mx-auto px-8 overflow-visible">
          <DroneCarousel drones={drones} />
        </div>

        {/* Swipe hint for mobile */}
        <p className="text-center text-white/40 text-sm mt-4 md:hidden">
          ← Swipe to explore fleet →
        </p>
      </section>

      <DiagonalDivider fromColor="teal-dark" toColor="teal-dark" />

      {/* Sensors Section */}
      <section className="section bg-teal-dark">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
              Why Use HireDronePilot
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Independent Drone Pilots. Better Quotes. Less Hassle.
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Post one brief and compare quotes from independent drone pilots for your project.
            </p>
          </div>

          {/* Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sensors.map((sensor) => (
              <SensorCard key={sensor.id} sensor={sensor} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-white/60 mb-4">Ready to compare independent drone pilot quotes?</p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
              className="inline-flex items-center gap-2 bg-gold text-teal-dark font-semibold px-6 py-3 rounded-full hover:bg-gold/90 transition-colors btn-shimmer btn-pop-on-scroll"
            >
              Compare Quotes
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="teal-dark" toColor="background-alt" />
    </>
  );
}
