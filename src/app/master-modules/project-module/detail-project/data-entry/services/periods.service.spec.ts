import { TestBed, inject } from '@angular/core/testing';

import { PeriodsService } from './periods.service';

describe('PeriodsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeriodsService]
    });
  });

  it('should be created', inject([PeriodsService], (service: PeriodsService) => {
    expect(service).toBeTruthy();
  }));
});
