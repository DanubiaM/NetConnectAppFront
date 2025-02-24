import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Item } from '../dto/Item';


@Component({
  selector: 'app-detalhamento',
  templateUrl: './detalhamento.component.html',
  styleUrls: ['./detalhamento.component.css']
})
export class DetalhamentoComponent {
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  newItem! :Item;

  itemAddForm = new FormGroup({
    descricao: new FormControl(''),
    quantidade: new FormControl(0),
    valor_unitario: new FormControl(0),
    desconto: new FormControl(0),
  });

  addDataOnTable() {
    var itemToAdd  = this.itemAddForm.value;
    // console.log(itemToAdd);

  
    const valorTotalItem = this.calTotalItem(itemToAdd.valor_unitario ?? 0, itemToAdd.quantidade ?? 0, itemToAdd.desconto ?? 0);

    this.newItem = {
      descricao: itemToAdd.descricao ?? 'Descricao Invalida',
      quantidade: Number(itemToAdd.quantidade) ?? 0,
      valor_unitario: Number(itemToAdd.valor_unitario) ?? 0,
      desconto: Number(itemToAdd.desconto) ?? 0,
      total: valorTotalItem
    }
    
    // console.log(this.table)
    // this.dataSource.push(newItem);

    //A TABELA ESTA EM OUTRO COMPONENTE
    // this.table.renderRows();
  }

  calTotalItem(valor_unitario: number = 0, quantidade: number = 0 , desconto: number = 0){
    return  quantidade * valor_unitario * (1- (desconto /100)) ;
  }
}
