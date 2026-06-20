export const mockTipos = [
  { id: 1, nombre: 'Fijo' },
  { id: 2, nombre: 'Variable' },
  { id: 3, nombre: 'Extraordinario' },
];

export const mockCategorias = [
  { id: 1, nombre: 'Alimentación' },
  { id: 2, nombre: 'Vivienda' },
  { id: 3, nombre: 'Transporte' },
  { id: 4, nombre: 'Salud' },
  { id: 5, nombre: 'Educación' },
  { id: 6, nombre: 'Entretenimiento' },
  { id: 7, nombre: 'Servicios' },
  { id: 8, nombre: 'Ropa' },
];

export const mockSubcategorias = [
  { id: 1, nombre: 'Mercado', categoria: { id: 1, nombre: 'Alimentación' } },
  { id: 2, nombre: 'Restaurante', categoria: { id: 1, nombre: 'Alimentación' } },
  { id: 3, nombre: 'Domicilios', categoria: { id: 1, nombre: 'Alimentación' } },
  { id: 4, nombre: 'Arriendo', categoria: { id: 2, nombre: 'Vivienda' } },
  { id: 5, nombre: 'Administración', categoria: { id: 2, nombre: 'Vivienda' } },
  { id: 6, nombre: 'Mantenimiento', categoria: { id: 2, nombre: 'Vivienda' } },
  { id: 7, nombre: 'Gasolina', categoria: { id: 3, nombre: 'Transporte' } },
  { id: 8, nombre: 'Taxi / Uber', categoria: { id: 3, nombre: 'Transporte' } },
  { id: 9, nombre: 'SITP / Metro', categoria: { id: 3, nombre: 'Transporte' } },
  { id: 10, nombre: 'Médico', categoria: { id: 4, nombre: 'Salud' } },
  { id: 11, nombre: 'Medicamentos', categoria: { id: 4, nombre: 'Salud' } },
  { id: 12, nombre: 'Colegio / Universidad', categoria: { id: 5, nombre: 'Educación' } },
  { id: 13, nombre: 'Útiles / Libros', categoria: { id: 5, nombre: 'Educación' } },
  { id: 14, nombre: 'Streaming', categoria: { id: 6, nombre: 'Entretenimiento' } },
  { id: 15, nombre: 'Salidas / Ocio', categoria: { id: 6, nombre: 'Entretenimiento' } },
  { id: 16, nombre: 'Luz', categoria: { id: 7, nombre: 'Servicios' } },
  { id: 17, nombre: 'Agua', categoria: { id: 7, nombre: 'Servicios' } },
  { id: 18, nombre: 'Internet / Telefonía', categoria: { id: 7, nombre: 'Servicios' } },
  { id: 19, nombre: 'Ropa / Calzado', categoria: { id: 8, nombre: 'Ropa' } },
];

