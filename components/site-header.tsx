"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { KyneticLogo } from "@/components/kynetic-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#demarche", label: "Démarche" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/nous-rejoindre", label: "Nous rejoindre" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const solid = scrolled || menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > (isHome ? window.innerHeight * 0.75 : 320))
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isHome])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        solid
          ? "border-b bg-background/90 text-foreground backdrop-blur-xl"
          : "border-b border-transparent bg-transparent text-white",
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Kynetic Solutions, accueil">
          <KyneticLogo />
          <span className="flex flex-col gap-1 leading-none">
            <span className="text-sm font-semibold tracking-tight">Kynetic Solutions</span>
            <span className={cn("hidden text-[11px] sm:block", solid ? "text-muted-foreground" : "text-white/60")}>
              {"L'IA qui met votre entreprise en mouvement"}
            </span>
          </span>
        </Link>

        <nav
          aria-label="Navigation principale"
          className={cn(
            "hidden items-center gap-6 text-sm xl:flex",
            solid ? "text-muted-foreground" : "text-white/70",
          )}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={cn(
                "whitespace-nowrap transition-colors",
                solid ? "hover:text-foreground" : "hover:text-white",
                pathname === link.href && "font-medium text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className={cn(
              "hidden h-9 items-center rounded-full px-4 text-sm font-medium transition-opacity hover:opacity-90 sm:inline-flex",
              solid ? "bg-primary text-primary-foreground" : "bg-white text-[#140f2e]",
            )}
          >
            Demander un devis
          </a>
          <ThemeToggle
            className={solid ? undefined : "border-white/20 bg-white/10 text-white hover:bg-white/20"}
          />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={cn(
              "flex size-9 items-center justify-center rounded-full border xl:hidden",
              solid ? "hover:bg-muted" : "border-white/20 bg-white/10 text-white hover:bg-white/20",
            )}
          >
            {menuOpen ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
            <span className="sr-only">{menuOpen ? "Fermer le menu" : "Ouvrir le menu"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Navigation mobile" className="border-t xl:hidden">
          <ul className="container-wide flex flex-col py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-muted"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
