'use client';

import { post } from "@/app/api";
import { useCatalogos } from "@/app/gastos/hook";
import { useState } from "react";

interface Tipo {
    id: number;
    nombre: string;
}

interface Categoria {
    id: number;
    nombre: string;
}

interface Subcategoria {
    id: number;
    nombre: string;
}

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

    if (loading) return <p>Cargando catálogos</p>;

    const subcatsFiltradas = subcategorias.filter(
        (s: any) => s.categoria.id === Number(form.categoriaId),
    );

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        // POST /gastos

        await post('/gastos', {
            ...form,
            monto: Number(form.monto),
            tipoGastoId: Number(form.tipoGastoId),
            categoriaId: Number(form.categoriaId),
            subcategoriaId: form.subcategoriaId ? Number(form.subcategoriaId) : null,
        });

        alert('✔️ Gasto guardado');

        setForm({
            ...form,
            descripcion: '',
            monto: ''
        })
    }

    return (
        <form onSubmit={onSubmit} className="bg-white p-6 rounded-xl shadow space-y-4 max-w-md">
            <h2 className="text-xl font-semibold">Nuevo gasto</h2>

            <input
                className="w-full border p-2 rounded"
                placeholder="Descripción"
                value={form.descripcion}
                onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                required
            />
            <input
                type="number"
                placeholder="Monto"
                value={form.monto}
                onChange={(e) => setForm({ ...form, monto: e.target.value })}
            />

            <input
                type="date"
                className="w-full border p-2 rounded"
                value={form.fecha}
                onChange={(e) => setForm({ ...form, fecha: e.target.value })}
            />

            <select
                className="w-full border p-2 rounded"
                value={form.tipoGastoId}
                onChange={(e) => setForm({ ...form, tipoGastoId: e.target.value })}
                required
            >
                <option value="">Tipo de gasto</option>
                {tipos.map((t: Tipo) => (
                    <option key={t.id} value={t.id}>
                        {t.nombre}
                    </option>
                ))}
            </select>

            <select
                className="w-full border p-2 rounded"
                value={form.categoriaId}
                onChange={(e) => setForm({ ...form, categoriaId: e.target.value })}
                required
            >
                <option value="">Categoria</option>
                {categorias.map((c: Categoria) => (
                    <option key={c.id} value={c.id}>
                        {c.nombre}
                    </option>
                ))}
            </select>

            <select
                className="w-full border p-2 rounded"
                value={form.subcategoriaId}
                onChange={(e) => setForm({ ...form, subcategoriaId: e.target.value })}
                required
            >
                <option value="">Subcategoria</option>
                {subcatsFiltradas.map((s: Subcategoria) => (
                    <option key={s.id} value={s.id}>
                        {s.nombre}
                    </option>
                ))}
            </select>

            <label className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={form.esRecurrente}
                    onChange={(e) => setForm({ ...form, esRecurrente: e.target.checked })}
                />
                Gasto Recurrente
            </label>


            <button className="bg-black text-white px-4 py-2 rounded">
                Guardar
            </button>
        </form>
    );
}
