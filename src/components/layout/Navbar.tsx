"use client"

import { useState, useEffect } from "react"
import { Code2, Menu, X, Sun, Moon } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { useTheme } from "@/components/layout/ThemeProvider"
import { useLanguage } from "@/components/layout/LanguageProvider"

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
  const { theme, toggle }       = useTheme()
  const { lang, setLang, t }    = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.4, rootMargin: "-80px 0px 0px 0px" }
    )
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
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
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => go("#hero")} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/30"
               style={{ background: "linear-gradient(135deg,#10b981,#06b6d4)" }}>
            <Code2 size={16} className="text-white" />
          </div>
          <span className="text-foreground font-semibold tracking-wide font-sans">
            {personalInfo.nameShort}<span className="text-emerald-500">Portfolio</span>
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
                    ? "text-emerald-500 bg-emerald-500/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right: Lang + Theme toggle + Hire Me */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center rounded-lg border border-border overflow-hidden text-xs font-mono font-semibold">
            <button
              onClick={() => setLang("id")}
              className={`px-2.5 py-1.5 transition-all duration-200 ${
                lang === "id"
                  ? "bg-emerald-500 text-white"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1.5 transition-all duration-200 ${
                lang === "en"
                  ? "bg-emerald-500 text-white"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all duration-200"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Hire Me CTA */}
          <button
            onClick={() => go("#contact")}
            className="flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105"
            style={{ background: "linear-gradient(135deg,#10b981,#06b6d4)" }}
          >
            {t.nav.hireMeBtn}
          </button>
        </div>

        {/* Mobile: Lang + Theme toggle + Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          {/* Language toggle mobile */}
          <div className="flex items-center rounded-lg border border-border overflow-hidden text-xs font-mono font-semibold">
            <button
              onClick={() => setLang("id")}
              className={`px-2 py-1.5 transition-all duration-200 ${
                lang === "id" ? "bg-emerald-500 text-white" : "text-muted-foreground"
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1.5 transition-all duration-200 ${
                lang === "en" ? "bg-emerald-500 text-white" : "text-muted-foreground"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => go(l.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                    active === l.href
                      ? "text-emerald-500 bg-emerald-500/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
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
                style={{ background: "linear-gradient(135deg,#10b981,#06b6d4)" }}
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
