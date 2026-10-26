import { ArrowDown, MapPin } from "lucide-react"
import { categories, totalServices } from "@/lib/catalog-data"

const stats = [
  { value: String(categories.length), label: "domaines d'expertise" },
  { value: String(totalServices), label: "services au catalogue" },
  { value: "€", label: "tarifs transparents en euros" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1fr_340px] lg:items-end lg:px-8 lg:pb-24">
        <div>
        <p className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <MapPin className="size-3.5 text-primary" aria-hidden="true" />
          Catalogue des services IA · Édition 2026
        </p>

        <h1 className="mt-6 max-w-4xl text-balance font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {"L'intelligence artificielle, "}
          <span className="italic text-primary">concrète</span>
          {" et rentable pour votre entreprise."}
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Du premier audit à la maintenance en production, Kynetic Solutions accompagne PME, banques, cliniques et
          {" groupes internationaux avec des offres claires, des livrables précis et des tarifs indicatifs."}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#catalogue"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explorer le catalogue
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center rounded-full border bg-card px-6 text-sm font-medium transition-colors hover:bg-accent"
          >
            Parler à un consultant
          </a>
        </div>

        <dl className="mt-14 grid max-w-3xl grid-cols-3 gap-6 border-t pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-serif text-4xl tracking-tight sm:text-5xl">{stat.value}</dd>
              <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</dd>
            </div>
          ))}
        </dl>
        </div>

        <nav aria-label="Sommaire du catalogue" className="rounded-2xl border bg-card/80 p-2 backdrop-blur">
          <p className="px-3 pb-2 pt-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Sommaire
          </p>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-accent"
                >
                  <span
                    aria-hidden="true"
                    className="size-2 shrink-0 rounded-full bg-gradient-to-br from-primary to-highlight transition-transform group-hover:scale-125"
                  />
                  <span className="flex-1 truncate" title={category.title}>
                    {category.shortTitle}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{category.services.length}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
