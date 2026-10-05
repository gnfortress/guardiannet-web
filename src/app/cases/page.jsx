import Breadcrumbs from '@/components/Breadcrumbs'
import CtaBand from '@/components/CtaBand'
import { Container } from '@/components/ui'
import { METRICS } from '@/lib/site'

export const metadata = {
  title: '구축사례: 금융·공공·기업 보안 구축',
  description:
    '가디언넷의 Deep Security·Deep Discovery·Vision One 구축 사례. 금융권 서버 보안, 공공기관 APT 대응, 기업 클라우드 워크로드 보안 등 산업별 구축·운영 사례를 소개합니다.',
  alternates: { canonical: '/cases' },
}

// 실제 고객명은 비밀유지로 익명 처리. 고객 동의를 받은 사례로 교체하세요.
const CASES = [
  {
    sector: '금융',
    title: '금융기관 서버 보안, 전자금융감독규정 대응',
    challenge: '전자금융감독규정에 따른 서버 침입 방지·무결성·로그 통제 요건 충족 필요',
    solution: ['Deep Security 기반 Host IPS 적용', '무결성 모니터링·로그 검사 구성', '취약점 가상 패치 운영'],
    result: ['감독 요건 충족', '서버 보안 통제 자동화', '운영 부담 감소'],
  },
  {
    sector: '공공',
    title: '공공기관 APT 대응 체계 구축',
    challenge: '표적형 공격·악성 이메일 위협 증가에 대한 탐지·대응 역량 필요',
    solution: ['Deep Discovery DDI·DDAN 구축', 'DDEI 이메일 위협 차단', '위협 이벤트 분석 프로세스 정립'],
    result: ['지능형 위협 가시성 확보', '이메일 기반 공격 차단', '대응 체계 표준화'],
  },
  {
    sector: '기업',
    title: '클라우드 전환 기업의 워크로드 보안(CWPP)',
    challenge: '멀티 클라우드 전환 과정에서 워크로드 보안 일관성 확보',
    solution: ['Deep Security 단일 정책 멀티 클라우드 적용', '오토스케일 자동 정책 배포', 'GnFortress 점검 자동화 연계'],
    result: ['클라우드·온프레미스 통합 관리', '확장 시 자동 보안 적용', '점검 자동화'],
  },
  {
    sector: '금융',
    title: '금융권 EDR/XDR 도입, SaaS형 통합 가시성',
    challenge: '단말·서버 침해 가시성 강화와 SaaS 활용 확대에 맞춘 보안 관제 필요',
    solution: ['Vision One EDR/XDR 도입 검토·PoC', '엔드포인트·서버·이메일 상관분석 구성', 'Companion AI 활용 인시던트 분석'],
    result: ['침해·확산 행위 가시성 확보', '알럿 통합으로 대응 속도 향상', '관제 운영 체계 정립'],
  },
  {
    sector: '기업',
    title: 'ISMS-P 인증 대응, 서버 보안 통제 자동화',
    challenge: '인증 심사의 접근통제·로그·무결성·취약점 통제 증적 확보',
    solution: ['통제 항목별 정책 설계', '무결성·로그 검사 구성', '점검·증적 산출 자동화'],
    result: ['인증 요건 충족', '심사 증적 자동 산출', '반복 점검 부담 감소'],
  },
  {
    sector: '게임',
    title: '게임사 대규모 워크로드 랜섬웨어 다층 방어',
    challenge: '급증하는 서버 워크로드와 랜섬웨어·표적 공격 위협 대응',
    solution: ['Host IPS·가상 패치로 침투 차단', 'EDR/XDR로 측면 이동 탐지', '무결성 모니터링·백업 복구 체계'],
    result: ['랜섬웨어 침투·확산 방어', '대규모 워크로드 일괄 관리', '신규 서버 자동 보안 적용'],
  },
]

function Col({ title, items, text }) {
  return (
    <div>
      <div className="mb-2 text-[13px] text-ink-3">{title}</div>
      {text ? (
        <p className="text-[15px] leading-relaxed text-ink-2">{text}</p>
      ) : (
        <ul className="space-y-1.5">
          {items.map((x) => (
            <li key={x} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-2">
              <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {x}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function CasesPage() {
  return (
    <>
      {/* 첫 화면: 사진 위 제목 */}
      <section className="img-shade relative border-b border-line">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/cases.webp"
          alt="해 질 녘 여의도 금융가의 유리 외벽 빌딩"
          width={1600}
          height={905}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover opacity-60"
        />
        <Container className="relative z-10 flex min-h-[380px] flex-col justify-end py-12 md:min-h-[440px] md:py-16">
          <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '구축사례', href: '/cases' }]} />
          <h1 className="mt-5 text-[36px] font-bold tracking-[-0.03em] md:text-[52px]">구축사례</h1>
          <p className="mt-3 max-w-[48ch] text-[17px] leading-relaxed text-ink-2">
            금융·공공·기업 환경에서 가디언넷이 보안을 구축하고 운영한 사례입니다. 고객 보호를 위해 이름은 밝히지 않습니다.
          </p>
        </Container>
      </section>

      <section className="bg-bg-2">
        <Container>
          <dl className="grid grid-cols-3">
            {[
              { n: METRICS.workloads, l: '클라우드 워크로드' },
              { n: METRICS.aptCustomers, l: 'APT 구축 고객사' },
              { n: METRICS.years, l: '보안 경력' },
            ].map((m, i) => (
              <div key={m.l} className={`reveal flex flex-col gap-1 py-7 ${i > 0 ? 'border-l border-line pl-4 md:pl-8' : ''}`}>
                <dt className="order-2 text-[13px] text-ink-2 md:text-[14px]">{m.l}</dt>
                <dd className="text-[26px] font-bold tracking-[-0.03em] tabular md:text-[38px]">{m.n}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-20">
          <ol className="border-t border-line-strong">
            {CASES.map((c, i) => (
              <li key={c.title} className="reveal grid gap-6 border-b border-line py-10 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 text-[13px]">
                    <span className="tabular text-ink-3">{String(i + 1).padStart(2, '0')}</span>
                    <span className="rounded-md bg-accent-wash px-2 py-0.5 font-semibold text-accent">{c.sector}</span>
                  </div>
                  <h2 className="mt-3 text-[22px] font-bold leading-snug tracking-[-0.01em] md:text-[24px]">{c.title}</h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-3 lg:col-span-8">
                  <Col title="고객 과제" text={c.challenge} />
                  <Col title="해결 방법" items={c.solution} />
                  <Col title="결과" items={c.result} />
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand
        title="우리 환경과 비슷한 사례가 궁금하신가요?"
        subtitle="비슷한 업종과 규모의 구축 경험을 바탕으로 맞춤 제안을 드립니다."
        secondary={{ label: '솔루션 보기', href: '/solutions' }}
      />
    </>
  )
}
