"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { projects } from "@/lib/data"

type Category = "All" | "UI-UX" | "Frontend" | "Fullstack"
const FILTERS: Category[] = ["All", "UI-UX", "Frontend", "Fullstack"]

const categoryColor: Record<string, string> = {
  "UI-UX":   "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Frontend:  "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Fullstack: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
}

const gradientBg: Record<string, string> = {
  "UI-UX":   "bg-gradient-to-br from-pink-900/60 via-rose-900/40 to-[#0d0d14]",
  Frontend:  "bg-gradient-to-br from-violet-900/60 via-purple-900/40 to-[#0d0d14]",
  Fullstack: "bg-gradient-to-br from-cyan-900/60 via-blue-900/40 to-[#0d0d14]",
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

export function ProjectsSection() {
  const [active, setActive] = useState<Category>("All")
  const shouldReduceMotion = useReducedMotion()

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d14]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Selected Work</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mt-3 mb-4">
            Projects
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            Beberapa project terbaik dari design sampai deployment.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex justify-center gap-2 mb-10 flex-wrap"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                active === f
                  ? "bg-violet-600 text-white border-violet-600 shadow-lg shadow-violet-500/20"
                  : "bg-white/4 text-white/50 border-white/8 hover:bg-white/8 hover:text-white/80"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i}
                variants={shouldReduceMotion ? undefined : fadeUp}
                initial="hidden"
                animate="visible"
                className="group rounded-2xl border border-white/5 bg-[#111118]/80 overflow-hidden hover:border-violet-500/20 transition-all duration-300"
              >
                {/* Image area */}
                <div className="relative h-44 overflow-hidden">
                  {/* Gradient placeholder */}
                  <div className={`absolute inset-0 ${gradientBg[project.category]} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-[#0d0d14]/40" />
                  {/* Decorative circles */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/3" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/3" />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${categoryColor[project.category]}`}>
                      {project.category}
                    </span>
                  </div>
                  {/* Links overlay */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
                        aria-label="Live site"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-1">
                    <span className="text-white/30 text-xs font-mono">{project.subtitle}</span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2 group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-white/40">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-white/30">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  {(project.liveUrl ?? project.githubUrl) && (
                    <a
                      href={(project.liveUrl ?? project.githubUrl)!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 transition-colors group/link"
                    >
                      Lihat Project
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
