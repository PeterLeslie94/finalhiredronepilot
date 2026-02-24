import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';
import { Heart, Camera, Music, MapPin, Sun, Clock, PoundSterling } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Drone Wedding Photography | Aerial Wedding Photos UK | Hire Drone Pilot',
  description: 'Professional drone wedding photography and videography services across the UK. Breathtaking aerial shots of your venue and ceremony. CAA certified, discreet operation.',
  keywords: 'drone wedding photography, aerial wedding photos, wedding drone videography, drone wedding photographer uk, aerial venue photography',
};

export default function DroneWeddingPhotographyPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Wedding Photography Services"
        description="Professional drone wedding photography and videography services across the UK. Breathtaking aerial shots of your venue and ceremony. CAA certified, discreet operation."
        url="https://hiredronepilot.uk/services/drone-wedding-photography"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Services", url: "https://hiredronepilot.uk/services" },
        { name: "Drone Wedding Photography", url: "https://hiredronepilot.uk/services/drone-wedding-photography" }
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/service-drone-survey.avif"
            alt="Drone capturing aerial photography of a wedding venue and grounds"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        </div>
        <div className="container pt-8 pb-52 lg:pb-40 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Photography &amp; Video
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drone Wedding Photography
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Capture your special day from breathtaking aerial perspectives. Stunning venue photography, cinematic ceremony coverage, and unforgettable group shots from above—all operated discreetly by our CAA certified pilots.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <QuoteButton className="btn btn-primary">
                Compare Quotes
              </QuoteButton>
              <Link href="/services" className="btn btn-outline-white">
                View All Services
              </Link>
            </div>
            <p className="mt-4 text-white/70 text-sm flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Avg Response within 5 Mins &bull; Or call{' '}
              <a href="tel:+441334804554" className="text-gold hover:underline font-medium">
                +44 1334 804554
              </a>
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20">
          <svg
            className="absolute bottom-0 w-full h-20"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            fill="white"
          >
            <path d="M0,80 L1440,80 L1440,0 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">

              {/* What is Drone Wedding Photography? */}
              <div>
                <h2 id="what-is-drone-wedding-photography" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What is <span className="text-gold">Drone Wedding Photography</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone wedding photography captures your ceremony, venue, and celebrations from elevated angles that traditional photography simply cannot reach. Imagine your guests arranged in a heart formation photographed from directly above, or your venue grounds bathed in golden evening light captured from the perfect vantage point.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Hire Drone Pilot, we work alongside your existing wedding photographer to add a spectacular aerial dimension to your day. Our CAA certified operators fly discreetly, capturing images and video that become the centrepiece of your wedding album and social media memories.
                </p>

                {/* Conversion CTA Box */}
                <div className="mt-8 bg-teal rounded-2xl p-6 md:p-8 overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gold/30 flex-shrink-0 overflow-hidden">
                        <Image
                          src="/images/peter_leslie.webp"
                          alt="Peter Leslie - Owner & Drone Pilot"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">Peter Leslie</h4>
                        <p className="text-gold text-sm font-medium">Owner & Drone Pilot</p>
                        <p className="text-white/70 text-sm italic mt-2 max-w-xs">
                          &quot;Have questions about drone coverage for your wedding? Ring me directly - I&apos;d love to hear about your plans.&quot;
                        </p>
                        <a
                          href="tel:+441334804554"
                          className="inline-flex items-center gap-2 mt-3 text-gold hover:text-white transition-colors text-sm font-semibold"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Call Now
                        </a>
                      </div>
                    </div>
                    <div className="md:ml-auto md:text-right">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                        Your Wedding Day,
                        <span className="text-gold block relative inline-block">
                          From a Stunning Perspective
                          <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                            <path
                              d="M0,4 Q25,0 50,4 T100,4 T150,4 T200,4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                          </svg>
                        </span>
                      </h3>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                        What You&apos;ll Receive
                      </h3>
                      <ul className="space-y-2.5">
                        {[
                          'Aerial venue & grounds photography',
                          'Ceremony & group shots from above',
                          'Cinematic drone video (optional)',
                          'Professionally edited finals',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-white/90">
                            <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-gold font-semibold mt-4">
                        Delivered in 5-7 working days
                      </p>
                    </div>

                    <div>
                      <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                        Why Use HireDronePilot
                      </h3>
                      <ul className="space-y-2.5">
                        {[
                          'CAA certified & fully insured',
                          'Discreet, quiet drone operation',
                          'Experience with wedding venues',
                          'Coordinates with your photographer',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-white/90">
                            <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-white/70 text-sm mt-4 flex items-start gap-2">
                        <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                        </svg>
                        <span>Trusted by couples, wedding planners, and venue coordinators across the UK.</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="text-white/90 text-sm font-medium">Ready to help — avg response within 5 mins</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="tel:+441334804554"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +44 1334 804554
                      </a>
                      <QuoteButton className="btn btn-primary btn-shimmer flex-1 sm:flex-none">
                        Request a Wedding Quote
                      </QuoteButton>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-white/50 text-xs uppercase tracking-wider text-center mb-4">Relied upon by major organisations</p>
                    <ClientLogoMarqueeInline />
                  </div>
                </div>
              </div>

              {/* How much does it cost? */}
              <div>
                <h2 id="drone-wedding-photography-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Much Does <span className="text-gold">Drone Wedding Photography</span> Cost?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Wedding drone photography pricing depends on the duration of coverage and the deliverables you require. Below is a guide to our packages:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Package</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Coverage</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Ceremony Only<span className="block text-sm text-text-secondary font-normal">1-2 hours on site</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£300+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Venue exterior, ceremony arrivals</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">15-20 edited aerials</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Half Day<span className="block text-sm text-text-secondary font-normal">Up to 4 hours</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Ceremony, group photos, venue</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">25-40 aerials + short video</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Full Day<span className="block text-sm text-text-secondary font-normal">Up to 8 hours</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£800+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Complete day coverage</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">50+ aerials + full video edit</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Bespoke<span className="block text-sm text-text-secondary font-normal">Multi-day or destination</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Custom coverage plan</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Tailored to your requirements</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Highlights Video Add-on</td>
                        <td className="py-3 px-4 text-teal font-bold">+£200</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">Add to any package</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden lg:table-cell">60-90s cinematic edit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Guide prices cover standard deliverables. Final quotation depends on venue location, coverage duration, and specific requirements.
                </p>

                <h3 className="font-bold text-teal mb-3">Factors Influencing Your Quote</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Duration of coverage', 'Venue location & travel', 'Photos, video, or both', 'Editing & post-production'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Drone coverage adds a unique dimension to your wedding photography at a fraction of the cost of other premium additions. The resulting images and video become some of the most shared and cherished memories from your day.
                </p>

                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Ready to add aerial photography to your wedding?</p>
                    <p className="text-white/70 text-sm">Free, no-obligation quotes within 24 hours</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="tel:+441334804554" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Ring Us
                    </a>
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Compare Quotes
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* What Makes Drone Wedding Photography Special? */}
              <div>
                <h2 id="what-makes-it-special" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Makes <span className="text-gold">Drone Wedding Photography</span> Special?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Your wedding venue was chosen for a reason—its beauty, its setting, its atmosphere. Ground-level photography captures only a fraction of this. Drone photography reveals the full grandeur of your chosen location: the manicured gardens, the surrounding countryside, the architectural splendour of the building itself.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Beyond the venue, aerial photography creates compositions impossible from ground level. Guests arranged in creative formations, the bridal party framed against the landscape, or the couple walking through grounds captured from a sweeping elevated perspective—these become the images that define your wedding memories.
                </p>
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">Why Add Drone Coverage to Your Wedding?</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative bg-teal rounded-2xl p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-lg">Drone Wedding Coverage</h4>
                            <p className="text-gold text-sm font-medium">Unique, memorable perspectives</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Heart, text: 'Unforgettable aerial compositions' },
                            { Icon: Camera, text: 'High-resolution venue imagery' },
                            { Icon: Music, text: 'Discreet, quiet operation' },
                            { Icon: Sun, text: 'Golden hour aerial coverage' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5">
                              <item.Icon className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                              <span className="text-white/90 font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative bg-white border-2 border-border rounded-2xl p-6 overflow-hidden group hover:border-red-300 hover:shadow-xl transition-all duration-300">
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-text-primary font-bold text-lg">Ground Photography Only</h4>
                            <p className="text-text-secondary text-sm font-medium">Standard eye-level coverage</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { text: 'Cannot capture full venue setting', negative: true },
                            { text: 'Limited group shot compositions', negative: true },
                            { text: 'Misses landscape context', negative: true },
                            { text: 'Standard angles only', negative: true },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-red-50 rounded-lg px-4 py-2.5">
                              <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              <span className="text-text-primary font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-text-secondary text-sm mb-2">Want to see how a drone could enhance your wedding photography?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Get expert advice
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* What Shots Will You Capture? */}
              <div>
                <h2 id="wedding-drone-shots" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Shots Will a <span className="text-gold">Wedding Drone</span> Capture?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Our wedding drone coverage is tailored to your venue and your vision. Here are the key moments and compositions we typically capture:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <MapPin className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Venue Showcase</h3>
                    <p className="text-text-secondary text-sm">Sweeping establishing shots of the venue, its grounds, gardens, and the surrounding landscape in their full glory.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Heart className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Ceremony Coverage</h3>
                    <p className="text-text-secondary text-sm">Elevated views of outdoor ceremonies, the aisle approach, and the intimate moments captured from a respectful distance above.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Camera className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Group Formations</h3>
                    <p className="text-text-secondary text-sm">Creative overhead group photographs—hearts, circles, initials—that become the talking point of your wedding album.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Sun className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Golden Hour Portraits</h3>
                    <p className="text-text-secondary text-sm">The couple photographed during the magical golden hour light, set against the backdrop of the venue from elevated angles.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Clock className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Reception & Celebrations</h3>
                    <p className="text-text-secondary text-sm">Outdoor reception moments, garden party scenes, and departures captured from creative aerial viewpoints.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Music className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Cinematic Video</h3>
                    <p className="text-text-secondary text-sm">Smooth aerial video sequences that are edited into a stunning highlights reel set to music of your choice.</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Ready to discuss your wedding photography?</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Discuss Your Wedding Day
                    </QuoteButton>
                    <a href="tel:+441334804554" className="btn btn-outline">
                      Ring +44 1334 804554
                    </a>
                  </div>
                </div>
              </div>

              {/* What Deliverables Do You Receive? */}
              <div>
                <h2 id="wedding-photography-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Deliverables Do You Receive From <span className="text-gold">Drone Wedding Photography</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We provide a comprehensive set of final deliverables tailored to your package:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Edited Aerial Photographs</h4>
                      <p className="text-text-secondary text-sm">Professionally colour-graded and retouched aerial images delivered at full resolution for printing and sharing online.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Cinematic Highlights Video</h4>
                      <p className="text-text-secondary text-sm">A beautifully edited 60-90 second aerial highlights reel, colour-graded to complement your main wedding videography.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Social Media Versions</h4>
                      <p className="text-text-secondary text-sm">Images and video clips optimised for Instagram, Facebook, and TikTok sharing—perfect for reliving and sharing your day.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Private Online Gallery</h4>
                      <p className="text-text-secondary text-sm">Secure online gallery where you can preview, download, and share your aerial wedding images with family and friends.</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Want to discuss your specific requirements?</p>
                    <QuoteButton className="btn btn-primary btn-shimmer whitespace-nowrap">
                      Discuss Your Day
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* How Long Does the Drone Fly? */}
              <div>
                <h2 id="drone-flight-duration" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Long Does the <span className="text-gold">Drone Fly</span> at a Wedding?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  The drone does not fly continuously throughout your day. We plan specific flight windows around key moments—venue establishing shots, the ceremony, group photos, and golden hour—ensuring maximum impact with minimal intrusion. Actual flight time is typically 30-60 minutes across the day, spread across multiple short sessions.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Between flights, we remain on site ready to capture spontaneous moments or planned compositions. Your drone operator coordinates closely with your lead photographer to ensure seamless coverage without getting in each other&apos;s way.
                </p>

                {/* Timeline Table */}
                <div className="rounded-xl overflow-hidden border border-border">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Moment</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Flight Time</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">What We Capture</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Venue Establishing</td>
                        <td className="py-3 px-4 text-gold font-bold">10-15 mins</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Sweeping venue shots, grounds, and surroundings</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Ceremony</td>
                        <td className="py-3 px-4 text-gold font-bold">10-15 mins</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Arrivals, outdoor ceremony, confetti moments</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Group Photos</td>
                        <td className="py-3 px-4 text-gold font-bold">10-15 mins</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Creative overhead formations and group shots</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Golden Hour / Evening</td>
                        <td className="py-3 px-4 text-gold font-bold">10-15 mins</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Couple portraits, sunset venue shots</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Total Flight Time</td>
                        <td className="py-3 px-4 text-teal font-bold">30-60 mins</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">Spread across the day in short sessions</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <QuoteButton className="btn btn-primary btn-shimmer">
                    Book Wedding Coverage
                  </QuoteButton>
                  <a href="tel:+441334804554" className="btn btn-outline flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Chat With Peter
                  </a>
                </div>
              </div>

              {/* How to Choose a Provider */}
              <div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How to Choose a <span className="text-gold">Wedding Drone Photography</span> Provider
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Your wedding day deserves a drone operator who understands the importance of the occasion. When selecting a provider, look for:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Wedding experience</strong> – Drone pilots who understand the flow and etiquette of wedding days produce far better results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>CAA certification & insurance</strong> – Non-negotiable for any commercial drone operation, especially around guests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Quiet equipment</strong> – Modern drones are remarkably quiet, but not all operators use the latest models</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Editing quality</strong> – Beautiful aerial footage needs skilled post-production to match the style of your main photographer</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  At Hire Drone Pilot, we bring all of this together. We are CAA certified, fully insured, and experienced in capturing weddings across a wide variety of venues and settings.
                </p>

                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Ready to add drone coverage to your wedding day?</p>
                  <div className="flex flex-wrap gap-3">
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Connect With Peter
                    </QuoteButton>
                    <a href="tel:+441334804554" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +44 1334 804554
                    </a>
                  </div>
                </div>
              </div>

              {/* Will the Drone Disrupt the Ceremony? */}
              <div>
                <h2 id="drone-disruption" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Will the Drone <span className="text-gold">Disrupt the Ceremony</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  This is the most common concern couples raise, and the answer is: not at all when operated by an experienced wedding drone pilot. Modern drones are remarkably quiet—at typical flying heights of 30-50 metres, they are virtually inaudible over ambient outdoor noise, music, or conversation.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We plan flight windows carefully to avoid sensitive moments such as vows and readings. Our approach is to capture footage during natural transition points—arrivals, confetti throwing, outdoor mingling—when activity and energy levels are naturally high. The result is spectacular aerial coverage without any disturbance to the flow of your day.
                </p>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Ready to Capture Your Day From Above?</h3>
                  <p className="text-white/80 text-sm mb-4">Expert guidance &bull; Tailored pricing &bull; Avg Response within 5 Mins</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Compare Quotes
                    </QuoteButton>
                    <a href="tel:+441334804554" className="btn bg-white text-teal hover:bg-white/90 flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Ring Peter Now
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Your Surveyor Card */}
              <div className="bg-white border border-border rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30 flex-shrink-0">
                    <Image
                      src="/images/peter_leslie.webp"
                      alt="Peter Leslie - Owner & Drone Pilot"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-teal font-bold">Peter Leslie</h4>
                    <p className="text-text-secondary text-sm">Owner & Drone Pilot</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Peter understands that your wedding day is unique. He works closely with your photographer and venue to ensure seamless, discreet drone coverage that enhances your memories.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  Quick Guide: Wedding Drone Photography
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-drone-wedding-photography', label: 'What is Drone Wedding Photography?' },
                    { id: 'drone-wedding-photography-cost', label: 'How Much Does It Cost?' },
                    { id: 'what-makes-it-special', label: 'What Makes It Special?' },
                    { id: 'wedding-drone-shots', label: 'What Shots Will You Capture?' },
                    { id: 'wedding-photography-deliverables', label: 'What Deliverables Do You Receive?' },
                    { id: 'drone-flight-duration', label: 'How Long Does the Drone Fly?' },
                    { id: 'choose-provider', label: 'How to Choose a Provider' },
                    { id: 'drone-disruption', label: 'Will It Disrupt the Ceremony?' },
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-text-secondary hover:text-gold transition-all duration-200 text-sm py-1.5 border-l-2 border-transparent hover:border-gold pl-3 -ml-3"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Deliverables Card */}
              <div className="bg-teal rounded-2xl p-6">
                <h3 className="text-gold font-bold text-lg mb-4 uppercase tracking-wide">
                  Wedding Photography Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    'Edited aerial photographs',
                    'Cinematic highlights video',
                    'Social media versions',
                    'Private online gallery',
                    'Print-resolution files',
                    'Commercial usage licence',
                  ].map((deliverable, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <svg className="w-4 h-4 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card - Sticky with Form */}
              <div className="bg-teal rounded-2xl p-6 sticky top-32">
                <h3 className="text-white font-bold text-lg mb-2">
                  Discuss Your Wedding Day
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Get expert guidance and tailored pricing for your venue.
                </p>
                <form name="sidebar-quote" method="POST" className="space-y-3">
                  <input type="hidden" name="form-name" value="sidebar-quote" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-gold"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-gold"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-gold"
                  />
                  <textarea
                    name="message"
                    placeholder="Venue name & wedding date..."
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-gold resize-none"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary btn-shimmer w-full"
                  >
                    Compare Quotes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <div id="equipment-trigger">
        <EquipmentSection />
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Related Services */}
      <section className="py-16 bg-background-alt">
        <div className="container">
          <h2 className="text-2xl font-bold text-teal mb-8 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/drone-photography"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Drone Photography</h3>
              <p className="text-text-secondary text-sm">
                Professional aerial photography for marketing, events, and commercial projects across the UK.
              </p>
            </Link>
            <Link
              href="/services/drone-videographer"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Drone Videography</h3>
              <p className="text-text-secondary text-sm">
                Cinematic aerial video production for marketing, corporate, and creative projects.
              </p>
            </Link>
            <Link
              href="/services/drone-real-estate-photography"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Real Estate Photography</h3>
              <p className="text-text-secondary text-sm">
                Elevated property imagery for estate agents, developers, and land sales marketing.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Floating CTA - Mobile only on service pages */}
      <FloatingCTA />
    </>
  );
}
