"use client"

import { useState } from "react"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: "blue" | "purple" | "green" | "none"
  hoverable?: boolean
}

const glowMap = {
  blue:   "hover:border-accent-blue/40 hover:glow-blue",
  purple: "hover:border-accent-purple/40 hover:glow-purple",
  green:  "hover:border-accent-green/40 hover:glow-green",
  none:   "",
}

export function GlassCard({
  children,
  className = "",
  glowColor = "blue",
  hoverable = true,
}: GlassCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        glass rounded-xl p-6
        transition-all duration-300
        ${hoverable ? glowMap[glowColor] : ""}
        ${hovered && hoverable ? "border-accent-blue/30 -translate-y-0.5" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
