'use client';

import { useResumenMensual } from '@/hooks/useResumenMensual';
import { SummaryCard } from '@/components/cards/SummaryCard';
import { CategoryChart } from '@/components/charts/CategoryChart';

interface ResumenItem {
  categoria: string;
  total: number;
}

export default function Dashboard() {
  const mesActual = new Date().toISOString().slice(0, 7);
  const { data, isLoading } = useResumenMensual(mesActual);

  if (isLoading) return <p>Cargando...</p>;

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Gastos {mesActual}</h1>

      <div className="grid grid-cols-3 gap-4">
        {(data as ResumenItem[])?.map((item: ResumenItem) => (
          <SummaryCard
            key={item.categoria}
            title={item.categoria}
            value={item.total}
          />
        ))}
      </div>

      <CategoryChart data={data as ResumenItem[]} />
    </main>
  );
}
