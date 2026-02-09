"use client"

import { useState, useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { FileSearch, GitBranch, Scale, Rocket } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface FlowDiagramProps {
  className?: string
}

const steps: {
  number: string
  label: string
  description: string
  Icon: LucideIcon
  cardText: string
}[] = [
  {
    number: "01",
    label: "UNDERSTAND",
    description: "Requirements & Constraints",
    Icon: FileSearch,
    cardText: "48 user stories, 3 roles\n→ 1 structured spec",
  },
  {
    number: "02",
    label: "ANALYZE",
    description: "Patterns & Structure",
    Icon: GitBranch,
    cardText: "Complex admin console\n→ 6 clear modules",
  },
  {
    number: "03",
    label: "DECIDE",
    description: "Design Rationale",
    Icon: Scale,
    cardText: "Why search-first nav over sidebar?\n→ Decision with 2 references",
  },
  {
    number: "04",
    label: "SHIP",
    description: "Production-Ready UX & Code",
    Icon: Rocket,
    cardText: "12 screens + code + specs\n→ weeks, not quarters",
  },
]

const stepDescriptions: string[] = [
  "PRDs, user stories, and business rules.\nFully parsed, nothing lost.",
  "Workflows, user flows, information architecture.\nComplexity organized into clear modules.",
  "Layout, navigation, interaction.\nEvery choice grounded in proven patterns.",
  "Dev-ready screens, flows, component code.\nReady for sprint planning.",
]

export function FlowDiagram({ className = "" }: FlowDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeStep, setActiveStep] = useState(-1)
  const [lineProgress, setLineProgress] = useState(0)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const containerTop = containerRect.top
      const containerHeight = containerRect.height
      const viewportHeight = window.innerHeight

      // Use scroll progress through the container to determine active step
      // Start activating when container enters viewport, spread steps evenly across scroll
      const scrollStart = viewportHeight * 0.7 // Start when container top hits 70% of viewport
      const scrollProgress = (scrollStart - containerTop) / (containerHeight + scrollStart * 0.3)
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress))

      // Map progress to steps: each step activates at evenly spaced intervals
      const stepProgress = clampedProgress * steps.length
      const newActiveStep = Math.floor(stepProgress) - 1 + (stepProgress % 1 > 0.15 ? 1 : 0)
      setActiveStep(Math.min(newActiveStep, steps.length - 1))

      // Line progress tracks smoothly between steps
      setLineProgress(clampedProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {steps.map((step, index) => {
        const isOdd = index % 2 === 0 // steps 1,3 (index 0,2) = label left, card right
        const isActive = index <= activeStep
        return (
          <div
            key={step.number}
            ref={(el) => { stepRefs.current[index] = el }}
            className="relative"
            style={{ paddingBottom: index < steps.length - 1 ? '48px' : '0' }}
          >
            {/* Timeline line (gray background) */}
            {index < steps.length - 1 && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-[6px] h-full hidden md:block"
                style={{ width: '1.5px', backgroundColor: isDark ? '#404040' : '#C4C4C4' }}
              />
            )}
            {/* Timeline line (gold progress overlay) */}
            {index < steps.length - 1 && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-[6px] h-full hidden md:block overflow-hidden"
                style={{ width: '1.5px' }}
              >
                <div
                  className="w-full transition-all duration-700 ease-out"
                  style={{
                    backgroundColor: 'var(--accent-gold)',
                    height: index < activeStep ? '100%' : index === activeStep ? `${Math.max(0, Math.min(1, (lineProgress * steps.length - index))) * 100}%` : '0%',
                  }}
                />
              </div>
            )}
            {/* Mobile timeline line (gray) */}
            {index < steps.length - 1 && (
              <div
                className="absolute left-[11px] top-[6px] h-full md:hidden"
                style={{ width: '1.5px', backgroundColor: isDark ? '#404040' : '#C4C4C4' }}
              />
            )}
            {/* Mobile timeline line (gold progress) */}
            {index < steps.length - 1 && (
              <div
                className="absolute left-[11px] top-[6px] h-full md:hidden overflow-hidden"
                style={{ width: '1.5px' }}
              >
                <div
                  className="w-full transition-all duration-700 ease-out"
                  style={{
                    backgroundColor: 'var(--accent-gold)',
                    height: index < activeStep ? '100%' : index === activeStep ? `${Math.max(0, Math.min(1, (lineProgress * steps.length - index))) * 100}%` : '0%',
                  }}
                />
              </div>
            )}

            {/* Desktop layout */}
            <div className="hidden md:grid md:grid-cols-[1fr_24px_1fr] md:gap-6 items-start">
              {/* Left side */}
              <div
                className="flex justify-end transition-all duration-700 ease-out"
                style={{
                  opacity: isActive ? 1 : 0.15,
                  transform: isActive ? 'translateY(0)' : 'translateY(12px)',
                }}
              >
                {isOdd ? (
                  <StepLabel number={step.number} label={step.label} description={step.description} longDescription={stepDescriptions[index]} align="right" />
                ) : (
                  <StepCard Icon={step.Icon} cardText={step.cardText} arrow="right" />
                )}
              </div>

              {/* Timeline dot */}
              <div className="flex justify-center items-center" style={{ height: 24 }}>
                <div
                  className="w-2 h-2 rounded-full relative z-10 flex-shrink-0 transition-all duration-500"
                  style={{
                    backgroundColor: isActive ? 'var(--accent-gold)' : (isDark ? '#404040' : '#C4C4C4'),
                    boxShadow: isActive ? '0 0 6px rgba(202, 138, 4, 0.4)' : 'none',
                  }}
                />
              </div>

              {/* Right side */}
              <div
                className="flex justify-start transition-all duration-700 ease-out"
                style={{
                  opacity: isActive ? 1 : 0.15,
                  transform: isActive ? 'translateY(0)' : 'translateY(12px)',
                  transitionDelay: '100ms',
                }}
              >
                {isOdd ? (
                  <StepCard Icon={step.Icon} cardText={step.cardText} arrow="left" />
                ) : (
                  <StepLabel number={step.number} label={step.label} description={step.description} longDescription={stepDescriptions[index]} align="left" />
                )}
              </div>
            </div>

            {/* Mobile layout */}
            <div
              className="flex md:hidden gap-4 items-start transition-all duration-700 ease-out"
              style={{
                opacity: isActive ? 1 : 0.15,
                transform: isActive ? 'translateY(0)' : 'translateY(12px)',
              }}
            >
              {/* Timeline dot */}
              <div className="flex-shrink-0 flex items-center" style={{ width: 12, height: 24 }}>
                <div
                  className="w-2 h-2 rounded-full relative z-10 transition-all duration-500 mx-auto"
                  style={{
                    backgroundColor: isActive ? 'var(--accent-gold)' : (isDark ? '#404040' : '#C4C4C4'),
                    boxShadow: isActive ? '0 0 6px rgba(202, 138, 4, 0.4)' : 'none',
                  }}
                />
              </div>

              {/* Content stacked */}
              <div className="flex-1 space-y-3">
                <StepLabel number={step.number} label={step.label} description={step.description} longDescription={stepDescriptions[index]} align="left" />
                <StepCard Icon={step.Icon} cardText={step.cardText} arrow="left" mobile />
              </div>
            </div>
          </div>
        )
      })}

    </div>
  )
}

