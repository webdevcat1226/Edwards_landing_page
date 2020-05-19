import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyHospitalSectionComponent } from './nearby-hospital-section.component';

describe('NearbyHospitalSectionComponent', () => {
  let component: NearbyHospitalSectionComponent;
  let fixture: ComponentFixture<NearbyHospitalSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyHospitalSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyHospitalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
