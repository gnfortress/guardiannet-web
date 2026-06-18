import Link from 'next/link'

export const metadata = {
  title: '페이지를 찾을 수 없습니다',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="px-6 py-32 max-w-2xl mx-auto text-center">
      <div className="text-7xl font-bold gradient-text mb-4">404</div>
      <h1 className="text-2xl font-bold mb-3">페이지를 찾을 수 없습니다</h1>
      <p className="text-zinc-400 mb-8">요청하신 페이지가 이동되었거나 존재하지 않습니다.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors">홈으로</Link>
        <Link href="/solutions" className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 rounded-lg transition-colors">솔루션 보기</Link>
      </div>
    </section>
  )
}
