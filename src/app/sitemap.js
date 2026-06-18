import { SITE_URL } from '@/lib/site'
import { SOLUTION_SLUGS } from '@/lib/solutions'
import { POSTS } from '@/lib/blog'

// 정적 export에서 metadata route를 정적으로 고정
export const dynamic = 'force-static'

// next build 시 /sitemap.xml 을 자동 생성 (정적 export에 포함됨)
export default function sitemap() {
  const staticRoutes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/solutions', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/cases', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
  ].map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  const solutionRoutes = SOLUTION_SLUGS.map((slug) => ({
    url: `${SITE_URL}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const blogRoutes = POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...solutionRoutes, ...blogRoutes]
}
