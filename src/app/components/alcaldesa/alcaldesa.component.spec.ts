import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcaldesaComponent } from './alcaldesa.component';

describe('AlcaldesaComponent', () => {
  let component: AlcaldesaComponent;
  let fixture: ComponentFixture<AlcaldesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlcaldesaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlcaldesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
