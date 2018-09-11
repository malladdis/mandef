import { TestBed, inject } from '@angular/core/testing';

import { IndicatorCalculationMethodService } from './indicator-calculation-method.service';

describe('IndicatorCalculationMethodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndicatorCalculationMethodService]
    });
  });

  it('should be created', inject([IndicatorCalculationMethodService], (service: IndicatorCalculationMethodService) => {
    expect(service).toBeTruthy();
  }));
});
