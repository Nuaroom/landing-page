"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

interface FlowDiagramProps {
  className?: string
}

export function FlowDiagram({ className = "" }: FlowDiagramProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const filterStyle = !mounted || resolvedTheme === "light"
    ? 'saturate(0.15) brightness(1.1) sepia(0.08)'
    : 'saturate(0.4) brightness(0.7)'

  const arrowColor = !mounted || resolvedTheme === "light" ? "#1A1A1A" : "white"

  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`}>
      {/* Background Image */}
      <img
        src="/greek-bg.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: filterStyle }}
      />

      {/* Flow Diagram Content - Scale down on smaller screens */}
      <div className="relative z-10 flex items-center justify-center px-4 md:px-8 py-8 md:py-16">
        <div className="flex items-center gap-1 md:gap-2 scale-[0.55] sm:scale-[0.7] md:scale-[0.85] lg:scale-100 origin-center">
          {/* Left: PRD and User Stories (stacked) */}
          <div className="flex flex-col gap-4">
            <div
              className="px-5 py-4 rounded-xl border text-center"
              style={{ backgroundColor: '#F0EDE6', borderColor: 'rgba(255, 255, 255, 0.3)' }}
            >
              <span className="text-base font-medium dark:text-gray-900">PRD</span>
            </div>
            <div
              className="px-5 py-4 rounded-xl border text-center"
              style={{ backgroundColor: '#F0EDE6', borderColor: 'rgba(255, 255, 255, 0.3)' }}
            >
              <span className="text-base font-medium whitespace-nowrap dark:text-gray-900">User Stories</span>
            </div>
          </div>

          {/* Left Arrows (converging) */}
          <svg
            className="w-10 h-20 flex-shrink-0"
            viewBox="0 0 40 80"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M 5 20 L 32 40" stroke={arrowColor} strokeWidth="2.5" strokeDasharray="4 3" />
            <path d="M 5 60 L 32 40" stroke={arrowColor} strokeWidth="2.5" strokeDasharray="4 3" />
            <polygon points="37,40 30,36 30,44" fill={arrowColor} />
          </svg>

          {/* Middle: UX Decision Intelligence */}
          <div
            className="px-5 py-5 rounded-xl border text-center flex-shrink-0"
            style={{
              backgroundColor: '#F2E3A2',
              borderColor: 'rgba(255, 255, 255, 0.3)'
            }}
          >
            <span className="text-base font-medium whitespace-nowrap dark:text-gray-900">UX Decision<br />Intelligence</span>
          </div>

          {/* Right Arrows (diverging) */}
          <svg
            className="w-10 h-20 flex-shrink-0"
            viewBox="0 0 40 80"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M 5 40 L 32 20" stroke={arrowColor} strokeWidth="2.5" strokeDasharray="4 3" />
            <path d="M 5 40 L 32 60" stroke={arrowColor} strokeWidth="2.5" strokeDasharray="4 3" />
            <polygon points="37,20 30,16 30,24" fill={arrowColor} />
            <polygon points="37,60 30,56 30,64" fill={arrowColor} />
          </svg>

          {/* Right: Outputs (stacked) */}
          <div className="flex flex-col gap-4">
            <div
              className="px-5 py-4 rounded-xl border text-center"
              style={{
                backgroundColor: '#B3D9EC',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}
            >
              <span className="text-base font-medium whitespace-nowrap dark:text-gray-900">Explainable<br />UX Design</span>
            </div>
            <div
              className="px-5 py-4 rounded-xl border text-center"
              style={{
                backgroundColor: '#B3D9EC',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}
            >
              <span className="text-base font-medium whitespace-nowrap dark:text-gray-900">Dev-Ready<br />Frontend Code</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
