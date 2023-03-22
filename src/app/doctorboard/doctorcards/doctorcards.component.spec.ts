import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorcardsComponent } from './doctorcards.component';

describe('DoctorcardsComponent', () => {
  let component: DoctorcardsComponent;
  let fixture: ComponentFixture<DoctorcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
