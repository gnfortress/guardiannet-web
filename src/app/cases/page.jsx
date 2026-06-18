import Breadcrumbs from '@/components/Breadcrumbs'
import CtaBand from '@/components/CtaBand'
import { METRICS } from '@/lib/site'

export const metadata = {
  title: '구축사례 — 금융·공공·기업 보안 구축',
  description:
    '가디언넷의 Deep Security·Deep Discovery 구축 사례. 금융권 서버 보안, 공공기관 APT 대응, 기업 클라우드 워크로드 보안 등 산업별 구축·운영 사례를 소개합니다.',
  alternates: { canonical: '/cases' },
}

// 실제 고객명은 비밀유지로 익명 처리. 도입 후 고객 동의를 받은 사례로 교체하세요.
const CASES = [
  {
    sector: '금융',
    title: '금융기관 서버 보안 — 전자금융감독규정 대응',
    challenge: '전자금융감독규정에 따른 서버 침입방지·무결성·로그 통제 요건 충족 필요',
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
    title: '금융권 EDR/XDR 도입 — SaaS형 통합 가시성',
    challenge: '단말·서버 침해 가시성 강화 및 SaaS 활용 확대에 맞춘 보안 관제 필요',
    solution: ['Vision One EDR/XDR 도입 검토·PoC', '엔드포인트·서버·이메일 상관분석 구성', 'Companion AI 활용 인시던트 분석'],
    result: ['침해·확산 행위 가시성 확보', '알럿 통합으로 대응 속도 향상', '관제 운영 체계 정립'],
  },
  {
    sector: '기업',
    title: 'ISMS-P 인증 대응 — 서버 보안 통제 자동화',
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

export default function CasesPage() {
  return (
    <>
      <section className="px-6 pt-16 pb-12 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '구축사례', href: '/cases' }]} />
        <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">구축사례</h1>
        <p className="text-zinc-400 max-w-2xl">
          금융·공공·기업 환경에서 가디언넷이 보안 체계를 구축·운영한 사례입니다.
          (고객 정보 보호를 위해 익명으로 표기합니다.)
        </p>

        <div className="grid grid-cols-3 gap-4 mt-10">
          {[
            { n: METRICS.workloads, l: '클라우드 워크로드' },
            { n: METRICS.aptCustomers, l: 'APT 구축 고객사' },
            { n: METRICS.years, l: '보안 경력' },
          ].map((m) => (
            <div key={m.l} className="glass-card rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{m.n}</div>
              <div className="text-zinc-400 text-xs md:text-sm">{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-12 max-w-5xl mx-auto space-y-6">
        {CASES.map((c) => (
          <article key={c.title} className="glass-card rounded-2xl p-7 md:p-9">
            <span className="px-2 py-0.5 text-xs bg-cyan-500/20 text-cyan-400 rounded-full">{c.sector}</span>
            <h2 className="text-2xl font-bold text-white mt-4 mb-6">{c.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm font-semibold text-zinc-500 mb-2">고객 과제</div>
                <p className="text-zinc-300 text-sm leading-relaxed">{c.challenge}</p>
              </div>
              <div>
                <div className="text-sm font-semibold text-zinc-500 mb-2">해결 방법</div>
                <ul className="space-y-1.5">
                  {c.solution.map((x) => (
                    <li key={x} className="text-zinc-300 text-sm flex gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 shrink-0" />{x}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-sm font-semibold text-zinc-500 mb-2">결과</div>
                <ul className="space-y-1.5">
                  {c.result.map((x) => (
                    <li key={x} className="text-zinc-300 text-sm flex gap-2">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 shrink-0" />{x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <CtaBand
        title="우리 환경에 맞는 사례가 궁금하신가요?"
        subtitle="유사 산업·규모의 구축 경험을 바탕으로 맞춤 제안을 드립니다."
        secondary={{ label: '솔루션 보기', href: '/solutions' }}
      />
    </>
  )
}
