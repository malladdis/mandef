import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMilestoneActualValueComponent } from './add-milestone-actual-value.component';

describe('AddMilestoneActualValueComponent', () => {
  let component: AddMilestoneActualValueComponent;
  let fixture: ComponentFixture<AddMilestoneActualValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMilestoneActualValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMilestoneActualValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
