import { TestBed, inject } from '@angular/core/testing';

import { CustomFormsService } from './custom-forms.service';

describe('CustomFormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomFormsService]
    });
  });

  it('should be created', inject([CustomFormsService], (service: CustomFormsService) => {
    expect(service).toBeTruthy();
  }));
});
