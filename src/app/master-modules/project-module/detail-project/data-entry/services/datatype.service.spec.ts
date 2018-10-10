import { TestBed } from '@angular/core/testing';

import { DatatypeService } from './datatype.service';

describe('DatatypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatatypeService = TestBed.get(DatatypeService);
    expect(service).toBeTruthy();
  });
});
