import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTrackPage } from './live-track.page';

describe('LiveTrackPage', () => {
  let component: LiveTrackPage;
  let fixture: ComponentFixture<LiveTrackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTrackPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTrackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
