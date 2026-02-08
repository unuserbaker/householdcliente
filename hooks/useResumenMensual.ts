import useSWR from 'swr';
import { fetcher } from '@/app/api';

export function useResumenMensual(mes: string) {
  return useSWR(
    `/gastos/resumen/mensual?mes=${mes}`,
    fetcher,
  );
}
