import { TestBed } from '@angular/core/testing';

import { MessageTransporterService } from './message-transporter.service';

describe('MessageTransporterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageTransporterService = TestBed.get(MessageTransporterService);
    expect(service).toBeTruthy();
  });
});
