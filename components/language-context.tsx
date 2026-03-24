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
    en: "without rebuilding it.",
    ko: "처음부터 다시 만들지 않고.",
  },
  "cs.hero.description": {
    en: "Years of engineer-made design left customers unable to finish basic tasks without handholding. Sales hid the demo until the last slide. Their CEO wanted to scrap the whole UI. Heurica shipped the redesign in 2 weeks.",
    ko: "수년간 엔지니어가 만든 디자인으로 인해 고객들은 도움 없이는 기본 작업조차 완료할 수 없었습니다. 영업팀은 마지막 슬라이드까지 데모를 숨겼고, CEO는 UI 전체를 폐기하고 싶어 했습니다. Heurica는 2주 만에 리디자인을 완료했습니다.",
  },
  "cs.hero.meta": {
    en: "Enterprise Data Security · Policy Management Console · 98 user stories · 2 weeks",
    ko: "엔터프라이즈 데이터 보안 · 정책 관리 콘솔 · 98개 사용자 스토리 · 2주",
  },

  // The Problem
  "cs.problem.label": { en: "The Problem", ko: "문제" },
  "cs.problem.title": {
    en: "A world-class product nobody could use.",
    ko: "세계 최고의 제품, 아무도 사용할 수 없었다.",
  },
  "cs.problem.description": {
    en: "The product worked. The technology was best-in-class. The interface was killing them.",
    ko: "제품은 작동했습니다. 기술은 최고 수준이었습니다. 인터페이스가 그들을 죽이고 있었습니다.",
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

  // Quotes - Row 1: Business Impact
  "cs.quote.row1.label": { en: "Business Impact", ko: "비즈니스 임팩트" },
  "cs.quote.1.text": {
    en: "I hide the demo till the very last day.",
    ko: "저는 마지막 날까지 데모를 숨깁니다.",
  },
  "cs.quote.1.role": { en: "Sales Head", ko: "영업 총괄" },
  "cs.quote.2.text": {
    en: "At this point, just scrap the whole UI.",
    ko: "이 시점에서 UI 전체를 그냥 폐기합시다.",
  },
  "cs.quote.2.role": { en: "CEO", ko: "CEO" },
  "cs.quote.3.text": {
    en: "Weeks of instructor-led training. Just to use one feature.",
    ko: "강사 주도 교육이 몇 주씩. 기능 하나를 쓰기 위해서.",
  },
  "cs.quote.3.role": { en: "Customer Success Head", ko: "고객 성공 총괄" },

  // Quotes - Row 2: UX Problems
  "cs.quote.row2.label": { en: "UX Problems", ko: "UX 문제" },
  "cs.quote.4.text": {
    en: "Users create hundreds of configurations and lose track of what they did. That's a security risk.",
    ko: "사용자들이 수백 개의 구성을 만들고 자신이 한 것을 추적하지 못합니다. 이것은 보안 위험입니다.",
  },
  "cs.quote.4.role": { en: "Product Director", ko: "프로덕트 디렉터" },
  "cs.quote.5.text": {
    en: "Us Engineers just 'make-it-function.' Our UX acts like a sandbox.",
    ko: "우리 엔지니어들은 그저 '작동하게만' 만듭니다. UX는 샌드박스처럼 동작합니다.",
  },
  "cs.quote.5.role": { en: "System Architect", ko: "시스템 아키텍트" },
  "cs.quote.6.text": {
    en: "Tell us how to do things instead of letting us screw up.",
    ko: "실수하게 내버려두지 말고 어떻게 해야 하는지 알려주세요.",
  },
  "cs.quote.6.role": { en: "Fortune 500 Customer", ko: "포춘 500 고객" },

  // What We Found
  "cs.found.label": { en: "What We Found", ko: "발견한 것" },
  "cs.found.title": {
    en: "98 user stories. 0 UX decisions.",
    ko: "98개의 사용자 스토리. UX 의사결정 0건.",
  },
  "cs.found.p1": {
    en: "The team had written 98 detailed user stories for a single feature. But none of them addressed the questions that actually determine whether users can get their job done: How should the product be organized? What needs to be set up before what? Why does this screen exist here and not there?",
    ko: "팀은 하나의 기능에 대해 98개의 상세한 사용자 스토리를 작성했습니다. 그러나 그 어느 것도 사용자가 실제로 업무를 완수할 수 있는지를 결정하는 질문에 답하지 않았습니다. 제품은 어떻게 구성되어야 하는가? 무엇을 먼저 설정해야 하는가? 이 화면이 왜 여기에 있고 다른 곳에 없는가?",
  },
  "cs.found.p2": {
    en: "Engineers had been making these calls on the fly for years. Nobody noticed until customers started leaving.",
    ko: "엔지니어들은 수년간 이런 결정들을 즉석에서 내려왔습니다. 고객이 떠나기 시작할 때까지 아무도 눈치채지 못했습니다.",
  },

  // Process cards
  "cs.process.1.title": { en: "Types of things to configure", ko: "구성해야 할 항목 유형" },
  "cs.process.1.description": {
    en: "All treated identically by the interface. No hierarchy, no relationships. Users memorized connections through weeks of training.",
    ko: "인터페이스에서 모두 동일하게 취급되었습니다. 계층도, 관계도 없었습니다. 사용자는 몇 주간의 교육을 통해 연결 관계를 암기했습니다.",
  },
  "cs.process.2.title": { en: "Tasks with zero guidance", ko: "가이드 없는 작업" },
  "cs.process.2.description": {
    en: "None connected in a logical flow. Complex tasks that required 5 other things to exist first just let you fail silently.",
    ko: "논리적 흐름으로 연결된 것이 없었습니다. 먼저 5가지 다른 것이 존재해야 하는 복잡한 작업은 조용히 실패하게 내버려뒀습니다.",
  },
  "cs.process.3.title": { en: "Features buried in the wrong place", ko: "잘못된 위치에 묻힌 기능" },
  "cs.process.3.description": {
    en: "Organized by how engineers built them, not how admins use them. Users hunted across unrelated sections to find connected capabilities.",
    ko: "관리자가 사용하는 방식이 아닌, 엔지니어가 만든 방식으로 구성되었습니다. 사용자는 연관된 기능을 찾기 위해 관련 없는 섹션을 뒤져야 했습니다.",
  },
  "cs.process.4.title": { en: "Invisible steps before you could start", ko: "시작 전 보이지 않는 단계" },
  "cs.process.4.description": {
    en: "The product never told you what to set up first. Weeks of training were actually teaching an invisible order of operations that existed nowhere in the interface.",
    ko: "제품은 무엇을 먼저 설정해야 하는지 알려주지 않았습니다. 몇 주간의 교육은 실제로 인터페이스 어디에도 존재하지 않는 보이지 않는 작업 순서를 가르치는 것이었습니다.",
  },

  // The Result
  "cs.result.label": { en: "The Result", ko: "결과" },
  "cs.result.title": {
    en: 'From "squirrel-brain sandbox" to guided workflows.',
    ko: '"다람쥐 뇌 샌드박스"에서 가이드 워크플로우로.',
  },
  "cs.result.description": {
    en: "The product went from a sandbox where users could do anything and screw everything up, to guided workflows where the system tells you what to do and in what order. Every design decision documented and traceable.",
    ko: "제품은 사용자가 무엇이든 할 수 있고 모든 것을 망칠 수 있는 샌드박스에서, 시스템이 무엇을 어떤 순서로 해야 하는지 알려주는 가이드 워크플로우로 변했습니다. 모든 디자인 결정이 문서화되고 추적 가능합니다.",
  },
  "cs.result.deliveredLabel": { en: "What we delivered", ko: "우리가 전달한 것" },
  "cs.result.delivered.1": {
    en: "Product reorganized from 19 flat menu items into 5 clear sections that match how admins actually think about their work",
    ko: "19개의 플랫 메뉴 항목을 관리자가 실제로 업무를 생각하는 방식에 맞는 5개의 명확한 섹션으로 재구성",
  },
  "cs.result.delivered.2": {
    en: "Step-by-step creation flows. The product tells users what to set up first, instead of letting them fail silently.",
    ko: "단계별 생성 흐름. 제품이 사용자에게 무엇을 먼저 설정해야 하는지 알려주며, 조용히 실패하게 내버려두지 않습니다.",
  },
  "cs.result.delivered.3": {
    en: "Relationships between features visible on screen. No more jumping between 5 different pages to understand how things connect.",
    ko: "기능 간 관계가 화면에 표시됩니다. 연결 관계를 이해하기 위해 5개의 다른 페이지를 오갈 필요가 없습니다.",
  },
  "cs.result.delivered.4": {
    en: "7 misplaced features moved to where users actually look for them.",
    ko: "잘못 배치된 7개의 기능을 사용자가 실제로 찾는 위치로 이동.",
  },
  "cs.result.delivered.5": {
    en: "Complete screen-by-screen architecture for 75+ pages, ready for engineering to build",
    ko: "75개 이상의 페이지에 대한 완전한 화면별 아키텍처, 엔지니어링 구축 준비 완료",
  },
  "cs.result.delivered.6": {
    en: "Every decision linked back to the product spec. No opinions, just traceable logic.",
    ko: "모든 결정이 제품 스펙에 연결됩니다. 의견이 아닌, 추적 가능한 논리만.",
  },

  // Outcome cards
  "cs.outcome.1.title": { en: "2 Weeks, Not 12 Months", ko: "12개월이 아닌 2주" },
  "cs.outcome.1.description": {
    en: "Full product architecture for an enterprise platform with dozens of features. Their internal team spent a year and got nowhere. Heurica shipped it in 2 weeks.",
    ko: "수십 가지 기능을 갖춘 엔터프라이즈 플랫폼의 전체 제품 아키텍처. 내부 팀은 1년을 보냈지만 아무 성과도 없었습니다. Heurica는 2주 만에 완료했습니다.",
  },
  "cs.outcome.2.title": { en: "Explainable Decisions", ko: "설명 가능한 의사결정" },
  "cs.outcome.2.description": {
    en: 'Every screen, every button, every menu item traces back to a product requirement. No more "it just felt right." Engineering knows exactly what to build and why.',
    ko: '모든 화면, 모든 버튼, 모든 메뉴 항목이 제품 요구사항으로 추적됩니다. 더 이상 "그냥 맞는 것 같아서"는 없습니다. 엔지니어링은 무엇을 왜 만들어야 하는지 정확히 알고 있습니다.',
  },
  "cs.outcome.3.title": { en: "Dev-Ready Output", ko: "개발 준비 완료 산출물" },
  "cs.outcome.3.description": {
    en: "Not wireframes. Not Figma files. Architecture spec and production-ready front-end code. No interpretation gaps, no handoff meetings.",
    ko: "와이어프레임이 아닙니다. 피그마 파일이 아닙니다. 아키텍처 스펙과 프로덕션 준비 완료 프론트엔드 코드. 해석 차이도, 핸드오프 미팅도 없습니다.",
  },

  // Testimonial
  "cs.testimonial.quote": {
    en: "We burnt a year trying to fix 'squirrel-brain sandbox design.' Got nowhere. Heurica fixed in 2 weeks.",
    ko: "우리는 '다람쥐 뇌 샌드박스 디자인'을 고치려고 1년을 낭비했습니다. 아무 진전도 없었습니다. Heurica가 2주 만에 해결했습니다.",
  },
  "cs.testimonial.role": { en: "VP of Product", ko: "VP of Product" },

  // CTA
  "cs.cta.line1": {
    en: "Your product deserves better UX decisions.",
    ko: "당신의 제품은 더 나은 UX 의사결정을 받을 자격이 있습니다.",
  },
  "cs.cta.line2": {
    en: "3-day analysis. 2-week redesign.",
    ko: "3일 분석. 2주 리디자인.",
  },
  "cs.cta.button": { en: "Start a Project", ko: "프로젝트 시작하기" },
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
