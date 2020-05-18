import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeChartSectionComponent } from './age-chart-section.component';

describe('AgeChartSectionComponent', () => {
  let component: AgeChartSectionComponent;
  let fixture: ComponentFixture<AgeChartSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeChartSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeChartSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
