import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownDesignComponent } from './drop-down-design.component';

describe('DropDownDesignComponent', () => {
  let component: DropDownDesignComponent;
  let fixture: ComponentFixture<DropDownDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
