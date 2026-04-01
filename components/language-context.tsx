"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Locale = "en" | "ko"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: (key: string) => key,
})

export function useLanguage() {
  return useContext(LanguageContext)
}

const translations: Record<string, Record<Locale, string>> = {
  // Case Study Hero
  "cs.label": { en: "Case Study", ko: "사례 연구" },
  "cs.hero.title": {
    en: "Redesigning a Fortune 100-serving enterprise data security platform,",
    ko: "포춘 100대 기업이 사용하는 엔터프라이즈 데이터 보안 플랫폼을 리디자인하다,",
  },
  "cs.hero.titleEmphasis": {
    en: "without months of rework.",
    ko: "처음부터 다시 만들지 않고.",
  },
  "cs.hero.description": {
    en: "Decades of engineer-made design left customers unable to finish basic tasks without handholding. Sales hid the demo until the last slide. Their CEO wanted to scrap the whole UI. Heurica redesigned the console and designed the conversational agent experience in 2 weeks.",
    ko: "엔지니어가 만든 디자인 때문에 고객은 손잡아주지 않으면 기본 작업도 못 했습니다. 영업팀은 마지막 슬라이드까지 데모를 숨겼고, CEO는 UI 전체를 갈아엎고 싶어 했습니다. Heurica가 콘솔과 AI 에이전트 경험을 2주 만에 새로 설계했습니다.",
  },
  "cs.hero.meta": {
    en: "Enterprise Data Security · Policy Management Console · 98 user stories · 2 weeks",
    ko: "엔터프라이즈 데이터 보안 · 정책 관리 콘솔 · 98개 사용자 스토리 · 2주",
  },

  // The Problem
  "cs.problem.label": { en: "The Problem", ko: "문제" },
  "cs.problem.title": {
    en: "A world-class product nobody could use.",
    ko: "기술은 최고. 아무도 쓸 수 없었다.",
  },
  "cs.problem.description": {
    en: "The product worked. The technology was best-in-class. The interface was killing them.",
    ko: "제품은 작동했고 기술은 최고였습니다. 인터페이스가 발목을 잡고 있었습니다.",
  },

  // Stats
  "cs.stat.1.number": { en: "18 mo", ko: "18개월" },
  "cs.stat.1.label": {
    en: "for customer adoption with hand-holding",
    ko: "핸드홀딩을 통한 고객 도입 기간",
  },
  "cs.stat.2.number": { en: "2+ hr", ko: "2시간+" },
  "cs.stat.2.label": {
    en: "to complete basic tasks",
    ko: "기본 작업 완료 소요 시간",
  },
  "cs.stat.3.number": { en: "600+", ko: "600+" },
  "cs.stat.3.label": {
    en: "policies created (8 is normal). Nobody could track them.",
    ko: "생성된 정책 수 (보통 8개). 아무도 추적할 수 없었습니다.",
  },
  "cs.stat.4.number": { en: "0", ko: "0" },
  "cs.stat.4.label": {
    en: "guided workflows in the entire product",
    ko: "전체 제품 내 가이드 워크플로우",
  },

  // Stakes
  "cs.problem.stakes1": {
    en: "They couldn't sell to new Fortune 500 banks and hospitals with this UX.",
    ko: "이 UX로는 포춘 500대 은행이나 병원에 팔 수 없었습니다.",
  },
  "cs.problem.stakes2": {
    en: "They couldn't put their new AI agent on top of a UX nobody could use.",
    ko: "아무도 못 쓰는 UX 위에 새 AI 에이전트를 올릴 수도 없었습니다.",
  },

  // Quotes - Row 1: Business Impact
  "cs.quote.row1.label": { en: "Business Impact", ko: "비즈니스 임팩트" },
  "cs.quote.1.text": {
    en: "I hide the demo till the very last day.",
    ko: "데모는 마지막 날까지 안 보여줍니다.",
  },
  "cs.quote.1.role": { en: "Sales Head", ko: "영업 총괄" },
  "cs.quote.2.text": {
    en: "At this point, just scrap the whole UI.",
    ko: "이쯤 되면 그냥 UI 전체를 갈아엎자.",
  },
  "cs.quote.2.role": { en: "CEO", ko: "CEO" },
  "cs.quote.3.text": {
    en: "Weeks of instructor-led training. Just to use one feature.",
    ko: "기능 하나 쓰려고 몇 주씩 교육받아야 합니다.",
  },
  "cs.quote.3.role": { en: "Customer Success Head", ko: "고객 성공 총괄" },

  // Quotes - Row 2: UX Problems
  "cs.quote.row2.label": { en: "UX Problems", ko: "UX 문제" },
  "cs.quote.4.text": {
    en: "Users create hundreds of configurations and lose track of what they did. That's a security risk.",
    ko: "사용자가 설정을 수백 개 만들어놓고 뭘 한 건지 본인도 모릅니다. 이게 보안 리스크입니다.",
  },
  "cs.quote.4.role": { en: "Product Director", ko: "프로덕트 디렉터" },
  "cs.quote.5.text": {
    en: "Us Engineers just 'make-it-function.' Our UX acts like a sandbox.",
    ko: "엔지니어들은 '되기만 하면 됐지' 식으로 만듭니다. UX가 샌드박스입니다.",
  },
  "cs.quote.5.role": { en: "System Architect", ko: "시스템 아키텍트" },
  "cs.quote.6.text": {
    en: "Tell us how to do things instead of letting us screw up.",
    ko: "알아서 하라고 놔두지 말고 어떻게 해야 하는지 알려주세요.",
  },
  "cs.quote.6.role": { en: "Fortune 500 Customer", ko: "포춘 500 고객" },

  // What We Found
  "cs.found.label": { en: "What We Found", ko: "발견한 것" },
  "cs.found.title": {
    en: "98 user stories. 0 UX decisions.",
    ko: "사용자 스토리 98개. UX 의사결정 0건.",
  },
  "cs.found.p1": {
    en: "The team had written 98 detailed user stories for a single feature. But none of them addressed the questions that actually determine whether users can get their job done: How should the product be organized? What needs to be set up before what? Why does this screen exist here and not there?",
    ko: "하나의 기능에 대해 사용자 스토리를 98개나 썼습니다. 그런데 정작 중요한 질문은 하나도 없었습니다. 제품 구조를 어떻게 짜야 하는지, 뭘 먼저 설정해야 하는지, 이 화면이 왜 여기 있는지.",
  },
  "cs.found.p2": {
    en: "Engineers had been making these calls on the fly for years. Nobody noticed until customers started leaving.",
    ko: "엔지니어들이 몇 년째 그때그때 감으로 결정해왔습니다. Heurica가 빠진 의사결정을 전부 찾아내고, 근거를 문서화해서 결정했습니다.",
  },

  // Process cards
  "cs.process.1.title": { en: "Types of things to configure", ko: "설정해야 할 것만 18가지" },
  "cs.process.1.description": {
    en: "All treated identically by the interface. No hierarchy, no relationships. Users memorized connections through weeks of training.",
    ko: "인터페이스에서 모두 동일하게 취급되었습니다. 계층도, 관계도 없었습니다. 사용자는 몇 주간의 교육을 통해 연결 관계를 암기했습니다.",
  },
  "cs.process.2.title": { en: "Tasks with zero guidance", ko: "안내 없는 작업 77개" },
  "cs.process.2.description": {
    en: "None connected in a logical flow. Complex tasks that required 5 other things to exist first just let you fail silently.",
    ko: "논리적 흐름으로 연결된 것이 없었습니다. 먼저 5가지 다른 것이 존재해야 하는 복잡한 작업은 조용히 실패하게 내버려뒀습니다.",
  },
  "cs.process.3.title": { en: "Features buried in the wrong place", ko: "엉뚱한 곳에 숨겨진 기능 7개" },
  "cs.process.3.description": {
    en: "Organized by how engineers built them, not how admins use them. Users hunted across unrelated sections to find connected capabilities.",
    ko: "관리자가 사용하는 방식이 아닌, 엔지니어가 만든 방식으로 구성되었습니다. 사용자는 연관된 기능을 찾기 위해 관련 없는 섹션을 뒤져야 했습니다.",
  },
  "cs.process.4.title": { en: "Invisible steps before you could start", ko: "시작도 못 하게 막는 보이지 않는 단계 12개" },
  "cs.process.4.description": {
    en: "The product never told you what to set up first. Weeks of training were actually teaching an invisible order of operations that existed nowhere in the interface.",
    ko: "제품은 무엇을 먼저 설정해야 하는지 알려주지 않았습니다. 몇 주간의 교육은 실제로 인터페이스 어디에도 존재하지 않는 보이지 않는 작업 순서를 가르치는 것이었습니다.",
  },

  // The Result
  "cs.result.label": { en: "The Result", ko: "결과" },
  "cs.result.title": {
    en: 'From "squirrel-brain sandbox" to guided workflows.',
    ko: '"다람쥐 뇌 샌드박스"에서 가이드 워크플로우로',
  },
  "cs.result.description": {
    en: "The product went from a sandbox where users could do anything and screw everything up, to guided workflows where the system tells you what to do and in what order. Every design decision documented and traceable.",
    ko: "아무거나 누르다가 다 망치는 샌드박스에서, 뭘 어떤 순서로 해야 하는지 시스템이 알려주는 구조로 바뀌었습니다.",
  },
  "cs.result.deliveredLabel": { en: "What we delivered", ko: "우리가 전달한 것" },
  "cs.result.delivered.1": {
    en: "Product reorganized from 19 flat menu items into 5 clear sections that match how admins actually work",
    ko: "19개 메뉴를 관리자가 실제로 일하는 방식에 맞게 5개로 재구성",
  },
  "cs.result.delivered.2": {
    en: "Step-by-step creation flows. The product tells users what to set up first, instead of letting them fail silently.",
    ko: "단계별 생성 플로우. 뭘 먼저 설정해야 하는지 제품이 알려줌",
  },
  "cs.result.delivered.3": {
    en: "7 misplaced features moved to where users actually look for them",
    ko: "엉뚱한 곳에 있던 기능 7개를 사용자가 실제로 찾는 위치로 이동",
  },
  "cs.result.delivered.4": {
    en: "Every decision linked back to the product spec. No opinions, just traceable logic.",
    ko: "모든 결정을 제품 스펙에 연결. 의견이 아니라 추적 가능한 근거.",
  },

  // Outcome cards
  "cs.outcome.1.title": { en: "2 Weeks, Not 12 Months", ko: "12개월 아닌 2주" },
  "cs.outcome.1.description": {
    en: "Their internal team spent a year and got nowhere. Heurica shipped it in 2 weeks.",
    ko: "내부 팀은 1년을 보냈지만 아무 성과도 없었습니다. Heurica는 2주 만에 완료했습니다.",
  },
  "cs.outcome.2.title": { en: "Explainable Decisions", ko: "설명 가능한 결정" },
  "cs.outcome.2.description": {
    en: 'Every screen, every button, every menu item traces back to a product requirement. No more "it just felt right." Engineering knows exactly what to build and why.',
    ko: '모든 화면, 모든 버튼, 모든 메뉴 항목이 제품 요구사항으로 추적됩니다. 더 이상 "그냥 맞는 것 같아서"는 없습니다. 엔지니어링은 무엇을 왜 만들어야 하는지 정확히 알고 있습니다.',
  },
  "cs.outcome.3.title": { en: "Dev-Ready Output", ko: "개발 바로 투입 가능" },
  "cs.outcome.3.description": {
    en: "Architecture spec and production-ready front-end code. No interpretation gaps, no handoff meetings.",
    ko: "아키텍처 스펙과 프로덕션 준비 완료 프론트엔드 코드. 해석 차이도, 핸드오프 미팅도 없습니다.",
  },
  "cs.outcome.4.title": { en: "Agent UX Designed", ko: "AI 에이전트 UX 설계" },
  "cs.outcome.4.description": {
    en: "Conversational agent workflows for natural language policy management. Designed alongside the console so both experiences share the same logic.",
    ko: "자연어 정책 관리를 위한 대화형 에이전트 워크플로우. 콘솔과 함께 설계되어 두 경험이 동일한 논리를 공유합니다.",
  },

  // Testimonial
  "cs.testimonial.quote": {
    en: "We burnt 1 year trying to fix 'squirrel-brain sandbox design.' Got nowhere. Heurica fixed in 2 weeks.",
    ko: "우리는 '다람쥐 뇌 샌드박스 디자인'을 고치겠다고 1년을 날렸습니다. 아무것도 안 됐습니다. Heurica가 2주 만에 끝냈습니다.",
  },
  "cs.testimonial.role": { en: "VP of Product", ko: "VP of Product" },

  // CTA
  "cs.cta.line1": {
    en: "Your product deserves better UX decisions.",
    ko: "당신의 제품은 더 나은 UX를 받을 자격이 있습니다.",
  },
  "cs.cta.line2": {
    en: "3-day analysis. 2-week redesign.",
    ko: "3일 분석. 2주 리디자인.",
  },
  "cs.cta.button": { en: "Book a Call", ko: "상담 예약하기" },

  // Home page
  "home.hero.title": {
    en: "Designed by engineers. Hated by users.",
    ko: "엔지니어가 만들었다. 사용자가 싫어한다.",
  },
  "home.hero.subtitle": {
    en: "Your console has 47 columns, 20 filter dropdowns, and a toolbar",
    ko: "47개 컬럼, 20개 필터, 교육 3시간짜리 툴바.",
  },
  "home.hero.subtitle2": {
    en: "that needs its own 3 hours training session.",
    ko: "당신의 콘솔 얘기입니다.",
  },
  "home.hero.tagline1": {
    en: "Your team ships fast but nobody owns UX.",
    ko: "팀은 빠르게 출시하지만 UX를 책임지는 사람이 없습니다.",
  },
  "home.hero.tagline2": {
    en: "We embed and fix that.",
    ko: "우리가 합류해서 해결합니다.",
  },
  "home.hero.cta": { en: "Book a Call", ko: "상담 예약하기" },
  "home.casestudy.quote.1": {
    en: "We burnt ",
    ko: "\u2018다람쥐 뇌 샌드박스 디자인\u2019을 고치겠다고 ",
  },
  "home.casestudy.quote.highlight1": {
    en: "1 year",
    ko: "1년",
  },
  "home.casestudy.quote.2": {
    en: " trying to fix \u2018squirrel-brain sandbox design.\u2019 Got nowhere. Heurica fixed in ",
    ko: "을 날렸습니다. 아무것도 안 됐습니다. Heurica가 ",
  },
  "home.casestudy.quote.highlight2": {
    en: "2 weeks",
    ko: "2주",
  },
  "home.casestudy.quote.3": {
    en: ".",
    ko: " 만에 끝냈습니다.",
  },
  "home.casestudy.role": {
    en: "VP of Product, Data Security Enterprise serving Fortune 100",
    ko: "VP of Product, 포춘 100대 기업 고객사 보유 데이터 보안 기업",
  },
  "home.casestudy.stat1.number": { en: "2 weeks", ko: "2주" },
  "home.casestudy.stat1.label": { en: "Full redesign delivered", ko: "풀 리디자인 완료" },
  "home.casestudy.stat2.number": { en: "3 days", ko: "3일" },
  "home.casestudy.stat2.label": { en: "98 user stories analyzed", ko: "사용자 스토리 98개 분석" },
  "home.casestudy.readmore": { en: "Read case study", ko: "케이스 스터디 보기" },
  "home.stays.title": {
    en: "What stays after Heurica leaves.",
    ko: "Heurica가 떠난 후에도 남는 것.",
  },
  "home.stays.description": {
    en: "UX reasoning framework built around your product's context. So your team makes better UX decisions on their own, not just while Heurica is embedded.",
    ko: "제품 맥락에 맞춰 설계된 UX 의사결정 프레임워크. Heurica가 함께할 때만이 아니라, 팀 스스로 더 나은 UX 판단을 내릴 수 있도록.",
  },
  "home.cta.text1": {
    en: "Speed of AI. Judgment of an expert.",
    ko: "AI의 속도. 전문가의 판단.",
  },
  "home.cta.text2": {
    en: "Ship Smart. Not just fast.",
    ko: "빠르기만 한 게 아닌, 똑똑한 출시.",
  },
  "home.cta.button": { en: "Book a Call", ko: "상담 예약하기" },

  // About page
  "about.title": { en: "Why Heurica Exists;", ko: "Heurica가 존재하는 이유." },
  "about.p1": {
    en: "Enterprise UX doesn't break at launch. It breaks in the decisions that were never made. Features get built exactly as specced — but users still can't figure out how to complete tasks. Not because engineers made bad decisions, but because no one was set up to make UX decisions at all.",
    ko: "엔터프라이즈 UX는 출시할 때 망가지지 않습니다. 아무도 내리지 않은 결정에서 망가집니다. 기능은 스펙대로 만들어졌는데 사용자는 여전히 할 일을 못 합니다. 엔지니어가 잘못한 게 아닙니다. 애초에 UX 결정을 내릴 사람이 없었던 겁니다.",
  },
  "about.p2": {
    en: "Heurica brings structure to that gap.",
    ko: "Heurica는 그 빈자리에 구조를 만듭니다.",
  },
  "about.p3": {
    en: "We make UX decisions systematic, explainable, and grounded in how users actually work.",
    ko: "UX 결정을 체계적으로, 설명 가능하게, 사용자가 실제로 일하는 방식에 맞게 내립니다.",
  },
  "about.founder": {
    en: "YUNBIN BAE — FOUNDER, HEURICA",
    ko: "배윤빈 — 파운더, HEURICA",
  },

  // Case Study listing page
  "csl.title": { en: "Case Study;", ko: "케이스 스터디." },
  "csl.subtitle": {
    en: "Redesigned, without months of rework.",
    ko: "처음부터 다시 만들지 않고, 리디자인.",
  },
  "csl.card1.industry": { en: "data security", ko: "데이터 보안" },
  "csl.card1.title": {
    en: "Fortune 100-serving enterprise data security platform",
    ko: "포춘 100대 기업이 사용하는 엔터프라이즈 데이터 보안 플랫폼",
  },
  "csl.card1.excerpt": {
    en: "Decades of engineer-made design left customers unable to finish basic tasks without handholding. Sales hid the demo until the last slide. Their CEO wanted to scrap the whole UI. Heurica redesigned the console and designed the conversational agent experience in 2 weeks.",
    ko: "수십 년간 엔지니어가 만든 디자인 때문에 고객은 도움 없이 기본 작업도 못 했습니다. 영업팀은 마지막까지 데모를 숨겼고, CEO는 UI를 갈아엎고 싶어 했습니다. Heurica가 콘솔과 AI 에이전트 경험을 2주 만에 새로 설계했습니다.",
  },
  "csl.readmore": { en: "Read case study", ko: "케이스 스터디 보기" },
  "csl.card2.industry": { en: "cybersecurity", ko: "사이버보안" },
  "csl.card2.title": {
    en: "Fortune 500-serving threat detection platform",
    ko: "포춘 500대 기업이 사용하는 위협 탐지 플랫폼",
  },
  "csl.card2.excerpt": {
    en: "Years of engineering-led design left security operators drowning in alerts they couldn\u2019t act on. The product protected major enterprises but its own dashboard needed weeks of training to use.",
    ko: "엔지니어 주도 디자인 때문에 보안 운영자는 대응할 수 없는 알림에 파묻혔습니다. 대기업을 보호하는 제품인데, 정작 대시보드 쓰려면 몇 주를 교육받아야 했습니다.",
  },
  "csl.comingsoon": { en: "Coming soon", ko: "준비 중" },
  "csl.card3.industry": { en: "financial", ko: "핀테크" },
  "csl.card3.title": {
    en: "Financial services platform processing millions in transactions",
    ko: "수백만 건의 거래를 처리하는 금융 서비스 플랫폼",
  },
  "csl.card3.excerpt": {
    en: "A fast-moving product team building with AI but making UX decisions by gut. Three product areas, no designer, no structured way to decide or evaluate what to build next.",
    ko: "AI로 빠르게 만들지만 UX는 감으로 결정하는 팀. 제품 영역 3개, 디자이너 0명, 뭘 만들어야 할지 판단할 구조가 없었습니다.",
  },

  // Careers page
  "careers.title": { en: "Careers.", ko: "채용." },
  "careers.subtitle": {
    en: "To apply, email us at yunbin@heurica.co.",
    ko: "지원은 yunbin@heurica.co로 이메일 보내주세요.",
  },
  "careers.job1.title": { en: "Founding Design Engineer", ko: "파운딩 디자인 엔지니어" },
  "careers.job1.description": {
    en: "Join as our first design engineer to shape the future of enterprise UX. You'll work at the intersection of design and engineering, building the tools that help teams ship better products.",
    ko: "첫 번째 디자인 엔지니어로 합류해 엔터프라이즈 UX의 미래를 만들어갑니다. 디자인과 엔지니어링의 교차점에서 팀이 더 나은 제품을 만들 수 있는 도구를 만듭니다.",
  },
  "careers.fulltime": { en: "Full-time", ko: "풀타임" },
  "careers.location": { en: "On-Site (San Francisco, CA)", ko: "온사이트 (샌프란시스코, CA)" },
  "careers.job2.title": { en: "Founding UX Researcher", ko: "파운딩 UX 리서처" },
  "careers.job2.description": {
    en: "Lead user research to deeply understand enterprise workflows and pain points. You'll shape product direction through insights that bridge the gap between complex systems and human needs.",
    ko: "엔터프라이즈 워크플로우와 사용자 문제를 깊이 이해하기 위한 리서치를 리드합니다. 복잡한 시스템과 사용자 사이의 간극을 메우는 인사이트로 제품 방향을 만들어갑니다.",
  },

  // Navigation
  "nav.philosophy": { en: "Philosophy", ko: "철학" },
  "nav.casestudy": { en: "Case Study", ko: "케이스 스터디" },
  "nav.about": { en: "About", ko: "소개" },
  "nav.careers": { en: "Careers", ko: "채용" },
  "nav.startnow": { en: "Book a Call", ko: "상담 예약하기" },

  // Footer
  "footer.tagline": { en: "heuristics + eureka", ko: "heuristics + eureka" },
  "footer.pages": { en: "Pages", ko: "페이지" },
  "footer.company": { en: "Company", ko: "회사" },
  "footer.legal": { en: "Legal", ko: "법률" },
  "footer.startproject": { en: "Book a Call", ko: "상담 예약하기" },
  "footer.privacy": { en: "Privacy Policy", ko: "개인정보처리방침" },
  "footer.terms": { en: "Terms of Service", ko: "이용약관" },

  // Home - Comparison Diagram
  "home.compare.without.title1": { en: "1 year stuck rebuilding", ko: "전담 UX 없이" },
  "home.compare.without.title2": { en: "without dedicated UX.", ko: "1년째 재작업." },
  "home.compare.without.subtitle": { en: "Engineers design, stakeholders react, everyone reworks", ko: "엔지니어가 설계하고, 이해관계자가 반응하고, 모두가 재작업" },
  "home.compare.buildv1": { en: "Rebuild", ko: "Rebuild" },
  "home.compare.buildv2": { en: "Rebuild", ko: "Rebuild" },
  "home.compare.buildv3": { en: "Build v3", ko: "Build v3" },
  "home.compare.rework": { en: "Rework", ko: "재작업" },
  "home.compare.without.badge": { en: "~1 year, still going", ko: "~1년째, 아직 진행 중" },
  "home.compare.with.title1": { en: "2 weeks with Heurica.", ko: "Heurica와 함께 2주." },
  "home.compare.with.title2": { en: "Then build what\u2019s next.", ko: "그다음은 빌드." },
  "home.compare.with.subtitle": { en: "Structure first, then build with clarity", ko: "구조를 먼저 잡고, 명확하게 빌드" },
  "home.compare.map": { en: "Map structure", ko: "구조 매핑" },
  "home.compare.build": { en: "Build with clarity", ko: "명확하게 빌드" },
  "home.compare.ship": { en: "Ship", ko: "출시" },
  "home.compare.with.badge": { en: "~2 weeks to clarity", ko: "~2주 만에 명확한 구조" },

  // Home - UX Reasoning Engine
  "home.engine.label": { en: "HOW WE WORK", ko: "일하는 방식" },
  "home.engine.title": {
    en: "Expert UX judgment. Embedded at the speed your team ships.",
    ko: "전문 UX 판단력. 팀의 출시 속도에 맞춰 합류합니다.",
  },

  // Home - Built For
  "home.builtfor.label": { en: "BUILT FOR", ko: "대상" },
  "home.builtfor.title1": { en: "Products where UX is hard.", ko: "UX가 어려운 제품." },
  "home.builtfor.desc1": {
    en: "Not marketing sites. Not consumer apps. Complex B2B products where the real problem is structure, not visuals.",
    ko: "마케팅 사이트가 아닙니다. 소비자 앱이 아닙니다. 진짜 문제가 비주얼이 아닌 구조인 복잡한 B2B 제품.",
  },
  "home.builtfor.desc2": {
    en: "",
    ko: "",
  },
  "home.builtfor.cta": { en: "Book a Call", ko: "상담 예약하기" },
  "home.builtfor.security": { en: "Security", ko: "보안" },
  "home.builtfor.security.desc": {
    en: "Configuration panels, policy engines, role-based access.",
    ko: "설정 패널, 정책 엔진, 역할 기반 접근 제어.",
  },
  "home.builtfor.fintech": { en: "Fintech", ko: "핀테크" },
  "home.builtfor.fintech.desc": {
    en: "Transaction workflows, compliance dashboards, audit trails.",
    ko: "거래 워크플로우, 컴플라이언스 대시보드, 감사 추적.",
  },
  "home.builtfor.healthcare": { en: "Healthcare", ko: "헬스케어" },
  "home.builtfor.healthcare.desc": {
    en: "Patient portals, clinical workflows, EHR integrations.",
    ko: "환자 포털, 임상 워크플로우, EHR 연동.",
  },
  "home.builtfor.platforms": { en: "B2B Platforms", ko: "B2B 플랫폼" },
  "home.builtfor.platforms.desc": {
    en: "Admin consoles, multi-tenant systems, API management.",
    ko: "관리 콘솔, 멀티 테넌트 시스템, API 관리.",
  },

  // Home - Enterprise Ready
  "home.enterprise.title": {
    en: "Why teams choose Heurica.",
    ko: "팀이 Heurica를 선택하는 이유.",
  },
  "home.enterprise.subtitle": {
    en: "",
    ko: "",
  },
  "home.enterprise.card1.title": { en: "Decisions with rationale", ko: "근거 있는 결정" },
  "home.enterprise.card1.desc": {
    en: "Every UX decision comes with rationale. You'll know why, not just what.",
    ko: "모든 UX 결정에 근거가 있습니다. 무엇이 아니라 왜인지 알 수 있습니다.",
  },
  "home.enterprise.card2.title": { en: "Expert judgment, AI speed.", ko: "전문가 판단, AI 속도." },
  "home.enterprise.card2.desc": {
    en: "AI tools get you 70% there. We cover the 30% they miss: business context, edge cases, connected flows.",
    ko: "AI 도구가 70%를 해결합니다. 나머지 30%를 채웁니다: 비즈니스 맥락, 엣지 케이스, 연결된 플로우.",
  },
  "home.enterprise.card3.title": { en: "Embedded, not outsourced", ko: "외주가 아닌 합류" },
  "home.enterprise.card3.desc": {
    en: "We work inside your build cycle. No separate design phase, no handoff deck that sits in a drawer.",
    ko: "빌드 사이클 안에서 함께 일합니다. 별도 디자인 단계도, 서랍에 넣어둘 핸드오프 문서도 없습니다.",
  },

  // Contact page
  "contact.title": { en: "Book a Call", ko: "상담 예약하기" },
  "contact.subtitle": { en: "Or reach out directly", ko: "또는 직접 연락하세요" },

  // Philosophy page
  "philosophy.title": { en: "Philosophy.", ko: "철학." },
  "philosophy.article1.title": { en: "The 50:1 Problem.", ko: "50:1 문제." },
  "philosophy.article1.excerpt": {
    en: "When Nobody Owns UX, Users Pay the Price.",
    ko: "아무도 UX를 책임지지 않으면, 사용자가 대가를 치른다.",
  },
  "philosophy.article1.description": {
    en: "The best-practice ratio is 5 engineers per designer. Most B2B SaaS teams run at 50:1. Some at 500:1. The result? Users clicking 57 times to do something that should take 5.",
    ko: "모범 비율은 엔지니어 5명당 디자이너 1명. 대부분의 B2B SaaS 팀은 50:1로 운영됩니다. 어떤 곳은 500:1. 결과? 5번이면 될 일을 57번 클릭합니다.",
  },
  "philosophy.article2.title": { en: "Each Screen Is Correct. The Product Is Wrong.", ko: "각 화면은 맞다. 제품이 틀렸다." },
  "philosophy.article2.excerpt": {
    en: "Enterprise products don't fail on individual screens. They fail in the gaps between them.",
    ko: "엔터프라이즈 제품은 개별 화면에서 실패하지 않습니다. 화면 사이의 빈틈에서 실패합니다.",
  },
  "philosophy.thoughtpiece": { en: "Thought Piece", ko: "칼럼" },
  "philosophy.minread.8": { en: "8 min read", ko: "8분 읽기" },
  "philosophy.minread.7": { en: "7 min read", ko: "7분 읽기" },
  "philosophy.date1": { en: "Jan 2026", ko: "2026년 1월" },
  "philosophy.date2": { en: "Feb 2026", ko: "2026년 2월" },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  const t = (key: string): string => {
    return translations[key]?.[locale] ?? key
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
