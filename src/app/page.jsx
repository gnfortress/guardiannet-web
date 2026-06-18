import Link from 'next/link'
import { COMPANY, METRICS } from '@/lib/site'
import {
  CloudIcon,
  ShieldIcon,
  ServerIcon,
  MailIcon,
  GlobeIcon,
  LockIcon,
  RadarIcon,
  ArrowRightIcon,
} from '@/components/Icons'
import CtaBand from '@/components/CtaBand'

export const metadata = {
  title: '클라우드 보안 · APT 대응 전문기업',
  description:
    '클라우드 보안과 APT 대응 국내 최다 구축 실적. Trend Micro Deep Security 구축·유지보수, Deep Discovery APT 대응, CWPP 클라우드 워크로드 보안 전문. 금융·공공이 선택한 보안 파트너 가디언넷.',
  alternates: { canonical: '/' },
}

const enterprise = [
  {
    name: 'Deep Security',
    badge: 'Trend Micro',
    desc: 'CWPP 서버 워크로드 보안. 국내 최고 기술지원 파트너.',
    href: '/solutions/deep-security',
    Icon: ServerIcon,
  },
  {
    name: 'Vision One',
    badge: 'Trend Micro',
    desc: 'EDR/XDR 통합 보안. 금융권 SaaS 보안.',
    href: '/solutions/vision-one',
    Icon: RadarIcon,
  },
  {
    name: 'Deep Discovery',
    badge: 'Trend Micro',
    desc: 'APT·랜섬웨어 대응. 국내 150+ 구축 실적.',
    href: '/solutions/deep-discovery',
    Icon: MailIcon,
  },
  {
    name: 'GnFortress',
    badge: '당사 개발',
    desc: '멀티 클라우드 통합 보안 솔루션.',
    href: 'https://gnfortress.com',
    external: true,
    Icon: CloudIcon,
  },
  {
    name: 'TruGuard',
    badge: '당사 개발',
    desc: '방화벽·VPN·IPS 통합 차세대 UTM.',
    href: '/contact',
    Icon: ShieldIcon,
  },
]

const consumer = [
  {
    name: 'TripSIM',
    badge: '당사 개발',
    desc: '여행자 eSIM 서비스 · 190개국 지원.',
    href: 'https://tripsim.co.kr',
    external: true,
    Icon: GlobeIcon,
  },
  {
    name: 'AirPass VPN',
    badge: '당사 개발',
    desc: '글로벌 서버 기반 VPN 서비스.',
    href: 'https://airpassvpn.com',
    external: true,
    Icon: LockIcon,
  },
]

function SolutionCard({ s }) {
  const Inner = (
    <div className="glass-card p-6 rounded-2xl h-full hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
          <s.Icon />
        </div>
        <span className="px-2 py-0.5 text-xs bg-zinc-800 text-zinc-400 rounded-full">{s.badge}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-1">
        {s.name}
        <ArrowRightIcon className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      </h3>
      <p className="text-zinc-400 text-sm">{s.desc}</p>
    </div>
  )
  return s.external ? (
    <a href={s.href} target="_blank" rel="noopener noreferrer">{Inner}</a>
  ) : (
    <Link href={s.href}>{Inner}</Link>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <p className="text-cyan-400 font-medium mb-4 tracking-wider">
              {METRICS.workloads} 클라우드 워크로드 · {METRICS.aptCustomers} APT 구축
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Trend Micro Deep Security<br />
              <span className="gradient-text">구축·운영 전문기업</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              클라우드 워크로드 보안(CWPP)부터 APT 대응까지, 빈틈없는 보안 체계.<br className="hidden md:block" />
              금융·공공이 선택한 보안 파트너 <span className="font-semibold text-white">가디언넷</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/solutions/deep-security" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center gap-2">
                Deep Security 전문관 <ArrowRightIcon />
              </Link>
              <Link href="/contact" className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-white rounded-lg transition-colors">
                무료 보안 진단 신청
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust metrics */}
      <section className="px-6 -mt-10 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { n: METRICS.foundedYear, l: '설립연도' },
            { n: METRICS.years, l: '보안 경력' },
            { n: METRICS.workloads, l: '클라우드 워크로드' },
            { n: METRICS.aptCustomers, l: 'APT 구축 고객사' },
          ].map((m) => (
            <div key={m.l} className="glass-card rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{m.n}</div>
              <div className="text-zinc-400 text-sm">{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 font-medium mb-2 tracking-wider">ABOUT US</p>
            <h2 className="text-4xl font-bold mb-6">16년 보안 한 길</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              가디언넷은 {METRICS.foundedYear}년 설립 이래 보안 한 분야에 집중해 왔습니다.
              클라우드 보안 분야에서 {METRICS.workloads}개 워크로드를 구축·운영하고, APT 대응
              분야에서 {METRICS.aptCustomers}개 이상 고객사의 설계·구축·운영 노하우를 보유하고 있습니다.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              트렌드마이크로 Deep Security · Deep Discovery 제품군에 대한 국내 최고 수준의
              기술지원 역량을 바탕으로, 고객 환경에 최적화된 안전한 보안 체계를 구축합니다.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium">
              회사 소개 자세히 보기 <ArrowRightIcon />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { t: 'Deep Security', d: 'CWPP 서버 보안 전 주기 지원' },
              { t: 'Deep Discovery', d: 'APT 대응 150+ 구축' },
              { t: '금융·공공', d: '규제 대응 구축 경험' },
              { t: '자체 솔루션', d: 'GnFortress · TruGuard' },
            ].map((c) => (
              <div key={c.t} className="glass-card p-6 rounded-2xl">
                <div className="text-lg font-bold text-white mb-1">{c.t}</div>
                <div className="text-zinc-400 text-sm">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-24 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium mb-2 tracking-wider">SOLUTIONS</p>
            <h2 className="text-4xl font-bold mb-4">솔루션</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              기업 보안부터 개인 사용자 서비스까지, 검증된 보안 솔루션을 제공합니다.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Enterprise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {enterprise.map((s) => <SolutionCard key={s.name} s={s} />)}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Consumer</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consumer.map((s) => <SolutionCard key={s.name} s={s} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section id="performance" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium mb-2 tracking-wider">PERFORMANCE</p>
            <h2 className="text-4xl font-bold mb-4">실적 및 신뢰</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              국내 주요 금융기관 및 기업에 보안 솔루션을 구축·운영해 왔습니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl text-center glow">
              <div className="text-5xl font-bold gradient-text mb-4">{METRICS.workloads}</div>
              <div className="text-xl text-white mb-2">클라우드 워크로드</div>
              <p className="text-zinc-400 text-sm">금융·공공·기업 클라우드 보안 구축</p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center glow">
              <div className="text-5xl font-bold gradient-text mb-4">{METRICS.aptCustomers}</div>
              <div className="text-xl text-white mb-2">APT 구축 고객사</div>
              <p className="text-zinc-400 text-sm">국내 최다 APT 설계·구축·운영 실적</p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center glow">
              <div className="text-5xl font-bold gradient-text mb-4">{METRICS.years}</div>
              <div className="text-xl text-white mb-2">보안 경력</div>
              <p className="text-zinc-400 text-sm">{METRICS.foundedYear}년 설립, 축적된 전문성</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Deep Security 도입을 검토 중이신가요?"
        subtitle="구축·유지보수·라이선스까지, 환경에 맞는 구성과 견적을 무료로 제안드립니다."
        secondary={{ label: '솔루션 전체 보기', href: '/solutions' }}
      />
    </>
  )
}
