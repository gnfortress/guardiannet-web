import Link from 'next/link'
import { POSTS } from '@/lib/blog'
import Breadcrumbs from '@/components/Breadcrumbs'
import { ArrowRightIcon } from '@/components/Icons'

export const metadata = {
  title: '보안 인사이트 블로그',
  description:
    'Deep Security, CWPP/CNAPP, APT 대응, ISMS-P 등 클라우드·서버 보안 인사이트. 가디언넷이 현장 경험을 바탕으로 정리한 실무 가이드.',
  alternates: { canonical: '/blog' },
}

export default function BlogIndex() {
  const posts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))
  return (
    <section className="px-6 pt-16 pb-24 max-w-5xl mx-auto">
      <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '블로그', href: '/blog' }]} />
      <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">보안 인사이트</h1>
      <p className="text-zinc-400 max-w-2xl mb-12">
        Deep Security, CWPP, APT 대응, 컴플라이언스 등 클라우드·서버 보안 실무 가이드.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="glass-card rounded-2xl p-7 hover:border-cyan-500/30 transition-all hover:-translate-y-1 group flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-0.5 text-xs bg-cyan-500/20 text-cyan-400 rounded-full">{p.category}</span>
              <time className="text-xs text-zinc-500" dateTime={p.date}>{p.date}</time>
            </div>
            <h2 className="text-xl font-bold text-white mb-2 leading-snug">{p.title}</h2>
            <p className="text-zinc-400 text-sm leading-relaxed grow">{p.description}</p>
            <span className="inline-flex items-center gap-1 text-cyan-400 text-sm mt-4 font-medium">
              읽기 <ArrowRightIcon className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
