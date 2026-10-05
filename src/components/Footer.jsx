import Link from 'next/link'
import { COMPANY } from '@/lib/site'
import { SOLUTIONS, TREND_SLUGS, TOPIC_SLUGS } from '@/lib/solutions'

const COMPANY_LINKS = [
  { label: '회사소개', href: '/about' },
  { label: '구축사례', href: '/cases' },
  { label: '블로그', href: '/blog' },
  { label: '문의하기', href: '/contact' },
]

function Col({ title, children }) {
  return (
    <div>
      <div className="mb-4 text-[13px] text-ink-3">{title}</div>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  )
}

function FLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-[14px] text-ink-2 transition-colors hover:text-ink">
        {children}
      </Link>
    </li>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-2">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 text-[19px] font-bold tracking-[-0.02em] text-ink">
              <span className="inline-block size-2.5 rounded-[3px] bg-accent" aria-hidden="true" />
              가디언넷
            </Link>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-ink-2">
              트렌드마이크로 Deep Security, Vision One, Deep Discovery, TippingPoint를 구축하고 운영하는
              클라우드 보안·APT 대응 전문기업입니다.
            </p>
          </div>
          <div className="md:col-span-3">
            <Col title="트렌드마이크로">
              {TREND_SLUGS.map((s) => (
                <FLink key={s} href={`/solutions/${s}`}>
                  {SOLUTIONS[s].name.replace('Trend Micro ', '')}
                </FLink>
              ))}
            </Col>
          </div>
          <div className="md:col-span-2">
            <Col title="환경·산업별">
              {TOPIC_SLUGS.map((s) => (
                <FLink key={s} href={`/solutions/${s}`}>
                  {SOLUTIONS[s].name}
                </FLink>
              ))}
            </Col>
          </div>
          <div className="md:col-span-2">
            <Col title="회사">
              {COMPANY_LINKS.map((l) => (
                <FLink key={l.href} href={l.href}>
                  {l.label}
                </FLink>
              ))}
            </Col>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-8 text-[12.5px] leading-relaxed text-ink-3 md:flex-row md:items-end md:justify-between">
          <p>
            {COMPANY.legalName} · 대표자 {COMPANY.ceo} · 사업자등록번호 {COMPANY.bizNo}
            <br />
            {COMPANY.address}
            <br />
            견적·유지보수 {COMPANY.emails.sales} · 기술문의 {COMPANY.emails.tech}
          </p>
          <p>© 2024–2026 {COMPANY.legalNameEn} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
