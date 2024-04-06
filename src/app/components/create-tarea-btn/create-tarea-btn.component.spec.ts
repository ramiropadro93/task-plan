import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTareaBtnComponent } from './create-tarea-btn.component';

describe('CreateTareaComponent', () => {
  let component: CreateTareaBtnComponent;
  let fixture: ComponentFixture<CreateTareaBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTareaBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTareaBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
