import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientdashComponent } from './patientdash.component';

describe('PatientdashComponent', () => {
  let component: PatientdashComponent;
  let fixture: ComponentFixture<PatientdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
