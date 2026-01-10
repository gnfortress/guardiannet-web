import { useState } from 'react'
import './App.css'

// Icons as simple SVG components
const ShieldIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const CloudIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
  </svg>
)

const ServerIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
)

const LockIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
)

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

// Solution data
const enterpriseSolutions = [
  {
    id: 'gnfortress',
    name: 'GnFortress',
    badge: '당사 개발',
    shortDesc: '클라우드 보안 솔루션',
    icon: CloudIcon,
    fullDesc: '클라우드 환경을 위한 통합 보안 솔루션입니다. AWS, Azure, GCP 등 멀티 클라우드 환경에서 워크로드를 보호합니다.',
    features: ['실시간 위협 탐지', '자동화된 보안 정책 관리', '멀티 클라우드 지원', '국내 금융권 다수 구축'],
    link: 'https://gnfortress.com'
  },
  {
    id: 'truguard',
    name: 'TruGuard',
    badge: '당사 개발',
    shortDesc: 'UTM 통합 보안 장비',
    icon: ShieldIcon,
    fullDesc: '방화벽, VPN, IPS, 안티바이러스 등을 통합한 차세대 UTM(Unified Threat Management) 솔루션입니다.',
    features: ['차세대 방화벽', 'VPN 지원', 'IPS/IDS 통합', '통합 관리 콘솔'],
    link: null
  },
  {
    id: 'deepsecurity',
    name: 'Deep Security',
    badge: '트렌드마이크로',
    shortDesc: 'CWPP 서버 보안',
    icon: ServerIcon,
    fullDesc: '전세계 CWPP 시장점유율 1위 제품입니다. 가디언넷은 Deep Security의 국내 최고 기술지원 파트너입니다.',
    features: ['안티멀웨어', '호스트 기반 IPS', '무결성 모니터링', '로그 검사'],
    link: null
  },
  {
    id: 'deepdiscovery',
    name: 'Deep Discovery',
    badge: '트렌드마이크로',
    shortDesc: 'APT 대응 솔루션',
    icon: MailIcon,
    fullDesc: '지능형 지속 위협(APT)을 탐지하고 대응하는 솔루션입니다. 가디언넷은 국내 최고 수준의 Deep Discovery 기술지원 및 유지보수 역량을 보유하고 있습니다.',
    features: ['DDI - 네트워크 위협 탐지', 'DDAN - 샌드박스 분석', 'DDEI - 이메일 보안'],
    subProducts: [
      { name: 'DDI (Inspector)', desc: '네트워크 트래픽을 분석하여 표적 공격, 랜섬웨어 등 지능형 위협을 탐지합니다.' },
      { name: 'DDAN (Analyzer)', desc: '의심스러운 파일을 샌드박스 환경에서 실행하여 악성 행위를 분석합니다.' },
      { name: 'DDEI (Email Inspector)', desc: '이메일을 통한 스피어피싱, 악성 첨부파일 등 이메일 기반 위협을 차단합니다.' }
    ],
    link: 'https://www.trendmicro.com/ko_kr/business/products/network/advanced-threat-protection.html'
  }
]

const consumerSolutions = [
  {
    id: 'tripsim',
    name: 'TripSIM',
    badge: '당사 개발',
    shortDesc: '여행자 eSIM 서비스',
    icon: GlobeIcon,
    fullDesc: '해외 여행자를 위한 eSIM 서비스입니다. 전세계 190개국 이상에서 데이터를 사용할 수 있습니다.',
    features: ['190개국 이상 지원', '즉시 활성화', '합리적인 요금', '24시간 고객지원'],
    link: 'https://tripsim.co.kr'
  },
  {
    id: 'airpassvpn',
    name: 'AirPass VPN',
    badge: '당사 개발',
    shortDesc: 'VPN 서비스',
    icon: LockIcon,
    fullDesc: '안전하고 빠른 VPN 서비스입니다. 전세계 서버를 통해 프라이버시를 보호합니다.',
    features: ['글로벌 서버 네트워크', '빠른 연결 속도', '강력한 암호화', '무제한 대역폭'],
    link: 'https://airpassvpn.com'
  }
]

