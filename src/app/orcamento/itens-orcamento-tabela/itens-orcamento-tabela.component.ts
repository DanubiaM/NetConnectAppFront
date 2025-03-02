import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { Item } from '../dto/Item';
import { MatTable } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ItemFormBottomSheetComponent } from '../item-form-bottom-sheet/item-form-bottom-sheet.component';

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
      this.openBottomSheet(this._newItem);
    }  
 
 }

  constructor( private _snackBar: MatSnackBar, private _bottomSheet: MatBottomSheet) 
  {
  }
 
 get newItem(): Item {
    return this._newItem; 
 }

  updateTable(newRow: Item){
    this.dataSource.push(newRow)
    this.table.renderRows();

  }

  deleteItem(id: string){

    this.dataSource.filter((item,index) => {
      if(item.id == id){
        this.dataSource.splice(index,1)
      }
    })

    this.table.renderRows();
    this.openSnackBar("Item removido com sucesso!")
  }

  sendItemToInternDetail(item: Item){
    
    this.openSnackBar("Item adicionado ao detalhamento interno!")
  }

  openSnackBar(mensagem: string ) {
    this._snackBar.open(mensagem, "✔️",{ duration: 5000});
  }

  openBottomSheet(itemToEdit: Item): void {
   
    const bottomSheetRef = this._bottomSheet.open(ItemFormBottomSheetComponent,{
      data:{
        item: itemToEdit
      }
    });

    bottomSheetRef.instance.itemToSend.subscribe((updatedItem: Item) => {
      this.updateItem(updatedItem);
   });
  }

  updateItem(updatedItem: Item){
    this.dataSource.forEach( (item, index) => {
      if(item.id === updatedItem.id){
        this.dataSource.splice(index,1);
      }
    });
    this.updateTable(updatedItem);

    this.openSnackBar("Item "+ updatedItem.descricao + " Atualizado com sucesso!")
  }
}
