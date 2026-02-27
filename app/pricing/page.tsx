import { Metadata } from 'next';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  Camera,
  Check,
  Clock,
  Info,
  MapPin,
  Shield,
  Star,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { BreadcrumbSchema, FAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Drone Service Pricing UK 2026 | Drone Pilot Day Rates & Costs Guide | HireDronePilot',
  description:
    'Complete UK drone service pricing guide. Drone pilot day rates from £1,200, hourly from £150. Compare drone photography prices, filming costs, inspection rates. Real market data.',
  keywords: [
    'drone service pricing UK',
    'drone pilot hourly rates',
    'drone photography prices uk',
    'real estate drone photography pricing uk',
    'drone filming cost',
    'drone operator cost',
    'drone photography near me',
    'drone hire cost',
    'drone pilot day rate',
    'drone day rate',
    'aerial photography costs',
    'drone inspection prices',
    'best drone service pricing',
  ],
  openGraph: {
    title: 'UK Drone Service Pricing Guide 2026 - HireDronePilot',
    description:
      'Complete industry pricing overview. Compare quotes from independent drone pilots. Market rates for drone photography, inspections, and filming.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://hiredronepilot.uk/pricing',
  },
};

const serviceData = [
  {
    name: 'Drone Photography',
    price: '£200-400',
    duration: '2-4 hours',
    href: '/services/drone-photography',
  },
  {
    name: 'Drone Roof Inspection',
    price: '£150-350',
    duration: '1-2 hours',
    href: '/services/drone-roof-inspection',
  },
  {
    name: 'Drone LiDAR Mapping',
    price: '£500-1000',
    duration: '4-8 hours',
    href: '/services/drone-lidar-mapping',
  },
  {
    name: 'Drone Thermal Imaging',
    price: '£300-600',
    duration: '2-4 hours',
    href: '/services/drone-thermal-imaging',
  },
  {
    name: 'Drone Gas Detection',
    price: '£800-1200',
    duration: '4-6 hours',
    href: '/services/drone-gas-detection',
  },
  {
    name: 'Drone Solar Survey',
    price: '£250-500',
    duration: '2-3 hours',
    href: '/services/drone-solar-survey',
  },
  {
    name: 'Drone Topographical Survey',
    price: '£600-1200',
    duration: '3-5 hours',
    href: '/services/drone-topographical-survey',
  },
  {
    name: 'Drone Confined Space Inspection',
    price: '£700-1000',
    duration: '4-6 hours',
    href: '/services/drone-industrial-survey',
  },
  {
    name: 'Drone Videography',
    price: '£350-750',
    duration: '3-5 hours',
    href: '/services/drone-photography',
  },
  {
    name: 'Drone Surveys',
    price: '£300-800',
    duration: '2-4 hours',
    href: '/services/drone-surveys',
  },
  {
    name: 'Bathymetric Survey',
    price: '£900-1500',
    duration: '6-8 hours',
    href: '/services/drone-coastal-survey',
  },
  {
    name: 'Drone Inspection Services',
    price: '£175-400',
    duration: '1-2 hours',
    href: '/services/drone-industrial-survey',
  },
  {
    name: 'Drone Mapping Services',
    price: '£500-1000',
    duration: '3-5 hours',
    href: '/services/drone-photogrammetry-survey',
  },
  {
    name: 'Ground Penetrating Radar',
    price: '£1000-2000',
    duration: '6-8 hours',
    href: '/services/drone-lidar-mapping',
  },
  {
    name: 'Drone Storm Damage Assessment',
    price: '£650-1200',
    duration: '4-5 hours',
    href: '/services/drone-roof-inspection',
  },
  {
    name: 'Drone Wedding Photography',
    price: '£400-800',
    duration: '2-4 hours',
    href: '/services/drone-photography',
  },
];

