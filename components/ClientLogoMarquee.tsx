'use client';

import Image from 'next/image';
import { clientLogos } from '@/data/clientLogos';

interface ClientLogoMarqueeProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function ClientLogoMarquee({ variant = 'light', className = '' }: ClientLogoMarqueeProps) {
  const bgClass = variant === 'light' ? 'bg-background-alt' : 'bg-teal-dark';
  const borderClass = variant === 'light' ? 'border-border' : 'border-white/10';
  const textClass = variant === 'light' ? 'text-text-secondary' : 'text-white/50';
  const gradientFrom = variant === 'light' ? 'from-background-alt' : 'from-teal-dark';
  const gradientTo = variant === 'light' ? 'to-transparent' : 'to-transparent';

  return (
    <section className={`py-6 ${bgClass} border-y ${borderClass} overflow-hidden ${className} relative`}>
      {/* Subtle white gradient in the middle to help logos blend */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.5) 35%, rgba(255,255,255,0.5) 65%, transparent 100%)'
        }}
      />
      <div className="container relative">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p className={`${textClass} text-sm font-medium whitespace-nowrap flex-shrink-0`}>
            Trusted by leading organisations:
          </p>

          <div className="relative flex-1 overflow-hidden max-w-full">
            <div className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r ${gradientFrom} ${gradientTo} z-10 pointer-events-none`} />
            <div className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l ${gradientFrom} ${gradientTo} z-10 pointer-events-none`} />

            <div className="flex animate-marquee w-max">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 px-6 flex items-center justify-center"
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={100}
                    height={40}
                    className="h-10 max-w-[120px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClientLogoMarqueeInline({ className = '' }: { className?: string }) {
  return (
    <div className={`relative bg-white rounded-lg py-4 px-2 overflow-hidden ${className}`}>
      <div className="flex animate-marquee gap-8 items-center">
        {[...clientLogos, ...clientLogos].map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={client.logo}
              alt={client.alt}
              width={80}
              height={32}
              className="h-8 max-w-[100px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
