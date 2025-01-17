import { Injectable } from '@angular/core';
import { ClienteInfo } from './cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../orcamento/dto/cliente';
import { catchError, Observable } from 'rxjs';


const CLIENTE_DATA: ClienteInfo[] = [
  {id:1, nome:"Danubia",contato:"67677237", plano:"600MB", valor:110.22,servidor:"Parque das Americas", vencido:true, endereco:"Rua A - n 6"},
  {id:2, nome:"Brunin Fiotao",contato:"67677237", plano:"600MB", valor:110.22,servidor:"Parque das Americas",  vencido:false, endereco:"Rua A - n 6"},
  {id:3, nome:"Brunin Fiotao",contato:"67677237", plano:"600MB", valor:110.22,servidor:"Parque das Americas",  vencido:false, endereco:"Rua A - n 6"},
  {id:4, nome:"Brunin Fiotao",contato:"67677237", plano:"600MB", valor:110.22,servidor:"Parque das Americas",  vencido:false, endereco:"Rua A - n 6"},
  {id:5, nome:"Brunin Fiotao",contato:"67677237", plano:"600MB", valor:110.22,servidor:"Parque das Americas",  vencido:true,  endereco:"Rua A - n 6"},
  
  ]

@Injectable()
export class ClienteService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor() { }

  getAllCustomer(){
    return CLIENTE_DATA;
  }

  save(customer: any) {
    CLIENTE_DATA.push(customer);
    console.log(CLIENTE_DATA)
    //TODO: implementar HTTP client
   // return this.httpClient.post(BASE_URL + '/customer/', JSON.stringify(customer), this.httpOptions);
  }
  

}
