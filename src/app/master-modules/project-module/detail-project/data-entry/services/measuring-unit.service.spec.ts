import { TestBed, inject } from '@angular/core/testing';

import { MeasuringUnitService } from './measuring-unit.service';

describe('MeasuringUnitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeasuringUnitService]
    });
  });

  it('should be created', inject([MeasuringUnitService], (service: MeasuringUnitService) => {
    expect(service).toBeTruthy();
  }));
});
