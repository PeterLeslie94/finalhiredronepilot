'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import { Author } from '@/data/blog';

interface AuthorCardProps {
  author: Author;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const headline = author.headline?.trim() || 'GVC-Licensed Commercial Drone Pilot';
  const bio = author.bio?.trim()
    || 'Founder of HireDronePilot, helping UK clients compare quotes from independent, vetted drone pilots.';
  const credentials = author.credentials?.length
    ? author.credentials
    : [
        'CAA Operational Authorisation',
        'GVC',
        'A2 CofC',
        'CAA Flyer ID (A1/A3)',
        'ARPAS-UK Member',
      ];

  return (
    <div>
      {/* Avatar */}
      <div className="flex justify-center mb-3">
        <Image
          src={author.image}
          alt={author.name}
          width={153}
          height={153}
          className="rounded-full border-4 border-gold"
        />
      </div>

      <p className="text-center text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
        Written By
      </p>

      {/* Name */}
      <h4 className="font-bold text-lg text-gray-900 text-center">{author.name}</h4>
      <p className="text-center text-sm font-semibold text-teal mt-1">{headline}</p>

      {/* Bio */}
      <p className="text-sm text-gray-600 leading-relaxed mt-2">{bio}</p>
      <a
        href="https://www.linkedin.com/in/peter-leslie-drones"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-[#0A66C2] px-3 py-2 text-sm font-semibold text-[#0A66C2] transition-colors hover:bg-[#0A66C2] hover:text-white"
      >
        Connect on LinkedIn
      </a>

      <div className="mt-4">
        <p className="text-xs font-semibold tracking-wide text-gray-500 mb-2">
          Peter Leslie&apos;s Licences
        </p>
        <ul className="border-y border-gray-100 divide-y divide-gray-100">
          {credentials.map((item) => (
            <li key={item} className="flex items-start gap-2 py-2 text-sm text-gray-700">
              <Check className="mt-0.5 h-3.5 w-3.5 text-emerald-500 shrink-0" strokeWidth={2.75} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="mt-4 border-gray-200" />
    </div>
  );
}
