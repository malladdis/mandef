import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiannualTableComponent } from './biannual-table.component';

describe('BiannualTableComponent', () => {
  let component: BiannualTableComponent;
  let fixture: ComponentFixture<BiannualTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiannualTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiannualTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
