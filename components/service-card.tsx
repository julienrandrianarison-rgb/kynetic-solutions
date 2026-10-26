import { ArrowUpRight, Check, Clock } from "lucide-react"
import type { Service } from "@/lib/catalog-data"
import { getCategoryIcon } from "@/lib/category-icons"

export function ServiceCard({ service, categoryId }: { service: Service; categoryId: string }) {
  const isQuote = !service.price.includes("€")
  const Icon = getCategoryIcon(categoryId)

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_60px_-24px] hover:shadow-primary/40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-gradient-to-br from-primary/25 to-highlight/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex items-center justify-between gap-3">
        <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-highlight/15 ring-1 ring-primary/20 transition-all duration-300 group-hover:from-primary group-hover:to-highlight group-hover:ring-transparent">
          <Icon
            className="size-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </span>
        <span className="rounded-full border bg-background/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          {service.model}
        </span>
      </div>

      <h4 className="relative mt-5 text-pretty text-xl font-semibold leading-snug tracking-tight">{service.title}</h4>

      {service.description && (
        <p className="relative mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      )}

      {service.deliverables && (
        <ul className="relative mt-6 flex flex-col gap-2.5">
          {service.deliverables.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-snug">
              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Check className="size-3 text-primary" aria-hidden="true" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="relative mt-auto pt-8">
        <div className="flex items-end justify-between gap-4 border-t pt-5">
          <div>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="size-3.5" aria-hidden="true" />
              <span className="sr-only">Durée :</span>
              {service.duration}
            </p>
            <p className="sr-only">Tarif indicatif :</p>
            <p className="mt-1.5 flex flex-wrap items-baseline gap-x-1.5 tabular-nums tracking-tight">
              <span className={isQuote ? "text-xl font-semibold" : "text-gradient text-2xl font-semibold"}>
                {service.price}
              </span>
              {service.recurring && (
                <span className="text-sm font-medium text-muted-foreground">{service.recurring}</span>
              )}
            </p>
          </div>
          <a
            href={`mailto:contact@kynetic-solutions.ovh?subject=${encodeURIComponent(`Demande : ${service.title}`)}`}
            aria-label={`Demander un devis pour ${service.title}`}
            className="flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  )
}
