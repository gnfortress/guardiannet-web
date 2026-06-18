import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SOLUTIONS, SOLUTION_SLUGS } from '@/lib/solutions'
import { SITE_URL, COMPANY } from '@/lib/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import Figure from '@/components/Figure'
import { CheckIcon } from '@/components/Icons'

// 정적 export: 빌드 시 생성할 모든 slug를 알려준다.
export function generateStaticParams() {
  return SOLUTION_SLUGS.map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const s = SOLUTIONS[params.slug]
  if (!s) return {}
  const path = `/solutions/${s.slug}`
  return {
    // s.title 자체에 브랜드(- 가디언넷)가 포함되어 있으므로 템플릿(| 가디언넷) 미적용
    title: { absolute: s.title },
    description: s.description,
    keywords: s.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: s.title,
      description: s.description,
      url: `${SITE_URL}${path}`,
      type: 'website',
    },
  }
}

export default function SolutionPage({ params }) {
  const s = SOLUTIONS[params.slug]
  if (!s) notFound()

  const path = `/solutions/${s.slug}`

  // Service 구조화 데이터
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    serviceType: s.eyebrow,
    description: s.description,
    url: `${SITE_URL}${path}`,
    areaServed: 'KR',
    provider: {
      '@type': 'Organization',
      name: COMPANY.name,
      url: SITE_URL,
    },
  }

  return (
    <>
      <JsonLd data={serviceJsonLd} />

      {/* Hero */}
      <section className="relative px-6 pt-16 pb-20 grid-bg overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { name: '홈', href: '/' },
              { name: '솔루션', href: '/solutions' },
              { name: s.name, href: path },
            ]}
          />
          <p className="text-cyan-400 font-medium mt-6 mb-3 tracking-wider">{s.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{s.h1}</h1>
          <p className="text-lg text-zinc-300 leading-relaxed">{s.lead}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors">
              견적·기술문의
            </Link>
            <a href={`mailto:${COMPANY.emails.sales}`} className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 rounded-lg transition-colors">
              {COMPANY.emails.sales}
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-3">
          {s.features.map((f) => (
            <div key={f} className="glass-card rounded-xl px-5 py-4 flex items-center gap-3">
              <span className="text-cyan-400 shrink-0"><CheckIcon /></span>
              <span className="text-zinc-200 text-sm">{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 제품 화면·구성도 (이미지가 있는 솔루션만) */}
      {s.images && s.images.length > 0 && (
        <section className="px-6 py-8 max-w-4xl mx-auto">
          <div className="grid gap-6 sm:grid-cols-2">
            {s.images.map((img) => (
              <Figure key={img.src} {...img} />
            ))}
          </div>
        </section>
      )}

      {/* Body sections */}
      <article className="px-6 pb-12 max-w-3xl mx-auto prose-gn">
        {s.sections.map((sec, i) => (
          <section key={i} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">{sec.h2}</h2>
            {sec.body.map((para, j) => (
              <p key={j} className="text-zinc-300 mb-4">{para}</p>
            ))}
            {sec.steps && (
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {sec.steps.map((st) => (
                  <div key={st.t} className="glass-card rounded-xl p-5">
                    <div className="font-semibold text-white mb-1">{st.t}</div>
                    <div className="text-sm text-zinc-400">{st.d}</div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </article>

      {/* 도입효과 & 특장점 (네이티브 그리드 — highlights가 있는 솔루션만) */}
      {s.highlights && s.highlights.length > 0 && (
        <section className="px-6 py-12 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            {s.highlightsTitle || '도입효과 & 특장점'}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {s.highlights.map((h, i) => (
              <div key={h.t} className="glass-card rounded-xl p-5 flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-400 font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">{h.t}</div>
                  <div className="text-sm text-zinc-400 leading-relaxed">{h.d}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="px-6 py-12">
        <Faq faq={s.faq} />
      </section>

      <CtaBand
        title={`${s.name} 도입을 검토 중이신가요?`}
        subtitle="현황을 알려주시면 구성·견적을 무료로 제안드립니다. 타사 구축 환경의 유지보수 이관도 가능합니다."
        secondary={{ label: '다른 솔루션 보기', href: '/solutions' }}
      />
    </>
  )
}
