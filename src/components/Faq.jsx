import JsonLd from './JsonLd'

// faq: [{ q, a }] — 화면 출력 + FAQPage 구조화 데이터(리치 결과)를 함께 생성
export default function Faq({ faq, heading = '자주 묻는 질문' }) {
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
    <section className="max-w-3xl mx-auto">
      <JsonLd data={jsonLd} />
      <h2 className="text-3xl font-bold mb-8 text-center">{heading}</h2>
      <div className="space-y-4">
        {faq.map((f, i) => (
          <details key={i} className="glass-card rounded-xl p-6 group" open={i === 0}>
            <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-semibold text-white">
              <span>Q. {f.q}</span>
              <span className="text-cyan-400 transition-transform group-open:rotate-45 shrink-0">+</span>
            </summary>
            <p className="mt-4 text-zinc-400 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
