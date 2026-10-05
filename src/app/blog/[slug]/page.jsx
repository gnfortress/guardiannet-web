import { notFound } from 'next/navigation'
import Link from 'next/link'
import { POSTS, POST_SLUGS, getPost } from '@/lib/blog'
import { SITE_URL, COMPANY } from '@/lib/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import { ButtonLink, Container } from '@/components/ui'

export function generateStaticParams() {
  return POST_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)
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
  if (block.h2) return <h2 className="mb-4 mt-12 text-[24px] font-bold leading-snug tracking-[-0.02em] md:text-[28px]">{block.h2}</h2>
  if (block.ul)
    return (
      <ul className="my-5 space-y-2.5">
        {block.ul.map((li, i) => (
          <li key={i} className="flex gap-3 text-[16.5px] leading-[1.75] text-ink-2">
            <span className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span>{li}</span>
          </li>
        ))}
      </ul>
    )
  return <p className="mb-5 text-[16.5px] text-ink-2">{block.p}</p>
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = getPost(slug)
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
    <>
      <JsonLd data={articleJsonLd} />
      <Container className="py-12 md:py-16">
        <article className="mx-auto max-w-[720px]">
          <Breadcrumbs
            items={[
              { name: '홈', href: '/' },
              { name: '블로그', href: '/blog' },
              { name: post.title, href: path },
            ]}
          />

          <div className="mt-8 flex items-center gap-3 text-[13px] text-ink-3">
            <span className="text-accent">{post.category}</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <h1 className="mt-3 text-[30px] font-bold leading-[1.3] tracking-[-0.03em] text-balance md:text-[40px]">{post.title}</h1>
          <p className="mt-5 border-b border-line pb-8 text-[17px] leading-relaxed text-ink">{post.description}</p>

          <div className="prose-gn mt-8">
            {post.body.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </div>

          {post.cta && (
            <div className="mt-12 flex flex-col gap-4 border-y border-line py-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[16px] font-semibold text-ink">더 자세한 내용이 궁금하신가요?</p>
              <ButtonLink href={post.cta.href} size="md" arrow>
                {post.cta.label}
              </ButtonLink>
            </div>
          )}

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-[20px] font-bold">관련 글</h2>
              <ul className="mt-4 border-t border-line">
                {related.map((r) => (
                  <li key={r.slug} className="border-b border-line">
                    <Link href={`/blog/${r.slug}`} className="group block py-5">
                      <div className="text-[17px] font-semibold text-ink transition-colors group-hover:text-accent">{r.title}</div>
                      <div className="mt-1 text-[14.5px] leading-relaxed text-ink-2">{r.description}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </Container>
    </>
  )
}
