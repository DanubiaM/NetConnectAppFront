import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarSideComponent } from './bar-side/bar-side.component';
import {MatButtonModule} from '@angular/material/button';
import { BarTopComponent } from './bar-top/bar-top.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { routing } from '../app.routing';

@NgModule({
  declarations: [
    BarSideComponent, BarTopComponent
  ],
  exports:[BarTopComponent, BarSideComponent],
  imports: [
    CommonModule, MatButtonModule, MatToolbarModule,
    MatIconModule, MatSidenavModule, routing

  ],
})
export class SharedModule { }
