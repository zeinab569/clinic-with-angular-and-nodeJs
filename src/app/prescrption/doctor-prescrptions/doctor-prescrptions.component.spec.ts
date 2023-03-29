import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPrescrptionsComponent } from './doctor-prescrptions.component';

describe('DoctorPrescrptionsComponent', () => {
  let component: DoctorPrescrptionsComponent;
  let fixture: ComponentFixture<DoctorPrescrptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorPrescrptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorPrescrptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
