import { TestBed, inject } from '@angular/core/testing';

import { IndicatorFormService } from './indicator-form.service';

describe('IndicatorFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndicatorFormService]
    });
  });

  it('should be created', inject([IndicatorFormService], (service: IndicatorFormService) => {
    expect(service).toBeTruthy();
  }));
});
