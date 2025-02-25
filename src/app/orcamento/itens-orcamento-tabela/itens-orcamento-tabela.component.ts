import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { Item } from '../dto/Item';
import { MatTable } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { EditarItemBottomSheetComponent } from '../editar-item-bottom-sheet/editar-item-bottom-sheet.component';

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

  constructor( private _snackBar: MatSnackBar, private _bottomSheet: MatBottomSheet) 
  {
  }
 
 get newItem(): Item {
    return this._newItem; 
 }

  updateTable(newRow: Item){
    console.log(newRow);
    this.dataSource.push(newRow)
    this.table.renderRows();

  }

  deleteItem(descricao: string){

    this.dataSource.filter((item,index) => {
      if(item.descricao == descricao){
        this.dataSource.splice(index,1)
      }
    })

    this.table.renderRows();
    this.openSnackBar("Item "+descricao+" removido com sucesso!")
  }

  sendItemToInternDetail(item: Item){
    console.log(item);
    
    this.openSnackBar("Item adicionado ao detalhamento interno!")

  }

  openSnackBar(mensagem: string ) {
    this._snackBar.open(mensagem, "✔️",{ duration: 5000});
  }

  openBottomSheet(): void {
    this._bottomSheet.open(EditarItemBottomSheetComponent);
  }
}
