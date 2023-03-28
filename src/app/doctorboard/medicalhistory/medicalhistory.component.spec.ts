import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalhistoryComponent } from './medicalhistory.component';

describe('MedicalhistoryComponent', () => {
  let component: MedicalhistoryComponent;
  let fixture: ComponentFixture<MedicalhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalhistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
