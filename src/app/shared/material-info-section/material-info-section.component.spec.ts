import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialInfoSectionComponent } from './material-info-section.component';

describe('MaterialInfoSectionComponent', () => {
  let component: MaterialInfoSectionComponent;
  let fixture: ComponentFixture<MaterialInfoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialInfoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
