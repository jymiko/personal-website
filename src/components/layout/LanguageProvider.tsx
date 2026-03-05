"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { translations, Lang, Translations } from "@/lib/translations"

const LanguageContext = createContext<{
  lang: Lang
  t: Translations
  setLang: (l: Lang) => void
}>({
  lang: "id",
  t: translations.id,
  setLang: () => {},
})

export function useLanguage() {
  return useContext(LanguageContext)
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id")

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null
    if (stored === "id" || stored === "en") setLangState(stored)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem("lang", l)
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}
