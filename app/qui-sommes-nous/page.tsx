import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { About } from "@/components/about"

export const metadata: Metadata = {
  title: "Qui sommes-nous | Kynetic Solutions",
  description: "Kynetic Solutions, ESN spécialisée en intelligence artificielle : notre équipe, nos valeurs et nos engagements.",
}

export default function AboutPage() {
  return (
    <PageShell
      title="Qui sommes-nous"
      hero={{
        eyebrow: "Notre histoire",
        heading: (
          <>
            {"Une équipe "}
            <span className="text-gradient italic">humaine</span>
            {" au service de l'IA."}
          </>
        ),
        description:
          "Kynetic Solutions est une ESN spécialisée en intelligence artificielle. Nous accompagnons les entreprises avec pragmatisme, transparence et exigence, du cadrage à la production.",
        image: "/images/team.png",
      }}
    >
      <About />
    </PageShell>
  )
}
