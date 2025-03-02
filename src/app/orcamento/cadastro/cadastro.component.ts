import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, of, startWith } from 'rxjs';
import { OrcamentoService } from '../orcamento.service';
import { Cliente } from '../dto/cliente';
import { MatDialog } from '@angular/material/dialog';
import { CadastroClienteModalComponent } from '../cadastro-cliente-modal/cadastro-cliente-modal.component';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [CadastroClienteModalComponent]
})
export class CadastroComponent implements OnInit {

  clientFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  myControl = new FormControl('');

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
    this.filteredOptions = this.myControl.valueChanges.pipe(
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
    }
  }

  onClearFilter(): void {
    this.myControl.setValue('');
    this.mostrarCliente = false;
  }

  openDialog() {
    this.dialog.open(CadastroClienteModalComponent);
  }
  

}
