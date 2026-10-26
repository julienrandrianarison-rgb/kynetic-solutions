import {
  Bot,
  Code2,
  Compass,
  Database,
  GraduationCap,
  PenTool,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react"

export const categoryIcons: Record<string, LucideIcon> = {
  conseil: Compass,
  automatisation: Workflow,
  agents: Bot,
  donnees: Database,
  developpement: Code2,
  contenu: PenTool,
  formation: GraduationCap,
  exploitation: ShieldCheck,
}

export const getCategoryIcon = (id: string): LucideIcon => categoryIcons[id] ?? Compass
