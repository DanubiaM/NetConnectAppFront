import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CadastroClienteModalComponent } from '../cadastro-cliente-modal/cadastro-cliente-modal.component';
import { OrcamentoService } from '../orcamento.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, of, startWith } from 'rxjs';
import { Cliente } from '../dto/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{

  clienteFormGroup  = this._formBuilder.group({
    cliente: new FormControl('', Validators.required)
  });

  cliente = this.clienteFormGroup.get('cliente') as FormControl;

  @Output() clienteSelecionado = new EventEmitter<Cliente>();
  filteredOptions: Observable<string[]>;
  clientes: Cliente[];
  clienteFiltered: Cliente | null = null;
  mostrarCliente: boolean = false;


  constructor(private orcamentoService: OrcamentoService,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog) {
    this.filteredOptions = of([]);
    this.clientes = orcamentoService.getClientes();
  }

  ngOnInit() {

    this.filteredOptions = this.cliente.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.clientes.filter(option => option.nome.toLowerCase().includes(filterValue))
      .map(option => option.nome);
  }

  onOptionSelected(event: any): void {
    const selectedValue = event.option.value;
    this.clienteFiltered = this.clientes.find(cliente => cliente.nome === selectedValue) || null;

    if (this.clienteFiltered != null) {
      this.mostrarCliente = true;
      this.clienteSelecionado.emit(this.clienteFiltered);
    }
  }

  onClearFilter(): void {
    this.cliente.setValue('');
    this.mostrarCliente = false;
  }

  openDialog() {
    this.dialog.open(CadastroClienteModalComponent);
  }
}
