import { TestBed, inject } from '@angular/core/testing';

import { CalculationMethodService } from './calculation-method.service';

describe('CalculationMethodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculationMethodService]
    });
  });

  it('should be created', inject([CalculationMethodService], (service: CalculationMethodService) => {
    expect(service).toBeTruthy();
  }));
});
