// 솔루션 상세 페이지 본문 블록 (서버 컴포넌트)
// 표 · 가상 패치 흐름도 · 보호 층 · 핵심 요점 · 진행 단계

// 비교표: 데스크톱은 실제 <table>, 모바일은 행마다 카드처럼 쌓는다 (가로 스크롤 없음)
export function DataTable({ table }) {
  const rest = table.head.slice(1)
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-line">
      <table className="block w-full border-collapse text-left text-[15px] md:table">
        <caption className="sr-only">{table.caption}</caption>
        <thead className="hidden bg-surface-2 md:table-header-group">
          <tr>
            {table.head.map((h) => (
              <th key={h} scope="col" className="px-5 py-3.5 text-[13.5px] font-semibold text-ink-2">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {table.rows.map((row, i) => (
            <tr key={i} className="block border-t border-line p-5 first:border-t-0 md:table-row md:p-0 md:first:border-t">
              <th scope="row" className="block pb-2 align-top text-[16px] font-semibold text-ink md:table-cell md:w-[26%] md:px-5 md:py-4 md:text-[15px]">
                {row[0]}
              </th>
              {row.slice(1).map((cell, j) => (
                <td key={j} className="block pb-1.5 align-top leading-[1.65] text-ink-2 md:table-cell md:px-5 md:py-4">
                  <span className="text-ink-3 md:hidden">{rest[j]}: </span>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// 가상 패치 흐름도: 패치만 기다리면 노출되는 기간 vs 가상 패치로 막는 기간
export function PatchTimeline({ timeline }) {
  const { phases, lanes } = timeline
  return (
    <figure
      className="mt-6 rounded-xl border border-line bg-surface p-5 md:p-6"
      aria-label={`${lanes.map((l) => `${l.name}: ${l.label}`).join('. ')}.`}
    >
      <div className="grid grid-cols-[minmax(84px,22%)_1fr] gap-x-4 gap-y-4">
        <div />
        <div className="grid grid-cols-4 text-[12px] text-ink-3 md:text-[13px]">
          {phases.map((p, i) => (
            <div key={p} className={`border-l border-line pl-2 ${i === phases.length - 1 ? 'text-ink-2' : ''}`}>
              {p}
            </div>
          ))}
        </div>
        {lanes.map((lane) => (
          <div key={lane.name} className="contents">
            <div className="self-center text-[13px] font-semibold leading-tight text-ink md:text-[14px]">{lane.name}</div>
            <div className="relative grid grid-cols-4 items-center">
              {lane.kind === 'gap' ? (
                <div
                  className="col-span-3 flex h-9 items-center rounded-md border border-warn/40 px-3 text-[12.5px] font-medium text-warn md:text-[13px]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(135deg, rgb(232 165 75 / 0.14) 0 6px, transparent 6px 12px)',
                  }}
                >
                  {lane.label}
                </div>
              ) : (
                <div className="col-span-4 flex h-9 items-center rounded-md bg-accent px-3 text-[12.5px] font-semibold text-accent-ink md:text-[13px]">
                  {lane.label}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <figcaption className="mt-4 text-[13px] text-ink-3">기간은 환경마다 다르며, 그림은 순서만 나타냅니다.</figcaption>
    </figure>
  )
}

// 보호 층 (위가 애플리케이션, 아래가 호스트)
export function Layers({ layers }) {
  return (
    <ol className="mt-6 grid gap-1.5" aria-label="보호하는 층, 위에서 아래로">
      {layers.map((l) => (
        <li
          key={l}
          className="flex items-center justify-between rounded-lg border border-line bg-surface px-5 py-3.5 text-[15px]"
        >
          <span className="font-semibold text-ink">{l}</span>
          <span className="text-[13px] text-accent">보호</span>
        </li>
      ))}
    </ol>
  )
}

// 핵심 요점 (2~4개)
export function Points({ points }) {
  const cols = points.length === 4 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'
  return (
    <ul className={`mt-6 grid gap-px overflow-hidden rounded-xl border border-line bg-line ${cols}`}>
      {points.map((p) => (
        <li key={p.t} className="bg-bg p-5">
          <div className="text-[16px] font-semibold text-ink">{p.t}</div>
          <div className="mt-1.5 text-[14.5px] leading-relaxed text-ink-2">{p.d}</div>
        </li>
      ))}
    </ul>
  )
}

// 진행 단계 (번호 + 선)
export function Steps({ steps }) {
  return (
    <ol className="mt-6 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.t} className="relative border-t-2 border-line pt-4 pr-4 pb-5 sm:pb-0">
          <span className="absolute -top-[2px] left-0 h-[2px] w-10 bg-accent" aria-hidden="true" />
          <div className="text-[13px] font-semibold text-accent tabular">{String(i + 1).padStart(2, '0')}</div>
          <div className="mt-1 text-[16px] font-semibold text-ink">{s.t}</div>
          <div className="mt-1 text-[14px] leading-relaxed text-ink-2">{s.d}</div>
        </li>
      ))}
    </ol>
  )
}
