import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ListaClientesComponent } from '../lista/lista.component';
import { ClienteInfo } from '../cliente';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-exibir-cliente-info',
  templateUrl: './exibir-cliente-info.component.html',
  styleUrls: ['./exibir-cliente-info.component.css']
})
export class ExibirClienteInfoComponent {
  
  
  
  constructor(
    public dialogRef: MatDialogRef<ListaClientesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClienteInfo,
  ) {}
}
