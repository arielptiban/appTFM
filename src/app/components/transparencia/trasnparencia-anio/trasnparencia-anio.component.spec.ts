import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasnparenciaAnioComponent } from './trasnparencia-anio.component';

describe('TrasnparenciaAnioComponent', () => {
  let component: TrasnparenciaAnioComponent;
  let fixture: ComponentFixture<TrasnparenciaAnioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrasnparenciaAnioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrasnparenciaAnioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
