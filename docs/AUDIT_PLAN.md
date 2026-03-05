# Audit & Implementation Plan — Personal Website
**Tanggal audit:** 2026-03-05
**Referensi desain:** [Figma Make — Personal Website for Developer](https://www.figma.com/make/CUTJV77opGcpE858v0fORD/Personal-website-for-developer)

---

## 1. Ringkasan Audit

### Apa yang sudah ada (docs sebelumnya)
| Dokumen | Status | Kualitas |
|---------|--------|----------|
| `PERSONAL_WEBSITE_PLAN.md` | ✅ Ada | Sangat detail — positioning, branding, design system, animasi, timeline |
| `DESIGN_REFERENCES.md` | ✅ Ada | Komprehensif — tier referensi S/A/B, per teknik, Dribbble, Awwwards |
| `TECH_SETUP.md` | ✅ Ada | Solid — setup commands, folder structure, code snippets siap pakai |
| `WIREFRAME_STRUCTURE.md` | ✅ Ada | Baik — ASCII wireframe tiap section, mobile adaptation |

### Gap yang ditemukan setelah membandingkan dengan Figma Make

| Gap | Existing Plan | Figma Make Reference | Keputusan |
|-----|--------------|---------------------|-----------|
| **Framework** | Next.js 15 (App Router) | Vite + React | → Tetap **Next.js 15** (lebih baik untuk SEO, SSG, Vercel deploy) |
| **UI Library** | Tidak ada (custom) | shadcn/ui | → **Adopt shadcn/ui** sebagai base component, extend custom |
| **Section Order** | Hero → About → Skills → Projects → Timeline → Contact | Navbar → **Hero → Journey → About → Skills → Projects → Contact** → Footer | → Ikuti urutan Figma Make, rename Timeline jadi Journey |
| **Journey Section** | Terpisah dari About | Dedicated "Journey" section | → Buat `JourneySection.tsx` tersendiri |
| **Color System** | Custom CSS vars (#080F1A base) | shadcn/ui theme vars (CSS custom properties) | → **Merge**: gunakan CSS custom properties Figma Make, override dengan palette plan |
| **Content placeholder** | Generik [Nama Kamu] | Generik juga | → Siapkan `data.ts` terpusat untuk content |

---

## 2. Arsitektur Final (Post-Audit)

### Page Structure (mengikuti Figma Make + enhancements dari plan)

```
/ (Home — Single Page App)
│
├── <Navbar />           — Sticky, frosted glass on scroll, active section indicator
├── <HeroSection />      — Tagline animasi, status badge, aurora background, CTA buttons
├── <JourneySection />   — Timeline interaktif: 2012 → 2016 → 2023 → sekarang
├── <AboutSection />     — Foto + bio storytelling + download CV
├── <SkillsSection />    — Bento grid: Design | Frontend | Backend | DevOps
├── <ProjectsSection />  — 3-4 featured projects dengan hover preview
├── <ContactSection />   — Form + social links + copy email
└── <Footer />           — Minimal: copyright + social + back to top
```

### Tech Stack Final

```
Framework     : Next.js 15 (App Router, SSG)
Language      : TypeScript
Styling       : Tailwind CSS v4
UI Components : shadcn/ui (base) + custom extensions
Animation     : Framer Motion + CSS Scroll-Driven Animations (native)
Smooth Scroll : Lenis (@studio-freight/lenis)
Icons         : Lucide React
3D (opsional) : Spline embed di Hero background
Font          : Geist (heading) + Plus Jakarta Sans (body) + JetBrains Mono (code/accent)
Deploy        : Vercel
Analytics     : Vercel Analytics
```

---

## 3. Design System Final (Merged)

### Color Tokens (dari plan, diformat sebagai shadcn-compatible CSS vars)

```css
/* globals.css */
:root {
  /* Base backgrounds */
  --background:         8 15 26;      /* #080F1A — deep navy dark */
  --background-subtle:  15 26 46;     /* #0F1A2E — card surface */
  --background-muted:   22 32 53;     /* #162035 — hover state */

  /* Text */
  --foreground:         240 246 255;  /* #F0F6FF — near white */
  --muted-foreground:   139 163 199;  /* #8BA3C7 — subtitle */
  --placeholder:        74 96 128;    /* #4A6080 — disabled */

  /* Accent palette */
  --accent-blue:        79 142 247;   /* #4F8EF7 */
  --accent-purple:      167 139 250;  /* #A78BFA */
  --accent-green:       52 211 153;   /* #34D399 */

  /* Borders */
  --border:             30 45 71;     /* #1E2D47 */
  --border-hover:       42 63 95;     /* #2A3F5F */

  /* shadcn/ui mapping */
  --card:               var(--background-subtle);
  --card-foreground:    var(--foreground);
  --primary:            var(--accent-blue);
  --secondary:          var(--accent-purple);
  --radius:             0.75rem;      /* 12px default border radius */
}
```

### Typography Final

```
Display  : Geist / Cal Sans — 80-96px, line-height 1.05, tracking -0.03em
H1       : Geist — 56-64px, line-height 1.1
H2       : Geist — 40px, line-height 1.2
H3       : Plus Jakarta Sans — 28px, line-height 1.3
Body     : Plus Jakarta Sans — 16-18px, line-height 1.7
Small    : Plus Jakarta Sans — 14px, line-height 1.5
Mono     : JetBrains Mono — 13-14px (untuk labels, badges, code aesthetic)
```

---

## 4. Component Architecture

### Folder Structure (Next.js 15 + shadcn/ui)

```
src/
├── app/
│   ├── layout.tsx              # Root layout: font, metadata, providers
│   ├── page.tsx                # Home — assembly semua section
│   └── globals.css             # CSS vars, base styles, tailwind directives
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # ← dari Figma Make, enhanced
│   │   └── Footer.tsx          # ← dari Figma Make
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx     # ← dari Figma Make Hero.tsx, + animasi
│   │   ├── JourneySection.tsx  # ← dari Figma Make Journey.tsx, + scroll animation
│   │   ├── AboutSection.tsx    # ← dari Figma Make About.tsx
│   │   ├── SkillsSection.tsx   # ← dari Figma Make Skills.tsx, + bento grid
│   │   ├── ProjectsSection.tsx # ← dari Figma Make Projects.tsx, + hover effects
│   │   └── ContactSection.tsx  # ← dari Figma Make Contact.tsx
│   │
│   ├── ui/                     # shadcn/ui components (generated via CLI)
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── card.tsx
│   │   └── ...
│   │
│   ├── custom/                 # Custom UI diatas shadcn
│   │   ├── GlassCard.tsx       # Glassmorphism card dengan glow border
│   │   ├── BentoGrid.tsx       # Bento grid layout component
│   │   ├── ProjectCard.tsx     # Project card dengan hover reveal
│   │   ├── SkillBadge.tsx      # Skill badge dengan icon
│   │   ├── TimelineItem.tsx    # Journey timeline item
│   │   ├── StatusBadge.tsx     # "Available for work" badge + pulse dot
│   │   └── SectionLabel.tsx    # Section label kecil monospace di atas heading
│   │
│   └── animations/
│       ├── FadeIn.tsx          # Scroll-triggered fade-in wrapper
│       ├── TextScramble.tsx    # Text scramble/typewriter effect
│       ├── MagneticButton.tsx  # Magnetic hover effect
│       ├── AuroraBackground.tsx # Animated aurora gradient background
│       └── CustomCursor.tsx    # Custom cursor dot
│
├── lib/
│   ├── utils.ts               # cn() helper (clsx + tailwind-merge)
│   └── data.ts                # SEMUA konten: projects, skills, timeline, personal info
│
└── public/
    ├── images/
    │   ├── profile.jpg         # Foto profesional (min 800x800px)
    │   ├── projects/           # Screenshot tiap project
    │   └── og-image.png        # 1200x630px untuk social sharing
    └── cv.pdf                  # Resume untuk download
```

---

## 5. Implementation Checklist (Phase by Phase)

### PHASE 0 — Project Bootstrap (Sebelum Mulai Coding)

#### Konten yang WAJIB disiapkan dulu:
- [ ] **Tagline final** — pilih satu dari opsi di PERSONAL_WEBSITE_PLAN.md
- [ ] **Bio singkat** (150-200 kata) — perjalanan design → engineering
- [ ] **Bio super singkat** (2-3 kalimat) — untuk hero section
- [ ] **Foto profesional** — square, high quality (min 800x800px)
- [ ] **3-4 project** dengan screenshot, deskripsi, tech stack, link
- [ ] **Daftar skill** dengan kategorisasi
- [ ] **Data pengalaman kerja** (perusahaan, role, tahun)
- [ ] **Status availability** (available / not available)
- [ ] **Email kontak** + social links (LinkedIn, GitHub, Twitter)
- [ ] **Domain** — beli domain (.dev / .me / .id)

### PHASE 1 — Setup & Foundation

```bash
# 1. Create Next.js 15 project
npx create-next-app@latest personal-website \
  --typescript --tailwind --app --src-dir --import-alias "@/*"

cd personal-website

# 2. Init shadcn/ui
npx shadcn@latest init
# Pilih: Default style, CSS Variables, oklch colors

# 3. Add shadcn components yang dibutuhkan
npx shadcn@latest add button badge card separator

# 4. Install dependencies
npm install framer-motion
npm install @studio-freight/lenis
npm install lucide-react
npm install next-themes

# 5. Setup fonts di layout.tsx (next/font/google)
# - Geist (heading)
# - Plus Jakarta Sans (body)
# - JetBrains Mono (monospace)
```

**Deliverables Phase 1:**
- [ ] Next.js 15 running di localhost:3000
- [ ] Tailwind v4 configured
- [ ] shadcn/ui initialized
- [ ] CSS design tokens setup di globals.css
- [ ] Font loading tanpa layout shift
- [ ] Folder structure sesuai arsitektur di atas
- [ ] `src/lib/data.ts` dibuat dengan placeholder content

### PHASE 2 — Layout & Navigation

**Komponen:**
- [ ] `Navbar.tsx` — logo/nama, links, hamburger mobile
  - Transparent saat scroll = 0
  - Frosted glass saat scroll > 100px (`backdrop-filter: blur(20px)`)
  - Intersection Observer untuk active link highlighting
  - Mobile: hamburger + slide-in drawer (shadcn Sheet)
- [ ] `Footer.tsx` — copyright, social links, back-to-top
- [ ] `CustomCursor.tsx` — dot cursor yang bereaksi pada hover elemen interaktif
- [ ] `SmoothScrollProvider` — Lenis setup di layout

### PHASE 3 — Hero Section (Prioritas Tinggi, First Impression)

**Komponen:**
- [ ] `StatusBadge.tsx` — "Available for work" dengan animated green pulse dot
- [ ] `AuroraBackground.tsx` — animated aurora gradient blob sebagai background
- [ ] `HeroSection.tsx`:
  - Monospace label kecil di atas tagline
  - Tagline besar dengan **staggered fade-up** (Framer Motion)
  - Sub-tagline muted
  - Dua CTA buttons (primary + outline) — MagneticButton wrapper
  - Stats row: "12 yrs exp · 20+ projects · Design + Code"
  - Scroll indicator (bouncing arrow atau chevron)

**Animasi khusus:**
- [ ] Text scramble / typewriter untuk tagline (TextScramble.tsx)
- [ ] Staggered reveal: badge → tagline → sub-tagline → CTA → stats (0.1s interval)

### PHASE 4 — Journey Section (Timeline)

**Komponen:**
- [ ] `JourneySection.tsx` dengan 3 era:
  - **2012–2016**: UI/UX Designer (Figma, Adobe CC, UX Research)
  - **2016–2022**: Frontend Developer (React, Vue, CSS/JS mastery)
  - **2023–now**: Fullstack Developer (Node.js, Next.js, DB, Infra, API)
- [ ] `TimelineItem.tsx` — card tiap era dengan era label, role, skill list

**Animasi:**
- [ ] CSS Scroll-Driven Animation untuk reveal tiap card (native, tanpa JS)
- [ ] Atau Framer Motion `whileInView` sebagai fallback

### PHASE 5 — About Section

**Komponen:**
- [ ] `AboutSection.tsx`:
  - Foto dengan efek grayscale → berwarna saat hover (CSS filter transition)
  - Bio storytelling (bukan list generic)
  - Pull quote yang kuat ("Not just a developer. Not just a designer. Both.")
  - Location badge (Jakarta)
  - Download CV button

### PHASE 6 — Skills Section (Bento Grid)

**Layout Bento Grid (12-column):**
```
[Quote Card — 7 col]  [Design — 2 col]  [Frontend — 3 col]
[Backend — 3 col]  [DevOps — 2 col]  [12+ Years mini timeline — 7 col]
```

**Komponen:**
- [ ] `BentoGrid.tsx` — grid container dengan responsive breakpoints
- [ ] `GlassCard.tsx` — glass effect card, hover → border glow accent color
- [ ] `SkillBadge.tsx` — badge dengan icon (devicons atau custom SVG)

**Konten per card:**
- Quote card: tagline personal + aesthetic typography
- Design: Figma, Sketch, Adobe CC, Principle
- Frontend: React, Next.js, TypeScript, Tailwind, Framer Motion
- Backend: Node.js, PostgreSQL, Redis, REST, GraphQL
- DevOps: Docker, K8s, CI/CD, AWS/GCP basics
- Timeline mini: visual bar 2012 → 2026

### PHASE 7 — Projects Section

**Layout:**
- Project 1: Full-width featured card (besar, dominan)
- Project 2 + 3: Side-by-side cards (50/50)

**Komponen:**
- [ ] `ProjectCard.tsx`:
  - Screenshot/preview image (next/image, optimized)
  - Hover effect: image scale 1.05 + overlay dengan tombol link
  - Tech stack badges
  - Project title + deskripsi singkat
  - Link: Live site + GitHub
- [ ] Featured project dengan case study brief (problem → solution → result)

### PHASE 8 — Contact Section

**Komponen:**
- [ ] Form: Nama, Email, Pesan (shadcn Input + Textarea)
  - Validasi client-side
  - Submit handling (Resend API / Formspree / email mailto fallback)
- [ ] Copy email button dengan feedback visual (tooltip "Copied!")
- [ ] Social links: LinkedIn, GitHub, Twitter/X

### PHASE 9 — Polish & Micro-interactions

- [ ] Custom cursor yang berubah saat hover elemen interaktif
- [ ] Scroll progress indicator (thin line di top atau sisi kanan)
- [ ] Page load animation (brief, tidak blocking)
- [ ] All links: underline animation smooth
- [ ] Magnetic buttons di CTA hero dan contact
- [ ] Card tilt 3D pada project cards (mouse tracking + Framer Motion)
- [ ] `@prefers-reduced-motion` fallback untuk semua animasi

### PHASE 10 — SEO & Performance

#### 10.1 Metadata Lengkap (`src/app/layout.tsx`)

```tsx
import type { Metadata } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://[domain].dev'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: '[Nama] — Fullstack Developer & UI/UX Designer',
    template: '%s | [Nama]',
  },
  description:
    'Fullstack developer dengan background 12 tahun UI/UX design. Membangun produk dari wireframe sampai deployment. Based in Jakarta, Indonesia.',
  keywords: [
    'fullstack developer',
    'ui ux designer',
    'react developer',
    'next.js developer',
    'jakarta developer',
    '[nama]',
  ],
  authors: [{ name: '[Nama]', url: BASE_URL }],
  creator: '[Nama]',
  publisher: '[Nama]',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    url: BASE_URL,
    siteName: '[Nama] — Portfolio',
    title: '[Nama] — Fullstack Developer & UI/UX Designer',
    description: 'Designer-turned-engineer building products that work beautifully.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '[Nama] Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@[twitter_handle]',
    creator: '@[twitter_handle]',
    title: '[Nama] — Fullstack Developer',
    description: 'Designer-turned-engineer. 12 yrs experience. Based in Jakarta.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: '[GOOGLE_SEARCH_CONSOLE_TOKEN]', // dari Google Search Console
  },
  other: {
    'theme-color': '#080F1A',
    'color-scheme': 'dark',
  },
}
```

#### 10.2 Dynamic OG Image (`src/app/opengraph-image.tsx`)

```tsx
// Next.js auto-render file ini sebagai gambar — tanpa konfigurasi tambahan
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = '[Nama] — Fullstack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#080F1A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <p style={{ color: '#4F8EF7', fontSize: 20, margin: '0 0 16px', letterSpacing: '0.1em' }}>
          PORTFOLIO
        </p>
        <h1 style={{ color: '#F0F6FF', fontSize: 72, fontWeight: 700, margin: '0 0 16px', lineHeight: 1.1 }}>
          [Nama]
        </h1>
        <p style={{ color: '#8BA3C7', fontSize: 28, margin: 0 }}>
          Fullstack Developer & UI/UX Designer
        </p>
        <p style={{ color: '#4A6080', fontSize: 20, marginTop: 40 }}>
          Jakarta, Indonesia · 12 Years Experience
        </p>
      </div>
    ),
    size,
  )
}
```

#### 10.3 JSON-LD Structured Data (`src/components/JsonLd.tsx`)

```tsx
// Gunakan pattern ini — Next.js merender <script type="application/ld+json">
// via metadata API atau Script component (bukan dangerouslySetInnerHTML langsung)
import Script from 'next/script'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: '[Nama Lengkap]',
  url: 'https://[domain].dev',
  image: 'https://[domain].dev/images/profile.jpg',
  jobTitle: 'Fullstack Developer',
  description:
    'Fullstack developer dengan background UI/UX design. 12 tahun pengalaman membangun produk digital.',
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Node.js', 'UI/UX Design', 'PostgreSQL'],
  sameAs: [
    'https://github.com/[username]',
    'https://linkedin.com/in/[username]',
    'https://twitter.com/[username]',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jakarta',
    addressCountry: 'ID',
  },
}

export function JsonLd() {
  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      // Konten JSON.stringify() ini sepenuhnya dikontrol oleh developer,
      // bukan user input — sehingga aman dari XSS
      // eslint-disable-next-line react/no-danger
      strategy="afterInteractive"
    >
      {JSON.stringify(personSchema)}
    </Script>
  )
}
// Pasang di src/app/layout.tsx: <JsonLd /> di dalam <body>
```

#### 10.4 Sitemap & Robots (`src/app/`)

```ts
// src/app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://[domain].dev',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

```ts
// src/app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://[domain].dev/sitemap.xml',
  }
}
```

#### 10.5 Favicon & Web Manifest (`src/app/`)

```
src/app/
├── favicon.ico              # 32x32 — wajib
├── icon.png                 # 512x512 — untuk PWA & Android
├── apple-icon.png           # 180x180 — untuk iOS home screen
└── manifest.ts              # Web App Manifest
```

```ts
// src/app/manifest.ts
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '[Nama] — Fullstack Developer',
    short_name: '[Nama]',
    description: 'Portfolio of [Nama], Fullstack Developer & UI/UX Designer',
    start_url: '/',
    display: 'standalone',
    background_color: '#080F1A',
    theme_color: '#080F1A',
    icons: [{ src: '/icon.png', sizes: '512x512', type: 'image/png' }],
  }
}
```

#### 10.6 `next.config.ts` Optimization

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 768, 1024, 1440, 1920],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

export default nextConfig
```

