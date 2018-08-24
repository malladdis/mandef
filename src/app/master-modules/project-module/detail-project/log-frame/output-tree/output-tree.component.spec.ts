/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OutputTreeComponent } from './output-tree.component';

describe('OutputTreeComponent', () => {
  let component: OutputTreeComponent;
  let fixture: ComponentFixture<OutputTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
