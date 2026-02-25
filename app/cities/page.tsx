import type { Metadata } from 'next';
import { safeJsonLd } from '@/lib/utils/safe-json-ld';
import QuoteButton from '@/components/QuoteButton';
import Link from 'next/link';
import { MapPin, Phone, Clock, CheckCircle } from 'lucide-react';
import DiagonalDivider from '@/components/DiagonalDivider';
import Hero from '@/components/Hero';
import { canonicalUrl } from '@/lib/seo/metadata';

const regions = [
  {
    name: 'Scotland',
    description: 'Our headquarters in Dundee provides rapid response across all of Scotland.',
    cities: ['Edinburgh', 'Glasgow', 'Aberdeen', 'Dundee', 'Inverness', 'Stirling', 'Perth', 'St Andrews'],
    highlight: true,
  },
  {
    name: 'Northern England',
    description: 'Full coverage across the North of England from our Scottish base.',
    cities: ['Newcastle', 'Sunderland', 'Durham', 'Middlesbrough', 'Carlisle', 'York', 'Leeds', 'Sheffield'],
    highlight: false,
  },
  {
    name: 'Midlands',
    description: 'Central England coverage for all drone survey requirements.',
    cities: ['Birmingham', 'Nottingham', 'Leicester', 'Derby', 'Coventry', 'Stoke-on-Trent', 'Wolverhampton', 'Lincoln'],
    highlight: false,
  },
  {
    name: 'South East & London',
    description: 'Comprehensive coverage of London and the South East.',
    cities: ['London', 'Brighton', 'Southampton', 'Portsmouth', 'Reading', 'Oxford', 'Cambridge', 'Milton Keynes'],
    highlight: false,
  },
  {
    name: 'Wales',
    description: 'Drone survey services across Wales from North to South.',
    cities: ['Cardiff', 'Swansea', 'Newport', 'Wrexham', 'Bangor', 'Aberystwyth', 'Carmarthen', 'Llandudno'],
    highlight: false,
  },
  {
    name: 'South West & East Anglia',
    description: 'Coverage across the South West and Eastern regions.',
    cities: ['Bristol', 'Plymouth', 'Exeter', 'Norwich', 'Ipswich', 'Peterborough', 'Cheltenham', 'Bath'],
    highlight: false,
  },
];

const serviceAreas = [
  'Construction Sites',
  'Agricultural Land',
  'Industrial Facilities',
  'Coastal Areas',
  'Quarries & Mines',
  'Solar Farms',
  'Wind Farms',
  'Railway Lines',
  'Roads & Highways',
  'Heritage Sites',
  'Forestry',
  'Residential Estates',
];

export const metadata: Metadata = {
  title: 'Drone Survey Coverage Across UK Cities | HireDronePilot',
  description:
    'Explore the UK cities and regions covered by HireDronePilot. Compare quotes from independent drone pilots for inspections, mapping, and survey work nationwide.',
  alternates: {
    canonical: canonicalUrl('/cities'),
  },
};

