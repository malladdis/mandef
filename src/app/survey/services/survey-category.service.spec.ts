import { TestBed } from '@angular/core/testing';

import { SurveyCategoryService } from './survey-category.service';

describe('SurveyCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurveyCategoryService = TestBed.get(SurveyCategoryService);
    expect(service).toBeTruthy();
  });
});
