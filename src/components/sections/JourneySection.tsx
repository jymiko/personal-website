"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Palette, Code2, Database, Award } from "lucide-react"
import { journey } from "@/lib/data"
import { useLanguage } from "@/components/layout/LanguageProvider"

const phaseConfig = {
  pink: {
    icon: Palette,
    gradient: "from-pink-500 to-rose-500",
    glow: "shadow-pink-500/25",
    border: "border-pink-500/20",
    badge: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20",
    skillBg: "bg-pink-500/10 text-pink-700 dark:text-pink-300",
    line: "from-pink-500/40 to-emerald-500/20",
  },
  violet: {
    icon: Code2,
    gradient: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-500/25",
    border: "border-emerald-500/20",
    badge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20",
    skillBg: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    line: "from-emerald-500/40 to-cyan-500/20",
  },
  cyan: {
    icon: Database,
    gradient: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/25",
    border: "border-cyan-500/20",
    badge: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20",
    skillBg: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
    line: "from-cyan-500/40 to-transparent",
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

export function JourneySection() {
  const shouldReduceMotion = useReducedMotion()
  const { t } = useLanguage()
  const { journey: jt } = t

  return (
    <section id="journey" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#0d0d14]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{jt.label}</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight mt-3 mb-4">
            {jt.title}
          </h2>
          <p className="text-slate-500 dark:text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            {jt.subtitle}
          </p>
        </motion.div>

        <div className="space-y-6">
          {journey.map((item, i) => {
            const cfg = phaseConfig[item.color]
            const Icon = cfg.icon
            const isLast = i === journey.length - 1
            const translated = jt.items[i]

            return (
              <motion.div
                key={item.era}
                custom={i}
                variants={shouldReduceMotion ? undefined : fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="relative"
              >
                {!isLast && (
                  <div className={`absolute left-10 top-full h-6 w-0.5 bg-gradient-to-b ${cfg.line} z-10`} />
                )}

                <div className={`relative rounded-2xl border ${cfg.border} bg-white/80 dark:bg-[#111118]/80 backdrop-blur-sm overflow-hidden group hover:border-opacity-40 transition-all duration-300`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${cfg.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

                  <div className="relative p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="shrink-0">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${cfg.gradient} flex items-center justify-center shadow-lg ${cfg.glow}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full ${cfg.badge}`}>
                            {jt.phase} {item.phase}
                          </span>
                          <span className="text-slate-400 dark:text-white/40 text-sm font-mono">{item.era}</span>
                        </div>

                        <h3 className="font-heading font-bold text-xl md:text-2xl text-slate-900 dark:text-white mb-3">
                          {item.role}
                        </h3>

                        <p className="text-slate-500 dark:text-white/60 leading-relaxed text-sm md:text-base mb-5">
                          {translated.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                          <div>
                            <p className="text-slate-400 dark:text-white/30 text-xs font-medium uppercase tracking-wider mb-2">
                              {jt.keySkills}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {item.skills.map((s) => (
                                <span key={s} className={`text-xs px-2 py-0.5 rounded-md ${cfg.skillBg}`}>{s}</span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-slate-400 dark:text-white/30 text-xs font-medium uppercase tracking-wider mb-2">
                              {jt.toolsTech}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {item.tools.map((tool) => (
                                <span key={tool} className="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-white/50">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-white/3 border border-slate-200 dark:border-white/5">
                          <Award className="w-4 h-4 text-yellow-500/80 shrink-0 mt-0.5" />
                          <p className="text-slate-500 dark:text-white/50 text-sm leading-relaxed">{translated.achievement}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
