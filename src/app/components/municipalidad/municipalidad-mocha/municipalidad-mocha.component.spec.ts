import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalidadMochaComponent } from './municipalidad-mocha.component';

describe('MunicipalidadMochaComponent', () => {
  let component: MunicipalidadMochaComponent;
  let fixture: ComponentFixture<MunicipalidadMochaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MunicipalidadMochaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MunicipalidadMochaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
