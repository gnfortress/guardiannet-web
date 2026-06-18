'use client'

import { useState } from 'react'

// 이미지 파일이 아직 없거나 로드 실패하면 figure 전체를 숨겨 깨진 이미지를 방지.
// 파일을 public 경로에 떨구면 자동으로 표시됨.
export default function Figure({ src, alt, caption, source }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null

  return (
    <figure className="glass-card rounded-2xl overflow-hidden">
      {/* 정적 export라 next/image 대신 일반 img 사용 (onError 그레이스풀 처리) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className="w-full h-auto block bg-zinc-900"
      />
      {(caption || source) && (
        <figcaption className="px-5 py-4 text-sm text-zinc-400 border-t border-zinc-800">
          {caption}
          {source && <span className="block text-xs text-zinc-600 mt-1">이미지 출처: {source}</span>}
        </figcaption>
      )}
    </figure>
  )
}