#### 10.7 Performance Checklist

- [ ] Lighthouse Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100
- [ ] Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] First Contentful Paint < 1.5s
- [ ] Semua gambar menggunakan `next/image` (auto-optimize + lazy load)
- [ ] Semua font menggunakan `next/font` (zero layout shift)
- [ ] `@prefers-reduced-motion` fallback untuk semua animasi
- [ ] Test semua breakpoint: 390px, 768px, 1024px, 1440px
- [ ] Test aksesibilitas: keyboard navigation, focus visible, alt text semua gambar
- [ ] No console errors di production

---

### PHASE 11 — Vercel Deployment & Launch

#### 11.1 Environment Variables

```bash
# .env.local (development)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Set di Vercel Dashboard → Settings → Environment Variables
NEXT_PUBLIC_SITE_URL=https://[domain].dev
RESEND_API_KEY=[key]           # jika pakai Resend untuk contact form
```

#### 11.2 Deploy ke Vercel

```bash
# Opsi 1: Via Vercel CLI
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy

# Opsi 2 (Direkomendasikan): Connect GitHub repo ke Vercel dashboard
# vercel.com/new → Import Git Repository → auto-deploy setiap push ke main
```

#### 11.3 Custom Domain Setup

```
Vercel Dashboard → Project → Settings → Domains
→ Add domain: [domain].dev
→ Ikuti instruksi DNS (A record atau CNAME di registrar)
→ SSL otomatis via Let's Encrypt
→ Set redirect: www → root domain (Vercel handle otomatis)
```

