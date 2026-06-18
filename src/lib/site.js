// ============================================================================
// 사이트 전역 상수 — 회사 정보 / SEO 기본값의 단일 출처(Single Source of Truth)
// 도메인이 확정되면 SITE_URL만 바꾸면 sitemap·canonical·JSON-LD에 전부 반영됨.
// ============================================================================

export const SITE_URL = 'https://www.guardiannet.co.kr'

// Google Search Console 소유권 확인용 토큰.
// Search Console에서 "HTML 태그" 방식 선택 → content="..." 값만 여기에 붙여넣으면
// 전 페이지 <head>에 자동 삽입됨. (빈 문자열이면 메타태그 미출력)
export const GOOGLE_SITE_VERIFICATION = ''
// (선택) 네이버 서치어드바이저 소유권 확인 토큰
export const NAVER_SITE_VERIFICATION = ''

export const COMPANY = {
  name: '가디언넷',
  nameEn: 'GuardianNet',
  legalName: '(주)가디언넷',
  legalNameEn: 'Guardiannet Co., Ltd.',
  ceo: '김형주',
  bizNo: '106-86-80475',
  founded: '2011',
  address: '서울특별시 영등포구 국제금융로2길 37 (여의도동, 에스트레뉴)',
  addressLocality: '영등포구',
  addressRegion: '서울특별시',
  postalCode: '07327',
  country: 'KR',
  emails: {
    sales: 'sales@guardiannet.co.kr',
    tech: 'tech@guardiannet.co.kr',
    service: 'service@guardiannet.co.kr',
  },
  // 문의 폼 (기존 사이트에서 사용하던 Formspree 엔드포인트 그대로 유지)
  formspree: 'https://formspree.io/f/xpqwvynr',
}

// 첫 화면/구조화 데이터에 반복 사용하는 핵심 지표
export const METRICS = {
  years: '15년+',
  workloads: '5,000+',
  aptCustomers: '150+',
  foundedYear: '2011',
}

// 기본 메타 (페이지에서 title/description만 덮어쓰면 됨)
export const DEFAULT_TITLE =
  '가디언넷 | Trend Micro Deep Security · APT 대응 보안 전문기업'
export const DEFAULT_DESCRIPTION =
  '클라우드 보안과 APT 대응 국내 최다 구축 실적. Trend Micro Deep Security 구축·유지보수·운영, Deep Discovery APT 대응 전문. 5,000+ 워크로드, 150+ APT 고객사. 금융·공공이 선택한 보안 파트너 가디언넷.'

// 사이트 네비게이션 (헤더/푸터/사이트맵 공통)
export const NAV = [
  { label: '회사소개', href: '/about' },
  { label: 'Deep Security', href: '/solutions/deep-security' },
  { label: 'Vision One', href: '/solutions/vision-one' },
  { label: 'APT 대응', href: '/solutions/deep-discovery' },
  { label: 'CWPP', href: '/solutions/cwpp' },
  { label: '구축사례', href: '/cases' },
  { label: '블로그', href: '/blog' },
  { label: '문의', href: '/contact' },
]
