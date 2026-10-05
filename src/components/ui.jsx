import Link from 'next/link'
import { ArrowRightIcon, ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr'

// 버튼 두 종류만 쓴다: 주 버튼(하늘색 채움) / 보조 버튼(테두리). 모서리 8px.
const base =
  'press inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold no-underline'
const sizes = {
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-12 px-6 text-base',
}
const variants = {
  primary: 'bg-accent text-accent-ink hover:bg-accent-strong',
  secondary: 'border border-line-strong text-ink hover:border-ink-2 hover:bg-white/[0.03]',
}

export function ButtonLink({ href, children, variant = 'primary', size = 'lg', arrow = false, external = false, className = '' }) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`
  const inner = (
    <>
      {children}
      {arrow && <ArrowRightIcon size={18} weight="bold" aria-hidden="true" />}
    </>
  )
  if (external || href.startsWith('mailto:')) {
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {inner}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  )
}

// 글자 링크 (화살표 포함)
export function TextLink({ href, children, external = false, className = '' }) {
  const cls = `group inline-flex items-center gap-1.5 font-semibold text-accent hover:text-accent-strong ${className}`
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <ArrowUpRightIcon size={16} weight="bold" aria-hidden="true" />
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {children}
      <ArrowRightIcon size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  )
}

// 페이지 공통 가로 폭
export function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 md:px-8 ${className}`}>{children}</div>
}

// "구축·운영"처럼 가운뎃점으로 묶인 낱말이 줄바꿈 때 갈라지지 않게 한다
export function Keep({ children }) {
  if (typeof children !== 'string') return children
  const parts = children.split(/(\s+)/)
  return parts.map((p, i) =>
    p.includes('·') ? (
      <span key={i} className="whitespace-nowrap">
        {p}
      </span>
    ) : (
      p
    )
  )
}
