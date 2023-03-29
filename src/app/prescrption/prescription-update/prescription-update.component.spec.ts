import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionUpdateComponent } from './prescription-update.component';

describe('PrescriptionUpdateComponent', () => {
  let component: PrescriptionUpdateComponent;
  let fixture: ComponentFixture<PrescriptionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
