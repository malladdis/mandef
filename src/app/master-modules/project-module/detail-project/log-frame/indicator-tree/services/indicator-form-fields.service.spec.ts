import { TestBed } from '@angular/core/testing';

import { IndicatorFormFieldsService } from './indicator-form-fields.service';

describe('IndicatorFormFieldsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndicatorFormFieldsService = TestBed.get(IndicatorFormFieldsService);
    expect(service).toBeTruthy();
  });
});