// Modal Component
function SolutionModal({ solution, onClose }) {
  if (!solution) return null

  const IconComponent = solution.icon

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative bg-zinc-900 border border-zinc-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
        >
          <XIcon />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
              <IconComponent />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-2xl font-bold text-white">{solution.name}</h3>
                <span className="px-2 py-0.5 text-xs bg-cyan-500/20 text-cyan-400 rounded-full">
                  {solution.badge}
                </span>
              </div>
              <p className="text-zinc-400">{solution.shortDesc}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-zinc-300 mb-6 leading-relaxed">
            {solution.fullDesc}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">주요 기능</h4>
            <ul className="space-y-2">
              {solution.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-zinc-300">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Sub Products (for Deep Discovery) */}
          {solution.subProducts && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">제품 라인업</h4>
              <div className="space-y-3">
                {solution.subProducts.map((sub, idx) => (
                  <div key={idx} className="p-4 bg-zinc-800/50 rounded-lg">
                    <h5 className="font-semibold text-white mb-1">{sub.name}</h5>
                    <p className="text-sm text-zinc-400">{sub.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 pt-4 border-t border-zinc-800">
            <a 
              href="#contact"
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-center transition-colors"
            >
              문의하기
            </a>
            {solution.link && (
              <a 
                href={solution.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-lg text-center transition-colors flex items-center justify-center gap-2"
              >
                서비스 바로가기 <ArrowRightIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Contact Form Component with Formspree
function ContactForm() {
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('https://formspree.io/f/xpqwvynr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          회사명: formData.company,
          담당자명: formData.name,
          이메일: formData.email,
          문의내용: formData.message
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ company: '', name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
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

  return (
    <div className="glass-card p-8 rounded-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">회사명</label>
          <input 
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-zinc-500 transition-colors"
            placeholder="회사명을 입력하세요"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">담당자명</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-zinc-500 transition-colors"
            placeholder="담당자명을 입력하세요"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">이메일</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-zinc-500 transition-colors"
            placeholder="이메일을 입력하세요"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">문의내용</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-zinc-500 transition-colors resize-none"
            placeholder="문의내용을 입력하세요"
          />
        </div>
        {status === 'error' && (
          <p className="text-red-400 text-sm">전송에 실패했습니다. 다시 시도해주세요.</p>
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

// Solution Card Component
function SolutionCard({ solution, onClick }) {
  const IconComponent = solution.icon

  return (
    <div 
      onClick={() => onClick(solution)}
      className="glass-card p-6 rounded-2xl cursor-pointer hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
          <IconComponent />
        </div>
        <span className="px-2 py-0.5 text-xs bg-zinc-800 text-zinc-400 rounded-full">
          {solution.badge}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{solution.name}</h3>
      <p className="text-zinc-400 text-sm">{solution.shortDesc}</p>
    </div>
  )
}

function App() {
  const [selectedSolution, setSelectedSolution] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold">
              <span className="gradient-text">가디언넷</span>
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-zinc-400 hover:text-white transition-colors">회사소개</a>
              <a href="#solutions" className="text-zinc-400 hover:text-white transition-colors">솔루션</a>
              <a href="#performance" className="text-zinc-400 hover:text-white transition-colors">실적</a>
              <a href="#contact" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-lg transition-colors">
                문의하기
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-zinc-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 border-t border-zinc-800 mt-4">
              <div className="flex flex-col gap-4">
                <a href="#about" className="text-zinc-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>회사소개</a>
                <a href="#solutions" className="text-zinc-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>솔루션</a>
                <a href="#performance" className="text-zinc-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>실적</a>
                <a href="#contact" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-lg transition-colors text-center" onClick={() => setMobileMenuOpen(false)}>
                  문의하기
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <p className="text-cyan-400 font-medium mb-4 tracking-wider">5,000+ 클라우드 워크로드 | 150+ APT 구축</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              클라우드 보안, APT 대응<br />
              <span className="gradient-text">국내 최다 구축 실적이 증명합니다.</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              클라우드부터 APT까지, 빈틈없는 보안 체계<br className="md:hidden" />
              <span className="font-semibold text-white">가디언넷</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/25"
              >
                문의하기
              </a>
              <a 
                href="#solutions" 
                className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-white rounded-lg transition-colors"
              >
                솔루션 보기
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-zinc-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-400 font-medium mb-2 tracking-wider">ABOUT US</p>
              <h2 className="text-4xl font-bold mb-6">회사 소개</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
가디언넷은 2011년 설립 이래 보안 분야의 다양한 경험을 쌓아왔습니다. 
                클라우드 보안 분야에서는 5,000개 이상의 워크로드 보안을 구축·운영하고, 
                APT 대응 분야에서는 150개 이상의 고객사에 설계·구축·운영 노하우를 보유하고 있습니다.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                트렌드마이크로의 Deep Security, Deep Discovery 제품군에 대한 국내 최고 수준의 
                기술지원 역량을 바탕으로, 고객의 비즈니스 환경을 최적화하고 안전한 보안 체계를 
                구축해 드립니다.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold gradient-text mb-2">2011</div>
                <div className="text-zinc-400 text-sm">설립연도</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                <div className="text-zinc-400 text-sm">보안 경력 (년)</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold gradient-text mb-2">5000+</div>
                <div className="text-zinc-400 text-sm">클라우드 워크로드</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold gradient-text mb-2">150+</div>
                <div className="text-zinc-400 text-sm">APT 구축 고객사</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium mb-2 tracking-wider">SOLUTIONS</p>
            <h2 className="text-4xl font-bold mb-4">솔루션</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              기업 보안부터 개인 사용자 서비스까지, 다양한 보안 솔루션을 제공합니다.
            </p>
          </div>

          {/* Enterprise Solutions */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Enterprise</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {enterpriseSolutions.map(solution => (
                <SolutionCard 
                  key={solution.id} 
                  solution={solution} 
                  onClick={setSelectedSolution}
                />
              ))}
            </div>
          </div>

          {/* Consumer Solutions */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <PhoneIcon />
              </div>
              <h3 className="text-2xl font-bold">Consumer</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consumerSolutions.map(solution => (
                <SolutionCard 
                  key={solution.id} 
                  solution={solution} 
                  onClick={setSelectedSolution}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium mb-2 tracking-wider">PERFORMANCE</p>
            <h2 className="text-4xl font-bold mb-4">실적 및 신뢰</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              국내 주요 금융기관 및 기업에 보안 솔루션을 구축한 경험을 보유하고 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl text-center glow">
              <div className="text-5xl font-bold gradient-text mb-4">5,000+</div>
              <div className="text-xl text-white mb-2">클라우드 워크로드</div>
              <p className="text-zinc-400 text-sm">금융, 공공, 기업 클라우드 보안 구축</p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center glow">
              <div className="text-5xl font-bold gradient-text mb-4">150+</div>
              <div className="text-xl text-white mb-2">APT 구축 고객사</div>
              <p className="text-zinc-400 text-sm">국내 최다 APT 설계·구축·운영 실적</p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center glow">
              <div className="text-5xl font-bold gradient-text mb-4">15년+</div>
              <div className="text-xl text-white mb-2">보안 경력</div>
              <p className="text-zinc-400 text-sm">2011년 설립, 축적된 전문성</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-cyan-400 font-medium mb-2 tracking-wider">CONTACT</p>
              <h2 className="text-4xl font-bold mb-6">문의하기</h2>
              <p className="text-zinc-400 mb-8">
                보안 솔루션에 대한 문의나 견적 요청은 아래 연락처로 문의해 주세요.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1">주소</div>
                    <div className="text-zinc-400">서울시 영등포구 국제금융로2길 37(여의도동, 에스트레뉴)</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div> 
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1">이메일</div>
                    <div className="text-zinc-400 space-y-1">
                      <p>견적/유지보수: <a href="mailto:sales@guardiannet.co.kr" className="text-cyan-400 hover:underline">sales@guardiannet.co.kr</a></p>
                      <p>기술문의: <a href="mailto:tech@guardiannet.co.kr" className="text-cyan-400 hover:underline">tech@guardiannet.co.kr</a></p>
                      <p>클라우드서비스: <a href="mailto:service@guardiannet.co.kr" className="text-cyan-400 hover:underline">service@guardiannet.co.kr</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-2xl font-bold gradient-text mb-2">가디언넷</div>
              <p className="text-zinc-500 text-sm">(주)가디언넷 | 대표자: 김형주 | 사업자등록번호: 106-86-80475</p>
            </div>
            <div className="text-zinc-500 text-sm">
              © 2024 Guardiannet Co., Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Solution Modal */}
      <SolutionModal 
        solution={selectedSolution} 
        onClose={() => setSelectedSolution(null)} 
      />
    </div>
  )
}

export default App
