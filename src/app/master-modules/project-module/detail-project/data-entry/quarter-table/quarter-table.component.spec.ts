import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterTableComponent } from './quarter-table.component';

describe('QuarterTableComponent', () => {
  let component: QuarterTableComponent;
  let fixture: ComponentFixture<QuarterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarterTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
