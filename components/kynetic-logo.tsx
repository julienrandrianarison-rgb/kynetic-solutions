import { useId } from "react"
import { cn } from "@/lib/utils"

export function KyneticLogo({ className }: { className?: string }) {
  const id = useId()
  const outerId = `${id}-outer`
  const innerId = `${id}-inner`

  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-[28%] bg-card shadow-sm ring-1 ring-border",
        className,
      )}
    >
      <svg viewBox="0 0 256 256" className="size-[62%]">
        <defs>
          <linearGradient id={outerId} x1="0" y1="0" x2="0" y2="256" gradientUnits="userSpaceOnUse">
            <stop offset="0" style={{ stopColor: "var(--highlight)" }} />
            <stop offset="1" style={{ stopColor: "var(--primary)" }} />
          </linearGradient>
          <linearGradient id={innerId} x1="75" y1="195" x2="225" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" style={{ stopColor: "var(--primary)" }} />
            <stop offset="1" style={{ stopColor: "var(--highlight)" }} />
          </linearGradient>
        </defs>
        <path d="M0 0H128L98 35H42V225L0 256Z" style={{ fill: `url(#${outerId})` }} />
        <path d="M0 256L42 225H130V256Z" style={{ fill: "var(--secondary-foreground)" }} />
        <path d="M75 90L165 0H225V45L110 160V195H75Z" style={{ fill: `url(#${innerId})` }} />
        <path d="M125 135H160L190 170V220L160 185H125Z" style={{ fill: "var(--secondary-foreground)" }} />
        <path d="M170 256L220 215V170H256V215L215 256Z" style={{ fill: "var(--highlight)" }} />
      </svg>
    </span>
  )
}
