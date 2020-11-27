import { TestBed } from '@angular/core/testing';

import { SensordistanciaService } from './sensordistancia.service';

describe('SensordistanciaService', () => {
  let service: SensordistanciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensordistanciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
