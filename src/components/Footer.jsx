import Link from 'next/link'
import { COMPANY, NAV } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold gradient-text mb-3">가디언넷</div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              Trend Micro Deep Security · Deep Discovery 기반 클라우드 보안과 APT 대응
              전문기업. 금융·공공·기업이 선택한 보안 파트너입니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-zinc-800/60">
          <p className="text-zinc-500 text-xs leading-relaxed">
            {COMPANY.legalName} | 대표자: {COMPANY.ceo} | 사업자등록번호: {COMPANY.bizNo}
            <br />
            {COMPANY.address}
            <br />
            견적·유지보수: {COMPANY.emails.sales} · 기술문의: {COMPANY.emails.tech}
          </p>
          <div className="text-zinc-500 text-xs">
            © 2024–2026 {COMPANY.legalNameEn} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
