import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import {
  SITE_URL,
  COMPANY,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  GOOGLE_SITE_VERIFICATION,
  NAVER_SITE_VERIFICATION,
} from '@/lib/site'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    // 하위 페이지는 `${page} | 가디언넷` 형태로 자동 구성
    template: '%s | 가디언넷',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: '가디언넷',
  keywords: [
    '가디언넷',
    'GuardianNet',
    'Deep Security',
    'Deep Security 구축',
    'Deep Security 유지보수',
    'Deep Discovery',
    'APT 대응',
    'CWPP',
    '클라우드 워크로드 보안',
    '트렌드마이크로 파트너',
    '금융권 서버보안',
    'ISMS 서버 보안',
  ],
  authors: [{ name: COMPANY.legalName }],
  creator: COMPANY.legalName,
  publisher: COMPANY.legalName,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: '가디언넷',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '가디언넷', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: { icon: '/favicon.svg' },
  // Search Console / 네이버 소유권 확인 (site.js에 토큰 입력 시 자동 출력)
  verification: {
    ...(GOOGLE_SITE_VERIFICATION ? { google: GOOGLE_SITE_VERIFICATION } : {}),
    ...(NAVER_SITE_VERIFICATION ? { other: { 'naver-site-verification': NAVER_SITE_VERIFICATION } } : {}),
  },
}

export const viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
}

// 사이트 전역 구조화 데이터: Organization + WebSite
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY.name,
  alternateName: COMPANY.nameEn,
  legalName: COMPANY.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  foundingDate: COMPANY.founded,
  description: DEFAULT_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address,
    addressLocality: COMPANY.addressLocality,
    addressRegion: COMPANY.addressRegion,
    postalCode: COMPANY.postalCode,
    addressCountry: COMPANY.country,
  },
  email: COMPANY.emails.sales,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: COMPANY.emails.sales,
      areaServed: 'KR',
      availableLanguage: ['Korean'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'technical support',
      email: COMPANY.emails.tech,
      areaServed: 'KR',
      availableLanguage: ['Korean'],
    },
  ],
  knowsAbout: [
    'Trend Micro Deep Security',
    'Trend Micro Deep Discovery',
    'CWPP',
    'APT 대응',
    '클라우드 워크로드 보안',
    'ISMS-P',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '가디언넷',
  url: SITE_URL,
  inLanguage: 'ko-KR',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-white antialiased">
        <JsonLd data={orgJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
