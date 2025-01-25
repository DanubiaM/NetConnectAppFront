import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




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
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf    
  ],
  exports:[ListaClientesComponent],
  providers:[
    ClienteService
  ]
})
export class ClienteModule { }
