import { TestBed, inject } from '@angular/core/testing';

import { FrequenciesService } from './frequencies.service';

describe('FrequenciesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrequenciesService]
    });
  });

  it('should be created', inject([FrequenciesService], (service: FrequenciesService) => {
    expect(service).toBeTruthy();
  }));
});
