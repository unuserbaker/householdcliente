'use client';

import { useCatalogos } from "@/app/gastos/hook";

interface Categoria {
  id: number;
  nombre: string;
}

interface GastoFiltersProps {
  mes: string;
  categoriaId?: number;
  onChange: (filters: { mes?: string; categoriaId?: number }) => void;
}

const inputCls =
  "border border-slate-200 rounded-lg px-3 py-1.5 text-sm text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400";

export function GastoFilters({ mes, categoriaId, onChange }: GastoFiltersProps) {
  const { categorias = [] } = useCatalogos() as {
    categorias: Categoria[];
    tipos: unknown;
    subcategorias: unknown;
    loading: boolean;
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="month"
        value={mes}
        onChange={(e) => onChange({ mes: e.target.value })}
        className={inputCls}
      />
      <select
        value={categoriaId ?? ''}
        onChange={(e) => onChange({ categoriaId: Number(e.target.value) || undefined })}
        className={inputCls}
      >
        <option value="">Todas las categorías</option>
        {(categorias as Categoria[]).map((c) => (
          <option key={c.id} value={c.id}>{c.nombre}</option>
        ))}
      </select>
    </div>
  );
}
