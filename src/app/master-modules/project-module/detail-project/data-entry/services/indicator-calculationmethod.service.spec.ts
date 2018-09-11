import { TestBed, inject } from '@angular/core/testing';

import { IndicatorCalculationmethodService } from './indicator-calculationmethod.service';

describe('IndicatorCalculationmethodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndicatorCalculationmethodService]
    });
  });

  it('should be created', inject([IndicatorCalculationmethodService], (service: IndicatorCalculationmethodService) => {
    expect(service).toBeTruthy();
  }));
});
