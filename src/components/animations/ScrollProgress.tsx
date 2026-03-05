"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "framer-motion"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) return

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const total = scrollHeight - clientHeight
      setProgress(total > 0 ? (scrollTop / total) * 100 : 0)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [shouldReduceMotion])

  if (shouldReduceMotion) return null

  return (
    <div
      className="fixed top-0 left-0 z-[60] h-[2px] bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green transition-none"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Scroll progress"
    />
  )
}
