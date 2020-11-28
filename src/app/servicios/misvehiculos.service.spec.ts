import { TestBed } from '@angular/core/testing';

import { MisvehiculosService } from './misvehiculos.service';

describe('MisvehiculosService', () => {
  let service: MisvehiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisvehiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
