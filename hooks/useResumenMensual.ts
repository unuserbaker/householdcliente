import useSWR from 'swr';
import { fetcher } from '@/app/api';
import { mockResumenMensual } from '@/lib/mocks';

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === 'true';

export function useResumenMensual(mes: string) {
  const result = useSWR(
    USE_MOCK ? null : `/gastos/resumen/mensual?mes=${mes}`,
    fetcher,
  );

  if (USE_MOCK) {
    return { data: mockResumenMensual, isLoading: false, error: null };
  }

  return result;
}
