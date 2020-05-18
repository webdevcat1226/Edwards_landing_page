import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAsSectionComponent } from './doctor-as-section.component';

describe('DoctorAsSectionComponent', () => {
  let component: DoctorAsSectionComponent;
  let fixture: ComponentFixture<DoctorAsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorAsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
