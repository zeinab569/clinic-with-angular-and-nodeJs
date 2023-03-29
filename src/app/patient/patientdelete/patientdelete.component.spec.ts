import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientdeleteComponent } from './patientdelete.component';

describe('PatientdeleteComponent', () => {
  let component: PatientdeleteComponent;
  let fixture: ComponentFixture<PatientdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientdeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
