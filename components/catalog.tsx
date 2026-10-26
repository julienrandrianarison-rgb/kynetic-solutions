"use client"

import { useDeferredValue, useMemo, useState } from "react"
import { Search, X } from "lucide-react"
import { categories } from "@/lib/catalog-data"
import { ServiceCard } from "@/components/service-card"
import { getCategoryIcon } from "@/lib/category-icons"
import { cn } from "@/lib/utils"

const normalize = (value: string) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

export function Catalog() {
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const deferredQuery = useDeferredValue(query)

  const filtered = useMemo(() => {
    const term = normalize(deferredQuery.trim())
    return categories
      .filter((category) => activeCategory === "all" || category.id === activeCategory)
      .map((category) => ({
        ...category,
        services: term
          ? category.services.filter((service) =>
              normalize(
                [service.title, service.description, service.model, ...(service.deliverables ?? [])]
                  .filter(Boolean)
                  .join(" "),
              ).includes(term),
            )
          : category.services,
      }))
      .filter((category) => category.services.length > 0)
  }, [deferredQuery, activeCategory])

  const resultCount = filtered.reduce((sum, category) => sum + category.services.length, 0)

  const reset = () => {
    setQuery("")
    setActiveCategory("all")
  }

  return (
    <section id="services" aria-labelledby="services-title">
      <div className="container-wide pb-16 pt-28">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Nos services</p>
            <h2
              id="services-title"
              className="mt-4 text-balance font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Des offres claires, du conseil à la <span className="italic text-primary">production.</span>
            </h2>
          </div>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
            Recherchez un service ou filtrez par domaine. Chaque offre précise ses livrables, sa durée et un tarif
            indicatif.
          </p>
        </div>
      </div>

      <div className="sticky top-16 z-30 border-y bg-background/85 backdrop-blur-xl">
        <div className="container-wide flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:gap-6">
          <div className="relative w-full shrink-0 lg:w-80">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <label htmlFor="service-search" className="sr-only">
              Rechercher un service
            </label>
            <input
              id="service-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rechercher : chatbot, n8n, RAG..."
              className="h-11 w-full rounded-full border bg-card pl-11 pr-10 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/40 [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
                aria-label="Effacer la recherche"
              >
                <X className="size-3.5" aria-hidden="true" />
              </button>
            )}
          </div>

          <div
            role="group"
            aria-label="Filtrer par domaine"
            className="flex flex-1 gap-2 overflow-x-auto pb-1 [scrollbar-width:none] lg:pb-0"
          >
            <FilterChip active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>
              Tous
            </FilterChip>
            {categories.map((category) => (
              <FilterChip
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.shortTitle}
              </FilterChip>
            ))}
          </div>

          <p className="hidden shrink-0 text-sm text-muted-foreground xl:block" aria-live="polite">
            <span className="font-semibold text-foreground">{resultCount}</span> service{resultCount > 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="container-wide py-24">
          <div className="rounded-3xl border border-dashed p-16 text-center">
            <p className="font-serif text-3xl">Aucun service ne correspond à votre recherche.</p>
            <p className="mt-3 text-muted-foreground">
              Essayez un autre mot-clé ou contactez-nous pour un besoin sur mesure.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-8 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Réinitialiser les filtres
            </button>
          </div>
        </div>
      ) : (
        <div>
          {filtered.map((category, index) => (
            <section
              key={category.id}
              id={category.id}
              aria-labelledby={`${category.id}-title`}
              className={cn("border-b py-20 lg:py-28", index % 2 === 1 && "bg-muted/60")}
            >
              <div className="container-wide grid gap-12 lg:grid-cols-[minmax(280px,1fr)_3fr] lg:gap-16">
                <div className="lg:sticky lg:top-44 lg:self-start">
                  <CategoryBadge id={category.id} />
                  <h3
                    id={`${category.id}-title`}
                    className="mt-8 text-balance font-serif text-4xl leading-tight tracking-tight lg:text-5xl"
                  >
                    {category.title}
                  </h3>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{category.tagline}</p>
                  <p className="mt-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm">
                    <span className="size-2 rounded-full bg-gradient-to-br from-primary to-highlight" aria-hidden="true" />
                    <span className="font-semibold">{category.services.length}</span>
                    <span className="text-muted-foreground">
                      {category.services.length > 1 ? "services" : "service"}
                    </span>
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
                  {category.services.map((service) => (
                    <ServiceCard key={service.code} service={service} categoryId={category.id} />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      )}
    </section>
  )
}

function CategoryBadge({ id }: { id: string }) {
  const Icon = getCategoryIcon(id)
  return (
    <div className="relative inline-flex">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-primary to-highlight opacity-40 blur-2xl"
      />
      <div className="relative flex size-24 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-primary to-highlight p-px lg:size-28">
        <div className="flex size-full items-center justify-center rounded-[calc(1.75rem-1px)] bg-card">
          <Icon className="size-10 text-primary lg:size-12" strokeWidth={1.5} aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex h-10 shrink-0 items-center rounded-full border px-4 text-sm font-medium transition-colors",
        active
          ? "border-transparent bg-gradient-to-r from-primary to-highlight text-primary-foreground"
          : "bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground",
      )}
    >
      {children}
    </button>
  )
}
