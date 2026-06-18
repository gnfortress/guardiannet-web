'use client'

import { useState } from 'react'
import { COMPANY } from '@/lib/site'
import { CheckIcon } from './Icons'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [form, setForm] = useState({ company: '', name: '', email: '', message: '' })

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(COMPANY.formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
      <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-400">
          <CheckIcon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">문의가 접수되었습니다</h3>
        <p className="text-zinc-400 text-center mb-6">빠른 시일 내에 답변 드리겠습니다.</p>
        <button
          onClick={() => setStatus('idle')}
          className="px-6 py-2 border border-zinc-700 hover:border-zinc-500 text-white rounded-lg transition-colors"
        >
          새 문의하기
        </button>
      </div>
    )
  }

  const inputCls =
    'w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-zinc-500 transition-colors'

  return (
    <div className="glass-card p-8 rounded-2xl">
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">회사명</label>
          <input type="text" name="company" value={form.company} onChange={onChange} required className={inputCls} placeholder="회사명을 입력하세요" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">담당자명</label>
          <input type="text" name="name" value={form.name} onChange={onChange} required className={inputCls} placeholder="담당자명을 입력하세요" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">이메일</label>
          <input type="email" name="email" value={form.email} onChange={onChange} required className={inputCls} placeholder="이메일을 입력하세요" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">문의내용</label>
          <textarea name="message" value={form.message} onChange={onChange} required rows={4} className={`${inputCls} resize-none`} placeholder="도입을 검토 중인 솔루션, 환경, 일정 등을 적어주세요" />
        </div>
        {status === 'error' && (
          <p className="text-red-400 text-sm">전송에 실패했습니다. 잠시 후 다시 시도하거나 {COMPANY.emails.sales} 로 문의해 주세요.</p>
        )}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-500/50 disabled:cursor-not-allowed text-black font-semibold rounded-lg transition-colors"
        >
          {status === 'submitting' ? '전송 중...' : '문의 보내기'}
        </button>
      </form>
    </div>
  )
}
