import Link from 'next/link'
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CrosshairIcon,
  DetectiveIcon,
  CloudIcon,
  WallIcon,
  SimCardIcon,
  LockKeyIcon,
  CloudCheckIcon,
  ClipboardTextIcon,
  BankIcon,
} from '@phosphor-icons/react/dist/ssr'
import { METRICS, CONTACT_LABEL } from '@/lib/site'
import { SOLUTIONS } from '@/lib/solutions'
import { POSTS } from '@/lib/blog'
import CtaBand from '@/components/CtaBand'
import { ButtonLink, TextLink, Container, Keep } from '@/components/ui'
import { Steps } from '@/components/SolutionBlocks'

export const metadata = {
  title: { absolute: '가디언넷 | Trend Micro Deep Security · APT 대응 보안 전문기업' },
  description:
    '클라우드 보안과 APT 대응 국내 최다 구축 실적. Trend Micro Deep Security·Vision One·Deep Discovery·TippingPoint 구축·유지보수 전문. 5,000+ 워크로드, 150+ APT 고객사. 금융·공공이 선택한 보안 파트너 가디언넷.',
  alternates: { canonical: '/' },
}

const ds = SOLUTIONS['deep-security']
const vo = SOLUTIONS['vision-one']
const dd = SOLUTIONS['deep-discovery']
const tp = SOLUTIONS.tippingpoint

const TOPICS = [
  { slug: 'cwpp', Icon: CloudCheckIcon },
  { slug: 'isms', Icon: ClipboardTextIcon },
  { slug: 'financial', Icon: BankIcon },
]

const PROCESS = [
  { t: '현황 진단', d: '보호 대상, 규제 요건, 기존 보안 구성을 먼저 정리합니다.' },
  { t: '설계·PoC', d: '정책을 설계하고 성능 영향과 오탐을 미리 확인합니다.' },
  { t: '구축·튜닝', d: '단계적으로 적용하며 운영 환경에 맞게 다듬습니다.' },
  { t: '운영·유지보수', d: '업데이트, 장애 대응, 정기 리포트로 계속 관리합니다.' },
]

// 홈 솔루션 칸 (트렌드마이크로 4개 + 자체 개발 2개 = 6칸)
function Tile({ href, external, className = '', children, delay = 0 }) {
  const cls = `reveal group relative flex overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-line-strong ${className}`
  const style = { '--d': `${delay}ms` }
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls} style={style}>
      {children}
    </Link>
  )
}

function TileHead({ badge, name, external }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-[12.5px] text-ink-3">{badge}</span>
      {external ? (
        <ArrowUpRightIcon size={18} className="text-ink-3 transition-colors group-hover:text-accent" aria-hidden="true" />
      ) : (
        <ArrowRightIcon size={18} className="text-ink-3 transition-all group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
      )}
      <span className="sr-only">{name}</span>
    </div>
  )
}

