import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from '../dto/Item';
import {v4 as uuidv4} from 'uuid';


@Component({
  selector: 'app-detalhamento',
  templateUrl: './detalhamento.component.html',
  styleUrls: ['./detalhamento.component.css']
})
export class DetalhamentoComponent {
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  newItem! :Item;
  @Input() clienteSelecionado: string | null = '';

  addDataOnTable() { 
    this.newItem = {
      id: uuidv4(),
      descricao: '',
      quantidade: 0,
      valor_unitario:  0,
      desconto:  0,
      total: 0
    } 
  }

}
