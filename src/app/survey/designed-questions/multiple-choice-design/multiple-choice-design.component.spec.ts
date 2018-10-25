import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceDesignComponent } from './multiple-choice-design.component';

describe('MultipleChoiceDesignComponent', () => {
  let component: MultipleChoiceDesignComponent;
  let fixture: ComponentFixture<MultipleChoiceDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleChoiceDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiceDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
