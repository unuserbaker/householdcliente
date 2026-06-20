'use client';

import { useState } from 'react';
import { useResumenMensual } from '@/hooks/useResumenMensual';
import { CategoryChart } from '@/components/charts/CategoryChart';
import { SummaryCard } from '@/components/cards/SummaryCard';
import { TrendingDown, Tag, BarChart3 } from 'lucide-react';

interface ResumenItem {
  categoria: string;
  total: number;
}

const CATEGORY_COLORS: Record<string, string> = {
  'Vivienda': '#6366f1',
  'Alimentación': '#10b981',
  'Educación': '#8b5cf6',
  'Servicios': '#06b6d4',
  'Ropa': '#f97316',
  'Transporte': '#f59e0b',
  'Entretenimiento': '#ec4899',
  'Salud': '#ef4444',
};

export default function Dashboard() {
  const [mes, setMes] = useState(new Date().toISOString().slice(0, 7));
  const { data, isLoading } = useResumenMensual(mes);

  const mesLabel = new Date(mes + '-02').toLocaleDateString('es-CO', {
    month: 'long',
    year: 'numeric',
  });

  if (isLoading) {
    return (
      <div className="p-6 space-y-4 animate-pulse">
        <div className="h-8 bg-slate-200 rounded w-48" />
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => <div key={i} className="h-24 bg-slate-200 rounded-xl" />)}
        </div>
      </div>
    );
  }

  const resumen = (data as ResumenItem[]) ?? [];
  const total = resumen.reduce((sum, item) => sum + item.total, 0);
  const sorted = [...resumen].sort((a, b) => b.total - a.total);
  const topCat = sorted[0] ?? { categoria: '—', total: 0 };
  const topPct = total > 0 ? Math.round((topCat.total / total) * 100) : 0;

  return (
    <div className="p-6 space-y-6 max-w-5xl">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 capitalize">{mesLabel}</h1>
          <p className="text-slate-500 text-sm mt-0.5">Resumen de gastos del hogar</p>
        </div>
        <input
          type="month"
          value={mes}
          onChange={(e) => setMes(e.target.value)}
          className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-4">
        <SummaryCard
          title="Total gastado"
          value={`$${total.toLocaleString('es-CO')}`}
          subtitle={`${resumen.length} categorías activas`}
          icon={<TrendingDown size={18} />}
          accent="bg-indigo-500"
        />
        <SummaryCard
          title="Mayor categoría"
          value={topCat.categoria}
          subtitle={`$${topCat.total.toLocaleString('es-CO')} · ${topPct}% del total`}
          icon={<Tag size={18} />}
          accent="bg-emerald-500"
        />
        <SummaryCard
          title="Categorías con gasto"
          value={String(resumen.length)}
          subtitle="Este mes"
          icon={<BarChart3 size={18} />}
          accent="bg-amber-500"
        />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2">
          <CategoryChart data={resumen} />
        </div>

        {/* Category breakdown bars */}
        <div className="col-span-3 bg-white rounded-xl shadow-sm border border-slate-100 p-5">
          <h2 className="font-semibold text-slate-700 mb-4">Desglose por categoría</h2>
          {sorted.length === 0 ? (
            <p className="text-sm text-slate-400">Sin datos para este mes</p>
          ) : (
            <div className="space-y-4">
              {sorted.map((item) => {
                const pct = total > 0 ? (item.total / total) * 100 : 0;
                const color = CATEGORY_COLORS[item.categoria] ?? '#6366f1';
                return (
                  <div key={item.categoria}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700">{item.categoria}</span>
                      <span className="text-sm text-slate-500 tabular-nums">
                        ${item.total.toLocaleString('es-CO')}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-2 rounded-full transition-all duration-500"
                        style={{ width: `${pct}%`, backgroundColor: color }}
                      />
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{pct.toFixed(1)}%</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
