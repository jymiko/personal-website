"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Copy, Check, Send } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { useLanguage } from "@/components/layout/LanguageProvider"

const socialLinks = [
  { icon: Github,   href: personalInfo.social.github,   label: "GitHub" },
  { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: Twitter,  href: personalInfo.social.twitter,  label: "Twitter/X" },
]

export function ContactSection() {
  const [copied,  setCopied]  = useState(false)
  const [sending, setSending] = useState(false)
  const [sent,    setSent]    = useState(false)
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const shouldReduceMotion = useReducedMotion()
  const { t } = useLanguage()
  const { contact: ct } = t

  const contactCards = [
    { icon: Mail,   label: ct.form.email, value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
    { icon: Phone,  label: "Phone",       value: personalInfo.phone,    href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Location",    value: personalInfo.location, href: null },
  ]

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSending(true)
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || `Hello from ${form.name}`)}&body=${encodeURIComponent(form.message)}`
    window.open(mailto, "_blank")
    setSending(false)
    setSent(true)
    setForm({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#0a0a0f]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-emerald-500/5 dark:bg-emerald-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-cyan-600/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{ct.label}</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight mt-3 mb-4">
            {ct.title}
          </h2>
          <p className="text-slate-500 dark:text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            {ct.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left — info */}
          <motion.div
            className="md:col-span-2 space-y-4"
            initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {contactCards.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-white/80 dark:bg-[#111118]/80">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-slate-400 dark:text-white/30 text-xs font-mono uppercase tracking-wider mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-slate-700 dark:text-white/80 text-sm hover:text-slate-900 dark:hover:text-white transition-colors truncate block">
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-700 dark:text-white/80 text-sm">{value}</p>
                  )}
                </div>
                {label === ct.form.email && (
                  <button onClick={copyEmail} aria-label="Copy email" className="shrink-0 p-1.5 rounded-lg text-slate-400 dark:text-white/30 hover:text-slate-700 dark:hover:text-white/70 transition-colors">
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                )}
              </div>
            ))}

            <div className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-white/80 dark:bg-[#111118]/80">
              <p className="text-slate-400 dark:text-white/30 text-xs font-mono uppercase tracking-wider mb-3">{ct.followMe}</p>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-50 dark:bg-white/3 hover:bg-emerald-500/10 border border-slate-200 dark:border-white/5 hover:border-emerald-500/20 text-slate-500 dark:text-white/50 hover:text-emerald-700 dark:hover:text-emerald-300 transition-all text-sm">
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {personalInfo.isAvailable && (
              <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">{ct.available}</span>
              </div>
            )}
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="md:col-span-3"
            initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="rounded-2xl border border-slate-200 dark:border-white/5 bg-white/80 dark:bg-[#111118]/80 p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="c-name" className="block text-slate-400 dark:text-white/40 text-xs font-mono uppercase tracking-wider mb-1.5">
                      {ct.form.name} <span className="text-emerald-500">*</span>
                    </label>
                    <input id="c-name" type="text" placeholder={ct.form.namePlaceholder} value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/4 border border-slate-200 dark:border-white/8 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/20 text-sm focus:outline-none focus:border-emerald-500/50 focus:bg-emerald-500/4 transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-slate-400 dark:text-white/40 text-xs font-mono uppercase tracking-wider mb-1.5">
                      {ct.form.email} <span className="text-emerald-500">*</span>
                    </label>
                    <input id="c-email" type="email" placeholder={ct.form.emailPlaceholder} value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/4 border border-slate-200 dark:border-white/8 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/20 text-sm focus:outline-none focus:border-emerald-500/50 focus:bg-emerald-500/4 transition-colors" />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-subject" className="block text-slate-400 dark:text-white/40 text-xs font-mono uppercase tracking-wider mb-1.5">
                    {ct.form.subject}
                  </label>
                  <input id="c-subject" type="text" placeholder={ct.form.subjectPlaceholder} value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/4 border border-slate-200 dark:border-white/8 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/20 text-sm focus:outline-none focus:border-emerald-500/50 focus:bg-emerald-500/4 transition-colors" />
                </div>

                <div>
                  <label htmlFor="c-message" className="block text-slate-400 dark:text-white/40 text-xs font-mono uppercase tracking-wider mb-1.5">
                    {ct.form.message} <span className="text-emerald-500">*</span>
                  </label>
                  <textarea id="c-message" placeholder={ct.form.messagePlaceholder} rows={5} value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/4 border border-slate-200 dark:border-white/8 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/20 text-sm focus:outline-none focus:border-emerald-500/50 focus:bg-emerald-500/4 transition-colors resize-none" />
                </div>

                <button type="submit" disabled={sending || sent}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-emerald-500/20">
                  {sent ? (
                    <><Check className="w-4 h-4" /> {ct.form.sent}</>
                  ) : (
                    <><Send className="w-4 h-4" /> {sending ? ct.form.sending : ct.form.send}</>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
