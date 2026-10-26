import { useId } from "react"
import { cn } from "@/lib/utils"

export function KyneticLogo({ className }: { className?: string }) {
  const gradientId = useId()

  return (
    <svg viewBox="0 0 40 40" className={cn("size-9 shrink-0", className)} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="8" y1="32" x2="32" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="#140f2e" />
      <g fill={`url(#${gradientId})`}>
        <rect x="10" y="9" width="5" height="22" rx="1.2" />
        <path d="M15 22.6 25.2 12.4 27.8 15 17.6 25.2Z" />
        <path d="M21.5 9.5H31V19Z" />
        <path d="M19.4 21.2 22.6 18 31 28.4 28.6 31H27.4Z" />
      </g>
    </svg>
  )
}
