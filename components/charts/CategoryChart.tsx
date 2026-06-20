'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = [
  '#6366f1', '#10b981', '#8b5cf6', '#06b6d4',
  '#f59e0b', '#f97316', '#ec4899', '#ef4444',
];

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.[0]) return null;
  return (
    <div className="bg-white shadow-lg rounded-lg px-3 py-2 border border-slate-100 text-sm">
      <p className="font-semibold text-slate-700">{payload[0].name}</p>
      <p className="text-slate-500">${Number(payload[0].value).toLocaleString('es-CO')}</p>
    </div>
  );
}

export function CategoryChart({ data }: { data: any[] }) {
  if (!data?.length) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex items-center justify-center text-slate-400 text-sm h-72">
        Sin datos
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
      <h2 className="font-semibold text-slate-700 mb-4">Distribución</h2>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="total"
              nameKey="categoria"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={90}
              paddingAngle={2}
            >
              {data.map((_: any, i: number) => (
                <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
        {data.map((item: any, i: number) => (
          <div key={item.categoria} className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: COLORS[i % COLORS.length] }}
            />
            <span className="text-xs text-slate-600 truncate">{item.categoria}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
