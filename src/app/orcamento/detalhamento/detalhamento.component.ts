import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from '../dto/Item';
import {v4 as uuidv4} from 'uuid';
import { Cliente } from '../dto/cliente';
import { ItemInterno } from '../dto/ItemInterno';


@Component({
  selector: 'app-detalhamento',
  templateUrl: './detalhamento.component.html',
  styleUrls: ['./detalhamento.component.css']
})
export class DetalhamentoComponent {
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  newItem! :Item;
  newItemInterno! :ItemInterno;
  orcamentoNumero: number = 1024;

  @Input() clienteSelecionado!: Cliente;

}