#### 11.4 Post-Launch Checklist

- [ ] Deploy production berhasil, tidak ada build error
- [ ] Custom domain connected + SSL badge hijau di Vercel
- [ ] www → non-www redirect aktif
- [ ] Vercel Analytics diaktifkan (Vercel dashboard → Analytics tab)
- [ ] Google Search Console: verify ownership + submit sitemap `https://[domain].dev/sitemap.xml`
- [ ] Test OG image preview di: `developers.facebook.com/tools/debug`
- [ ] Test Twitter Card di: `cards-dev.twitter.com/validator`
- [ ] Test kecepatan di: `pagespeed.web.dev`
- [ ] Submit ke direktori portfolio:
  - [ ] bestfolios.com — submit via form
  - [ ] devportfolios.dev
  - [ ] humans.fyi
  - [ ] itsnicethat.com (jika desain sangat kuat)

---

## 6. Data File Struktur (`src/lib/data.ts`)

```typescript
// src/lib/data.ts — ISI DENGAN DATA ASLI KAMU

export const personalInfo = {
  name: "[Nama Kamu]",
  tagline: "[Tagline — pilih dari opsi di PERSONAL_WEBSITE_PLAN.md]",
  taglineShort: "[Sub tagline 1 baris]",
  bio: "[Bio 150-200 kata]",
  bioShort: "[Bio 2-3 kalimat untuk hero]",
  location: "Jakarta, Indonesia",
  email: "[email@domain.com]",
  isAvailable: true,
  cvUrl: "/cv.pdf",
  social: {
    github: "https://github.com/[username]",
    linkedin: "https://linkedin.com/in/[username]",
    twitter: "https://twitter.com/[username]",
  },
  stats: {
    yearsExperience: 12,
    projectsCompleted: 20,
    descriptor: "Design + Code",
  },
}

export const journey = [
  {
    era: "2012 — 2016",
    role: "UI/UX Designer",
    description: "[Cerita singkat era ini]",
    skills: ["Figma", "Adobe CC", "Sketch", "UX Research", "Prototyping"],
    color: "purple", // accent-purple
  },
  {
    era: "2016 — 2022",
    role: "Frontend Developer",
    description: "[Cerita singkat era ini]",
    skills: ["React", "Vue", "JavaScript", "CSS", "TypeScript"],
    color: "blue", // accent-blue
  },
  {
    era: "2023 — Sekarang",
    role: "Fullstack Developer",
    description: "[Cerita singkat era ini]",
    skills: ["Node.js", "Next.js", "PostgreSQL", "Docker", "AWS"],
    color: "green", // accent-green
  },
]

export const skills = {
  design: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Principle", "Prototyping"],
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "PostgreSQL", "Redis", "REST API", "GraphQL"],
  devops: ["Docker", "Kubernetes", "CI/CD", "AWS", "Vercel", "Git"],
}

export const projects = [
  {
    id: 1,
    title: "[Nama Project 1]",
    description: "[Problem yang diselesaikan dan solusinya — 2 kalimat]",
    image: "/images/projects/project-1.png",
    techStack: ["Next.js", "PostgreSQL", "AWS"],
    liveUrl: "https://[domain].com",
    githubUrl: "https://github.com/[username]/[repo]",
    featured: true, // → tampil sebagai full-width card
  },
  // ... project 2, 3
]
```

