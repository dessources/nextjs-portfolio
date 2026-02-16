import {
  Code2,
  Database,
  Server,
  Monitor,
  Wrench,
  Cog,
  Shield,
  Cloud,
  Network,
  HardDrive,
  Award,
  BookOpen,
  Target,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

const iconRegistry = {
  code2: Code2,
  database: Database,
  server: Server,
  monitor: Monitor,
  wrench: Wrench,
  cog: Cog,
  shield: Shield,
  cloud: Cloud,
  network: Network,
  hardDrive: HardDrive,
  award: Award,
  bookOpen: BookOpen,
  target: Target,
} as const;

export type IconName = keyof typeof iconRegistry;

export function DynamicIcon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Icon = iconRegistry[name as IconName] as
    | ComponentType<LucideProps>
    | undefined;

  if (!Icon) return null;

  return <Icon {...props} />;
}
