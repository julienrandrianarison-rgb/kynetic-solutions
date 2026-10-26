import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { categories, totalServices } from "@/lib/catalog-data"

const stats = [
  { value: String(categories.length), label: "domaines d'expertise" },
  { value: String(totalServices), label: "services proposés" },
  { value: "100%", label: "tarifs transparents en euros" },
]

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#0b0a1a] text-white">
      <Image
        src="/images/hero-ai.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="animate-float-slow -z-20 object-cover object-center opacity-90"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#0b0a1a_0%,rgba(11,10,26,0.85)_35%,rgba(11,10,26,0.2)_75%),linear-gradient(0deg,#0b0a1a_0%,transparent_35%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_20%_40%,black_10%,transparent_65%)]"
      />

      <div className="container-wide flex flex-1 flex-col justify-center pb-12 pt-32">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
          <Sparkles className="size-3.5 text-violet-300" aria-hidden="true" />
          Services IA · Édition 2026
        </p>

        <h1 className="mt-8 max-w-6xl text-balance font-serif text-6xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl 2xl:text-9xl">
          {"L'intelligence artificielle, "}
          <span className="text-gradient italic">concrète</span>
          {" et rentable."}
        </h1>

        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 lg:text-xl">
          Du premier audit à la maintenance en production, Kynetic Solutions accompagne PME, banques, cliniques et
          {" groupes internationaux avec des offres claires, des livrables précis et des tarifs indicatifs."}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#services"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#140f2e] transition-transform hover:scale-[1.02]"
          >
            Découvrir nos services
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center rounded-full border border-white/20 bg-white/5 px-7 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/15"
          >
            Parler à un consultant
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 bg-white/[0.03] backdrop-blur-md">
        <div className="container-wide flex items-center justify-between gap-8 py-6">
          <dl className="grid flex-1 grid-cols-3 gap-6 sm:max-w-3xl">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs text-white/60 sm:text-sm">{stat.label}</dt>
                <dd className="font-serif text-3xl tracking-tight sm:text-5xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
          <a
            href="#services"
            className="hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white md:flex"
          >
            Défiler
            <span className="flex h-9 w-5 justify-center rounded-full border border-white/30 pt-1.5" aria-hidden="true">
              <span className="animate-scroll-hint h-1.5 w-1 rounded-full bg-white" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
