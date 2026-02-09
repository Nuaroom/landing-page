"use client"

import React, { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ClipboardCheck, Eye, ShieldCheck, Layers, UserCheck, Target, TrendingUp, HeartPulse, Blocks } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { FlowDiagram } from "@/components/FlowDiagram"
import { Footer } from "@/components/Footer"
import { HeroCircles } from "@/components/HeroCircles"

export function ThemedImage({ lightSrc, darkSrc, alt, className }: { lightSrc: string; darkSrc: string; alt: string; className?: string }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    // Return light image during SSR to prevent hydration mismatch
    return <img src={lightSrc || "/placeholder.svg"} alt={alt} className={className} />
  }

  return <img src={resolvedTheme === "dark" ? darkSrc : lightSrc} alt={alt} className={className} />
}

const rotatingTexts = [
  "PRD to demo. 2 weeks.",
  "Your requirements, finally designed right.",
  "Built on UX science, not guesswork.",
  "You wrote the spec. Ship it already.",
]

function RotatingText() {
  const [displayText, setDisplayText] = useState("")
  const textIndexRef = useRef(0)
  const phaseRef = useRef<"typing" | "pausing" | "deleting">("typing")
  const charIndexRef = useRef(0)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const tick = () => {
      const currentText = rotatingTexts[textIndexRef.current]

      if (phaseRef.current === "typing") {
        charIndexRef.current++
        setDisplayText(currentText.slice(0, charIndexRef.current))
        if (charIndexRef.current >= currentText.length) {
          phaseRef.current = "pausing"
          timeout = setTimeout(tick, 2500)
        } else {
          timeout = setTimeout(tick, 50)
        }
      } else if (phaseRef.current === "pausing") {
        phaseRef.current = "deleting"
        timeout = setTimeout(tick, 0)
      } else if (phaseRef.current === "deleting") {
        charIndexRef.current--
        setDisplayText(currentText.slice(0, charIndexRef.current))
        if (charIndexRef.current <= 0) {
          textIndexRef.current = (textIndexRef.current + 1) % rotatingTexts.length
          phaseRef.current = "typing"
          timeout = setTimeout(tick, 300)
        } else {
          timeout = setTimeout(tick, 20)
        }
      }
    }

    timeout = setTimeout(tick, 50)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="h-[2em] flex items-center justify-center min-w-[300px]">
      <p
        className="text-xl md:text-2xl font-normal whitespace-nowrap"
        style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
      >
        {displayText}
        <span
          className="inline-block w-[2px] h-[1.1em] bg-current ml-0.5 align-middle"
          style={{ animation: 'blink 1s step-end infinite' }}
        />
      </p>
    </div>
  )
}


