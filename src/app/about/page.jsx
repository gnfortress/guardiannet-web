import { COMPANY, METRICS } from '@/lib/site'
import { SOLUTIONS, TREND_SLUGS } from '@/lib/solutions'
import Breadcrumbs from '@/components/Breadcrumbs'
import CtaBand from '@/components/CtaBand'
import { Container, TextLink } from '@/components/ui'

export const metadata = {
  title: '회사소개: 16년 보안 전문기업',
  description:
    '가디언넷은 2011년 설립 이래 클라우드 보안과 APT 대응 한 분야에 집중해 온 보안 전문기업입니다. 5,000+ 워크로드 운영, 150+ APT 구축, 트렌드마이크로 Deep Security·Vision One·Deep Discovery·TippingPoint 기술지원 파트너.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      {/* 첫 화면: 왼쪽 글, 오른쪽 사진 */}
      <section className="border-b border-line">
        <Container className="grid gap-10 py-12 md:py-16 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-6">
            <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '회사소개', href: '/about' }]} />
            <h1 className="mt-6 text-[34px] font-bold leading-[1.2] tracking-[-0.03em] md:text-[46px]">16년, 보안 한 길을 걸어온 가디언넷</h1>
            <p className="mt-5 max-w-[44ch] text-[17px] leading-relaxed text-ink-2 md:text-[18px]">
              클라우드 보안과 APT 대응 한 분야에 집중해, 금융·공공·기업의 보안을 설계하고 운영합니다.
            </p>
          </div>
          <div className="lg:col-span-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/about.webp"
              alt="가디언넷 보안 엔지니어들이 화이트보드의 보안 구성도를 보며 회의하는 모습"
              width={1600}
              height={1063}
              fetchPriority="high"
              className="aspect-[3/2] w-full rounded-xl border border-line object-cover"
            />
          </div>
        </Container>
      </section>

      {/* 숫자 */}
      <section className="bg-bg-2">
        <Container>
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {[
              { n: METRICS.foundedYear, l: '설립연도' },
              { n: METRICS.years, l: '보안 경력' },
              { n: METRICS.workloads, l: '클라우드 워크로드' },
              { n: METRICS.aptCustomers, l: 'APT 구축 고객사' },
            ].map((m, i) => (
              <div
                key={m.l}
                className={`reveal flex flex-col gap-1 py-8 ${i % 2 === 1 ? 'pl-5 md:pl-8' : ''} ${
                  i > 0 ? 'md:border-l md:border-line md:pl-8' : ''
                } ${i >= 2 ? 'border-t border-line md:border-t-0' : ''}`}
                style={{ '--d': `${i * 60}ms` }}
              >
                <dt className="order-2 text-[14px] text-ink-2">{m.l}</dt>
                <dd className="text-[32px] font-bold tracking-[-0.03em] tabular md:text-[40px]">{m.n}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* 일하는 방식 */}
      <section>
        <Container className="grid gap-10 py-20 md:py-24 lg:grid-cols-12">
          <h2 className="reveal text-[28px] font-bold leading-[1.3] tracking-[-0.025em] md:text-[36px] lg:col-span-5">
            가디언넷은 어떻게 일하나요?
          </h2>
          <div className="space-y-5 text-[16.5px] leading-[1.85] text-ink-2 lg:col-span-7">
            <p className="reveal text-ink">
              {COMPANY.legalName}은 {METRICS.foundedYear}년 설립 이래 클라우드 보안과 APT 대응 한 분야에 집중해 온 보안 전문기업입니다.
            </p>
            <p className="reveal">
              트렌드마이크로 Deep Security, Vision One, Deep Discovery, TippingPoint에 대한 기술지원 역량을 바탕으로 금융·공공·기업
              고객의 보안 체계를 설계하고 구축하고 운영합니다.
            </p>
            <p className="reveal">
              솔루션 납품으로 끝내지 않습니다. 라이선스 공급부터 구축, 정책 튜닝, 유지보수, 운영대행까지 보안의 전 과정을 맡는 것이
              가디언넷의 방식입니다.
            </p>
            <ul className="reveal flex flex-wrap gap-x-6 gap-y-3 pt-2">
              {TREND_SLUGS.map((s) => (
                <li key={s}>
                  <TextLink href={`/solutions/${s}`}>{SOLUTIONS[s].name.replace('Trend Micro ', '')}</TextLink>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 회사 정보 */}
      <section className="border-t border-line bg-bg-2">
        <Container className="grid gap-8 py-16 md:py-20 lg:grid-cols-12">
          <h2 className="reveal text-[24px] font-bold tracking-[-0.02em] md:text-[28px] lg:col-span-5">회사 정보</h2>
          <dl className="reveal divide-y divide-line border-y border-line lg:col-span-7">
            {[
              ['회사명', COMPANY.legalName],
              ['대표자', COMPANY.ceo],
              ['설립', `${COMPANY.founded}년`],
              ['사업자등록번호', COMPANY.bizNo],
              ['주소', COMPANY.address],
              ['견적·유지보수', COMPANY.emails.sales],
              ['기술문의', COMPANY.emails.tech],
              ['클라우드 서비스', COMPANY.emails.service],
            ].map(([k, v]) => (
              <div key={k} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="text-[14px] text-ink-3">{k}</dt>
                <dd className="text-[15.5px] text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CtaBand secondary={{ label: '솔루션 보기', href: '/solutions' }} />
    </>
  )
}
