import { TestBed } from '@angular/core/testing';

import { MocksDataService } from './mocks-data.service';

describe('MocksDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MocksDataService = TestBed.get(MocksDataService);
    expect(service).toBeTruthy();
  });
});
