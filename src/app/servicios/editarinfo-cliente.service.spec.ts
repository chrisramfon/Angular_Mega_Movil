import { TestBed } from '@angular/core/testing';

import { EditarinfoClienteService } from './editarinfo-cliente.service';

describe('EditarinfoClienteService', () => {
  let service: EditarinfoClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarinfoClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