const comparisonData = [
  {
    task: 'Roof Inspection',
    traditional: {
      method: 'Scaffolding',
      cost: '£2,000-5,000',
      time: '3-5 days',
      safety: 'High risk',
    },
    drone: { cost: '£150-350', time: '2 hours', safety: 'Low risk' },
  },
  {
    task: 'Aerial Photography',
    traditional: {
      method: 'Helicopter',
      cost: '£2,000-4,000/hour',
      time: 'Weather dependent',
      safety: 'High risk',
    },
    drone: { cost: '£150-300/hour', time: 'Quick deployment', safety: 'Low risk' },
  },
  {
    task: 'Tower Inspection',
    traditional: {
      method: 'Rope Access',
      cost: '£1,500-3,000/day',
      time: 'Full day',
      safety: 'Very high risk',
    },
    drone: { cost: '£400-800/day', time: '2-4 hours', safety: 'Low risk' },
  },
];

const faqItems = [
  {
    question: 'Why do drone prices vary so much between drone pilots?',
    answer:
      "Prices vary based on drone pilot experience (1-10+ years), equipment quality (consumer to industrial), certifications held, insurance coverage, location, and specializations. A drone pilot with thermal imaging equipment and 5+ years experience will charge more than someone with a basic drone.",
  },
  {
    question: "What's typically included in the hourly rate?",
    answer:
      "Most hourly rates include the drone pilot's time, basic drone operation, standard photo/video capture, basic editing, and standard insurance. Additional costs may apply for specialist equipment, extensive post-production, rush delivery, or travel beyond 25 miles.",
  },
  {
    question: 'Do all drone pilots charge for travel costs?',
    answer:
      'Most drone pilots include the first 25 miles in their base rate. Beyond that, expect £0.45-0.85 per mile each way. For very remote locations requiring overnight stays, accommodation costs (£100-150/night) may apply.',
  },
  {
    question: 'Are drone service prices negotiable?',
    answer:
      'Prices may be negotiable for large projects, long-term contracts, or off-peak bookings. However, avoid choosing solely on price - experience, equipment quality, and insurance coverage are crucial for professional results.',
  },
  {
    question: 'Do prices include VAT?',
    answer:
      "VAT treatment depends on the drone pilot's business structure and annual revenue. Some drone pilots are VAT registered (add 20%), others aren't. Always clarify whether quoted prices include or exclude VAT before booking.",
  },
  {
    question: 'What happens if weather cancels the flight?',
    answer:
      "Most professional drone pilots don't charge for weather cancellations if given reasonable notice (usually 2-24 hours). Some may charge a small admin fee (£25-50) for same-day cancellations. Always clarify the weather policy before booking.",
  },
];

