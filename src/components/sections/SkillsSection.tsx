"use client"

import { motion, useReducedMotion } from "framer-motion"
import { skills, techStack } from "@/lib/data"
import { useLanguage } from "@/components/layout/LanguageProvider"

const categories = [
  { label: "Design",   key: "design"   as const, color: "from-pink-500 to-rose-500",    barColor: "bg-gradient-to-r from-pink-500 to-rose-500" },
  { label: "Frontend", key: "frontend" as const, color: "from-emerald-500 to-teal-600", barColor: "bg-gradient-to-r from-emerald-500 to-teal-600" },
  { label: "Backend",  key: "backend"  as const, color: "from-cyan-500 to-blue-500",    barColor: "bg-gradient-to-r from-cyan-500 to-blue-500" },
  { label: "DevOps",   key: "devops"   as const, color: "from-emerald-500 to-teal-500", barColor: "bg-gradient-to-r from-emerald-500 to-teal-500" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion()
  const { t } = useLanguage()
  const { skills: st } = t

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-100 dark:bg-[#0a0a0f]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{st.label}</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight mt-3 mb-4">
            {st.title}
          </h2>
          <p className="text-slate-500 dark:text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            {st.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.key}
              custom={ci}
              variants={shouldReduceMotion ? undefined : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-2xl border border-slate-200 dark:border-white/5 bg-white/80 dark:bg-[#111118]/80 p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cat.color}`} />
                <span className="text-slate-500 dark:text-white/40 text-xs font-mono font-medium uppercase tracking-widest">
                  {cat.label}
                </span>
              </div>

              <div className="space-y-4">
                {skills[cat.key].map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-slate-700 dark:text-white/80 text-sm font-medium">{skill.name}</span>
                      <span className="text-slate-400 dark:text-white/40 text-xs font-mono">{skill.percent}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-200 dark:bg-white/5 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${cat.barColor}`}
                        initial={shouldReduceMotion ? false : { width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.08 + si * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl border border-slate-200 dark:border-white/5 bg-white/80 dark:bg-[#111118]/80 p-6"
        >
          <p className="text-slate-400 dark:text-white/30 text-xs font-mono font-medium uppercase tracking-widest mb-4 text-center">
            {st.techStackLabel}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                custom={i}
                variants={shouldReduceMotion ? undefined : {
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: 0.3 + i * 0.04, duration: 0.3 } }),
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="px-3 py-1.5 rounded-full text-sm bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white/60 border border-slate-200 dark:border-white/5 hover:bg-emerald-500/10 hover:text-emerald-700 dark:hover:text-emerald-300 hover:border-emerald-500/20 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
