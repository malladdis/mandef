import { TestBed, inject } from '@angular/core/testing';

import { IndicatorDisaggregationService } from './indicator-disaggregation.service';

describe('IndicatorDisaggregationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndicatorDisaggregationService]
    });
  });

  it('should be created', inject([IndicatorDisaggregationService], (service: IndicatorDisaggregationService) => {
    expect(service).toBeTruthy();
  }));
});
