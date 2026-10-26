import Image from "next/image"
import { Handshake, Lightbulb, Lock, Target } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Pragmatisme",
    text: "Nous ne déployons l'IA que là où elle crée une valeur mesurable.",
  },
  {
    icon: Lock,
    title: "Confiance",
    text: "Données hébergées en Europe, conformité RGPD et AI Act intégrée dès la conception.",
  },
  {
    icon: Handshake,
    title: "Proximité",
    text: "Une équipe à taille humaine, un interlocuteur unique du cadrage à la production.",
  },
  {
    icon: Lightbulb,
    title: "Transmission",
    text: "Nous formons vos équipes pour qu'elles restent autonomes après notre passage.",
  },
]

const stats = [
  { value: "40+", label: "projets IA livrés" },
  { value: "95 %", label: "de clients satisfaits" },
  { value: "100 %", label: "hébergement européen" },
]

export function About() {
  return (
    <section
      id="a-propos"
      aria-labelledby="a-propos-title"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-[#0b0a1a] py-28 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 top-0 -z-10 size-[36rem] rounded-full bg-violet-600/20 blur-[120px]"
      />

      <div className="container-wide grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/images/team.png"
              alt="L'équipe Kynetic Solutions en atelier de travail"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b0a1a]/80 via-transparent" />
          </div>
          <dl className="absolute inset-x-6 bottom-6 grid grid-cols-3 gap-2 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1 text-center">
                <dt className="text-xs text-white/60">{stat.label}</dt>
                <dd className="font-serif text-3xl leading-none">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">Qui sommes-nous</p>
          <h2
            id="a-propos-title"
            className="mt-4 text-balance font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl"
          >
            Une ESN spécialisée qui rend l&apos;IA <span className="text-gradient italic">utile.</span>
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/60">
            Kynetic Solutions accompagne les PME et ETI dans leur transformation par l&apos;intelligence
            artificielle. Consultants, ingénieurs data et développeurs travaillent ensemble pour passer de
            l&apos;idée à une solution fiable, sécurisée et adoptée par vos équipes.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <li
                key={value.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-fuchsia-500">
                  <value.icon className="size-4" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-semibold">{value.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{value.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
