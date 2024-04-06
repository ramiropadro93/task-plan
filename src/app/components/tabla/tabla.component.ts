import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../../models/Tarea';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  @Input() elementos: any[] = [];
  @Output() completarTarea = new EventEmitter<string>();
  @Output() eliminarTarea = new EventEmitter<string>();

  completar(tarea: Tarea): void {
    this.completarTarea.emit(tarea.id);
  }

  eliminar(tarea: Tarea): void {
    this.eliminarTarea.emit(tarea.id);
  }
}