export default function Home() {
  const latest = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3)

  return (
    <>
      {/* 1. 첫 화면: 왼쪽 문구, 오른쪽 보안관제 사진 */}
      <section className="border-b border-line">
        <Container className="grid gap-10 py-12 md:py-16 lg:min-h-[640px] lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-12">
          <div className="lg:col-span-6">
            <h1 className="text-[36px] font-bold leading-[1.18] tracking-[-0.035em] text-balance md:text-[48px] lg:text-[52px]">
              <Keep>Trend Micro 보안 솔루션 구축·운영 전문기업</Keep>
            </h1>
            <p className="mt-6 max-w-[40ch] text-[17px] leading-relaxed text-ink-2 md:text-[19px]">
              Deep Security, Vision One, Deep Discovery, TippingPoint를 금융·공공 현장에서 15년 넘게 설계하고 운영해 왔습니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" arrow>
                {CONTACT_LABEL}
              </ButtonLink>
              <ButtonLink href="#solutions" variant="secondary">
                솔루션 보기
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/hero.webp"
              alt="야간에 여의도가 내려다보이는 보안관제실에서 두 엔지니어가 모니터를 확인하는 모습"
              width={1600}
              height={1195}
              fetchPriority="high"
              className="aspect-[4/3] w-full rounded-xl border border-line object-cover"
            />
          </div>
        </Container>
      </section>

      {/* 2. 실적 숫자 */}
      <section className="bg-bg-2">
        <Container>
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {[
              { n: METRICS.workloads, l: '구축·운영한 클라우드 워크로드' },
              { n: METRICS.aptCustomers, l: 'APT 대응 구축 고객사' },
              { n: METRICS.years, l: '보안 한 분야 경력' },
              { n: '4종', l: '구축·운영하는 트렌드마이크로 제품' },
            ].map((m, i) => (
              <div
                key={m.l}
                className={`reveal flex flex-col gap-1 py-8 md:py-10 ${i % 2 === 1 ? 'pl-5 md:pl-8' : ''} ${
                  i > 0 ? 'md:border-l md:border-line md:pl-8' : ''
                } ${i >= 2 ? 'border-t border-line md:border-t-0' : ''}`}
                style={{ '--d': `${i * 60}ms` }}
              >
                <dt className="order-2 text-[14px] leading-snug text-ink-2">{m.l}</dt>
                <dd className="text-[34px] font-bold tracking-[-0.03em] text-ink tabular md:text-[44px]">{m.n}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* 3. 솔루션: 크기가 다른 6칸 */}
      <section id="solutions" className="scroll-mt-16">
        <Container className="py-20 md:py-24">
          <h2 className="reveal max-w-[22ch] text-[30px] font-bold leading-[1.25] tracking-[-0.025em] md:text-[40px]">
            어떤 보안을 가디언넷에 맡길 수 있나요?
          </h2>
          <p className="reveal mt-4 max-w-[56ch] text-[16px] leading-relaxed text-ink-2" style={{ '--d': '60ms' }}>
            트렌드마이크로 서버·단말·네트워크 보안의 구축과 운영, 그리고 직접 만든 클라우드·네트워크 보안 제품입니다.
          </p>

          <div className="mt-12 grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Deep Security: 큰 칸, 사진 */}
            <Tile href={`/solutions/${ds.slug}`} className="min-h-[340px] md:col-span-2 lg:row-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ds.image.src} alt="" loading="lazy" className="absolute inset-0 size-full object-cover opacity-55 transition-opacity duration-500 group-hover:opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/10" aria-hidden="true" />
              <div className="relative mt-auto flex w-full flex-col gap-3 p-6 md:p-8">
                <TileHead badge="Trend Micro" name={ds.name} />
                <h3 className="text-[28px] font-bold tracking-[-0.02em] md:text-[34px]">Deep Security</h3>
                <p className="max-w-[40ch] text-[15px] leading-relaxed text-ink-2">{ds.short} 가상 패치로 패치 전 공백까지 막습니다.</p>
              </div>
            </Tile>

            {/* Vision One */}
            <Tile href={`/solutions/${vo.slug}`} delay={60}>
              <div className="flex w-full flex-col gap-4 p-6">
                <TileHead badge="Trend Micro" name={vo.name} />
                <CrosshairIcon size={30} className="text-accent" aria-hidden="true" />
                <div className="mt-auto">
                  <h3 className="text-[20px] font-bold">Vision One</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">{vo.short}</p>
                </div>
              </div>
            </Tile>

            {/* Deep Discovery */}
            <Tile href={`/solutions/${dd.slug}`} delay={120}>
              <div className="flex w-full flex-col gap-4 p-6">
                <TileHead badge="Trend Micro" name={dd.name} />
                <DetectiveIcon size={30} className="text-accent" aria-hidden="true" />
                <div className="mt-auto">
                  <h3 className="text-[20px] font-bold">Deep Discovery</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">{dd.short}</p>
                </div>
              </div>
            </Tile>

            {/* TippingPoint: 가로로 긴 칸, 사진 */}
            <Tile href={`/solutions/${tp.slug}`} className="md:col-span-2" delay={180}>
              <div className="grid w-full sm:grid-cols-2">
                <div className="flex flex-col gap-4 p-6">
                  <TileHead badge="Trend Micro" name={tp.name} />
                  <div className="mt-auto">
                    <h3 className="text-[20px] font-bold">TippingPoint</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">{tp.short}</p>
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tp.image.src} alt="" loading="lazy" className="hidden h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-90 sm:block" />
              </div>
            </Tile>

            {/* 자체 개발 2개 */}
            <Tile href="https://gnfortress.com" external className="md:col-span-1 lg:col-span-2" delay={60}>
              <div className="flex w-full items-start gap-5 p-6">
                <CloudIcon size={30} className="shrink-0 text-accent" aria-hidden="true" />
                <div className="flex-1">
                  <TileHead badge="가디언넷 개발" name="GnFortress" external />
                  <h3 className="mt-2 text-[20px] font-bold">GnFortress</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">멀티 클라우드 통합 보안 솔루션. 점검 자동화와 가시성.</p>
                </div>
              </div>
            </Tile>
            <Tile href="/contact" className="md:col-span-1 lg:col-span-2" delay={120}>
              <div className="flex w-full items-start gap-5 p-6">
                <WallIcon size={30} className="shrink-0 text-accent" aria-hidden="true" />
                <div className="flex-1">
                  <TileHead badge="가디언넷 개발" name="TruGuard" />
                  <h3 className="mt-2 text-[20px] font-bold">TruGuard</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">방화벽, VPN, IPS를 하나로 묶은 차세대 UTM.</p>
                </div>
              </div>
            </Tile>
          </div>

          {/* 개인 사용자 서비스 */}
          <div className="reveal mt-8 flex flex-col gap-3 border-t border-line pt-6 text-[14px] sm:flex-row sm:items-center sm:gap-8">
            <span className="text-ink-3">개인 사용자 서비스</span>
            <a href="https://tripsim.co.kr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ink-2 hover:text-ink">
              <SimCardIcon size={18} className="text-accent" aria-hidden="true" />
              TripSIM 여행자 eSIM
              <ArrowUpRightIcon size={14} aria-hidden="true" />
            </a>
            <a href="https://airpassvpn.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ink-2 hover:text-ink">
              <LockKeyIcon size={18} className="text-accent" aria-hidden="true" />
              AirPass VPN
              <ArrowUpRightIcon size={14} aria-hidden="true" />
            </a>
          </div>
        </Container>
      </section>

      {/* 4. 회사 소개: 사진 + 글 */}
      <section id="about" className="border-y border-line bg-bg-2">
        <Container className="grid gap-10 py-20 md:py-24 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="reveal lg:col-span-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/about.webp"
              alt="가디언넷 보안 엔지니어들이 화이트보드의 보안 구성도를 보며 회의하는 모습"
              width={1600}
              height={1063}
              loading="lazy"
              className="aspect-[3/2] w-full rounded-xl border border-line object-cover"
            />
          </div>
          <div className="lg:col-span-6">
            <h2 className="reveal text-[30px] font-bold leading-[1.25] tracking-[-0.025em] md:text-[40px]">16년, 보안 한 길</h2>
            <p className="reveal mt-5 text-[16.5px] leading-[1.8] text-ink-2" style={{ '--d': '60ms' }}>
              가디언넷은 {METRICS.foundedYear}년 설립 이래 클라우드 보안과 APT 대응에 집중해 왔습니다. 라이선스 공급에서 끝나지 않고
              구축, 정책 튜닝, 유지보수, 운영대행까지 보안의 전 과정을 맡습니다.
            </p>
            <ul className="reveal mt-8 divide-y divide-line border-y border-line" style={{ '--d': '120ms' }}>
              {[
                ['Deep Security', `${METRICS.workloads} 워크로드 구축·운영`],
                ['Deep Discovery', `${METRICS.aptCustomers} 고객사 APT 대응 구축`],
                ['금융·공공', '규제 요건에 맞춘 구축 경험'],
                ['자체 제품', 'GnFortress · TruGuard 직접 개발'],
              ].map(([k, v]) => (
                <li key={k} className="flex items-baseline justify-between gap-6 py-3.5">
                  <span className="text-[15px] font-semibold text-ink">{k}</span>
                  <span className="text-right text-[14.5px] text-ink-2">{v}</span>
                </li>
              ))}
            </ul>
            <div className="reveal mt-7">
              <TextLink href="/about">회사 소개 자세히 보기</TextLink>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. 진행 방식 */}
      <section>
        <Container className="py-20 md:py-24">
          <h2 className="reveal max-w-[24ch] text-[30px] font-bold leading-[1.25] tracking-[-0.025em] md:text-[40px]">
            도입부터 운영까지 어떻게 진행하나요?
          </h2>
          <p className="reveal mt-4 max-w-[56ch] text-[16px] leading-relaxed text-ink-2" style={{ '--d': '60ms' }}>
            어떤 제품이든 같은 네 단계로 진행합니다. 다른 회사가 구축한 환경은 점검 후 운영 단계부터 이어받습니다.
          </p>
          <div className="reveal mt-10" style={{ '--d': '120ms' }}>
            <Steps steps={PROCESS} />
          </div>
        </Container>
      </section>

      {/* 6. 환경·산업별 */}
      <section className="border-t border-line">
        <Container className="grid gap-10 py-20 md:py-24 lg:grid-cols-12">
          <h2 className="reveal text-[30px] font-bold leading-[1.25] tracking-[-0.025em] md:text-[36px] lg:col-span-4">
            환경과 업종에 맞춰 찾아보세요
          </h2>
          <ul className="border-t border-line-strong lg:col-span-8">
            {TOPICS.map(({ slug, Icon }, i) => {
              const t = SOLUTIONS[slug]
              return (
                <li key={slug} className="reveal border-b border-line" style={{ '--d': `${i * 60}ms` }}>
                  <Link href={`/solutions/${slug}`} className="group flex items-center gap-5 py-6">
                    <Icon size={28} className="shrink-0 text-accent" aria-hidden="true" />
                    <div className="flex-1">
                      <div className="text-[18px] font-semibold text-ink md:text-[20px]">{t.name}</div>
                      <div className="mt-1 text-[14.5px] text-ink-2">{t.short}</div>
                    </div>
                    <ArrowRightIcon size={20} className="shrink-0 text-ink-3 transition-all group-hover:translate-x-1 group-hover:text-accent" aria-hidden="true" />
                  </Link>
                </li>
              )
            })}
          </ul>
        </Container>
      </section>

      {/* 7. 최근 글 */}
      <section className="border-t border-line bg-bg-2">
        <Container className="py-20 md:py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="reveal text-[30px] font-bold tracking-[-0.025em] md:text-[36px]">보안 실무 가이드</h2>
            <TextLink href="/blog">글 전체 보기</TextLink>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {latest.map((p, i) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="reveal group border-t border-line-strong pt-5" style={{ '--d': `${i * 60}ms` }}>
                <div className="flex items-center gap-3 text-[13px] text-ink-3">
                  <span className="text-accent">{p.category}</span>
                  <time dateTime={p.date}>{p.date}</time>
                </div>
                <h3 className="mt-3 text-[18px] font-semibold leading-snug text-ink transition-colors group-hover:text-accent">{p.title}</h3>
                <p className="mt-2 line-clamp-3 text-[14.5px] leading-relaxed text-ink-2">{p.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="어떤 제품이 맞을지부터 함께 정리해 드립니다"
        subtitle="보호할 서버·단말 규모와 일정을 알려 주시면 구성과 견적을 무료로 제안합니다."
      />
    </>
  )
}
