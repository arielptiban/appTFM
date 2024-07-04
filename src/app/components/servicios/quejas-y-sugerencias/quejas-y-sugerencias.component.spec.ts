import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejasYSugerenciasComponent } from './quejas-y-sugerencias.component';

describe('QuejasYSugerenciasComponent', () => {
  let component: QuejasYSugerenciasComponent;
  let fixture: ComponentFixture<QuejasYSugerenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuejasYSugerenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuejasYSugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