---

## 7. Keputusan Teknis Penting

### Q: Pakai Figma Make code langsung atau rebuild?
**A: Rebuild dari scratch dengan Next.js 15.**
Figma Make menghasilkan Vite + React, tanpa SSG/SSR, tanpa SEO optimization. Code dari Figma Make tetap berharga sebagai **referensi visual dan struktur section**, bukan sebagai base code.

### Q: shadcn/ui vs custom components sepenuhnya?
**A: shadcn/ui sebagai base untuk form elements dan overlays, custom untuk semua section-level components.**
shadcn memberikan aksesibilitas, focus management, dan keyboard navigation gratis. Tidak perlu reinvent untuk input, dialog, sheet (drawer).

### Q: Framer Motion vs CSS Scroll-Driven Animations?
**A: Hybrid approach.**
- CSS Scroll-Driven Animations untuk reveals sederhana (fade-up, slide-in) — zero JS, performa terbaik
- Framer Motion untuk animasi kompleks (staggered, magnetic, physics-based, orchestrated sequences)
- GSAP hanya jika perlu timeline animasi yang sangat kompleks (opsional, di-lazy load)

### Q: Three.js/WebGL untuk hero background?
**A: Gunakan Spline atau CSS aurora gradient terlebih dahulu.**
Jika mau upgrade, embed Spline 3D scene yang sudah dibuat (drag-n-drop, zero Three.js code). WebGL custom adalah Phase 2 optional setelah launch.

