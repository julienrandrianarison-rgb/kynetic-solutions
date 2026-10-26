import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { Careers } from "@/components/careers"

export const metadata: Metadata = {
  title: "Nous rejoindre | Kynetic Solutions",
  description: "Rejoignez Kynetic Solutions : offres d'emploi et d'alternance en IA, data et développement.",
}

export default function CareersPage() {
  return (
    <PageShell
      title="Nous rejoindre"
      hero={{
        eyebrow: "Carrières",
        heading: (
          <>
            {"Faites grandir votre "}
            <span className="text-gradient italic">carrière</span>
            {" dans l'IA."}
          </>
        ),
        description:
          "Ingénieurs, data scientists, développeurs ou alternants : rejoignez une équipe passionnée qui livre des projets IA concrets pour des clients exigeants.",
        image: "/images/careers-hero.png",
      }}
    >
      <Careers />
    </PageShell>
  )
}
