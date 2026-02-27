'use client';

import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Mail, Phone, X } from 'lucide-react';

type NavLinkItem = { name: string; href: string; desc: string };

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
] as const;

const resourceLinks = [
  { name: 'Resources', href: '/resources', desc: 'Guides, tools and calculators' },
  { name: 'Blog', href: '/blog', desc: 'Latest articles and news' },
  { name: 'CAA Drone Theory Test', href: '/caa-drone-theory-test', desc: 'Practice test questions' },
  { name: 'Join as Pilot', href: '/join-as-pilot', desc: 'Apply to join our network' },
  { name: 'Drone Statistics', href: '/drone-statistics', desc: 'UK drone industry data' },
  { name: 'Pricing', href: '/pricing', desc: 'Drone service costs guide' },
] as const;

type MobilePanel = 'root' | 'services' | 'category';

function DesktopDropdown({ name, links }: { name: string; links: readonly NavLinkItem[] }) {
  return (
    <div className="group relative">
      <button className="nav-link text-white font-medium transition-colors flex items-center gap-0.5 px-1.5 py-2 text-sm hover:text-gold">
        {name}
        <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
        <div className="backdrop-blur-xl bg-white/95 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden" style={{ width: links.length > 5 ? '520px' : '420px' }}>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-1">
              {links.map((service) => (
                <Link key={service.href} href={service.href} className="group/link flex flex-col p-3 rounded-xl hover:bg-teal/5 transition-all duration-300">
                  <span className="font-semibold text-teal text-sm group-hover/link:text-gold transition-colors">
                    {service.name}
                  </span>
                  <span className="text-xs text-text-secondary mt-0.5">{service.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileNavLink({
  href,
  title,
  description,
  onNavigate,
  tone = 'default',
}: {
  href: string;
  title: string;
  description?: string;
  onNavigate: () => void;
  tone?: 'default' | 'muted';
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={[
        'block min-h-11 rounded-2xl border px-4 py-3 text-white transition-all duration-200 ease-out',
        'hover:-translate-y-0.5 hover:border-gold/70 hover:bg-white/10',
        tone === 'muted'
          ? 'border-white/10 bg-white/[0.02]'
          : 'border-white/15 bg-white/[0.05]',
      ].join(' ')}
    >
      <span className="block text-sm font-semibold text-white">{title}</span>
      {description ? <span className="mt-0.5 block text-xs text-white/65">{description}</span> : null}
    </Link>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<MobilePanel>('root');
  const [activeCategoryName, setActiveCategoryName] = useState<string | null>(null);
  const [mobileMenuTop, setMobileMenuTop] = useState(0);
  const mobileMenuId = useId();

  const headerRef = useRef<HTMLElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const menuCloseRef = useRef<HTMLButtonElement>(null);
  const wasMenuOpenRef = useRef(false);

  const activeCategory = useMemo(
    () => navCategories.find((category) => category.name === activeCategoryName) ?? null,
    [activeCategoryName]
  );

  const getMobileHeaderBottom = useCallback(() => {
    const rect = headerRef.current?.getBoundingClientRect();
    return rect ? Math.round(rect.bottom) : 0;
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setActivePanel('root');
    setActiveCategoryName(null);
  }, []);

  const openMobileMenu = useCallback(() => {
    setMobileMenuTop(getMobileHeaderBottom());
    setActivePanel('root');
    setActiveCategoryName(null);
    setIsMobileMenuOpen(true);
  }, [getMobileHeaderBottom]);

  const showServicesPanel = useCallback(() => {
    setActivePanel('services');
    setActiveCategoryName(null);
  }, []);

  const showCategoryPanel = useCallback((categoryName: string) => {
    setActivePanel('category');
    setActiveCategoryName(categoryName);
  }, []);

  const showRootPanel = useCallback(() => {
    setActivePanel('root');
    setActiveCategoryName(null);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    };
    const onResize = () => {
      setMobileMenuTop(getMobileHeaderBottom());
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    window.requestAnimationFrame(() => {
      menuCloseRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [closeMobileMenu, getMobileHeaderBottom, isMobileMenuOpen]);

  useEffect(() => {
    if (wasMenuOpenRef.current && !isMobileMenuOpen) {
      menuTriggerRef.current?.focus();
    }
    wasMenuOpenRef.current = isMobileMenuOpen;
  }, [isMobileMenuOpen]);

  const panelIndex = activePanel === 'root' ? 0 : activePanel === 'services' ? 1 : 2;
  const panelClassFor = (target: number) => {
    if (target === panelIndex) return 'opacity-100 translate-x-0 pointer-events-auto';
    if (target < panelIndex) return 'opacity-0 -translate-x-6 pointer-events-none';
    return 'opacity-0 translate-x-6 pointer-events-none';
  };

  return (
    <>
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
          </div>
        </div>
      </div>

      <header ref={headerRef} className="sticky top-0 left-0 right-0 z-50 backdrop-blur-xl bg-teal/90 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
        <div className="container">
          <nav className="flex items-center justify-between py-4 gap-3">
            <Link href="/" className="flex-shrink-0 mr-2 flex items-center gap-2 group transition-all duration-300 hover:scale-105">
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

            <div className="hidden xl:flex items-center gap-0.5">
              <Link href="/about" className="nav-link text-white font-medium transition-colors px-1.5 py-2 text-sm hover:text-gold">
                About
              </Link>

              {navCategories.map((category) => (
                <DesktopDropdown key={category.name} name={category.name} links={category.services} />
              ))}

              <DesktopDropdown name="Resources" links={resourceLinks} />

              <Link href="/pilots" className="nav-link text-white font-medium transition-colors px-1.5 py-2 text-sm hover:text-gold">
                Pilots
              </Link>

              <Link href="/contact" className="nav-link text-white font-medium transition-colors px-1.5 py-2 text-sm hover:text-gold">
                Contact
              </Link>

              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
                className="flex-shrink-0 btn btn-primary btn-shimmer ml-1.5 text-sm px-3 py-2 whitespace-nowrap"
              >
                Compare Quotes
              </button>
            </div>

            <button
              ref={menuTriggerRef}
              type="button"
              className={`xl:hidden inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/[0.06] px-3 py-2 text-white hover:border-gold transition-colors ${isMobileMenuOpen ? 'hamburger-open' : ''}`}
              onClick={isMobileMenuOpen ? closeMobileMenu : openMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls={mobileMenuId}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span className="text-sm font-semibold tracking-wide">{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
              <span className="flex flex-col justify-between h-4 w-5">
                <span className="hamburger-line h-0.5 w-full rounded bg-white transition-all duration-300" />
                <span className="hamburger-line h-0.5 w-full rounded bg-white transition-all duration-300" />
                <span className="hamburger-line h-0.5 w-full rounded bg-white transition-all duration-300" />
              </span>
            </button>
          </nav>
        </div>

      </header>

      {isMobileMenuOpen ? (
        <div
          id={mobileMenuId}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-x-0 bottom-0 z-[60] opacity-100 pointer-events-auto xl:hidden"
          style={{ top: mobileMenuTop ? `${mobileMenuTop}px` : '0px' }}
        >
          <button
            type="button"
            className="absolute inset-0 border-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.58)_0%,rgba(3,7,18,0.78)_100%)] opacity-100"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
          />

          <div className="relative flex h-full flex-col border-t border-white/10 bg-[radial-gradient(circle_at_88%_-40%,rgba(249,115,22,0.26),transparent_54%),linear-gradient(165deg,rgba(31,41,55,0.98),rgba(3,7,18,0.98))]">
            <div className="relative flex items-center gap-3 border-b border-white/10 px-4 py-3 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold/90">Quick Action</p>
              <a
                href="tel:+441334804554"
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/45 bg-gold/20 px-3 py-2 text-[0.78rem] font-bold tracking-[0.01em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/80 hover:bg-gold/30"
              >
                <Phone className="w-4 h-4" />
                <span>Call now: +44 1334 804554</span>
              </a>
              <button
                ref={menuCloseRef}
                type="button"
                className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-gold/80 hover:bg-gold/15"
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative flex-1 overflow-hidden">
              <section
                className={`absolute inset-0 overflow-y-auto p-4 transition-all duration-200 ease-out ${panelClassFor(0)}`}
                aria-hidden={activePanel !== 'root'}
              >
                <div className="space-y-5">
                  <div>
                    <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-gold/90">Navigate</p>
                    <div className="space-y-2">
                      <MobileNavLink href="/about" title="About" description="Who we are and how we work" onNavigate={closeMobileMenu} />
                      <button
                        type="button"
                        className="grid min-h-11 w-full grid-cols-[1fr_auto] items-center gap-2 rounded-2xl border border-gold/45 bg-gold/10 px-4 py-3 text-left text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-gold/70 hover:bg-gold/20"
                        onClick={showServicesPanel}
                      >
                        <span>
                          <span className="block text-sm font-semibold text-white">Browse Services</span>
                          <span className="mt-0.5 block text-xs text-white/70">Explore all survey categories</span>
                        </span>
                        <ChevronRight className="w-4 h-4 text-gold" />
                      </button>
                      <MobileNavLink href="/resources" title="Resources" description="Guides, tools and calculators" onNavigate={closeMobileMenu} />
                      <MobileNavLink href="/pilots" title="Pilots" description="Find drone pilots in your area" onNavigate={closeMobileMenu} />
                      <MobileNavLink href="/contact" title="Contact" description="Tell us about your project" onNavigate={closeMobileMenu} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-gold/90">Popular Resources</p>
                    <div className="space-y-2">
                      {resourceLinks
                        .filter((resource) => resource.href !== '/resources' && resource.href !== '/join-as-pilot')
                        .map((resource) => (
                          <MobileNavLink
                            key={resource.href}
                            href={resource.href}
                            title={resource.name}
                            description={resource.desc}
                            onNavigate={closeMobileMenu}
                            tone="muted"
                          />
                        ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-gold/90">Pilot Area</p>
                    <div className="space-y-2">
                      <MobileNavLink href="/join-as-pilot" title="Join As Drone Pilot" onNavigate={closeMobileMenu} tone="muted" />
                    </div>
                  </div>

                  <button
                    onClick={() => { closeMobileMenu(); window.dispatchEvent(new CustomEvent('openQuoteModal')); }}
                    className="btn btn-outline w-full text-sm"
                  >
                    Compare Quotes
                  </button>
                </div>
              </section>

              <section
                className={`absolute inset-0 overflow-y-auto p-4 transition-all duration-200 ease-out ${panelClassFor(1)}`}
                aria-hidden={activePanel !== 'services'}
              >
                <div className="space-y-5">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/85 transition-colors hover:text-gold"
                    onClick={showRootPanel}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Main Menu</span>
                  </button>

                  <div>
                    <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-gold/90">Service Categories</p>
                    <h2 className="text-xl font-heading text-white">Browse by category</h2>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {navCategories.map((category) => (
                      <button
                        key={category.name}
                        type="button"
                        className="flex min-h-14 w-full items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-3 text-left transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-gold/70 hover:bg-white/[0.12]"
                        onClick={() => showCategoryPanel(category.name)}
                      >
                        <span className="text-left">
                          <span className="block text-base font-semibold text-white">{category.name}</span>
                          <span className="block text-xs text-white/65">{category.services.length} services</span>
                        </span>
                        <ChevronRight className="w-4 h-4 text-gold" />
                      </button>
                    ))}
                  </div>
                </div>
              </section>

              <section
                className={`absolute inset-0 overflow-y-auto p-4 transition-all duration-200 ease-out ${panelClassFor(2)}`}
                aria-hidden={activePanel !== 'category'}
              >
                <div className="space-y-5">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/85 transition-colors hover:text-gold"
                    onClick={showServicesPanel}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Service Categories</span>
                  </button>

                  <div>
                    <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-gold/90">Selected Category</p>
                    <h2 className="text-xl font-heading text-white">{activeCategory?.name ?? 'Services'}</h2>
                  </div>

                  <div className="space-y-2.5">
                    {activeCategory?.services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={closeMobileMenu}
                        className="block min-h-[52px] rounded-2xl border border-white/15 bg-white/[0.05] px-4 py-3 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-gold/70 hover:bg-white/10"
                      >
                        <span className="block text-sm font-semibold text-white">{service.name}</span>
                        <span className="block text-xs text-white/65 mt-1">{service.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
