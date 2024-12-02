import { RouterModule, Routes } from "@angular/router";
import { ListaClientesComponent } from "./cliente/lista/lista.component";
import { CadastroComponent as CadastroComponentCliente} from "./cliente/cadastro/cadastro.component";
import { ModuleWithProviders } from "@angular/core";
import { DashboardComponent } from "./orcamento/dashboard/dashboard.component";
import { CadastroComponent as CadastroComponentOrcamento } from './orcamento/cadastro/cadastro.component';

const APP_ROUTES: Routes =[
    {path:'', redirectTo:'/orcamento', pathMatch: 'full'},
    {path:'clientes', component: ListaClientesComponent},
    {path:'clientes/cadastro', component: CadastroComponentCliente},
    {path:'orcamento', component: DashboardComponent},
    {path:'orcamento/cadastro', component: CadastroComponentOrcamento},
    {path:'**', redirectTo:'/orcamento'},


    
]
 
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);