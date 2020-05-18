import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuscultationMobileSectionComponent } from './auscultation-mobile-section.component';

describe('AuscultationMobileSectionComponent', () => {
  let component: AuscultationMobileSectionComponent;
  let fixture: ComponentFixture<AuscultationMobileSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuscultationMobileSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuscultationMobileSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
