import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { ListaClientesComponent } from "./cliente/lista/lista.component";
import { CadastroComponent } from "./cliente/cadastro/cadastro.component";
import { ModuleWithProviders } from "@angular/core";

const APP_ROUTES: Routes =[
    {path:'clientes', component: ListaClientesComponent},
    {path:'clientes/cadastro', component: CadastroComponent}
    
]
 
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);