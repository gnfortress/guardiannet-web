import { Container, ButtonLink } from '@/components/ui'

export const metadata = {
  title: '페이지를 찾을 수 없습니다',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section>
      <Container className="flex min-h-[60vh] flex-col justify-center py-24">
        <div className="text-[64px] font-bold tracking-[-0.04em] text-ink-3 tabular md:text-[88px]">404</div>
        <h1 className="mt-2 text-[28px] font-bold tracking-[-0.02em] md:text-[34px]">페이지를 찾을 수 없습니다</h1>
        <p className="mt-3 text-[16px] text-ink-2">요청하신 페이지가 옮겨졌거나 없어졌습니다.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">홈으로</ButtonLink>
          <ButtonLink href="/solutions" variant="secondary">
            솔루션 보기
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
