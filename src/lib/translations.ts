export type Lang = "id" | "en"

export const translations = {
  id: {
    nav: {
      hireMeBtn: "Hire Me",
    },
    hero: {
      greeting: "Halo, saya",
      description:
        "12+ tahun perjalanan dari merancang pengalaman visual yang memukau, membangun interface yang intuitif, hingga menciptakan sistem backend yang handal. Menggabungkan estetika desain dengan kekuatan kode.",
      viewProjects: "Lihat Project Saya",
      downloadCV: "Download CV",
      scroll: "Scroll",
    },
    about: {
      label: "About Me",
      title: "Designer yang",
      titleHighlight: "Bisa Ngoding",
      bio: `Perjalanan saya di dunia teknologi dimulai bukan dari baris kode, tapi dari piksel. Sejak 2012, saya bekerja sebagai UI/UX Designer — membangun design system, meneliti pengguna, dan merancang antarmuka untuk berbagai produk digital di berbagai industri.

Empat tahun kemudian, rasa penasaran mendorong saya untuk belajar code. Dari jQuery ke React, dari CSS biasa ke arsitektur komponen yang skalabel. Perspektif ganda ini — antara desainer yang memahami engineering, dan engineer yang memahami desain — menjadi keunggulan yang sulit ditemukan di tempat lain.

Kini sebagai Fullstack Developer, saya mengelola seluruh lifecycle produk: dari discovery dan wireframe, hingga database, API, dan deployment pipeline. Saya percaya produk terbaik lahir dari kolaborasi antara estetika dan fungsi — dan saya ada di persimpangan keduanya.`,
      funFacts: [
        "Coffee addict ☕ — lebih dari 3 cangkir per hari",
        "Passionate dalam open source & komunitas developer",
        "Percaya bahwa desain yang baik adalah kode yang baik",
      ],
      statsLabels: {
        yearsExp: "Tahun Pengalaman",
        projects: "Proyek Selesai",
        roles: "Peran Dikuasai",
        clients: "Klien Puas",
      },
      infoLabels: { name: "Nama", location: "Lokasi", experience: "Pengalaman", since: "Sejak" },
      cta: "Mari Berkolaborasi",
    },
    journey: {
      label: "Career Journey",
      title: "12 Tahun Membangun",
      subtitle: "Dari piksel ke production — perjalanan yang membentuk cara saya memandang setiap produk.",
      phase: "Phase",
      keySkills: "Key Skills",
      toolsTech: "Tools & Tech",
      items: [
        {
          description:
            "Membangun fondasi sebagai seorang desainer di agency digital Jakarta. Mengerjakan produk dari berbagai industri — fintech, e-commerce, hingga enterprise. Belajar bahwa desain yang baik dimulai dari riset, bukan dari Figma.",
          achievement:
            "Memimpin redesign aplikasi mobile untuk 500k+ pengguna, meningkatkan retention rate sebesar 40%.",
        },
        {
          description:
            "Transisi ke dunia code dimulai dari rasa penasaran — dan tidak pernah berhenti. Bergabung dengan tim produk startup sebagai frontend developer, membawa perspektif desainer ke dalam setiap komponen yang dibangun.",
          achievement:
            "Membangun design system dari nol yang diadopsi oleh 4 tim produk berbeda secara bersamaan.",
        },
        {
          description:
            "Memperluas kemampuan ke sisi server, database, dan infrastruktur. Kini mengelola produk secara end-to-end — dari desain sistem hingga deployment di cloud.",
          achievement:
            "Meluncurkan SaaS B2B yang melayani 200+ UMKM dengan uptime 99.9% selama 12 bulan.",
        },
      ],
    },
    skills: {
      label: "Skills & Expertise",
      title: "The Full Stack",
      subtitle: "Dari tools desainer sampai infra engineer — semua dalam satu set skill.",
      techStackLabel: "Tech Stack",
    },
    projects: {
      label: "Selected Work",
      title: "Projects",
      subtitle: "Beberapa project terbaik dari design sampai deployment.",
      viewProject: "Lihat Project",
      items: [
        {
          subtitle: "Point of Sale untuk UMKM",
          description:
            "Platform POS modern untuk UMKM Indonesia. Menyelesaikan problem pencatatan manual dengan interface yang bisa dioperasikan kasir tanpa training — adopsi 3x lebih cepat dari kompetitor.",
        },
        {
          subtitle: "Remote Team OS",
          description:
            "Workspace virtual untuk tim remote yang menggabungkan standup async, project tracking, dan dokumentasi dalam satu platform terintegrasi.",
        },
        {
          subtitle: "Design System Open Source",
          description:
            "Open-source design system untuk produk Indonesia. Komponen aksesibel, terdokumentasi, dengan konteks lokal yang memahami kebutuhan pengguna Indonesia.",
        },
        {
          subtitle: "Fintech Payment Gateway",
          description:
            "Payment gateway lokal dengan integrasi multi-bank dan e-wallet Indonesia. Dirancang untuk developer yang ingin integrasi pembayaran tanpa kerumitan enterprise.",
        },
        {
          subtitle: "Figma UI Component Library",
          description:
            "Figma component library untuk desainer produk Indonesia. 200+ komponen siap pakai dengan dark mode support dan accessibility annotation built-in.",
        },
        {
          subtitle: "Analytics & Monitoring",
          description:
            "Dashboard analytics real-time untuk startup tahap awal. Visualisasi KPI bisnis, cohort analysis, dan alerting otomatis — tanpa perlu data scientist.",
        },
      ],
    },
    contact: {
      label: "Get In Touch",
      title: "Let's Work Together",
      subtitle: "Punya project menarik? Atau hanya ingin say hello? Saya selalu terbuka untuk diskusi.",
      followMe: "Ikuti Saya",
      available: "Tersedia untuk project baru",
      form: {
        name: "Nama", email: "Email", subject: "Subjek", message: "Pesan",
        namePlaceholder: "Nama Anda",
        emailPlaceholder: "email@anda.com",
        subjectPlaceholder: "Inquiry project, kolaborasi...",
        messagePlaceholder: "Ceritakan tentang project Anda...",
        send: "Kirim Pesan",
        sending: "Mengirim...",
        sent: "Pesan terkirim!",
      },
    },
    footer: { madeWith: "Dibuat dengan", in: "di" },
  },

  en: {
    nav: {
      hireMeBtn: "Hire Me",
    },
    hero: {
      greeting: "Hi, I'm",
      description:
        "12+ years of journey from crafting compelling visual experiences, building intuitive interfaces, to creating robust backend systems. Blending design aesthetics with engineering power.",
      viewProjects: "View My Projects",
      downloadCV: "Download CV",
      scroll: "Scroll",
    },
    about: {
      label: "About Me",
      title: "Designer Who",
      titleHighlight: "Can Code",
      bio: `My journey in tech didn't start with lines of code — it started with pixels. Since 2012, I've been working as a UI/UX Designer, building design systems, conducting user research, and crafting interfaces for digital products across various industries.

Four years later, curiosity pushed me to learn to code. From jQuery to React, from plain CSS to scalable component architecture. This dual perspective — a designer who understands engineering, and an engineer who understands design — became an edge that's hard to find elsewhere.

Now as a Fullstack Developer, I manage the entire product lifecycle: from discovery and wireframing to databases, APIs, and deployment pipelines. I believe the best products are born from the collaboration of aesthetics and function — and I sit right at that intersection.`,
      funFacts: [
        "Coffee addict ☕ — more than 3 cups a day",
        "Passionate about open source & developer communities",
        "Believe that great design is great code",
      ],
      statsLabels: {
        yearsExp: "Years Experience",
        projects: "Projects Completed",
        roles: "Roles Mastered",
        clients: "Happy Clients",
      },
      infoLabels: { name: "Name", location: "Location", experience: "Experience", since: "Since" },
      cta: "Let's Collaborate",
    },
    journey: {
      label: "Career Journey",
      title: "12 Years Building",
      subtitle: "From pixels to production — a journey that shaped how I see every product.",
      phase: "Phase",
      keySkills: "Key Skills",
      toolsTech: "Tools & Tech",
      items: [
        {
          description:
            "Built foundations as a designer at a Jakarta digital agency. Worked on products across industries — fintech, e-commerce, and enterprise. Learned that good design starts with research, not Figma.",
          achievement:
            "Led mobile app redesign for 500k+ users, increasing retention rate by 40%.",
        },
        {
          description:
            "The transition to coding started from curiosity — and never stopped. Joined a startup product team as a frontend developer, bringing a designer's perspective into every component built.",
          achievement:
            "Built a design system from scratch adopted simultaneously by 4 different product teams.",
        },
        {
          description:
            "Expanded capabilities to server-side, databases, and infrastructure. Now managing products end-to-end — from system design to cloud deployment.",
          achievement:
            "Launched a B2B SaaS serving 200+ SMEs with 99.9% uptime over 12 months.",
        },
      ],
    },
    skills: {
      label: "Skills & Expertise",
      title: "The Full Stack",
      subtitle: "From designer tools to infrastructure engineering — all in one skill set.",
      techStackLabel: "Tech Stack",
    },
    projects: {
      label: "Selected Work",
      title: "Projects",
      subtitle: "Some of the best work from design to deployment.",
      viewProject: "View Project",
      items: [
        {
          subtitle: "Point of Sale for SMEs",
          description:
            "Modern POS platform for Indonesian SMEs. Solves manual bookkeeping with an interface cashiers can operate without training — 3x faster adoption than competitors.",
        },
        {
          subtitle: "Remote Team OS",
          description:
            "Virtual workspace for remote teams combining async standups, project tracking, and documentation in one integrated platform.",
        },
        {
          subtitle: "Open Source Design System",
          description:
            "Open-source design system for Indonesian products. Accessible, documented components with local context that understands Indonesian user needs.",
        },
        {
          subtitle: "Fintech Payment Gateway",
          description:
            "Local payment gateway with multi-bank and Indonesian e-wallet integrations. Designed for developers who want payment integration without enterprise complexity.",
        },
        {
          subtitle: "Figma UI Component Library",
          description:
            "Figma component library for Indonesian product designers. 200+ ready-to-use components with built-in dark mode support and accessibility annotations.",
        },
        {
          subtitle: "Analytics & Monitoring",
          description:
            "Real-time analytics dashboard for early-stage startups. Business KPI visualization, cohort analysis, and automated alerting — without needing a data scientist.",
        },
      ],
    },
    contact: {
      label: "Get In Touch",
      title: "Let's Work Together",
      subtitle: "Have an interesting project? Or just want to say hello? I'm always open for a chat.",
      followMe: "Follow Me",
      available: "Available for new projects",
      form: {
        name: "Name", email: "Email", subject: "Subject", message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        subjectPlaceholder: "Project inquiry, collaboration...",
        messagePlaceholder: "Tell me about your project...",
        send: "Send Message",
        sending: "Sending...",
        sent: "Message sent!",
      },
    },
    footer: { madeWith: "Made with", in: "in" },
  },
} as const

export type Translations = typeof translations.id
