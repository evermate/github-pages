interface SkillItemProps {
  name: string;
  level: number; // 1-5
}

export function SkillItem({ name, level }: SkillItemProps) {
  const dots = Array.from({ length: 5 }, (_, i) => i < level);

  return (
    <div className="flex items-center justify-between gap-3 py-3 px-2 rounded hover:bg-gray-100/80 dark:hover:bg-gray-600/30 transition-colors">
      <span className="text-sm font-medium text-gray-900 dark:text-gray-100 flex-grow">
        {name}
      </span>
      <div className="flex gap-1 flex-shrink-0">
        {dots.map((filled, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              filled
                ? "bg-[#10B981] shadow-sm"
                : "bg-gray-300/60 dark:bg-gray-500/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
