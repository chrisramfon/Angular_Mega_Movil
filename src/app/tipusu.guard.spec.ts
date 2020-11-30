import { TestBed } from '@angular/core/testing';

import { TipusuGuard } from './tipusu.guard';

describe('TipusuGuard', () => {
  let guard: TipusuGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TipusuGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
