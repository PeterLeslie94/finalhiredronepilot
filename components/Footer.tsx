'use client';

import Link from 'next/link';
import Image from 'next/image';

const services = [
  { name: 'Drone Topographic Survey', href: '/services/drone-topographic-survey' },
  { name: 'LiDAR Mapping', href: '/services/lidar-mapping' },
  { name: 'Drone Photogrammetry Survey', href: '/services/drone-photogrammetry-survey' },
  { name: 'Drone Roof Survey', href: '/services/drone-roof-survey' },
  { name: 'Drone Construction Monitoring', href: '/services/drone-construction-monitoring' },
  { name: 'Drone Volumetric Survey', href: '/services/drone-volumetric-survey' },
  { name: 'Drone Site Survey', href: '/services/drone-site-survey' },
];

const moreServices = [
  { name: 'Drone Land Survey', href: '/services/drone-land-survey' },
  { name: 'Drone Facade Survey', href: '/services/drone-facade-survey' },
  { name: 'Drone Bridge Inspection', href: '/services/drone-bridge-inspection' },
  { name: 'Drone Mining Survey', href: '/services/drone-mining-survey' },
  { name: 'Drone Agricultural Survey', href: '/services/drone-agricultural-survey' },
  { name: 'Drone Environmental Survey', href: '/services/drone-environmental-survey' },
];

export default function Footer() {
  return (
    <footer>
      {/* CTA Banner */}
      <div className="bg-gold py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 text-[200px] font-bold text-teal-dark leading-none">
            HDP
          </div>
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-dark mb-4">
            Ready to Hire the Right Drone Pilot?
          </h2>
          <p className="text-teal-dark/80 text-lg mb-6 max-w-2xl mx-auto">
            Post your project once and compare competitive quotes from vetted, certified drone pilots across the UK.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
              className="btn bg-teal text-white border-teal hover:bg-teal-dark"
            >
              Compare Quotes
            </button>
            <Link href="/contact" className="btn bg-transparent text-teal-dark border-teal-dark hover:bg-teal-dark hover:text-white">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-teal py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6 group">
                <Image
                  src="/hiredronepilot-logo.png"
                  alt="HireDronePilot"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <span className="text-lg font-bold text-white block leading-tight group-hover:text-gold transition-colors">
                    HireDronePilot
                  </span>
                  <span className="text-xs text-gold uppercase tracking-wider">UK Network</span>
                </div>
              </Link>
              <p className="text-white/70 mb-6">
                HireDronePilot is the UK&apos;s premier managed marketplace connecting businesses with verified professional drone pilots for hire. We streamline drone services through competitive bidding, ensuring quality, compliance, and value for every aerial project across the United Kingdom.
              </p>
            </div>

            {/* Services Column 1 */}
            <div>
              <h3 className="text-gold font-bold text-lg mb-6 uppercase tracking-wide">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link href={service.href} className="text-white/70 hover:text-gold transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="text-gold font-semibold hover:text-white transition-colors">
                    View All Services →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Column 2 */}
            <div>
              <h3 className="text-gold font-bold text-lg mb-6 uppercase tracking-wide">More Services</h3>
              <ul className="space-y-3">
                {moreServices.map((service) => (
                  <li key={service.href}>
                    <Link href={service.href} className="text-white/70 hover:text-gold transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <h4 className="text-gold font-semibold text-sm mb-3 uppercase tracking-wide">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-white/70 hover:text-gold transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-white/70 hover:text-gold transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/areas" className="text-white/70 hover:text-gold transition-colors">
                      Areas Covered
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-gold font-bold text-lg mb-6 uppercase tracking-wide">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <address className="text-white/70 not-italic">
                    Castlecroft Business Centre<br />
                    Tom Johnston Road<br />
                    Dundee DD4 8XD
                  </address>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+442046340456" className="text-white/70 hover:text-gold transition-colors">
                    020 4634 0456
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:quotes@hiredronepilot.uk" className="text-white/70 hover:text-gold transition-colors">
                    quotes@hiredronepilot.uk
                  </a>
                </li>
              </ul>

              {/* Accreditations */}
              <div className="mt-8">
                <h4 className="text-gold font-semibold text-sm mb-3 uppercase tracking-wide">Accreditations</h4>
                <div className="flex flex-wrap items-center gap-3">
                  <img src="/images/licences/Civil_Aviation_Authority_logo.avif" alt="CAA Approved" className="h-8 object-contain" />
                  <img src="/images/licences/arpas-uk-drone-association-logo.avif" alt="ARPAS-UK Member" className="h-8 object-contain" />
                  <img src="/images/licences/gvc-licence.avif" alt="GVC Licence" className="h-8 object-contain" />
                  <img src="/images/licences/drone-a2-cofc.avif" alt="A2 CofC" className="h-8 object-contain" />
                  <img src="/images/licences/flyer-id-a1-a3.avif" alt="Flyer ID A1/A3" className="h-8 object-contain" />
                  <img src="/images/licences/dundee-chamber-commerce-logo.avif" alt="Dundee Chamber of Commerce" className="h-8 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-teal-dark py-4">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; 2026 HireDronePilot. All rights reserved. | Company No: SC662275 Operating Under HireDronePilot Trading Name
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/privacy-policy" className="text-white/50 text-sm hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/50 text-sm hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-white/50 text-sm hover:text-gold transition-colors">
              Cookie Policy
            </Link>
            <Link href="/sitemap.xml" className="text-white/50 text-sm hover:text-gold transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
