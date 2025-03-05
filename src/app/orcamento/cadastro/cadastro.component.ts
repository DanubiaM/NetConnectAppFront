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
export class CadastroComponent {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  clienteOrcamento!: Cliente;

  constructor(private _formBuilder: FormBuilder) {

  }

  updateClienteSelecionado(cliente: Cliente){
    this.clienteOrcamento = cliente;
  }

  

}
