import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgezGanttMonthBarComponent } from './ngez-gantt-month-bar.component';

describe('NgezGanttMonthBarComponent', () => {
  let component: NgezGanttMonthBarComponent;
  let fixture: ComponentFixture<NgezGanttMonthBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgezGanttMonthBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgezGanttMonthBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
