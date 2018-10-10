import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgezGanttMonthRowComponent } from './ngez-gantt-month-row.component';

describe('NgezGanttMonthRowComponent', () => {
  let component: NgezGanttMonthRowComponent;
  let fixture: ComponentFixture<NgezGanttMonthRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgezGanttMonthRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgezGanttMonthRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
