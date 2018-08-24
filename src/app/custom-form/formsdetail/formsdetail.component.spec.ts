import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsdetailComponent } from './formsdetail.component';

describe('FormsdetailComponent', () => {
  let component: FormsdetailComponent;
  let fixture: ComponentFixture<FormsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
