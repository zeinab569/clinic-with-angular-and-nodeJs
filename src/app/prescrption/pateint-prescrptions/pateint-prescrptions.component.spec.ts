import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PateintPrescrptionsComponent } from './pateint-prescrptions.component';

describe('PateintPrescrptionsComponent', () => {
  let component: PateintPrescrptionsComponent;
  let fixture: ComponentFixture<PateintPrescrptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PateintPrescrptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PateintPrescrptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
