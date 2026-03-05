import type { Metadata } from "next"
import { Geist, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider"
import { ScrollProgress } from "@/components/animations/ScrollProgress"
import { PageLoader } from "@/components/animations/PageLoader"
import { JsonLd } from "@/components/JsonLd"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import { LanguageProvider } from "@/components/layout/LanguageProvider"
import { personalInfo } from "@/lib/data"
import "./globals.css"

// ── Fonts ──────────────────────────────────────────────────────────
const geist = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
})

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
})

// ── SEO Metadata ───────────────────────────────────────────────────
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? personalInfo.siteUrl

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${personalInfo.name} — Fullstack Developer & UI/UX Designer`,
    template: `%s | ${personalInfo.name}`,
  },
  description:
    "Fullstack developer dengan background 12 tahun UI/UX design. Membangun produk dari wireframe sampai deployment. Based in Jakarta, Indonesia.",
  keywords: [
    "fullstack developer",
    "ui ux designer",
    "react developer",
    "next.js developer",
    "jakarta developer",
    personalInfo.name.toLowerCase(),
  ],
  authors: [{ name: personalInfo.name, url: BASE_URL }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    url: BASE_URL,
    siteName: `${personalInfo.name} — Portfolio`,
    title: `${personalInfo.name} — Fullstack Developer & UI/UX Designer`,
    description: "Designer-turned-engineer building products that work beautifully.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: `${personalInfo.name} Portfolio` }],
  },
  twitter: {
    card: "summary_large_image",
    site: personalInfo.twitterHandle,
    creator: personalInfo.twitterHandle,
    title: `${personalInfo.name} — Fullstack Developer`,
    description: `Designer-turned-engineer. ${personalInfo.stats.yearsExperience} yrs experience. Based in Jakarta.`,
    images: ["/og-image.svg"],
  },
  alternates: { canonical: BASE_URL },
  other: {
    "theme-color": "#080F1A",
    "color-scheme": "dark",
  },
}

// ── Root Layout ────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${geist.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <JsonLd />
        <ThemeProvider>
          <LanguageProvider>
            <TooltipProvider delayDuration={200}>
              <SmoothScrollProvider>
                <ScrollProgress />
                <PageLoader />
                {children}
              </SmoothScrollProvider>
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
