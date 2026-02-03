import Link from "next/link"

export function Footer() {
  return (
    <div className="dot-grid-footer pt-64">
      <footer className="flex-shrink-0 cloud-footer relative z-10">
        <div className="container mx-auto px-8 lg:px-20 py-12 relative z-10">
          <div className="flex flex-col md:flex-row mb-12">
            {/* Logo */}
            <div className="md:w-1/3">
              <Link href="/" className="block">
                <div className="flex flex-col">
                  <span
                    className="text-2xl font-medium"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      color: 'var(--accent-gold)'
                    }}
                  >Heurica</span>
                  <span className="text-sm mt-1" style={{ color: 'var(--accent-gold)' }}>
                    heuristics + eureka
                  </span>
                </div>
              </Link>
            </div>

            {/* Pages, Company and Legal grouped together */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 mt-8 md:mt-0 md:flex-1 md:justify-end">
              {/* Pages */}
              <div>
                <h4 className="text-sm text-muted-foreground mb-4">Pages</h4>
                <ul className="space-y-3">
                  <li className="transition-transform duration-200 hover:-translate-y-0.5">
                    <Link href="/#solutions" className="text-sm hover:text-foreground transition-colors">Solutions</Link>
                  </li>
                  <li className="transition-transform duration-200 hover:-translate-y-0.5">
                    <Link href="/#how-it-works" className="text-sm hover:text-foreground transition-colors">How It Works</Link>
                  </li>
                  <li className="transition-transform duration-200 hover:-translate-y-0.5">
                    <Link href="/perspectives" className="text-sm hover:text-foreground transition-colors">Perspectives</Link>
                  </li>
                  <li className="transition-transform duration-200 hover:-translate-y-0.5">
                    <Link href="/contact" className="text-sm hover:text-foreground transition-colors">Book a Demo</Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-sm text-muted-foreground mb-4">Company</h4>
                <ul className="space-y-3">
                  <li className="transition-transform duration-200 hover:-translate-y-0.5">
                    <Link href="/team" className="text-sm hover:text-foreground transition-colors">About</Link>
                  </li>
                  <li className="transition-transform duration-200 hover:-translate-y-0.5">
                    <Link href="/careers" className="text-sm hover:text-foreground transition-colors">Careers</Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-sm text-muted-foreground mb-4">Legal</h4>
                <ul className="space-y-3">
                  <li className="transition-transform duration-200 hover:-translate-y-0.5">
                    <Link href="/privacy" className="text-sm hover:text-foreground transition-colors">Privacy Policy</Link>
                  </li>
                  <li className="transition-transform duration-200 hover:-translate-y-0.5">
                    <Link href="/terms" className="text-sm hover:text-foreground transition-colors">Terms of Service</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/20">
            <div className="text-sm text-muted-foreground">© 2026 Heurica</div>
            <a
              href="mailto:contact@heurica.co?subject=Inquiry%20to%20Heurica%20Team"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              contact@heurica.co
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
