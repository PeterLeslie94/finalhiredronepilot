'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CitationButtonProps {
  text: string
  source?: string
}

export function CitationButton({ text, source = "HireDronePilot.uk, 2026" }: CitationButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const citation = `"${text}" - Source: ${source}`

    try {
      await navigator.clipboard.writeText(citation)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="ml-2 inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
      title={copied ? "Copied!" : "Copy citation"}
      aria-label="Copy citation to clipboard"
    >
      {copied ? (
        <Check className="w-4 h-4" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  )
}
