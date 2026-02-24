'use client';

import { useEffect, useMemo, useState } from 'react';
import { Document, Block, Text, BLOCKS } from '@contentful/rich-text-types';
import { RichTextBlock } from '@/data/blog';
import { generateSlug } from '@/lib/utils/slug';

interface TOCItem {
  id: string;
  text: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  content?: RichTextBlock[];
  contentfulContent?: Document;
}

function getTextFromContentfulNode(node: Block): string {
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

function extractContentfulHeadings(doc: Document): TOCItem[] {
  const headings: TOCItem[] = [];

  function traverse(node: unknown) {
    if (!node || typeof node !== 'object') return;

    const currentNode = node as { nodeType?: string; content?: unknown[] };
    if (currentNode.nodeType === BLOCKS.HEADING_2) {
      const text = getTextFromContentfulNode(currentNode as Block);
      if (text) {
        headings.push({ id: generateSlug(text), text, level: 2 });
      }
    } else if (currentNode.nodeType === BLOCKS.HEADING_3) {
      const text = getTextFromContentfulNode(currentNode as Block);
      if (text) {
        headings.push({ id: generateSlug(text), text, level: 3 });
      }
    }

    if (currentNode.content && Array.isArray(currentNode.content)) {
      currentNode.content.forEach(traverse);
    }
  }

  traverse(doc);
  return headings;
}

function extractLocalHeadings(content: RichTextBlock[]): TOCItem[] {
  return content
    .filter((block) => block.type === 'heading2' || block.type === 'heading3')
    .map((block) => ({
      id: generateSlug(block.content || ''),
      text: block.content || '',
      level: block.type === 'heading2' ? 2 : 3,
    }));
}

export default function TableOfContents({ content, contentfulContent }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  const headings = useMemo(
    () =>
      contentfulContent
        ? extractContentfulHeadings(contentfulContent)
        : content
        ? extractLocalHeadings(content)
        : [],
    [content, contentfulContent]
  );

  // Scroll-spy: track which heading is in view
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  // When an H3 is in view, highlight its parent H2
  const activeH2Id = useMemo(() => {
    if (!activeId) return '';
    const idx = headings.findIndex((h) => h.id === activeId);
    if (idx === -1) return '';
    if (headings[idx].level === 2) return activeId;
    for (let i = idx - 1; i >= 0; i--) {
      if (headings[i].level === 2) return headings[i].id;
    }
    return '';
  }, [activeId, headings]);

  if (headings.length === 0) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav>
      <p className="mb-3 text-xs font-bold text-gray-900 uppercase tracking-wider">Contents</p>
      <ul className="space-y-1">
        {headings.filter((h) => h.level === 2).map((heading, index) => (
          <li key={`${heading.id}-${index}`}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`block border-l-2 py-1 pr-2 text-[13px] leading-snug transition-colors ${
                heading.level === 3 ? 'pl-5 text-[12px]' : 'pl-3'
              } ${
                activeH2Id === heading.id
                  ? 'border-gold text-gold font-semibold'
                  : 'border-transparent text-gray-500 hover:text-gold'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
