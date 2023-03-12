import { TestBed } from '@angular/core/testing';

import { AuthServeService } from './auth-serve.service';

describe('AuthServeService', () => {
  let service: AuthServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