function StepLabel({
  number,
  label,
  description,
  longDescription,
  align,
}: {
  number: string
  label: string
  description: string
  longDescription: string
  align: "left" | "right"
}) {
  return (
    <div className={`${align === 'right' ? 'text-right' : 'text-left'}`}>
      <div className={`mb-2 ${align === 'right' ? 'text-right' : ''}`}>
        <span
          className="text-xs font-mono tracking-wider"
          style={{ color: 'var(--accent-gold)' }}
        >
          {number} {label}
        </span>
      </div>
      <h3
        className="text-xl font-normal leading-tight"
        style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
      >
        {description}
      </h3>
      <p className="text-xs text-muted-foreground mt-3 whitespace-pre-line">{longDescription}</p>
    </div>
  )
}

function StepCard({
  Icon,
  cardText,
  arrow,
  mobile = false,
}: {
  Icon: LucideIcon
  cardText: string
  arrow: "left" | "right"
  mobile?: boolean
}) {
  const { resolvedTheme } = useTheme()
  const dark = resolvedTheme === "dark"
  const cardBg = dark ? '#262626' : '#FDFCF9'
  const cardBorder = dark ? '#404040' : '#E5E5E5'

  return (
    <div className={`relative ${mobile ? 'w-full' : 'max-w-[240px]'}`}>
      {/* Speech bubble arrow */}
      {!mobile && (
        <div
          className="absolute top-[14px] hidden md:block"
          style={{
            [arrow === 'left' ? 'left' : 'right']: '-8px',
            width: 0,
            height: 0,
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            ...(arrow === 'left'
              ? { borderRight: `8px solid ${cardBorder}` }
              : { borderLeft: `8px solid ${cardBorder}` }),
          }}
        />
      )}
      {!mobile && (
        <div
          className="absolute top-[14px] hidden md:block"
          style={{
            [arrow === 'left' ? 'left' : 'right']: '-6.5px',
            width: 0,
            height: 0,
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            ...(arrow === 'left'
              ? { borderRight: `8px solid ${cardBg}` }
              : { borderLeft: `8px solid ${cardBg}` }),
          }}
        />
      )}
      <div
        className="rounded-none border px-5 py-4"
        style={{
          backgroundColor: cardBg,
          borderColor: cardBorder,
          boxShadow: dark ? '0 2px 8px rgba(0,0,0,0.2)' : '0 2px 8px rgba(0,0,0,0.06)',
        }}
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <Icon className="w-4 h-4 text-muted-foreground" />
          </div>
          <p className="text-xs text-muted-foreground whitespace-pre-line">
            {cardText}
          </p>
        </div>
      </div>
    </div>
  )
}
