import { TestBed, inject } from '@angular/core/testing';

import { FormColumnsService } from './form-columns.service';

describe('FormColumnsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormColumnsService]
    });
  });

  it('should be created', inject([FormColumnsService], (service: FormColumnsService) => {
    expect(service).toBeTruthy();
  }));
});
