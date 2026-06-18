import Link from 'next/link'
import { SOLUTIONS, SOLUTION_SLUGS } from '@/lib/solutions'
import Breadcrumbs from '@/components/Breadcrumbs'
import CtaBand from '@/components/CtaBand'
import { ArrowRightIcon } from '@/components/Icons'

export const metadata = {
  title: '보안 솔루션 — Deep Security · APT · CWPP',
  description:
    'Trend Micro Deep Security, Deep Discovery APT 대응, CWPP 클라우드 워크로드 보안, ISMS-P·금융권 서버 보안까지. 가디언넷의 보안 솔루션 전체 안내.',
  alternates: { canonical: '/solutions' },
}

export default function SolutionsIndex() {
  return (
    <>
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '솔루션', href: '/solutions' }]} />
        <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">보안 솔루션</h1>
        <p className="text-zinc-400 max-w-2xl mb-12">
          서버 워크로드 보안부터 APT 대응, 컴플라이언스 대응까지. 가디언넷이 구축·운영하는
          핵심 솔루션을 안내합니다.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTION_SLUGS.map((slug) => {
            const s = SOLUTIONS[slug]
            return (
              <Link
                key={slug}
                href={`/solutions/${slug}`}
                className="glass-card rounded-2xl p-7 hover:border-cyan-500/30 transition-all hover:-translate-y-1 group"
              >
                <span className="px-2 py-0.5 text-xs bg-zinc-800 text-zinc-400 rounded-full">{s.badge}</span>
                <h2 className="text-xl font-bold text-white mt-4 mb-2 flex items-center gap-2">
                  {s.name}
                  <ArrowRightIcon className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.lead.slice(0, 90)}…</p>
              </Link>
            )
          })}
        </div>
      </section>

      <CtaBand secondary={{ label: '회사 소개 보기', href: '/about' }} />
    </>
  )
}
