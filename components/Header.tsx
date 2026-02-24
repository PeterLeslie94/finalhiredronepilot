'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, Mail, X } from 'lucide-react';

const navCategories = [
  {
    name: 'Mapping',
    services: [
      { name: 'Drone Surveys', href: '/services/drone-surveys', desc: 'Comprehensive aerial survey services' },
      { name: 'Drone Topographical Survey', href: '/services/drone-topographical-survey', desc: 'Detailed terrain elevation mapping' },
      { name: 'Drone LiDAR Mapping', href: '/services/drone-lidar-mapping', desc: 'Laser scanning through vegetation' },
      { name: 'Drone Photogrammetry Survey', href: '/services/drone-photogrammetry-survey', desc: '3D models from aerial imagery' },
      { name: 'Drone Point Cloud Mapping', href: '/services/drone-point-cloud-mapping', desc: 'High-density 3D spatial data' },
      { name: 'Drone Site Survey', href: '/services/drone-site-survey', desc: 'Complete site documentation' },
      { name: 'Drone Land Survey', href: '/services/drone-land-survey', desc: 'Boundary and area measurements' },
      { name: 'Drone Boundary Survey', href: '/services/drone-boundary-survey', desc: 'Property line verification' },
      { name: 'Drone Corridor Mapping', href: '/services/drone-corridor-mapping', desc: 'Linear infrastructure surveys' },
      { name: 'Drone Elevation Survey', href: '/services/drone-elevation-survey', desc: 'Height and contour analysis' },
      { name: 'Drone As-Built Survey', href: '/services/drone-as-built-survey', desc: 'Post-construction verification' },
      { name: 'Drone Setting Out Survey', href: '/services/drone-setting-out-survey', desc: 'Construction layout assistance' },
      { name: 'Drone Bathymetric Survey', href: '/services/drone-bathymetric-survey', desc: 'Underwater terrain mapping' },
    ],
  },
  {
    name: 'Inspections',
    services: [
      { name: 'Drone Roof Inspection', href: '/services/drone-roof-inspection', desc: 'Safe rooftop condition assessment' },
      { name: 'Drone Facade Survey', href: '/services/drone-facade-survey', desc: 'Building exterior inspection' },
      { name: 'Drone Bridge Inspection', href: '/services/drone-bridge-inspection', desc: 'Structural integrity checks' },
      { name: 'Drone Measured Building Survey', href: '/services/drone-measured-building-survey', desc: 'Accurate building dimensions' },
      { name: 'Drone Thermal Imaging', href: '/services/drone-thermal-imaging', desc: 'Heat loss and defect detection' },
      { name: 'Drone Confined Space Inspection', href: '/services/drone-confined-space-inspection', desc: 'Tank, silo and tunnel surveys' },
    ],
  },
  {
    name: 'Infrastructure',
    services: [
      { name: 'Drone Construction Monitoring', href: '/services/drone-construction-monitoring', desc: 'Progress tracking & reporting' },
      { name: 'Drone Road Survey', href: '/services/drone-road-survey', desc: 'Highway and road mapping' },
      { name: 'Drone Railway Survey', href: '/services/drone-railway-survey', desc: 'Track and corridor surveys' },
      { name: 'Drone Utility Survey', href: '/services/drone-utility-survey', desc: 'Power and pipeline inspections' },
      { name: 'Drone Industrial Survey', href: '/services/drone-industrial-survey', desc: 'Factory and plant mapping' },
    ],
  },
  {
    name: 'Energy',
    services: [
      { name: 'Drone Volumetric Survey', href: '/services/drone-volumetric-survey', desc: 'Stockpile volume calculations' },
      { name: 'Drone Mining Survey', href: '/services/drone-mining-survey', desc: 'Quarry and pit mapping' },
      { name: 'Drone Quarry Survey', href: '/services/drone-quarry-survey', desc: 'Extraction monitoring & compliance' },
      { name: 'Drone Landfill Survey', href: '/services/drone-landfill-survey', desc: 'Waste site monitoring' },
      { name: 'Drone Solar Survey', href: '/services/drone-solar-survey', desc: 'Panel inspection and mapping' },
      { name: 'Drone Wind Farm Survey', href: '/services/drone-wind-farm-survey', desc: 'Turbine and site surveys' },
    ],
  },
  {
    name: 'Specialist',
    services: [
      { name: 'Drone Agricultural Survey', href: '/services/drone-agricultural-survey', desc: 'Crop health and field mapping' },
      { name: 'Drone Environmental Survey', href: '/services/drone-environmental-survey', desc: 'Habitat and ecology mapping' },
      { name: 'Drone Forestry Survey', href: '/services/drone-forestry-survey', desc: 'Woodland and timber analysis' },
      { name: 'Drone Coastal Survey', href: '/services/drone-coastal-survey', desc: 'Shoreline erosion monitoring' },
      { name: 'Drone Flood Risk Survey', href: '/services/drone-flood-risk-survey', desc: 'Drainage and flood modelling' },
      { name: 'Drone Archaeological Survey', href: '/services/drone-archaeological-survey', desc: 'Heritage site documentation' },
      { name: 'Drone Estate Survey', href: '/services/drone-estate-survey', desc: 'Property and land management' },
      { name: 'Drone Gas Detection', href: '/services/drone-gas-detection', desc: 'Leak detection and monitoring' },
      { name: 'Drone Crop Spraying', href: '/services/drone-crop-spraying', desc: 'Precision agricultural spraying' },
      { name: 'Drone Ground Penetrating Radar', href: '/services/drone-ground-penetrating-radar', desc: 'Subsurface feature detection' },
      { name: 'Drone Sonar Survey', href: '/services/drone-sonar-survey', desc: 'Underwater acoustic mapping' },
      { name: 'Drone Water Quality Assessment', href: '/services/drone-water-quality-assessment', desc: 'Aquatic environment monitoring' },
    ],
  },
  {
    name: 'Photography',
    services: [
      { name: 'Drone Photography', href: '/services/drone-photography', desc: 'Professional aerial imagery' },
      { name: 'Drone Real Estate Photography', href: '/services/drone-real-estate-photography', desc: 'Property marketing from above' },
      { name: 'Drone Wedding Photography', href: '/services/drone-wedding-photography', desc: 'Stunning aerial wedding shots' },
      { name: 'Drone Videographer', href: '/services/drone-videographer', desc: 'Cinematic aerial video production' },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActivePath = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top utility bar - scrolls away */}
      <div className="bg-gold relative z-40">
        <div className="container flex justify-between items-center py-1.5">
          <div className="hidden sm:flex items-center gap-1 text-xs text-teal-dark font-medium">
            <a href="tel:+441334804554" className="flex items-center gap-1.5 hover:text-teal transition-colors px-3 py-1">
              <Phone className="w-3 h-3" />
              <span>+44 1334 804554</span>
            </a>
            <span className="text-teal-dark/30">|</span>
            <a href="mailto:quotes@hiredronepilot.uk" className="flex items-center gap-1.5 hover:text-teal transition-colors px-3 py-1">
              <Mail className="w-3 h-3" />
              <span>quotes@hiredronepilot.uk</span>
            </a>
          </div>
          <div className="text-xs text-teal-dark font-semibold px-3 py-1 flex items-center gap-2">
            <Link href="/join-as-pilot" className="hover:text-teal transition-colors">
              Join As Drone Pilot
            </Link>
            <span className="text-teal-dark/40">|</span>
            <Link href="/login" className="hover:text-teal transition-colors">
              Drone Pilot Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main header - sticky */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'backdrop-blur-xl bg-teal/90 shadow-[0_4px_20px_rgba(0,0,0,0.15)]'
            : 'bg-teal'
        }`}
      >
        {/* Main nav */}
        <div className="container">
          <nav className="flex items-center justify-between py-4">
            {/* Logo with micro-interactions */}
            <Link
              href="/"
              className="flex-shrink-0 mr-4 flex items-center gap-2 group transition-all duration-300 hover:scale-105"
            >
              <Image
                src="/hiredronepilot-logo.png"
                alt="HireDronePilot"
                width={40}
                height={40}
                className="w-10 h-10 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(245,184,0,0.5)]"
                priority
              />
              <div>
                <span className="text-lg font-bold text-white block leading-tight transition-all duration-300 group-hover:text-gold">
                  HireDronePilot
                </span>
                <span className="text-xs text-gold uppercase tracking-wider">UK Network</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-0.5">
              <Link
                href="/about"
                className={`nav-link text-white font-medium transition-colors px-1.5 py-2 text-sm ${
                  isActivePath('/about') ? 'active text-gold' : 'hover:text-gold'
                }`}
              >
                About
              </Link>

              {/* Category Dropdowns */}
              {navCategories.map((category) => (
                <div
                  key={category.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(category.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`nav-link text-white font-medium transition-colors flex items-center gap-0.5 px-1.5 py-2 text-sm ${
                      isActivePath('/services') && activeDropdown === category.name ? 'text-gold' : 'hover:text-gold'
                    }`}
                  >
                    {category.name}
                    <svg
                      className={`w-3 h-3 transition-transform duration-300 ${
                        activeDropdown === category.name ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                      activeDropdown === category.name
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                    style={{ width: category.services.length > 5 ? '520px' : '420px' }}
                  >
                    <div className="backdrop-blur-xl bg-white/95 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-1">
                          {category.services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="group flex flex-col p-3 rounded-xl hover:bg-teal/5 transition-all duration-300"
                            >
                              <span className="font-semibold text-teal text-sm group-hover:text-gold transition-colors">
                                {service.name}
                              </span>
                              <span className="text-xs text-text-secondary mt-0.5">
                                {service.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`nav-link text-white font-medium transition-colors flex items-center gap-0.5 px-1.5 py-2 text-sm ${
                    activeDropdown === 'resources' ? 'text-gold' : 'hover:text-gold'
                  }`}
                >
                  Resources
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${
                      activeDropdown === 'resources' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                    activeDropdown === 'resources'
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                  style={{ width: '280px' }}
                >
                  <div className="backdrop-blur-xl bg-white/95 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="p-4 space-y-1">
                      {[
                        { name: 'Resources', href: '/resources', desc: 'Guides, tools and calculators' },
                        { name: 'Blog', href: '/blog', desc: 'Latest articles and news' },
                        { name: 'CAA Drone Theory Test', href: '/caa-drone-theory-test', desc: 'Practice test questions' },
                        { name: 'Join as Pilot', href: '/join-as-pilot', desc: 'Apply to join our network' },
                        { name: 'Drone Statistics', href: '/drone-statistics', desc: 'UK drone industry data' },
                        { name: 'Pricing', href: '/pricing', desc: 'Drone service costs guide' },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group flex flex-col p-3 rounded-xl hover:bg-teal/5 transition-all duration-300"
                        >
                          <span className="font-semibold text-teal text-sm group-hover:text-gold transition-colors">
                            {item.name}
                          </span>
                          <span className="text-xs text-text-secondary mt-0.5">
                            {item.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/pilots"
                className={`nav-link text-white font-medium transition-colors px-1.5 py-2 text-sm ${
                  isActivePath('/pilots') ? 'active text-gold' : 'hover:text-gold'
                }`}
              >
                Pilots
              </Link>

              <Link
                href="/contact"
                className={`nav-link text-white font-medium transition-colors px-1.5 py-2 text-sm ${
                  isActivePath('/contact') ? 'active text-gold' : 'hover:text-gold'
                }`}
              >
                Contact
              </Link>

              {/* CTA Button - Opens Quote Modal */}
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
                className="flex-shrink-0 btn btn-primary btn-shimmer ml-1.5 text-sm px-3 py-2 whitespace-nowrap"
              >
                Compare Quotes
              </button>
            </div>

            {/* Mobile menu button - Animated hamburger */}
            <button
              className={`xl:hidden text-white p-2 hamburger ${mobileMenuOpen ? 'hamburger-open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span className="hamburger-line absolute left-0 w-6 h-0.5 bg-current top-1 transform transition-all duration-300" />
                <span className="hamburger-line absolute left-0 w-6 h-0.5 bg-current top-3 transition-all duration-300" />
                <span className="hamburger-line absolute left-0 w-6 h-0.5 bg-current top-5 transform transition-all duration-300" />
              </div>
            </button>
          </nav>
        </div>

      </header>

      {/* Premium Mobile Navigation - Full screen overlay (outside header to avoid backdrop-filter containing block) */}
      <div
        className={`xl:hidden fixed top-0 left-0 right-0 bottom-0 z-[60] overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-teal-dark"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile menu header with close button */}
        <div className="absolute top-0 left-0 right-0 h-20 flex items-center justify-between px-6 z-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/hiredronepilot-logo.png"
              alt="HireDronePilot"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <span className="text-lg font-bold text-white block leading-tight">
                HireDronePilot
              </span>
              <span className="text-xs text-gold uppercase tracking-wider">UK Network</span>
            </div>
          </div>
          {/* Close button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white p-2 hover:text-gold transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="relative z-10 h-full flex flex-col pt-24 pb-8 px-6 overflow-y-auto">
          <div className="space-y-2">
            {/* About Link */}
            <Link
              href="/about"
              className={`mobile-menu-item block text-xl font-semibold py-3 border-b border-white/10 transition-all duration-300 ${
                mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              } ${isActivePath('/about') ? 'text-gold' : 'text-white hover:text-gold'}`}
              style={{ transitionDelay: '100ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Category Accordions */}
            {navCategories.map((category, index) => (
              <div
                key={category.name}
                className={`transition-all duration-300 ${
                  mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${150 + index * 50}ms` }}
              >
                <button
                  className={`w-full flex items-center justify-between text-xl font-semibold py-3 border-b border-white/10 ${
                    activeDropdown === `mobile-${category.name}` ? 'text-gold' : 'text-white'
                  }`}
                  onClick={() => setActiveDropdown(activeDropdown === `mobile-${category.name}` ? null : `mobile-${category.name}`)}
                >
                  {category.name}
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeDropdown === `mobile-${category.name}` ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeDropdown === `mobile-${category.name}` ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="py-2 space-y-1">
                    {category.services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block py-2 px-4 text-white/80 hover:text-gold transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="block text-sm font-medium">{service.name}</span>
                        <span className="block text-xs text-white/50">{service.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Resources Accordion */}
            <div
              className={`transition-all duration-300 ${
                mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <button
                className={`w-full flex items-center justify-between text-xl font-semibold py-3 border-b border-white/10 ${
                  activeDropdown === 'mobile-resources' ? 'text-gold' : 'text-white'
                }`}
                onClick={() => setActiveDropdown(activeDropdown === 'mobile-resources' ? null : 'mobile-resources')}
              >
                Resources
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeDropdown === 'mobile-resources' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === 'mobile-resources' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="py-2 space-y-1">
                  {[
                    { name: 'Resources', href: '/resources', desc: 'Guides, tools and calculators' },
                    { name: 'Blog', href: '/blog', desc: 'Latest articles and news' },
                    { name: 'CAA Drone Theory Test', href: '/caa-drone-theory-test', desc: 'Practice test questions' },
                    { name: 'Join as Pilot', href: '/join-as-pilot', desc: 'Apply to join our network' },
                    { name: 'Drone Statistics', href: '/drone-statistics', desc: 'UK drone industry data' },
                    { name: 'Pricing', href: '/pricing', desc: 'Drone service costs guide' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 px-4 text-white/80 hover:text-gold transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="block text-sm font-medium">{item.name}</span>
                      <span className="block text-xs text-white/50">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/pilots"
              className={`mobile-menu-item block text-xl font-semibold py-3 border-b border-white/10 transition-all duration-300 ${
                mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              } ${isActivePath('/pilots') ? 'text-gold' : 'text-white hover:text-gold'}`}
              style={{ transitionDelay: '412ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Pilots
            </Link>

            {/* Contact Link */}
            <Link
              href="/contact"
              className={`mobile-menu-item block text-xl font-semibold py-3 border-b border-white/10 transition-all duration-300 ${
                mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              } ${isActivePath('/contact') ? 'text-gold' : 'text-white hover:text-gold'}`}
              style={{ transitionDelay: '450ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          {/* Mobile CTA */}
          <div
            className={`mt-auto pt-8 transition-all duration-300 ${
              mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <button
              className="btn btn-primary btn-shimmer w-full text-center"
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent('openQuoteModal'));
              }}
            >
              Compare Quotes
            </button>
            <div className="mt-6 flex flex-col gap-3 text-white/70">
              <a href="tel:+441334804554" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Phone className="w-5 h-5" />
                <span>+44 1334 804554</span>
              </a>
              <a href="mailto:quotes@hiredronepilot.uk" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Mail className="w-5 h-5" />
                <span>quotes@hiredronepilot.uk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
