import { TestBed, inject } from '@angular/core/testing';

import { OutcomesService } from './outcomes.service';

describe('OutcomesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutcomesService]
    });
  });

  it('should be created', inject([OutcomesService], (service: OutcomesService) => {
    expect(service).toBeTruthy();
  }));
});
