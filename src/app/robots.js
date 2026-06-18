import { SITE_URL } from '@/lib/site'

// 정적 export에서 metadata route를 정적으로 고정
export const dynamic = 'force-static'

// next build 시 /robots.txt 자동 생성
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
