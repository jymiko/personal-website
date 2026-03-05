"use client"

import { useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const shouldReduceMotion = useReducedMotion()

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || shouldReduceMotion) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (e.clientX - (left + width / 2)) * strength
    const y = (e.clientY - (top + height / 2)) * strength
    setPos({ x, y })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 300, damping: 18, mass: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
