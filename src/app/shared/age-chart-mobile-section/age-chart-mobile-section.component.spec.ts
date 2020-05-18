import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeChartMobileSectionComponent } from './age-chart-mobile-section.component';

describe('AgeChartMobileSectionComponent', () => {
  let component: AgeChartMobileSectionComponent;
  let fixture: ComponentFixture<AgeChartMobileSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeChartMobileSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeChartMobileSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
