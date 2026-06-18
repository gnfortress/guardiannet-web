import Link from 'next/link'
import { SITE_URL } from '@/lib/site'
import JsonLd from './JsonLd'

// items: [{ name, href }] — 마지막 항목은 현재 페이지(링크 비활성)
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
    <nav aria-label="breadcrumb" className="text-sm text-zinc-500">
      <JsonLd data={jsonLd} />
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => {
          const last = i === items.length - 1
          return (
            <li key={it.href} className="flex items-center gap-2">
              {last ? (
                <span className="text-zinc-300">{it.name}</span>
              ) : (
                <Link href={it.href} className="hover:text-cyan-400 transition-colors">
                  {it.name}
                </Link>
              )}
              {!last && <span className="text-zinc-700">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
