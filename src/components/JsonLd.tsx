// Server Component — rendered as static HTML, no client JS needed
// React 18 + Next.js App Router renders <script> children as raw text (no escaping)
import { personalInfo } from "@/lib/data"

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  url: personalInfo.siteUrl,
  image: `${personalInfo.siteUrl}/images/profile.jpg`,
  jobTitle: "Fullstack Developer",
  description:
    "Fullstack developer dengan background UI/UX design. 12 tahun pengalaman membangun produk digital dari wireframe sampai deployment.",
  knowsAbout: [
    "React", "Next.js", "TypeScript", "Node.js",
    "UI/UX Design", "PostgreSQL", "Docker",
  ],
  sameAs: [
    personalInfo.social.github,
    personalInfo.social.linkedin,
    personalInfo.social.twitter,
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "ID",
  },
  email: personalInfo.email,
}

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // Content berasal dari data.ts (developer-controlled, bukan user input)
      // React 18 Server Component: script children di-output sebagai raw text
      suppressHydrationWarning
    >
      {JSON.stringify(personSchema)}
    </script>
  )
}
