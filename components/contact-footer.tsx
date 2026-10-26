import { KyneticLogo } from "@/components/kynetic-logo"
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react"

export function ContactFooter() {
  return (
    <footer id="contact">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-highlight/30 blur-3xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <h2 className="text-balance font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                Un projet IA en tête ? Parlons-en autour d&apos;un premier audit.
              </h2>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed opacity-85">
                Les tarifs sont indicatifs et ajustés après échange selon la taille de votre structure, vos données
                et votre niveau d&apos;exigence.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@kynetic-solutions.ovh?subject=Demande%20de%20devis%20IA"
                className="group flex items-center justify-between rounded-2xl bg-background/10 px-5 py-4 ring-1 ring-primary-foreground/20 transition-colors hover:bg-background/20"
              >
                <span className="flex items-center gap-3">
                  <Mail className="size-5" aria-hidden="true" />
                  <span className="flex flex-col">
                    <span className="text-xs opacity-75">E-mail</span>
                    <span className="font-medium">contact@kynetic-solutions.ovh</span>
                  </span>
                </span>
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href="mailto:contact@kynetic-solutions.ovh?subject=Planifier%20un%20appel%20d%C3%A9couverte"
                className="group flex items-center justify-between rounded-2xl bg-background/10 px-5 py-4 ring-1 ring-primary-foreground/20 transition-colors hover:bg-background/20"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="size-5" aria-hidden="true" />
                  <span className="flex flex-col">
                    <span className="text-xs opacity-75">Visio · WhatsApp · Teams</span>
                    <span className="font-medium">Planifier un appel découverte</span>
                  </span>
                </span>
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
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
