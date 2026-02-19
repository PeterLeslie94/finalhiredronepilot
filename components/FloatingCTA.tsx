'use client';

import { useEffect, useState } from 'react';

import QuoteMultiStepForm from '@/components/QuoteMultiStepForm';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('openQuoteModal', handleOpenModal);

    const equipmentTrigger = document.getElementById('equipment-trigger');
    if (equipmentTrigger) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        { threshold: 0.1 },
      );
      observer.observe(equipmentTrigger);

      return () => {
        observer.disconnect();
        window.removeEventListener('openQuoteModal', handleOpenModal);
      };
    }

    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openQuoteModal', handleOpenModal);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        className={`hidden md:block fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-teal rounded-2xl p-5 shadow-2xl shadow-black/20 border border-gold/20 max-w-[280px]">
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-white/90 text-sm font-medium">We&apos;re Online</span>
          </div>

          <p className="text-white font-semibold mb-4">Got a project to discuss?</p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="block w-full text-center bg-gold text-teal-dark font-semibold py-2.5 px-4 rounded-full hover:bg-gold-hover transition-colors btn-shimmer text-sm"
          >
            Talk To Our Team
          </button>

          <a
            href="tel:+441334804554"
            className="flex items-center justify-center gap-2 text-gold/80 hover:text-gold text-sm mt-3 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            or call +44 1334 804554
          </a>
        </div>
      </div>

      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible && !isModalOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
        }`}
      >
        <div className="bg-teal border-t border-gold/20 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <div className="flex gap-3">
            <a
              href="tel:+441334804554"
              className="flex-1 flex items-center justify-center gap-2 bg-teal-dark text-white font-semibold py-3 px-4 rounded-full border border-gold/30 hover:border-gold/50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 bg-gold text-teal-dark font-semibold py-3 px-4 rounded-full btn-shimmer"
            >
              Get Advice
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />

          <div className="relative bg-teal rounded-2xl p-6 md:p-8 w-full max-w-xl shadow-2xl animate-fade-in">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-white/90 text-sm font-medium">We&apos;re Online</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">Receive Multiple Quotes From Drone Pilots</h3>
            <p className="text-white/70 text-sm mb-6">Share your scope once and we&apos;ll route it to independent drone pilots.</p>

            <QuoteMultiStepForm
              sourceForm="multistep-modal"
              compact
              submitLabel="Send Enquiry"
              onSuccess={() => {
                setIsModalOpen(false);
                window.location.href = '/thank-you';
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
