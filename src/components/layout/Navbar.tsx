"use client"

import { useState, useEffect } from "react"
import { Code2, Menu, X } from "lucide-react"
import { personalInfo } from "@/lib/data"

const navLinks = [
  { label: "Home",     href: "#hero" },
  { label: "About",    href: "#about" },
  { label: "Journey",  href: "#journey" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState("#hero")
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const go = (href: string) => {
    setActive(href)
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => go("#hero")} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg shadow-violet-500/30"
               style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }}>
            <Code2 size={16} className="text-white" />
          </div>
          <span className="text-white font-semibold tracking-wide font-sans">
            {personalInfo.nameShort}<span className="text-violet-400">Portfolio</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => go(l.href)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                  active === l.href
                    ? "text-violet-400 bg-violet-500/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hire Me CTA */}
        <button
          onClick={() => go("#contact")}
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105"
          style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }}
        >
          Hire Me
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => go(l.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                    active === l.href
                      ? "text-violet-400 bg-violet-500/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li className="mt-3">
              <button
                onClick={() => go("#contact")}
                className="w-full py-3 rounded-full text-white text-sm"
                style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }}
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
