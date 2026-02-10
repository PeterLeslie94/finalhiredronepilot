'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DroneCard from './DroneCard';
import type { Drone } from '@/data/equipment';

interface DroneCarouselProps {
  drones: Drone[];
}

export default function DroneCarousel({ drones }: DroneCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback((index: number) => {
    // Handle wrapping
    let newIndex = index;
    if (newIndex < 0) newIndex = drones.length - 1;
    if (newIndex >= drones.length) newIndex = 0;
    setActiveIndex(newIndex);
  }, [drones.length]);

  const goNext = () => goToSlide(activeIndex + 1);
  const goPrev = () => goToSlide(activeIndex - 1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  // Touch/drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.pageX;
    const diff = startX - x;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].pageX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const x = e.touches[0].pageX;
    const diff = startX - x;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
      setStartX(x);
    }
  };

  // Calculate positions for 3D effect
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const absDiff = Math.abs(diff);

    // Handle wrapping for visual continuity
    let adjustedDiff = diff;
    if (diff > drones.length / 2) adjustedDiff = diff - drones.length;
    if (diff < -drones.length / 2) adjustedDiff = diff + drones.length;

    const absAdjusted = Math.abs(adjustedDiff);

    // Only show 3 cards at a time (center + 1 on each side)
    if (absAdjusted > 1) {
      return {
        transform: `translateX(${adjustedDiff * 100}%) scale(0.6)`,
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none' as const,
      };
    }

    const translateX = adjustedDiff * 85; // Percentage offset
    const scale = absAdjusted === 0 ? 1 : 0.75;
    const opacity = absAdjusted === 0 ? 1 : 0.5;
    const zIndex = 10 - absAdjusted;

    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity,
      zIndex,
      pointerEvents: absAdjusted === 0 ? 'auto' as const : 'none' as const,
    };
  };

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-gold text-teal-dark rounded-full flex items-center justify-center shadow-lg hover:bg-gold/90 transition-colors -ml-6"
        aria-label="Previous drone"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-gold text-teal-dark rounded-full flex items-center justify-center shadow-lg hover:bg-gold/90 transition-colors -mr-6"
        aria-label="Next drone"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative h-[580px] overflow-visible cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {/* Cards Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          {drones.map((drone, index) => (
            <div
              key={drone.id}
              className="absolute w-full max-w-sm px-4 transition-all duration-500 ease-out"
              style={getCardStyle(index)}
            >
              <DroneCard drone={drone} isActive={index === activeIndex} />
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {drones.map((drone, index) => (
          <button
            key={drone.id}
            onClick={() => goToSlide(index)}
            className={`
              h-2 rounded-full transition-all duration-300
              ${index === activeIndex
                ? 'w-8 bg-gold'
                : 'w-2 bg-white/30 hover:bg-white/50'
              }
            `}
            aria-label={`Go to ${drone.name}`}
          />
        ))}
      </div>

      {/* Current Drone Name Display */}
      <div className="text-center mt-4">
        <p className="text-white/40 text-sm">
          {activeIndex + 1} of {drones.length}
        </p>
      </div>
    </div>
  );
}
