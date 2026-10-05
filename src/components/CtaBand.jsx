import { CONTACT_LABEL, COMPANY } from '@/lib/site'
import { ButtonLink, Container } from './ui'

// 페이지 끝 문의 띠. 카드·빛 효과 없이 위아래 선으로만 구분한다.
export default function CtaBand({
  title = '보안 도입을 검토 중이신가요?',
  subtitle = '환경과 일정을 알려 주시면 구성과 견적을 무료로 제안합니다.',
  secondary,
}) {
  return (
    <section className="border-t border-line bg-bg-2">
      <Container className="grid gap-8 py-16 md:grid-cols-12 md:items-center md:py-20">
        <div className="reveal md:col-span-7">
          <h2 className="text-[28px] font-bold leading-[1.25] tracking-[-0.02em] text-balance md:text-[36px]">{title}</h2>
          <p className="mt-3 max-w-[52ch] text-[16px] leading-relaxed text-ink-2">{subtitle}</p>
        </div>
        <div className="reveal flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end" style={{ '--d': '80ms' }}>
          <ButtonLink href="/contact" arrow>
            {CONTACT_LABEL}
          </ButtonLink>
          {secondary ? (
            <ButtonLink href={secondary.href} variant="secondary">
              {secondary.label}
            </ButtonLink>
          ) : (
            <ButtonLink href={`mailto:${COMPANY.emails.sales}`} variant="secondary">
              {COMPANY.emails.sales}
            </ButtonLink>
          )}
        </div>
      </Container>
    </section>
  )
}
