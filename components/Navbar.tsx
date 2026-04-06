'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-['Bebas_Neue'] text-2xl text-[#f5f0e8] tracking-[0.2em] hover:text-[#c4a882] transition-colors duration-200"
        >
          PRIMAL SOURCE
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/products"
            className="text-[#f5f0e8]/70 hover:text-[#f5f0e8] text-xs tracking-[0.2em] uppercase transition-colors duration-200"
          >
            Shop
          </Link>
          <Link
            href="/philosophy"
            className="text-[#f5f0e8]/70 hover:text-[#f5f0e8] text-xs tracking-[0.2em] uppercase transition-colors duration-200"
          >
            Philosophy
          </Link>
        </div>
      </div>
    </nav>
  )
}
