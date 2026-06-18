import Breadcrumbs from '@/components/Breadcrumbs'
import CtaBand from '@/components/CtaBand'

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
