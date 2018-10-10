import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgezGanttBarDetailComponent } from './ngez-gantt-bar-detail.component';

describe('NgezGanttBarDetailComponent', () => {
  let component: NgezGanttBarDetailComponent;
  let fixture: ComponentFixture<NgezGanttBarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgezGanttBarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgezGanttBarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
