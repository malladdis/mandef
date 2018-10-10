import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgezGanttHeaderComponent } from './ngez-gantt-header.component';

describe('NgezGanttHeaderComponent', () => {
  let component: NgezGanttHeaderComponent;
  let fixture: ComponentFixture<NgezGanttHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgezGanttHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgezGanttHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
