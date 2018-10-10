import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgezGanttFooterComponent } from './ngez-gantt-footer.component';

describe('NgezGanttFooterComponent', () => {
  let component: NgezGanttFooterComponent;
  let fixture: ComponentFixture<NgezGanttFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgezGanttFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgezGanttFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
