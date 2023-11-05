import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClientesComponent } from './lista.component';

describe('InicioComponent', () => {
  let component: ListaClientesComponent;
  let fixture: ComponentFixture<ListaClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaClientesComponent]
    });
    fixture = TestBed.createComponent(ListaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
