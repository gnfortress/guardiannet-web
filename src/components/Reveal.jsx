'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// .reveal 이 붙은 요소가 화면에 들어오면 .in 을 붙여 부드럽게 나타나게 한다.
// 페이지를 옮길 때마다 새 요소를 다시 찾는다. 움직임 줄이기 설정이면 CSS 에서 효과가 꺼진다.
export default function Reveal() {
  const pathname = usePathname()

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal:not(.in)'))
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    )
    els.forEach((el) => io.observe(el))
    // 혹시 관찰이 늦어져도 내용이 숨은 채로 남지 않게
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.top < window.innerHeight) el.classList.add('in')
      })
    }, 1200)
    return () => {
      io.disconnect()
      clearTimeout(t)
    }
  }, [pathname])

  return null
}
