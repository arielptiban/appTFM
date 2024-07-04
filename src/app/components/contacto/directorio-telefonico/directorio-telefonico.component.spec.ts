import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioTelefonicoComponent } from './directorio-telefonico.component';

describe('DirectorioTelefonicoComponent', () => {
  let component: DirectorioTelefonicoComponent;
  let fixture: ComponentFixture<DirectorioTelefonicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorioTelefonicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectorioTelefonicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
