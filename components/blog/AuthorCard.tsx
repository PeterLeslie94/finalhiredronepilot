'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Author } from '@/data/blog';

interface AuthorCardProps {
  author: Author;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const trustChecks = [
    'CAA Operational Authorisation (GVC)',
    'A2 CofC Certified',
    'CAA Flyer ID (A1/A3)',
    'ARPAS-UK Member',
    'Founder, HireDronePilot (UK)',
  ];

  return (
    <div className="bg-white border-3 border-border rounded-xl p-6">
      {/* Written By Label */}
      <p className="text-center text-gold text-xs font-semibold uppercase tracking-wide mb-4">
        Written By
      </p>

      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <Image
          src={author.image}
          alt={author.name}
          width={128}
          height={128}
          className="rounded-full border-3 border-gold"
        />
      </div>

      {/* Name and Role */}
      <div className="text-center mb-4">
        <h4 className="text-xl font-bold text-teal">{author.name}</h4>
        <p className="text-text-secondary text-sm">{author.role}</p>
      </div>

      {/* Bio */}
      {author.bio && (
        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {author.bio}
        </p>
      )}

      <div className="mb-6 rounded-xl border border-border bg-background-alt p-4">
        <p className="text-gold text-xs font-semibold uppercase tracking-wide mb-3">
          Verified Credentials
        </p>
        <ul className="space-y-2">
          {trustChecks.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-gold flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Compare Quotes Button */}
      <Link href="/contact" className="btn btn-primary w-full text-center">
        Compare Quotes
      </Link>
    </div>
  );
}
