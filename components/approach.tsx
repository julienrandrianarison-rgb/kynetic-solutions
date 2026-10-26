import { CheckCircle2, Compass, FlaskConical, Hammer, ShieldCheck } from "lucide-react"

const steps = [
  {
    icon: Compass,
    title: "Diagnostiquer",
    text: "Audit, atelier et feuille de route pour cibler les cas d'usage qui rapportent vraiment.",
    deliverable: "Feuille de route priorisée",
  },
  {
    icon: FlaskConical,
    title: "Prouver",
    text: "Une preuve de concept sur vos vraies données, avec mesure de la qualité et du coût.",
    deliverable: "Prototype mesuré",
  },
  {
    icon: Hammer,
    title: "Réaliser",
    text: "Automatisations, agents, données et applications livrés et documentés.",
    deliverable: "Solution en production",
  },
  {
    icon: ShieldCheck,
    title: "Exploiter",
    text: "Maintenance, suivi des coûts et de la qualité, formation de vos équipes.",
    deliverable: "Suivi & amélioration continue",
  },
]

export function Approach() {
  return (
    <section
      id="demarche"
      aria-labelledby="demarche-title"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-[#0b0a1a] py-28 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/4 -z-10 size-[36rem] rounded-full bg-blue-600/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-0 -z-10 size-[36rem] rounded-full bg-fuchsia-600/20 blur-[120px]"
      />

      <div className="container-wide">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">Notre démarche</p>
            <h2 id="demarche-title" className="mt-4 text-balance font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Commencer petit, mesurer, puis passer à <span className="text-gradient italic">l&apos;échelle.</span>
            </h2>
          </div>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-white/60 lg:justify-self-end">
            Chaque projet suit quatre étapes claires. Vous gardez la main sur le budget et vous ne passez à
            l&apos;étape suivante qu&apos;une fois la valeur démontrée.
          </p>
        </div>

        <ol className="mt-20 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="group relative flex min-h-80 flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition-colors hover:border-white/25 hover:bg-white/[0.06]"
            >
              <span className="font-serif text-8xl leading-none text-white/10 transition-colors group-hover:text-white/20">
                0{index + 1}
              </span>
              <span className="mt-6 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-fuchsia-500">
                <step.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-white/60">{step.text}</p>
              <div className="mt-auto pt-6">
                <div className="flex items-center gap-2 border-t border-white/10 pt-5">
                  <CheckCircle2 className="size-4 shrink-0 text-violet-300" aria-hidden="true" />
                  <p className="text-sm font-medium text-white/80">
                    <span className="sr-only">Livrable : </span>
                    {step.deliverable}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
