import { MapPinIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react/dist/ssr'
import { COMPANY } from '@/lib/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactForm from '@/components/ContactForm'
import { Container } from '@/components/ui'

export const metadata = {
  title: '문의하기: 무료 보안 진단·견적',
  description:
    'Trend Micro Deep Security·Vision One·Deep Discovery·TippingPoint 도입, 유지보수, 라이선스 견적 문의. 환경을 알려 주시면 구성과 견적을 무료로 제안합니다. 가디언넷.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <section>
      <Container className="grid gap-12 py-12 md:py-16 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '문의하기', href: '/contact' }]} />
          <h1 className="mt-6 text-[34px] font-bold tracking-[-0.03em] md:text-[46px]">문의하기</h1>
          <p className="mt-5 max-w-[44ch] text-[16.5px] leading-relaxed text-ink-2">
            도입, 유지보수, 라이선스 견적 등 무엇이든 남겨 주세요. 검토 중인 솔루션과 환경을 함께 적어 주시면 더 정확히 제안드립니다.
          </p>

          <dl className="mt-10 divide-y divide-line border-y border-line">
            <div className="flex gap-4 py-5">
              <MapPinIcon size={22} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <dt className="text-[14px] font-semibold text-ink">주소</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-ink-2">{COMPANY.address}</dd>
              </div>
            </div>
            <div className="flex gap-4 py-5">
              <EnvelopeSimpleIcon size={22} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <dt className="text-[14px] font-semibold text-ink">이메일</dt>
                <dd className="mt-1 space-y-1 text-[15px] text-ink-2">
                  {[
                    ['견적·유지보수', COMPANY.emails.sales],
                    ['기술문의', COMPANY.emails.tech],
                    ['클라우드 서비스', COMPANY.emails.service],
                  ].map(([k, v]) => (
                    <p key={v}>
                      <span className="inline-block w-28 text-ink-3">{k}</span>
                      <a href={`mailto:${v}`} className="text-accent hover:text-accent-strong hover:underline">
                        {v}
                      </a>
                    </p>
                  ))}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </Container>
    </section>
  )
}
