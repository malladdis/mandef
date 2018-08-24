import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionDashboardComponent } from './permission-dashboard.component';

describe('PermissionDashboardComponent', () => {
  let component: PermissionDashboardComponent;
  let fixture: ComponentFixture<PermissionDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