function Step1Mockup() {
  // phase: 0=upload, 1=extracting (rows appear one by one), 2=agent flags
  const [phase, setPhase] = useState(0)
  const [visibleRows, setVisibleRows] = useState(0)
  const [agentStep, setAgentStep] = useState(0) // 0=none, 1=extracted, 2=flagged, 3=detail

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    let rowInterval: ReturnType<typeof setInterval>

    const cycle = () => {
      // Reset
      setPhase(0)
      setVisibleRows(0)
      setAgentStep(0)

      // Phase 0: Upload screen for 2.5s
      timeout = setTimeout(() => {
        // Phase 1: Extracting — rows appear one by one
        setPhase(1)
        let row = 0
        rowInterval = setInterval(() => {
          row++
          setVisibleRows(row)
          if (row >= 12) {
            clearInterval(rowInterval)
            // After all rows loaded, agent starts speaking
            setTimeout(() => {
              setAgentStep(1) // "Extracted 18 objects"
              setTimeout(() => {
                setPhase(2)
                setAgentStep(2) // "7 flagged for review"
                setTimeout(() => {
                  setAgentStep(3) // Detail card
                  // Hold for 4s then restart
                  timeout = setTimeout(cycle, 4000)
                }, 800)
              }, 800)
            }, 400)
          }
        }, 120)
      }, 2500)
    }
    cycle()
    return () => { clearTimeout(timeout); clearInterval(rowInterval) }
  }, [])

  const objects = [
    { name: 'Policy', refs: 44 },
    { name: 'Data Element', refs: 36 },
    { name: 'Role', refs: 12 },
    { name: 'Rule', refs: 11 },
    { name: 'Data Store', refs: 10 },
    { name: 'Member Source', refs: 10 },
    { name: 'Alphabet', refs: 9 },
    { name: 'Mask', refs: 9 },
    { name: 'Deployment', refs: 6, flagged: true },
    { name: 'Allowed Server', refs: 6 },
    { name: 'Trusted Application', refs: 3 },
    { name: 'Key Store', refs: 1, flagged: true },
  ]

  return (
    <div className="relative" style={{ minHeight: 560 }}>
      {/* Phase 0: Upload screen — light mode, clean, prominent text */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{ opacity: phase === 0 ? 1 : 0, transform: phase === 0 ? 'scale(1)' : 'scale(0.97)', pointerEvents: phase === 0 ? 'auto' : 'none' }}
      >
        <div className="rounded-lg border overflow-hidden h-full flex flex-col items-center justify-center p-6" style={{ minHeight: 560, backgroundColor: 'var(--mock-bg)', borderColor: 'var(--mock-border)' }}>
          <div className="text-lg font-semibold mb-6" style={{ color: 'var(--mock-text-1)' }}>Upload your requirements</div>
          <div className="border-2 border-dashed rounded-xl px-8 py-6 w-full max-w-[320px] flex flex-col items-center gap-4" style={{ borderColor: 'var(--mock-border-dashed)' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--mock-bg-hover)' }}>
              <svg className="w-5 h-5" style={{ color: 'var(--mock-text-5)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
            </div>
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="flex flex-wrap justify-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5" style={{ backgroundColor: 'var(--mock-bg-hover)' }}>
                  <svg className="w-3.5 h-3.5" style={{ color: 'var(--mock-text-4)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  <span className="text-sm font-medium" style={{ color: 'var(--mock-text-2)' }}>PRD</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5" style={{ backgroundColor: 'var(--mock-bg-hover)' }}>
                  <svg className="w-3.5 h-3.5" style={{ color: 'var(--mock-text-4)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                  <span className="text-sm font-medium" style={{ color: 'var(--mock-text-2)' }}>User Stories</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5" style={{ backgroundColor: 'var(--mock-bg-hover)' }}>
                  <svg className="w-3.5 h-3.5" style={{ color: 'var(--mock-text-4)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" /></svg>
                  <span className="text-sm font-medium" style={{ color: 'var(--mock-text-2)' }}>Feature Specs</span>
                </span>
              </div>
              <div className="text-xs mt-1" style={{ color: 'var(--mock-text-5)' }}>.pdf, .docx, .md</div>
            </div>
          </div>
        </div>
      </div>

      {/* Phase 1+2: Extraction result — light mode app mockup */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{ opacity: phase >= 1 ? 1 : 0, transform: phase >= 1 ? 'scale(1)' : 'scale(1.02)', pointerEvents: phase >= 1 ? 'auto' : 'none' }}
      >
        <div className="rounded-lg border overflow-hidden text-left" style={{ backgroundColor: 'var(--mock-bg)', borderColor: 'var(--mock-border)' }}>
          <div className="flex" style={{ minHeight: 560 }}>
            {/* Sidebar */}
            <div className="w-[80px] flex-shrink-0 border-r p-3" style={{ borderColor: 'var(--mock-border-light)', backgroundColor: 'var(--mock-bg-alt)' }}>
              <div className="text-[10px] font-semibold mb-3" style={{ color: 'var(--mock-text-2)' }}>Heurica</div>
              <div className="text-[7px] font-medium uppercase tracking-wider mb-1.5" style={{ color: 'var(--mock-text-5)' }}>Analysis</div>
              <div className="rounded px-1.5 py-0.5 text-[8px] font-medium mb-0.5" style={{ backgroundColor: 'var(--mock-bg-accent)', color: 'var(--mock-text-2)' }}>Objects</div>
              <div className="text-[8px] mt-1 pl-1.5" style={{ color: 'var(--mock-text-5)' }}>Navigation</div>
              <div className="text-[8px] mt-0.5 pl-1.5" style={{ color: 'var(--mock-text-5)' }}>Flows</div>
            </div>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              <div className="px-3 pt-2 pb-1.5 border-b" style={{ borderColor: 'var(--mock-border-light)' }}>
                <div className="text-[11px] font-semibold" style={{ color: 'var(--mock-text-1)' }}>Objects</div>
                <div className="text-[8px] mt-0.5" style={{ color: 'var(--mock-text-5)' }}>
                  {phase === 1 && visibleRows < 12 ? `Extracting objects... (${visibleRows}/18)` : '18 objects extracted from requirements'}
                </div>
              </div>
              <div className="grid grid-cols-[1fr_32px] px-3 py-1 text-[7px] font-medium uppercase tracking-wider border-b" style={{ color: 'var(--mock-text-5)', borderColor: 'var(--mock-border-light)' }}>
                <span>Name</span>
                <span className="text-right">Refs</span>
              </div>
              <div className="max-h-[190px] overflow-hidden">
                {objects.map((obj, i) => {
                  const isVisible = i < visibleRows
                  const isFlagged = obj.flagged && phase === 2
                  return (
                    <div
                      key={obj.name}
                      className="transition-all duration-300 ease-out"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(4px)',
                        maxHeight: isVisible ? 24 : 0,
                      }}
                    >
                      <div className={`grid grid-cols-[1fr_32px] px-3 py-[3px] items-center border-b transition-colors duration-500`} style={{ borderColor: 'var(--mock-border-light)', backgroundColor: isFlagged ? 'var(--mock-amber-bg, #fffbeb)' : undefined }}>
                        <div className="flex items-center gap-1.5">
                          <div className="w-[6px] h-[6px] rounded-full flex-shrink-0 transition-colors duration-500" style={{ backgroundColor: isFlagged ? '#f59e0b' : 'var(--mock-border)' }} />
                          <span className="text-[9px]" style={{ color: 'var(--mock-text-3)' }}>{obj.name}</span>
                        </div>
                        <span className="text-[8px] text-right" style={{ color: 'var(--mock-text-5)' }}>{obj.refs}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Agent panel */}
            <div className="w-[110px] flex-shrink-0 border-l p-3" style={{ borderColor: 'var(--mock-border-light)', backgroundColor: 'var(--mock-bg-alt)' }}>
              <div className="text-[9px] font-semibold mb-2" style={{ color: 'var(--mock-text-4)' }}>Agent</div>
              {/* Loading indicator while extracting */}
              {phase === 1 && visibleRows < 12 && (
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="w-2 h-2 rounded-full border border-t-amber-400 flex-shrink-0" style={{ borderColor: 'var(--mock-border-dashed)', borderTopColor: '#f59e0b', animation: 'spin 1s linear infinite' }} />
                  <span className="text-[8px]" style={{ color: 'var(--mock-text-5)' }}>Extracting...</span>
                </div>
              )}
              {/* Step 1: Extracted */}
              <div
                className="transition-all duration-500 ease-out overflow-hidden"
                style={{ maxHeight: agentStep >= 1 ? 20 : 0, opacity: agentStep >= 1 ? 1 : 0 }}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="w-[6px] h-[6px] rounded-full bg-emerald-500 flex-shrink-0" />
                  <span className="text-[8px]" style={{ color: 'var(--mock-text-4)' }}>Extracted 18 objects</span>
                </div>
              </div>
              {/* Step 2: Flagged */}
              <div
                className="transition-all duration-500 ease-out overflow-hidden"
                style={{ maxHeight: agentStep >= 2 ? 20 : 0, opacity: agentStep >= 2 ? 1 : 0 }}
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-[6px] h-[6px] rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="text-[8px] text-amber-600 font-medium">7 flagged for review</span>
                </div>
              </div>
              {/* Step 3: Detail card */}
              <div
                className="transition-all duration-500 ease-out overflow-hidden"
                style={{ maxHeight: agentStep >= 3 ? 60 : 0, opacity: agentStep >= 3 ? 1 : 0 }}
              >
                <div className="rounded border p-2 shadow-sm" style={{ backgroundColor: 'var(--mock-bg)', borderColor: 'var(--mock-border)' }}>
                  <div className="flex items-start gap-1.5">
                    <div className="w-[6px] h-[6px] rounded-full bg-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-[8px] font-medium leading-snug" style={{ color: 'var(--mock-text-3)' }}>
                      <span className="rounded px-0.5" style={{ backgroundColor: 'var(--mock-bg-hover)' }}>Deployment</span> might be system-generated
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Step2Mockup() {
  const [moved, setMoved] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const run = (shouldMove: boolean) => {
      setMoved(shouldMove)
      timeout = setTimeout(() => run(!shouldMove), shouldMove ? 4000 : 2500)
    }
    run(false)
    return () => clearTimeout(timeout)
  }, [])

  const navItemClass = "rounded px-1.5 py-[3px] text-center text-[8px] leading-tight"
  const navItemStyle = { backgroundColor: 'var(--mock-bg-hover)', color: 'var(--mock-text-4)' } as React.CSSProperties
  const sectionHeaderStyle = { borderColor: 'var(--mock-border)', backgroundColor: 'var(--mock-bg-alt)', color: 'var(--mock-text-3)' } as React.CSSProperties

  return (
    <div className="rounded-lg border overflow-hidden text-left" style={{ height: 560, backgroundColor: 'var(--mock-bg)', borderColor: 'var(--mock-border)' }}>
      <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: 'var(--mock-border-light)', backgroundColor: 'var(--mock-bg-alt)' }}>
        <span className="text-[11px] font-semibold" style={{ color: 'var(--mock-text-3)' }}>Navigation Structure</span>
        <span className={`text-[9px] px-2 py-0.5 rounded font-medium transition-colors duration-500 ${
          moved ? 'text-emerald-600 bg-emerald-50' : 'text-amber-600 bg-amber-50'
        }`}>
          {moved ? 'Resolved' : '1 to review'}
        </span>
      </div>
      <div className="p-4">
        {/* Dashboard header */}
        <div className="flex justify-center mb-3">
          <div className="px-5 py-1.5 rounded text-[10px] font-medium" style={{ backgroundColor: 'var(--mock-btn-bg)', color: 'var(--mock-btn-text)' }}>
            Dashboard
          </div>
        </div>
        <div className="flex justify-center mb-2">
          <div className="w-px h-3" style={{ backgroundColor: 'var(--mock-border-dashed)' }} />
        </div>
        {/* 6-column navigation structure */}
        <div className="grid grid-cols-6 gap-1.5">
          {/* Policy */}
          <div>
            <div className="border rounded text-center py-1 text-[9px] font-medium mb-1.5" style={sectionHeaderStyle}>Policy</div>
            <div className="space-y-1">
              <div className={navItemClass} style={navItemStyle}>Policies</div>
              <div className={navItemClass} style={navItemStyle}>Data Elem.</div>
              <div className={navItemClass} style={navItemStyle}>Rules</div>
              <div className={navItemClass} style={navItemStyle}>Alphabets</div>
              <div
                className="transition-all duration-700 ease-out overflow-hidden"
                style={{ maxHeight: moved ? 22 : 0, opacity: moved ? 1 : 0 }}
              >
                <div className="flex items-center justify-center gap-1 bg-emerald-50 rounded px-1.5 py-[3px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span className="text-[8px] font-medium leading-tight" style={{ color: 'var(--mock-text-3)' }}>Roles</span>
                </div>
              </div>
            </div>
          </div>
          {/* Data Store */}
          <div>
            <div className="border rounded text-center py-1 text-[9px] font-medium mb-1.5" style={sectionHeaderStyle}>Data Store</div>
            <div className="space-y-1">
              <div className={navItemClass} style={navItemStyle}>Data Stores</div>
              <div className={navItemClass} style={navItemStyle}>Trusted Apps</div>
              <div className={navItemClass} style={navItemStyle}>Deployments</div>
            </div>
          </div>
          {/* Access Control */}
          <div>
            <div className="border rounded text-center py-1 text-[9px] font-medium mb-1.5" style={sectionHeaderStyle}>Access</div>
            <div className="space-y-1">
              <div className={navItemClass} style={navItemStyle}>Members</div>
              <div
                className="transition-all duration-700 ease-out overflow-hidden"
                style={{ maxHeight: moved ? 0 : 22, opacity: moved ? 0 : 1 }}
              >
                <div className="flex items-center justify-center gap-1 bg-amber-50 rounded px-1.5 py-[3px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="text-[8px] leading-tight" style={{ color: 'var(--mock-text-4)' }}>Roles</span>
                </div>
              </div>
            </div>
          </div>
          {/* Configuration */}
          <div>
            <div className="border rounded text-center py-1 text-[9px] font-medium mb-1.5" style={sectionHeaderStyle}>Config</div>
            <div className="space-y-1">
              <div className={navItemClass} style={navItemStyle}>Masks</div>
              <div className={navItemClass} style={navItemStyle}>Alphabets</div>
            </div>
          </div>
          {/* Key Management */}
          <div>
            <div className="border rounded text-center py-1 text-[9px] font-medium mb-1.5" style={sectionHeaderStyle}>Key Mgmt</div>
            <div className="space-y-1">
              <div className={navItemClass} style={navItemStyle}>Key Store</div>
              <div className={navItemClass} style={navItemStyle}>Master Key</div>
            </div>
          </div>
          {/* Admin */}
          <div>
            <div className="border rounded text-center py-1 text-[9px] font-medium mb-1.5" style={sectionHeaderStyle}>Admin</div>
            <div className="space-y-1">
              <div className={navItemClass} style={navItemStyle}>Audit Logs</div>
            </div>
          </div>
        </div>
      </div>
      {/* Agent annotation */}
      <div className="border-t px-4 py-2.5" style={{ borderColor: 'var(--mock-border-light)', backgroundColor: 'var(--mock-bg-alt)' }}>
        <div className="flex items-start gap-2">
          <div className={`w-2 h-2 rounded-full mt-0.5 flex-shrink-0 transition-colors duration-500 ${moved ? 'bg-emerald-500' : 'bg-amber-400'}`} />
          <p className="text-[10px] leading-relaxed" style={{ color: 'var(--mock-text-4)' }}>
            {moved
              ? <>&ldquo;Roles&rdquo; moved under Policy &mdash; referenced alongside Rules in 12 stories.</>
              : <>&ldquo;Roles&rdquo; placement needs review &mdash; referenced alongside Rules and Policies.</>
            }
          </p>
        </div>
      </div>
    </div>
  )
}

function Step3Mockup() {
  const [activeFlow, setActiveFlow] = useState(0)
  const [highlightedScreen, setHighlightedScreen] = useState(-1)

  const flows = [
    {
      name: 'Create Policy',
      priority: 'P0',
      screens: ['Policy List', 'New Policy', 'Add Rules', 'Assign Roles', 'Review & Save'],
    },
    {
      name: 'Manage Data Store',
      priority: 'P1',
      screens: ['Data Stores', 'Store Details', 'Configure', 'Deploy'],
    },
    {
      name: 'Audit & Compliance',
      priority: 'P2',
      screens: ['Audit Logs', 'Log Detail', 'Export Report'],
    },
  ]

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    let screenTimeout: ReturnType<typeof setTimeout>

    const cycle = () => {
      setActiveFlow((prev) => {
        const nextFlow = (prev + 1) % flows.length
        // Sequentially highlight screens in the new flow
        let screenIdx = -1
        setHighlightedScreen(-1)
        const highlightNext = () => {
          screenIdx++
          if (screenIdx < flows[nextFlow].screens.length) {
            setHighlightedScreen(screenIdx)
            screenTimeout = setTimeout(highlightNext, 350)
          } else {
            // Hold for a moment then move to next flow
            timeout = setTimeout(cycle, 2000)
          }
        }
        setTimeout(highlightNext, 400)
        return nextFlow
      })
    }

    // Start first flow animation
    let screenIdx = -1
    const highlightFirst = () => {
      screenIdx++
      if (screenIdx < flows[0].screens.length) {
        setHighlightedScreen(screenIdx)
        screenTimeout = setTimeout(highlightFirst, 350)
      } else {
        timeout = setTimeout(cycle, 2000)
      }
    }
    setTimeout(highlightFirst, 600)

    return () => { clearTimeout(timeout); clearTimeout(screenTimeout) }
  }, [])

  return (
    <div className="rounded-lg border overflow-hidden text-left" style={{ height: 560, backgroundColor: 'var(--mock-bg)', borderColor: 'var(--mock-border)' }}>
      <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: 'var(--mock-border-light)', backgroundColor: 'var(--mock-bg-alt)' }}>
        <span className="text-[11px] font-semibold" style={{ color: 'var(--mock-text-3)' }}>User Flows &mdash; Screen Sequence</span>
        <span className="text-[9px]" style={{ color: 'var(--mock-text-5)' }}>{flows.length} flows &middot; {flows.reduce((a, f) => a + f.screens.length, 0)} screens</span>
      </div>
      <div className="p-4">
        {/* Flow list */}
        <div className="space-y-3">
          {flows.map((flow, fi) => (
            <div key={flow.name} className={`transition-all duration-300 ${fi === activeFlow ? 'opacity-100' : 'opacity-50'}`}>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded" style={{
                  backgroundColor: flow.priority === 'P0' ? 'var(--mock-amber-bg, #fef3c7)' : 'var(--mock-bg-hover)',
                  color: flow.priority === 'P0' ? 'var(--mock-amber-text, #b45309)' : 'var(--mock-text-4)',
                }}>{flow.priority}</span>
                <span className="text-[10px] font-medium" style={{ color: 'var(--mock-text-2)' }}>{flow.name}</span>
              </div>
              {/* Screen sequence with arrows */}
              <div className="flex items-center gap-1 flex-wrap">
                {flow.screens.map((screen, si) => {
                  const isHighlighted = fi === activeFlow && si <= highlightedScreen
                  const isActive = fi === activeFlow && si === highlightedScreen
                  return (
                    <React.Fragment key={screen}>
                      <div
                        className="border rounded px-2 py-1 transition-all duration-300"
                        style={{
                          backgroundColor: isActive ? 'var(--mock-amber-bg, #fffbeb)' : isHighlighted ? 'var(--mock-bg-alt)' : 'var(--mock-bg)',
                          borderColor: isActive ? '#fcd34d' : isHighlighted ? 'var(--mock-border)' : 'var(--mock-border-light)',
                          boxShadow: isActive ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                        }}
                      >
                        <span className="text-[8px] transition-colors duration-300" style={{
                          color: isHighlighted ? 'var(--mock-text-2)' : 'var(--mock-text-5)',
                          fontWeight: isHighlighted ? 500 : 400,
                        }}>{screen}</span>
                      </div>
                      {si < flow.screens.length - 1 && (
                        <svg className="w-3 h-3 flex-shrink-0 transition-colors duration-300" style={{ color: isHighlighted ? '#fbbf24' : 'var(--mock-border)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </React.Fragment>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Build order footer */}
      <div className="border-t px-4 py-2.5" style={{ borderColor: 'var(--mock-border-light)', backgroundColor: 'var(--mock-bg-alt)' }}>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 rounded-full mt-0.5 flex-shrink-0 bg-amber-400" />
          <p className="text-[10px] leading-relaxed" style={{ color: 'var(--mock-text-4)' }}>
            Build order: <span className="font-medium" style={{ color: 'var(--mock-text-3)' }}>Create Policy</span> first &mdash; referenced by 3 other flows.
          </p>
        </div>
      </div>
    </div>
  )
}

function Step4Mockup() {
  const [showCode, setShowCode] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const cycle = () => {
      setShowCode(false)
      timeout = setTimeout(() => {
        setShowCode(true)
        timeout = setTimeout(cycle, 5000)
      }, 3500)
    }
    cycle()
    return () => clearTimeout(timeout)
  }, [])

  const codeLines = [
    { num: 1, tokens: [{ text: '"use client"', color: '#CE9178' }] },
    { num: 2, tokens: [] },
    { num: 3, tokens: [{ text: 'import', color: '#C586C0' }, { text: ' { columns }', color: '#9CDCFE' }, { text: ' from', color: '#C586C0' }, { text: ' "./columns"', color: '#CE9178' }] },
    { num: 4, tokens: [{ text: 'import', color: '#C586C0' }, { text: ' { DataTable }', color: '#9CDCFE' }, { text: ' from', color: '#C586C0' }, { text: ' "@/ui"', color: '#CE9178' }] },
    { num: 5, tokens: [] },
    { num: 6, tokens: [{ text: 'export default ', color: '#C586C0' }, { text: 'function ', color: '#C586C0' }, { text: 'PolicyList', color: '#DCDCAA' }, { text: '() {', color: '#D4D4D4' }] },
    { num: 7, tokens: [{ text: '  return', color: '#C586C0' }, { text: ' (', color: '#D4D4D4' }] },
    { num: 8, tokens: [{ text: '    <', color: '#D4D4D4' }, { text: 'PageShell', color: '#4EC9B0' }, { text: ' title=', color: '#9CDCFE' }, { text: '"Policies"', color: '#CE9178' }, { text: '>', color: '#D4D4D4' }] },
    { num: 9, tokens: [{ text: '      <', color: '#D4D4D4' }, { text: 'DataTable', color: '#4EC9B0' }] },
    { num: 10, tokens: [{ text: '        columns={', color: '#9CDCFE' }, { text: 'columns', color: '#D4D4D4' }, { text: '}', color: '#9CDCFE' }] },
  ]

  return (
    <div className="rounded-lg border overflow-hidden text-left" style={{ height: 560, backgroundColor: 'var(--mock-bg)', borderColor: 'var(--mock-border)' }}>
      {/* Toggle tabs */}
      <div className="flex border-b" style={{ backgroundColor: 'var(--mock-bg-alt)', borderColor: 'var(--mock-border)' }}>
        <button
          onClick={() => setShowCode(false)}
          className="flex-1 text-[10px] font-medium py-1.5 text-center transition-colors border-b-2"
          style={{
            color: !showCode ? 'var(--mock-text-2)' : 'var(--mock-text-5)',
            borderColor: !showCode ? '#f59e0b' : 'transparent',
            backgroundColor: !showCode ? 'var(--mock-bg)' : 'transparent',
          }}
        >
          Design Preview
        </button>
        <button
          onClick={() => setShowCode(true)}
          className="flex-1 text-[10px] font-medium py-1.5 text-center transition-colors border-b-2"
          style={{
            color: showCode ? 'var(--mock-text-2)' : 'var(--mock-text-5)',
            borderColor: showCode ? '#f59e0b' : 'transparent',
            backgroundColor: showCode ? 'var(--mock-bg)' : 'transparent',
          }}
        >
          Frontend Code
        </button>
      </div>

      <div className="relative" style={{ height: 370 }}>
        {/* Design Preview */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{ opacity: !showCode ? 1 : 0, pointerEvents: !showCode ? 'auto' : 'none' }}
        >
          <div className="h-full flex" style={{ backgroundColor: 'var(--mock-bg)' }}>
            {/* Mini sidebar */}
            <div className="w-[60px] flex-shrink-0 border-r p-2" style={{ borderColor: 'var(--mock-border-light)', backgroundColor: 'var(--mock-bg-alt)' }}>
              <div className="text-[7px] font-bold mb-3" style={{ color: 'var(--mock-text-2)' }}>Heurica</div>
              <div className="space-y-1">
                <div className="rounded px-1.5 py-0.5 text-[7px] font-medium" style={{ backgroundColor: 'var(--mock-bg-accent)', color: 'var(--mock-text-2)' }}>Policies</div>
                <div className="text-[7px] pl-1" style={{ color: 'var(--mock-text-5)' }}>Data Elem.</div>
                <div className="text-[7px] pl-1" style={{ color: 'var(--mock-text-5)' }}>Rules</div>
                <div className="text-[7px] pl-1" style={{ color: 'var(--mock-text-5)' }}>Roles</div>
                <div className="text-[7px] pl-1 mt-2 pt-1 border-t" style={{ color: 'var(--mock-text-6)', borderColor: 'var(--mock-border-light)' }}>Data Store</div>
                <div className="text-[7px] pl-1" style={{ color: 'var(--mock-text-6)' }}>Key Mgmt</div>
              </div>
            </div>
            {/* Main content */}
            <div className="flex-1 p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[11px] font-semibold" style={{ color: 'var(--mock-text-1)' }}>Policies</div>
                <div className="rounded px-2 py-0.5 text-[7px] font-medium" style={{ backgroundColor: 'var(--mock-btn-bg)', color: 'var(--mock-btn-text)' }}>+ New Policy</div>
              </div>
              {/* Search bar */}
              <div className="border rounded px-2 py-1 mb-2 flex items-center gap-1" style={{ borderColor: 'var(--mock-border)' }}>
                <svg className="w-2.5 h-2.5" style={{ color: 'var(--mock-text-6)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <span className="text-[7px]" style={{ color: 'var(--mock-text-6)' }}>Search policies...</span>
              </div>
              {/* Data table */}
              <div className="border rounded overflow-hidden" style={{ borderColor: 'var(--mock-border)' }}>
                <div className="grid grid-cols-[1fr_60px_50px_40px] border-b px-2 py-1" style={{ backgroundColor: 'var(--mock-bg-alt)', borderColor: 'var(--mock-border-light)' }}>
                  <span className="text-[7px] font-medium" style={{ color: 'var(--mock-text-4)' }}>Name</span>
                  <span className="text-[7px] font-medium" style={{ color: 'var(--mock-text-4)' }}>Status</span>
                  <span className="text-[7px] font-medium" style={{ color: 'var(--mock-text-4)' }}>Rules</span>
                  <span className="text-[7px] font-medium" style={{ color: 'var(--mock-text-4)' }}>Roles</span>
                </div>
                {[
                  { name: 'PCI-DSS Compliance', status: 'Active', statusColor: 'bg-emerald-100 text-emerald-700', rules: 12, roles: 3 },
                  { name: 'Data Masking - SSN', status: 'Active', statusColor: 'bg-emerald-100 text-emerald-700', rules: 8, roles: 2 },
                  { name: 'HIPAA Privacy', status: 'Draft', statusColor: 'bg-amber-100 text-amber-700', rules: 15, roles: 4 },
                  { name: 'Tokenization Policy', status: 'Active', statusColor: 'bg-emerald-100 text-emerald-700', rules: 6, roles: 2 },
                  { name: 'Audit Retention', status: 'Review', statusColor: 'bg-stone-100 text-stone-600', rules: 4, roles: 1 },
                ].map((row) => (
                  <div key={row.name} className="grid grid-cols-[1fr_60px_50px_40px] px-2 py-[3px] border-b items-center" style={{ borderColor: 'var(--mock-border-light)' }}>
                    <span className="text-[8px]" style={{ color: 'var(--mock-text-2)' }}>{row.name}</span>
                    <span className={`text-[6px] font-medium rounded-full px-1.5 py-0.5 w-fit ${row.statusColor}`}>{row.status}</span>
                    <span className="text-[7px]" style={{ color: 'var(--mock-text-4)' }}>{row.rules}</span>
                    <span className="text-[7px]" style={{ color: 'var(--mock-text-4)' }}>{row.roles}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Code View */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{ opacity: showCode ? 1 : 0, pointerEvents: showCode ? 'auto' : 'none' }}
        >
          <div className="bg-[#1e1e1e] h-full flex flex-col overflow-hidden">
            {/* Tab bar */}
            <div className="flex h-[22px] bg-[#252526] border-b border-[#3c3c3c] items-center">
              <div className="flex items-center gap-1 px-2 h-full bg-[#1e1e1e] border-r border-[#3c3c3c] relative">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FFE560]" />
                <span className="text-[7px] text-white">PolicyList.tsx</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFE560]" />
              </div>
              <div className="flex items-center gap-1 px-2 h-full text-[7px] text-[#8b949e]">columns.tsx</div>
            </div>
            {/* Code lines */}
            <div className="flex-1 overflow-hidden font-mono p-1">
              {codeLines.map((line) => (
                <div key={line.num} className="flex">
                  <span className="w-6 text-right pr-2 text-[7px] text-[#6e7681] select-none flex-shrink-0 leading-[16px]">{line.num}</span>
                  <span className="text-[7px] leading-[16px] whitespace-pre">
                    {line.tokens.map((t, i) => (
                      <span key={i} style={{ color: t.color }}>{t.text}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const stepBg = `
  radial-gradient(ellipse at 25% 15%, var(--step-bg-highlight) 0%, transparent 45%),
  radial-gradient(ellipse at 75% 85%, var(--step-bg-highlight-2) 0%, transparent 45%),
  radial-gradient(ellipse at 85% 25%, var(--step-bg-highlight-3) 0%, transparent 35%),
  radial-gradient(ellipse at 40% 70%, var(--step-bg-accent) 0%, transparent 40%),
  var(--step-bg-base)
`

function StepShowcase() {
  const totalPositions = 4
  const [activePos, setActivePos] = useState(-1)
  const [selectedMockup, setSelectedMockup] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const scrollStart = viewportHeight * 0.85
      const scrollProgress = (scrollStart - rect.top) / (rect.height * 0.5)
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress))

      const posProgress = clampedProgress * totalPositions
      const newPos = Math.floor(posProgress) - 1 + (posProgress % 1 > 0.1 ? 1 : 0)
      setActivePos((prev) => Math.max(prev, Math.min(newPos, totalPositions - 1)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const visiblePos = selectedMockup !== null ? selectedMockup : Math.max(0, activePos)

  const steps = [
    {
      number: '1',
      title: 'Upload PRD.',
      description: 'Objects extracted and flagged\n\u2014 before any design begins.',
    },
    {
      number: '2',
      title: 'Navigation structured.',
      description: 'Actions grouped by workflows.',
    },
    {
      number: '3',
      title: 'Screens sequenced.',
      description: 'Every user flow mapped to screens.',
    },
    {
      number: '4',
      title: 'Ship dev-ready code.',
      description: 'Integrated with your design system. Ready for sprint planning.',
    },
  ]

  return (
    <div ref={containerRef} className="animate-on-scroll">
      {/* Step cards in blocky layout */}
      <div className="border-t border-b border-border/40">
        <div className="grid grid-cols-4">
          {steps.map((step, i) => (
            <button
              key={step.number}
              onClick={() => setSelectedMockup(i)}
              className={`text-left cursor-pointer border-none p-6 md:p-8 transition-all duration-300 flex flex-col justify-start hover:bg-[var(--step-card-active)] ${i > 0 ? 'border-l border-border/40' : ''}`}
              style={{
                opacity: activePos >= i ? 1 : 0.45,
                backgroundColor: visiblePos === i ? 'var(--step-card-active)' : undefined,
              }}
            >
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-xl font-normal leading-tight transition-colors duration-300" style={{ fontFamily: "var(--font-ibm-plex-serif), serif", color: visiblePos === i ? 'var(--accent-gold)' : activePos >= i ? 'var(--accent-gold)' : undefined }}>{step.number}</span>
                <h3 className={`text-lg font-normal leading-tight transition-colors duration-300 ${activePos >= i ? 'text-foreground' : 'text-muted-foreground/40'}`} style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}>{step.title}</h3>
              </div>
              <p className={`text-sm transition-colors duration-300 ml-5 whitespace-pre-line ${activePos >= i ? 'text-muted-foreground' : 'text-muted-foreground/30'}`}>{step.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Mockup area */}
      <div
        className="relative overflow-hidden px-6 md:px-8 py-6 md:py-8 flex flex-col justify-center mt-0"
        style={{ background: stepBg }}
      >
        <div className="relative" style={{ minHeight: 560 }}>
          {/* Step 1: Upload → Extraction */}
          <div
            className="w-full transition-opacity duration-500"
            style={{ opacity: visiblePos === 0 ? 1 : 0, position: 'relative' }}
          >
            <Step1Mockup />
          </div>
          {/* Step 2: User Flow Treemap */}
          <div
            className="w-full transition-opacity duration-500"
            style={{ opacity: visiblePos === 1 ? 1 : 0, position: 'absolute', top: 0, left: 0, right: 0 }}
          >
            <Step2Mockup />
          </div>
          {/* Step 3: Dependencies + Build Order */}
          <div
            className="w-full transition-opacity duration-500"
            style={{ opacity: visiblePos === 2 ? 1 : 0, position: 'absolute', top: 0, left: 0, right: 0 }}
          >
            <Step3Mockup />
          </div>
          {/* Step 4: Code Preview */}
          <div
            className="w-full transition-opacity duration-500"
            style={{ opacity: visiblePos === 3 ? 1 : 0, position: 'absolute', top: 0, left: 0, right: 0 }}
          >
            <Step4Mockup />
          </div>
        </div>
        {/* Caption */}
        <p className="text-[10px] text-stone-500 mt-3 transition-opacity duration-500">
          {[
            "18 objects extracted. 7 flagged for review. Deployment identified as system-generated.",
            "Roles moved under Policy \u2014 referenced alongside Rules in 12 stories.",
            "Build order: Create Policy first \u2014 referenced by 3 other flows.",
            "PolicyList.tsx \u2014 production React using your component library.",
          ][visiblePos]}
        </p>
      </div>
    </div>
  )
}

const useCaseItems = [
  { name: "Security", description: "Configuration panels, policy engines, role-based access.", Icon: ShieldCheck },
  { name: "Fintech", description: "Transaction workflows, compliance dashboards, audit trails.", Icon: TrendingUp },
  { name: "Healthcare", description: "Patient portals, clinical workflows, EHR integrations.", Icon: HeartPulse },
  { name: "B2B Platforms", description: "Admin consoles, multi-tenant systems, API management.", Icon: Blocks },
]

function UseCasesSection() {
  return (
    <section className="py-20">
      {/* Full-width top/bottom borders for block feel */}
      <div className="border-t border-b border-border/40 animate-on-scroll">
        <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl">
          <div className="overflow-hidden bg-[#FDFCF8] dark:bg-[#1C1917]">
            <div className="grid md:grid-cols-2">
              {/* Left: Title + Description */}
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <p
                  className="text-xs font-mono tracking-wider mb-3"
                  style={{ color: 'var(--accent-gold)' }}
                >
                  BUILT FOR
                </p>
                <h3
                  className="text-2xl md:text-3xl font-normal mb-4 leading-tight text-foreground"
                  style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
                >
                  Complex B2B products.<br />Best practice UX.
                </h3>
                <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
                  Built for trust-critical, workflow-heavy products.<br />
                  Not for marketing sites or consumer UI experimentation.
                </p>
                <Button size="sm" className="px-4 py-1.5 text-xs font-semibold h-8 mt-6 w-fit rounded-none" asChild>
                  <Link href="/contact">
                    Book a demo &rsaquo;
                  </Link>
                </Button>
              </div>

              {/* Right: 2x2 category grid */}
              <div className="grid grid-cols-2">
                {useCaseItems.map((uc) => (
                  <div
                    key={uc.name}
                    className="p-8 border-l border-t border-stone-300/40 dark:border-white/10"
                  >
                    <div className="w-10 h-10 border border-stone-300/60 dark:border-white/15 flex items-center justify-center mb-4">
                      <uc.Icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <h4 className="text-sm font-medium text-foreground">{uc.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{uc.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default function LandingPage() {
  const [isMounted, setIsMounted] = useState(false)

  // Handle hash scrolling when navigating from other pages
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash
      const element = document.querySelector(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [isMounted])

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return null
  }

  return (
    <div className="relative">
      {/* Vertical guide lines at container edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ zIndex: 1 }}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-12 xl:px-16 h-full">
          <div className="h-full border-l border-r border-border/40" />
        </div>
      </div>

      {/* Hero Section - Keep center-aligned */}
      <section className="flex flex-col relative" style={{ backgroundColor: 'var(--background)' }}>
        {/* Full-width grid */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="h-full"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(160,160,160,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(160,160,160,0.12) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, var(--background) 100%)' }} />
        </div>
        <div className="flex items-start justify-center pt-24 md:pt-32 relative z-10">
          <div className="container mx-auto px-8 lg:px-20 text-center max-w-4xl relative">
            <HeroCircles />

            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 leading-tight relative animate-hero-title"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              UX co-pilot for<br className="hidden md:block" /> B2B product teams.
            </h1>

            <div className="flex flex-col gap-1 mb-8 md:mb-10 animate-hero-subtitle text-base text-muted-foreground">
              <p>Configuration panels. Approval workflows. Role-based views.</p>
              <p>Your users shouldn&rsquo;t need a training manual to use them.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-hero-button mb-12 md:mb-14">
              <Button size="sm" className="px-4 py-1.5 text-xs font-semibold h-8 rounded-none" asChild>
                <Link href="/contact">
                  Book a Demo
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>
      {/* The Solution + Value Proposition Sections */}
      <section id="solutions" className="pt-14 pb-20 border-t border-border/40">
        <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl">
          <div className="mb-10 animate-on-scroll text-center">
            <p
              className="text-xs font-mono tracking-wider mb-1"
              style={{ color: 'var(--accent-gold)' }}
            >
              STEP GUIDE
            </p>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              Your PRD. Analyzed. Structured. Then shipped.
            </h2>
            <p className="text-base text-muted-foreground mt-3">
              No Figma handoff. No back-and-forth. Co-design every step.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl">
          <StepShowcase />
        </div>
      </section>
      {/* UX Decision Intelligence Section */}
      <section id="how-it-works" className="py-20 border-t border-border/40">
        <div className="container mx-auto pl-18 md:pl-22 lg:pl-26 xl:pl-30 pr-8 lg:pr-12 xl:pr-16 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 items-start animate-on-scroll">
            {/* Left: Title + Description + Logos (1/3 width) */}
            <div className="md:col-span-1">
              <h2
                className="text-xl md:text-2xl lg:text-3xl font-normal mb-4 leading-tight lg:whitespace-nowrap"
                style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
              >
                UX Decision Intelligence.
              </h2>
              <p className="text-base text-muted-foreground">
                Grounded in usability science and Human-Computer Interaction (HCI) research. Every design decision traceable to your requirement.
              </p>
              <div className="flex items-center gap-4 mt-6 opacity-70">
                <img src="/hcil.svg" alt="Human-Computer Interaction Lab" className="h-14 object-contain" />
                <img src="/umd.svg" alt="University of Maryland" className="h-14 object-contain" />
              </div>
            </div>

            {/* Right: Flow Diagram (2/3 width) */}
            <div className="md:col-span-2">
              <FlowDiagram />
            </div>
          </div>
        </div>
      </section>
      {/* Configuration Panels Section */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-18 md:px-22 lg:px-26 xl:px-30 max-w-7xl">
          <div className="animate-on-scroll">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-normal leading-tight max-w-2xl"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              Complex interfaces.<br />
              Finally designed right.
            </h2>
            <div className="mt-8">
              <Button size="sm" className="px-4 py-1.5 text-xs font-semibold h-8 rounded-none" asChild>
                <Link href="/contact">
                  Book a demo &rsaquo;
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Case Study Section */}
      <section className="py-20 border-t border-border/40">
        <div className="border-t border-b border-border/40 animate-on-scroll">
          <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl">
            <div className="overflow-hidden" style={{ backgroundColor: 'var(--case-study-bg)' }}>
            <div className="grid md:grid-cols-2">
              {/* Left: Content */}
              <div className="p-10 md:p-14 flex flex-col justify-between">
                <div>
                  <p
                    className="text-xs font-mono tracking-wider mb-3"
                    style={{ color: 'var(--accent-gold)' }}
                  >
                    CASE STUDY
                  </p>
                  <h2
                    className="text-xl md:text-2xl font-normal mb-4 leading-tight text-foreground"
                    style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
                  >
                    &ldquo;Redesign took 10 months.<br />Users still couldn&rsquo;t tell if they did it right.<br />Heurica fixed it in 2 weeks.&rdquo;
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">&mdash; Product Director, Enterprise Data Security serving Fortune 500</p>
                </div>

                {/* Stats */}
                <div className="flex gap-12 mt-10">
                  <div>
                    <p
                      className="text-3xl md:text-4xl font-normal tracking-tight"
                      style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
                    >
                      20x
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Faster production-level<br />design delivery</p>
                  </div>
                  <div>
                    <p
                      className="text-3xl md:text-4xl font-normal tracking-tight"
                      style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
                    >
                      98
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">User stories analyzed<br />in a week</p>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative overflow-hidden flex items-center justify-center">
                {/* Seamless gradient fade from content bg into image */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to right, var(--case-study-bg) 0%, var(--case-study-bg) 5%, transparent 40%)',
                    zIndex: 2,
                  }}
                />
                {/* Dark mode dimming overlay */}
                <div className="absolute inset-0 dark:bg-black/30" style={{ zIndex: 1 }} />
                <img
                  src="/golden-ratio.svg"
                  alt="Golden ratio design system"
                  className="w-full h-full object-cover"
                  style={{ opacity: 0.55 }}
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      {/* Built for */}
      <UseCasesSection />
      {/* Enterprise-Ready from Day 1 Section */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl">
          <div className="text-center mb-8 animate-on-scroll">
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-normal mb-4 leading-tight"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              Enterprise-Ready from Day 1.
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              UX decision intelligence that fits your security and compliance requirements.
            </p>
          </div>
        </div>

        {/* Full-width grid lines that extend beyond container */}
        <div className="border-t border-b border-border/40 animate-on-scroll">
          <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl">
            <div className="grid md:grid-cols-4">
              {/* Card 1: Traceable Decisions */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-border/40">
                <div className="mb-6">
                  <ClipboardCheck className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-base font-semibold mb-2">Traceable Decisions</h3>
                <p className="text-sm text-muted-foreground">
                  Every UX decision comes with rationale. Full audit trail for compliance reviews.
                </p>
              </div>

              {/* Card 2: No Customer Data Required */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-border/40">
                <div className="mb-6">
                  <ShieldCheck className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-base font-semibold mb-2">No Customer Data Required</h3>
                <p className="text-sm text-muted-foreground">
                  We work from PRDs and specs only. No sensitive customer data needed, simplifying your security review.
                </p>
              </div>

              {/* Card 3: Works With Your Stack */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-border/40">
                <div className="mb-6">
                  <Layers className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-base font-semibold mb-2">Works With Your Stack</h3>
                <p className="text-sm text-muted-foreground">
                  Output integrates with your existing component library and design system.
                </p>
              </div>

              {/* Card 4: Human in the Loop */}
              <div className="p-8">
                <div className="mb-6">
                  <UserCheck className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-base font-semibold mb-2">Human in the Loop</h3>
                <p className="text-sm text-muted-foreground">
                  AI-assisted, human-verified. Your team reviews before anything ships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="hidden">
        {/* Trust Section */}
        <section className="py-12 px-8 lg:px-20 border-t border-border/40">
          <div className="container mx-auto px-8 lg:px-20 text-center">
            <p className="text-sm text-muted-foreground mb-8">We are trusted by top UX and HCI organizations.</p>
            <div className="flex items-center justify-center gap-8 md:gap-12 opacity-60">
              <div className="flex items-center">
                <ThemedImage
                  lightSrc="/university-of-maryland-light.png"
                  darkSrc="/uom-dark.png"
                  alt="Spot usability gaps interface"
                  className="h-15"
                />
              </div>
              <div className="flex items-center">
                <ThemedImage
                  lightSrc="/hcil-logo.png"
                  darkSrc="/hcil-logo-dark.png"
                  alt="Spot usability gaps interface"
                  className="h-17"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Left-align title and increase margins */}
        <section className="py-20 px-8 lg:px-20">
          <div className="container mx-auto px-8 lg:px-20 max-w-6xl">
            <div className="mb-5">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Fast-moving teams deserve UX that keeps up.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-0">
                <CardContent className="p-6">
                  <div className="relative w-full mb-6 flex items-center justify-center overflow-hidden">
                    <ThemedImage
                      lightSrc="/spot-usability-gaps-light.png"
                      darkSrc="/spot-usability-gaps-dark.png"
                      alt="Spot usability gaps interface"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">Spot usability gaps</h3>
                  <p className="text-sm text-muted-foreground">Ship without blind spots. Avoid costly design debt.</p>
                </CardContent>
              </Card>

              <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-0">
                <CardContent className="p-6">
                  <div className="relative w-full mb-6 flex items-center justify-center overflow-hidden">
                    <ThemedImage
                      lightSrc="/accelerate-ab-insights-light.png"
                      darkSrc="/accelerate-ab-insights-dark.png"
                      alt="Spot usability gaps interface"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">Accelerate A/B insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Get rationale-backed answers aligned with business goals — before investing in full tests.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-0">
                <CardContent className="p-6">
                  <div className="relative w-full mb-6 flex items-center justify-center overflow-hidden">
                    <ThemedImage
                      lightSrc="/scale-without-duct-taping-light.png"
                      darkSrc="/scale-without-duct-taping-dark.png"
                      alt="Spot usability gaps interface"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">Scale without duct taping</h3>
                  <p className="text-sm text-muted-foreground">
                    Turn every decision into a reusable UX pattern. Grow without redesigning from scratch.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Principle-backed Section - Redesigned with scroll animations */}
        <section className="py-20 px-8 lg:px-20 bg-muted/20">
          <div className="container mx-auto px-8 lg:px-20 max-w-6xl">
            <div className="space-y-16">
              {/* Row 1: Intro title and paragraph */}
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-balance leading-tight">
                    Make every design decision UX principle-backed.
                  </h2>
                </div>
                <div>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    Lean teams move fast, but vibe-coded UX piles up design debt.
                    <br />
                    Heurica.ai applies UX principles, clarifies trade-offs,
                    <br />
                    and builds reusable design systems — so your product scales smoothly.
                  </p>
                </div>
              </div>

              {/* Row 2: UX Design Audit */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">UX Design Audit</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Like Chrome Inspect,
                    <br className="lg:block hidden" />
                    but backed with suggestions
                    <br />
                    based on UX principles.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div
                    className="aspect-[4/2] w-full rounded-lg border p-3 relative shadow-sm"
                    style={{
                      backgroundColor: "var(--mockup-bg)",
                      borderColor: "var(--mockup-border)",
                    }}
                  >
                    {/* Browser chrome */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--mockup-chrome)" }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--mockup-chrome)" }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--mockup-chrome)" }}></div>
                      <div className="ml-3 h-4 rounded flex-1" style={{ backgroundColor: "var(--mockup-bar)" }}></div>
                    </div>
                    {/* Page content */}
                    <div className="space-y-2">
                      <div
                        className="h-4 rounded w-3/4"
                        style={{ backgroundColor: "var(--mockup-content-primary)" }}
                      ></div>
                      <div
                        className="h-3 rounded w-full"
                        style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                      ></div>
                      <div
                        className="h-3 rounded w-5/6"
                        style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                      ></div>
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        <div
                          className="h-12 rounded"
                          style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                        ></div>
                        <div
                          className="h-12 rounded"
                          style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                        ></div>
                      </div>
                    </div>
                    {/* UX inspection overlays */}
                    <div
                      className="absolute top-10 right-2 text-xs px-2 py-1 rounded border"
                      style={{
                        backgroundColor: "var(--overlay-blue-bg)",
                        color: "var(--overlay-blue-text)",
                        borderColor: "var(--overlay-blue-border)",
                      }}
                    >
                      Low contrast
                    </div>
                    <div
                      className="absolute bottom-6 left-2 text-xs px-2 py-1 rounded border"
                      style={{
                        backgroundColor: "var(--overlay-orange-bg)",
                        color: "var(--overlay-orange-text)",
                        borderColor: "var(--overlay-orange-border)",
                      }}
                    >
                      Missing alt
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Clear Design Trade-offs */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Clear Design Trade-offs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Design options comparisons like
                    <br className="lg:block hidden" />
                    business vs. usability trade-offs,
                    <br />
                    to move fast without blind guesses.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div
                    className="aspect-[4/2] w-full rounded-lg border p-3 relative shadow-sm"
                    style={{
                      backgroundColor: "var(--mockup-bg)",
                      borderColor: "var(--mockup-border)",
                    }}
                  >
                    <div className="text-xs font-medium mb-2 text-center" style={{ color: "var(--mockup-text)" }}>
                      Design Options
                    </div>
                    <div className="grid grid-cols-2 gap-2 h-full">
                      <div
                        className="rounded border p-2 relative"
                        style={{
                          backgroundColor: "var(--option-bg)",
                          borderColor: "var(--option-border)",
                        }}
                      >
                        <div className="text-xs font-medium mb-2" style={{ color: "var(--option-text)" }}>
                          Option A
                        </div>
                        <div className="space-y-2">
                          <div
                            className="h-2 rounded w-full"
                            style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                          ></div>
                          <div
                            className="h-2 rounded w-3/4"
                            style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                          ></div>
                          <div
                            className="h-6 rounded w-full mt-2"
                            style={{ backgroundColor: "var(--option-button)" }}
                          ></div>
                        </div>
                        <div className="absolute bottom-1 left-2 right-2">
                          <div className="text-xs" style={{ color: "var(--option-score)" }}>
                            Score: 6/10
                          </div>
                        </div>
                      </div>
                      <div
                        className="rounded border-2 p-2 relative"
                        style={{
                          backgroundColor: "var(--option-bg)",
                          borderColor: "var(--option-border-selected)",
                        }}
                      >
                        <div className="text-xs font-medium mb-2" style={{ color: "var(--option-text)" }}>
                          Option B
                        </div>
                        <div className="space-y-2">
                          <div
                            className="h-2 rounded w-full"
                            style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                          ></div>
                          <div
                            className="h-2 rounded w-4/5"
                            style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                          ></div>
                          <div
                            className="h-6 rounded w-full mt-2"
                            style={{ backgroundColor: "var(--option-button-selected)" }}
                          ></div>
                        </div>
                        <div className="absolute bottom-1 left-2 right-2">
                          <div className="text-xs" style={{ color: "var(--option-score-selected)" }}>
                            Score: 9/10
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute -top-1 right-2 text-xs px-2 py-1 rounded border"
                      style={{
                        backgroundColor: "var(--overlay-blue-bg)",
                        color: "var(--overlay-blue-text)",
                        borderColor: "var(--overlay-blue-border)",
                      }}
                    >
                      Best
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: Reusable UX Library */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Reusable UX Library</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    UX flows, components, design guidelines
                    <br className="lg:block hidden" />
                    available for instant Figma export.
                    <br />
                    Decisions turned into reusable patterns & flows.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div
                    className="aspect-[4/2] w-full rounded-lg border p-3 relative shadow-sm"
                    style={{
                      backgroundColor: "var(--mockup-bg)",
                      borderColor: "var(--mockup-border)",
                    }}
                  >
                    <div
                      className="text-xs font-medium mb-2"
                      style={{ color: "var(--option-score)" }} // Reusing option-score for component text
                    >
                      Component Library
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div
                        className="rounded border p-2"
                        style={{
                          backgroundColor: "var(--option-bg)", // Reusing option-bg
                          borderColor: "var(--option-border)", // Reusing option-border
                        }}
                      >
                        <div
                          className="h-3 rounded mb-1"
                          style={{ backgroundColor: "var(--option-button-selected)" }} // Blue accent for button
                        ></div>
                        <div
                          className="h-1 rounded mb-1"
                          style={{ backgroundColor: "var(--mockup-content-secondary)" }} // Reusing mockup content
                        ></div>
                        <div
                          className="text-xs"
                          style={{ color: "var(--option-score)" }} // Reusing option-score
                        >
                          Button
                        </div>
                      </div>
                      <div
                        className="rounded border p-2"
                        style={{
                          backgroundColor: "var(--option-bg)",
                          borderColor: "var(--option-border)",
                        }}
                      >
                        <div
                          className="h-3 rounded mb-1"
                          style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                        ></div>
                        <div
                          className="h-1 rounded mb-1"
                          style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                        ></div>
                        <div className="text-xs" style={{ color: "var(--option-score)" }}>
                          Card
                        </div>
                      </div>
                      <div
                        className="rounded border p-2"
                        style={{
                          backgroundColor: "var(--option-bg)",
                          borderColor: "var(--option-border)",
                        }}
                      >
                        <div
                          className="h-3 rounded mb-1"
                          style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                        ></div>
                        <div
                          className="h-1 rounded mb-1"
                          style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                        ></div>
                        <div className="text-xs" style={{ color: "var(--option-score)" }}>
                          Input
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: "var(--mockup-content-primary)" }} // Reusing mockup content
                        ></div>
                        <div
                          className="h-2 rounded flex-1"
                          style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                        ></div>
                        <div className="text-xs" style={{ color: "var(--option-score)" }}>
                          Login
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: "var(--mockup-content-primary)" }} // Reusing mockup content
                        ></div>
                        <div
                          className="h-2 rounded flex-1"
                          style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                        ></div>
                        <div className="text-xs" style={{ color: "var(--option-score)" }}>
                          Checkout
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded border"
                      style={{
                        backgroundColor: "var(--mockup-content-secondary)", // Reusing for export button bg
                        color: "var(--option-text)", // Reusing option-text
                        borderColor: "var(--option-border)", // Reusing option-border
                      }}
                    >
                      Export
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section - Left-align title and increase margins */}
        <section className="py-20 px-8 lg:px-20">
          <div className="container mx-auto px-8 lg:px-20 max-w-6xl">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Every $1 invested in UX brings $100 ROI.</h2>
              <p className="text-muted-foreground">— Forrester, 2017</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-muted/50 border-border/40">
                <CardContent className="p-8 text-center">
                  <div className="text-xl font-semibold mb-2">"This saved us 4 weeks of UX/UI design iteration."</div>
                  <p className="text-sm text-muted-foreground">CEO & Founder @Heurica</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/50 border-border/40">
                <CardContent className="p-8 text-center">
                  <div className="text-xl font-semibold mb-2">"This saved us 4 weeks of UX/UI design iteration."</div>
                  <p className="text-sm text-muted-foreground">CEO & Founder @Heurica</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/50 border-border/40">
                <CardContent className="p-8 text-center">
                  <div className="text-xl font-semibold mb-2">"This saved us 4 weeks of UX/UI design iteration."</div>
                  <p className="text-sm text-muted-foreground">CEO & Founder @Heurica</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA - Keep center-aligned */}
        <section className="py-20 px-8 lg:px-20 bg-muted/20">
          <div className="container mx-auto px-8 lg:px-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance leading-none relative">
              <span>Don't </span>
              <span className="relative inline-block">
                <div
                  className="absolute inset-0 shadow-lg"
                  style={{
                    background: `
                      repeating-linear-gradient(
                        0deg,
                        var(--duct-tape-color-1) 0px,
                        var(--duct-tape-color-1) 2px,
                        var(--duct-tape-color-2) 2px,
                        var(--duct-tape-color-2) 4px,
                        var(--duct-tape-color-1) 4px,
                        var(--duct-tape-color-1) 6px,
                        var(--duct-tape-color-2) 6px,
                        var(--duct-tape-color-2) 8px
                      )
                    `,
                    clipPath: "polygon(2% 15%, 98% 8%, 96% 85%, 4% 92%)",
                    transform: "rotate(-0.5deg) scale(1.1)",
                    zIndex: 1,
                    opacity: "var(--duct-tape-opacity)",
                  }}
                ></div>
                <span className="relative z-10">duct tape</span>
              </span>
              <span> UX. Scale it.</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-3 text-base font-medium" asChild>
                <a href="https://tally.so/r/44a68o" target="_blank" rel="noopener noreferrer">
                  Join Waitlist
                </a>
              </Button>

              <Button variant="outline" size="lg" className="px-8 py-3 text-base bg-transparent">
                See Example Audit
              </Button>
            </div>
          </div>
        </section>
      </div>
      {/* CTA Section */}
      <section className="pt-8 pb-32 relative z-10">
        <div className="container mx-auto px-8 lg:px-20 text-center flex flex-col items-center">
          <RotatingText />
          <Button size="sm" className="px-4 py-1.5 text-xs font-semibold h-8 mt-6 rounded-none" asChild>
            <Link href="/contact">
              Book a demo &rsaquo;
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
