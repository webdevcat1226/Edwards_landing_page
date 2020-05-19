import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalInstitutionListSectionComponent } from './medical-institution-list-section.component';

describe('MedicalInstitutionListSectionComponent', () => {
  let component: MedicalInstitutionListSectionComponent;
  let fixture: ComponentFixture<MedicalInstitutionListSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalInstitutionListSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalInstitutionListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
