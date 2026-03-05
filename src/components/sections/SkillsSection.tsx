"use client"

import { motion, useReducedMotion } from "framer-motion"
import { skills, techStack } from "@/lib/data"

const categories = [
  { label: "Design", key: "design" as const, color: "from-pink-500 to-rose-500", barColor: "bg-gradient-to-r from-pink-500 to-rose-500" },
  { label: "Frontend", key: "frontend" as const, color: "from-violet-500 to-purple-600", barColor: "bg-gradient-to-r from-violet-500 to-purple-600" },
  { label: "Backend", key: "backend" as const, color: "from-cyan-500 to-blue-500", barColor: "bg-gradient-to-r from-cyan-500 to-blue-500" },
  { label: "DevOps", key: "devops" as const, color: "from-emerald-500 to-teal-500", barColor: "bg-gradient-to-r from-emerald-500 to-teal-500" },
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

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Skills & Expertise</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mt-3 mb-4">
            The Full Stack
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            Dari tools desainer sampai infra engineer — semua dalam satu set skill.
          </p>
        </motion.div>

        {/* Skill Grid — 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.key}
              custom={ci}
              variants={shouldReduceMotion ? undefined : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-2xl border border-white/5 bg-[#111118]/80 p-6"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cat.color}`} />
                <span className="text-white/40 text-xs font-mono font-medium uppercase tracking-widest">
                  {cat.label}
                </span>
              </div>

              {/* Skills with progress bars */}
              <div className="space-y-4">
                {skills[cat.key].map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-white/80 text-sm font-medium">{skill.name}</span>
                      <span className="text-white/40 text-xs font-mono">{skill.percent}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${cat.barColor}`}
                        initial={shouldReduceMotion ? false : { width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: ci * 0.08 + si * 0.06,
                          duration: 0.7,
                          ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl border border-white/5 bg-[#111118]/80 p-6"
        >
          <p className="text-white/30 text-xs font-mono font-medium uppercase tracking-widest mb-4 text-center">
            Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                custom={i}
                variants={shouldReduceMotion ? undefined : {
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: (i: number) => ({
                    opacity: 1, scale: 1,
                    transition: { delay: 0.3 + i * 0.04, duration: 0.3 },
                  }),
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="px-3 py-1.5 rounded-full text-sm bg-white/5 text-white/60 border border-white/5 hover:bg-violet-500/10 hover:text-violet-300 hover:border-violet-500/20 transition-colors cursor-default"
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
