"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Link from "next/link"

function ThemedIcons({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <Moon className={className} />
  }

  return resolvedTheme === "dark" ? <Sun className={className} /> : <Moon className={className} />
}

export default function TeamPage() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 border-b border-border/20 backdrop-blur-sm z-50 bg-background/95 flex-shrink-0">
        <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <circle
                cx="50"
                cy="50"
                r="38"
                stroke="var(--brand-color)"
                strokeWidth="5"
                fill="none"
              />
              <line
                x1="20"
                y1="80"
                x2="85"
                y2="15"
                stroke="var(--brand-color)"
                strokeWidth="5"
              />
              <circle
                cx="85"
                cy="15"
                r="8"
                fill="var(--brand-color)"
              />
            </svg>
            <span className="text-lg font-semibold" style={{ color: 'var(--brand-color)' }}>Heurica</span>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/team" className="text-sm font-medium text-foreground transition-colors">
                Team
              </Link>
              <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
            <Button size="sm" className="px-4 py-2 text-sm font-semibold" asChild>
              <Link href="/contact">
                Book a Demo
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9"
            >
              <ThemedIcons className="h-4 w-4" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--accent-gold)' }}>Our Team</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Building the UX Future
            </h1>
            <div className="border border-border/30 rounded-2xl bg-card/50 p-8 md:p-10">
              <div className="flex flex-col items-center">
                <img
                  src="/yunbin-profile.jpg"
                  alt="Yunbin Bae"
                  className="w-32 h-32 rounded-full object-cover bg-muted mb-6"
                />
                <h3 className="text-xl font-semibold mb-1">Yunbin Bae</h3>
                <p className="text-sm font-medium mb-6" style={{ color: 'var(--accent-gold)' }}>Founder & CEO</p>
              </div>
              <div className="text-muted-foreground mb-8 space-y-4 text-left px-6 md:px-10">
                <p>5 years as UX Designer and PM in regulated industries<br className="hidden md:block" /> — security, fintech, law enforcement, public safety.</p>
                <p>Enterprise UX: either it's rushed and sidelined, or it takes months.</p>
                <p>Speed vs. Quality?<br className="hidden md:block" /> I built Heurica so you don't have to pick.<br className="hidden md:block" /> Ship quality UX, fast.</p>
                <p>MS in HCI, focus on Human-AI Interaction<br className="hidden md:block" />@University of Maryland (Top 5 in UX).</p>
              </div>
              <div className="flex flex-wrap items-center justify-start gap-2 px-6 md:px-10">
                <span className="px-2.5 py-1 text-xs rounded-full border border-border/50 bg-muted/50">UX Design</span>
                <span className="px-2.5 py-1 text-xs rounded-full border border-border/50 bg-muted/50">Product Management</span>
                <span className="px-2.5 py-1 text-xs rounded-full border border-border/50 bg-muted/50">Human-AI Interaction</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/20 flex-shrink-0">
        <div className="container mx-auto px-6 lg:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">© 2025 Heurica</div>
          <a
            href="mailto:yunbin@heurica.co?subject=Inquiry%20to%20Heurica%20Team"
            className="text-sm text-muted-foreground"
          >
            yunbin@heurica.co
          </a>
        </div>
      </footer>
    </div>
  )
}
