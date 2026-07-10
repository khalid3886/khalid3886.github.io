interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <h2 className="text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}