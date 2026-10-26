"use client"

import { useDeferredValue, useMemo, useState } from "react"
import { Search, X } from "lucide-react"
import { categories } from "@/lib/catalog-data"
import { ServiceCard } from "@/components/service-card"

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
                [service.code, service.title, service.description, service.model, ...(service.deliverables ?? [])]
                  .filter(Boolean)
                  .join(" "),
              ).includes(term),
            )
          : category.services,
      }))
      .filter((category) => category.services.length > 0)
  }, [deferredQuery, activeCategory])

  const resultCount = filtered.reduce((sum, category) => sum + category.services.length, 0)

  return (
    <section id="catalogue" aria-labelledby="catalogue-title" className="pb-24">
      <h2 id="catalogue-title" className="sr-only">
        Catalogue des services
      </h2>

      <div className="sticky top-16 z-30 border-b bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:gap-6 lg:px-8">
          <div className="relative w-full shrink-0 lg:w-72">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
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
              className="h-10 w-full rounded-full border bg-card pl-10 pr-10 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/40 [&::-webkit-search-cancel-button]:hidden"
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
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [mask-image:linear-gradient(to_right,black_90%,transparent)] [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:pb-0 lg:pr-10"
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
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="pt-6 text-sm text-muted-foreground" aria-live="polite">
          {resultCount} service{resultCount > 1 ? "s" : ""} affiché{resultCount > 1 ? "s" : ""}
        </p>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed p-12 text-center">
            <p className="font-serif text-2xl">Aucun service ne correspond à votre recherche.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Essayez un autre mot-clé ou contactez-nous pour un besoin sur mesure.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("")
                setActiveCategory("all")
              }}
              className="mt-6 inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-20 pt-10">
            {filtered.map((category) => (
              <section key={category.id} id={category.id} aria-labelledby={`${category.id}-title`}>
                <div className="grid gap-4 border-b pb-8 md:grid-cols-[1fr_auto] md:items-end md:gap-8">
                  <div className="max-w-2xl">
                    <span
                      aria-hidden="true"
                      className="mb-4 block h-1 w-12 rounded-full bg-gradient-to-r from-primary to-highlight"
                    />
                    <h3
                      id={`${category.id}-title`}
                      className="text-balance font-serif text-3xl tracking-tight sm:text-4xl"
                    >
                      {category.title}
                    </h3>
                    <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{category.tagline}</p>
                  </div>
                  <p className="text-sm text-muted-foreground md:text-right">
                    <span className="font-semibold text-foreground">{category.services.length}</span>{" "}
                    {category.services.length > 1 ? "services" : "service"}
                  </p>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service) => (
                    <ServiceCard key={service.code} service={service} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </section>
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
      className={`inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-sm font-medium transition-colors ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      }`}
    >
      {children}
    </button>
  )
}
