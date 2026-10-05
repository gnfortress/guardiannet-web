'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CaretDownIcon, ListIcon, XIcon, ArrowRightIcon } from '@phosphor-icons/react'
import { NAV } from '@/lib/site'
import { SOLUTIONS, TREND_SLUGS, TOPIC_SLUGS } from '@/lib/solutions'

const GROUPS = [
  { title: '트렌드마이크로 제품', slugs: TREND_SLUGS },
  { title: '환경·산업별', slugs: TOPIC_SLUGS },
]

// 메뉴에 보이는 짧은 이름
const MENU_NAME = {
  'deep-security': 'Deep Security',
  'vision-one': 'Vision One',
  'deep-discovery': 'Deep Discovery',
  tippingpoint: 'TippingPoint',
  cwpp: 'CWPP 클라우드 보안',
  isms: 'ISMS-P 서버 보안',
  financial: '금융권 서버 보안',
}

export default function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const closeTimer = useRef(null)

  // 페이지를 옮기면 메뉴를 닫는다
  useEffect(() => {
    setMobileOpen(false)
    setMenuOpen(false)
  }, [pathname])

  // 바깥 클릭·ESC 로 펼침 메뉴 닫기
  useEffect(() => {
    if (!menuOpen) return
    const onDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  // 모바일 메뉴가 열려 있으면 뒤 화면 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname?.startsWith(href))

  const openMenu = () => {
    clearTimeout(closeTimer.current)
    setMenuOpen(true)
  }
  const closeMenuSoon = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setMenuOpen(false), 120)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-[19px] font-bold tracking-[-0.02em] text-ink" aria-label="가디언넷 홈">
          <span className="inline-block size-2.5 rounded-[3px] bg-accent" aria-hidden="true" />
          가디언넷
        </Link>

        {/* 데스크톱 */}
        <nav aria-label="주 메뉴" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            if (item.menu) {
              return (
                <div
                  key={item.href}
                  ref={menuRef}
                  className="relative"
                  onMouseEnter={openMenu}
                  onMouseLeave={closeMenuSoon}
                >
                  <button
                    type="button"
                    aria-expanded={menuOpen}
                    aria-controls="solutions-menu"
                    onClick={() => setMenuOpen((v) => !v)}
                    className={`flex h-10 items-center gap-1 rounded-lg px-3.5 text-[15px] transition-colors hover:text-ink ${
                      isActive(item.href) ? 'text-ink' : 'text-ink-2'
                    }`}
                  >
                    {item.label}
                    <CaretDownIcon size={14} weight="bold" className={`transition-transform ${menuOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>

                  {menuOpen && (
                    <div id="solutions-menu" className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3">
                      <div className="grid grid-cols-2 gap-6 rounded-xl border border-line-strong bg-surface p-6 shadow-[0_24px_60px_-20px_rgb(0_0_0/0.7)]">
                        {GROUPS.map((g) => (
                          <div key={g.title}>
                            <div className="mb-3 text-[13px] text-ink-3">{g.title}</div>
                            <ul className="space-y-1">
                              {g.slugs.map((slug) => (
                                <li key={slug}>
                                  <Link
                                    href={`/solutions/${slug}`}
                                    className={`block rounded-lg px-3 py-2.5 transition-colors hover:bg-surface-2 ${
                                      pathname === `/solutions/${slug}` ? 'bg-surface-2' : ''
                                    }`}
                                  >
                                    <span className="block text-[15px] font-semibold text-ink">{MENU_NAME[slug]}</span>
                                    <span className="mt-0.5 block text-[13px] leading-snug text-ink-3">{SOLUTIONS[slug].short}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <Link
                          href="/solutions"
                          className="col-span-2 flex items-center justify-between border-t border-line pt-4 text-[14px] font-semibold text-accent hover:text-accent-strong"
                        >
                          솔루션 전체 보기
                          <ArrowRightIcon size={16} weight="bold" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )
            }
            if (item.cta) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="press ml-3 inline-flex h-10 items-center rounded-lg bg-accent px-4 text-[15px] font-semibold text-accent-ink hover:bg-accent-strong"
                >
                  {item.label}
                </Link>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex h-10 items-center rounded-lg px-3.5 text-[15px] transition-colors hover:text-ink ${
                  isActive(item.href) ? 'text-ink' : 'text-ink-2'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* 모바일 버튼 */}
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-lg text-ink lg:hidden"
          aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <XIcon size={24} /> : <ListIcon size={24} />}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <div className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg px-5 pb-10 pt-4 lg:hidden">
          <nav aria-label="모바일 메뉴" className="flex flex-col">
            {NAV.filter((i) => !i.cta && !i.menu).slice(0, 1).map((item) => (
              <Link key={item.href} href={item.href} className="border-b border-line py-4 text-lg font-semibold text-ink">
                {item.label}
              </Link>
            ))}
            <div className="border-b border-line py-4">
              <Link href="/solutions" className="text-lg font-semibold text-ink">
                솔루션
              </Link>
              {GROUPS.map((g) => (
                <div key={g.title} className="mt-4">
                  <div className="mb-1 text-[13px] text-ink-3">{g.title}</div>
                  {g.slugs.map((slug) => (
                    <Link key={slug} href={`/solutions/${slug}`} className="block py-2 text-[16px] text-ink-2 hover:text-ink">
                      {MENU_NAME[slug]}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            {NAV.filter((i) => !i.cta && !i.menu).slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="border-b border-line py-4 text-lg font-semibold text-ink">
                {item.label}
              </Link>
            ))}
            {NAV.filter((i) => i.cta).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="press mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-accent text-base font-semibold text-accent-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
