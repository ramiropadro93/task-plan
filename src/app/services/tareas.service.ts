import { Injectable } from '@angular/core';
import { Tarea } from '../models/Tarea';
import { v4 as uuidv4 } from 'uuid';
import { getFechaHoy } from '../utils/getFechaHoy';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  constructor() {}

  getTareasAll(): Tarea[] {
    return JSON.parse(localStorage.getItem('tareas') || '[]');
  }

  createTarea(tarea: Tarea): void {
    let tareas = JSON.parse(localStorage.getItem('tareas') || '[]');
    tarea.id = uuidv4();
    console.log('tarea a crear: ', tarea);
    if (tarea.prioridad == 1) tareas.unshift(tarea);
    else tareas.push(tarea);

    if (!tarea.recurrente) tarea.fechaCreacion = getFechaHoy();

    localStorage.setItem('tareas', JSON.stringify(tareas));
  }

  deleteTarea(id: string): void {
    let tareas = JSON.parse(localStorage.getItem('tareas') || '[]');
    tareas = tareas.filter((t: Tarea) => t.id !== id);
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }

  completarTarea(id: string): void {
    let tareas = JSON.parse(localStorage.getItem('tareas') || '[]');
    const index = tareas.findIndex((t: Tarea) => t.id == id);
    tareas[index].completada = !tareas[index].completada;
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }

  limpiarTareasRecurrentesCompletadas(): void {
    let tareas = JSON.parse(localStorage.getItem('tareas') || '[]');
    tareas = tareas.filter((t: Tarea) => t.recurrente || (!t.recurrente && !t.completada));
    tareas.forEach((t: Tarea) => {
      t.completada = false;
    });
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }
}
