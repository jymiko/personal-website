"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter, FileDown } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { AuroraBackground } from "@/components/animations/AuroraBackground"
import { MagneticButton } from "@/components/animations/MagneticButton"
import { StatusBadge } from "@/components/custom/StatusBadge"

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

  // Typewriter
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0a0a0f" }}
    >
      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-800/10 rounded-full blur-2xl" />
      </div>

      {/* Particle canvas */}
      <AuroraBackground />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center gap-6">

          {/* Status badge */}
          <motion.div variants={itemVariant}>
            <StatusBadge />
          </motion.div>

          {/* Avatar */}
          <motion.div variants={itemVariant} className="w-28 h-28 mx-auto relative">
            <div className="w-full h-full rounded-full p-[3px]"
                 style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }}>
              <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full rounded-full flex items-center justify-center text-4xl font-bold text-white"
                     style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.4),rgba(6,182,212,0.4))" }}>
                  {personalInfo.nameShort}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full border-2 border-[#0a0a0f] flex items-center justify-center text-xs text-white shadow-lg"
                 style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }}>
              ✦
            </div>
          </motion.div>

          {/* Greeting + name */}
          <motion.div variants={itemVariant}>
            <p className="text-gray-400 text-lg mb-3">Halo, saya</p>
            <h1 className="text-white" style={{ fontSize: "clamp(2.5rem,7vw,5rem)", fontWeight: 700, lineHeight: 1.1 }}>
              {personalInfo.name.split(" ")[0]}{" "}
              <span className="gradient-text">{personalInfo.name.split(" ").slice(1).join(" ")}</span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div variants={itemVariant} className="h-12 flex items-center justify-center">
            <p className="text-gray-300" style={{ fontSize: "clamp(1.1rem,3vw,1.6rem)" }}>
              <span className="text-violet-400">&lt;</span>{" "}
              <span>{displayText}</span>
              <span className="animate-pulse text-cyan-400">|</span>{" "}
              <span className="text-violet-400">/&gt;</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariant} className="text-gray-400 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: "1.05rem" }}>
            {personalInfo.stats.yearsExperience}+ tahun perjalanan dari merancang pengalaman visual yang memukau,
            membangun interface yang intuitif, hingga menciptakan sistem backend yang handal.
            Menggabungkan estetika desain dengan kekuatan kode.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariant} className="flex flex-col sm:flex-row items-center gap-4">
            <MagneticButton>
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 rounded-full text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105"
                style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }}
              >
                Lihat Project Saya
              </button>
            </MagneticButton>
            <MagneticButton>
              <a
                href={personalInfo.cvUrl}
                download
                className="px-8 py-3 rounded-full border border-white/10 text-gray-300 hover:border-violet-500/50 hover:text-violet-400 hover:bg-violet-500/5 transition-all duration-300 flex items-center gap-2"
              >
                <FileDown size={16} />
                Download CV
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
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-violet-500/50 hover:text-violet-400 hover:bg-violet-500/5 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-violet-400 transition-colors cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
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
