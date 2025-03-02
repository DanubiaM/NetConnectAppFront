import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrcamentoService } from './orcamento.service';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatMenuModule} from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CadastroComponent } from './cadastro/cadastro.component';
import { routing } from '../app.routing';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CadastroClienteModalComponent } from './cadastro-cliente-modal/cadastro-cliente-modal.component';
import { DetalhamentoComponent } from './detalhamento/detalhamento.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ItensOrcamentoTabelaComponent } from './itens-orcamento-tabela/itens-orcamento-tabela.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { ItemFormBottomSheetComponent } from './item-form-bottom-sheet/item-form-bottom-sheet.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CadastroComponent,
    CadastroClienteModalComponent,
    DetalhamentoComponent,
    ItensOrcamentoTabelaComponent,
    ItemFormBottomSheetComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    MatBottomSheetModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatTabsModule,
    NgFor,
    AsyncPipe,
    routing
  ],
  exports:[DashboardComponent],
  providers:[
    OrcamentoService
  ]
})
export class OrcamentoModule { }
