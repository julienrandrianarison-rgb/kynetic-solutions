import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Sparkles } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { ContactFooter } from "@/components/contact-footer"

type PageHero = {
  eyebrow: string
  heading: React.ReactNode
  description: string
  image: string
  stats?: { value: string; label: string }[]
}

export function PageShell({
  title,
  hero,
  children,
}: {
  title: string
  hero: PageHero
  children: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-[#0b0a1a] text-white">
          <Image
            src={hero.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="animate-float-slow -z-20 object-cover object-center opacity-80"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#0b0a1a_0%,rgba(11,10,26,0.88)_40%,rgba(11,10,26,0.3)_80%),linear-gradient(0deg,#0b0a1a_0%,transparent_45%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_20%_40%,black_10%,transparent_65%)]"
          />

          <div className="container-wide pb-16 pt-32 lg:pb-24 lg:pt-40">
            <nav aria-label="Fil d'Ariane">
              <ol className="flex items-center gap-1.5 text-sm text-white/60">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Accueil
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="size-3.5" />
                </li>
                <li aria-current="page" className="font-medium text-white">
                  {title}
                </li>
              </ol>
            </nav>

            <p className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
              <Sparkles className="size-3.5 text-violet-300" aria-hidden="true" />
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 max-w-4xl text-balance font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              {hero.heading}
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">{hero.description}</p>

            {hero.stats && (
              <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-8">
                {hero.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <dt className="order-2 text-sm text-white/60">{stat.label}</dt>
                    <dd className="order-1 font-serif text-4xl tracking-tight">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </section>
        {children}
      </main>
      <ContactFooter />
    </>
  )
}
