"use client"

import { Code2, Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { useLanguage } from "@/components/layout/LanguageProvider"

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Journey",  href: "#journey" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
]

const socialLinks = [
  { icon: Github,   href: personalInfo.social.github,   label: "GitHub" },
  { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: Twitter,  href: personalInfo.social.twitter,  label: "Twitter" },
]

export function Footer() {
  const { t } = useLanguage()

  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border bg-slate-100 dark:bg-[#06060a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                 style={{ background: "linear-gradient(135deg,#10b981,#06b6d4)" }}>
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <p className="text-slate-400 dark:text-white/30 text-sm font-mono">
              &copy; {new Date().getFullYear()} {personalInfo.name}
            </p>
            <span className="hidden sm:flex items-center gap-1 text-slate-400 dark:text-white/20 text-xs">
              · {t.footer.madeWith} <Heart className="w-3 h-3 text-pink-500 mx-0.5" /> {t.footer.in} {personalInfo.location}
            </span>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href}
                 className="text-slate-500 dark:text-white/40 hover:text-slate-800 dark:hover:text-white/80 text-sm transition-colors">
                {label}
              </a>
            ))}
          </nav>

          {/* Social + back to top */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                 className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-white/4 border border-slate-300 dark:border-white/5 flex items-center justify-center text-slate-500 dark:text-white/40 hover:text-slate-800 dark:hover:text-white/80 hover:bg-slate-300 dark:hover:bg-white/8 transition-all">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
            <a href="#" onClick={scrollTop} aria-label="Back to top"
               className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-all ml-1">
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
