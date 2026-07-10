import type { ReactNode } from "react";

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
}

export default function SkillCard({
  title,
  icon,
  skills,
}: SkillCardProps) {
  return (
    <div
      className="
         flex
    h-full
    flex-col
    rounded-3xl
    border
    border-zinc-800
    bg-zinc-900/40
    p-8
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-blue-500/20
    hover:shadow-xl
    hover:shadow-blue-500/5
  "
    >
      <div className="mb-6 flex items-center gap-3">

        <div className="text-blue-400">
          {icon}
        </div>

        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

      </div>

      <div className="flex flex-wrap gap-2">

        {skills.map((skill) => (
          <span
            key={skill}
            className="
              rounded-full
              border
              border-zinc-700
              bg-zinc-950
              px-3
              py-1
              text-[13px]
              text-zinc-300
             hover:-translate-y-1
hover:border-blue-500/20
hover:shadow-xl
hover:shadow-blue-500/5
transition-all
duration-300
            "
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}