export const mockGastos = [
  {
    id: 1, descripcion: 'Arriendo Junio', monto: 1500000, fecha: '2026-06-01', esRecurrente: true,
    tipoGastoId: 1, categoriaId: 2, subcategoriaId: 4,
    categoria: { id: 2, nombre: 'Vivienda' }, subcategoria: { id: 4, nombre: 'Arriendo' },
    tipoGasto: { id: 1, nombre: 'Fijo' },
  },
  {
    id: 2, descripcion: 'Administración edificio', monto: 120000, fecha: '2026-06-01', esRecurrente: true,
    tipoGastoId: 1, categoriaId: 2, subcategoriaId: 5,
    categoria: { id: 2, nombre: 'Vivienda' }, subcategoria: { id: 5, nombre: 'Administración' },
    tipoGasto: { id: 1, nombre: 'Fijo' },
  },
  {
    id: 3, descripcion: 'Mercado semanal', monto: 180000, fecha: '2026-06-02', esRecurrente: false,
    tipoGastoId: 2, categoriaId: 1, subcategoriaId: 1,
    categoria: { id: 1, nombre: 'Alimentación' }, subcategoria: { id: 1, nombre: 'Mercado' },
    tipoGasto: { id: 2, nombre: 'Variable' },
  },
  {
    id: 4, descripcion: 'Servicio de luz', monto: 85000, fecha: '2026-06-03', esRecurrente: true,
    tipoGastoId: 1, categoriaId: 7, subcategoriaId: 16,
    categoria: { id: 7, nombre: 'Servicios' }, subcategoria: { id: 16, nombre: 'Luz' },
    tipoGasto: { id: 1, nombre: 'Fijo' },
  },
  {
    id: 5, descripcion: 'Netflix', monto: 21900, fecha: '2026-06-03', esRecurrente: true,
    tipoGastoId: 1, categoriaId: 6, subcategoriaId: 14,
    categoria: { id: 6, nombre: 'Entretenimiento' }, subcategoria: { id: 14, nombre: 'Streaming' },
    tipoGasto: { id: 1, nombre: 'Fijo' },
  },
  {
    id: 6, descripcion: 'Internet hogar', monto: 65000, fecha: '2026-06-03', esRecurrente: true,
    tipoGastoId: 1, categoriaId: 7, subcategoriaId: 18,
    categoria: { id: 7, nombre: 'Servicios' }, subcategoria: { id: 18, nombre: 'Internet / Telefonía' },
    tipoGasto: { id: 1, nombre: 'Fijo' },
  },
  {
    id: 7, descripcion: 'Gasolina carro', monto: 95000, fecha: '2026-06-05', esRecurrente: false,
    tipoGastoId: 2, categoriaId: 3, subcategoriaId: 7,
    categoria: { id: 3, nombre: 'Transporte' }, subcategoria: { id: 7, nombre: 'Gasolina' },
    tipoGasto: { id: 2, nombre: 'Variable' },
  },
  {
    id: 8, descripcion: 'Cita médica general', monto: 35000, fecha: '2026-06-06', esRecurrente: false,
    tipoGastoId: 2, categoriaId: 4, subcategoriaId: 10,
    categoria: { id: 4, nombre: 'Salud' }, subcategoria: { id: 10, nombre: 'Médico' },
    tipoGasto: { id: 2, nombre: 'Variable' },
  },
  {
    id: 9, descripcion: 'Mercado semanal', monto: 165000, fecha: '2026-06-09', esRecurrente: false,
    tipoGastoId: 2, categoriaId: 1, subcategoriaId: 1,
    categoria: { id: 1, nombre: 'Alimentación' }, subcategoria: { id: 1, nombre: 'Mercado' },
    tipoGasto: { id: 2, nombre: 'Variable' },
  },
  {
    id: 10, descripcion: 'Almuerzo restaurante', monto: 28000, fecha: '2026-06-10', esRecurrente: false,
    tipoGastoId: 2, categoriaId: 1, subcategoriaId: 2,
    categoria: { id: 1, nombre: 'Alimentación' }, subcategoria: { id: 2, nombre: 'Restaurante' },
    tipoGasto: { id: 2, nombre: 'Variable' },
  },
  {
    id: 11, descripcion: 'Taxi aeropuerto', monto: 45000, fecha: '2026-06-11', esRecurrente: false,
    tipoGastoId: 2, categoriaId: 3, subcategoriaId: 8,
    categoria: { id: 3, nombre: 'Transporte' }, subcategoria: { id: 8, nombre: 'Taxi / Uber' },
    tipoGasto: { id: 2, nombre: 'Variable' },
  },
  {
    id: 12, descripcion: 'Mensualidad colegio', monto: 320000, fecha: '2026-06-12', esRecurrente: true,
    tipoGastoId: 1, categoriaId: 5, subcategoriaId: 12,
    categoria: { id: 5, nombre: 'Educación' }, subcategoria: { id: 12, nombre: 'Colegio / Universidad' },
    tipoGasto: { id: 1, nombre: 'Fijo' },
  },
  {
    id: 13, descripcion: 'Servicio de agua', monto: 42000, fecha: '2026-06-13', esRecurrente: true,
    tipoGastoId: 1, categoriaId: 7, subcategoriaId: 17,
    categoria: { id: 7, nombre: 'Servicios' }, subcategoria: { id: 17, nombre: 'Agua' },
    tipoGasto: { id: 1, nombre: 'Fijo' },
  },
  {
    id: 14, descripcion: 'Mercado semanal', monto: 195000, fecha: '2026-06-16', esRecurrente: false,
    tipoGastoId: 2, categoriaId: 1, subcategoriaId: 1,
    categoria: { id: 1, nombre: 'Alimentación' }, subcategoria: { id: 1, nombre: 'Mercado' },
    tipoGasto: { id: 2, nombre: 'Variable' },
  },
  {
    id: 15, descripcion: 'Cine en familia', monto: 72000, fecha: '2026-06-15', esRecurrente: false,
    tipoGastoId: 2, categoriaId: 6, subcategoriaId: 15,
    categoria: { id: 6, nombre: 'Entretenimiento' }, subcategoria: { id: 15, nombre: 'Salidas / Ocio' },
    tipoGasto: { id: 2, nombre: 'Variable' },
  },
  {
    id: 16, descripcion: 'Medicamentos', monto: 48000, fecha: '2026-06-17', esRecurrente: false,
    tipoGastoId: 2, categoriaId: 4, subcategoriaId: 11,
    categoria: { id: 4, nombre: 'Salud' }, subcategoria: { id: 11, nombre: 'Medicamentos' },
    tipoGasto: { id: 2, nombre: 'Variable' },
  },
  {
    id: 17, descripcion: 'Ropa niños', monto: 135000, fecha: '2026-06-18', esRecurrente: false,
    tipoGastoId: 3, categoriaId: 8, subcategoriaId: 19,
    categoria: { id: 8, nombre: 'Ropa' }, subcategoria: { id: 19, nombre: 'Ropa / Calzado' },
    tipoGasto: { id: 3, nombre: 'Extraordinario' },
  },
];

export const mockResumenMensual = [
  { categoria: 'Vivienda', total: 1620000 },
  { categoria: 'Alimentación', total: 568000 },
  { categoria: 'Educación', total: 320000 },
  { categoria: 'Servicios', total: 192000 },
  { categoria: 'Ropa', total: 135000 },
  { categoria: 'Transporte', total: 140000 },
  { categoria: 'Entretenimiento', total: 93900 },
  { categoria: 'Salud', total: 83000 },
];

export const mockCatalogos = {
  tipos: mockTipos,
  categorias: mockCategorias,
  subcategorias: mockSubcategorias,
};
