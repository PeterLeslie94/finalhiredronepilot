'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Document, Block, Text, BLOCKS } from '@contentful/rich-text-types';
import { RichTextBlock } from '@/data/blog';
import { generateSlug } from '@/lib/utils/slug';

interface TOCItem {
  id: string;
  text: string;
  level: 2 | 3;
}

interface MobileTableOfContentsProps {
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
      if (text) headings.push({ id: generateSlug(text), text, level: 2 });
    } else if (currentNode.nodeType === BLOCKS.HEADING_3) {
      const text = getTextFromContentfulNode(currentNode as Block);
      if (text) headings.push({ id: generateSlug(text), text, level: 3 });
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

export default function MobileTableOfContents({ content, contentfulContent }: MobileTableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const headings = contentfulContent
    ? extractContentfulHeadings(contentfulContent)
    : content
    ? extractLocalHeadings(content)
    : [];

  if (headings.length === 0) return null;

  const handleClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-bold text-xs uppercase tracking-wider text-gray-900"
      >
        <span>Contents</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <nav className="mt-3">
          <ul className="space-y-1">
            {headings.filter((h) => h.level === 2).map((heading, index) => (
              <li key={`${heading.id}-${index}`}>
                <button
                  onClick={() => handleClick(heading.id)}
                  className="block border-l-2 border-transparent text-[13px] text-gray-500 hover:text-gold hover:border-gold transition-colors text-left pl-3 py-1"
                >
                  {heading.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
