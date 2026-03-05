"use client"

import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"
import { Palette, Code2, Database, Award } from "lucide-react"
import { journey } from "@/lib/data"

const phaseConfig = {
  pink: {
    icon: Palette,
    gradient: "from-pink-500 to-rose-500",
    glow: "shadow-pink-500/25",
    border: "border-pink-500/20",
    badge: "bg-pink-500/10 text-pink-400 border border-pink-500/20",
    skillBg: "bg-pink-500/10 text-pink-300",
    dot: "bg-pink-500",
    line: "from-pink-500/40 to-violet-500/20",
  },
  violet: {
    icon: Code2,
    gradient: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/25",
    border: "border-violet-500/20",
    badge: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    skillBg: "bg-violet-500/10 text-violet-300",
    dot: "bg-violet-500",
    line: "from-violet-500/40 to-cyan-500/20",
  },
  cyan: {
    icon: Database,
    gradient: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/25",
    border: "border-cyan-500/20",
    badge: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
    skillBg: "bg-cyan-500/10 text-cyan-300",
    dot: "bg-cyan-500",
    line: "from-cyan-500/40 to-transparent",
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

export function JourneySection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="journey" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0d0d14]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Career Journey</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mt-3 mb-4">
            12 Tahun Membangun
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            Dari piksel ke production — perjalanan yang membentuk cara saya memandang setiap produk.
          </p>
        </motion.div>

        {/* Phase Cards */}
        <div className="space-y-6">
          {journey.map((item, i) => {
            const cfg = phaseConfig[item.color]
            const Icon = cfg.icon
            const isLast = i === journey.length - 1

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
                {/* Connector line */}
                {!isLast && (
                  <div
                    className={`absolute left-10 top-full h-6 w-0.5 bg-gradient-to-b ${cfg.line} z-10`}
                  />
                )}

                <div
                  className={`relative rounded-2xl border ${cfg.border} bg-[#111118]/80 backdrop-blur-sm overflow-hidden group hover:border-opacity-40 transition-all duration-300`}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cfg.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}
                  />

                  <div className="relative p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon block */}
                      <div className="flex-shrink-0 flex items-start gap-4">
                        <div
                          className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${cfg.gradient} flex items-center justify-center shadow-lg ${cfg.glow}`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Top row */}
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full ${cfg.badge}`}>
                            Phase {item.phase}
                          </span>
                          <span className="text-white/40 text-sm font-mono">{item.era}</span>
                        </div>

                        <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-3">
                          {item.role}
                        </h3>

                        <p className="text-white/60 leading-relaxed text-sm md:text-base mb-5">
                          {item.description}
                        </p>

                        {/* Two-column: Key Skills + Tools */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                          <div>
                            <p className="text-white/30 text-xs font-medium uppercase tracking-wider mb-2">
                              Key Skills
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {item.skills.map((s) => (
                                <span
                                  key={s}
                                  className={`text-xs px-2 py-0.5 rounded-md ${cfg.skillBg}`}
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-white/30 text-xs font-medium uppercase tracking-wider mb-2">
                              Tools & Tech
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {item.tools.map((t) => (
                                <span
                                  key={t}
                                  className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-white/50"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Achievement */}
                        <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.03] border border-white/5">
                          <Award className="w-4 h-4 text-yellow-400/80 flex-shrink-0 mt-0.5" />
                          <p className="text-white/50 text-sm leading-relaxed">{item.achievement}</p>
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
