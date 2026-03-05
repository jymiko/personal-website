# Wireframe Structure — Personal Website
**Layout:** Single Page App | Dark Mode First | Bento Grid + Scroll Animation

---

## Viewport Breakdown

```
Desktop : 1440px (design base)
Tablet  : 768px
Mobile  : 390px (iPhone 14 Pro)
```

---

## Section 1: HERO

```
┌─────────────────────────────────────────────────────────────┐
│  NAV: [Logo/Name]                    [About Work Contact]   │
│       ←── sticky, frosted glass on scroll ──────────────→  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ● Available for work  ←── status badge dengan dot merah  │
│                                                             │
│   Fullstack Developer              ←── monospace, kecil    │
│   with a Designer's Eye.           ←── Display 80px bold   │
│                                                             │
│   [Sub tagline 1 baris — 18px muted color]                  │
│                                                             │
│   [  View My Work  ]  [  Contact Me  ]   ←── dua CTA       │
│                                                             │
│   ─────────────────────────────────────────────────────    │
│   12 yrs exp    ·    20+ projects    ·    Design + Code     │
│   ←── stats row, kecil dan muted ──────────────────────→   │
│                                                             │
│   [ANIMATED BACKGROUND: aurora gradient blob]               │
└─────────────────────────────────────────────────────────────┘

Animasi:
- Status badge: pulse animation pada dot
- Text: staggered fade-up (0.1s delay tiap elemen)
- Background: slow-moving aurora gradient
- Scroll indicator: bouncing arrow di bottom
```

---

## Section 2: BENTO GRID — Skills & Highlights

```
┌─────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────┐  ┌───────────┐  ┌───────────┐ │
│  │                         │  │           │  │           │ │
│  │   "I speak both         │  │  DESIGN   │  │ FRONTEND  │ │
│  │    Figma and            │  │  Figma    │  │ React     │ │
│  │    Terminal."           │  │  Sketch   │  │ Next.js   │ │
│  │                         │  │  Adobe CC │  │ TypeScript│ │
│  │   ←── quote card ───→   │  │           │  │           │ │
│  │   (span 7 col)          │  │(span 2col)│  │(span 3col)│ │
│  └─────────────────────────┘  └───────────┘  └───────────┘ │
│  ┌───────────┐  ┌───────────┐  ┌──────────────────────────┐ │
│  │           │  │           │  │                          │ │
│  │  BACKEND  │  │  DEVOPS   │  │  12+ Years of Craft      │ │
│  │  Node.js  │  │  Docker   │  │  2012 ────────── 2026    │ │
│  │  Postgres │  │  K8s      │  │  Design → FE → Fullstack │ │
│  │  Redis    │  │  CI/CD    │  │  ←── mini timeline ───→  │ │
│  │           │  │           │  │                          │ │
│  │(span 3col)│  │(span 2col)│  │  (span 7 col)            │ │
│  └───────────┘  └───────────┘  └──────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

Semua card: glass effect, hover dengan border glow
```

---

## Section 3: ABOUT / STORY

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   ┌────────────────┐    ┌──────────────────────────────┐   │
│   │                │    │                              │   │
│   │   [FOTO]       │    │  The story so far.           │   │
│   │                │    │  ←── H2 heading ──────────→  │   │
│   │  grayscale →   │    │                              │   │
│   │  color on hover│    │  Paragraph bio yang bercerita│   │
│   │                │    │  tentang perjalanan dari     │   │
│   │                │    │  desainer ke developer.      │   │
│   │  ┌──────────┐  │    │                              │   │
│   │  │ Location │  │    │  "Not just a developer.      │   │
│   │  │ Jakarta  │  │    │   Not just a designer.       │   │
│   │  └──────────┘  │    │   Both."                     │   │
│   └────────────────┘    │                              │   │
│                         │  [ Download CV ]             │   │
│                         └──────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Section 4: EXPERIENCE TIMELINE

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   Journey                         ←── section title        │
│                                                             │
│   2012 ●────────────────────────────────────────● 2026     │
│         │                                       │          │
│   ┌─────▼──────┐   ┌──────────────┐   ┌────────▼────────┐  │
│   │            │   │              │   │                 │  │
│   │  UI/UX     │   │  Frontend    │   │  Fullstack      │  │
│   │  Designer  │   │  Developer   │   │  Developer      │  │
│   │            │   │              │   │                 │  │
│   │ 2012-2016  │   │  2016-2022   │   │  2023-Present   │  │
│   │            │   │              │   │                 │  │
│   │ Figma/Adobe│   │ React/Vue    │   │ Node/Next.js    │  │
│   │ UX Research│   │ CSS/JS       │   │ DB/Infra/API    │  │
│   └────────────┘   └──────────────┘   └─────────────────┘  │
│                                                             │
│   ←── Cards muncul satu per satu saat scroll ─────────→   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Section 5: FEATURED PROJECTS

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   Selected Work                    ←── section title       │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐  │
│   │  PROJECT 1                           [↗ Live] [<> ]  │  │
│   │  ─────────────────────────────────────────────────  │  │
│   │  [Preview Image / Screenshot]                        │  │
│   │  ─────────────────────────────────────────────────  │  │
│   │  Nama Project          Next.js · PostgreSQL · AWS   │  │
│   │  Deskripsi singkat problem dan solusi (2 baris)     │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   ┌──────────────────────┐  ┌──────────────────────────┐   │
│   │  PROJECT 2           │  │  PROJECT 3               │   │
│   │  [Image]             │  │  [Image]                 │   │
│   │  Nama                │  │  Nama                    │   │
│   │  React · Node.js     │  │  Vue · Express · MySQL   │   │
│   └──────────────────────┘  └──────────────────────────┘   │
│                                                             │
│              [ View All Projects → ]                        │
└─────────────────────────────────────────────────────────────┘

Hover effect: image scale-up + overlay dengan deskripsi
```

---

## Section 6: CONTACT

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   Let's build something.          ←── besar, bold          │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐  │
│   │                                                     │  │
│   │   [Name]          [Email]                           │  │
│   │   ─────────────────────────────────────────────    │  │
│   │   [Message / Project brief]                         │  │
│   │                                                     │  │
│   │                              [ Send Message → ]     │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   Or reach me directly:                                     │
│   ✉  email@domain.com   [copy icon]                        │
│   🔗  linkedin    GitHub    Twitter                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Section 7: FOOTER

```
┌─────────────────────────────────────────────────────────────┐
│  [Name] © 2026        Designed & Built with ♥ in Jakarta   │
│  [GitHub] [LinkedIn] [Twitter]     [ Back to top ↑ ]       │
└─────────────────────────────────────────────────────────────┘
```

---

## Mobile Adaptation (390px)

```
- Semua bento grid menjadi single column stack
- Hero: font display dikecilkan ke 48px
- Navigation: hamburger menu dengan slide-in drawer
- Project cards: full width, swipeable carousel
- Timeline: vertical dengan scroll
- Stats row di hero: 2 kolom grid
```

---

## Navigation Behavior

```
Scroll 0-100px    : Transparent navbar
Scroll > 100px    : Navbar dengan frosted glass background
                    background: rgba(8,15,26,0.8)
                    backdrop-filter: blur(20px)
                    border-bottom: 1px solid rgba(255,255,255,0.05)

Active section    : Highlight nav item sesuai section yang sedang dilihat
                    (Intersection Observer API)

Mobile            : Fixed bottom nav (4 icon) atau hamburger top-right
```
