export interface Tarea {
  id: string;
  titulo: string;
  fechaCreacion?: string;
  prioridad: number;
  completada: boolean;
  recurrente: boolean;
}
