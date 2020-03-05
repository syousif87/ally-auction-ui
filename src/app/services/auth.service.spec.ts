import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('bidder name should be empty', () => {
    expect(service.bidderName).toBe(undefined);
  });

  it('bidder name should be set', () => {
    service.bidderName = 'dev';
    expect(service.bidderName).toBe('dev');
  });
});
