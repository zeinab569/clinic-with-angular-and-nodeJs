import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemhComponent } from './createmh.component';

describe('CreatemhComponent', () => {
  let component: CreatemhComponent;
  let fixture: ComponentFixture<CreatemhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatemhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatemhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
