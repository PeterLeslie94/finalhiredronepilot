'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronRight, X, Clock, Weight, Wind, Target, Radio, Scale } from 'lucide-react';
import type { Drone } from '@/data/equipment';

interface DroneCardProps {
  drone: Drone;
  isActive?: boolean;
  onExpand?: (expanded: boolean) => void;
}

export default function DroneCard({ drone, isActive = false, onExpand }: DroneCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Auto-close on scroll (with threshold)
  useEffect(() => {
    if (!isExpanded) return;

    const startScrollY = window.scrollY;
    const threshold = window.innerHeight * 0.1; // 10% of viewport

    const handleScroll = () => {
      const scrollDiff = Math.abs(window.scrollY - startScrollY);
      if (scrollDiff > threshold) {
        setIsExpanded(false);
        onExpand?.(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isExpanded, onExpand]);

  // Auto-close when card becomes inactive (carousel moved)
  useEffect(() => {
    if (!isActive && isExpanded) {
      setIsExpanded(false);
      onExpand?.(false);
    }
  }, [isActive, isExpanded, onExpand]);

  const handleExpand = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    onExpand?.(newState);
  };

  const specItems = [
    { icon: Clock, label: 'Flight Time', value: drone.specs.flightTime },
    { icon: Weight, label: 'Payload', value: drone.specs.maxPayload },
    { icon: Wind, label: 'Wind Resistance', value: drone.specs.windResistance },
    { icon: Target, label: 'Accuracy', value: drone.specs.accuracy },
    { icon: Radio, label: 'Range', value: drone.specs.range },
    { icon: Scale, label: 'Weight', value: drone.specs.weight },
  ];

  return (
    <div
      className={`
        relative pt-24 transition-all duration-500 ease-out
        ${isActive ? 'scale-100 opacity-100 z-10' : 'scale-[0.75] opacity-30 z-0'}
        ${isExpanded ? 'z-50' : ''}
      `}
    >
      {/* Floating Drone Image - hidden when expanded */}
      <div
        className={`
          absolute -top-12 left-1/2 -translate-x-1/2 w-[120%] z-40 pointer-events-none
          transition-all duration-500 ease-out
          aspect-[4/3]
          ${isExpanded ? 'hidden' : ''}
          ${isActive ? 'scale-105 -translate-y-2' : 'scale-95'}
        `}
      >
        <div className="relative w-full h-full drop-shadow-2xl">
          <Image
            src={drone.image}
            alt={drone.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 80vw, 400px"
          />
        </div>
      </div>

      {/* Card Body - Expands to 2-column layout */}
      <div
        className={`
          relative bg-gradient-to-b from-teal-dark to-teal
          border-2 rounded-2xl overflow-hidden
          transition-all duration-500 ease-out
          ${isActive ? 'border-gold shadow-2xl shadow-gold/20' : 'border-gold/30'}
          ${isExpanded ? 'w-[180%] -ml-[40%]' : 'w-full'}
        `}
      >
        <div className={`flex ${isExpanded ? 'flex-row' : 'flex-col'}`}>
          {/* Left Column - Main Card Content */}
          <div className={`${isExpanded ? 'w-1/2 border-r border-gold/20' : 'w-full'}`}>
            {/* Spacer for floating image (only when not expanded) */}
            {!isExpanded && <div className="h-28" />}

            {/* Inline drone image when expanded */}
            {isExpanded && (
              <div className="relative w-full h-32 mt-4">
                <Image
                  src={drone.image}
                  alt={drone.name}
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-5 pt-2">
              <h4 className="text-white font-bold text-xl mb-1 text-center">{drone.name}</h4>
              <p className="text-white/60 text-sm mb-5 text-center line-clamp-2">{drone.tagline}</p>

              {/* Quick Specs Preview - 2x2 grid when expanded */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white/10 rounded-lg p-2 text-center">
                  <Clock className="w-4 h-4 text-gold mx-auto mb-1" />
                  <span className="text-white text-xs font-medium">{drone.specs.flightTime}</span>
                </div>
                <div className="bg-white/10 rounded-lg p-2 text-center">
                  <Target className="w-4 h-4 text-gold mx-auto mb-1" />
                  <span className="text-white text-xs font-medium">{drone.specs.accuracy}</span>
                </div>
                {isExpanded && (
                  <>
                    <div className="bg-white/10 rounded-lg p-2 text-center">
                      <Weight className="w-4 h-4 text-gold mx-auto mb-1" />
                      <span className="text-white text-xs font-medium">{drone.specs.maxPayload}</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2 text-center">
                      <Radio className="w-4 h-4 text-gold mx-auto mb-1" />
                      <span className="text-white text-xs font-medium">{drone.specs.range}</span>
                    </div>
                  </>
                )}
              </div>

              {/* CTA Button - only when expanded */}
              {isExpanded && (
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
                  className="w-full flex items-center justify-center gap-2 py-2.5 mb-3 bg-gold text-teal-dark font-semibold text-sm rounded-lg hover:bg-gold/90 transition-colors"
                >
                  Compare Quotes
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}

              {/* Expand/Collapse Button */}
              <button
                onClick={handleExpand}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-gold font-semibold text-sm border border-gold/30 rounded-lg hover:bg-gold/10 transition-colors"
              >
                {isExpanded ? (
                  <>
                    Hide Specs
                    <X className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    View Full Specs
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column - Expanded Specs Panel */}
          {isExpanded && (
            <div className="w-1/2 p-5 animate-fade-in">
              {/* Full Specs Grid */}
              <div className="bg-white/10 rounded-xl p-4 mb-4">
                <h5 className="text-gold font-semibold text-sm mb-3">Technical Specifications</h5>
                <div className="space-y-2">
                  {specItems.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-white/60">
                        <spec.icon className="w-4 h-4 text-gold" />
                        <span>{spec.label}</span>
                      </div>
                      <span className="font-medium text-white">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For */}
              <div className="mb-4">
                <h5 className="text-gold font-semibold text-sm mb-2">Best For</h5>
                <ul className="space-y-1">
                  {drone.bestFor.map((use) => (
                    <li key={use} className="flex items-start gap-2 text-sm text-white/70">
                      <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {use}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              <div>
                <h5 className="text-gold font-semibold text-sm mb-2">Key Features</h5>
                <div className="flex flex-wrap gap-2">
                  {drone.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
