"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

export function PageLoader() {
  const [visible, setVisible] = useState(true)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Hide after fonts + first paint settle
    const timer = setTimeout(() => setVisible(false), shouldReduceMotion ? 0 : 800)
    return () => clearTimeout(timer)
  }, [shouldReduceMotion])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated logo mark */}
            <motion.div
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple"
              animate={shouldReduceMotion ? {} : {
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            />
            <p className="font-mono text-xs text-muted-foreground tracking-[0.2em] uppercase">
              Loading
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
