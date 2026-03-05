interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`font-mono text-xs tracking-[0.15em] uppercase text-accent-blue mb-3 ${className}`}
    >
      {children}
    </p>
  )
}
