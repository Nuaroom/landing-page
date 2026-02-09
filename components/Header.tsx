"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"

function ThemedIcons({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <Moon className={className} />
  }

  return resolvedTheme === "dark" ? <Sun className={className} /> : <Moon className={className} />
}

export function Header() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isHomePage = pathname === "/"
  const isPerspectivesPage = pathname?.startsWith("/perspectives")
  const isCompanyPage = pathname === "/team" || pathname === "/careers"

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Scroll direction detection for nav visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Track if user has scrolled past threshold for background
      setHasScrolled(currentScrollY > 50)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(false) // Scrolling down
      } else {
        setIsNavVisible(true) // Scrolling up
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isCompanyOpen && !(event.target as Element).closest('.company-dropdown')) {
        setIsCompanyOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isCompanyOpen])

  if (!isMounted) {
    return null
  }

  return (
    <header className={`sticky top-3 z-50 flex-shrink-0 transition-all duration-300 ${isNavVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
      <div className={`container mx-auto px-8 lg:px-20 py-2 flex items-center justify-between relative z-10 rounded-full transition-all duration-300 ${hasScrolled ? 'bg-background/95 backdrop-blur-sm' : ''}`}>
        <Link
          href="/"
          className="text-2xl font-medium"
          style={{
            fontFamily: "var(--font-ibm-plex-serif), serif",
            color: 'var(--accent-gold)'
          }}
        >Heurica</Link>

        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a
            href="/#solutions"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Solutions
          </a>
          <a
            href="/#how-it-works"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </a>
          <Link
            href="/perspectives"
            className={`text-sm transition-colors ${isPerspectivesPage ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Perspectives
          </Link>
          <div className="relative company-dropdown">
            <button
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
              className={`text-sm transition-colors flex items-center gap-1 ${isCompanyPage ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Company
              <ChevronDown className={`w-3 h-3 transition-transform ${isCompanyOpen ? 'rotate-180' : ''}`} />
            </button>
            {isCompanyOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl">
                <div className="flex gap-8">
                  <Link
                    href="/team"
                    className="group min-w-[180px]"
                    onClick={() => setIsCompanyOpen(false)}
                  >
                    <p className="text-sm font-medium mb-1 group-hover:text-foreground transition-colors">About</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">The team and the problem we're solving</p>
                  </Link>
                  <Link
                    href="/careers"
                    className="group min-w-[180px]"
                    onClick={() => setIsCompanyOpen(false)}
                  >
                    <p className="text-sm font-medium mb-1 group-hover:text-foreground transition-colors">Careers</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">Open positions</p>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <Button size="sm" className="hidden sm:inline-flex px-3 py-1 text-xs font-semibold rounded-none h-7" asChild>
            <Link href="/contact">
              Book a Demo
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-7 h-7"
          >
            <ThemedIcons className="h-3 w-3" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-7 h-7 md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border/20 mt-2 mx-4 rounded-xl p-4">
          <nav className="flex flex-col gap-4">
            <a
              href="/#solutions"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a
              href="/#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <Link
              href="/perspectives"
              className={`text-sm transition-colors ${isPerspectivesPage ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Perspectives
            </Link>
            <Link
              href="/team"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/careers"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <div className="pt-2 border-t border-border/20">
              <Button size="sm" className="w-full px-3 py-1 text-xs font-semibold rounded-none h-8" asChild>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book a Demo
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
