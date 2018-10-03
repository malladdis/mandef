import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgezGanttBodyComponent } from './ngez-gantt-body.component';

describe('NgezGanttBodyComponent', () => {
  let component: NgezGanttBodyComponent;
  let fixture: ComponentFixture<NgezGanttBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgezGanttBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgezGanttBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
