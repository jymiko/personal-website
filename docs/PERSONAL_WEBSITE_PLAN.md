# Personal Website Plan
**Owner:** Fullstack Developer | Ex UI/UX Designer (2012–2016) → Frontend Dev (2016–2022) → Fullstack (2023–now)
**Dokumen dibuat:** 2026-03-05

---

## Daftar Isi

1. [Positioning & Personal Branding](#1-positioning--personal-branding)
2. [UI/UX Direction & Referensi Trend 2025/2026](#2-uiux-direction--referensi-trend-20252026)
3. [Arsitektur Halaman](#3-arsitektur-halaman)
4. [Tech Stack Rekomendasi](#4-tech-stack-rekomendasi)
5. [Design System](#5-design-system)
6. [Interaksi & Animasi](#6-interaksi--animasi)
7. [Konten yang Dibutuhkan](#7-konten-yang-dibutuhkan)
8. [Timeline Eksekusi](#8-timeline-eksekusi)

---

## 1. Positioning & Personal Branding

### Proposisi Unik
Kamu bukan sekadar developer biasa. Kamu adalah **"The Designer Who Codes"** — seseorang yang memahami produk dari dua sisi sekaligus: estetika dan implementasi. Ini adalah differentiation yang sangat kuat.

### Tagline Options (pilih satu)
- `"I design systems. I build them too."`
- `"From pixels to production."`
- `"Crafting interfaces that work — from wireframe to deployment."`
- `"Where design meets engineering."`

### Tone of Voice
- **Confident**, bukan arogan
- **Technical**, tapi accessible
- **Storytelling-driven** — perjalanan 12+ tahun adalah aset, bukan sekadar resume

### Target Audiens
| Audiens | Tujuan |
|---|---|
| Recruiter / HR | Melihat kualitas & depth pengalaman |
| CTO / Tech Lead | Melihat kemampuan teknis & arsitektur |
| Klien freelance | Meyakinkan bahwa kamu bisa handle end-to-end |
| Sesama developer | Personal branding dalam komunitas |

---

## 2. UI/UX Direction & Referensi Trend 2025/2026

### Trend yang Relevan untuk Developer Portfolio

#### 2.1 Bento Grid Layout
Layout grid asimetris seperti Apple Product Page dan Linear.app. Setiap "bento box" berisi satu highlight (skill, project, stat, quote). Terasa modern, terorganisir, dan sangat scannable.

```
Referensi visual:
- linear.app (bento-style feature sections)
- apple.com/iphone (bento grid pada product page)
- pools.co (developer portfolio bento)
```

#### 2.2 Dark Mode sebagai Default + Glassmorphism
Dark background (#0A0A0A atau #080F1A) dengan card glass effect. Kombinasi dengan neon accent color. Trend ini mendominasi developer portfolio 2024-2026.

```
Referensi:
- railway.app
- vercel.com
- leerob.io
```

#### 2.3 Scroll-Triggered Animations (Cinematic Scrollytelling)
Elemen masuk layar dengan animasi yang diatur oleh scroll position. Bukan sekedar fade-in, tapi animasi yang bercerita — setiap scroll reveal satu bagian dari journey kamu.

```
Referensi:
- stripe.com/sessions (scroll storytelling)
- apple.com/airpods-pro (scroll-driven animation)
- bruno-simon.com (3D portfolio — extreme version)
```

#### 2.4 Kinetic Typography
Headline besar dengan animasi teks — karakter muncul satu per satu, kata bergerak, atau text scramble effect. Sangat efektif untuk first impression.

```
Referensi:
- aceternity.com/components (text generate effect)
- paco.me (personal site)
```

#### 2.5 Cursor Custom & Micro-interactions
Custom cursor (titik yang mengikuti mouse dan bereaksi terhadap hover), magnetic buttons, dan hover effects yang smooth.

```
Referensi:
- rauno.me
- joshwcomeau.com
- brittanychiang.com (v4 — salah satu portfolio developer terbaik)
```

#### 2.6 Noise Texture + Grain Overlay
Subtle noise texture di atas background solid/gradient memberikan kesan premium dan tactile. Sangat populer di portfolio 2025.

#### 2.7 Terminal / Code Aesthetic (untuk Developer)
Elemen UI yang terinspirasi terminal — typing animation, command-line display untuk bio/skills, monospace font yang digunakan secara strategis.

```
Referensi:
- cassidoo.co
- antfu.me
```

### Referensi Portfolio Developer Terbaik 2024-2026
| Site | Apa yang menarik |
|---|---|
| `brittanychiang.com` | Layout bersih, dark mode, sticky nav, scroll animation |
| `leerob.io` | Minimalis tapi sangat functional, Next.js showcase |
| `paco.me` | Typography bold, micro-interactions halus |
| `rauno.me` | Custom cursor, smooth transition, Apple-like polish |
| `joshwcomeau.com` | Interaktif, penuh micro-interaction, playful |
| `antfu.me` | Clean, terminal aesthetic, open source showcase |
| `bruno-simon.com` | 3D WebGL portfolio (reference extreme — tidak harus ditiru) |
| `emilkowalski_.com` | Framer-like animations, minimal dark |

---

## 3. Arsitektur Halaman

### Single Page Application dengan Section-based Navigation

```
/ (Home)
├── Hero Section
├── About / Story Section
├── Skills & Expertise Section
├── Featured Projects Section
├── Experience Timeline Section
├── Testimonials / Social Proof Section (opsional)
├── Blog / Writing Section (opsional)
└── Contact Section
```

### Detail Setiap Section

#### Hero Section
- Tagline bold + animated
- Nama + role
- Subtle animated background (gradient blob / particle / noise)
- CTA: "View Work" + "Contact Me"
- Status indicator: "Available for work" atau "Currently at [company]"

#### About / Story Section
- Bukan sekedar bio — ini adalah **narasi perjalanan**
- Timeline visual: 2012 (Design) → 2016 (Frontend) → 2023 (Fullstack)
- Photo dengan aesthetic treatment (grayscale + color hover, atau bento-box layout)
- Satu kalimat kuat yang merangkum identity

#### Skills & Expertise Section
- Bento grid: Design Tools | Frontend | Backend | DevOps
- Visual yang menarik — bukan list bullet biasa
- Bisa dengan logo/icon animasi
- Skill depth indicator yang kreatif (bukan progress bar biasa)

#### Featured Projects Section
- Maksimal 3-4 project terbaik
- Card dengan hover animation yang menampilkan preview
- Tag: teknologi yang digunakan
- Link ke live site + GitHub

#### Experience Timeline Section
- Timeline visual interaktif
- Milestone: setiap transisi karir
- Bisa dikombinasikan dengan "Achievement" highlights

#### Contact Section
- Form minimalis
- Social links
- Email yang mudah di-copy
- Lokasi (kota saja)

---

## 4. Tech Stack Rekomendasi

### Primary Stack: Next.js 15 + Framer Motion

```
Framework    : Next.js 15 (App Router)
Styling      : Tailwind CSS v4
Animation    : Framer Motion
3D (opsional): Three.js / React Three Fiber
CMS (blog)   : Contentlayer / MDX / Sanity
Deployment   : Vercel
Analytics    : Vercel Analytics / Umami (privacy-first)
```

### Mengapa Next.js?
- SSG untuk performa maksimal (Lighthouse score tinggi = kesan profesional)
- App Router untuk struktur yang bersih
- Image optimization bawaan
- Deploy ke Vercel = showcase bahwa kamu tahu ecosystem modern

### Library Animasi & Interaksi
```
Framer Motion     — animasi komponen React
GSAP              — scroll-triggered animation, timeline animasi kompleks
Lenis             — smooth scroll library
Particles.js      — partikel latar hero (jika dipakai)
react-spring      — fisika animasi
Spline            — 3D interaktif tanpa Three.js langsung
```

---

## 5. Design System

### Color Palette (Dark Mode First)

```
Background Primary   : #080F1A  (deep navy dark)
Background Secondary : #0F1A2E  (card/surface)
Background Tertiary  : #162035  (hover states)

Text Primary    : #F0F6FF  (near white, soft)
Text Secondary  : #8BA3C7  (muted, untuk subtitle)
Text Tertiary   : #4A6080  (placeholder, disabled)

Accent Primary  : #4F8EF7  (blue — tech/reliable)
Accent Glow     : #4F8EF740 (glow effect, 25% opacity)
Accent Secondary: #A78BFA  (purple — creative/design side)
Accent Tertiary : #34D399  (green — success/available)

Border          : #1E2D47  (subtle border)
Border Light    : #2A3F5F  (hover border)
```

> Palette ini menggabungkan **biru teknis** (developer credibility) dengan **ungu kreatif** (design background) — perfectly fits your story.

### Typography

```
Display / Heading : Geist (Vercel's font) atau Cal Sans
Body              : Inter atau Plus Jakarta Sans
Monospace/Code    : JetBrains Mono atau Geist Mono

Scale:
- Display  : 80-96px / line-height 1.1
- H1       : 56-64px / line-height 1.1
- H2       : 40px    / line-height 1.2
- H3       : 28px    / line-height 1.3
- Body     : 16-18px / line-height 1.6
- Small    : 14px    / line-height 1.5
- Mono     : 13-14px / line-height 1.6
```

### Spacing System (8px Grid)
```
4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128px
```

### Border Radius
```
sm  : 6px   (input, small badges)
md  : 12px  (cards, buttons)
lg  : 20px  (large cards, modal)
xl  : 28px  (hero cards)
full: 9999px (pills, avatars)
```

---

## 6. Interaksi & Animasi

### Hierarki Animasi (dari paling penting)

#### Level 1 — First Impression (Hero)
- **Text scramble / typewriter** pada tagline utama
- **Staggered fade-in** untuk elemen hero (nama → role → CTA)
- **Ambient background animation** (gradient bergerak lambat, atau blob)

#### Level 2 — Scroll Experience
- **Scroll-triggered reveal** untuk setiap section
- **Parallax subtle** pada elemen dekoratif
- **Progress indicator** di sisi kanan atau top (thin line)

#### Level 3 — Interaksi Elemen
- **Magnetic buttons** — tombol "menarik" kursor saat hover
- **Card tilt** dengan efek 3D perspektif saat hover (menggunakan JS)
- **Image hover reveal** pada project cards
- **Skill icons** yang animate saat di-hover

#### Level 4 — Micro-interactions
- **Custom cursor** — dot kecil yang berubah ukuran saat hover elemen interaktif
- **Link underline animation** yang smooth
- **Copy email** dengan feedback visual
- **Theme toggle** dengan animasi (jika ada light mode)

### Prinsip Animasi
```
Duration  : 200ms (micro) | 400ms (standard) | 700ms (hero)
Easing    : cubic-bezier(0.16, 1, 0.3, 1)  — smooth deceleration
            cubic-bezier(0.4, 0, 0.2, 1)    — material standard
Stagger   : 80-120ms antar elemen
Reduced Motion: SELALU sediakan @prefers-reduced-motion fallback
```

---

## 7. Konten yang Dibutuhkan

### Wajib Disiapkan
- [ ] **Tagline final** — 1 kalimat yang merangkum dirimu
- [ ] **Bio singkat** (150-200 kata) — perjalanan dari desain ke engineering
- [ ] **Bio super singkat** (50 kata) — untuk hero section
- [ ] **Foto profesional** — square, high quality (min 800x800px)
- [ ] **3-4 project terbaik** dengan:
  - Screenshot / preview visual
  - Deskripsi singkat (apa problemnya, apa solusinya)
  - Tech stack yang digunakan
  - Link live + GitHub (jika open source)
- [ ] **Daftar skill** dengan kategorisasi (Design / Frontend / Backend / Tools)
- [ ] **Pengalaman kerja** singkat (perusahaan, role, tahun)
- [ ] **Kontak** (email, LinkedIn, GitHub, Twitter/X)
- [ ] **Status availability** (sedang available atau tidak)

### Nice to Have
- [ ] Testimonial dari kolega / klien (2-3 cukup)
- [ ] Blog posts atau artikel (minimal 1-2 untuk SEO)
- [ ] Case study satu project terbaik (detail deep-dive)
- [ ] Resume/CV dalam format PDF untuk di-download

---

## 8. Timeline Eksekusi

### Phase 1: Foundation (Minggu 1-2)
- [ ] Setup Next.js 15 project + Tailwind v4
- [ ] Buat design system (tokens, komponen dasar)
- [ ] Design mockup di Figma untuk Hero + About (desktop + mobile)
- [ ] Setup Framer Motion dan Lenis smooth scroll

### Phase 2: Core Sections (Minggu 3-4)
- [ ] Implementasi Hero Section dengan animasi
- [ ] About / Story section
- [ ] Skills section (bento grid)
- [ ] Experience timeline

### Phase 3: Projects & Polish (Minggu 5-6)
- [ ] Projects section dengan hover effects
- [ ] Contact section
- [ ] Custom cursor implementation
- [ ] Micro-interactions & polish

### Phase 4: Launch Prep (Minggu 7)
- [ ] SEO optimization (meta, OG image, sitemap)
- [ ] Performance audit (target Lighthouse 90+)
- [ ] Responsiveness check (mobile, tablet, desktop)
- [ ] Deploy ke Vercel + custom domain setup
- [ ] Analytics setup

---

## Catatan Penting

### SEO & Discoverability
- Custom domain (nama kamu.dev atau .me atau .id)
- OG image yang menarik untuk sharing di LinkedIn/Twitter
- Structured data (JSON-LD) untuk Person schema
- Target keyword: nama kamu + "fullstack developer" + kota

### Performance Target
```
Lighthouse Performance : 90+
Lighthouse Accessibility: 95+
First Contentful Paint : < 1.5s
Largest Contentful Paint: < 2.5s
```

### Yang Membuat Portfolio Kamu Berbeda dari Developer Lain
1. **Cerita transisi karir** — dari desainer ke developer adalah narasi yang compelling
2. **Design quality yang terlihat** — layout, tipografi, dan detail yang menunjukkan kamu bukan developer biasa
3. **Interaktivitas** yang thoughtful — bukan sekedar animasi, tapi animasi yang meaningful
4. **Kode yang bisa dilihat** — link ke GitHub repo portfolio itu sendiri sebagai bukti engineering quality
