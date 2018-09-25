import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomformErrorComponent } from './customform-error.component';

describe('CustomformErrorComponent', () => {
  let component: CustomformErrorComponent;
  let fixture: ComponentFixture<CustomformErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomformErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomformErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
