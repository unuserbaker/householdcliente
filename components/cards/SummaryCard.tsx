interface SummaryCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: React.ReactNode;
  accent?: string;
}

export function SummaryCard({
  title,
  value,
  subtitle,
  icon,
  accent = 'bg-indigo-500',
}: SummaryCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex items-start gap-4">
      {icon && (
        <div
          className={`${accent} w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-white`}
        >
          {icon}
        </div>
      )}
      <div className="min-w-0">
        <p className="text-sm text-slate-500 font-medium">{title}</p>
        <p className="text-2xl font-bold text-slate-800 mt-0.5 truncate">{value}</p>
        {subtitle && <p className="text-xs text-slate-400 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}
