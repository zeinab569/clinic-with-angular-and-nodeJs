import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientupdateComponent } from './patientupdate.component';

describe('PatientupdateComponent', () => {
  let component: PatientupdateComponent;
  let fixture: ComponentFixture<PatientupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
