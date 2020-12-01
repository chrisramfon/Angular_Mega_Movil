import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiInfoClienteComponent } from './mi-info-cliente.component';

describe('MiInfoClienteComponent', () => {
  let component: MiInfoClienteComponent;
  let fixture: ComponentFixture<MiInfoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiInfoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiInfoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
