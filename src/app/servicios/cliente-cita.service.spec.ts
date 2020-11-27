import { TestBed } from '@angular/core/testing';

import { ClienteCitaService } from './cliente-cita.service';

describe('ClienteCitaService', () => {
  let service: ClienteCitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteCitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
