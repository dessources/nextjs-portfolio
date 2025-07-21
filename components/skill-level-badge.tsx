import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Zap } from "lucide-react";

export type SkillLevel = "beginner" | "advanced" | "expert";

interface SkillLevelBadgeProps {
  level: SkillLevel;
  className?: string;
}

export function SkillLevelBadge({ level, className }: SkillLevelBadgeProps) {
  const configs = {
    beginner: {
      label: "Beginner",
      icon: TrendingUp,
      className: "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800",
    },
    advanced: {
      label: "Advanced", 
      icon: Star,
      className: "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
    },
    expert: {
      label: "Expert",
      icon: Zap,
      className: "bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800",
    },
  };

  const config = configs[level];
  const Icon = config.icon;

  return (
    <Badge 
      variant="outline" 
      className={`${config.className} ${className} flex items-center gap-1 font-medium`}
    >
      <Icon className="h-3 w-3" />
      {config.label}
    </Badge>
  );
}