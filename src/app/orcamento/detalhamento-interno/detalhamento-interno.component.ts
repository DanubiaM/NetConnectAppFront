import { Component, Input, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ItemInterno } from '../dto/ItemInterno';
import { ItemInternoFormBottomSheetComponent } from '../item-interno-form-bottom-sheet/item-interno-form-bottom-sheet.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-detalhamento-interno',
  templateUrl: './detalhamento-interno.component.html',
  styleUrls: ['./detalhamento-interno.component.css']
})
export class DetalhamentoInternoComponent {
  displayedColumns: string[] = ['descricao', 'quantidade', 'valor_unitario', 'fornecedor', 'tipo', 'total', 'settings'];
  private _newItem!: ItemInterno;
  dataSource: ItemInterno[] = [];

  @ViewChild(MatTable) table!: MatTable<ItemInterno>;
  @Input() set newItem(value: ItemInterno) {
       
      if(value !== undefined) {
        this._newItem = value;
        this.openBottomSheet(this._newItem);
      }  
   
   }
  
  constructor(private _snackBar: MatSnackBar, private _bottomSheet: MatBottomSheet) {
  }

  openBottomSheet(itemToEdit: ItemInterno): void {
        
    const bottomSheetRef = this._bottomSheet.open(ItemInternoFormBottomSheetComponent, {
      data: {
        item: itemToEdit
      }
    });

    bottomSheetRef.instance.itemToSend.subscribe((updatedItem: ItemInterno) => {
      this.updateItem(updatedItem);
    });
  }
  updateTable(newRow: ItemInterno) {
    this.dataSource.push(newRow)
    this.table.renderRows();

  }

  deleteItem(id: string) {

    this.dataSource.filter((item, index) => {
      if (item.id == id) {
        this.dataSource.splice(index, 1)
      }
    })

    this.table.renderRows();
    this.openSnackBar("Item removido com sucesso!")
  }

  openSnackBar(mensagem: string) {
    this._snackBar.open(mensagem, "✔️", { duration: 5000 });
  }

  updateItem(updatedItem: ItemInterno) {

    this.dataSource.forEach((item, index) => {
      if (item.id === updatedItem.id) {
        this.dataSource.splice(index, 1);
      }
    });

    this.updateTable(updatedItem);

    this.openSnackBar("Item " + updatedItem.descricao + " atualizado com sucesso!")
  }

}
