import { TestBed } from '@angular/core/testing';

import { RouteGuardSevrService } from './route-guard-sevr.service';

describe('RouteGuardSevrService', () => {
  let service: RouteGuardSevrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardSevrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
