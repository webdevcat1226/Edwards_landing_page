import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartVideoSectionComponent } from './heart-video-section.component';

describe('HeartVideoSectionComponent', () => {
  let component: HeartVideoSectionComponent;
  let fixture: ComponentFixture<HeartVideoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartVideoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartVideoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
