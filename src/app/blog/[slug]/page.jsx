import { notFound } from 'next/navigation'
import Link from 'next/link'
import { POSTS, POST_SLUGS, getPost } from '@/lib/blog'
import { SITE_URL, COMPANY } from '@/lib/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import { ArrowRightIcon } from '@/components/Icons'

export function generateStaticParams() {
  return POST_SLUGS.map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug)
  if (!post) return {}
  const path = `/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}${path}`,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

function Block({ block }) {
  if (block.h2) return <h2 className="text-2xl font-bold mt-10 mb-4">{block.h2}</h2>
  if (block.ul)
    return (
      <ul className="space-y-2 my-4">
        {block.ul.map((li, i) => (
          <li key={i} className="text-zinc-300 flex gap-3">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2.5 shrink-0" />
            <span>{li}</span>
          </li>
        ))}
      </ul>
    )
  return <p className="text-zinc-300 mb-4 leading-relaxed">{block.p}</p>
}

export default function BlogPost({ params }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const path = `/blog/${post.slug}`
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'ko-KR',
    mainEntityOfPage: `${SITE_URL}${path}`,
    author: { '@type': 'Organization', name: COMPANY.name, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` },
    },
  }

  const related = POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2)

  return (
    <article className="px-6 pt-16 pb-24 max-w-3xl mx-auto">
      <JsonLd data={articleJsonLd} />
      <Breadcrumbs
        items={[
          { name: '홈', href: '/' },
          { name: '블로그', href: '/blog' },
          { name: post.title, href: path },
        ]}
      />

      <div className="flex items-center gap-3 mt-6 mb-4">
        <span className="px-2 py-0.5 text-xs bg-cyan-500/20 text-cyan-400 rounded-full">{post.category}</span>
        <time className="text-sm text-zinc-500" dateTime={post.date}>{post.date}</time>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">{post.title}</h1>

      <div className="prose-gn">
        {post.body.map((b, i) => <Block key={i} block={b} />)}
      </div>

      {post.cta && (
        <div className="glass-card rounded-2xl p-6 mt-10 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-zinc-300 font-medium">더 자세한 내용이 궁금하신가요?</p>
          <Link href={post.cta.href} className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors">
            {post.cta.label} <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      )}

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-bold mb-4">관련 글</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="glass-card rounded-xl p-5 hover:border-cyan-500/30 transition-colors">
                <div className="font-semibold text-white mb-1">{r.title}</div>
                <div className="text-sm text-zinc-400">{r.description}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
