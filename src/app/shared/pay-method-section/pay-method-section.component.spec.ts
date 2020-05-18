import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayMethodSectionComponent } from './pay-method-section.component';

describe('PayMethodSectionComponent', () => {
  let component: PayMethodSectionComponent;
  let fixture: ComponentFixture<PayMethodSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayMethodSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayMethodSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
