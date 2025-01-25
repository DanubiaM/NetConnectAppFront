import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroClienteModalComponent } from './cadastro-cliente-modal.component';

describe('CadastroClienteModalComponent', () => {
  let component: CadastroClienteModalComponent;
  let fixture: ComponentFixture<CadastroClienteModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroClienteModalComponent]
    });
    fixture = TestBed.createComponent(CadastroClienteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
