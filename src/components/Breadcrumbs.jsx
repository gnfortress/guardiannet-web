import Link from 'next/link'
import { CaretRightIcon } from '@phosphor-icons/react/dist/ssr'
import { SITE_URL } from '@/lib/site'
import JsonLd from './JsonLd'

// items: [{ name, href }] — 마지막 항목은 현재 페이지(링크 비활성). BreadcrumbList 구조화 데이터도 함께 출력.
export default function Breadcrumbs({ items }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.href}`,
    })),
  }

  return (
    <nav aria-label="현재 위치" className="text-[13px] text-ink-3">
      <JsonLd data={jsonLd} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => {
          const last = i === items.length - 1
          return (
            <li key={it.href} className="flex items-center gap-1.5">
              {last ? (
                <span className="text-ink-2" aria-current="page">
                  {it.name}
                </span>
              ) : (
                <Link href={it.href} className="transition-colors hover:text-ink">
                  {it.name}
                </Link>
              )}
              {!last && <CaretRightIcon size={12} aria-hidden="true" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
