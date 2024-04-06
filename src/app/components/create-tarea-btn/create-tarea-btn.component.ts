import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-tarea-btn',
  templateUrl: './create-tarea-btn.component.html',
  styleUrl: './create-tarea-btn.component.css',
})
export class CreateTareaBtnComponent {
  @Output() habilitarCrearTarea: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  habilitarCreacionTarea(): void {
    this.habilitarCrearTarea.emit(true);
  }
}
