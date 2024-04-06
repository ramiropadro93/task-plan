import { Component } from '@angular/core';
import { Tarea } from '../../models/Tarea';
import { TareasService } from '../../services/tareas.service';
import * as schedule from 'node-schedule';
import { getFechaHoyNombre } from '../../utils/getFechaHoyNombre';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  tareas: Tarea[] = this._tareasService.getTareasAll();
  showModalCreacionTarea: boolean = false;
  fechaHoy: string = '';
  CrearTareaResult: {
    titulo: string,
    descripcion: string,
    prioridad: number,
    completada: boolean
  } = {
    titulo: '',
    descripcion: '',
    prioridad: 0,
    completada: false
  }

  constructor(private _tareasService: TareasService) {
    this.fechaHoy = getFechaHoyNombre();
  }

  ngOnInit(): void {
    const that = this;
    schedule.scheduleJob('0 0 * * *', function(){
      that.limpiezaTareas();
    });
    setTimeout(() => {
      this.limpiezaTareas();
    }, 5000);
  }

  crearTarea(tarea: any): void {
    this._tareasService.createTarea(tarea);
    this.showModalCreacionTarea = false;
    this.tareas = this._tareasService.getTareasAll();
  }

  cerrarModalCreacionTarea(): void {
    this.showModalCreacionTarea = false;
  }

  habilitarCrearTarea(): void {
    this.showModalCreacionTarea = true;
  }

  completarTarea(id: string): void {
    this._tareasService.completarTarea(id);
    this.tareas = this._tareasService.getTareasAll();
  }

  eliminarTarea(id: string): void {
    this._tareasService.deleteTarea(id);
    this.tareas = this._tareasService.getTareasAll();
  }

  limpiezaTareas(): void {
    this._tareasService.limpiarTareasRecurrentesCompletadas();
    this.tareas = this._tareasService.getTareasAll();
  }
}
