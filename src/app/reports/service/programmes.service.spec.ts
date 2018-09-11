import { TestBed, inject } from '@angular/core/testing';

import { ProgrammesService } from './programmes.service';

describe('ProgrammesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgrammesService]
    });
  });

  it('should be created', inject([ProgrammesService], (service: ProgrammesService) => {
    expect(service).toBeTruthy();
  }));
});
