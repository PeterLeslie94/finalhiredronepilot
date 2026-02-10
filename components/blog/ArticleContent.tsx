'use client';

import Image from 'next/image';
import { Document } from '@contentful/rich-text-types';
import { RichTextBlock } from '@/data/blog';
import KeyTakeaways from './KeyTakeaways';
import { ContentfulRichText } from './ContentfulRichText';
import { generateSlug } from '@/lib/utils/slug';

interface ArticleContentProps {
  content?: RichTextBlock[];
  contentfulContent?: Document;
  keyTakeaways?: string[];
}

export default function ArticleContent({ content, contentfulContent, keyTakeaways }: ArticleContentProps) {
  // If we have Contentful rich text content, render it
  if (contentfulContent) {
    return (
      <div className="article-content">
        {/* KeyTakeaways will be injected before the first h2 by ContentfulRichText */}
        <ContentfulRichText content={contentfulContent} keyTakeaways={keyTakeaways} />
      </div>
    );
  }

  // Fallback to local RichTextBlock[] format
  if (!content || content.length === 0) {
    return null;
  }

  // Find the index of the first heading2 to insert Key Takeaways before it
  const firstH2Index = content.findIndex((block) => block.type === 'heading2');
  let keyTakeawaysRendered = false;

  return (
    <div className="article-content">
      {content.map((block, index) => {
        // Render Key Takeaways before the first h2
        const shouldRenderTakeaways =
          !keyTakeawaysRendered &&
          keyTakeaways &&
          keyTakeaways.length > 0 &&
          index === firstH2Index;

        if (shouldRenderTakeaways) {
          keyTakeawaysRendered = true;
        }

        const takeawaysElement = shouldRenderTakeaways ? (
          <KeyTakeaways key="takeaways" takeaways={keyTakeaways} />
        ) : null;

        switch (block.type) {
          case 'paragraph':
            return (
              <p
                key={index}
                className="text-text-primary leading-relaxed mb-6"
              >
                {block.content}
              </p>
            );

          case 'heading2':
            const h2Id = generateSlug(block.content || '');
            return (
              <div key={index}>
                {takeawaysElement}
                <h2
                  id={h2Id}
                  className="text-2xl md:text-3xl font-bold text-teal mt-12 mb-6 scroll-mt-24 first:mt-0"
                >
                  {block.content}
                </h2>
              </div>
            );

          case 'heading3':
            const h3Id = generateSlug(block.content || '');
            return (
              <h3
                key={index}
                id={h3Id}
                className="text-xl md:text-2xl font-bold text-teal-dark mt-8 mb-4 scroll-mt-24"
              >
                {block.content}
              </h3>
            );

          case 'image':
            return (
              <figure key={index} className="my-8">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src={block.src || ''}
                    alt={block.alt || ''}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                {block.caption && (
                  <figcaption className="text-center text-sm text-text-secondary mt-3 italic">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case 'bulletList':
            return (
              <ul key={index} className="space-y-3 my-6">
                {block.items?.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    {/* Gold bullet - 2px rounded circle */}
                    <span className="w-2 h-2 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-text-primary leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            );

          case 'numberedList':
            return (
              <ol key={index} className="space-y-3 my-6">
                {block.items?.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    {/* Teal numbered circle */}
                    <span className="w-6 h-6 bg-teal text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {itemIndex + 1}
                    </span>
                    <span className="text-text-primary leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>
            );

          case 'quote':
            return (
              <blockquote
                key={index}
                className="border-l-4 border-gold bg-background-alt pl-6 py-4 pr-6 rounded-r-xl my-8"
              >
                <p className="text-text-primary italic text-lg leading-relaxed">
                  {block.content}
                </p>
              </blockquote>
            );

          case 'codeBlock':
            return (
              <pre
                key={index}
                className="bg-teal-darker text-white/90 font-mono p-6 rounded-xl overflow-x-auto my-6"
              >
                <code className="text-sm leading-relaxed">
                  {block.content}
                </code>
              </pre>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
