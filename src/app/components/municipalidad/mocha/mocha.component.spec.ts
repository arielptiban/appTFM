import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MochaComponent } from './mocha.component';

describe('MochaComponent', () => {
  let component: MochaComponent;
  let fixture: ComponentFixture<MochaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MochaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MochaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
