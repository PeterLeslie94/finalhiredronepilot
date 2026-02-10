'use client';

import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    // Listen for custom event to open modal from other components
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('openQuoteModal', handleOpenModal);

    // Check for equipment-trigger element (LiDAR page specific)
    const equipmentTrigger = document.getElementById('equipment-trigger');

    if (equipmentTrigger) {
      // Use IntersectionObserver for equipment section trigger
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(equipmentTrigger);

      return () => {
        observer.disconnect();
        window.removeEventListener('openQuoteModal', handleOpenModal);
      };
    } else {
      // Fallback to scroll-based visibility for other pages
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > 500);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('openQuoteModal', handleOpenModal);
      };
    }
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      setIsModalOpen(false);
      window.location.href = '/thank-you';
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Desktop: Mini Card - Bottom Right */}
      <div
        className={`hidden md:block fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-teal rounded-2xl p-5 shadow-2xl shadow-black/20 border border-gold/20 max-w-[280px]">
          {/* Online indicator */}
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-white/90 text-sm font-medium">We&apos;re Online</span>
          </div>

          {/* Text */}
          <p className="text-white font-semibold mb-4">
            Got a project to discuss?
          </p>

          {/* CTA Button - Opens Modal */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="block w-full text-center bg-gold text-teal-dark font-semibold py-2.5 px-4 rounded-full hover:bg-gold-hover transition-colors btn-shimmer text-sm"
          >
            Talk to James
          </button>

          {/* Phone link */}
          <a
            href="tel:+442046340456"
            className="flex items-center justify-center gap-2 text-gold/80 hover:text-gold text-sm mt-3 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            or call 020 4634 0456
          </a>
        </div>
      </div>

      {/* Mobile: Split Bar - Full Width Bottom */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible && !isModalOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
        }`}
      >
        <div className="bg-teal border-t border-gold/20 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <div className="flex gap-3">
            {/* Call Button */}
            <a
              href="tel:+442046340456"
              className="flex-1 flex items-center justify-center gap-2 bg-teal-dark text-white font-semibold py-3 px-4 rounded-full border border-gold/30 hover:border-gold/50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>

            {/* Quote Button - Opens Modal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 bg-gold text-teal-dark font-semibold py-3 px-4 rounded-full btn-shimmer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get Advice
            </button>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-teal rounded-2xl p-6 md:p-8 w-full max-w-md shadow-2xl animate-fade-in">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-white/90 text-sm font-medium">We&apos;re Online</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">Let&apos;s Discuss Your Project</h3>
            <p className="text-white/70 text-sm mb-6">James will respond within 5 mins on average</p>

            {/* Simple Form */}
            <form
              name="quick-quote"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="quick-quote" />
              <div className="hidden">
                <input name="bot-field" />
              </div>

              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                required
                minLength={2}
                maxLength={100}
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                required
                pattern="[\d\s\+\-\(\)]{7,20}"
                title="Please enter a valid phone number"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={3}
                maxLength={2000}
                value={formData.message}
                onChange={handleChange}
                className="form-input resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-shimmer w-full disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Enquiry'
                )}
              </button>

              {/* Phone alternative */}
              <div className="relative flex items-center gap-4 pt-4">
                <div className="flex-1 h-px bg-white/20" />
                <span className="text-white/50 text-xs uppercase tracking-wider">or</span>
                <div className="flex-1 h-px bg-white/20" />
              </div>

              <a
                href="tel:+442046340456"
                className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-full border-2 border-gold/50 text-gold font-semibold hover:bg-white hover:text-teal hover:border-white transition-all duration-300 group"
              >
                <svg className="w-5 h-5 animate-pulse group-hover:animate-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Prefer to Talk? Call Us Now
              </a>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
