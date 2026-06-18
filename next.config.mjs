/** @type {import('next').NextConfig} */
const nextConfig = {
  // 정적 export → Firebase Hosting의 out/ 폴더로 빌드 (모든 페이지가 HTML로 사전 생성됨 = SEO 최적)
  output: 'export',
  // 각 경로를 폴더/index.html 로 생성 → Firebase 정적 호스팅과 가장 호환성이 좋음
  trailingSlash: true,
  // next/image 최적화 서버가 없으므로 정적 export에서는 비활성화 필수
  images: { unoptimized: true },
}

export default nextConfig
