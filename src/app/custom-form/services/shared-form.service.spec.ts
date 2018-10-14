import { TestBed } from '@angular/core/testing';

import { SharedFormService } from './shared-form.service';

describe('SharedFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedFormService = TestBed.get(SharedFormService);
    expect(service).toBeTruthy();
  });
});