export default function AreasPage() {
  return (
    <>
      <Hero
        subtitle="UK-Wide Coverage"
        title={<>Hire Drone Pilot <span className="text-gold">Across the UK</span></>}
        description="From the Scottish Highlands to the South Coast, we deliver professional drone survey services nationwide. Based in Dundee with UK-wide reach."
        primaryCta={{ text: 'Compare Quotes', href: '/contact' }}
        secondaryCta={{ text: 'Contact Us', href: '/contact' }}
        backgroundImage="/images/hero-desktop.avif"
        mobileBackgroundImage="/images/hero-mobile.avif"
      />

      {/* Key Info Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-6 bg-background-alt rounded-xl">
              <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-teal text-lg">Based in Dundee</h3>
                <p className="text-text-secondary text-sm">Scotland headquarters</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-background-alt rounded-xl">
              <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-teal text-lg">Rapid Response</h3>
                <p className="text-text-secondary text-sm">2-hour quote turnaround</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-background-alt rounded-xl">
              <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-teal text-lg">+44 1334 804554</h3>
                <p className="text-text-secondary text-sm">Call for immediate assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
              Regional Coverage
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Areas We Cover
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Professional drone survey services across all regions of the United Kingdom. No project too far.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => (
              <div
                key={region.name}
                className={`rounded-xl p-6 border-2 transition-all duration-300 hover:shadow-lg ${
                  region.highlight
                    ? 'bg-teal border-gold shadow-md'
                    : 'bg-white border-border hover:border-gold'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className={`w-6 h-6 ${region.highlight ? 'text-gold' : 'text-gold'}`} />
                  <h3 className={`text-xl font-bold ${region.highlight ? 'text-white' : 'text-teal'}`}>
                    {region.name}
                  </h3>
                  {region.highlight && (
                    <span className="text-xs bg-gold text-teal-dark px-2 py-1 rounded-full font-semibold">
                      HQ
                    </span>
                  )}
                </div>
                <p className={`text-sm mb-4 ${region.highlight ? 'text-white/80' : 'text-text-secondary'}`}>
                  {region.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {region.cities.map((city) => (
                    <span
                      key={city}
                      className={`text-xs px-2 py-1 rounded-full ${
                        region.highlight
                          ? 'bg-white/20 text-white'
                          : 'bg-background-alt text-text-secondary'
                      }`}
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="teal" />

      {/* Service Types Section */}
      <section className="section bg-teal">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
                Versatile Coverage
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Survey Any Location Type
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Our CAA-certified drone pilots and enterprise-grade equipment allow us to operate in diverse environments across the UK. From busy urban construction sites to remote rural landscapes, we have the experience and authorisations to deliver.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-white text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us for Your Area?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-gold font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Local Knowledge</h4>
                      <p className="text-white/70 text-sm">Based in Scotland with extensive UK-wide experience</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-gold font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">No Travel Fees</h4>
                      <p className="text-white/70 text-sm">Competitive pricing regardless of your location</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-gold font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Flexible Scheduling</h4>
                      <p className="text-white/70 text-sm">We work around your project timeline</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-gold font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Airspace Expertise</h4>
                      <p className="text-white/70 text-sm">Experienced in obtaining permissions for restricted areas</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="teal" toColor="white" />

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Need a Drone Survey in Your Area?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Get in touch today for a free, no-obligation quote. We'll confirm coverage and provide competitive pricing within 5 mins on average.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton className="btn btn-primary btn-shimmer">
                Compare Quotes
              </QuoteButton>
              <a href="tel:+441334804554" className="btn bg-transparent text-teal border-teal hover:bg-teal hover:text-white">
                Call +44 1334 804554
              </a>
            </div>
            <p className="mt-6 text-text-secondary text-sm">
              Based in Dundee, Scotland • Serving all of the UK
            </p>
          </div>
        </div>
      </section>

      {/* Schema Markup for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Hire Drone Pilot',
            alternateName: 'HireDronePilot',
            description: 'Professional drone survey services across the UK including topographic surveys, LiDAR mapping, and aerial photography.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Castlecroft Business Centre, Tom Johnston Road',
              addressLocality: 'Dundee',
              postalCode: 'DD4 8XD',
              addressCountry: 'GB',
            },
            telephone: '+441334804554',
            email: 'quotes@hiredronepilot.uk',
            url: 'https://hiredronepilot.uk',
            areaServed: [
              { '@type': 'Country', name: 'United Kingdom' },
              { '@type': 'AdministrativeArea', name: 'Scotland' },
              { '@type': 'AdministrativeArea', name: 'England' },
              { '@type': 'AdministrativeArea', name: 'Wales' },
            ],
            priceRange: '££',
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '18:00',
            },
          }),
        }}
      />
    </>
  );
}
