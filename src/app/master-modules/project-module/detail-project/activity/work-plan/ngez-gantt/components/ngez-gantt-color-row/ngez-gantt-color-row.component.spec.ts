import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgezGanttColorRowComponent } from './ngez-gantt-color-row.component';

describe('NgezGanttColorRowComponent', () => {
  let component: NgezGanttColorRowComponent;
  let fixture: ComponentFixture<NgezGanttColorRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgezGanttColorRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgezGanttColorRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
