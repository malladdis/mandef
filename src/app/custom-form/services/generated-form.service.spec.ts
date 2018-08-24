import { TestBed, inject } from '@angular/core/testing';

import { GeneratedFormService } from './generated-form.service';

describe('GeneratedFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneratedFormService]
    });
  });

  it('should be created', inject([GeneratedFormService], (service: GeneratedFormService) => {
    expect(service).toBeTruthy();
  }));
});
