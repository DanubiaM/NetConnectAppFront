import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirClienteInfoComponent } from './exibir-cliente-info.component';

describe('ExibirClienteInfoComponent', () => {
  let component: ExibirClienteInfoComponent;
  let fixture: ComponentFixture<ExibirClienteInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibirClienteInfoComponent]
    });
    fixture = TestBed.createComponent(ExibirClienteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
