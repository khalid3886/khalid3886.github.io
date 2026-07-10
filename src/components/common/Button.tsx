import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  target?: string;
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
  icon,
  target,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300";

  const styles = {
    primary:
      "bg-blue-600 text-white hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/25",

    secondary:
      "border border-zinc-700 bg-transparent text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900 hover:-translate-y-0.5",
  };

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${base} ${styles[variant]}`}
    >
      {icon}

      {children}
    </a>
  );
}
