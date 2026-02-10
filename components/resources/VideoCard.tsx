'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';
import { useState } from 'react';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
  youtubeId: string;
}

export default function VideoCard({
  title,
  description,
  thumbnail,
  duration,
  category,
  youtubeId,
}: VideoCardProps) {
  const [showVideo, setShowVideo] = useState(false);

  const categoryLabels: Record<string, string> = {
    tutorial: 'Tutorial',
    'case-study': 'Case Study',
    explainer: 'Explainer',
    equipment: 'Equipment',
  };

  const handleClick = () => {
    setShowVideo(true);
  };

  return (
    <article className="group relative bg-white border-3 border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-xl">
      {/* Thumbnail / Video */}
      <div className="relative aspect-video">
        {showVideo ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/80 to-transparent" />

            {/* Play Button */}
            <button
              onClick={handleClick}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              aria-label={`Play video: ${title}`}
            >
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Play className="w-8 h-8 text-teal-dark fill-teal-dark ml-1" />
              </div>
            </button>

            {/* Duration Badge */}
            <span className="absolute bottom-3 right-3 bg-black/70 text-white text-sm px-2 py-1 rounded">
              {duration}
            </span>

            {/* Category Badge */}
            <span className="absolute top-3 left-3 bg-gold text-teal-dark text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-full">
              {categoryLabels[category] || category}
            </span>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-teal mb-2 line-clamp-2 group-hover:text-teal-dark transition-colors">
          {title}
        </h3>
        <p className="text-text-secondary text-sm line-clamp-2">{description}</p>
      </div>
    </article>
  );
}
