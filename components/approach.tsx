import { Compass, FlaskConical, Hammer, ShieldCheck } from "lucide-react"

const steps = [
  {
    icon: Compass,
    title: "Diagnostiquer",
    text: "Audit, atelier et feuille de route pour cibler les cas d'usage qui rapportent vraiment.",
    ref: "A1 – A4",
  },
  {
    icon: FlaskConical,
    title: "Prouver",
    text: "Une preuve de concept sur vos vraies données, avec mesure de la qualité et du coût.",
    ref: "A5",
  },
  {
    icon: Hammer,
    title: "Réaliser",
    text: "Automatisations, agents, données et applications livrés et documentés.",
    ref: "B · C · D · E",
  },
  {
    icon: ShieldCheck,
    title: "Exploiter",
    text: "Maintenance, suivi des coûts et de la qualité, formation de vos équipes.",
    ref: "G · H",
  },
]

export function Approach() {
  return (
    <section id="demarche" aria-labelledby="demarche-title" className="border-y bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Notre démarche</p>
          <h2 id="demarche-title" className="mt-2 text-balance font-serif text-4xl tracking-tight sm:text-5xl">
            Commencer petit, mesurer, puis passer à l&apos;échelle.
          </h2>
        </div>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              <p className="mt-auto pt-5 font-mono text-xs text-primary">{step.ref}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
