"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <div className="pt-64 relative">
      {/* Full-width grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="h-full"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(160,160,160,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(160,160,160,0.12) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--background) 0%, transparent 50%)' }} />
      </div>
      <footer className="flex-shrink-0 cloud-footer relative z-10">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl py-8 sm:py-12 relative z-10">
          <div className="flex flex-col md:flex-row mb-8 sm:mb-12">
            {/* Logo */}
            <div className="md:w-1/3">
              <Link href="/" className="block">
                <div className="flex flex-col">
                  <span
                    className="text-2xl font-medium"
                    style={{
                      fontFamily: "var(--font-ibm-plex-serif), serif",
                      color: 'var(--accent-gold)'
                    }}
                  >Heurica</span>
                  <span className="text-sm mt-1" style={{ color: 'var(--accent-gold)' }}>
                    {t("footer.tagline")}
                  </span>
                </div>
              </Link>
            </div>

            {/* Pages, Company and Legal grouped together */}
            <div className="grid grid-cols-3 gap-8 sm:gap-12 md:gap-24 mt-8 md:mt-0 md:flex-1 md:flex md:flex-row md:justify-end">
              {/* Pages */}
              <div>
                <h4 className="text-xs text-muted-foreground mb-3">{t("footer.pages")}</h4>
                <ul className="space-y-2">
                  <li className="transition-transform duration-200 hover:-translate-y-0.5">
                    <Link href="/philosophy" className="text-xs hover:text-foreground transition-colors">{t("nav.philosophy")}</Link>
                  </li>
                  <li className="transition-transform duration-200 hover:-translate-y-0.5">
                    <Link href="/case-study" className="text-xs hover:text-foreground transition-colors">{t("nav.casestudy")}</Link>
                  </li>
                  <li className="transition-transform duration-200 hover:-translate-y-0.5">
                    <Link href="/contact" className="text-xs hover:text-foreground transition-colors">{t("footer.startproject")} &rsaquo;</Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-xs text-muted-foreground mb-3">{t("footer.company")}</h4>
                <ul className="space-y-2">
                  <li className="transition-transform duration-200 hover:-translate-y-0.5">
                    <Link href="/team" className="text-xs hover:text-foreground transition-colors">{t("nav.about")}</Link>
                  </li>
                  <li className="transition-transform duration-200 hover:-translate-y-0.5">
                    <Link href="/careers" className="text-xs hover:text-foreground transition-colors">{t("nav.careers")}</Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-xs text-muted-foreground mb-3">{t("footer.legal")}</h4>
                <ul className="space-y-2">
                  <li className="transition-transform duration-200 hover:-translate-y-0.5">
                    <Link href="/privacy" className="text-xs hover:text-foreground transition-colors">{t("footer.privacy")}</Link>
                  </li>
                  <li className="transition-transform duration-200 hover:-translate-y-0.5">
                    <Link href="/terms" className="text-xs hover:text-foreground transition-colors">{t("footer.terms")}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-row justify-between items-center pt-4">
            <div className="text-xs text-muted-foreground">© 2026 Heurica</div>
            <a
              href="mailto:yunbin@heurica.co?subject=Inquiry%20to%20Heurica%20Team"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              yunbin@heurica.co
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
