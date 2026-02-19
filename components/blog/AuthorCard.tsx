'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Author } from '@/data/blog';

interface AuthorCardProps {
  author: Author;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const credentials = [
    'CAA Operational Authorisation (GVC)',
    'A2 CofC Certified',
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

      {/* Bio */}
      {author.bio && (
        <p className="text-sm text-gray-600 leading-relaxed">
          {author.name} is the founder of HireDronePilot, helping UK clients compare quotes from
          independent drone pilots through one streamlined platform.
        </p>
      )}

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
          Certifications
        </p>
        <ul className="space-y-1.5">
          {credentials.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-3 mt-3">
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="X (Twitter)"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>

      <hr className="mt-4 border-gray-200" />
    </div>
  );
}
