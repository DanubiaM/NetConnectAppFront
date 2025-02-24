import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensOrcamentoTabelaComponent } from './itens-orcamento-tabela.component';

describe('ItensOrcamentoTabelaComponent', () => {
  let component: ItensOrcamentoTabelaComponent;
  let fixture: ComponentFixture<ItensOrcamentoTabelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItensOrcamentoTabelaComponent]
    });
    fixture = TestBed.createComponent(ItensOrcamentoTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
