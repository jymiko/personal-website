import { personalInfo } from "@/lib/data"

export function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-green/30 bg-accent-green/10 text-sm font-mono">
      <span className="relative flex h-2 w-2">
        {personalInfo.isAvailable && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
        )}
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            personalInfo.isAvailable ? "bg-accent-green" : "bg-muted-foreground"
          }`}
        />
      </span>
      <span className="text-accent-green">
        {personalInfo.isAvailable ? "Available for work" : "Currently unavailable"}
      </span>
    </div>
  )
}
