'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NAV } from '@/lib/site'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="gradient-text">가디언넷</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {NAV.map((item) =>
              item.href === '/contact' ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden text-zinc-400"
            aria-label="메뉴 열기"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pt-4 pb-2 border-t border-zinc-800 mt-4">
            <div className="flex flex-col gap-4">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-zinc-400 hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
