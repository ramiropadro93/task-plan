import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { CreateTareaBtnComponent } from './create-tarea-btn/create-tarea-btn.component';
import { FormsModule } from '@angular/forms';
import { CrearTareaModalComponent } from './crear-tarea-modal/crear-tarea-modal.component';

@NgModule({
  declarations: [
    TablaComponent,
    CreateTareaBtnComponent,
    CrearTareaModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TablaComponent,
    CreateTareaBtnComponent,
    CrearTareaModalComponent
  ]
})
export class ComponentsModule { }
