import { ImageResponse } from "next/og"
import { personalInfo } from "@/lib/data"

export const runtime = "edge"
export const alt = `${personalInfo.name} — Fullstack Developer & UI/UX Designer`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080F1A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Accent glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(79,142,247,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: 200,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Label */}
        <p
          style={{
            color: "#4F8EF7",
            fontSize: 18,
            margin: "0 0 20px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          Portfolio
        </p>

        {/* Name */}
        <h1
          style={{
            color: "#F0F6FF",
            fontSize: 80,
            fontWeight: 700,
            margin: "0 0 16px",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          {personalInfo.name}
        </h1>

        {/* Role */}
        <p
          style={{
            color: "#8BA3C7",
            fontSize: 28,
            margin: "0 0 40px",
            fontWeight: 400,
          }}
        >
          Fullstack Developer &amp; UI/UX Designer
        </p>

        {/* Stats row */}
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          {[
            { value: `${personalInfo.stats.yearsExperience}+`, label: "Years" },
            { value: `${personalInfo.stats.projectsCompleted}+`, label: "Projects" },
            { value: personalInfo.location, label: "Based In" },
          ].map(({ value, label }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ color: "#F0F6FF", fontSize: 22, fontWeight: 600 }}>{value}</span>
              <span style={{ color: "#4A6080", fontSize: 14, letterSpacing: "0.1em" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
