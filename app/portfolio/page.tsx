import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { Portfolio } from "@/components/portfolio"

export const metadata: Metadata = {
  title: "Portfolio | Kynetic Solutions",
  description: "Découvrez des projets IA livrés par Kynetic Solutions : agents conversationnels, IA documentaire, data et prévision.",
}

export default function PortfolioPage() {
  return (
    <PageShell
      title="Portfolio"
      hero={{
        eyebrow: "Nos réalisations",
        heading: (
          <>
            {"Des projets IA "}
            <span className="text-gradient italic">livrés</span>
            {" en production."}
          </>
        ),
        description:
          "Agents conversationnels, IA documentaire, data et prévision : découvrez comment nous transformons des cas d'usage concrets en résultats mesurables.",
        image: "/images/portfolio-data.png",
        stats: [
          { value: "40+", label: "projets livrés" },
          { value: "12", label: "secteurs accompagnés" },
          { value: "-60 %", label: "de temps de traitement en moyenne" },
        ],
      }}
    >
      <Portfolio />
    </PageShell>
  )
}
