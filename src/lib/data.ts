// src/lib/data.ts

export const personalInfo = {
  name: "Jatmiko",
  nameShort: "Jatmiko.",
  tagline: "I design systems. I build them too.",
  taglineSub: "From wireframe to deployment — end to end.",
  bio: `Perjalanan saya di dunia teknologi dimulai bukan dari baris kode, tapi dari piksel. Sejak 2012, saya bekerja sebagai UI/UX Designer — membangun design system, meneliti pengguna, dan merancang antarmuka untuk berbagai produk digital di berbagai industri.

Empat tahun kemudian, rasa penasaran mendorong saya untuk belajar code. Dari jQuery ke React, dari CSS biasa ke arsitektur komponen yang skalabel. Perspektif ganda ini — antara desainer yang memahami engineering, dan engineer yang memahami desain — menjadi keunggulan yang sulit ditemukan di tempat lain.

Kini sebagai Fullstack Developer, saya mengelola seluruh lifecycle produk: dari discovery dan wireframe, hingga database, API, dan deployment pipeline. Saya percaya produk terbaik lahir dari kolaborasi antara estetika dan fungsi — dan saya ada di persimpangan keduanya.`,
  bioShort: "Designer-turned-engineer. I build products that look great and work even better.",
  location: "Jakarta, Indonesia",
  email: "hello@rakapratama.dev",
  phone: "+62 812 3456 7890",
  isAvailable: true,
  cvUrl: "/cv.pdf",
  social: {
    github: "https://github.com/rakapratama",
    linkedin: "https://linkedin.com/in/rakapratama",
    twitter: "https://twitter.com/rakapratama",
  },
  stats: {
    yearsExperience: 12,
    projectsCompleted: 20,
    descriptor: "Design + Code",
  },
  siteUrl: "https://jatmiko.dev",
  twitterHandle: "@rakapratama",
}

export const journey = [
  {
    era: "2012 — 2016",
    phase: "01",
    role: "UI/UX Designer",
    color: "pink" as const,
    description:
      "Membangun fondasi sebagai seorang desainer di agency digital Jakarta. Mengerjakan produk dari berbagai industri — fintech, e-commerce, hingga enterprise. Belajar bahwa desain yang baik dimulai dari riset, bukan dari Figma.",
    skills: ["UX Research", "Wireframing", "Prototyping", "Design System", "User Testing"],
    tools: ["Figma", "Sketch", "Adobe XD", "InVision", "Zeplin"],
    achievement: "Memimpin redesign aplikasi mobile untuk 500k+ pengguna, meningkatkan retention rate sebesar 40%.",
  },
  {
    era: "2016 — 2022",
    phase: "02",
    role: "Frontend Developer",
    color: "violet" as const,
    description:
      "Transisi ke dunia code dimulai dari rasa penasaran — dan tidak pernah berhenti. Bergabung dengan tim produk startup sebagai frontend developer, membawa perspektif desainer ke dalam setiap komponen yang dibangun.",
    skills: ["Component Architecture", "State Management", "Performance", "Accessibility", "Testing"],
    tools: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Jest"],
    achievement: "Membangun design system dari nol yang diadopsi oleh 4 tim produk berbeda secara bersamaan.",
  },
  {
    era: "2023 — Sekarang",
    phase: "03",
    role: "Fullstack Developer",
    color: "cyan" as const,
    description:
      "Memperluas kemampuan ke sisi server, database, dan infrastruktur. Kini mengelola produk secara end-to-end — dari desain sistem hingga deployment di cloud.",
    skills: ["API Design", "Database Architecture", "Cloud Infrastructure", "DevOps", "System Design"],
    tools: ["Next.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
    achievement: "Meluncurkan SaaS B2B yang melayani 200+ UMKM dengan uptime 99.9% selama 12 bulan.",
  },
]

export const skills = {
  design: [
    { name: "Figma / Design System", level: "expert", percent: 95 },
    { name: "UI/UX Research", level: "expert", percent: 90 },
    { name: "Prototyping", level: "expert", percent: 92 },
    { name: "Adobe Illustrator", level: "advanced", percent: 78 },
    { name: "Motion Design", level: "intermediate", percent: 65 },
  ],
  frontend: [
    { name: "React / Next.js", level: "expert", percent: 95 },
    { name: "TypeScript", level: "advanced", percent: 88 },
    { name: "Tailwind CSS", level: "expert", percent: 93 },
    { name: "Framer Motion", level: "advanced", percent: 82 },
    { name: "Testing (Jest/RTL)", level: "advanced", percent: 78 },
  ],
  backend: [
    { name: "Node.js / Express", level: "advanced", percent: 85 },
    { name: "PostgreSQL", level: "advanced", percent: 82 },
    { name: "REST API Design", level: "advanced", percent: 88 },
    { name: "Redis", level: "intermediate", percent: 68 },
    { name: "GraphQL", level: "intermediate", percent: 70 },
  ],
  devops: [
    { name: "Vercel / Netlify", level: "expert", percent: 90 },
    { name: "Docker", level: "intermediate", percent: 72 },
    { name: "CI/CD (GitHub Actions)", level: "advanced", percent: 80 },
    { name: "AWS (EC2, S3, RDS)", level: "intermediate", percent: 68 },
    { name: "Git / Monorepo", level: "expert", percent: 92 },
  ],
}

export const techStack = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Node.js", "PostgreSQL", "Prisma", "Redis", "GraphQL",
  "Docker", "AWS", "Vercel", "Figma", "Storybook",
]

