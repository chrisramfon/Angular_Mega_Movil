import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCitaComponent } from './cliente-cita.component';

describe('ClienteCitaComponent', () => {
  let component: ClienteCitaComponent;
  let fixture: ComponentFixture<ClienteCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteCitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
