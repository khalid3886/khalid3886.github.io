interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span
      className="
      inline-flex
      items-center
      rounded-full
      border
      border-blue-500/30
      bg-blue-500/10
      px-5
      py-2.5
      text-sm
      font-medium
      tracking-wide
      text-blue-400
      "
    >
      {children}
    </span>
  );
}