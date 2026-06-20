import useSWR from "swr";
import { fetcher } from "@/app/api";
import { mockGastos } from "@/lib/mocks";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === 'true';

export function useGastos(mes?: string, categoriaId?: number) {
  const params = new URLSearchParams();
  if (mes) params.append("mes", mes);
  if (categoriaId) params.append("categoriaId", String(categoriaId));

  const result = useSWR(USE_MOCK ? null : `/gastos?${params.toString()}`, fetcher);

  if (USE_MOCK) {
    let filtered = [...mockGastos];
    if (mes) filtered = filtered.filter((g) => g.fecha.startsWith(mes));
    if (categoriaId) filtered = filtered.filter((g) => g.categoriaId === categoriaId);
    return { data: filtered, isLoading: false, error: null };
  }

  return result;
}
