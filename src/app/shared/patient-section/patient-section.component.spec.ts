import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSectionComponent } from './patient-section.component';

describe('PatientSectionComponent', () => {
  let component: PatientSectionComponent;
  let fixture: ComponentFixture<PatientSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
