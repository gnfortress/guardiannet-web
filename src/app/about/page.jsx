import { COMPANY, METRICS } from '@/lib/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import CtaBand from '@/components/CtaBand'

export const metadata = {
  title: '회사소개 — 16년 보안 전문기업',
  description:
    '가디언넷은 2011년 설립 이래 클라우드 보안과 APT 대응 한 분야에 집중해 온 보안 전문기업입니다. 5,000+ 워크로드 운영, 150+ APT 구축, 트렌드마이크로 국내 최고 기술지원 파트너.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pt-16 pb-12 max-w-4xl mx-auto">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '회사소개', href: '/about' }]} />
        <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6">16년, 보안 한 길을 걸어온 가디언넷</h1>
        <p className="text-lg text-zinc-300 leading-relaxed mb-4">
          {COMPANY.legalName}은 {METRICS.foundedYear}년 설립 이래 클라우드 보안과 APT 대응
          한 분야에 집중해 온 보안 전문기업입니다. 트렌드마이크로 Deep Security와
          Deep Discovery 제품군에 대한 국내 최고 수준의 기술지원 역량을 바탕으로,
          금융·공공·기업 고객의 보안 체계를 설계·구축·운영합니다.
        </p>
        <p className="text-lg text-zinc-300 leading-relaxed">
          단순한 솔루션 납품을 넘어, 라이선스 공급부터 구축, 정책 튜닝, 유지보수,
          운영대행까지 보안의 전 주기를 책임지는 것이 가디언넷의 방식입니다.
        </p>
      </section>

      <section className="px-6 pb-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { n: METRICS.foundedYear, l: '설립연도' },
            { n: METRICS.years, l: '보안 경력' },
            { n: METRICS.workloads, l: '클라우드 워크로드' },
            { n: METRICS.aptCustomers, l: 'APT 구축 고객사' },
          ].map((m) => (
            <div key={m.l} className="glass-card rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-1">{m.n}</div>
              <div className="text-zinc-400 text-sm">{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">회사 정보</h2>
        <div className="glass-card rounded-2xl divide-y divide-zinc-800">
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
            <div key={k} className="flex flex-col sm:flex-row gap-1 sm:gap-6 px-6 py-4">
              <div className="text-zinc-500 text-sm w-40 shrink-0">{k}</div>
              <div className="text-zinc-200">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand secondary={{ label: '솔루션 보기', href: '/solutions' }} />
    </>
  )
}
