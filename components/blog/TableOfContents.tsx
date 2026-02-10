'use client';

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

// Extract text from a Contentful block node
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

// Extract headings from Contentful Document
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

// Extract headings from local RichTextBlock content
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
  // Extract headings based on content type
  const headings = contentfulContent
    ? extractContentfulHeadings(contentfulContent)
    : content
    ? extractLocalHeadings(content)
    : [];

  // Don't render if no headings found
  if (headings.length === 0) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="bg-gradient-to-br from-teal to-teal-dark rounded-2xl p-6">
      {/* Header */}
      <p className="text-gold text-xs font-semibold uppercase tracking-wide mb-4">
        Jump to Section
      </p>

      {/* Links */}
      <nav>
        <ul className="space-y-2">
          {headings.map((heading, index) => (
            <li key={`${heading.id}-${index}`}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={`block text-white/80 hover:text-gold transition-colors ${
                  heading.level === 3 ? 'pl-4 text-sm' : 'font-medium'
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
