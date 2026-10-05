import Link from 'next/link'
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import { SOLUTIONS, TREND_SLUGS, TOPIC_SLUGS } from '@/lib/solutions'
import Breadcrumbs from '@/components/Breadcrumbs'
import CtaBand from '@/components/CtaBand'
import { Container } from '@/components/ui'

export const metadata = {
  title: '보안 솔루션: Deep Security · Vision One · APT · TippingPoint',
  description:
    'Trend Micro Deep Security, Vision One EDR/XDR, Deep Discovery APT 대응, TippingPoint IPS 구축·운영과 CWPP 클라우드 보안, ISMS-P·금융권 서버 보안까지. 가디언넷의 보안 솔루션 전체 안내.',
  alternates: { canonical: '/solutions' },
}

export default function SolutionsIndex() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="py-12 md:py-16">
          <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '솔루션', href: '/solutions' }]} />
          <h1 className="mt-6 text-[34px] font-bold tracking-[-0.03em] md:text-[48px]">보안 솔루션</h1>
          <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-ink-2">
            서버, 단말, 네트워크, APT 대응부터 인증·업종별 요건까지. 가디언넷이 구축하고 운영하는 솔루션입니다.
          </p>
        </Container>
      </section>

      {/* 트렌드마이크로 제품: 사진이 있는 2열 */}
      <section>
        <Container className="py-16 md:py-20">
          <h2 className="reveal text-[24px] font-bold tracking-[-0.02em] md:text-[30px]">트렌드마이크로 제품</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {TREND_SLUGS.map((slug, i) => {
              const s = SOLUTIONS[slug]
              return (
                <Link
                  key={slug}
                  href={`/solutions/${slug}`}
                  className="reveal group overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-line-strong"
                  style={{ '--d': `${(i % 2) * 60}ms` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image.src} alt="" loading="lazy" className="aspect-[16/8] w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" />
                  <div className="p-6 md:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-[22px] font-bold tracking-[-0.01em]">{s.name}</h3>
                      <ArrowRightIcon size={20} className="shrink-0 text-accent transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{s.short}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 환경·산업별: 목록 */}
      <section className="border-t border-line bg-bg-2">
        <Container className="grid gap-8 py-16 md:py-20 lg:grid-cols-12">
          <h2 className="reveal text-[24px] font-bold tracking-[-0.02em] md:text-[30px] lg:col-span-4">환경·산업별</h2>
          <ul className="border-t border-line-strong lg:col-span-8">
            {TOPIC_SLUGS.map((slug) => {
              const s = SOLUTIONS[slug]
              return (
                <li key={slug} className="reveal border-b border-line">
                  <Link href={`/solutions/${slug}`} className="group flex items-center gap-6 py-6">
                    <div className="flex-1">
                      <h3 className="text-[19px] font-semibold text-ink">{s.name}</h3>
                      <p className="mt-1 text-[14.5px] leading-relaxed text-ink-2">{s.short}</p>
                    </div>
                    <ArrowRightIcon size={20} className="shrink-0 text-ink-3 transition-all group-hover:translate-x-1 group-hover:text-accent" aria-hidden="true" />
                  </Link>
                </li>
              )
            })}
          </ul>
        </Container>
      </section>

      <CtaBand secondary={{ label: '회사 소개 보기', href: '/about' }} />
    </>
  )
}
