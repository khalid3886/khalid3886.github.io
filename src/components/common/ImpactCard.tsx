interface ImpactCardProps {
  value: string;
  label: string;
}

export default function ImpactCard({
  value,
  label,
}: ImpactCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
      <h3 className="text-4xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-3 text-zinc-400">
        {label}
      </p>
    </div>
  );
}