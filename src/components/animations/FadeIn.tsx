"use client"

import { motion, useReducedMotion } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  className?: string
  once?: boolean
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  className,
  once = true,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()

  const offsets = {
    up:    { y: 28, x: 0 },
    down:  { y: -28, x: 0 },
    left:  { x: 28, y: 0 },
    right: { x: -28, y: 0 },
    none:  { x: 0, y: 0 },
  }

  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, ...offsets[direction] }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0.1 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
