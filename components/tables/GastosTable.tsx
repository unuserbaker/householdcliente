import { RefreshCw } from 'lucide-react';

const categoryColors: Record<string, string> = {
  'Alimentación': 'bg-emerald-50 text-emerald-700',
  'Vivienda': 'bg-blue-50 text-blue-700',
  'Transporte': 'bg-amber-50 text-amber-700',
  'Salud': 'bg-rose-50 text-rose-700',
  'Educación': 'bg-purple-50 text-purple-700',
  'Entretenimiento': 'bg-pink-50 text-pink-700',
  'Servicios': 'bg-cyan-50 text-cyan-700',
  'Ropa': 'bg-orange-50 text-orange-700',
};

const typeColors: Record<string, string> = {
  'Fijo': 'bg-slate-100 text-slate-600',
  'Variable': 'bg-indigo-50 text-indigo-600',
  'Extraordinario': 'bg-amber-50 text-amber-700',
};

function formatDate(dateStr: string) {
  if (!dateStr) return '—';
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

export function GastosTable({ gastos }: { gastos: any[] }) {
  if (!gastos.length) {
    return (
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-12 text-center text-slate-400 text-sm">
        No hay gastos registrados para este período
      </div>
    );
  }

  const total = gastos.reduce((sum, g) => sum + Number(g.monto), 0);

  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50">
            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide w-24">
              Fecha
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Descripción
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide w-36">
              Categoría
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide w-32">
              Tipo
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wide w-32">
              Monto
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {gastos.map((g) => {
            const catClass = categoryColors[g.categoria?.nombre] ?? 'bg-slate-50 text-slate-600';
            const tipoName = g.tipoGasto?.nombre ?? '';
            const tipoClass = typeColors[tipoName] ?? 'bg-slate-100 text-slate-600';
            return (
              <tr key={g.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 text-sm text-slate-500 tabular-nums whitespace-nowrap">
                  {formatDate(g.fecha)}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-medium text-slate-700">{g.descripcion}</span>
                    {g.esRecurrente && (
                      <span title="Recurrente">
                        <RefreshCw size={11} className="text-indigo-400 shrink-0" />
                      </span>
                    )}
                  </div>
                  {g.subcategoria?.nombre && (
                    <p className="text-xs text-slate-400 mt-0.5">{g.subcategoria.nombre}</p>
                  )}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${catClass}`}
                  >
                    {g.categoria?.nombre}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {tipoName && (
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${tipoClass}`}
                    >
                      {tipoName}
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-right">
                  <span className="text-sm font-semibold text-slate-800 tabular-nums">
                    ${Number(g.monto).toLocaleString('es-CO')}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="border-t-2 border-slate-100 bg-slate-50">
            <td colSpan={4} className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">
              {gastos.length} registros
            </td>
            <td className="px-4 py-3 text-right text-sm font-bold text-slate-800 tabular-nums">
              ${total.toLocaleString('es-CO')}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
