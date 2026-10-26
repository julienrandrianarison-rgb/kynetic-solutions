"use client"

import { useEffect, useState } from "react"
import { KyneticLogo } from "@/components/kynetic-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const links = [
  { href: "#services", label: "Services" },
  { href: "#demarche", label: "Démarche" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.75)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled
          ? "border-b bg-background/80 text-foreground backdrop-blur-xl"
          : "border-b border-transparent bg-transparent text-white",
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2.5" aria-label="Kynetic Solutions, accueil">
          <KyneticLogo />
          <span className="flex flex-col gap-1 leading-none">
            <span className="text-sm font-semibold tracking-tight">Kynetic Solutions</span>
            <span className={cn("text-[11px]", scrolled ? "text-muted-foreground" : "text-white/60")}>
              {"L'IA qui met votre entreprise en mouvement"}
            </span>
          </span>
        </a>

        <nav
          aria-label="Navigation principale"
          className={cn(
            "hidden items-center gap-8 text-sm md:flex",
            scrolled ? "text-muted-foreground" : "text-white/70",
          )}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn("transition-colors", scrolled ? "hover:text-foreground" : "hover:text-white")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className={cn(
              "hidden h-9 items-center rounded-full px-4 text-sm font-medium transition-opacity hover:opacity-90 sm:inline-flex",
              scrolled ? "bg-primary text-primary-foreground" : "bg-white text-[#140f2e]",
            )}
          >
            Demander un devis
          </a>
          <ThemeToggle
            className={scrolled ? undefined : "border-white/20 bg-white/10 text-white hover:bg-white/20"}
          />
        </div>
      </div>
    </header>
  )
}
