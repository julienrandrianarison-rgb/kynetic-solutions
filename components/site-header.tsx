import { KyneticLogo } from "@/components/kynetic-logo"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5" aria-label="Kynetic Solutions, accueil">
          <KyneticLogo />
          <span className="flex flex-col gap-1 leading-none">
            <span className="text-sm font-semibold tracking-tight">Kynetic Solutions</span>
            <span className="text-[11px] text-muted-foreground">{"L'IA qui met votre entreprise en mouvement"}</span>
          </span>
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#catalogue" className="transition-colors hover:text-foreground">Catalogue</a>
          <a href="#demarche" className="transition-colors hover:text-foreground">Démarche</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden h-9 items-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Demander un devis
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
