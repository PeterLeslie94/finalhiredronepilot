import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

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

function DesktopDropdown({ name, links }: { name: string; links: readonly { name: string; href: string; desc: string }[] }) {
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

export default function Header() {
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
            <span className="text-teal-dark/40">|</span>
            <Link href="/login" className="hover:text-teal transition-colors">
              Drone Pilot Login
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 left-0 right-0 z-50 backdrop-blur-xl bg-teal/90 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
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

              <Link href="/contact" className="flex-shrink-0 btn btn-primary btn-shimmer ml-1.5 text-sm px-3 py-2 whitespace-nowrap">
                Compare Quotes
              </Link>
            </div>

            <details className="xl:hidden relative group">
              <summary className="list-none cursor-pointer text-white p-2 border border-white/20 rounded-lg hover:border-gold [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-semibold">Menu</span>
              </summary>
              <div className="absolute right-0 top-full mt-3 w-[min(92vw,360px)] bg-teal-dark border border-white/10 rounded-2xl shadow-2xl p-4 max-h-[70vh] overflow-y-auto">
                <div className="space-y-2">
                  <Link href="/about" className="block text-white hover:text-gold transition-colors py-2">
                    About
                  </Link>

                  {navCategories.map((category) => (
                    <details key={category.name} className="border-t border-white/10 pt-2">
                      <summary className="list-none cursor-pointer text-white hover:text-gold transition-colors flex items-center justify-between py-2 [&::-webkit-details-marker]:hidden">
                        <span>{category.name}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="space-y-1 pt-1">
                        {category.services.map((service) => (
                          <Link key={service.href} href={service.href} className="block px-2 py-1 text-sm text-white/80 hover:text-gold transition-colors">
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ))}

                  <details className="border-t border-white/10 pt-2">
                    <summary className="list-none cursor-pointer text-white hover:text-gold transition-colors flex items-center justify-between py-2 [&::-webkit-details-marker]:hidden">
                      <span>Resources</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="space-y-1 pt-1">
                      {resourceLinks.map((item) => (
                        <Link key={item.href} href={item.href} className="block px-2 py-1 text-sm text-white/80 hover:text-gold transition-colors">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </details>

                  <Link href="/pilots" className="block text-white hover:text-gold transition-colors py-2 border-t border-white/10">
                    Pilots
                  </Link>
                  <Link href="/contact" className="block text-white hover:text-gold transition-colors py-2">
                    Contact
                  </Link>
                  <Link href="/contact" className="block btn btn-primary btn-shimmer text-center mt-2">
                    Compare Quotes
                  </Link>
                </div>
              </div>
            </details>
          </nav>
        </div>
      </header>
    </>
  );
}
