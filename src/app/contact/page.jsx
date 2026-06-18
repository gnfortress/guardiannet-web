import { COMPANY } from '@/lib/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactForm from '@/components/ContactForm'
import { MapPinIcon, MailIcon } from '@/components/Icons'

export const metadata = {
  title: '문의하기 — 무료 보안 진단·견적',
  description:
    'Trend Micro Deep Security·Deep Discovery 도입, 유지보수, 라이선스 견적 문의. 환경을 알려주시면 구성과 견적을 무료로 제안드립니다. 가디언넷.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <section className="px-6 pt-16 pb-24 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '문의', href: '/contact' }]} />
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div>
          <h1 className="text-4xl font-bold mb-6">문의하기</h1>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            보안 솔루션 도입, 유지보수, 라이선스 견적 등 무엇이든 문의해 주세요.
            도입을 검토 중인 솔루션과 환경(워크로드 수·클라우드·일정)을 함께 적어주시면
            더 정확한 제안이 가능합니다.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400"><MapPinIcon /></div>
              <div>
                <div className="font-medium text-white mb-1">주소</div>
                <div className="text-zinc-400">{COMPANY.address}</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400"><MailIcon className="w-6 h-6" /></div>
              <div>
                <div className="font-medium text-white mb-1">이메일</div>
                <div className="text-zinc-400 space-y-1">
                  <p>견적·유지보수: <a href={`mailto:${COMPANY.emails.sales}`} className="text-cyan-400 hover:underline">{COMPANY.emails.sales}</a></p>
                  <p>기술문의: <a href={`mailto:${COMPANY.emails.tech}`} className="text-cyan-400 hover:underline">{COMPANY.emails.tech}</a></p>
                  <p>클라우드 서비스: <a href={`mailto:${COMPANY.emails.service}`} className="text-cyan-400 hover:underline">{COMPANY.emails.service}</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
