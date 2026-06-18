// 구조화 데이터(JSON-LD) 출력용 공통 컴포넌트.
// 서버 컴포넌트에서 그대로 렌더링되어 정적 HTML에 <script>로 박힘 → 구글 리치 결과 인식.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
