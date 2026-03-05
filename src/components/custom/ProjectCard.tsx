"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  techStack: string[]
  liveUrl: string
  githubUrl: string | null
  featured?: boolean
}

export function ProjectCard({
  title, description, image, techStack, liveUrl, githubUrl, featured,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-bg-subtle transition-all duration-300 ${
        hovered ? "border-border-hover -translate-y-1 shadow-xl shadow-black/30" : ""
      } ${featured ? "md:col-span-2" : ""}`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden bg-bg-muted ${featured ? "aspect-[16/7]" : "aspect-video"}`}>
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${
            hovered ? "scale-105" : "scale-100"
          }`}
          sizes={featured ? "100vw" : "50vw"}
        />

        {/* Hover overlay with links */}
        <div
          className={`absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue text-background text-sm font-medium hover:bg-accent-blue/90 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={14} />
            Live Site
          </a>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-bg-subtle text-foreground text-sm font-medium hover:border-border-hover transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={14} />
              Code
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-heading font-semibold text-lg text-foreground leading-snug">
            {title}
          </h3>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            className="flex-shrink-0 p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-bg-muted transition-colors"
          >
            <ArrowUpRight size={16} />
          </a>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full border border-border bg-bg-muted text-muted-foreground font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
