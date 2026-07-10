import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/40
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-blue-500/30
        hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </div>
  );
}
