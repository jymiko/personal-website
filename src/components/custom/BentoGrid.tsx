interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 ${className}`}
    >
      {children}
    </div>
  )
}
