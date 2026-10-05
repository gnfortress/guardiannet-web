import { PlusIcon } from '@phosphor-icons/react/dist/ssr'
import JsonLd from './JsonLd'

// faq: [{ q, a }] — 화면 출력 + FAQPage 구조화 데이터(리치 결과)를 함께 생성
export default function Faq({ faq, heading = '자주 묻는 질문', id = 'faq' }) {
  if (!faq || faq.length === 0) return null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section id={id} className="scroll-mt-24">
      <JsonLd data={jsonLd} />
      <h2 className="reveal text-[26px] font-bold tracking-[-0.02em] md:text-[32px]">{heading}</h2>
      <div className="mt-8 border-t border-line-strong">
        {faq.map((f, i) => (
          <details key={i} className="group border-b border-line" open={i === 0}>
            <summary className="flex cursor-pointer items-start justify-between gap-6 py-5 text-[17px] font-semibold leading-snug text-ink transition-colors hover:text-accent md:text-[18px]">
              <span>{f.q}</span>
              <PlusIcon size={20} className="faq-icon mt-0.5 shrink-0 text-ink-3 transition-transform duration-300" aria-hidden="true" />
            </summary>
            <p className="max-w-[68ch] pb-6 text-[15.5px] leading-[1.8] text-ink-2">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
