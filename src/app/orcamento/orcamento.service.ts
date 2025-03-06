import { Injectable } from '@angular/core';
import { DashboardInfo } from './dto/dashboard';
import { OrcamentosTabela } from './dto/orcamentoTabela';
import { Cliente } from './dto/cliente';
import { Item } from './dto/Item';
import { BehaviorSubject, Subject } from 'rxjs';
import {v4 as uuidv4} from 'uuid';

const DASHBOARD_DATA: DashboardInfo =  {num_orcamento:500, num_orcamento_fechado:232,num_orcamento_aberto:454};
const ORCAMENTOS_TABELA_DATA: OrcamentosTabela[] = 
[{
  "id": "a9ddc902-6552-4f52-893a-727e3425faa0",
  "titulo": "NDIS",
  "cliente": "Rhyzio",
  "data": "6/21/2024",
  "valor": 130.44,
  "status": "ABERTO"
}, {
  "id": "53a165b4-e2c7-4f8f-a992-c070ecc5e657",
  "titulo": "Owners Representative",
  "cliente": "Zoomcast",
  "data": "12/19/2023",
  "valor": 13575,
  "status": "ABERTO"
}, {
  "id": "db2cccd0-e461-49c8-b503-3d44ea55061b",
  "titulo": "Jet Engines",
  "cliente": "Tazz",
  "data": "10/16/2024",
  "valor": 9417,
  "status": "DECLINADO"
}, {
  "id": "124805da-bd16-47d8-a0a9-fa9b39f27aee",
  "titulo": "EPA",
  "cliente": "Devcast",
  "data": "6/8/2024",
  "valor": 14450,
  "status": "FECHADO"
}, {
  "id": "0f542f87-e692-4899-b02b-810f1486017f",
  "titulo": "BTS Installation",
  "cliente": "Quimm",
  "data": "2/9/2024",
  "valor": 11533,
  "status": "FECHADO"
}, {
  "id": "2a7bcf1d-dc53-425e-a305-6f893d4a0d10",
  "titulo": "Xactimate",
  "cliente": "Voomm",
  "data": "8/11/2024",
  "valor": 18713,
  "status": "DECLINADO"
}, {
  "id": "18c6265e-4634-471a-ba58-8f04dd287778",
  "titulo": "FCC License",
  "cliente": "Mynte",
  "data": "1/30/2024",
  "valor": 7770,
  "status": "FECHADO"
}, {
  "id": "b629846f-3e0c-4894-8656-f57d36e80b76",
  "titulo": "Construction",
  "cliente": "Edgewire",
  "data": "4/16/2024",
  "valor": 1444,
  "status": "FECHADO"
}, {
  "id": "fc17fe2e-8f58-409e-909d-8a90ff7ec55d",
  "titulo": "HMS",
  "cliente": "Trudeo",
  "data": "11/28/2023",
  "valor": 7839,
  "status": "DECLINADO"
}, {
  "id": "a2398752-529f-47bb-82f3-f5c77915eca2",
  "titulo": "Design for Manufacturing",
  "cliente": "Devpulse",
  "data": "3/18/2024",
  "valor": 16813,
  "status": "ABERTO"
}, {
  "id": "3d2c3a89-e153-4254-a0eb-716cbb05c90b",
  "titulo": "Rhino 3D",
  "cliente": "Wordify",
  "data": "12/30/2023",
  "valor": 8040,
  "status": "DECLINADO"
}, {
  "id": "dca8e915-2bc9-4135-b11c-18b5063e637f",
  "titulo": "Lithium-ion Batteries",
  "cliente": "Brightdog",
  "data": "2/15/2024",
  "valor": 18821,
  "status": "ABERTO"
}, {
  "id": "25687e4a-0d4e-48b9-8370-bfafe42eddf7",
  "titulo": "Lean Manufacturing",
  "cliente": "LiveZ",
  "data": "5/1/2024",
  "valor": 6512,
  "status": "FECHADO"
}, {
  "id": "4d1819b8-bcd8-4dcb-8bcb-8c9e67e6de7e",
  "titulo": "MDSD",
  "cliente": "Skippad",
  "data": "4/30/2024",
  "valor": 11567,
  "status": "ABERTO"
}, 
{
  "id": "da7f5600-0d3e-4046-b99e-62218fcc2f22",
  "titulo": "Sound",
  "cliente": "Thoughtblab",
  "data": "12/23/2023",
  "valor": 10876,
  "status": "FECHADO"
}]

const LISTA_CLIENTES: Cliente[] = [
  {
    "id":"95f19eb4-cd39-4cd3-829f-caf0816aea6e",
    "nome":"Fernando Fazendas",
    "endereco":"Fernando Fazendas",
    "identificacao":"234234.234.23",
    "telefone":"655556544",
    "email":"fernando.fazenda@gmail.com"
  },
  {
    "id":"ebb4eabe-5e6b-4999-894d-b5bda45f227f",
    "nome":"Fazendas Marajá",
    "endereco":"Fernando Fazendas",
    "identificacao":"234234.234.23",
    "telefone":"655556544",
    "email":"maraja@gmail.com"
  },
  {
    "id":"a6e5635b-c596-4400-be04-960cfd98ba44",
    "nome":"Copacell",
    "endereco":"Fernando Fazendas",
    "identificacao":'234234.234.23',
    "telefone":"655556544",
    "email":"capecell@gmail.com"
  },

];

@Injectable()
export class OrcamentoService {

  private item = new Subject<Item>(); 

  itemToSend = this.item.asObservable();

  sendItem(data: Item) {
    this.item.next(data)
  }

  constructor() { }

  getDataDashboard(){
    return DASHBOARD_DATA;
  }

  getOrcamentos(){
    return ORCAMENTOS_TABELA_DATA;
  }

  getClientes(){
    return LISTA_CLIENTES;
  }

  saveCustomer(customer: any) {
    LISTA_CLIENTES.push(customer);
    console.log(LISTA_CLIENTES)
    //TODO: implementar HTTP client
   // return this.httpClient.post(BASE_URL + '/customer/', JSON.stringify(customer), this.httpOptions);
  }
}
