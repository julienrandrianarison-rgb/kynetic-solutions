import { KyneticLogo } from "@/components/kynetic-logo"
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react"

const contacts = [
  {
    href: "mailto:contact@kynetic-solutions.ovh?subject=Demande%20de%20devis%20IA",
    icon: Mail,
    label: "E-mail",
    value: "contact@kynetic-solutions.ovh",
  },
  {
    href: "mailto:contact@kynetic-solutions.ovh?subject=Planifier%20un%20appel%20d%C3%A9couverte",
    icon: MessageCircle,
    label: "Visio · WhatsApp · Teams",
    value: "Planifier un appel découverte",
  },
]

export function ContactFooter() {
  return (
    <footer id="contact" className="relative isolate overflow-hidden bg-gradient-to-br from-[#1d1a6b] via-[#3b1f8f] to-[#7a1fa2] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 -z-10 size-[32rem] rounded-full bg-fuchsia-400/30 blur-[120px]"
      />

      <div className="container-wide flex min-h-[85svh] flex-col justify-center py-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">Contact</p>
            <h2 className="mt-4 text-balance font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Un projet IA en tête ? Parlons-en autour d&apos;un premier audit.
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
              Les tarifs sont indicatifs et ajustés après échange selon la taille de votre structure, vos données et
              votre niveau d&apos;exigence.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {contacts.map((contact) => (
              <a
                key={contact.value}
                href={contact.href}
                className="group flex items-center justify-between rounded-3xl bg-white/10 px-6 py-5 ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-white hover:text-[#140f2e]"
              >
                <span className="flex items-center gap-4">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-white/15 group-hover:bg-[#140f2e]/10">
                    <contact.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs opacity-70">{contact.label}</span>
                    <span className="text-lg font-medium">{contact.value}</span>
                  </span>
                </span>
                <ArrowUpRight
                  className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-wide flex flex-col gap-2 py-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2.5">
            <KyneticLogo className="size-6" />
            {"© 2026 Kynetic Solutions · kynetic-solutions.ovh"}
          </p>
          <p>Tarifs indicatifs hors taxes, exprimés en euros (€).</p>
        </div>
      </div>
    </footer>
  )
}
