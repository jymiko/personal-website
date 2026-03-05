"use client"

import { User, MapPin, Calendar, Coffee, Heart, Sparkles } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { FadeIn } from "@/components/animations/FadeIn"

const funFacts = [
  { icon: Coffee,   text: "Coffee addict ☕ — lebih dari 3 cangkir per hari" },
  { icon: Heart,    text: "Passionate dalam open source & komunitas developer" },
  { icon: Sparkles, text: "Percaya bahwa desain yang baik adalah kode yang baik" },
]

const infoTags = [
  { icon: User,     label: "Name",       value: personalInfo.name },
  { icon: MapPin,   label: "Location",   value: personalInfo.location },
  { icon: Calendar, label: "Experience", value: `Sejak ${new Date().getFullYear() - personalInfo.stats.yearsExperience}` },
]

const stats = [
  { value: `${personalInfo.stats.yearsExperience}+`, label: "Tahun Pengalaman" },
  { value: `${personalInfo.stats.projectsCompleted}+`, label: "Proyek Selesai" },
  { value: "3",   label: "Peran Dikuasai" },
  { value: "20+", label: "Klien Puas" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ backgroundColor: "#0d0d14" }}>
      {/* Bg accent */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-violet-600/8 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <FadeIn className="flex items-center gap-3 mb-16">
          <span className="section-label"><User size={14} /> About Me</span>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual card */}
          <FadeIn direction="right">
            {/* Avatar card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 p-8 mb-4"
                 style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.2),rgba(6,182,212,0.1))" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />

              {/* Avatar */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-36 h-36 rounded-2xl p-[3px]"
                       style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }}>
                    <div className="w-full h-full rounded-2xl bg-[#1a1a2e] flex items-center justify-center">
                      <span style={{ fontSize: "4rem" }}>👨‍💻</span>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg"
                       style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }}>
                    ✦
                  </div>
                </div>
              </div>

              {/* Info tags */}
              <div className="grid gap-3 relative z-10">
                {infoTags.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-violet-400" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">{label}</p>
                      <p className="text-white text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label}
                     className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] text-center hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300">
                  <div className="text-[1.8rem] font-bold mb-1 gradient-text">{s.value}</div>
                  <div className="text-gray-400 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right — content */}
          <FadeIn direction="left" delay={0.15}>
            <h2 className="text-white mb-6" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, lineHeight: 1.2 }}>
              Designer yang{" "}
              <span className="gradient-text">Bisa Ngoding</span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
              {personalInfo.bio.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Fun facts */}
            <div className="space-y-3 mb-8">
              {funFacts.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-violet-400" />
                  </div>
                  <span className="text-gray-400 text-sm">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 rounded-full text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105"
              style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }}
            >
              Mari Berkolaborasi
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
