'use client'

import { useState } from 'react'

// 이미지 파일이 없거나 로드에 실패하면 figure 전체를 숨겨 깨진 이미지를 막는다.
export default function Figure({ src, alt, caption, source, className = '' }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null

  return (
    <figure className={`overflow-hidden rounded-xl border border-line bg-surface ${className}`}>
      {/* 정적 export라 next/image 대신 일반 img 사용 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className="block h-auto w-full bg-bg-2" />
      {(caption || source) && (
        <figcaption className="border-t border-line px-5 py-4 text-[14px] leading-relaxed text-ink-2">
          {caption}
          {source && <span className="mt-1 block text-[12px] text-ink-3">이미지 출처: {source}</span>}
        </figcaption>
      )}
    </figure>
  )
}
