import { TestBed, inject } from '@angular/core/testing';

import { FormsDataService } from './forms-data.service';

describe('FormsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormsDataService]
    });
  });

  it('should be created', inject([FormsDataService], (service: FormsDataService) => {
    expect(service).toBeTruthy();
  }));
});
