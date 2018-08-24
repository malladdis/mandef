/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogFrameComponent } from './log-frame.component';

describe('LogFrameComponent', () => {
  let component: LogFrameComponent;
  let fixture: ComponentFixture<LogFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
