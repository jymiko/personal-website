"use client"

import { Code2, Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react"
import { personalInfo } from "@/lib/data"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Github,   href: personalInfo.social.github,   label: "GitHub" },
  { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: Twitter,  href: personalInfo.social.twitter,  label: "Twitter" },
]

export function Footer() {
  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-white/5 bg-[#06060a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-600 to-cyan-600 flex items-center justify-center shrink-0">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <p className="text-white/30 text-sm font-mono">
              &copy; {new Date().getFullYear()} {personalInfo.name}
            </p>
            <span className="hidden sm:flex items-center gap-1 text-white/20 text-xs">
              · Made with <Heart className="w-3 h-3 text-pink-500 mx-0.5" /> in {personalInfo.location}
            </span>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-white/40 hover:text-white/80 text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social + back to top */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/4 border border-white/5 flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/8 hover:border-white/10 transition-all"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
            <a
              href="#"
              onClick={scrollTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 hover:bg-violet-500/20 transition-all ml-1"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
