import { Injectable } from '@angular/core';
import { ClienteInfo } from './cliente';


const CLIENTE_DATA: ClienteInfo[] = [
  {id:1, nome:"Brunin Fiotao",contato:"67677237", plano:"600MB", valor:110.22,servidor:"Parque das Americas", vencido:true, endereco:"Rua A - n 6"},
  {id:2, nome:"Brunin Fiotao",contato:"67677237", plano:"600MB", valor:110.22,servidor:"Parque das Americas",  vencido:false, endereco:"Rua A - n 6"},
  {id:3, nome:"Brunin Fiotao",contato:"67677237", plano:"600MB", valor:110.22,servidor:"Parque das Americas",  vencido:false, endereco:"Rua A - n 6"},
  {id:4, nome:"Brunin Fiotao",contato:"67677237", plano:"600MB", valor:110.22,servidor:"Parque das Americas",  vencido:false, endereco:"Rua A - n 6"},
  {id:5, nome:"Brunin Fiotao",contato:"67677237", plano:"600MB", valor:110.22,servidor:"Parque das Americas",  vencido:true,  endereco:"Rua A - n 6"},
  
  ]

@Injectable()
export class ClienteService {

  constructor() { }

  getCliente(){
    return CLIENTE_DATA;
  }


}