export default function PricingPage() {
  return (
    <div className="relative">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://hiredronepilot.uk' },
          { name: 'Pricing', url: 'https://hiredronepilot.uk/pricing' },
        ]}
      />
      <FAQSchema faqs={faqItems} />

      <section className="relative -mt-[104px] bg-gradient-to-br from-gold via-gold to-gold-hover text-white pt-[124px] pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="pricingHeroGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pricingHeroGrid)" />
          </svg>
        </div>
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm md:text-base font-semibold tracking-wider uppercase text-white/90 mb-3">
              Pricing Guide
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">UK Drone Service Pricing Guide 2026</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Complete industry pricing overview. Compare quotes from independent drone pilots. All drone pilots
              set their own rates.
            </p>

          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Standard UK Drone Pilot Day Rates
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Industry average rates across the UK. Individual drone pilots may charge different rates
              based on experience and equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background-alt rounded-2xl p-8 text-center border border-border">
              <Clock className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-teal mb-2">Hourly Rate</h3>
              <div className="text-4xl font-bold text-teal mb-2">£150</div>
              <p className="text-text-secondary">Per hour (UK average)</p>
              <p className="text-sm text-text-muted mt-2">Minimum 2-hour booking typical</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center border-2 border-orange-200">
              <Star className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-teal mb-2">Half Day</h3>
              <div className="text-4xl font-bold text-orange-700 mb-2">£550</div>
              <p className="text-text-secondary">4 hours coverage</p>
              <p className="text-sm text-text-muted mt-2">Most popular option</p>
            </div>

            <div className="bg-teal rounded-2xl p-8 text-center border border-border-dark">
              <TrendingUp className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Full Day</h3>
              <div className="text-4xl font-bold text-gold mb-2">£1,200</div>
              <p className="text-white/80">8 hours coverage</p>
              <p className="text-sm text-white/70 mt-2">Best value for large projects</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 max-w-4xl mx-auto mt-12">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-text-primary text-left">
                <strong className="text-orange-600">Important:</strong> This guide shows typical
                UK drone service costs. HireDronePilot drone pilots are independent operators who set
                their own competitive rates. Get personalized quotes from multiple drone pilots to
                compare actual prices for your specific project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Drone Service Pricing by Type
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Typical UK market rates for different drone services. Click any service to learn
              more about what&apos;s included.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-teal text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Service</th>
                  <th className="px-6 py-4 text-left font-semibold">Typical UK Price</th>
                  <th className="px-6 py-4 text-left font-semibold">Duration</th>
                  <th className="px-6 py-4 text-left font-semibold">Learn More</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {serviceData.map((service) => (
                  <tr key={service.name} className="hover:bg-background-alt transition-colors">
                    <td className="px-6 py-4">
                      <Link
                        href={service.href}
                        className="font-semibold text-teal hover:text-orange-600 transition-colors"
                      >
                        {service.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-green-600">{service.price}</div>
                      <div className="text-sm text-text-muted">Starting prices</div>
                    </td>
                    <td className="px-6 py-4 text-text-secondary">{service.duration}</td>
                    <td className="px-6 py-4">
                      <Link href={service.href} className="text-orange-600 hover:text-orange-700 font-medium">
                        View Details →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Pricing Tiers by Experience &amp; Equipment
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Drone pilot rates vary based on experience, certifications, and equipment quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-teal mb-6">Residential Clients</h3>
              <div className="space-y-4">
                <div className="bg-background-alt rounded-lg p-6 border border-border">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-teal">Entry Level Drone Pilots</h4>
                    <span className="text-text-primary font-bold">£75-100/hour</span>
                  </div>
                  <p className="text-sm text-text-secondary">
                    1-2 years experience, consumer drones, basic certifications
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border-2 border-orange-200">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-teal">Professional Drone Pilots</h4>
                    <span className="text-orange-700 font-bold">£100-150/hour</span>
                  </div>
                  <p className="text-sm text-text-secondary">
                    3-5 years experience, prosumer equipment, full certifications
                  </p>
                  <span className="inline-block bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded-full mt-2">
                    Most Popular
                  </span>
                </div>

                <div className="bg-background-alt rounded-lg p-6 border border-border">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-teal">Specialist Operators</h4>
                    <span className="text-text-primary font-bold">£150-250/hour</span>
                  </div>
                  <p className="text-sm text-text-secondary">
                    5+ years experience, industrial drones, specialist equipment
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-teal mb-6">Commercial Clients</h3>
              <div className="space-y-4">
                <div className="bg-background-alt rounded-lg p-6 border border-border">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-teal">Basic Package</h4>
                    <span className="text-text-primary font-bold">£150-200/hour</span>
                  </div>
                  <p className="text-sm text-text-secondary">
                    Standard commercial work, basic reporting, standard insurance
                  </p>
                </div>

                <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-200">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-teal">Professional Package</h4>
                    <span className="text-orange-700 font-bold">£200-300/hour</span>
                  </div>
                  <p className="text-sm text-text-secondary">
                    Professional equipment, detailed reporting, enhanced insurance
                  </p>
                  <span className="inline-block bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded-full mt-2">
                    Recommended
                  </span>
                </div>

                <div className="bg-teal text-white rounded-lg p-6 border border-border-dark">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-white">Enterprise Package</h4>
                    <span className="text-gold font-bold">£300-500/hour</span>
                  </div>
                  <p className="text-sm text-white/80">
                    Industrial equipment, comprehensive reporting, premium insurance
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-teal rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Equipment-Based Pricing</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <Camera className="w-8 h-8 text-gold mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Consumer Drones</h4>
                <div className="text-gold font-bold mb-1">£75-125/hour</div>
                <p className="text-sm text-white/70">DJI Mini, Air series</p>
              </div>

              <div className="text-center">
                <Building2 className="w-8 h-8 text-gold mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Professional</h4>
                <div className="text-gold font-bold mb-1">£125-200/hour</div>
                <p className="text-sm text-white/70">Mavic 3, Phantom series</p>
              </div>

              <div className="text-center">
                <Shield className="w-8 h-8 text-gold mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Industrial</h4>
                <div className="text-gold font-bold mb-1">£200-400/hour</div>
                <p className="text-sm text-white/70">Matrice, Thermal cameras</p>
              </div>

              <div className="text-center">
                <Zap className="w-8 h-8 text-gold mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Specialist</h4>
                <div className="text-gold font-bold mb-1">£400-600/hour</div>
                <p className="text-sm text-white/70">LiDAR, Multispectral</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              How Travel Affects Pricing
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Understanding additional costs that may apply to your drone service booking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <MapPin className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-teal mb-4">Travel Distance Costs</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-secondary">First 25 miles:</span>
                  <span className="font-semibold text-green-600">Usually included</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">26-50 miles:</span>
                  <span className="font-semibold">+£0.45-0.65/mile</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">50+ miles:</span>
                  <span className="font-semibold">+£0.65-0.85/mile</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Overnight stays:</span>
                  <span className="font-semibold text-orange-600">+£100-150/night</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <AlertTriangle className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-teal mb-4">
                Hidden Costs Most People Don&apos;t Consider
              </h3>
              <div className="space-y-2">
                {[
                  'Flight Permissions (£50-500)',
                  'Air Traffic Control Notifications',
                  'No-Fly Zone Applications (£100-300)',
                  'Risk Assessment Preparation',
                  'Pre-flight Safety Checks',
                  'Post-flight Processing',
                  'Weather Delays/Cancellations',
                  'Specialist Equipment Rental',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-teal mb-6 text-center">
              Factors Affecting UK Drone Pricing
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-teal mb-4">📍 Location</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>London:</span>
                    <span className="text-red-600">+20-30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Major Cities:</span>
                    <span className="text-orange-600">+10-15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rural Areas:</span>
                    <span className="text-green-600">Standard</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Restricted Airspace:</span>
                    <span className="text-red-600">+25-50%</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-teal mb-4">⏰ Urgency</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Same Day:</span>
                    <span className="text-red-600">+50-100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Next Day:</span>
                    <span className="text-orange-600">+25-50%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekend:</span>
                    <span className="text-orange-600">+25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bank Holidays:</span>
                    <span className="text-red-600">+50-75%</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-teal mb-4">🛠️ Equipment & Certs</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Thermal Camera:</span>
                    <span className="text-orange-600">+£100-200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>LiDAR:</span>
                    <span className="text-red-600">+£300-500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A2 CofC:</span>
                    <span className="text-green-600">Standard</span>
                  </div>
                  <div className="flex justify-between">
                    <span>OSC Required:</span>
                    <span className="text-orange-600">+£200-400</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Drones vs Traditional Methods
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              See how drone services compare to conventional approaches in cost, time, and safety.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-teal text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Task</th>
                  <th className="px-6 py-4 text-left">Traditional Method</th>
                  <th className="px-6 py-4 text-left">Traditional Cost</th>
                  <th className="px-6 py-4 text-left">Drone Cost</th>
                  <th className="px-6 py-4 text-left">Time Saved</th>
                  <th className="px-6 py-4 text-left">Safety</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparisonData.map((item) => (
                  <tr key={item.task} className="hover:bg-background-alt">
                    <td className="px-6 py-4 font-semibold text-teal">{item.task}</td>
                    <td className="px-6 py-4 text-text-secondary">{item.traditional.method}</td>
                    <td className="px-6 py-4">
                      <span className="text-red-600 font-semibold">{item.traditional.cost}</span>
                      <div className="text-sm text-text-muted">{item.traditional.time}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gold font-semibold">{item.drone.cost}</span>
                      <div className="text-sm text-text-muted">{item.drone.time}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm">
                        70-90%
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm">
                        Much Safer
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-alt">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-text-secondary">Common questions about UK drone service pricing</p>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.question} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-teal mb-3">{faq.question}</h3>
                <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
            Ready to Compare Real Drone Pilot Pricing?
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            Share your project details once and compare competitive quotes from independent drone pilots.
          </p>
          <Link href="/contact">
            <button className="btn btn-primary btn-shimmer">
              Get Free Quotes from Real Drone Pilots
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
