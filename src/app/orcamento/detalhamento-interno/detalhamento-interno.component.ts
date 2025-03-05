import { Component, ViewChild } from '@angular/core';
import { Item } from '../dto/Item';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-detalhamento-interno',
  templateUrl: './detalhamento-interno.component.html',
  styleUrls: ['./detalhamento-interno.component.css']
})
export class DetalhamentoInternoComponent {
  displayedColumns: string[] = ['descricao', 'quantidade', 'valor_unitario', 'fornecedor', 'tipo','total', 'settings'];
  
  @ViewChild(MatTable) table!: MatTable<Item>;


  dataSource : Item[] = [];

}
