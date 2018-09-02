import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIndicatorDialogComponent } from './edit-indicator-dialog.component';

describe('EditIndicatorDialogComponent', () => {
  let component: EditIndicatorDialogComponent;
  let fixture: ComponentFixture<EditIndicatorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIndicatorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIndicatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
