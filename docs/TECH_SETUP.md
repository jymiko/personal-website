# Tech Setup Guide — Personal Website

## Initial Project Setup

```bash
# Buat Next.js 15 project
npx create-next-app@latest personal-website \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"

cd personal-website

# Install dependencies utama
npm install framer-motion
npm install @studio-freight/lenis          # smooth scroll
npm install clsx tailwind-merge            # conditional classnames
npm install lucide-react                   # icons
npm install next-themes                    # dark/light mode (opsional)

# Install dev dependencies
npm install -D @types/node
```

---

## Struktur Folder

```
src/
├── app/
│   ├── layout.tsx          # Root layout + font + metadata
│   ├── page.tsx            # Home page — semua section di sini
│   └── globals.css         # Global styles, CSS variables
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── BentoSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TimelineSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   │
│   ├── ui/
│   │   ├── BentoCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── GlassCard.tsx
│   │   └── CustomCursor.tsx
│   │
│   └── animations/
│       ├── FadeIn.tsx           # Reusable scroll-triggered fade
│       ├── TextScramble.tsx     # Text scramble effect
│       └── MagneticButton.tsx   # Magnetic hover button
│
├── lib/
│   ├── utils.ts             # cn() helper, dll
│   └── data.ts              # Data konten (projects, skills, timeline)
│
└── public/
    ├── images/
    │   ├── profile.jpg
    │   ├── projects/
    │   └── og-image.png
    └── fonts/ (jika self-host)
```

---

## CSS Variables (globals.css)

```css
:root {
  /* Colors */
  --bg-primary: #080F1A;
  --bg-secondary: #0F1A2E;
  --bg-tertiary: #162035;

  --text-primary: #F0F6FF;
  --text-secondary: #8BA3C7;
  --text-tertiary: #4A6080;

  --accent-blue: #4F8EF7;
  --accent-purple: #A78BFA;
  --accent-green: #34D399;

  --border: #1E2D47;
  --border-light: #2A3F5F;

  /* Spacing */
  --nav-height: 72px;
  --section-padding: 96px;
  --container-max: 1200px;
  --container-padding: 24px;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Selection color */
::selection {
  background-color: var(--accent-blue);
  color: var(--bg-primary);
}
```

---

## Metadata SEO (layout.tsx)

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '[Nama Kamu] — Fullstack Developer & UI Designer',
  description: 'Fullstack developer dengan background UI/UX design. Membangun produk dari wireframe sampai deployment.',
  keywords: ['fullstack developer', 'ui ux designer', 'react', 'next.js', 'node.js'],
  authors: [{ name: '[Nama Kamu]' }],
  openGraph: {
    title: '[Nama Kamu] — Fullstack Developer',
    description: 'Designer-turned-engineer building products that work beautifully.',
    url: 'https://[domain].dev',
    siteName: '[Nama Kamu]',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '[Nama Kamu] — Fullstack Developer',
    description: 'Designer-turned-engineer.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

---

## Contoh Implementasi Framer Motion

### FadeIn Component (reusable)
```tsx
// src/components/animations/FadeIn.tsx
'use client'
import { motion } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function FadeIn({ children, delay = 0, direction = 'up', className }: FadeInProps) {
  const directionOffset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

### Magnetic Button
```tsx
// src/components/animations/MagneticButton.tsx
'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (e.clientX - (left + width / 2)) * 0.3
    const y = (e.clientY - (top + height / 2)) * 0.3
    setPosition({ x, y })
  }

  const reset = () => setPosition({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

---

## Lenis Smooth Scroll Setup

```tsx
// src/app/layout.tsx atau providers.tsx
'use client'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return <>{children}</>
}
```

---

## Performa Tips

```
1. Gunakan next/image untuk semua gambar (auto-optimization)
2. Gunakan next/font untuk self-host font (zero layout shift)
3. Lazy load section yang tidak ada di viewport awal
4. Gunakan will-change: transform hanya pada elemen yang sedang animasi
5. Matikan animasi dengan prefers-reduced-motion
6. Gunakan Vercel untuk deploy (edge network, automatic optimization)
```

### Prefers Reduced Motion
```tsx
// Selalu tambahkan ini untuk aksesibilitas
import { useReducedMotion } from 'framer-motion'

function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      animate={{ opacity: 1, y: shouldReduceMotion ? 0 : undefined }}
      // ...
    />
  )
}
```

---

## Deploy ke Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login dan deploy
vercel

# Set custom domain di Vercel dashboard:
# Settings → Domains → Add domain
```

### Environment Variables (jika ada)
```bash
# .env.local (untuk development)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Di Vercel dashboard → Settings → Environment Variables
NEXT_PUBLIC_SITE_URL=https://[domain].dev
```
