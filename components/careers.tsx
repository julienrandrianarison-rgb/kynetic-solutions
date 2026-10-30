import { ArrowRight, BookOpen, Laptop, MapPin, Rocket, Users } from "lucide-react"

const perks = [
  { icon: Rocket, title: "Projets concrets", text: "Des missions IA livrées en production, pas des POC sans lendemain." },
  { icon: BookOpen, title: "Formation continue", text: "Budget formation, certifications et veille partagée chaque semaine." },
  { icon: Laptop, title: "Télétravail flexible", text: "Organisation hybride et matériel au choix." },
  { icon: Users, title: "Équipe soudée", text: "Mentorat, revues de code et décisions prises ensemble." },
]

const jobs = [
  { title: "Consultant·e IA & transformation", type: "CDI", location: "Antananarivo / Hybride" },
  { title: "Ingénieur·e IA générative (LLM, RAG)", type: "CDI", location: "Antananarivo / Hybride" },
  { title: "Data engineer", type: "CDI", location: "Remote" },
  { title: "Développeur·se full-stack TypeScript", type: "CDI", location: "Antananarivo / Hybride" },
  { title: "Alternance : assistant·e chef de projet IA", type: "Alternance", location: "Antananarivo" },
]

const applyHref = (subject: string) =>
  `mailto:contact@kynetic-solutions.ovh?subject=${encodeURIComponent(`Candidature : ${subject}`)}`

export function Careers() {
  return (
    <section id="recrutement" aria-labelledby="recrutement-title" className="border-t py-28">
      <div className="container-wide grid gap-16 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Nous rejoindre</p>
          <h2
            id="recrutement-title"
            className="mt-4 text-balance font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl"
          >
            Construisez l&apos;IA de demain <span className="italic text-primary">avec nous.</span>
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Nous recherchons des profils curieux et exigeants, prêts à mettre leur expertise au service de projets
            à fort impact.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {perks.map((perk) => (
              <li key={perk.title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <perk.icon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">{perk.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{perk.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Offres ouvertes
          </h3>
          <ul className="flex flex-col gap-3">
            {jobs.map((job) => (
              <li key={job.title}>
                <a
                  href={applyHref(job.title)}
                  className="group flex items-center justify-between gap-4 rounded-2xl border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div>
                    <p className="font-semibold tracking-tight">{job.title}</p>
                    <p className="mt-1.5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="size-3.5" aria-hidden="true" />
                        {job.location}
                      </span>
                    </p>
                  </div>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">Postuler</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-3 rounded-2xl bg-gradient-to-br from-[#1d1a6b] via-[#3b1f8f] to-[#7a1fa2] p-6 text-white">
            <p className="font-semibold">Aucune offre ne vous correspond ?</p>
            <p className="mt-1 text-sm text-white/70">Envoyez-nous une candidature spontanée, nous lisons tout.</p>
            <a
              href={applyHref("Candidature spontanée")}
              className="mt-4 inline-flex h-10 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-[#140f2e] transition-opacity hover:opacity-90"
            >
              Candidature spontanée
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
