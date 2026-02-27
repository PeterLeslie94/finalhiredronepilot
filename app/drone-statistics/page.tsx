/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, Users, PieChart as PieChartIcon, BarChart3, AlertTriangle, Shield, Activity, Plane, Scale, FileText, Clock, DollarSign, Globe, Heart, Smile, Frown, Meh, Eye, Zap, Home, MapPin, Music, Trees, Copy, Check } from 'lucide-react';
import { CitationButton } from '@/components/statistics/CitationButton';
import { JumpToNav } from '@/components/statistics/JumpToNav';
import ClientLogoMarquee from '@/components/ClientLogoMarquee';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Drone Statistics & Facts 2026 | HireDronePilot',
  description: 'Comprehensive drone industry statistics for 2026 covering market size, ownership demographics, usage trends, safety data, and economic impact in the USA and globally.',
  keywords: [
    'drone statistics 2026',
    'drone industry data',
    'FAA drone registrations',
    'drone ownership demographics',
    'drone market trends',
    'commercial drone statistics',
    'recreational drone data',
    'drone pilot demographics'
  ],
  openGraph: {
    title: 'Drone Statistics 2026',
    description: 'Complete industry overview with market size, demographics, trends, and economic impact data.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://hiredronepilot.uk/drone-statistics',
  },
}

