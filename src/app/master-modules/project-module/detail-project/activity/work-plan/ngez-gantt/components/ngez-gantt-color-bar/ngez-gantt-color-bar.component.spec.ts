import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgezGanttColorBarComponent } from './ngez-gantt-color-bar.component';

describe('NgezGanttColorBarComponent', () => {
  let component: NgezGanttColorBarComponent;
  let fixture: ComponentFixture<NgezGanttColorBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgezGanttColorBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgezGanttColorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
