import { TestBed, inject } from '@angular/core/testing';

import { DisaggreagtionService } from './disaggreagtion.service';

describe('DisaggreagtionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisaggreagtionService]
    });
  });

  it('should be created', inject([DisaggreagtionService], (service: DisaggreagtionService) => {
    expect(service).toBeTruthy();
  }));
});
