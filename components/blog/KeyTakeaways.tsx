'use client';

import { Lightbulb } from 'lucide-react';

interface KeyTakeawaysProps {
  takeaways: string[];
}

export default function KeyTakeaways({ takeaways }: KeyTakeawaysProps) {
  if (!takeaways || takeaways.length === 0) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-br from-teal to-teal-dark rounded-2xl p-6 md:p-8 my-10 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
          <Lightbulb className="w-5 h-5 text-teal-dark" />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white">
          Key Takeaways
        </h2>
      </div>

      {/* Takeaways List */}
      <ul className="space-y-3">
        {takeaways.map((takeaway, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-gold text-sm font-bold">{index + 1}</span>
            </span>
            <span className="text-white/90 leading-relaxed">{takeaway}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
