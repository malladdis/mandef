import { TestBed, inject } from '@angular/core/testing';

import { ProgramCategoryService } from './program-category.service';

describe('ProgramCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramCategoryService]
    });
  });

  it('should be created', inject([ProgramCategoryService], (service: ProgramCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
