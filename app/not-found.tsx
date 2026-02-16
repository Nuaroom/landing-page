import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <>
      {/* Main Content */}
      <main className="flex-1 py-32 md:py-48">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-xl mx-auto text-center">
            {/* Heading */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 leading-tight animate-hero-subtitle"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              Coming Soon
            </h1>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-8 text-pretty animate-hero-subtitle">
              Book a demo to learn more.
            </p>

            {/* Start a Project Button */}
            <Button size="lg" className="px-6 py-3 text-sm font-semibold animate-hero-footer" asChild>
              <Link href="/contact">
                Start a Project &rsaquo;
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer with dot grid */}
      <div className="dot-grid-footer pt-32">
        <footer className="flex-shrink-0 cloud-footer relative z-10">
          <div className="container mx-auto px-8 lg:px-20 py-12 relative z-10">
            <div className="flex flex-col md:flex-row mb-12">
              {/* Logo */}
              <div className="md:w-1/3">
                <Link
                  href="/"
                  className="text-2xl font-medium"
                  style={{
                    fontFamily: "var(--font-ibm-plex-serif), serif",
                    color: 'var(--accent-gold)'
                  }}
                >Heurica</Link>
              </div>

              {/* Pages, Industries and Legal grouped together */}
              <div className="flex flex-col md:flex-row gap-12 md:gap-24 mt-8 md:mt-0 md:flex-1 md:justify-end">
                {/* Pages */}
                <div>
                  <h4 className="text-sm text-muted-foreground mb-4">Pages</h4>
                  <ul className="space-y-3">
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/#solutions" className="text-sm font-medium hover:text-foreground transition-colors">Solutions</Link>
                    </li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/#how-it-works" className="text-sm font-medium hover:text-foreground transition-colors">How It Works</Link>
                    </li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/research" className="text-sm font-medium hover:text-foreground transition-colors">Research Paper</Link>
                    </li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/blog" className="text-sm font-medium hover:text-foreground transition-colors">Blog</Link>
                    </li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/contact" className="text-sm font-medium hover:text-foreground transition-colors">Start a Project &rsaquo;</Link>
                    </li>
                  </ul>
                </div>

                {/* Industries */}
                <div>
                  <h4 className="text-sm text-muted-foreground mb-4">Industries</h4>
                  <ul className="space-y-3">
                    <li className="transition-transform duration-200 hover:-translate-y-0.5"><span className="text-sm font-medium">Security</span></li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5"><span className="text-sm font-medium">Healthcare</span></li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5"><span className="text-sm font-medium">Finance</span></li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5"><span className="text-sm font-medium">Technology</span></li>
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="text-sm text-muted-foreground mb-4">Company</h4>
                  <ul className="space-y-3">
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/team" className="text-sm font-medium hover:text-foreground transition-colors">About</Link>
                    </li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/careers" className="text-sm font-medium hover:text-foreground transition-colors">Careers</Link>
                    </li>
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h4 className="text-sm text-muted-foreground mb-4">Legal</h4>
                  <ul className="space-y-3">
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/privacy" className="text-sm font-medium hover:text-foreground transition-colors">Privacy Policy</Link>
                    </li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/terms" className="text-sm font-medium hover:text-foreground transition-colors">Terms of Service</Link>
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
    </>
  )
}
