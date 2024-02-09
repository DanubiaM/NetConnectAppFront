import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarSideComponent } from './bar-side/bar-side.component';
import {MatButtonModule} from '@angular/material/button';
import { BarTopComponent } from './bar-top/bar-top.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {routing } from '../app.routing';
import {TabelaComponent } from './tabela/tabela.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CardDashboardComponent } from './card-dashboard/card-dashboard.component';


@NgModule({
  declarations: [
    BarSideComponent, BarTopComponent, TabelaComponent, CardDashboardComponent
  ],
  exports:[BarTopComponent, BarSideComponent, TabelaComponent, CardDashboardComponent],
  imports: [
    CommonModule, MatButtonModule, MatToolbarModule,
    MatIconModule, MatSidenavModule, routing, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule

  ],
})
export class SharedModule { }
