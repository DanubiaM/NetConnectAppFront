import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { Item } from '../dto/Item';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-itens-orcamento-tabela',
  templateUrl: './itens-orcamento-tabela.component.html',
  styleUrls: ['./itens-orcamento-tabela.component.css']
})
export class ItensOrcamentoTabelaComponent {
  displayedColumns: string[] = ['descricao', 'quantidade', 'valor_unitario',  'desconto', 'total', 'settings'];
  dataSource : Item[] = [];
  private _newItem!: Item;

  @ViewChild(MatTable) table!: MatTable<Item>;
  @Input() set newItem(value: Item) {
     
    if(value !== undefined) {
      this._newItem = value;
      this.updateTable(this._newItem);
    }  
 
 }
 
 get newItem(): Item {
    return this._newItem; 
 }

  updateTable(newRow: Item){
    console.log(newRow);
    this.dataSource.push(newRow)
    this.table.renderRows();

  }
}
