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
    label: "",
    description: "Understand",
    Icon: FileSearch,
    cardText: "",
  },
  {
    number: "02",
    label: "",
    description: "Analyze",
    Icon: GitBranch,
    cardText: "",
  },
  {
    number: "03",
    label: "",
    description: "Design",
    Icon: Scale,
    cardText: "",
  },
]

const stepDescriptions: string[] = [
  "Share your requirements. PRDs, user stories, existing UI.",
  "We figure out what screens to build and how they connect.",
  "Production-ready screens and code, grounded in UX research.",
]

export function FlowDiagram({ className = "" }: FlowDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(-1)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // Each step activates at a distinct scroll threshold
      const triggerPoint = viewportHeight * 0.75
      const distanceIntoView = triggerPoint - containerRect.top

      if (distanceIntoView < 0) {
        setActiveStep(-1)
      } else if (distanceIntoView < 80) {
        setActiveStep(0)
      } else if (distanceIntoView < 180) {
        setActiveStep(1)
      } else {
        setActiveStep(2)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative">
        {/* Mobile layout - vertical with dots and line */}
        <div className="sm:hidden relative">
          {/* Vertical line (gray) */}
          <div
            className="absolute"
            style={{
              width: '1.5px',
              top: '31px',
              bottom: '31px',
              left: '4.5px',
              backgroundColor: isDark ? '#404040' : '#C4C4C4',
            }}
          />
          {/* Vertical line (gold progress) */}
          <div
            className="absolute overflow-hidden"
            style={{
              width: '1.5px',
              top: '31px',
              bottom: '31px',
              left: '4.5px',
              height: activeStep <= 0 ? '0%' : activeStep >= steps.length - 1 ? '100%' : `${(activeStep / (steps.length - 1)) * 100}%`,
              transition: 'height 700ms ease-out',
            }}
          >
            <div className="w-full h-full" style={{ backgroundColor: 'var(--accent-gold)' }} />
          </div>
          {steps.map((step, index) => {
            const isActive = index <= activeStep
            return (
              <div key={step.number} className="flex items-start gap-6 py-6">
                <div className="flex items-center justify-start shrink-0 h-4">
                  <div
                    className="w-[10px] h-[10px] rounded-full relative z-10"
                    style={{
                      backgroundColor: isActive ? 'var(--accent-gold)' : (isDark ? '#404040' : '#C4C4C4'),
                      boxShadow: isActive ? '0 0 6px rgba(202, 138, 4, 0.4)' : 'none',
                      transition: `background-color 500ms ease-out ${index * 200}ms, box-shadow 500ms ease-out ${index * 200}ms`,
                    }}
                  />
                </div>
                <div
                  style={{
                    opacity: isActive ? 1 : 0.3,
                    transform: isActive ? 'translateY(0)' : 'translateY(8px)',
                    transition: `opacity 500ms ease-out ${index * 200}ms, transform 500ms ease-out ${index * 200}ms`,
                  }}
                >
                  <span className="text-xs font-mono tracking-wider" style={{ color: 'var(--accent-gold)' }}>
                    {step.number}
                  </span>
                  <h3 className="text-lg font-normal leading-tight mt-1" style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}>
                    {step.description}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">{stepDescriptions[index]}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Desktop layout - horizontal with one continuous line through dots */}
        <div className="hidden sm:block">
          {/* Continuous line + dots row */}
          <div className="relative flex items-center justify-between">
            {/* Gray base line */}
            <div
              className="absolute h-[1.5px] left-[4px] right-0"
              style={{ backgroundColor: isDark ? '#404040' : '#C4C4C4' }}
            />
            {/* Gold progress line */}
            <div
              className="absolute h-[1.5px] left-[4px]"
              style={{
                width: activeStep <= 0 ? '0%' : activeStep >= steps.length - 1 ? '100%' : `${(activeStep / (steps.length - 1)) * 100}%`,
                backgroundColor: 'var(--accent-gold)',
                transition: 'width 700ms ease-out',
              }}
            />
            {/* Dots */}
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="w-[10px] h-[10px] rounded-full relative z-10 shrink-0"
                style={{
                  backgroundColor: index <= activeStep ? 'var(--accent-gold)' : (isDark ? '#404040' : '#C4C4C4'),
                  boxShadow: index <= activeStep ? '0 0 6px rgba(202, 138, 4, 0.4)' : 'none',
                  transition: `background-color 500ms ease-out ${index * 200}ms, box-shadow 500ms ease-out ${index * 200}ms`,
                }}
              />
            ))}
            {/* Triangle arrowhead at far right */}
            <div
              className="relative z-10 shrink-0"
              style={{
                width: 0,
                height: 0,
                borderTop: '5px solid transparent',
                borderBottom: '5px solid transparent',
                borderLeft: `7px solid ${activeStep >= steps.length - 1 ? 'var(--accent-gold)' : (isDark ? '#404040' : '#C4C4C4')}`,
                transition: 'border-left-color 700ms ease-out',
              }}
            />
          </div>

          {/* Text labels below dots */}
          <div className="flex mt-4">
            {steps.map((step, index) => {
              const isActive = index <= activeStep
              return (
                <div key={step.number} style={{ flex: 1 }}>
                  <div
                    style={{
                      opacity: isActive ? 1 : 0.3,
                      transform: isActive ? 'translateY(0)' : 'translateY(8px)',
                      transition: `opacity 500ms ease-out ${index * 200}ms, transform 500ms ease-out ${index * 200}ms`,
                    }}
                  >
                    <span className="text-xs font-mono tracking-wider" style={{ color: 'var(--accent-gold)' }}>
                      {step.number}
                    </span>
                    <h3
                      className="text-xl md:text-2xl font-normal leading-tight mt-1"
                      style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
                    >
                      {step.description}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">{stepDescriptions[index]}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
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
