"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter, FileDown } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { AuroraBackground } from "@/components/animations/AuroraBackground"
import { MagneticButton } from "@/components/animations/MagneticButton"
import { StatusBadge } from "@/components/custom/StatusBadge"
import { useLanguage } from "@/components/layout/LanguageProvider"

const roles = ["UI/UX Designer", "Frontend Developer", "Fullstack Developer"]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const item = (reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16,1,0.3,1] as [number,number,number,number] } },
})

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const itemVariant = item(shouldReduceMotion ?? false)
  const { t } = useLanguage()

  const [displayText, setDisplayText] = useState("")
  const [roleIndex,   setRoleIndex]   = useState(0)
  const [charIndex,   setCharIndex]   = useState(0)
  const [isDeleting,  setIsDeleting]  = useState(false)

  useEffect(() => {
    if (shouldReduceMotion) { setDisplayText(roles[0]); return }
    const current = roles[roleIndex]
    const speed   = isDeleting ? 50 : 100
    const timer   = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setDisplayText(current.slice(0, charIndex + 1))
          setCharIndex(c => c + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(current.slice(0, charIndex - 1))
          setCharIndex(c => c - 1)
        } else {
          setIsDeleting(false)
          setRoleIndex(r => (r + 1) % roles.length)
        }
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex, shouldReduceMotion])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#0a0a0f]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 dark:bg-emerald-800/10 rounded-full blur-2xl" />
      </div>

      <AuroraBackground />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.3) 1px,transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center gap-6">

          <motion.div variants={itemVariant}>
            <StatusBadge />
          </motion.div>

          {/* Avatar */}
          <motion.div variants={itemVariant} className="w-36 h-36 mx-auto relative">
            <div className="w-full h-full rounded-full"
                 style={{ background: "linear-gradient(135deg,#10b981,#06b6d4)", padding: "3px" }}>
              <div className="w-full h-full rounded-full overflow-hidden bg-[#f0fdf4]">
                <img src="/me.jpg" alt={personalInfo.name} className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full border-2 border-slate-50 dark:border-[#0a0a0f] flex items-center justify-center text-xs text-white shadow-lg"
                 style={{ background: "linear-gradient(135deg,#10b981,#06b6d4)" }}>
              ✦
            </div>
          </motion.div>

          {/* Greeting + name */}
          <motion.div variants={itemVariant}>
            <p className="text-slate-500 dark:text-gray-400 text-lg mb-3">{t.hero.greeting}</p>
            <h1 className="text-slate-900 dark:text-white" style={{ fontSize: "clamp(2.5rem,7vw,5rem)", fontWeight: 700, lineHeight: 1.1 }}>
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div variants={itemVariant} className="h-12 flex items-center justify-center">
            <p className="text-slate-600 dark:text-gray-300" style={{ fontSize: "clamp(1.1rem,3vw,1.6rem)" }}>
              <span className="text-emerald-500">&lt;</span>{" "}
              <span>{displayText}</span>
              <span className="animate-pulse text-cyan-500">|</span>{" "}
              <span className="text-emerald-500">/&gt;</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariant} className="text-slate-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: "1.05rem" }}>
            {t.hero.description}
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariant} className="flex flex-col sm:flex-row items-center gap-4">
            <MagneticButton>
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 rounded-full text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105"
                style={{ background: "linear-gradient(135deg,#10b981,#06b6d4)" }}
              >
                {t.hero.viewProjects}
              </button>
            </MagneticButton>
            <MagneticButton>
              <a
                href={personalInfo.cvUrl}
                download
                className="px-8 py-3 rounded-full border border-slate-300 dark:border-white/10 text-slate-600 dark:text-gray-300 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-300 flex items-center gap-2"
              >
                <FileDown size={16} />
                {t.hero.downloadCV}
              </a>
            </MagneticButton>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={itemVariant} className="flex items-center gap-3">
            {[
              { icon: Github,   href: personalInfo.social.github,   label: "GitHub" },
              { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
              { icon: Twitter,  href: personalInfo.social.twitter,  label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-gray-500 hover:text-emerald-500 transition-colors cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs tracking-widest uppercase font-mono">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: shouldReduceMotion ? 0 : [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
