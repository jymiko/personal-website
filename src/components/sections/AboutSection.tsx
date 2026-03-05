"use client"

import { User, MapPin, Calendar, Coffee, Heart, Sparkles } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { FadeIn } from "@/components/animations/FadeIn"
import { useLanguage } from "@/components/layout/LanguageProvider"

const funFactIcons = [Coffee, Heart, Sparkles]

export function AboutSection() {
  const { t } = useLanguage()
  const { about } = t

  const infoTags = [
    { icon: User,     label: about.infoLabels.name,       value: personalInfo.name },
    { icon: MapPin,   label: about.infoLabels.location,   value: personalInfo.location },
    { icon: Calendar, label: about.infoLabels.experience, value: `${about.infoLabels.since} ${new Date().getFullYear() - personalInfo.stats.yearsExperience}` },
  ]

  const stats = [
    { value: `${personalInfo.stats.yearsExperience}+`, label: about.statsLabels.yearsExp },
    { value: `${personalInfo.stats.projectsCompleted}+`, label: about.statsLabels.projects },
    { value: "3",   label: about.statsLabels.roles },
    { value: "20+", label: about.statsLabels.clients },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-100 dark:bg-[#0d0d14]">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-500/5 dark:bg-emerald-600/8 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="flex items-center gap-3 mb-16">
          <span className="section-label"><User size={14} /> {about.label}</span>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual card */}
          <FadeIn direction="right">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 p-8 mb-4"
                 style={{ background: "linear-gradient(135deg,rgba(16,185,129,0.08),rgba(6,182,212,0.05))" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-2xl" />

              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-36 h-36 rounded-2xl"
                       style={{ background: "linear-gradient(135deg,#10b981,#06b6d4)", padding: "3px" }}>
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-[#f0fdf4]">
                      <img src="/me.jpg" alt={personalInfo.name} className="w-full h-full object-cover object-top" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg"
                       style={{ background: "linear-gradient(135deg,#10b981,#06b6d4)" }}>
                    ✦
                  </div>
                </div>
              </div>

              <div className="grid gap-3 relative z-10">
                {infoTags.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-gray-500 text-xs">{label}</p>
                      <p className="text-slate-900 dark:text-white text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label}
                     className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] text-center hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300">
                  <div className="text-[1.8rem] font-bold mb-1 gradient-text">{s.value}</div>
                  <div className="text-slate-500 dark:text-gray-400 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right — content */}
          <FadeIn direction="left" delay={0.15}>
            <h2 className="text-slate-900 dark:text-white mb-6" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, lineHeight: 1.2 }}>
              {about.title}{" "}
              <span className="gradient-text">{about.titleHighlight}</span>
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
              {about.bio.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="space-y-3 mb-8">
              {about.funFacts.map((text, i) => {
                const Icon = funFactIcons[i]
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="text-slate-600 dark:text-gray-400 text-sm">{text}</span>
                  </div>
                )
              })}
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 rounded-full text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105"
              style={{ background: "linear-gradient(135deg,#10b981,#06b6d4)" }}
            >
              {about.cta}
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
