import { techIcons, techColors } from "@/lib/tech-icons";

export default function TechChip({ name }: { name: string }) {
  const key = name.trim().toLowerCase();
  const Icon = techIcons[key];
  const color = techColors[key];

  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-black/10 px-2.5 py-1 text-xs text-zinc-600 dark:border-white/10 dark:text-zinc-400">
      {Icon && <Icon size={12} style={{ color }} />}
      {name}
    </span>
  );
}