export default function DroneStatisticsPage() {
  return (
    <div className="relative">
      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative -mt-[104px] bg-gradient-to-br from-gold via-gold to-gold-hover text-white pt-[120px] pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Drone Statistics 2026
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Expanded Edition: Comprehensive overview of the drone industry covering market size, ownership demographics, usage trends, public perception, safety incidents, and economic impact
              </p>
            </div>
          </div>
        </section>

        {/* Jump to Section Navigation */}
        <JumpToNav />

        {/* Introduction */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Author Box */}
              <div className="mb-12">
                <div className="not-prose rounded-xl border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/60 p-6 shadow-sm">
                  <div className="flex flex-col items-start gap-5 sm:flex-row">
                    <Image
                      src="/images/peter_leslie.webp"
                      alt="Peter Leslie"
                      width={110}
                      height={110}
                      className="shrink-0 rounded-full border-4 border-gold"
                    />

                    <div className="text-left">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Written By
                      </p>
                      <p className="text-xl font-bold leading-tight text-gray-900">Peter Leslie</p>
                      <p className="mt-1 text-sm font-semibold text-orange-700">Owner & Drone Pilot</p>
                      <p className="mt-3 text-sm leading-relaxed text-gray-700">
                        Peter Leslie is the founder of HireDronePilot, helping UK clients compare quotes from independent drone pilots through one streamlined platform.
                      </p>

                      <div className="mt-4 flex flex-wrap gap-3">
                        <a
                          href="https://www.linkedin.com/in/peter-leslie-drones"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-shimmer !px-7 !py-3.5 !text-sm min-w-[170px]"
                        >
                          LinkedIn
                        </a>
                        <Link
                          href="/about"
                          className="btn btn-outline !px-7 !py-3.5 !text-sm min-w-[170px]"
                        >
                          About Peter
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                The drone industry has experienced remarkable growth over the past decade, transforming from a niche hobby into a multi-billion dollar global market with applications across numerous sectors.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                This comprehensive guide provides the latest drone statistics and insights into drone ownership, usage patterns, regulatory landscape, and market trends for 2026, with a primary focus on the United States and global perspectives.
              </p>

              <p className="text-lg text-gray-700 mb-12">
                Whether you're a <a href="https://hiredronepilot.uk/" className="text-orange-600 hover:text-orange-700 underline" rel="dofollow">drone pilot</a>, industry professional, researcher, or simply curious about this rapidly evolving technology, this data-driven overview will give you a clear picture of where the drone industry stands today.
              </p>

              {/* Key Drone Statistics Box */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border-2 border-orange-200 shadow-lg">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-orange-900">Key Drone Statistics 2026</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">855,860 drones</strong> registered with the FAA in the United States <span className="text-gray-600 text-sm">(as of October 2026)</span>
                      <CitationButton text="855,860 drones registered with the FAA in the United States as of October 2026" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      Drone market projected to reach <strong className="text-orange-900">$127 billion by 2032</strong>—nearly tripling in size <span className="text-gray-600 text-sm">(2026 projection)</span>
                      <CitationButton text="Drone market projected to reach $127 billion by 2032—nearly tripling in size (2026 projection)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">China generated $1.4 billion</strong> in drone revenue—more than any country <span className="text-gray-600 text-sm">(2024 data)</span>
                      <CitationButton text="China generated $1.4 billion in drone revenue—more than any country (2024 data)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">96% of US drone owners are men</strong>, only 4% are women <span className="text-gray-600 text-sm">(FAA 2024)</span>
                      <CitationButton text="96% of US drone owners are men, only 4% are women (FAA 2024)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      DJI holds <strong className="text-orange-900">80% of the US consumer drone market</strong> <span className="text-gray-600 text-sm">(2026 data)</span>
                      <CitationButton text="DJI holds 80% of the US consumer drone market (2026 data)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">8% of all Americans</strong> own a drone—approximately 26.8 million people <span className="text-gray-600 text-sm">(2024 survey)</span>
                      <CitationButton text="8% of all Americans own a drone—approximately 26.8 million people (2024 survey)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">63% of drone registrations</strong> are for recreational use, 37% are commercial <span className="text-gray-600 text-sm">(FAA January 2026)</span>
                      <CitationButton text="63% of drone registrations are for recreational use, 37% are commercial (FAA January 2026)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">Only 11% of Americans</strong> support drones flying near homes—lowest acceptance rate <span className="text-gray-600 text-sm">(2024 survey)</span>
                      <CitationButton text="Only 11% of Americans support drones flying near homes—lowest acceptance rate (2024 survey)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">92% of FAA waivers</strong> are granted for night flight operations <span className="text-gray-600 text-sm">(FAA 2024)</span>
                      <CitationButton text="92% of FAA waivers are granted for night flight operations (FAA 2024)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">Fingers account for 56%</strong> of all drone-related injuries—most common body part injured <span className="text-gray-600 text-sm">(2024 data)</span>
                      <CitationButton text="Fingers account for 56% of all drone-related injuries—most common body part injured (2024 data)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">67% of construction companies</strong> use drones for site surveying and progress monitoring <span className="text-gray-600 text-sm">(2026 survey)</span>
                      <CitationButton text="67% of construction companies use drones for site surveying and progress monitoring (2026 survey)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">340 lives saved</strong> by medical drone deliveries in rural areas <span className="text-gray-600 text-sm">(2024 estimate)</span>
                      <CitationButton text="340 lives saved by medical drone deliveries in rural areas (2024 estimate)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">87% reduction in carbon emissions</strong> when using drones vs helicopter surveys <span className="text-gray-600 text-sm">(2024 environmental study)</span>
                      <CitationButton text="87% reduction in carbon emissions when using drones vs helicopter surveys (2024 environmental study)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">100,000 trees per day</strong> can be planted by reforestation drones—67x faster than manual planting <span className="text-gray-600 text-sm">(2026 data)</span>
                      <CitationButton text="100,000 trees per day can be planted by reforestation drones—67x faster than manual planting (2026 data)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">82% of luxury real estate</strong> listings over $1M include drone photography <span className="text-gray-600 text-sm">(2026 market data)</span>
                      <CitationButton text="82% of luxury real estate listings over $1M include drone photography (2026 market data)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">$840 million</strong> annual revenue from film and media drone services <span className="text-gray-600 text-sm">(2024 industry report)</span>
                      <CitationButton text="$840 million annual revenue from film and media drone services (2024 industry report)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">12-minute average</strong> drone delivery time vs 45 minutes for traditional delivery <span className="text-gray-600 text-sm">(2024 logistics data)</span>
                      <CitationButton text="12-minute average drone delivery time vs 45 minutes for traditional delivery (2024 logistics data)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">4.5 million households</strong> now have access to Walmart drone delivery service <span className="text-gray-600 text-sm">(2026)</span>
                      <CitationButton text="4.5 million households now have access to Walmart drone delivery service (2026)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">55% cost reduction</strong> for infrastructure inspections using drones vs traditional methods <span className="text-gray-600 text-sm">(2026 industry analysis)</span>
                      <CitationButton text="55% cost reduction for infrastructure inspections using drones vs traditional methods (2026 industry analysis)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">37% faster emergency response</strong> times when drones provide initial assessment <span className="text-gray-600 text-sm">(2024 first responder data)</span>
                      <CitationButton text="37% faster emergency response times when drones provide initial assessment (2024 first responder data)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">2,400 endangered species</strong> tracked globally with drone conservation technology <span className="text-gray-600 text-sm">(2026 wildlife data)</span>
                      <CitationButton text="2,400 endangered species tracked globally with drone conservation technology (2026 wildlife data)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">14 minutes faster</strong> wildfire detection with drone surveillance vs traditional spotting <span className="text-gray-600 text-sm">(2024 forestry data)</span>
                      <CitationButton text="14 minutes faster wildfire detection with drone surveillance vs traditional spotting (2024 forestry data)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">3.2 million acres</strong> of US farmland monitored by agricultural drones annually <span className="text-gray-600 text-sm">(2024 agriculture report)</span>
                      <CitationButton text="3.2 million acres of US farmland monitored by agricultural drones annually (2024 agriculture report)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">68% of consumers</strong> willing to use drone delivery for packages under 5 lbs <span className="text-gray-600 text-sm">(2024 consumer survey)</span>
                      <CitationButton text="68% of consumers willing to use drone delivery for packages under 5 lbs (2024 consumer survey)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">30-40% pesticide reduction</strong> achieved through precision drone agriculture <span className="text-gray-600 text-sm">(2026 environmental study)</span>
                      <CitationButton text="30-40% pesticide reduction achieved through precision drone agriculture (2026 environmental study)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">23 cities worldwide</strong> expected to launch urban air taxi drone services by 2027 <span className="text-gray-600 text-sm">(2026 projection)</span>
                      <CitationButton text="23 cities worldwide expected to launch urban air taxi drone services by 2027 (2026 projection)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">98.2% on-time delivery rate</strong> for pizza delivery by drone in trial programs <span className="text-gray-600 text-sm">(2024 trial data)</span>
                      <CitationButton text="98.2% on-time delivery rate for pizza delivery by drone in trial programs (2024 trial data)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">43% faster insurance claim</strong> processing with drone damage assessments <span className="text-gray-600 text-sm">(2024 insurance industry)</span>
                      <CitationButton text="43% faster insurance claim processing with drone damage assessments (2024 insurance industry)" />
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-800 flex-1">
                      <strong className="text-orange-900">340+ cities</strong> deploy drones for air quality monitoring worldwide <span className="text-gray-600 text-sm">(2024 environmental data)</span>
                      <CitationButton text="340+ cities deploy drones for air quality monitoring worldwide (2024 environmental data)" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Drone Registrations & Ownership Demographics */}
        <section id="registrations" className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-4">
              Drone Registrations &amp; Ownership Demographics (USA)
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Data from the Federal Aviation Administration (FAA) reveals key insights into who owns and operates drones across the United States.
            </p>

            {/* Key Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {/* Total Registrations */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full p-3 mr-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-orange-800 uppercase tracking-wide">Total Registrations</p>
                  </div>
                </div>
                <p className="text-5xl font-bold text-orange-900 mb-2">855,860</p>
                <p className="text-gray-700">Drones registered with the FAA in 2026</p>
              </div>

              {/* Recreational */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full p-3 mr-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-orange-800 uppercase tracking-wide">Recreational</p>
                  </div>
                </div>
                <p className="text-5xl font-bold text-orange-900 mb-2">536,183</p>
                <p className="text-gray-700">63% of all registrations</p>
              </div>

              {/* Commercial */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 rounded-full p-3 mr-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-800 uppercase tracking-wide">Commercial</p>
                  </div>
                </div>
                <p className="text-5xl font-bold text-green-900 mb-2">316,075</p>
                <p className="text-gray-700">37% of all registrations</p>
              </div>
            </div>

            {/* Recreational vs Commercial Breakdown */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <PieChartIcon className="w-6 h-6 text-orange-600 mr-3" />
                Recreational vs. Commercial Registration Breakdown
              </h3>

              {/* Pie Chart Visualization */}
              <div className="flex flex-col md:flex-row items-center gap-12 mb-8">
                {/* Visual Pie Chart */}
                <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
                  <div className="relative w-72 h-72">
                    <svg viewBox="0 0 200 200" className="transform -rotate-90 w-full h-full" preserveAspectRatio="xMidYMid meet">
                      {/* Commercial - 37% */}
                      <circle
                        cx="100"
                        cy="100"
                        r="70"
                        fill="transparent"
                        stroke="#10b981"
                        strokeWidth="50"
                        strokeDasharray="163.36 439.82"
                        className="transition-all duration-500"
                      />
                      {/* Recreational - 63% */}
                      <circle
                        cx="100"
                        cy="100"
                        r="70"
                        fill="transparent"
                        stroke="#3b82f6"
                        strokeWidth="50"
                        strokeDasharray="276.46 439.82"
                        strokeDashoffset="-163.36"
                        className="transition-all duration-500"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-gray-900">855,860</p>
                        <p className="text-sm text-gray-600">Total</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-orange-600 rounded-full mr-3"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Recreational Drones</p>
                        <p className="text-sm text-gray-600">Hobbyist and personal use</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-orange-900">63%</p>
                      <p className="text-sm text-gray-600">536,183 drones</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Commercial Drones</p>
                        <p className="text-sm text-gray-600">Business and professional operations</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-900">37%</p>
                      <p className="text-sm text-gray-600">316,075 drones</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Explanation */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">What This Means:</h4>
                <p className="text-gray-700 mb-3">
                  The FAA's registration data shows that <strong>recreational use dominates the drone market</strong>, with nearly two-thirds of all registered drones being flown for hobby and personal purposes. This includes <Link href="/services/drone-photography" className="text-gold hover:underline">aerial photography</Link> enthusiasts, FPV racing enthusiasts, and hobbyists exploring the technology.
                </p>
                <p className="text-gray-700">
                  The commercial sector, while smaller in registration numbers, represents significant economic activity across industries including construction, <Link href="/services/drone-agricultural-survey" className="text-gold hover:underline">agriculture</Link>, surveying, real estate, and media production. The 37% commercial share translates to over 316,000 drones actively contributing to business operations across the United States.
                </p>
              </div>
            </div>

            {/* Gender Distribution */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ownership by Gender
              </h3>

              <div className="mb-8">
                {/* Men - 96% */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Men</span>
                    <span className="text-2xl font-bold text-orange-600">96%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-orange-600 h-8 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-4"
                      style={{ width: '96%' }}
                    >
                      <span className="text-white font-semibold text-sm">96%</span>
                    </div>
                  </div>
                </div>

                {/* Women - 4% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Women</span>
                    <span className="text-2xl font-bold text-orange-600">4%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-orange-600 h-8 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-4"
                      style={{ width: '4%' }}
                    >
                      <span className="text-white font-semibold text-sm">4%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Explanation */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">What This Means:</h4>
                <p className="text-gray-700 mb-3">
                  The drone industry shows a <strong>significant gender imbalance</strong>, with men representing 96% of registered drone owners in the United States. This disparity reflects broader trends in technology adoption and STEM fields.
                </p>
                <p className="text-gray-700">
                  However, industry initiatives and growing awareness are working to make drone piloting more inclusive. Organizations and training programs are actively encouraging more women to enter the field, recognizing the value of diverse perspectives in this rapidly growing industry.
                </p>
              </div>
            </div>

            {/* Age Group Distribution */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ownership by Age Group
              </h3>

              <p className="text-gray-700 mb-8">
                The largest segment of drone owners is between <strong>45 and 54 years old</strong>, representing 22% of all owners.
              </p>

              <div className="space-y-4 mb-8">
                {/* 18-24 Years - 19% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">18-24 Years Old</span>
                    <span className="text-xl font-bold text-orange-600">19%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-orange-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '19%' }}
                    ></div>
                  </div>
                </div>

                {/* 25-34 Years - 17% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">25-34 Years Old</span>
                    <span className="text-xl font-bold text-cyan-600">17%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-cyan-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '17%' }}
                    ></div>
                  </div>
                </div>

                {/* 35-44 Years - 20% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">35-44 Years Old</span>
                    <span className="text-xl font-bold text-green-600">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-green-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '20%' }}
                    ></div>
                  </div>
                </div>

                {/* 45-54 Years - 22% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">45-54 Years Old</span>
                    <span className="text-xl font-bold text-orange-600">22%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-orange-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '22%' }}
                    ></div>
                  </div>
                </div>

                {/* 55-64 Years - 13% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">55-64 Years Old</span>
                    <span className="text-xl font-bold text-orange-600">13%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-orange-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '13%' }}
                    ></div>
                  </div>
                </div>

                {/* 65+ Years - 6% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">65+ Years Old</span>
                    <span className="text-xl font-bold text-red-600">6%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-red-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '6%' }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Age Distribution Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-300">Age Group</th>
                      <th className="text-right p-4 font-bold text-gray-900 border-b-2 border-gray-300">Percentage</th>
                      <th className="text-right p-4 font-bold text-gray-900 border-b-2 border-gray-300">Approx. Owners</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 text-gray-900">18-24 Years Old</td>
                      <td className="p-4 text-right font-semibold text-orange-600">19%</td>
                      <td className="p-4 text-right text-gray-700">~162,613</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 text-gray-900">25-34 Years Old</td>
                      <td className="p-4 text-right font-semibold text-cyan-600">17%</td>
                      <td className="p-4 text-right text-gray-700">~145,496</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 text-gray-900">35-44 Years Old</td>
                      <td className="p-4 text-right font-semibold text-green-600">20%</td>
                      <td className="p-4 text-right text-gray-700">~171,172</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-orange-50">
                      <td className="p-4 text-gray-900 font-semibold">45-54 Years Old</td>
                      <td className="p-4 text-right font-bold text-orange-600">22%</td>
                      <td className="p-4 text-right text-gray-900 font-semibold">~188,289</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 text-gray-900">55-64 Years Old</td>
                      <td className="p-4 text-right font-semibold text-orange-600">13%</td>
                      <td className="p-4 text-right text-gray-700">~111,262</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 text-gray-900">65+ Years Old</td>
                      <td className="p-4 text-right font-semibold text-red-600">6%</td>
                      <td className="p-4 text-right text-gray-700">~51,352</td>
                    </tr>
                    <tr className="bg-gray-100 font-bold">
                      <td className="p-4 text-gray-900">Total</td>
                      <td className="p-4 text-right text-gray-900">100%</td>
                      <td className="p-4 text-right text-gray-900">855,860</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Key Insights */}
              <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                  What This Means:
                </h4>

                <p className="text-gray-700 mb-3">
                  The data shows that <strong>middle-aged adults (35-54 years old) dominate drone ownership at 42%</strong> of all registered owners in the United States, reflecting a demographic with both the disposable income for quality equipment and the time to dedicate to the hobby or profession.
                </p>

                <p className="text-gray-700 mb-3">
                  With <strong>8% of all Americans owning a drone</strong> (approximately 26.8 million people), drone technology has achieved mainstream adoption far beyond early enthusiasts. This means nearly 1 in 12 Americans now owns these devices.
                </p>

                <p className="text-gray-700 mb-3">
                  The drone industry shows a <strong>significant gender imbalance with 96% of US drone owners being male</strong> and only 4% female, reflecting broader trends in technology adoption. This disparity suggests opportunities for targeted outreach and education programs to encourage more diverse participation.
                </p>

                <p className="text-gray-700 mb-3">
                  <strong>Recreational drones account for 63% of FAA registrations</strong> (536,183 units), while commercial operations represent 37% (316,075 units), demonstrating that hobby use still significantly outpaces professional applications despite the commercial sector's growing role in business operations.
                </p>

                <p className="text-gray-700">
                  <strong>DJI dominates the US consumer drone market with an 80% market share</strong> and 54% globally, establishing near-monopoly control in consumer drone manufacturing as of 2026. This concentration influences pricing, features, and the direction of consumer drone technology development worldwide.
                </p>
              </div>
            </div>

            {/* General Ownership Stat */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-xl p-12 text-center text-white">
              <div className="max-w-3xl mx-auto">
                <p className="text-6xl md:text-8xl font-bold mb-4">8%</p>
                <p className="text-2xl md:text-3xl font-semibold mb-4">of all Americans own a drone</p>
                <p className="text-lg text-orange-100 max-w-2xl mx-auto">
                  With the US population at approximately 335 million, this translates to roughly <strong className="text-white">26.8 million drone owners</strong> across the country, making drone technology more mainstream than many realize.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAA Regulations & Compliance Statistics */}
        <section id="regulations" className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-4">
              FAA Regulations &amp; Compliance Statistics
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Understanding FAA regulations, waiver processes, and compliance requirements for drone operators in the United States.
            </p>

            {/* Registration & Sightings */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg border-2 border-orange-200">
                <div className="flex items-center mb-4">
                  <Scale className="w-10 h-10 text-orange-600 mr-4" />
                  <div>
                    <p className="text-sm font-semibold text-orange-800 uppercase">Registration Requirement</p>
                  </div>
                </div>
                <p className="text-4xl font-bold text-orange-900 mb-2">55 lbs</p>
                <p className="text-gray-700">Drones weighing over 55 pounds must be registered with the FAA</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg border-2 border-orange-200">
                <div className="flex items-center mb-4">
                  <Activity className="w-10 h-10 text-orange-600 mr-4" />
                  <div>
                    <p className="text-sm font-semibold text-orange-800 uppercase">Monthly Sightings</p>
                  </div>
                </div>
                <p className="text-4xl font-bold text-orange-900 mb-2">100+</p>
                <p className="text-gray-700">Unmanned aircraft sightings reported to the FAA per month</p>
              </div>
            </div>

            {/* Part 107 Information */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 text-orange-600 mr-3" />
                Part 107: Recreational Drone Usage Guidelines
              </h3>

              <div className="bg-orange-50 rounded-lg p-6 mb-6 border-l-4 border-orange-500">
                <p className="text-gray-700 mb-4">
                  <strong className="text-orange-900">Part 107</strong> provides comprehensive guidelines for recreational drone usage, including restrictions on:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Purpose:</strong> Defines recreational vs commercial operations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Aircraft Interference:</strong> Must yield to manned aircraft</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Visual Line of Sight:</strong> Drone pilot must maintain direct visual contact</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Flight Hours & Locations:</strong> Time and airspace restrictions apply</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                <h4 className="font-bold text-orange-900 mb-2">Part 107 Waivers</h4>
                <p className="text-gray-700">
                  A <strong>Part 107 waiver</strong> is required for <Link href="/pilots" className="text-gold hover:underline">drone pilots</Link> who want to fly outside of the standard Part 107 rules. This allows operators to request permission for operations that would otherwise be prohibited.
                </p>
              </div>
            </div>

            {/* Waiver Approval Statistics */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Part 107 Waiver Request Outcomes
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Rejected</span>
                    <span className="text-2xl font-bold text-red-600">54%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8">
                    <div
                      className="bg-red-500 h-8 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '54%' }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Granted</span>
                    <span className="text-2xl font-bold text-green-600">46%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8">
                    <div
                      className="bg-green-500 h-8 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '46%' }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">What This Means:</h4>
                <p className="text-gray-700">
                  The data shows that <strong>54% of Part 107 waiver requests are rejected</strong>, while 46% are granted. This relatively high rejection rate indicates that the FAA carefully evaluates each request and maintains strict safety standards. Operators seeking waivers should ensure their applications include detailed safety plans and risk mitigation strategies.
                </p>
              </div>
            </div>

            {/* Types of Granted Waivers */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 text-orange-600 mr-3" />
                Breakdown of FAA-Granted Part 107 Waivers
              </h3>

              <div className="space-y-4 mb-8">
                {/* Night Operations - 92% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-indigo-600 mr-3" />
                      <span className="font-semibold text-gray-900">Night Flight Operations</span>
                    </div>
                    <span className="text-2xl font-bold text-indigo-600">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8">
                    <div
                      className="bg-indigo-500 h-8 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '92%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Flying drones at night or during twilight hours</p>
                </div>

                {/* Restricted Airspace - 5% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Plane className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="font-semibold text-gray-900">Restricted Airspace</span>
                    </div>
                    <span className="text-2xl font-bold text-orange-600">5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8">
                    <div
                      className="bg-orange-500 h-8 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '5%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Operations near airports, government buildings, and other controlled airspace</p>
                </div>

                {/* BVLOS & Other - 2% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Activity className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="font-semibold text-gray-900">BVLOS & Other Advanced Operations</span>
                    </div>
                    <span className="text-2xl font-bold text-orange-600">2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8">
                    <div
                      className="bg-orange-500 h-8 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '2%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Beyond visual line of sight, moving vehicle operations, and flights over populated areas</p>
                </div>

                {/* Multiple Drone Operations - 1% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-teal-600 mr-3" />
                      <span className="font-semibold text-gray-900">Multiple Drone Operations</span>
                    </div>
                    <span className="text-2xl font-bold text-teal-600">1%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8">
                    <div
                      className="bg-teal-500 h-8 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '1%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Operation of multiple drones flying simultaneously</p>
                </div>
              </div>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-300">Waiver Type</th>
                      <th className="text-right p-4 font-bold text-gray-900 border-b-2 border-gray-300">Percentage</th>
                      <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-300">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-indigo-50">
                      <td className="p-4 text-gray-900 font-semibold">Night Flight Operations</td>
                      <td className="p-4 text-right font-bold text-indigo-600">92%</td>
                      <td className="p-4 text-gray-700">Flying at night or during twilight</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 text-gray-900">Restricted Airspace</td>
                      <td className="p-4 text-right font-semibold text-orange-600">5%</td>
                      <td className="p-4 text-gray-700">Near airports and government buildings</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 text-gray-900">BVLOS & Advanced Operations</td>
                      <td className="p-4 text-right font-semibold text-orange-600">2%</td>
                      <td className="p-4 text-gray-700">Beyond visual line of sight, moving vehicles, over populated areas</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 text-gray-900">Multiple Drone Operations</td>
                      <td className="p-4 text-right font-semibold text-teal-600">1%</td>
                      <td className="p-4 text-gray-700">Operating multiple drones simultaneously</td>
                    </tr>
                    <tr className="bg-gray-100 font-bold">
                      <td className="p-4 text-gray-900">Total</td>
                      <td className="p-4 text-right text-gray-900">100%</td>
                      <td className="p-4 text-gray-700">All granted waivers</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                  What This Means:
                </h4>
                <p className="text-gray-700 mb-3">
                  The overwhelming majority of granted waivers—<strong>92%—are for night flight operations</strong>. This reflects strong demand from commercial operators who need to conduct inspections, surveys, and other operations outside daylight hours. Night waivers are often easier to obtain than other types because operators can implement straightforward safety measures like anti-collision lighting.
                </p>
                <p className="text-gray-700 mb-3">
                  Only <strong>5% of waivers are granted for restricted airspace operations</strong>, demonstrating the FAA's strict approach to operations near airports and sensitive government facilities. These waivers require extensive coordination with air traffic control and detailed safety protocols.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Just 2% of waivers are granted for BVLOS and advanced operations</strong>—beyond visual line of sight flights, operations from moving vehicles, and flights over populated areas. These represent some of the most complex and highest-risk operations, requiring sophisticated technology and comprehensive safety systems.
                </p>
                <p className="text-gray-700">
                  The rarest waiver type—<strong>only 1% for multiple drone operations</strong>—allows a single drone pilot to operate multiple drones simultaneously. This extremely limited category reflects the exceptional difficulty and risk of coordinating multiple aircraft at once, requiring advanced automation systems, redundant safety measures, and proven operational procedures. These waivers are typically reserved for specialized commercial operations like large-area surveying or coordinated filming.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Drone Revenue and Cost Statistics */}
        <section id="revenue" className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-4">
              Drone Revenue &amp; Cost Statistics
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Global market analysis, revenue projections, and pricing trends shaping the drone industry's economic landscape.
            </p>

            {/* Key Financial Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-3">
                  <DollarSign className="w-8 h-8 text-green-500 mr-3" />
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase">Average Cost</p>
                  </div>
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-1">$540</p>
                <p className="text-sm text-gray-600">Average drone price in 2024</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-8 h-8 text-orange-500 mr-3" />
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase">Per Person Revenue</p>
                  </div>
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-1">$3.92</p>
                <p className="text-sm text-gray-600">Average revenue per person in 2024</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
                <div className="flex items-center mb-3">
                  <Globe className="w-8 h-8 text-orange-500 mr-3" />
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase">2026 Revenue</p>
                  </div>
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-1">$63.6B</p>
                <p className="text-sm text-gray-600">Expected global revenue</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
                <div className="flex items-center mb-3">
                  <BarChart3 className="w-8 h-8 text-orange-500 mr-3" />
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase">B2B/Gov Spending</p>
                  </div>
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-1">$13B</p>
                <p className="text-sm text-gray-600">Annual enterprise spending</p>
              </div>
            </div>

            {/* Regional Revenue Leader */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Globe className="w-6 h-6 text-orange-600 mr-3" />
                Regional Revenue Leadership
              </h3>

              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-8 border-2 border-red-200 mb-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-sm font-semibold text-red-800 uppercase mb-2">Highest Revenue Market 2024</p>
                    <p className="text-5xl font-bold text-red-900 mb-2">China</p>
                    <p className="text-2xl font-semibold text-red-800">$1,394 Million</p>
                  </div>
                  <div className="text-6xl">🇨🇳</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">What This Means:</h4>
                <p className="text-gray-700">
                  <strong>China generated the highest revenue for the drone industry in 2024</strong>, reaching $1,394 million. This dominance reflects China's position as both the world's largest drone manufacturer (home to DJI) and a rapidly expanding consumer market. The country's strong manufacturing capabilities, government support for drone technology, and massive domestic market create a unique ecosystem that drives global drone industry revenue.
                </p>
              </div>
            </div>

            {/* Market Projections */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-orange-600 mr-3" />
                Global Market Growth Projections
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                  <p className="text-sm font-semibold text-orange-800 uppercase mb-2">2026 Target</p>
                  <p className="text-4xl font-bold text-orange-900 mb-2">$63.6B</p>
                  <p className="text-gray-700">Expected global drone revenue</p>
                </div>

                <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                  <p className="text-sm font-semibold text-orange-800 uppercase mb-2">2030 Projection</p>
                  <p className="text-4xl font-bold text-orange-900 mb-2">$55.8B</p>
                  <p className="text-gray-700">Total market value forecast</p>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                  <p className="text-sm font-semibold text-green-800 uppercase mb-2">2032 Potential</p>
                  <p className="text-4xl font-bold text-green-900 mb-2">$127B</p>
                  <p className="text-gray-700">Estimated sector value across industries</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 border-l-4 border-orange-500 mb-6">
                <h4 className="font-bold text-orange-900 mb-2 flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Asia: Fastest Growing Region
                </h4>
                <p className="text-gray-700 mb-2">
                  <strong className="text-orange-900">19.4% CAGR</strong> - Compound Annual Growth Rate
                </p>
                <p className="text-sm text-gray-600">Asia is experiencing the fastest growth rate globally, driven by manufacturing expansion, increasing commercial adoption, and supportive regulatory frameworks.</p>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                  What This Means:
                </h4>
                <p className="text-gray-700 mb-3">
                  The global drone market shows <strong>explosive growth potential from $63.6 billion in 2026 to $127 billion by 2032</strong>, representing a doubling of market value in just seven years. This growth is driven by expanding commercial applications across agriculture, construction, delivery services, and infrastructure inspection.
                </p>
                <p className="text-gray-700">
                  <strong>Asia's 19.4% CAGR significantly outpaces global averages</strong>, positioning the region as the primary growth engine for the drone industry. Countries like China, India, and Southeast Asian nations are rapidly adopting drone technology across multiple sectors, from agriculture to logistics, creating unprecedented market opportunities.
                </p>
              </div>
            </div>

            {/* Consumer Spending Patterns */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="w-6 h-6 text-orange-600 mr-3" />
                US Consumer Spending Patterns
              </h3>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Drone Purchase Distribution by Price Point</h4>

                <div className="space-y-4">
                  {/* Over $2,000 - 33.3% */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <DollarSign className="w-5 h-5 text-green-600 mr-3" />
                        <span className="font-semibold text-gray-900">Premium Models (Over $2,000)</span>
                      </div>
                      <span className="text-2xl font-bold text-green-600">33%+</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-8">
                      <div
                        className="bg-green-500 h-8 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-4"
                        style={{ width: '33%' }}
                      >
                        <span className="text-white font-semibold text-sm">Over 1/3 of purchases</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Professional-grade drones with advanced features</p>
                  </div>

                  {/* Under $2,000 - 66.7% */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <DollarSign className="w-5 h-5 text-orange-600 mr-3" />
                        <span className="font-semibold text-gray-900">Consumer & Mid-Range (Under $2,000)</span>
                      </div>
                      <span className="text-2xl font-bold text-orange-600">67%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-8">
                      <div
                        className="bg-orange-500 h-8 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: '67%' }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Entry-level and enthusiast drones</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500 mb-6">
                <h4 className="font-bold text-orange-900 mb-2">Average Drone Cost: $540</h4>
                <p className="text-gray-700">
                  The average drone purchase price in 2024 was <strong>$540</strong>, reflecting a balance between affordable consumer models and professional equipment. This price point represents solid mid-range drones with capable cameras and flight features suitable for most hobbyists.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">What This Means:</h4>
                <p className="text-gray-700 mb-3">
                  The fact that <strong>over one-third of US drone purchases are for models costing over $2,000</strong> indicates a mature market with serious enthusiasts and professionals willing to invest in premium equipment. This segment includes commercial operators, professional photographers, and dedicated hobbyists seeking advanced features like obstacle avoidance, extended flight times, and high-quality imaging systems.
                </p>
                <p className="text-gray-700">
                  The remaining 67% purchasing under $2,000 represents the mass-market appeal of drones, with many consumers entering the hobby through affordable yet capable models. The $540 average price point suggests most buyers are choosing quality mid-range options rather than bottom-tier budget drones.
                </p>
              </div>
            </div>

            {/* Enterprise & Government Spending */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 text-orange-600 mr-3" />
                Enterprise &amp; Government Investment
              </h3>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-8 border-2 border-orange-200 mb-6">
                <div className="text-center">
                  <p className="text-sm font-semibold text-orange-800 uppercase mb-2">Annual B2B & Government Spending</p>
                  <p className="text-6xl md:text-7xl font-bold text-orange-900 mb-4">$13 Billion</p>
                  <p className="text-lg text-gray-700">Businesses and government agencies collectively spent on drones in the past year</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-orange-50 rounded-lg p-5 text-center">
                  <p className="text-sm font-semibold text-orange-800 mb-2">Construction & Infrastructure</p>
                  <p className="text-2xl font-bold text-orange-900">🏗️</p>
                  <p className="text-sm text-gray-600 mt-2">Site surveys, progress monitoring</p>
                </div>

                <div className="bg-green-50 rounded-lg p-5 text-center">
                  <p className="text-sm font-semibold text-green-800 mb-2">Agriculture</p>
                  <p className="text-2xl font-bold text-green-900">🌾</p>
                  <p className="text-sm text-gray-600 mt-2">Crop monitoring, spraying</p>
                </div>

                <div className="bg-orange-50 rounded-lg p-5 text-center">
                  <p className="text-sm font-semibold text-orange-800 mb-2">Public Safety</p>
                  <p className="text-2xl font-bold text-orange-900">🚔</p>
                  <p className="text-sm text-gray-600 mt-2">Law enforcement, emergency response</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">What This Means:</h4>
                <p className="text-gray-700">
                  The <strong>$13 billion in annual enterprise and government spending</strong> demonstrates that drones have moved far beyond consumer toys to become essential business tools. This investment reflects growing adoption across construction, agriculture, public safety, energy infrastructure, and logistics sectors. Organizations are recognizing the ROI from reduced labor costs, improved safety, faster data collection, and enhanced operational efficiency that drone technology provides.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* US Public Emotional Reactions to Drones */}
        <section id="public-reactions" className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-4">
              US Public Emotional Reactions to Drones
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Survey results reveal how Americans feel when they see a drone flying near their home, from curiosity and interest to concern and fear.
            </p>

            {/* Survey Question */}
            <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500 mb-12 max-w-4xl mx-auto">
              <p className="text-lg font-semibold text-orange-900 mb-2">Survey Question:</p>
              <p className="text-gray-700 italic">"If you happened to see a drone flying close to where you live, which of these emotions, if any, would you feel?"</p>
            </div>

            {/* Emotional Reactions Breakdown */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Emotional Response Distribution
              </h3>

              <div className="space-y-6 mb-8">
                {/* Curious - 58% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Eye className="w-6 h-6 text-orange-600 mr-3" />
                      <span className="font-semibold text-gray-900 text-lg">Curious</span>
                    </div>
                    <span className="text-3xl font-bold text-orange-600">58%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-10">
                    <div
                      className="bg-orange-500 h-10 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-4"
                      style={{ width: '58%' }}
                    >
                      <span className="text-white font-semibold">Majority response</span>
                    </div>
                  </div>
                </div>

                {/* Interested - 45% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Heart className="w-6 h-6 text-green-600 mr-3" />
                      <span className="font-semibold text-gray-900 text-lg">Interested</span>
                    </div>
                    <span className="text-3xl font-bold text-green-600">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-10">
                    <div
                      className="bg-green-500 h-10 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '45%' }}
                    ></div>
                  </div>
                </div>

                {/* Nervous - 26% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3" />
                      <span className="font-semibold text-gray-900 text-lg">Nervous</span>
                    </div>
                    <span className="text-3xl font-bold text-yellow-600">26%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-10">
                    <div
                      className="bg-yellow-500 h-10 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '26%' }}
                    ></div>
                  </div>
                </div>

                {/* Indifferent - 18% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Meh className="w-6 h-6 text-gray-600 mr-3" />
                      <span className="font-semibold text-gray-900 text-lg">Indifferent</span>
                    </div>
                    <span className="text-3xl font-bold text-gray-600">18%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-10">
                    <div
                      className="bg-gray-500 h-10 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '18%' }}
                    ></div>
                  </div>
                </div>

                {/* Excited - 15% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Zap className="w-6 h-6 text-orange-600 mr-3" />
                      <span className="font-semibold text-gray-900 text-lg">Excited</span>
                    </div>
                    <span className="text-3xl font-bold text-orange-600">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-10">
                    <div
                      className="bg-orange-500 h-10 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '15%' }}
                    ></div>
                  </div>
                </div>

                {/* Angry - 12% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Frown className="w-6 h-6 text-red-600 mr-3" />
                      <span className="font-semibold text-gray-900 text-lg">Angry</span>
                    </div>
                    <span className="text-3xl font-bold text-red-600">12%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-10">
                    <div
                      className="bg-red-500 h-10 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '12%' }}
                    ></div>
                  </div>
                </div>

                {/* Scared - 11% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
                      <span className="font-semibold text-gray-900 text-lg">Scared</span>
                    </div>
                    <span className="text-3xl font-bold text-orange-600">11%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-10">
                    <div
                      className="bg-orange-500 h-10 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '11%' }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Summary Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-300">Emotion</th>
                      <th className="text-center p-4 font-bold text-gray-900 border-b-2 border-gray-300">Percentage</th>
                      <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-300">Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-orange-50">
                      <td className="p-4 text-gray-900 font-semibold">Curious</td>
                      <td className="p-4 text-center font-bold text-orange-600 text-xl">58%</td>
                      <td className="p-4 text-gray-700">Positive/Neutral</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 text-gray-900">Interested</td>
                      <td className="p-4 text-center font-semibold text-green-600 text-xl">45%</td>
                      <td className="p-4 text-gray-700">Positive</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 text-gray-900">Nervous</td>
                      <td className="p-4 text-center font-semibold text-yellow-600 text-xl">26%</td>
                      <td className="p-4 text-gray-700">Negative</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 text-gray-900">Indifferent</td>
                      <td className="p-4 text-center font-semibold text-gray-600 text-xl">18%</td>
                      <td className="p-4 text-gray-700">Neutral</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 text-gray-900">Excited</td>
                      <td className="p-4 text-center font-semibold text-orange-600 text-xl">15%</td>
                      <td className="p-4 text-gray-700">Positive</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 text-gray-900">Angry</td>
                      <td className="p-4 text-center font-semibold text-red-600 text-xl">12%</td>
                      <td className="p-4 text-gray-700">Negative</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 text-gray-900">Scared</td>
                      <td className="p-4 text-center font-semibold text-orange-600 text-xl">11%</td>
                      <td className="p-4 text-gray-700">Negative</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sentiment Analysis */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-2 border-green-200 text-center">
                <Smile className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <p className="text-sm font-semibold text-green-800 uppercase mb-2">Positive Emotions</p>
                <p className="text-5xl font-bold text-green-900 mb-2">60%</p>
                <p className="text-gray-700">Curious, Interested, Excited</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 border-2 border-red-200 text-center">
                <Frown className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <p className="text-sm font-semibold text-red-800 uppercase mb-2">Negative Emotions</p>
                <p className="text-5xl font-bold text-red-900 mb-2">49%</p>
                <p className="text-gray-700">Nervous, Angry, Scared</p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border-2 border-gray-200 text-center">
                <Meh className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-sm font-semibold text-gray-800 uppercase mb-2">Neutral</p>
                <p className="text-5xl font-bold text-gray-900 mb-2">18%</p>
                <p className="text-gray-700">Indifferent</p>
              </div>
            </div>

            {/* Analysis */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                  What This Means:
                </h4>
                <p className="text-gray-700 mb-3">
                  The data reveals that <strong>curiosity is the dominant emotion at 58%</strong>, with the majority of Americans viewing drones near their homes with interest rather than fear. When combined with "interested" (45%) and "excited" (15%), positive emotions significantly outweigh negative reactions, suggesting growing public acceptance of drone technology.
                </p>
                <p className="text-gray-700 mb-3">
                  However, <strong>49% of respondents express some form of negative emotion</strong>—nervous (26%), angry (12%), or scared (11%)—indicating that privacy concerns and safety apprehensions remain significant barriers to universal public acceptance. This split sentiment highlights the importance of responsible drone operation and clear privacy protections.
                </p>
                <p className="text-gray-700">
                  Only <strong>18% feel indifferent</strong>, showing that drones are far from normalized technology in residential areas. The strong emotional responses—both positive and negative—suggest that most people view drones as noteworthy events requiring attention, whether from technological fascination or privacy concerns. This indicates the drone industry must continue prioritizing public education, transparent operations, and privacy safeguards to maintain and grow public trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support for Private Citizens Piloting Drones */}
        <section id="public-support" className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-4">
              Public Support for Drone Operations in Different Settings
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Survey data reveals varying levels of public acceptance for private citizens piloting drones in different locations, from strong opposition near homes to moderate support in public parks.
            </p>

            {/* Survey Question */}
            <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500 mb-12 max-w-4xl mx-auto">
              <p className="text-lg font-semibold text-orange-900 mb-2">Survey Question:</p>
              <p className="text-gray-700 italic">"Do you think that private citizens should or should not be allowed to fly drones in the following areas?"</p>
            </div>

            {/* Support by Location */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Public Support by Location Type
              </h3>

              <div className="space-y-6 mb-8">
                {/* Public Parks - 44% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Trees className="w-6 h-6 text-green-600 mr-3" />
                      <span className="font-semibold text-gray-900 text-lg">Public Parks</span>
                    </div>
                    <span className="text-3xl font-bold text-green-600">44%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-10">
                    <div
                      className="bg-green-500 h-10 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-4"
                      style={{ width: '44%' }}
                    >
                      <span className="text-white font-semibold">Highest support</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Nearly half of respondents support drone use in public parks</p>
                </div>

                {/* Beaches - 35% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <MapPin className="w-6 h-6 text-orange-600 mr-3" />
                      <span className="font-semibold text-gray-900 text-lg">Beaches</span>
                    </div>
                    <span className="text-3xl font-bold text-orange-600">35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-10">
                    <div
                      className="bg-orange-500 h-10 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '35%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Moderate support for beach drone operations</p>
                </div>

                {/* Events - 24% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Music className="w-6 h-6 text-orange-600 mr-3" />
                      <span className="font-semibold text-gray-900 text-lg">Events (Concerts, Rallies)</span>
                    </div>
                    <span className="text-3xl font-bold text-orange-600">24%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-10">
                    <div
                      className="bg-orange-500 h-10 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '24%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Limited support for drones at public events</p>
                </div>

                {/* Crime Scenes/Accidents - 20% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
                      <span className="font-semibold text-gray-900 text-lg">Crime Scenes or Traffic Accidents</span>
                    </div>
                    <span className="text-3xl font-bold text-orange-600">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-10">
                    <div
                      className="bg-orange-500 h-10 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '20%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Strong opposition to drones near emergency scenes</p>
                </div>

                {/* Near Homes - 11% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Home className="w-6 h-6 text-red-600 mr-3" />
                      <span className="font-semibold text-gray-900 text-lg">Near People's Homes</span>
                    </div>
                    <span className="text-3xl font-bold text-red-600">11%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-10">
                    <div
                      className="bg-red-500 h-10 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '11%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Overwhelming opposition - lowest support level</p>
                </div>
              </div>

              {/* Summary Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-300">Location Type</th>
                      <th className="text-center p-4 font-bold text-gray-900 border-b-2 border-gray-300">Support Level</th>
                      <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-300">Public Sentiment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-green-50">
                      <td className="p-4 text-gray-900 font-semibold">Public Parks</td>
                      <td className="p-4 text-center font-bold text-green-600 text-xl">44%</td>
                      <td className="p-4 text-gray-700">Moderate Support</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 text-gray-900">Beaches</td>
                      <td className="p-4 text-center font-semibold text-orange-600 text-xl">35%</td>
                      <td className="p-4 text-gray-700">Mixed Support</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 text-gray-900">Events (Concerts, Rallies)</td>
                      <td className="p-4 text-center font-semibold text-orange-600 text-xl">24%</td>
                      <td className="p-4 text-gray-700">Low Support</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 text-gray-900">Crime Scenes or Traffic Accidents</td>
                      <td className="p-4 text-center font-semibold text-orange-600 text-xl">20%</td>
                      <td className="p-4 text-gray-700">Strong Opposition</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-red-50">
                      <td className="p-4 text-gray-900 font-semibold">Near People's Homes</td>
                      <td className="p-4 text-center font-bold text-red-600 text-xl">11%</td>
                      <td className="p-4 text-gray-700">Overwhelming Opposition</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Support Categories */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-2 border-green-200">
                <Trees className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <p className="text-sm font-semibold text-green-800 uppercase mb-2 text-center">Moderate Support</p>
                <p className="text-5xl font-bold text-green-900 mb-2 text-center">44%</p>
                <p className="text-gray-700 text-center">Public Parks</p>
                <p className="text-sm text-gray-600 mt-3 text-center">Open spaces perceived as less intrusive</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border-2 border-orange-200">
                <AlertTriangle className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <p className="text-sm font-semibold text-orange-800 uppercase mb-2 text-center">Low Support</p>
                <p className="text-5xl font-bold text-orange-900 mb-2 text-center">20-24%</p>
                <p className="text-gray-700 text-center">Events & Emergency Scenes</p>
                <p className="text-sm text-gray-600 mt-3 text-center">Safety and interference concerns</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 border-2 border-red-200">
                <Home className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <p className="text-sm font-semibold text-red-800 uppercase mb-2 text-center">Strong Opposition</p>
                <p className="text-5xl font-bold text-red-900 mb-2 text-center">11%</p>
                <p className="text-gray-700 text-center">Near Homes</p>
                <p className="text-sm text-gray-600 mt-3 text-center">Privacy concerns dominate</p>
              </div>
            </div>

            {/* Analysis */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                  What This Means:
                </h4>
                <p className="text-gray-700 mb-3">
                  The data reveals a clear <strong>privacy gradient in public acceptance</strong>, with support declining sharply as drone operations move closer to personal spaces. Public parks receive the highest support at 44%, likely because they're perceived as shared open spaces where privacy expectations are already reduced.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Only 11% support drone operations near people's homes</strong>, representing the lowest approval rating across all categories. This overwhelming opposition (89% against) underscores deep-seated privacy concerns when drones operate in residential areas. The stark contrast between 44% support in public parks versus 11% near homes demonstrates that Americans draw a bright line at residential boundaries.
                </p>
                <p className="text-gray-700 mb-3">
                  Support for drones at <strong>crime scenes and traffic accidents is limited to just 20%</strong>, reflecting concerns about interference with emergency response operations and the ethics of civilian surveillance during sensitive situations. Similarly, the 24% support for drones at concerts and rallies suggests public wariness about crowd surveillance and safety risks in densely populated events.
                </p>
                <p className="text-gray-700">
                  Beach operations fall in the middle at 35%, likely because beaches occupy a gray area between fully public spaces (like parks) and areas where people expect some privacy (like residential neighborhoods). These results indicate that <strong>drone operators and policymakers must carefully consider location-specific privacy expectations</strong> when developing regulations and operational guidelines. The drone industry faces an ongoing challenge to build public trust, particularly for operations in or near private spaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Drone Safety: Crashes, Incidents & Injuries */}
        <section id="safety" className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-4">
              Drone Safety: Crashes, Incidents &amp; Injuries
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Understanding drone-related incidents and injury patterns helps improve safety protocols and regulatory measures across the industry.
            </p>

            {/* Key Safety Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase">Total Injuries</p>
                  </div>
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-1">4,250</p>
                <p className="text-sm text-gray-600">Reported over 5 years (2020-2026)</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
                <div className="flex items-center mb-3">
                  <Users className="w-8 h-8 text-orange-500 mr-3" />
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase">Male Injuries</p>
                  </div>
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-1">84%</p>
                <p className="text-sm text-gray-600">Of all injured patients</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
                <div className="flex items-center mb-3">
                  <Activity className="w-8 h-8 text-orange-500 mr-3" />
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase">Multirotor Incidents</p>
                  </div>
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-1">70%+</p>
                <p className="text-sm text-gray-600">Of reported incidents</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
                <div className="flex items-center mb-3">
                  <Plane className="w-8 h-8 text-orange-500 mr-3" />
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase">Near Airports</p>
                  </div>
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-1">60%+</p>
                <p className="text-sm text-gray-600">Within 200ft of airport</p>
              </div>
            </div>

            {/* Injury Demographics */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-orange-600 mr-3" />
                Injury Demographics
              </h3>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Gender of Injured */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Gender Distribution of Injuries</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">Male</span>
                        <span className="text-xl font-bold text-orange-600">84%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-6">
                        <div
                          className="bg-orange-500 h-6 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: '84%' }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">Female</span>
                        <span className="text-xl font-bold text-pink-600">16%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-6">
                        <div
                          className="bg-pink-500 h-6 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: '16%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Age Under 18 */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Age Distribution</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">Under 18 Years Old</span>
                        <span className="text-xl font-bold text-orange-600">21%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-6">
                        <div
                          className="bg-orange-500 h-6 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: '21%' }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">18 Years and Older</span>
                        <span className="text-xl font-bold text-green-600">79%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-6">
                        <div
                          className="bg-green-500 h-6 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: '79%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                  What This Means:
                </h4>
                <p className="text-gray-700 mb-3">
                  The data shows that <strong>84% of drone injuries occur in males</strong>, reflecting the gender imbalance in drone ownership (96% male). This correlation suggests that injury rates align closely with participation rates.
                </p>
                <p className="text-gray-700">
                  Notably, <strong>21% of injuries occur in individuals under 18</strong>, highlighting the importance of proper supervision, training, and safety education for young drone operators. Parents and guardians should ensure minors understand drone safety protocols before operation.
                </p>
              </div>
            </div>

            {/* Common Injuries */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Most Common Injury Types
              </h3>

              <div className="space-y-4 mb-8">
                {/* Lacerations - 72% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                      <span className="font-semibold text-gray-900">Lacerations (cuts/wounds)</span>
                    </div>
                    <span className="text-2xl font-bold text-red-600">72%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8">
                    <div
                      className="bg-red-500 h-8 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '72%' }}
                    ></div>
                  </div>
                </div>

                {/* Contusions/Abrasions - 10% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                      <span className="font-semibold text-gray-900">Contusions/Abrasions (bruises/scrapes)</span>
                    </div>
                    <span className="text-2xl font-bold text-orange-600">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8">
                    <div
                      className="bg-orange-500 h-8 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '10%' }}
                    ></div>
                  </div>
                </div>

                {/* Other - 18% */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                      <span className="font-semibold text-gray-900">Other injuries</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-600">18%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8">
                    <div
                      className="bg-gray-500 h-8 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '18%' }}
                    ></div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-12">
                Most Commonly Injured Body Parts
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Body Part Stats */}
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-900 text-lg">Fingers</p>
                        <p className="text-sm text-gray-600">Most vulnerable body part</p>
                      </div>
                      <p className="text-3xl font-bold text-red-600">56%</p>
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-900 text-lg">Head</p>
                        <p className="text-sm text-gray-600">Second most common</p>
                      </div>
                      <p className="text-3xl font-bold text-orange-600">24%</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-900 text-lg">Lower Extremities</p>
                        <p className="text-sm text-gray-600">Legs, ankles, feet</p>
                      </div>
                      <p className="text-3xl font-bold text-orange-600">14%</p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-900 text-lg">Trunk</p>
                        <p className="text-sm text-gray-600">Chest and torso</p>
                      </div>
                      <p className="text-3xl font-bold text-green-600">6%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">What This Means:</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Lacerations account for 72% of all drone injuries</strong>, primarily caused by contact with rotating propeller blades. This underscores the danger of spinning rotors, which can cause deep cuts even on smaller consumer drones.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Fingers are the most injured body part at 56%</strong>, typically occurring when operators attempt to hand-catch drones, reach for falling aircraft, or work on drones without removing propellers first. This highlights the need for proper landing techniques and pre-flight safety checks.
                </p>
                <p className="text-gray-700">
                  <strong>Head injuries represent 24% of cases</strong>, often occurring when drones lose control and strike bystanders or when operators look up at descending aircraft. Always maintain safe distances and use proper safety equipment when operating larger drones.
                </p>
              </div>
            </div>

            {/* Aircraft Proximity Incidents */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Plane className="w-6 h-6 text-orange-600 mr-3" />
                Drone-Aircraft Close Encounters
              </h3>

              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-10 h-10 text-red-600 mr-4" />
                  <div>
                    <p className="text-2xl font-bold text-red-900 mb-1">60%+ occur within 200 feet of airports</p>
                    <p className="text-gray-700">Critical safety concern for aviation</p>
                  </div>
                </div>
              </div>

              <h4 className="font-semibold text-gray-900 mb-6">Aircraft Types Involved in Incidents</h4>

              <div className="space-y-4 mb-8">
                {/* Single-engine prop - 125 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Plane className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="font-semibold text-gray-900">Single-Engine Prop Aircraft</span>
                    </div>
                    <span className="text-xl font-bold text-orange-600">125 cases</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-orange-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '44.8%' }}
                    ></div>
                  </div>
                </div>

                {/* Multi-engine jets - 116 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Plane className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="font-semibold text-gray-900">Multi-Engine Jets</span>
                    </div>
                    <span className="text-xl font-bold text-orange-600">116 cases</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-orange-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '41.6%' }}
                    ></div>
                  </div>
                </div>

                {/* Helicopters - 38 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Activity className="w-5 h-5 text-green-600 mr-3" />
                      <span className="font-semibold text-gray-900">Helicopters</span>
                    </div>
                    <span className="text-xl font-bold text-green-600">38 cases</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-green-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '13.6%' }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-300">Aircraft Type</th>
                      <th className="text-right p-4 font-bold text-gray-900 border-b-2 border-gray-300">Incidents</th>
                      <th className="text-right p-4 font-bold text-gray-900 border-b-2 border-gray-300">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-orange-50">
                      <td className="p-4 text-gray-900 font-semibold">Single-Engine Prop Aircraft</td>
                      <td className="p-4 text-right font-bold text-orange-600">125</td>
                      <td className="p-4 text-right text-gray-700">44.8%</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 text-gray-900">Multi-Engine Jets</td>
                      <td className="p-4 text-right font-semibold text-orange-600">116</td>
                      <td className="p-4 text-right text-gray-700">41.6%</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 text-gray-900">Helicopters</td>
                      <td className="p-4 text-right font-semibold text-green-600">38</td>
                      <td className="p-4 text-right text-gray-700">13.6%</td>
                    </tr>
                    <tr className="bg-gray-100 font-bold">
                      <td className="p-4 text-gray-900">Total Incidents</td>
                      <td className="p-4 text-right text-gray-900">279</td>
                      <td className="p-4 text-right text-gray-900">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                <h4 className="font-bold text-red-900 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                  Critical Safety Warning:
                </h4>
                <p className="text-gray-700 mb-3">
                  The fact that <strong>over 60% of drone-aircraft close encounters occur within 200 feet of airports</strong> represents a serious aviation safety concern. Airports have designated flight restriction zones (FRZs) specifically to prevent such incidents.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Single-engine prop aircraft and multi-engine jets</strong> account for 86.4% of all incidents combined, with single-engine props leading at 125 cases. These aircraft types are commonly used for training, private aviation, and commercial flights at smaller regional airports where unauthorized drone activity is most problematic.
                </p>
                <p className="text-gray-700 font-semibold">
                  Always check airspace restrictions before flying and never operate drones near airports without proper authorization from air traffic control and the FAA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental & Sustainability Impact */}
        <section id="environmental" className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-4">
              Environmental &amp; Sustainability Impact
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Drones are emerging as powerful tools in the fight against climate change, enabling conservation efforts, reducing emissions, and revolutionizing environmental monitoring at unprecedented scales.
            </p>

            {/* Key Environmental Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 rounded-full p-3 mr-4">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-800 uppercase tracking-wide">Emissions</p>
                  </div>
                </div>
                <p className="text-5xl font-bold text-green-900 mb-2">87%</p>
                <p className="text-gray-700">Carbon emissions reduction vs helicopter surveys <span className="text-sm text-gray-600">(2024)</span></p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full p-3 mr-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-orange-800 uppercase tracking-wide">Wildlife</p>
                  </div>
                </div>
                <p className="text-5xl font-bold text-orange-900 mb-2">2,400</p>
                <p className="text-gray-700">Endangered species tracked globally with drones <span className="text-sm text-gray-600">(2026)</span></p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full p-3 mr-4">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-orange-800 uppercase tracking-wide">Wildfire</p>
                  </div>
                </div>
                <p className="text-5xl font-bold text-orange-900 mb-2">14 min</p>
                <p className="text-gray-700">Faster fire detection than traditional methods <span className="text-sm text-gray-600">(2024)</span></p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full p-3 mr-4">
                    <Trees className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-orange-800 uppercase tracking-wide">Reforestation</p>
                  </div>
                </div>
                <p className="text-5xl font-bold text-orange-900 mb-2">100K</p>
                <p className="text-gray-700">Trees planted per day by seeding drones <span className="text-sm text-gray-600">(vs 1,500 by hand)</span></p>
              </div>
            </div>

            {/* Conservation Applications */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Conservation & Monitoring Applications</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="font-semibold text-gray-900">Ocean Plastic Pollution Mapped</span>
                    </div>
                    <span className="text-2xl font-bold text-orange-600">18,000 sq mi</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-orange-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Ocean cleanup projects using drone mapping technology (2024)</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Activity className="w-5 h-5 text-green-600 mr-3" />
                      <span className="font-semibold text-gray-900">Pesticide Use Reduction (Precision Agriculture)</span>
                    </div>
                    <span className="text-2xl font-bold text-green-600">30-40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-green-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '40%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Chemical reduction through targeted drone spraying vs broadcast methods (2026)</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="font-semibold text-gray-900">Cities with Air Quality Monitoring Drones</span>
                    </div>
                    <span className="text-2xl font-bold text-orange-600">340+</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-orange-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '60%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Worldwide deployment of atmospheric monitoring drones (2024 data)</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="font-semibold text-gray-900">Solar Panel Maintenance Cost Reduction</span>
                    </div>
                    <span className="text-2xl font-bold text-orange-600">52%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-orange-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '52%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Drone thermal imaging inspections vs manual solar panel checks (2026)</p>
                </div>
              </div>
            </div>

            {/* Reforestation Impact */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Trees className="w-6 h-6 text-green-600 mr-3" />
                Reforestation & Ecological Restoration
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border-l-4 border-green-500">
                  <p className="text-4xl font-bold text-green-900 mb-2">100,000 trees/day</p>
                  <p className="text-gray-700 mb-2">Reforestation drones can plant seeds at unprecedented speed</p>
                  <p className="text-sm text-gray-600">(vs 1,500 trees/day by hand)</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border-l-4 border-orange-500">
                  <p className="text-4xl font-bold text-orange-900 mb-2">2,400 species</p>
                  <p className="text-gray-700 mb-2">Endangered wildlife monitored globally with drone technology</p>
                  <p className="text-sm text-gray-600">(Conservation tracking, 2026)</p>
                </div>
              </div>
            </div>

            {/* What This Means */}
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h4 className="font-bold text-green-900 mb-3">What This Means:</h4>
              <p className="text-gray-700 mb-3">
                <strong>Drones are becoming indispensable tools in the fight against climate change.</strong> The <strong>87% reduction in carbon emissions</strong> compared to traditional helicopter surveys represents a massive environmental win—especially as monitoring needs increase globally. Every survey flight that can be converted to a drone saves literal tons of CO2.
              </p>
              <p className="text-gray-700 mb-3">
                The reforestation impact is staggering: drones can plant <strong>100,000 trees per day</strong> compared to just 1,500 by hand, making large-scale forest restoration economically viable for the first time. Similarly, <strong>30-40% pesticide reduction</strong> through precision agriculture means less chemical runoff polluting waterways and harming ecosystems.
              </p>
              <p className="text-gray-700 font-semibold">
                From tracking <strong>2,400 endangered species</strong> to detecting wildfires <strong>14 minutes faster</strong>, drones are multiplying the effectiveness of conservation efforts while making them more affordable. This technology isn't just efficient—it's helping save the planet.
              </p>
            </div>
          </div>
        </section>

        {/* Commercial Applications & Industry Use Cases */}
        <section id="commercial" className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-4">
              Commercial Drone Applications &amp; Industry Use Cases
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              From construction sites to film sets, drones are revolutionizing professional industries with unprecedented efficiency, safety, and cost savings.
            </p>

            {/* Key Industry Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full p-3 mr-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-orange-800 uppercase tracking-wide">Construction</p>
                  </div>
                </div>
                <p className="text-5xl font-bold text-orange-900 mb-2">67%</p>
                <p className="text-gray-700">Of construction companies use drones for site surveying <span className="text-sm text-gray-600">(2026)</span></p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 rounded-full p-3 mr-4">
                    <Trees className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-800 uppercase tracking-wide">Agriculture</p>
                  </div>
                </div>
                <p className="text-5xl font-bold text-green-900 mb-2">3.2M</p>
                <p className="text-gray-700">Acres of US farmland monitored by drones annually <span className="text-sm text-gray-600">(2024)</span></p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full p-3 mr-4">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-orange-800 uppercase tracking-wide">Real Estate</p>
                  </div>
                </div>
                <p className="text-5xl font-bold text-orange-900 mb-2">82%</p>
                <p className="text-gray-700">Of luxury listings ($1M+) include drone photography <span className="text-sm text-gray-600">(2026)</span></p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full p-3 mr-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-orange-800 uppercase tracking-wide">Film/Media</p>
                  </div>
                </div>
                <p className="text-5xl font-bold text-orange-900 mb-2">$840M</p>
                <p className="text-gray-700">Annual revenue from drone services <span className="text-sm text-gray-600">(2024)</span></p>
              </div>
            </div>

            {/* Efficiency & Cost Savings */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Efficiency Gains & Cost Reductions</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Activity className="w-5 h-5 text-red-600 mr-3" />
                      <span className="font-semibold text-gray-900">Emergency Response Time Reduction</span>
                    </div>
                    <span className="text-2xl font-bold text-red-600">37%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-red-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '37%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">When drones used for initial assessment (2024 data)</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Shield className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="font-semibold text-gray-900">Infrastructure Inspection Cost Savings</span>
                    </div>
                    <span className="text-2xl font-bold text-orange-600">55%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-orange-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '55%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Compared to traditional inspection methods (2026)</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-green-600 mr-3" />
                      <span className="font-semibold text-gray-900">Insurance Claim Processing Speed Increase</span>
                    </div>
                    <span className="text-2xl font-bold text-green-600">43%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-green-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '43%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">With drone damage assessments vs manual inspections (2024)</p>
                </div>
              </div>
            </div>

            {/* Industry Revenue Breakdown */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Commercial Drone Services by Industry</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border-l-4 border-orange-500">
                  <div className="flex items-center mb-3">
                    <BarChart3 className="w-6 h-6 text-orange-600 mr-2" />
                    <p className="font-bold text-orange-900">Construction</p>
                  </div>
                  <p className="text-3xl font-bold text-orange-900 mb-2">67%</p>
                  <p className="text-sm text-gray-700">Companies using drones for site surveying and progress monitoring</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border-l-4 border-green-500">
                  <div className="flex items-center mb-3">
                    <Trees className="w-6 h-6 text-green-600 mr-2" />
                    <p className="font-bold text-green-900">Agriculture</p>
                  </div>
                  <p className="text-3xl font-bold text-green-900 mb-2">3.2M</p>
                  <p className="text-sm text-gray-700">Acres of farmland covered by agricultural drone monitoring</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border-l-4 border-orange-500">
                  <div className="flex items-center mb-3">
                    <Home className="w-6 h-6 text-orange-600 mr-2" />
                    <p className="font-bold text-orange-900">Real Estate</p>
                  </div>
                  <p className="text-3xl font-bold text-orange-900 mb-2">82%</p>
                  <p className="text-sm text-gray-700">Of high-end property listings include drone photography</p>
                </div>
              </div>
            </div>

            {/* What This Means */}
            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-900 mb-3">What This Means:</h4>
              <p className="text-gray-700 mb-3">
                <strong>Drones have moved from novelty to necessity across major industries.</strong> With 67% of construction companies now relying on drones for site surveying, the technology has achieved mainstream adoption in one of the world's largest sectors. The <strong>55% cost reduction in infrastructure inspections</strong> demonstrates clear ROI that's impossible to ignore.
              </p>
              <p className="text-gray-700 mb-3">
                The impact on emergency services is particularly dramatic—<strong>37% faster response times</strong> when drones provide initial situational awareness can be the difference between life and death. Similarly, <strong>43% faster insurance claim processing</strong> means customers get help when they need it most.
              </p>
              <p className="text-gray-700 font-semibold">
                With <strong>$840 million in annual film and media revenue</strong> and <strong>3.2 million acres of agricultural monitoring</strong>, commercial drones have created entirely new service categories while making traditional industries more efficient, safer, and more profitable.
              </p>
            </div>
          </div>
        </section>

        {/* Drone Delivery & Urban Air Mobility */}
        <section id="delivery" className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-4">
              Drone Delivery &amp; Urban Air Mobility
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              The future of logistics and urban transportation is taking flight with autonomous delivery drones and air taxi services transforming how we move goods and people.
            </p>

            {/* Key Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full p-3 mr-4">
                    <Plane className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-orange-800 uppercase tracking-wide">Amazon Deliveries</p>
                  </div>
                </div>
                <p className="text-5xl font-bold text-orange-900 mb-2">5,000+</p>
                <p className="text-gray-700">Customer deliveries completed in test markets <span className="text-sm text-gray-600">(2024)</span></p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 rounded-full p-3 mr-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-800 uppercase tracking-wide">Delivery Time</p>
                  </div>
                </div>
                <p className="text-5xl font-bold text-green-900 mb-2">12 min</p>
                <p className="text-gray-700">Average delivery time <span className="text-gray-600">(vs 45 min traditional)</span></p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full p-3 mr-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-orange-800 uppercase tracking-wide">Lives Saved</p>
                  </div>
                </div>
                <p className="text-5xl font-bold text-orange-900 mb-2">340</p>
                <p className="text-gray-700">Medical deliveries saved lives in rural areas <span className="text-sm text-gray-600">(2024 est.)</span></p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full p-3 mr-4">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-orange-800 uppercase tracking-wide">Walmart Coverage</p>
                  </div>
                </div>
                <p className="text-5xl font-bold text-orange-900 mb-2">4.5M</p>
                <p className="text-gray-700">Households with drone delivery access <span className="text-sm text-gray-600">(2026)</span></p>
              </div>
            </div>

            {/* Consumer Acceptance */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Consumer Acceptance & Adoption</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-green-600 mr-3" />
                      <span className="font-semibold text-gray-900">Willing to Use Drone Delivery (packages under 5 lbs)</span>
                    </div>
                    <span className="text-2xl font-bold text-green-600">68%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-green-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '68%' }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="font-semibold text-gray-900">Pizza Delivery On-Time Rate</span>
                    </div>
                    <span className="text-2xl font-bold text-orange-600">98.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-orange-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '98.2%' }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="font-semibold text-gray-900">Cost Reduction vs Traditional Last-Mile Delivery</span>
                    </div>
                    <span className="text-2xl font-bold text-orange-600">83%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-orange-500 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '83%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Future of Urban Air Mobility */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Plane className="w-6 h-6 text-orange-600 mr-3" />
                Urban Air Taxis & Passenger Drones
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border-l-4 border-orange-500">
                  <p className="text-4xl font-bold text-orange-900 mb-2">23 Cities</p>
                  <p className="text-gray-700 mb-2">Expected to launch urban air taxi services by 2027</p>
                  <p className="text-sm text-gray-600">(2026 projections)</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border-l-4 border-green-500">
                  <p className="text-4xl font-bold text-green-900 mb-2">128,000</p>
                  <p className="text-gray-700 mb-2">Package delivery test flights completed in trial programs</p>
                  <p className="text-sm text-gray-600">(2024 data)</p>
                </div>
              </div>
            </div>

            {/* What This Means */}
            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-900 mb-3">What This Means:</h4>
              <p className="text-gray-700 mb-3">
                <strong>Drone delivery is transitioning from experimental to mainstream.</strong> Amazon's 5,000+ completed deliveries and Walmart's expansion to 4.5 million households demonstrate that commercial viability has arrived. With 68% of consumers willing to use drone delivery for small packages, the market demand is clear.
              </p>
              <p className="text-gray-700 mb-3">
                The <strong>12-minute average delivery time</strong> represents a revolutionary improvement over traditional 45-minute deliveries, while being <strong>83% more cost-effective</strong> for companies. This economic advantage will accelerate adoption across retail, food service, and e-commerce sectors.
              </p>
              <p className="text-gray-700 font-semibold">
                Most importantly, medical drone deliveries have already <strong>saved an estimated 340 lives</strong> by rapidly transporting blood, organs, and emergency medications to rural areas—proving that drone technology isn't just about convenience, it's about saving lives.
              </p>
            </div>
          </div>
        </section>

        {/* Drone Service Statistics */}
        <section id="service-statistics" className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-4">
              Drone Service Statistics &amp; Industry Performance
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Discover how drone services are revolutionizing UK industries with faster turnaround times, superior accuracy, and significant cost savings across professional applications.
            </p>

            {/* Featured Service Cards - Top 3 */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Drone Roof Inspection */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full p-3 mr-4">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-orange-800 uppercase tracking-wide">Roof Inspections</p>
                  </div>
                </div>
                <p className="text-5xl font-bold text-orange-900 mb-2">95%</p>
                <p className="text-gray-700 font-semibold mb-4">Faster Than Traditional Methods</p>
                <p className="text-gray-700 text-sm">
                  Drone roof inspections eliminate scaffolding needs and complete property surveys in hours instead of days. Our <a href="https://hiredronepilot.uk/services/drone-roof-inspection" className="text-orange-600 hover:text-orange-700 underline" rel="dofollow">drone roof inspection services</a> provide thermal imaging and 4K documentation at 40-60% lower cost while maintaining full compliance with <a href="https://hiredronepilot.uk/blog" className="text-orange-600 hover:text-orange-700 underline" rel="dofollow">UK drone laws</a>.
                </p>
              </div>

              {/* Drone LiDAR Mapping */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full p-3 mr-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-orange-800 uppercase tracking-wide">LiDAR Mapping</p>
                  </div>
                </div>
                <p className="text-5xl font-bold text-orange-900 mb-2">1-5cm</p>
                <p className="text-gray-700 font-semibold mb-4">Survey-Grade Accuracy</p>
                <p className="text-gray-700 text-sm">
                  Advanced LiDAR technology delivers survey-grade precision for topographic mapping, construction planning, and infrastructure monitoring. <a href="https://hiredronepilot.uk/services/drone-lidar-mapping" className="text-orange-600 hover:text-orange-700 underline" rel="dofollow">Drone LiDAR mapping</a> and <a href="https://hiredronepilot.uk/services" className="text-orange-600 hover:text-orange-700 underline" rel="dofollow">drone surveys</a> reduce project timelines by 70% while providing detailed 3D terrain models and volumetric analysis.
                </p>
              </div>

              {/* Drone Solar Survey */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 rounded-full p-3 mr-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-800 uppercase tracking-wide">Solar Panel Surveys</p>
                  </div>
                </div>
                <p className="text-5xl font-bold text-green-900 mb-2">99%</p>
                <p className="text-gray-700 font-semibold mb-4">Panel Coverage Per Flight</p>
                <p className="text-gray-700 text-sm">
                  Thermal imaging technology detects faulty panels, hotspots, and connection issues across entire solar farms in single flights. <a href="https://hiredronepilot.uk/services/drone-solar-survey" className="text-green-600 hover:text-green-700 underline" rel="dofollow">Drone solar surveys</a> identify performance problems invisible to ground inspections, preventing energy losses and optimizing maintenance schedules for maximum ROI.
                </p>
              </div>
            </div>

            {/* Additional Services - Compact List */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Specialized Services</h3>

              <div className="space-y-6">
                {/* Drone Crop Spraying */}
                <div className="flex items-start border-l-4 border-orange-500 pl-6 py-2">
                  <Trees className="w-6 h-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Drone Crop Spraying <span className="text-orange-600">• 5x Faster Coverage • 30% Less Chemical Use</span>
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Precision agriculture with <a href="https://hiredronepilot.uk/services/drone-agricultural-survey" className="text-orange-600 hover:text-orange-700 underline" rel="dofollow">drone crop spraying</a> reduces operational costs and environmental impact while improving crop health through targeted application and reduced soil compaction.
                    </p>
                  </div>
                </div>

                {/* All Services */}
                <div className="flex items-start border-l-4 border-gray-500 pl-6 py-2">
                  <Activity className="w-6 h-6 text-gray-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Complete Service Portfolio <span className="text-gray-600">• 15+ Specialized Applications</span>
                    </h4>
                    <p className="text-gray-700 text-sm">
                      From inspections to mapping, aerial photography to thermal imaging, explore our complete range of <a href="https://hiredronepilot.uk/services" className="text-gray-600 hover:text-gray-700 underline" rel="dofollow">drone services</a> tailored for UK businesses and industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* UK Market Context */}
            <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-orange-500">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <Globe className="w-6 h-6 text-orange-600 mr-3" />
                UK Drone Service Market Overview
              </h4>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    The UK has over <a href="https://hiredronepilot.uk/how-many-drone-pilots-uk" className="text-orange-600 hover:text-orange-700 underline font-semibold" rel="dofollow">10,000 certified drone pilots</a> operating commercially across diverse industries, from construction and agriculture to film production and emergency services.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    Finding the <a href="https://hiredronepilot.uk/blog/who-is-the-best-drone-pilot-in-the-uk" className="text-orange-600 hover:text-orange-700 underline font-semibold" rel="dofollow">best drone pilot in the UK</a> depends on specialization, certification level, and experience in your specific industry application.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    All commercial drone operations must follow strict <a href="https://hiredronepilot.uk/blog" className="text-orange-600 hover:text-orange-700 underline font-semibold" rel="dofollow">UK drone laws</a> including privacy regulations about <a href="https://hiredronepilot.uk/blog/neighbour-drone-over-garden-uk" className="text-orange-600 hover:text-orange-700 underline font-semibold" rel="dofollow">flying drones over gardens</a> and residential properties, ensuring safe and legal operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Journalists Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border-2 border-orange-200 shadow-lg">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-orange-900">📰 For Journalists & Media</h2>
              </div>

              <div className="space-y-4 text-gray-800">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong className="text-orange-900">Free to Quote & Cite:</strong> All statistics on this page are freely available for editorial use in news articles, reports, and media coverage.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong className="text-orange-900">Attribution:</strong> Please cite as "HireDronePilot.uk Drone Statistics 2026" or "Source: HireDronePilot.uk, 2026"
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong className="text-orange-900">Easy Citation:</strong> Click the <Copy className="w-4 h-4 inline text-orange-600" /> icon next to any key statistic above to copy pre-formatted citation text
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong className="text-orange-900">Last Updated:</strong> 7th October 2026
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong className="text-orange-900">Questions?</strong> We're happy to provide additional context, clarification, or data for your story. Contact us for press inquiries.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-orange-200">
                <p className="text-sm text-orange-800 flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  <strong>Data Verified:</strong>&nbsp;All statistics verified and fact-checked as of January 2026 from FAA, Statista, industry reports, and peer-reviewed research
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border-2 border-orange-200 shadow-lg">
              <div className="flex items-center mb-6">
                <BarChart3 className="w-8 h-8 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-orange-900">📊 Data Methodology</h2>
              </div>

              <div className="space-y-4 text-gray-800">
                <p className="text-lg mb-4">
                  This comprehensive report aggregates drone industry data from authoritative sources across government, commercial, and academic sectors to provide the most accurate and up-to-date statistics available.
                </p>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-orange-900 mb-4">Primary Data Sources:</h3>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-orange-900">Federal Aviation Administration (FAA):</strong>
                        <span className="text-gray-700"> Official drone registration databases, Part 107 waiver statistics, and enforcement data</span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-orange-900">Market Research Firms:</strong>
                        <span className="text-gray-700"> Industry analysis from Statista, Mordor Intelligence, Goldman Sachs, PwC, and eMarketer covering market size, revenue projections, and growth trends</span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-orange-900">Public Opinion Surveys:</strong>
                        <span className="text-gray-700"> Nationally representative surveys on drone perception, acceptance, and emotional reactions from research organizations</span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-orange-900">Safety & Incident Reports:</strong>
                        <span className="text-gray-700"> Drone injury statistics, aircraft encounter data, and safety incident reports from government and industry sources</span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-orange-900">Industry Publications:</strong>
                        <span className="text-gray-700"> Reports from DroneLife, DroneDeploy, and other specialized drone industry publications</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500 mt-6">
                  <h3 className="font-bold text-orange-900 mb-3">Data Quality Standards:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">All statistics are cross-referenced with multiple sources where possible</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Data represents the most recent available information as of January 2026</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Priority given to official government sources and peer-reviewed research</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Market projections and forecasts clearly identified as estimates</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600 italic mt-6">
                  Last verified: 7th October 2026. Statistics are regularly updated as new data becomes available from authoritative sources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section id="references" className="py-16 px-6 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Sources & References</h2>
            <p className="text-center text-gray-600 mb-8">
              Data compiled from industry-leading sources and research organizations
            </p>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="text-gray-700">Insider Business</div>
                <div className="text-gray-700">BusinessWire</div>
                <div className="text-gray-700">CBS</div>
                <div className="text-gray-700">Drone Deploy</div>
                <div className="text-gray-700">DroneLife</div>
                <div className="text-gray-700">eMarketer</div>
                <div className="text-gray-700">Fortune</div>
                <div className="text-gray-700">Goldman Sachs</div>
                <div className="text-gray-700">Jungleworks</div>
                <div className="text-gray-700">Mordor Intelligence</div>
                <div className="text-gray-700">Motley Fool</div>
                <div className="text-gray-700">PhillyByAir</div>
                <div className="text-gray-700">PR Newswire</div>
                <div className="text-gray-700">PwC</div>
                <div className="text-gray-700">USPS</div>
                <div className="text-gray-700">Statista</div>
                <div className="text-gray-700">TechRepublic</div>
                <div className="text-gray-700">The Guardian</div>
                <div className="text-gray-700">USA Today</div>
                <div className="text-gray-700">Wikipedia</div>
                <div className="text-gray-700">Wired</div>
              </div>
            </div>

            <p className="text-sm text-gray-500 text-center mt-6">
              All statistics are compiled from publicly available data and industry reports as of 2026. Information is provided for educational and informational purposes.
            </p>
          </div>
        </section>

        {/* Trusted Logos */}
        <section className="bg-white py-6">
          <div className="container">
            <ClientLogoMarquee />
          </div>
        </section>

        {/* Final CTA */}
        <section className="section bg-teal">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
                  Need Drone Support?
                </h2>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Compare Drone Pilot Quotes
                </h3>
                <p className="text-white/80 text-lg mb-6">
                  Post your project once and compare responses from independent drone pilots across the UK.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white">One form, multiple quotes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white">CAA-certified drone pilot network</span>
                  </div>
                </div>
              </div>
              <div>
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
