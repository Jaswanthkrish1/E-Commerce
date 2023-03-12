import { TestBed } from '@angular/core/testing';

import { DataGettingserveService } from './data-gettingserve.service';

describe('DataGettingserveService', () => {
  let service: DataGettingserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataGettingserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
