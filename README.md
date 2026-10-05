# 가디언넷 웹사이트 (Next.js)

SEO를 고려해 재구축한 가디언넷 회사 웹사이트입니다.
**Next.js(App Router) + Tailwind v4 + 정적 export** 구조이며, 기존과 동일하게
**Firebase Hosting**에 배포합니다.

## 왜 Next.js로 바꿨나
기존 사이트는 Vite React **SPA**라 URL이 사실상 1개(앵커만 존재)였고, 모든
페이지가 같은 `<title>`/메타를 공유해 솔루션 키워드로 검색 노출이 불가능했습니다.
이제 각 페이지가 **고유 URL + 고유 메타 + 구조화 데이터(JSON-LD)**를 가진
정적 HTML로 사전 생성됩니다.

## 페이지 구조
- `/` 홈
- `/about` 회사소개
- `/solutions` 솔루션 목록
- `/solutions/deep-security` · `/vision-one`(EDR/XDR·금융 SaaS) · `/deep-discovery` · `/tippingpoint`(IPS) · `/cwpp` · `/isms` · `/financial` 랜딩
- `/cases` 구축사례(익명)
- `/blog`, `/blog/[slug]` 블로그 (롱테일 SEO)
- `/contact` 문의(기존 Formspree 유지)
- `/sitemap.xml`, `/robots.txt` 자동 생성

## 디자인 규칙 (2026-10 Taste Skill 개편)
- 어두운 단일 테마, 강조색은 하늘색 하나(`src/app/globals.css`의 `@theme`).
- 모서리: 버튼·입력 8px, 카드·사진 12px. 글꼴 Pretendard 하나(`src/app/fonts`, 한글 2,350자 서브셋). 아이콘 Phosphor 하나.
- 섹션 머리말(작은 영문 라벨), 그라데이션 글자, 빛 번짐 효과, 긴 줄표(—)는 쓰지 않습니다.
- 모든 문의 버튼 문구는 `문의하기` 하나(`CONTACT_LABEL`).
- 사진: `public/img/*.webp` (AI 생성 이미지, 글자·로고 없음).
- 솔루션 페이지 소제목은 질문형, 첫 문장이 답. 공식 자료 수치는 `sources`에 출처를 남깁니다.

## 실행·올리기·배포 (더블클릭)
- `시작하기.bat` : 필요한 파일 설치 후 http://localhost:3000 을 엽니다.
- `push-to-github.bat` : 바뀐 내용을 GitHub(gnfortress/guardiannet-web)에 올립니다.
- `deploy.bat` : 사이트를 빌드해 Firebase Hosting(guardiannet.co.kr)에 배포합니다.

## 개발 / 빌드 / 배포
```bash
npm install
npm run dev          # 개발 서버 http://localhost:3000
npm run build        # out/ 에 정적 사이트 생성 (output: 'export')
firebase deploy --only hosting   # out/ 를 Firebase Hosting에 배포
```

## 콘텐츠 수정 위치 (코드 몰라도 됨)
- 회사 정보·이메일·도메인: `src/lib/site.js` (`SITE_URL`만 바꾸면 sitemap/canonical 전체 반영)
- 솔루션 페이지 본문·FAQ: `src/lib/solutions.js`
- 블로그 글 추가/수정: `src/lib/blog.js` (배열에 항목 추가 → 페이지 자동 생성)
- 구축사례: `src/app/cases/page.jsx` (현재 익명, 고객 동의 후 실명 교체)

## 배포 전 체크리스트 (중요)
1. **`src/lib/site.js`의 `SITE_URL`** 을 실제 도메인으로 확정 (현재 `https://www.guardiannet.co.kr`)
2. **OG 이미지**: `public/og-image.svg` 는 임시. 카카오톡/페이스북 공유 호환을 위해
   1200×630 **PNG**(`og-image.png`)로 교체하고 `src/app/layout.jsx`의 images 경로 수정 권장
3. **Google Search Console** 등록 후 sitemap 제출 (`/sitemap.xml`)
4. **Google 비즈니스 프로필** 등록
5. 트렌드마이크로 파트너 페이지 등재 요청(백링크)

## 배포 대상 Firebase 프로젝트
`.firebaserc` → `guardiannet-web` (기존과 동일)
