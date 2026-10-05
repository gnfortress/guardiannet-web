import Link from 'next/link'
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import { POSTS } from '@/lib/blog'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Container } from '@/components/ui'

export const metadata = {
  title: '보안 인사이트 블로그',
  description:
    'Deep Security, Vision One, CWPP/CNAPP, APT 대응, ISMS-P 등 클라우드·서버 보안 인사이트. 가디언넷이 현장 경험을 바탕으로 정리한 실무 가이드.',
  alternates: { canonical: '/blog' },
}

export default function BlogIndex() {
  const posts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))
  const [first, ...rest] = posts
  return (
    <>
      <section className="border-b border-line">
        <Container className="py-12 md:py-16">
          <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '블로그', href: '/blog' }]} />
          <h1 className="mt-6 text-[34px] font-bold tracking-[-0.03em] md:text-[48px]">보안 인사이트</h1>
          <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-ink-2">
            Deep Security, CWPP, APT 대응, 인증 대응까지. 현장에서 자주 받는 질문을 실무 가이드로 정리했습니다.
          </p>
        </Container>
      </section>

      <Container className="py-14 md:py-16">
        {/* 가장 최근 글 하나는 크게 */}
        {first && (
          <Link href={`/blog/${first.slug}`} className="reveal group grid gap-4 border-b border-line pb-12 lg:grid-cols-12 lg:gap-10">
            <div className="flex items-center gap-3 text-[13px] text-ink-3 lg:col-span-3 lg:flex-col lg:items-start lg:gap-1">
              <span className="text-accent">{first.category}</span>
              <time dateTime={first.date}>{first.date}</time>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-[26px] font-bold leading-snug tracking-[-0.02em] transition-colors group-hover:text-accent md:text-[32px]">
                {first.title}
              </h2>
              <p className="mt-3 max-w-[68ch] text-[16px] leading-relaxed text-ink-2">{first.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-accent">
                읽기 <ArrowRightIcon size={16} weight="bold" aria-hidden="true" />
              </span>
            </div>
          </Link>
        )}

        {/* 나머지는 2열 목록 */}
        <ul className="grid gap-x-10 md:grid-cols-2">
          {rest.map((p) => (
            <li key={p.slug} className="reveal border-b border-line">
              <Link href={`/blog/${p.slug}`} className="group block py-7">
                <div className="flex items-center gap-3 text-[13px] text-ink-3">
                  <span className="text-accent">{p.category}</span>
                  <time dateTime={p.date}>{p.date}</time>
                </div>
                <h2 className="mt-2.5 text-[19px] font-semibold leading-snug text-ink transition-colors group-hover:text-accent">{p.title}</h2>
                <p className="mt-2 line-clamp-2 text-[14.5px] leading-relaxed text-ink-2">{p.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}
