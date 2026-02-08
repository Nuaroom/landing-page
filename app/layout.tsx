import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Instrument_Serif, IBM_Plex_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/Header"
import { Suspense } from "react"
import "./globals.css"

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
})

const ibmPlexSerif = IBM_Plex_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
})

export const metadata: Metadata = {
  title: "AI-powered UX for Enterprise",
  description: "Heurica turns PRDs into front-end code with best-practice UX baked in.",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} ${ibmPlexSerif.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <div className="min-h-screen bg-background text-foreground flex flex-col">
              <Header />
              {children}
            </div>
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
