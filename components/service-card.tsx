import { Check, Clock } from "lucide-react"
import type { Service } from "@/lib/catalog-data"

export function ServiceCard({ service }: { service: Service }) {
  const isQuote = !service.price.includes("€")

  return (
    <article className="group flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_12px_40px_-16px] hover:shadow-primary/25">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground">
          {service.model}
        </span>
      </div>

      <h3 className="mt-4 text-pretty text-lg font-semibold leading-snug tracking-tight">{service.title}</h3>

      {service.description && (
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      )}

      {service.deliverables && (
        <div className="mt-5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Livrables</p>
          <ul className="mt-2.5 flex flex-col gap-2">
            {service.deliverables.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-snug">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto pt-6">
        <div className="flex flex-col gap-3 border-t pt-4">
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="size-3.5" aria-hidden="true" />
            <span className="sr-only">Durée :</span>
            {service.duration}
          </p>
          <div>
            <p className="sr-only">Tarif indicatif :</p>
            <p className="flex flex-wrap items-baseline gap-x-1.5 font-semibold tabular-nums tracking-tight">
              <span className={isQuote ? "text-lg text-foreground" : "text-lg text-primary"}>{service.price}</span>
              {service.recurring && (
                <span className="text-sm font-medium text-muted-foreground">{service.recurring}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
