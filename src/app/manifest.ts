import type { MetadataRoute } from "next"
import { personalInfo } from "@/lib/data"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personalInfo.name} — Fullstack Developer`,
    short_name: personalInfo.name.split(" ")[0],
    description: personalInfo.bioShort,
    start_url: "/",
    display: "standalone",
    background_color: "#080F1A",
    theme_color: "#080F1A",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  }
}
