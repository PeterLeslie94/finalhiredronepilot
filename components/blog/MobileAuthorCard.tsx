import Image from 'next/image';
import { Check, Linkedin } from 'lucide-react';
import { Author } from '@/data/blog';

interface MobileAuthorCardProps {
  author: Author;
}

const LINKEDIN_URL = 'https://www.linkedin.com/in/peter-leslie-drones';

export default function MobileAuthorCard({ author }: MobileAuthorCardProps) {
  const headline = author.headline?.trim() || 'GVC-Licensed Commercial Drone Pilot';
  const baseBio = author.bio?.trim()
    || 'Founder of HireDronePilot, helping UK clients compare quotes from independent drone pilots through a single streamlined platform.';
  const hasCertificationMention = /(GVC|A2\s*CofC|Flyer ID|ARPAS-UK|Operational Authorisation)/i.test(baseBio);
  const bio = hasCertificationMention
    ? baseBio
    : `${baseBio} Peter is a licensed UK drone pilot, holding CAA Operational Authorisation (GVC), A2 CofC, CAA Flyer ID (A1/A3), and ARPAS-UK membership.`;

  return (
    <div className="lg:hidden bg-white">
      <div className="container pt-4 pb-3">
        <div className="relative mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="absolute left-0 top-0 h-full w-1.5 bg-gold" />
          <div className="px-4 py-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Written By
            </p>
            <div className="mt-2 flex items-start gap-3">
              <div className="relative shrink-0">
                <Image
                  src={author.image}
                  alt={author.name}
                  width={64}
                  height={64}
                  className="rounded-full border-2 border-white shadow-sm ring-1 ring-slate-200 object-cover"
                />
                <div className="absolute bottom-0 right-0 rounded-full border-2 border-white bg-gold p-0.5 text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </div>
              </div>
              <div className="min-w-0">
                <p className="text-lg font-bold leading-tight text-slate-900">{author.name}</p>
                <p className="mt-0.5 text-xs font-semibold leading-tight text-gold-hover">{headline}</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {bio}
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0A66C2] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#084d94] focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:ring-offset-2"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
