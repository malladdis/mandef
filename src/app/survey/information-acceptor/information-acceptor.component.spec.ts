import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationAcceptorComponent } from './information-acceptor.component';

describe('InformationAcceptorComponent', () => {
  let component: InformationAcceptorComponent;
  let fixture: ComponentFixture<InformationAcceptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationAcceptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationAcceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
