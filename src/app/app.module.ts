import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { ClienteModule } from './cliente/cliente.module';
import {NgIf} from '@angular/common';
import {SharedModule} from './shared/shared.module'
import {MatButtonModule} from '@angular/material/button';
import { routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    ClienteModule,
    MatTableModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatButtonModule,
    NgIf,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    routing
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent],

  
})
export class AppModule {

 }
