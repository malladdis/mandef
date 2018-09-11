import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualTableComponent } from './annual-table.component';

describe('AnnualTableComponent', () => {
  let component: AnnualTableComponent;
  let fixture: ComponentFixture<AnnualTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
