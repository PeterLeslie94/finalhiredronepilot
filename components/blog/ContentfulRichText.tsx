'use client';

import { documentToReactComponents, Options, RenderNode } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS, Document, Block, Text } from '@contentful/rich-text-types';
import Image from 'next/image';
import KeyTakeaways from './KeyTakeaways';
import React from 'react';
import { generateSlug } from '@/lib/utils/slug';

// Helper to extract plain text from a Contentful node for generating heading IDs
function getTextFromNode(node: Block): string {
  let text = '';
  if (node.content) {
    for (const child of node.content) {
      if (child.nodeType === 'text') {
        text += (child as Text).value;
      }
    }
  }
  return text;
}

// Security: Validate URLs to prevent XSS via javascript:, data:, or vbscript: protocols
function isValidUrl(url: string): boolean {
  if (!url) return false;
  const trimmedUrl = url.trim().toLowerCase();
  // Allow only safe protocols
  const safeProtocols = ['http:', 'https:', 'mailto:', 'tel:', '/'];
  // Check if URL starts with a safe protocol or is a relative path
  if (trimmedUrl.startsWith('/') || trimmedUrl.startsWith('#')) return true;
  try {
    const parsed = new URL(url);
    return safeProtocols.some(proto => parsed.protocol === proto);
  } catch {
    // If URL parsing fails, check for dangerous protocols directly
    const dangerousProtocols = ['javascript:', 'data:', 'vbscript:'];
    return !dangerousProtocols.some(proto => trimmedUrl.startsWith(proto));
  }
}

// Create render options factory that can inject keyTakeaways before first h2
function createRenderOptions(keyTakeaways?: string[]): Options {
  let hasRenderedTakeaways = false;

  const renderOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong className="font-semibold">{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
    [MARKS.CODE]: (text) => (
      <code className="bg-gray-100 text-teal-dark px-1.5 py-0.5 rounded text-sm font-mono">
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.DOCUMENT]: (node, children) => <>{children}</>,
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-primary mb-6 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-3xl font-bold text-teal mt-10 mb-4">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => {
      const headingText = getTextFromNode(node as Block);
      const headingId = generateSlug(headingText);
      // Inject keyTakeaways before the first h2
      if (!hasRenderedTakeaways && keyTakeaways && keyTakeaways.length > 0) {
        hasRenderedTakeaways = true;
        return (
          <>
            <KeyTakeaways takeaways={keyTakeaways} />
            <h2 id={headingId} className="text-2xl font-bold text-teal mt-10 mb-4 scroll-mt-24">{children}</h2>
          </>
        );
      }
      return <h2 id={headingId} className="text-2xl font-bold text-teal mt-10 mb-4 scroll-mt-24">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      const headingText = getTextFromNode(node as Block);
      const headingId = generateSlug(headingText);
      return <h3 id={headingId} className="text-xl font-semibold text-teal-dark mt-8 mb-3 scroll-mt-24">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="text-lg font-semibold text-teal-dark mt-6 mb-2">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="text-base font-semibold text-teal-dark mt-4 mb-2">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="text-sm font-semibold text-teal-dark mt-4 mb-2">{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-primary">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-primary">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => <li className="leading-relaxed">{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-gold pl-6 py-2 my-8 italic text-gray-700 bg-cream/30 rounded-r">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-10 border-t border-gray-200" />,
    [BLOCKS.TABLE]: (node, children) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-gray-200">{children}</table>
      </div>
    ),
    [BLOCKS.TABLE_ROW]: (node, children) => (
      <tr className="border-b border-gray-200">{children}</tr>
    ),
    [BLOCKS.TABLE_CELL]: (node, children) => (
      <td className="px-4 py-2 text-primary">{children}</td>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
      <th className="px-4 py-2 font-semibold text-left bg-cream text-teal-dark">{children}</th>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title, description } = node.data.target.fields;
      if (!file || !file.url) return null;

      const imageUrl = `https:${file.url}`;
      const altText = description || title || 'Blog image';

      return (
        <figure className="my-8">
          <Image
            src={imageUrl}
            alt={altText}
            width={800}
            height={450}
            className="rounded-lg w-full h-auto"
          />
          {title && (
            <figcaption className="text-sm text-gray-500 mt-2 text-center italic">
              {title}
            </figcaption>
          )}
        </figure>
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      // Handle embedded entries if needed
      return null;
    },
    [INLINES.HYPERLINK]: (node, children) => {
      const uri = node.data.uri;
      // Security: Validate URL before rendering
      if (!isValidUrl(uri)) {
        return <span className="text-teal">{children}</span>;
      }
      return (
        <a
          href={uri}
          className="text-teal hover:text-teal-dark underline transition-colors"
          target={uri.startsWith('http') ? '_blank' : undefined}
          rel={uri.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      // Handle entry links if needed
      return <span className="text-teal">{children}</span>;
    },
    [INLINES.ASSET_HYPERLINK]: (node, children) => {
      const { file } = node.data.target.fields;
      if (!file || !file.url) return <span>{children}</span>;

      const assetUrl = `https:${file.url}`;
      // Security: Validate asset URL before rendering
      if (!isValidUrl(assetUrl)) {
        return <span>{children}</span>;
      }

      return (
        <a
          href={assetUrl}
          className="text-teal hover:text-teal-dark underline transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
  },
};

  return renderOptions;
}

interface ContentfulRichTextProps {
  content: Document;
  keyTakeaways?: string[];
  className?: string;
}

export function ContentfulRichText({ content, keyTakeaways, className = '' }: ContentfulRichTextProps) {
  if (!content) return null;

  const renderOptions = createRenderOptions(keyTakeaways);

  return (
    <div className={`contentful-rich-text ${className}`}>
      {documentToReactComponents(content, renderOptions)}
    </div>
  );
}
