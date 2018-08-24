import { TestBed, inject } from '@angular/core/testing';

import { FormDataFileService } from './form-data-file.service';

describe('FormDataFileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormDataFileService]
    });
  });

  it('should be created', inject([FormDataFileService], (service: FormDataFileService) => {
    expect(service).toBeTruthy();
  }));
});
