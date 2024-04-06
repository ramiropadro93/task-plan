import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-crear-tarea-modal',
  templateUrl: './crear-tarea-modal.component.html',
  styleUrl: './crear-tarea-modal.component.css',
})
export class CrearTareaModalComponent {
  titulo: string = '';
  descripcion: string = '';
  prioridad: number = 0;
  recurrente: number = 0;

  @Output() creacionTarea: EventEmitter<any> = new EventEmitter<any>();
  @Output() cerrarModal: EventEmitter<any> = new EventEmitter<any>();
  crearTarea(): void {
    const tarea = {
      titulo: this.titulo,
      prioridad: this.prioridad,
      recurrente: this.recurrente
    };
    if (this.titulo)
      this.creacionTarea.emit(tarea);
  }

  closeModal(): void {
    this.cerrarModal.emit();
  }
}
