import { ClienteService } from '../cliente.service';
import { ClienteInfo } from '../cliente';
import { Component, NgModule } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ExibirClienteInfoComponent } from '../exibir-cliente-info/exibir-cliente-info.component';





@Component({
  selector: 'app-inicio',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaClientesComponent {

  titleSection = "Clientes Registrados"
  clientes :ClienteInfo[];
  clienteVencido = 'background-color: #bb4d4d; color: #fff; padding: 2px'
  ativoCard = false; 
  clienteService :ClienteService | undefined;
  


  constructor(clienteService:ClienteService, public dialog: MatDialog){

    this.clientes=clienteService.getCliente();
    this.clienteService = clienteService;

  }

  onMouseOverOut(){
    this.ativoCard = !this.ativoCard;
  }

  openDialog(_idClient: any){

    console.log(_idClient)
    const selectClient = this.clientes.filter((cliente)=> cliente.id == _idClient)


    const dialogRef = this.dialog.open(ExibirClienteInfoComponent,{
      data: selectClient[0],
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  
  
  }

  obterNomeColunas(){
    return ['id','nome','contato','plano','valor','servidor','endereco']
  }
  obterDadosTabela(){
    return this.clientes;
  }
}
