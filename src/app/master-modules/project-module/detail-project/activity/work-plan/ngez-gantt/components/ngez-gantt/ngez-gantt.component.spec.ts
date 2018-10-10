import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgezGanttComponent } from './ngez-gantt.component';

describe('NgezGanttComponent', () => {
  let component: NgezGanttComponent;
  let fixture: ComponentFixture<NgezGanttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgezGanttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgezGanttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
