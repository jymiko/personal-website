"use client"

import { motion, useReducedMotion } from "framer-motion"

type JourneyColor = "purple" | "blue" | "green"

interface TimelineItemProps {
  era: string
  role: string
  description: string
  skills: string[]
  color: JourneyColor
  index: number
  isLast?: boolean
}

const colorMap: Record<JourneyColor, { dot: string; badge: string; border: string; label: string }> = {
  purple: {
    dot:    "bg-accent-purple shadow-[0_0_12px_rgba(167,139,250,0.6)]",
    badge:  "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
    border: "border-accent-purple/20 hover:border-accent-purple/40",
    label:  "text-accent-purple",
  },
  blue: {
    dot:    "bg-accent-blue shadow-[0_0_12px_rgba(79,142,247,0.6)]",
    badge:  "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
    border: "border-accent-blue/20 hover:border-accent-blue/40",
    label:  "text-accent-blue",
  },
  green: {
    dot:    "bg-accent-green shadow-[0_0_12px_rgba(52,211,153,0.6)]",
    badge:  "bg-accent-green/10 text-accent-green border-accent-green/20",
    border: "border-accent-green/20 hover:border-accent-green/40",
    label:  "text-accent-green",
  },
}

export function TimelineItem({
  era, role, description, skills, color, index, isLast = false,
}: TimelineItemProps) {
  const shouldReduceMotion = useReducedMotion()
  const c = colorMap[color]

  return (
    <motion.div
      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      viewport={{ once: true, margin: "-60px" }}
      className="relative flex gap-6 md:gap-8"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${c.dot}`} />
        {!isLast && (
          <div className="w-px flex-1 mt-2 bg-gradient-to-b from-border to-transparent min-h-[80px]" />
        )}
      </div>

      {/* Card content */}
      <div
        className={`
          glass rounded-xl p-5 md:p-6 mb-8 flex-1
          border transition-all duration-300 ${c.border}
          hover:-translate-y-0.5
        `}
      >
        {/* Era label */}
        <p className={`font-mono text-xs tracking-[0.15em] uppercase mb-2 ${c.label}`}>
          {era}
        </p>

        {/* Role */}
        <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
          {role}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className={`text-xs px-2.5 py-1 rounded-full border font-mono ${c.badge}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
