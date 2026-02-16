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
      <div className={`container mx-auto px-12 sm:px-[72px] lg:px-[104px] xl:px-[120px] max-w-7xl py-2 flex items-center justify-between relative z-10 rounded-full transition-all duration-300 ${hasScrolled ? 'bg-background/95 backdrop-blur-sm' : ''}`}>
        <Link
          href="/"
          className="text-2xl font-medium"
          style={{
            fontFamily: "var(--font-ibm-plex-serif), serif",
            color: 'var(--accent-gold)'
          }}
        >Heurica</Link>

        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link
            href="/perspectives"
            className={`text-sm transition-colors ${isPerspectivesPage ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Philosophy
          </Link>
          <Link
            href="/team"
            className={`text-sm transition-colors ${pathname === '/team' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            About
          </Link>
          <Link
            href="/careers"
            className={`text-sm transition-colors ${pathname === '/careers' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Careers
          </Link>
        </nav>

        <div className="flex items-center gap-4">
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
            <Link
              href="/perspectives"
              className={`text-sm transition-colors ${isPerspectivesPage ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Philosophy
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
          </nav>
        </div>
      )}
    </header>
  )
}
