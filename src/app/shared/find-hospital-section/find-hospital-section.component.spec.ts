import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindHospitalSectionComponent } from './find-hospital-section.component';

describe('FindHospitalSectionComponent', () => {
  let component: FindHospitalSectionComponent;
  let fixture: ComponentFixture<FindHospitalSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindHospitalSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindHospitalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
