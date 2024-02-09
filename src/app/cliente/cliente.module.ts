import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaClientesComponent } from './lista/lista.component';
import {MatCardModule} from '@angular/material/card';
import { ClienteService } from './cliente.service';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import { ExibirClienteInfoComponent } from './exibir-cliente-info/exibir-cliente-info.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import {MatTooltipModule} from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    CadastroComponent,
    ListaClientesComponent,
    ExibirClienteInfoComponent,
  ],
  imports: [
    MatCardModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    SharedModule
    
  ],
  exports:[ListaClientesComponent],
  providers:[
    ClienteService
  ]
})
export class ClienteModule { }
