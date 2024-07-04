import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeydetransparenciaComponent } from './leydetransparencia.component';

describe('LeydetransparenciaComponent', () => {
  let component: LeydetransparenciaComponent;
  let fixture: ComponentFixture<LeydetransparenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeydetransparenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeydetransparenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
