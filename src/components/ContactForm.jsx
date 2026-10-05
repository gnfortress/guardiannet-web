'use client'

import { useState } from 'react'
import { CheckCircleIcon, WarningCircleIcon } from '@phosphor-icons/react'
import { COMPANY } from '@/lib/site'

// 기존 폼 필드(회사명·담당자명·이메일·문의내용)와 순서, Formspree 주소는 그대로 유지한다.
const FIELDS = [
  { name: 'company', label: '회사명', type: 'text', autoComplete: 'organization', hint: '예: (주)가디언넷' },
  { name: 'name', label: '담당자명', type: 'text', autoComplete: 'name', hint: '예: 홍길동 / 보안팀' },
  { name: 'email', label: '이메일', type: 'email', autoComplete: 'email', hint: '답변 받으실 주소' },
]

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [form, setForm] = useState({ company: '', name: '', email: '', message: '' })

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    // 자동 입력 봇 거르기 (사람에게는 보이지 않는 칸)
    if (e.currentTarget.elements._gotcha?.value) return
    setStatus('submitting')
    try {
      const res = await fetch(COMPANY.formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          회사명: form.company,
          담당자명: form.name,
          이메일: form.email,
          문의내용: form.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ company: '', name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex min-h-[420px] flex-col items-start justify-center rounded-xl border border-line bg-surface p-8 md:p-10" role="status">
        <CheckCircleIcon size={40} weight="fill" className="text-accent" aria-hidden="true" />
        <h2 className="mt-5 text-[22px] font-bold">문의가 접수되었습니다</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-2">담당자가 확인한 뒤 남겨 주신 이메일로 답변드리겠습니다.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="press mt-8 inline-flex h-11 items-center rounded-lg border border-line-strong px-5 text-[15px] font-semibold text-ink hover:border-ink-2"
        >
          새 문의 작성
        </button>
      </div>
    )
  }

  const inputCls =
    'w-full rounded-lg border border-line-strong bg-bg px-4 py-3 text-[15px] text-ink placeholder:text-ink-3 transition-colors focus:border-accent focus:outline-none'

  return (
    <div className="rounded-xl border border-line bg-surface p-6 md:p-8">
      <form onSubmit={onSubmit} className="grid gap-5" noValidate={false}>
        {FIELDS.map((f) => (
          <div key={f.name} className="grid gap-2">
            <label htmlFor={`f-${f.name}`} className="text-[14px] font-semibold text-ink">
              {f.label}
            </label>
            <input
              id={`f-${f.name}`}
              type={f.type}
              name={f.name}
              value={form[f.name]}
              onChange={onChange}
              required
              autoComplete={f.autoComplete}
              className={inputCls}
              placeholder={f.hint}
            />
          </div>
        ))}
        <div className="grid gap-2">
          <label htmlFor="f-message" className="text-[14px] font-semibold text-ink">
            문의내용
          </label>
          <textarea
            id="f-message"
            name="message"
            value={form.message}
            onChange={onChange}
            required
            rows={5}
            aria-describedby="f-message-help"
            className={`${inputCls} resize-y`}
          />
          <p id="f-message-help" className="text-[13px] text-ink-3">
            검토 중인 솔루션, 서버·단말 규모, 클라우드 사용 여부, 희망 일정을 적어 주시면 더 정확히 제안드립니다.
          </p>
        </div>

        {/* 봇 차단용 숨김 칸 */}
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        {status === 'error' && (
          <p className="flex items-start gap-2 text-[14px] text-warn" role="alert">
            <WarningCircleIcon size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
            전송하지 못했습니다. 잠시 후 다시 시도하시거나 {COMPANY.emails.sales} 로 메일 주세요.
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="press mt-1 inline-flex h-12 items-center justify-center rounded-lg bg-accent text-base font-semibold text-accent-ink hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? '보내는 중…' : '문의 보내기'}
        </button>
      </form>
    </div>
  )
}
