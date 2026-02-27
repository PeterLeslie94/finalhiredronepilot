'use client';

import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS, Document, Block, Text } from '@contentful/rich-text-types';
import Image from 'next/image';
import Link from 'next/link';
import KeyTakeaways from './KeyTakeaways';
import React from 'react';
import { generateSlug } from '@/lib/utils/slug';
import { normalizeLegacyServicePath } from '@/lib/service-url-map';

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

function isValidUrl(url: string): boolean {
  if (!url) return false;
  const trimmedUrl = url.trim().toLowerCase();
  const safeProtocols = ['http:', 'https:', 'mailto:', 'tel:', '/'];
  if (trimmedUrl.startsWith('/') || trimmedUrl.startsWith('#')) return true;
  try {
    const parsed = new URL(url);
    return safeProtocols.some(proto => parsed.protocol === proto);
  } catch {
    const dangerousProtocols = ['javascript:', 'data:', 'vbscript:'];
    return !dangerousProtocols.some(proto => trimmedUrl.startsWith(proto));
  }
}

function isInternalUrl(url: string): boolean {
  if (!url) return false;
  const trimmed = url.trim();
  if (trimmed.startsWith('/') || trimmed.startsWith('#')) return true;
  try {
    const parsed = new URL(trimmed);
    return parsed.hostname === 'hiredronepilot.uk' || parsed.hostname === 'www.hiredronepilot.uk';
  } catch {
    return false;
  }
}

function toRelativePath(url: string): string {
  const trimmed = url.trim();
  if (trimmed.startsWith('/') || trimmed.startsWith('#')) return trimmed;
  try {
    const parsed = new URL(trimmed);
    return parsed.pathname + parsed.search + parsed.hash;
  } catch {
    return trimmed;
  }
}

function createRenderOptions(keyTakeaways?: string[]): Options {
  let hasRenderedTakeaways = false;

  const renderOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong className="font-semibold">{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
    [MARKS.CODE]: (text) => (
      <code className="bg-gray-800 text-gold-light px-2 py-1 rounded text-sm font-mono">
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.DOCUMENT]: (node, children) => <>{children}</>,
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-gray-700 mb-6 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-3xl font-bold text-gray-900 mt-10 mb-4">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => {
      const headingText = getTextFromNode(node as Block);
      const headingId = generateSlug(headingText);
      if (!hasRenderedTakeaways && keyTakeaways && keyTakeaways.length > 0) {
        hasRenderedTakeaways = true;
        return (
          <>
            <KeyTakeaways takeaways={keyTakeaways} />
            <h2 id={headingId} className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24">{children}</h2>
          </>
        );
      }
      return <h2 id={headingId} className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      const headingText = getTextFromNode(node as Block);
      const headingId = generateSlug(headingText);
      return <h3 id={headingId} className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="text-base font-semibold text-gray-900 mt-4 mb-2">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="text-sm font-semibold text-gray-900 mt-4 mb-2">{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-gray-700">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-gray-700">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => <li className="leading-relaxed">{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="relative border-l-4 border-gold bg-gray-50 rounded-r-lg pl-10 pr-6 py-5 my-8 text-gray-600 italic">
        <svg className="absolute left-3 top-4 w-5 h-5 text-gold/40" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
        </svg>
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => (
      <div className="my-10 flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-200" />
        <div className="w-2 h-2 rounded-full bg-gold/40" />
        <div className="flex-1 h-px bg-gray-200" />
      </div>
    ),
    [BLOCKS.TABLE]: (node, children) => (
      <div className="overflow-x-auto my-8 rounded-lg border border-gray-200">
        <table className="min-w-full border-collapse">
          <tbody>{children}</tbody>
        </table>
      </div>
    ),
    [BLOCKS.TABLE_ROW]: (node, children) => (
      <tr className="border-b border-gray-100 even:bg-gray-50">{children}</tr>
    ),
    [BLOCKS.TABLE_CELL]: (node, children) => (
      <td className="px-5 py-3 text-sm text-gray-700 align-top">{children}</td>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
      <th className="px-5 py-3 text-sm font-bold text-left bg-teal text-white">{children}</th>
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
        </figure>
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: () => {
      return null;
    },
    [INLINES.HYPERLINK]: (node, children) => {
      const uri = node.data.uri;
      if (!isValidUrl(uri)) {
        return <span className="text-gray-700">{children}</span>;
      }
      if (isInternalUrl(uri)) {
        const href = normalizeLegacyServicePath(toRelativePath(uri));
        return (
          <Link
            href={href}
            className="text-gold hover:underline underline-offset-2 transition-colors"
          >
            {children}
          </Link>
        );
      }
      return (
        <a
          href={uri}
          className="text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (_node, children) => {
      return <span className="text-gray-700">{children}</span>;
    },
    [INLINES.ASSET_HYPERLINK]: (node, children) => {
      const { file } = node.data.target.fields;
      if (!file || !file.url) return <span>{children}</span>;

      const assetUrl = `https:${file.url}`;
      if (!isValidUrl(assetUrl)) {
        return <span>{children}</span>;
      }

      return (
        <a
          href={assetUrl}
          className="text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors"
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
