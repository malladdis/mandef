import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgezGanttRowComponent } from './ngez-gantt-row.component';

describe('NgezGanttRowComponent', () => {
  let component: NgezGanttRowComponent;
  let fixture: ComponentFixture<NgezGanttRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgezGanttRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgezGanttRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
