import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsviewComponent } from './patientsview.component';

describe('PatientsviewComponent', () => {
  let component: PatientsviewComponent;
  let fixture: ComponentFixture<PatientsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
