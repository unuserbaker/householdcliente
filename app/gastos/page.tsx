'use client';
import { useState } from "react";
import { GastoForm } from "@/components/forms/GastoFrom";
import { GastoFilters } from "@/components/forms/GastoFilters";
import { GastosTable } from "@/components/tables/GastosTable";
import { useGastos } from "@/hooks/useGastos";

export default function GastosPage() {
  const [filters, setFilters] = useState({
    mes: new Date().toISOString().slice(0, 7),
    categoriaId: undefined as number | undefined,
  });

  const { data, isLoading } = useGastos(filters.mes, filters.categoriaId);
  const gastos = Array.isArray(data) ? data : [];

  return (
    <div className="flex gap-0 h-full">
      {/* Left: form panel */}
      <div className="w-72 shrink-0 border-r border-slate-200 bg-white p-6 overflow-y-auto">
        <GastoForm />
      </div>

      {/* Right: filters + table */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
          <h1 className="text-base font-semibold text-slate-800">Gastos del mes</h1>
          <GastoFilters
            {...filters}
            onChange={(change) => setFilters({ ...filters, ...change })}
          />
        </div>

        {/* Table area */}
        <div className="flex-1 overflow-y-auto p-6">
          {isLoading ? (
            <div className="animate-pulse space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-12 bg-slate-100 rounded-lg" />
              ))}
            </div>
          ) : (
            <GastosTable gastos={gastos} />
          )}
        </div>
      </div>
    </div>
  );
}