---

## 8. Timeline Eksekusi (Revised)

| Phase | Milestone | Estimasi |
|-------|-----------|----------|
| 0 | Siapkan semua konten (WAJIB sebelum coding!) | Sebelum mulai |
| 1 | Setup & Foundation | Day 1 |
| 2 | Layout & Navigation | Day 2 |
| 3 | Hero Section | Day 3-4 |
| 4 | Journey Section | Day 5 |
| 5 | About Section | Day 6 |
| 6 | Skills Bento Grid | Day 7-8 |
| 7 | Projects Section | Day 9-10 |
| 8 | Contact Section | Day 11 |
| 9 | Polish & Micro-interactions | Day 12-13 |
| 10 | SEO, Perf, Launch | Day 14 |

---

## 9. Referensi Figma Make — Komponen yang Bisa Dijadikan Acuan Visual

Dari Figma Make (`CUTJV77opGcpE858v0fORD`), section yang tersedia:

| Figma Make File | Fungsi | Gunakan Sebagai |
|----------------|--------|-----------------|
| `Hero.tsx` | Hero section | Referensi layout + spacing + element order |
| `Journey.tsx` | Timeline karir | Referensi struktur timeline + visual treatment |
| `About.tsx` | About section | Referensi foto layout + bio placement |
| `Skills.tsx` | Skills section | Referensi kategori skill + card style |
| `Projects.tsx` | Projects section | Referensi card layout + hover behavior |
| `Contact.tsx` | Contact section | Referensi form layout + social links |
| `Navbar.tsx` | Navigation | Referensi nav items + mobile behavior |
| `theme.css` | Design tokens | Referensi color variables yang dipakai Figma Make |
| `tailwind.css` | Utility config | Referensi custom Tailwind classes yang dipakai |

> ⚠️ **Catatan:** Figma Make menggunakan Vite + React (bukan Next.js). Jangan copy-paste langsung — gunakan sebagai visual reference saja. Implementasi ulang dengan Next.js 15 App Router.

---

## 10. Quick Start Command

```bash
# Setelah semua konten siap, mulai dari sini:
npx create-next-app@latest personal-website \
  --typescript --tailwind --app --src-dir --import-alias "@/*"

cd personal-website
npx shadcn@latest init

# Install semua dependencies sekaligus
npm install framer-motion @studio-freight/lenis lucide-react next-themes clsx tailwind-merge

# Add shadcn components yang dibutuhkan
npx shadcn@latest add button badge card separator input textarea sheet tooltip

# Run dev server
npm run dev
```

---

*Dokumen ini adalah master plan. Dokumen lain di folder docs tetap berlaku sebagai referensi detail:*
- `PERSONAL_WEBSITE_PLAN.md` → Detail positioning, branding, animasi principles
- `DESIGN_REFERENCES.md` → Referensi visual dan inspirasi
- `TECH_SETUP.md` → Code snippets siap pakai (FadeIn, MagneticButton, Lenis setup)
- `WIREFRAME_STRUCTURE.md` → ASCII wireframe detail tiap section
