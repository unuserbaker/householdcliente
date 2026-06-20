'use client';

import { post } from "@/app/api";
import { useCatalogos } from "@/app/gastos/hook";
import { useState } from "react";
import { PlusCircle, CheckCircle2 } from "lucide-react";

interface Tipo { id: number; nombre: string; }
interface Categoria { id: number; nombre: string; }
interface Subcategoria { id: number; nombre: string; }

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === 'true';

const inputCls =
  "w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent placeholder:text-slate-400";
const labelCls = "block text-xs font-medium text-slate-500 mb-1";

export function GastoForm() {
  const { tipos = [], categorias = [], subcategorias = [], loading } = useCatalogos();

  const [form, setForm] = useState({
    descripcion: '',
    monto: '',
    fecha: new Date().toISOString().slice(0, 10),
    tipoGastoId: '',
    categoriaId: '',
    subcategoriaId: '',
    esRecurrente: false,
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  if (loading) {
    return (
      <div className="animate-pulse space-y-3">
        <div className="h-5 bg-slate-200 rounded w-32" />
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-10 bg-slate-100 rounded-lg" />
        ))}
      </div>
    );
  }

  const subcatsFiltradas = (subcategorias as any[]).filter(
    (s: any) => s.categoria.id === Number(form.categoriaId),
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    if (!USE_MOCK) {
      await post('/gastos', {
        ...form,
        monto: Number(form.monto),
        tipoGastoId: Number(form.tipoGastoId),
        categoriaId: Number(form.categoriaId),
        subcategoriaId: form.subcategoriaId ? Number(form.subcategoriaId) : null,
      });
    }

    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    setForm({ ...form, descripcion: '', monto: '' });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <h2 className="text-base font-semibold text-slate-800 flex items-center gap-2">
          <PlusCircle size={18} className="text-indigo-500" />
          Nuevo gasto
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">Registra un gasto del hogar</p>
      </div>

      <div>
        <label className={labelCls}>Descripción *</label>
        <input
          className={inputCls}
          placeholder="Ej: Mercado semanal"
          value={form.descripcion}
          onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>Monto *</label>
          <input
            type="number"
            className={inputCls}
            placeholder="0"
            value={form.monto}
            onChange={(e) => setForm({ ...form, monto: e.target.value })}
            required
          />
        </div>
        <div>
          <label className={labelCls}>Fecha *</label>
          <input
            type="date"
            className={inputCls}
            value={form.fecha}
            onChange={(e) => setForm({ ...form, fecha: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className={labelCls}>Tipo de gasto *</label>
        <select
          className={inputCls}
          value={form.tipoGastoId}
          onChange={(e) => setForm({ ...form, tipoGastoId: e.target.value })}
          required
        >
          <option value="">Seleccionar tipo</option>
          {(tipos as Tipo[]).map((t) => (
            <option key={t.id} value={t.id}>{t.nombre}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelCls}>Categoría *</label>
        <select
          className={inputCls}
          value={form.categoriaId}
          onChange={(e) => setForm({ ...form, categoriaId: e.target.value, subcategoriaId: '' })}
          required
        >
          <option value="">Seleccionar categoría</option>
          {(categorias as Categoria[]).map((c) => (
            <option key={c.id} value={c.id}>{c.nombre}</option>
          ))}
        </select>
      </div>

      {form.categoriaId && (
        <div>
          <label className={labelCls}>Subcategoría</label>
          <select
            className={inputCls}
            value={form.subcategoriaId}
            onChange={(e) => setForm({ ...form, subcategoriaId: e.target.value })}
          >
            <option value="">Sin subcategoría</option>
            {subcatsFiltradas.map((s: Subcategoria) => (
              <option key={s.id} value={s.id}>{s.nombre}</option>
            ))}
          </select>
        </div>
      )}

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border-slate-300 accent-indigo-600"
          checked={form.esRecurrente}
          onChange={(e) => setForm({ ...form, esRecurrente: e.target.checked })}
        />
        <span className="text-sm text-slate-600">Gasto recurrente</span>
      </label>

      <button
        type="submit"
        disabled={saving}
        className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium py-2.5 px-4 rounded-lg text-sm transition-colors"
      >
        {saving ? 'Guardando...' : 'Guardar gasto'}
      </button>

      {saved && (
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-lg px-3 py-2">
          <CheckCircle2 size={15} />
          Gasto registrado correctamente
        </div>
      )}
    </form>
  );
}
