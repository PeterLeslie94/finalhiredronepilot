'use client'

import { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'

interface NavSection {
  id: string
  label: string
}

const sections: NavSection[] = [
  { id: 'registrations', label: 'Registrations' },
  { id: 'regulations', label: 'FAA Regulations' },
  { id: 'revenue', label: 'Revenue & Costs' },
  { id: 'public-reactions', label: 'Public Reactions' },
  { id: 'public-support', label: 'Public Support' },
  { id: 'safety', label: 'Safety & Incidents' },
  { id: 'environmental', label: 'Environmental' },
  { id: 'commercial', label: 'Commercial Uses' },
  { id: 'delivery', label: 'Delivery & Air Mobility' },
  { id: 'service-statistics', label: 'Service Statistics' },
  { id: 'references', label: 'Sources' },
]

export function JumpToNav() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -100
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center py-3">
          <span className="text-sm font-semibold text-gray-700 mr-4 flex-shrink-0 hidden md:block">
            Jump to:
          </span>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide flex-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeSection === section.id
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 ml-2 flex-shrink-0" />
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  )
}
