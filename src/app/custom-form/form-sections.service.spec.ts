import { TestBed, inject } from '@angular/core/testing';

import { FormSectionsService } from './form-sections.service';

describe('FormSectionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormSectionsService]
    });
  });

  it('should be created', inject([FormSectionsService], (service: FormSectionsService) => {
    expect(service).toBeTruthy();
  }));
});
