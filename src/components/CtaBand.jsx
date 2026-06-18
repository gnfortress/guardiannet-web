import Link from 'next/link'
import { ArrowRightIcon } from './Icons'

export default function CtaBand({
  title = '보안 도입을 검토 중이신가요?',
  subtitle = '환경과 일정을 알려주시면 구성·견적을 무료로 제안드립니다.',
  primary = { label: '무료 상담·견적 문의', href: '/contact' },
  secondary,
}) {
  return (
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto glass-card glow rounded-3xl p-10 md:p-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primary.href}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center gap-2"
          >
            {primary.label} <ArrowRightIcon />
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-white rounded-lg transition-colors"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
