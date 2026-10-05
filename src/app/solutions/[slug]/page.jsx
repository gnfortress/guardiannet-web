import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRightIcon, ArrowUpRightIcon, CheckIcon } from '@phosphor-icons/react/dist/ssr'
import { SOLUTIONS, SOLUTION_SLUGS } from '@/lib/solutions'
import { SITE_URL, COMPANY, CONTACT_LABEL } from '@/lib/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import Figure from '@/components/Figure'
import { ButtonLink, Container, Keep } from '@/components/ui'
import { DataTable, PatchTimeline, Layers, Points, Steps } from '@/components/SolutionBlocks'

// 정적 export: 빌드 시 생성할 모든 slug를 알려준다.
export function generateStaticParams() {
  return SOLUTION_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const s = SOLUTIONS[slug]
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
      ...(s.image ? { images: [{ url: s.image.src, alt: s.image.alt }] } : {}),
    },
  }
}

export default async function SolutionPage({ params }) {
  const { slug } = await params
  const s = SOLUTIONS[slug]
  if (!s) notFound()

  const path = `/solutions/${s.slug}`

  // Service 구조화 데이터 (가디언넷이 제공하는 구축·운영 서비스)
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.h1,
    serviceType: s.eyebrow,
    description: s.description,
    url: `${SITE_URL}${path}`,
    areaServed: 'KR',
    ...(s.image ? { image: `${SITE_URL}${s.image.src}` } : {}),
    ...(s.badge === 'Trend Micro'
      ? { brand: { '@type': 'Brand', name: 'Trend Micro', alternateName: ['트렌드마이크로', 'TrendAI'] } }
      : {}),
    provider: { '@type': 'Organization', name: COMPANY.name, url: SITE_URL },
  }

  // 목차 (데스크톱 왼쪽 고정)
  const toc = [
    ...s.sections.map((sec) => ({ id: sec.id, label: sec.h2 })),
    ...(s.images?.length ? [{ id: 'screens', label: '제품 화면' }] : []),
    ...(s.highlights?.length ? [{ id: 'highlights', label: s.highlightsTitle }] : []),
    { id: 'faq', label: '자주 묻는 질문' },
  ]

  const related = (s.related || []).map((r) => SOLUTIONS[r]).filter(Boolean)

  return (
    <>
      <JsonLd data={serviceJsonLd} />

      {/* 첫 화면: 왼쪽 제목, 오른쪽 사진 */}
      <section className="border-b border-line">
        <Container className="grid gap-10 py-12 md:py-16 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-6">
            <Breadcrumbs
              items={[
                { name: '홈', href: '/' },
                { name: '솔루션', href: '/solutions' },
                { name: s.name, href: path },
              ]}
            />
            <h1 className="mt-6 text-[32px] font-bold leading-[1.2] tracking-[-0.03em] text-balance md:text-[42px] lg:text-[44px]">
              <Keep>{s.h1}</Keep>
            </h1>
            <p className="mt-5 max-w-[42ch] text-[17px] leading-relaxed text-ink-2 md:text-[18px]">{s.short}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" arrow>
                {CONTACT_LABEL}
              </ButtonLink>
              <ButtonLink href="#faq" variant="secondary">
                자주 묻는 질문
              </ButtonLink>
            </div>
          </div>
          {s.image && (
            <div className="lg:col-span-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image.src}
                alt={s.image.alt}
                width={1600}
                height={905}
                fetchPriority="high"
                className="aspect-[16/10] w-full rounded-xl border border-line object-cover"
              />
            </div>
          )}
        </Container>
      </section>

      {/* 한 문단 정의 + 숫자 또는 주요 기능 */}
      <section className="bg-bg-2">
        <Container className="grid gap-10 py-14 md:py-16 lg:grid-cols-12 lg:gap-12">
          <p className="reveal text-[19px] leading-[1.75] text-ink md:text-[21px] lg:col-span-7">{s.lead}</p>
          <div className="lg:col-span-5">
            {s.facts?.length ? (
              <dl className="reveal divide-y divide-line border-y border-line" style={{ '--d': '80ms' }}>
                {s.facts.map((f) => (
                  <div key={f.label} className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 py-4">
                    <dt className="sr-only">{f.label}</dt>
                    <dd className="text-[30px] font-bold tracking-[-0.02em] text-ink tabular md:text-[34px]">{f.value}</dd>
                    <dd className="text-[14.5px] leading-snug text-ink-2">
                      {f.label}
                      <span className="mt-0.5 block text-[12.5px] text-ink-3">{f.note}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <ul className="reveal grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1" style={{ '--d': '80ms' }}>
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] text-ink-2">
                    <CheckIcon size={18} weight="bold" className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </section>

      {/* 본문: 왼쪽 목차 + 오른쪽 질문형 섹션 */}
      <Container className="grid gap-12 py-16 md:py-20 lg:grid-cols-12">
        <aside className="hidden lg:col-span-3 lg:block">
          <nav aria-label="이 페이지 목차" className="sticky top-24">
            <div className="mb-3 text-[13px] text-ink-3">이 페이지에서</div>
            <ol className="space-y-1 border-l border-line">
              {toc.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[14px] leading-snug text-ink-2 transition-colors hover:border-accent hover:text-ink"
                  >
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="min-w-0 lg:col-span-9 lg:max-w-[800px]">
          {s.sections.map((sec) => (
            <section key={sec.id} id={sec.id} className="mb-16 scroll-mt-24 last:mb-0">
              <h2 className="reveal text-[26px] font-bold leading-[1.3] tracking-[-0.02em] md:text-[32px]"><Keep>{sec.h2}</Keep></h2>
              <div className="prose-gn mt-5">
                {sec.body.map((para, j) => (
                  <p key={j} className={`mb-4 text-[16.5px] ${j === 0 ? 'text-ink' : 'text-ink-2'}`}>
                    {para}
                  </p>
                ))}
              </div>
              {sec.table && <DataTable table={sec.table} />}
              {sec.timeline && <PatchTimeline timeline={sec.timeline} />}
              {sec.layers && <Layers layers={sec.layers} />}
              {sec.points && <Points points={sec.points} />}
              {sec.steps && <Steps steps={sec.steps} />}
            </section>
          ))}

          {s.images?.length > 0 && (
            <section id="screens" className="mt-16 scroll-mt-24">
              <h2 className="reveal text-[26px] font-bold tracking-[-0.02em] md:text-[32px]">제품 화면</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {s.images.map((img, i) => (
                  <Figure key={img.src} {...img} className={i === 0 ? 'sm:col-span-2' : ''} />
                ))}
              </div>
            </section>
          )}

          {s.highlights?.length > 0 && (
            <section id="highlights" className="mt-16 scroll-mt-24">
              <h2 className="reveal text-[26px] font-bold tracking-[-0.02em] md:text-[32px]">{s.highlightsTitle}</h2>
              <ol className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
                {s.highlights.map((h, i) => (
                  <li key={h.t} className="flex gap-4 bg-bg p-5">
                    <span className="text-[13px] font-semibold text-accent tabular">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <div className="text-[16px] font-semibold text-ink">{h.t}</div>
                      <div className="mt-1 text-[14.5px] leading-relaxed text-ink-2">{h.d}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <div className="mt-20">
            <Faq faq={s.faq} heading={`${s.name.replace('Trend Micro ', '')} 자주 묻는 질문`} />
          </div>

          {s.sources?.length > 0 && (
            <div className="mt-10 text-[13px] leading-relaxed text-ink-3">
              <div className="mb-1.5 font-semibold text-ink-2">출처</div>
              <ul className="space-y-1">
                {s.sources.map((src) => (
                  <li key={src.label}>
                    {src.href ? (
                      <a href={src.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline decoration-line-strong underline-offset-4 hover:text-ink">
                        {src.label}
                        <ArrowUpRightIcon size={12} aria-hidden="true" />
                      </a>
                    ) : (
                      src.label
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-2">가디언넷 실적 수치(워크로드·고객사 수)는 가디언넷 자체 집계입니다.</p>
            </div>
          )}
        </article>
      </Container>

      {/* 함께 보면 좋은 솔루션 */}
      {related.length > 0 && (
        <section className="border-t border-line">
          <Container className="py-16 md:py-20">
            <h2 className="reveal text-[24px] font-bold tracking-[-0.02em] md:text-[28px]">함께 검토하면 좋은 솔루션</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((r, i) => (
                <Link
                  key={r.slug}
                  href={`/solutions/${r.slug}`}
                  className="reveal group overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-line-strong"
                  style={{ '--d': `${i * 60}ms` }}
                >
                  {r.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={r.image.src}
                      alt=""
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                    />
                  )}
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[17px] font-semibold text-ink">{r.name.replace('Trend Micro ', '')}</span>
                      <ArrowRightIcon size={18} className="shrink-0 text-accent transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </div>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">{r.short}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        title={`${s.name.replace('Trend Micro ', '')} 도입을 검토 중이신가요?`}
        subtitle="현황을 알려 주시면 구성과 견적을 무료로 제안합니다. 다른 회사가 구축한 환경의 유지보수 이관도 가능합니다."
        secondary={{ label: '솔루션 전체 보기', href: '/solutions' }}
      />
    </>
  )
}
