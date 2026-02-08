import useSWR from "swr";
import { fetcher } from "../api";

export function useCatalogos() {
  const tipos = useSWR("/catalogos/tipos-gasto", fetcher);
  const categorias = useSWR("/catalogos/categorias", fetcher);
  const subcategorias = useSWR("/catalogos/subcategorias", fetcher);

  return {
    tipos: tipos.data ?? [],
    categorias: categorias.data ?? [],
    subcategorias: subcategorias.data ?? [],
    loading: tipos.isLoading || categorias.isLoading || subcategorias.isLoading,
  };
}