export const projects = [
  {
    id: 1,
    title: "Kasir Pro",
    subtitle: "Point of Sale untuk UMKM",
    description:
      "Platform POS modern untuk UMKM Indonesia. Menyelesaikan problem pencatatan manual dengan interface yang bisa dioperasikan kasir tanpa training — adopsi 3x lebih cepat dari kompetitor.",
    image: "/images/projects/project-1.svg",
    category: "Fullstack" as const,
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma"],
    liveUrl: "https://kasirpro.id",
    githubUrl: null,
    featured: true,
    caseStudy: {
      problem: "UMKM masih mengandalkan buku kas manual atau spreadsheet yang rentan error saat peak hours.",
      solution: "POS berbasis web dengan offline-first capability, thermal printer support, dan laporan real-time.",
      result: "200+ merchant di Jakarta dalam 6 bulan. Waktu transaksi turun dari 3 menit menjadi 45 detik.",
    },
  },
  {
    id: 2,
    title: "Deskflow",
    subtitle: "Remote Team OS",
    description:
      "Workspace virtual untuk tim remote yang menggabungkan standup async, project tracking, dan dokumentasi dalam satu platform terintegrasi.",
    image: "/images/projects/project-2.svg",
    category: "Frontend" as const,
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "AWS S3"],
    liveUrl: "https://deskflow.app",
    githubUrl: "https://github.com/rakapratama/deskflow",
    featured: false,
    caseStudy: null,
  },
  {
    id: 3,
    title: "Fondasi UI",
    subtitle: "Design System Open Source",
    description:
      "Open-source design system untuk produk Indonesia. Komponen aksesibel, terdokumentasi, dengan konteks lokal yang memahami kebutuhan pengguna Indonesia.",
    image: "/images/projects/project-3.svg",
    category: "UI-UX" as const,
    techStack: ["React", "TypeScript", "Storybook", "Radix UI", "Figma"],
    liveUrl: "https://fondasi-ui.dev",
    githubUrl: "https://github.com/rakapratama/fondasi-ui",
    featured: false,
    caseStudy: null,
  },
  {
    id: 4,
    title: "BayarIn",
    subtitle: "Fintech Payment Gateway",
    description:
      "Payment gateway lokal dengan integrasi multi-bank dan e-wallet Indonesia. Dirancang untuk developer yang ingin integrasi pembayaran tanpa kerumitan enterprise.",
    image: "/images/projects/project-1.svg",
    category: "Fullstack" as const,
    techStack: ["Next.js", "Node.js", "Redis", "PostgreSQL", "Docker"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
    caseStudy: null,
  },
  {
    id: 5,
    title: "Kantor Design Kit",
    subtitle: "Figma UI Component Library",
    description:
      "Figma component library untuk desainer produk Indonesia. 200+ komponen siap pakai dengan dark mode support dan accessibility annotation built-in.",
    image: "/images/projects/project-2.svg",
    category: "UI-UX" as const,
    techStack: ["Figma", "Auto Layout", "Variables", "Prototyping", "Dev Mode"],
    liveUrl: "https://www.figma.com/community",
    githubUrl: null,
    featured: false,
    caseStudy: null,
  },
  {
    id: 6,
    title: "Pantau Dashboard",
    subtitle: "Analytics & Monitoring",
    description:
      "Dashboard analytics real-time untuk startup tahap awal. Visualisasi KPI bisnis, cohort analysis, dan alerting otomatis — tanpa perlu data scientist.",
    image: "/images/projects/project-3.svg",
    category: "Frontend" as const,
    techStack: ["React", "D3.js", "TypeScript", "Recharts", "WebSocket"],
    liveUrl: null,
    githubUrl: "https://github.com/rakapratama/pantau",
    featured: false,
    caseStudy: null,
  },
]
