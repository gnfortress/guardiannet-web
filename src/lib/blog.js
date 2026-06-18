// ============================================================================
// 블로그 글 데이터 — SEO 롱테일 키워드 공략용
// 본문은 문단 배열(p) 또는 소제목 객체({h2}) / 리스트({ul})로 구성.
// 새 글은 이 배열에 항목을 추가하면 /blog 목록과 /blog/[slug] 페이지가 자동 생성됨.
// ============================================================================

export const POSTS = [
  {
    slug: 'what-is-deep-security',
    title: 'Trend Micro Deep Security란 무엇인가 — 서버 보안 입문',
    description:
      'Deep Security가 무엇이고 어떤 위협을 막는지, 백신·방화벽과 무엇이 다른지 핵심만 정리합니다.',
    date: '2026-06-02',
    category: 'Deep Security',
    keywords: ['Deep Security', '서버 보안', 'CWPP', 'Host IPS'],
    body: [
      { p: 'Deep Security는 서버 워크로드를 단일 에이전트로 보호하는 통합 서버 보안 솔루션입니다. 물리 서버, 가상머신, 클라우드 인스턴스, 컨테이너를 가리지 않고 동일하게 적용할 수 있습니다.' },
      { h2: '어떤 위협을 막나' },
      { p: '안티멀웨어로 악성코드를, 호스트 기반 IPS로 네트워크 공격과 알려진 취약점 악용을, 무결성 모니터링으로 중요 파일 변조를, 로그 검사로 의심 행위를 탐지합니다. 특히 "가상 패치"는 OS·미들웨어 패치를 적용하기 전에도 알려진 취약점 공격을 차단해 주어, 패치 일정이 빡빡한 운영 환경에서 강력합니다.' },
      { h2: '백신·방화벽과 무엇이 다른가' },
      { ul: [
        '백신: 엔드포인트의 알려진 악성코드 중심. 서버 워크로드 전반의 침입방지·무결성·취약점 통제는 부족.',
        '네트워크 방화벽: 경계(트래픽 출입) 통제. 워크로드 내부에서 일어나는 위협은 보지 못함.',
        'Deep Security: 워크로드 "내부"에서 멀웨어·침입·무결성·취약점을 한 번에 통제.',
      ] },
      { h2: '누구에게 필요한가' },
      { p: '규제(ISMS-P·전자금융감독규정)를 받는 금융·공공, 클라우드로 서버를 옮기는 기업, 다수의 서버를 일관된 정책으로 관리해야 하는 조직에 적합합니다.' },
      { p: '가디언넷은 Deep Security의 라이선스·구축·유지보수·운영을 전 주기로 지원합니다. 자세한 내용은 Deep Security 전문관을 참고하세요.' },
    ],
    cta: { label: 'Deep Security 전문관 보기', href: '/solutions/deep-security' },
  },
  {
    slug: 'deep-security-build-cost',
    title: 'Deep Security 구축 비용은 어떻게 정해지나',
    description:
      'Deep Security 도입 비용을 결정하는 요소(워크로드 수·모듈·계약형태)와 비용을 줄이는 방법을 설명합니다.',
    date: '2026-06-05',
    category: 'Deep Security',
    keywords: ['Deep Security 구축 비용', 'Deep Security 라이선스', 'Deep Security 가격'],
    body: [
      { p: 'Deep Security 도입 비용은 "정찰가"가 아니라 환경에 따라 산정됩니다. 비용을 좌우하는 핵심 변수는 다음과 같습니다.' },
      { h2: '비용을 결정하는 3가지 요소' },
      { ul: [
        '보호할 워크로드(인스턴스) 수: 라이선스는 보통 워크로드 단위로 산정됩니다.',
        '사용 모듈: 안티멀웨어만 쓸지, IPS·무결성·로그 검사까지 풀로 쓸지에 따라 달라집니다.',
        '계약 형태: 구독형(연 단위)과 영구형, 계약 기간에 따라 단가가 달라집니다.',
      ] },
      { h2: '구축 비용 = 라이선스 + 구축 용역' },
      { p: '총비용은 라이선스 비용과 설계·구축·정책 튜닝 용역, 그리고 연간 유지보수로 구성됩니다. 워크로드가 많을수록 단가는 내려가지만 구축·운영 난이도는 올라가므로, 초기 설계가 전체 TCO를 좌우합니다.' },
      { h2: '비용을 줄이는 법' },
      { p: '필요한 모듈만 정확히 선정하고, 오토스케일 환경에서는 사용량 기반 구성을 검토하며, 기존 보안 솔루션과 역할이 겹치지 않게 정리하면 불필요한 비용을 줄일 수 있습니다. 가디언넷은 환경 진단 후 과·소 도입을 피한 최적 구성을 제안합니다.' },
    ],
    cta: { label: '무료 견적 문의', href: '/contact' },
  },
  {
    slug: 'cwpp-vs-cnapp',
    title: 'CWPP와 CNAPP의 차이 — 무엇부터 도입해야 할까',
    description:
      '클라우드 보안 용어 CWPP와 CNAPP가 어떻게 다른지, 우리 조직은 무엇부터 시작해야 하는지 정리합니다.',
    date: '2026-06-09',
    category: 'CWPP',
    keywords: ['CWPP', 'CNAPP', '클라우드 워크로드 보안', '클라우드 보안'],
    body: [
      { p: '클라우드 보안 시장에는 CWPP, CSPM, CIEM, CNAPP 같은 약어가 쏟아집니다. 핵심만 보면 구분이 어렵지 않습니다.' },
      { h2: 'CWPP — 실행 중인 워크로드 보호' },
      { p: 'CWPP(Cloud Workload Protection Platform)는 지금 돌아가고 있는 서버·컨테이너 워크로드를 멀웨어·침입·취약점으로부터 보호합니다. Trend Micro Deep Security가 대표적입니다.' },
      { h2: 'CNAPP — 통합 클라우드 보안' },
      { p: 'CNAPP(Cloud-Native Application Protection Platform)는 CWPP에 더해 클라우드 설정 점검(CSPM), 권한 분석(CIEM), 코드·이미지 보안(Shift-Left)을 하나로 묶은 상위 개념입니다.' },
      { h2: '무엇부터?' },
      { p: '대부분의 조직은 "실행 중인 워크로드 보호(CWPP)"가 가장 시급합니다. 운영이 안정되면 설정 점검과 권한 분석을 더해 CNAPP 수준으로 확장하는 단계적 접근이 비용 대비 효과적입니다.' },
    ],
    cta: { label: 'CWPP 구축 알아보기', href: '/solutions/cwpp' },
  },
  {
    slug: 'isms-server-security-checklist',
    title: 'ISMS-P 서버 보안 체크리스트 — 핵심 통제 항목',
    description:
      'ISMS-P 인증 심사에서 자주 지적되는 서버 보안 통제 항목과 대응 방법을 체크리스트로 정리합니다.',
    date: '2026-06-12',
    category: '컴플라이언스',
    keywords: ['ISMS', 'ISMS-P', 'ISMS 서버 보안', '취약점 점검'],
    body: [
      { p: 'ISMS-P 인증은 서버 보안에서 구체적인 통제와 증적을 요구합니다. 심사에서 자주 다뤄지는 항목을 정리했습니다.' },
      { h2: '핵심 점검 항목' },
      { ul: [
        '계정·권한 관리: 불필요 계정 제거, 권한 최소화, 관리자 접근통제',
        '접속기록: 로그 보관 주기 준수, 정기 검토, 위변조 방지',
        '무결성: 중요 시스템 파일 변조 탐지(FIM)',
        '취약점 관리: 알려진 취약점의 식별·조치(또는 가상 패치)',
        '악성코드 통제: 서버 워크로드 안티멀웨어 적용',
      ] },
      { h2: '솔루션 매핑' },
      { p: 'Deep Security의 IPS·무결성 모니터링·로그 검사·안티멀웨어가 위 통제 항목에 직접 대응됩니다. 점검과 증적 산출을 자동화하면 인증 준비·유지 부담이 크게 줄어듭니다.' },
    ],
    cta: { label: 'ISMS-P 대응 보기', href: '/solutions/isms' },
  },
  {
    slug: 'financial-saas-edr-vision-one',
    title: '금융권 SaaS 도입과 EDR — Vision One이 떠오르는 이유',
    description:
      '금융 분야 SaaS·클라우드 활용 확대 흐름 속에서 EDR/XDR이 주목받는 배경과, Trend Micro Vision One 도입 시 점검할 포인트를 정리합니다.',
    date: '2026-06-17',
    category: 'EDR/XDR',
    keywords: ['금융권 SaaS', '금융 EDR', 'Vision One', 'EDR', 'XDR', '금융 보안'],
    body: [
      { p: '금융 분야에서 클라우드·SaaS 활용 범위가 단계적으로 넓어지면서, 보안 운영의 무게중심도 폐쇄망 중심에서 SaaS형 통합 관제로 옮겨가고 있습니다. 이 흐름에서 가장 많이 거론되는 것이 EDR/XDR, 그중에서도 Trend Micro Vision One입니다.' },
      { h2: '왜 지금 EDR인가' },
      { ul: [
        '단말·서버에서 일어나는 침해 후 활동(측면 이동·자격 증명 탈취)은 백신만으로 보이지 않는다.',
        'SaaS형 EDR은 별도 관제 인프라 없이 빠르게 도입하고 다수 자산을 통합 가시화할 수 있다.',
        'XDR로 엔드포인트·이메일·서버·클라우드를 상관분석하면 흩어진 알럿을 하나의 공격 스토리로 묶을 수 있다.',
      ] },
      { h2: 'Vision One 도입 시 점검 포인트' },
      { ul: [
        '규제 적합성: 도입 형태(SaaS/리전)와 데이터 처리 범위가 내부 규정·감독 요건에 맞는지',
        '기존 보안과의 연계: Deep Security(서버), Deep Discovery(APT)와 어떻게 통합 가시화할지',
        '운영 체계: 알럿 분류·대응 프로세스와 인력, 생성형 AI(Companion) 활용 방안',
        'PoC: 실제 환경에서 탐지 정확도·성능·오탐을 사전 검증',
      ] },
      { p: '가디언넷은 금융권 변경관리·승인 절차를 고려해 도입 타당성 검토부터 정책 설계, 관제 운영까지 함께합니다.' },
    ],
    cta: { label: 'Vision One EDR/XDR 전문관 보기', href: '/solutions/vision-one' },
  },
  {
    slug: 'what-is-apt-deep-discovery',
    title: 'APT 공격이란 무엇이고 어떻게 막는가',
    description:
      'APT(지능형 지속 위협)의 특징과, 백신·방화벽으로 부족한 이유, Deep Discovery 기반 대응 방법을 설명합니다.',
    date: '2026-06-16',
    category: 'APT',
    keywords: ['APT', 'APT 대응', 'Deep Discovery', '랜섬웨어', '샌드박스'],
    body: [
      { p: 'APT(Advanced Persistent Threat)는 특정 조직을 겨냥해 장기간 은밀하게 침투·잠복하는 표적형 공격입니다. 알려진 악성코드 시그니처에 의존하는 백신만으로는 탐지가 어렵습니다.' },
      { h2: '왜 기존 보안으로 부족한가' },
      { p: 'APT는 정상 트래픽처럼 위장하고, 알려지지 않은(제로데이) 악성코드를 사용합니다. 따라서 "알려진 것"을 차단하는 방식이 아니라, 의심스러운 파일을 실제로 실행해 행위를 관찰(샌드박스)하고 네트워크 내부 확산을 추적하는 방식이 필요합니다.' },
      { h2: 'Deep Discovery의 대응 방식' },
      { ul: [
        'DDI: 네트워크 트래픽에서 표적 공격·내부 확산을 탐지',
        'DDAN: 의심 파일을 샌드박스에서 동적 분석',
        'DDEI: 스피어피싱·악성 첨부 등 이메일 위협 차단',
      ] },
      { p: '가디언넷은 국내 150+ 고객사에 Deep Discovery 기반 APT 대응 체계를 구축·운영해 왔습니다.' },
    ],
    cta: { label: 'APT 대응 전문관 보기', href: '/solutions/deep-discovery' },
  },
]

export const POST_SLUGS = POSTS.map((p) => p.slug)

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug) || null
}
