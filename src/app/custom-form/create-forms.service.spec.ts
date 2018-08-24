import { TestBed, inject } from '@angular/core/testing';

import { CreateFormsService } from './create-forms.service';

describe('CreateFormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateFormsService]
    });
  });

  it('should be created', inject([CreateFormsService], (service: CreateFormsService) => {
    expect(service).toBeTruthy();
  }));
});
