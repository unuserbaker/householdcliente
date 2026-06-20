import useSWR from "swr";
import { fetcher } from "../api";
import { mockCatalogos } from "@/lib/mocks";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === 'true';

export function useCatalogos() {
  const tipos = useSWR(USE_MOCK ? null : "/catalogos/tipos-gasto", fetcher);
  const categorias = useSWR(USE_MOCK ? null : "/catalogos/categorias", fetcher);
  const subcategorias = useSWR(USE_MOCK ? null : "/catalogos/subcategorias", fetcher);

  if (USE_MOCK) {
    return { ...mockCatalogos, loading: false };
  }

  return {
    tipos: tipos.data ?? [],
    categorias: categorias.data ?? [],
    subcategorias: subcategorias.data ?? [],
    loading: tipos.isLoading || categorias.isLoading || subcategorias.isLoading,
  };
}
