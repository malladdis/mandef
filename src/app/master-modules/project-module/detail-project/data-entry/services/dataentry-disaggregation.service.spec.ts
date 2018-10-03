import { TestBed } from '@angular/core/testing';

import { DataentryDisaggregationService } from './dataentry-disaggregation.service';

describe('DataentryDisaggregationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataentryDisaggregationService = TestBed.get(DataentryDisaggregationService);
    expect(service).toBeTruthy();
  });
});
