import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    image: "/images/portfolio-support.png",
    sector: "Distribution B2B",
    title: "Un agent conversationnel pour le service client",
    text: "Agent connecté au catalogue et au suivi de commandes, avec escalade vers un conseiller humain.",
    metric: "-45 %",
    metricLabel: "de tickets traités manuellement",
    tags: ["Agent IA", "RAG", "Intégration CRM"],
  },
  {
    image: "/images/portfolio-documents.png",
    sector: "Expertise comptable",
    title: "Extraction automatique des pièces comptables",
    text: "Lecture des factures et justificatifs, contrôle de cohérence et export vers le logiciel métier.",
    metric: "6 h",
    metricLabel: "gagnées par collaborateur et par semaine",
    tags: ["IA documentaire", "Automatisation", "OCR"],
  },
  {
    image: "/images/portfolio-data.png",
    sector: "Industrie",
    title: "Prévision de la demande et tableau de bord",
    text: "Modèle de prévision branché sur l'ERP et tableau de bord partagé avec les équipes achats.",
    metric: "+18 %",
    metricLabel: "de précision sur les prévisions",
    tags: ["Data", "Machine learning", "BI"],
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="py-28">
      <div className="container-wide">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Portfolio</p>
            <h2
              id="portfolio-title"
              className="mt-4 text-balance font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Des projets qui tournent <span className="italic text-primary">en production.</span>
            </h2>
          </div>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
            Quelques réalisations récentes, présentées de façon anonyme par respect de la confidentialité de nos
            clients.
          </p>
        </div>

        <ul className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0b0a1a]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {project.sector}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="flex items-start justify-between gap-4 text-xl font-semibold tracking-tight">
                    {project.title}
                    <ArrowUpRight
                      className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{project.text}</p>
                  <div className="mt-6 flex items-baseline gap-3 rounded-2xl bg-muted/60 px-5 py-4">
                    <span className="font-serif text-4xl leading-none text-primary">{project.metric}</span>
                    <span className="text-sm text-muted-foreground">{project.metricLabel}</span>
                  </div>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
