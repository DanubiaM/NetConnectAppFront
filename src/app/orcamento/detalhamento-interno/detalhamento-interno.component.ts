import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ItemInterno } from '../dto/ItemInterno';
import { ItemInternoFormBottomSheetComponent } from '../item-interno-form-bottom-sheet/item-interno-form-bottom-sheet.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { v4 as uuidv4 } from 'uuid';
import { OrcamentoService } from '../orcamento.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-detalhamento-interno',
  templateUrl: './detalhamento-interno.component.html',
  styleUrls: ['./detalhamento-interno.component.css']
})
export class DetalhamentoInternoComponent implements OnInit {
  displayedColumns: string[] = ['descricao', 'quantidade', 'valor_unitario', 'fornecedor', 'tipo', 'total', 'settings'];
  dataSource: ItemInterno[] = [];
  totalOrcamento: number = 0;
  totalOrcamentoComDesconto: number = 0;
  totalDesconto: number = 0;
  qtdItens: number = 0;
  observacoes = new FormControl('');
  tipoDesconto = new FormControl('%');
  valorDesconto = new FormControl(0);

  @ViewChild(MatTable) table!: MatTable<ItemInterno>;

  constructor(
    private _snackBar: MatSnackBar,
    private _bottomSheet: MatBottomSheet,
    private orcamentoService: OrcamentoService) {
  }

  ngOnInit() {
    this.orcamentoService.itemToSend.subscribe(data => {

      var newItem = {
        id: uuidv4(),
        descricao: data.descricao,
        quantidade: data.quantidade,
        valor_unitario: data.valor_unitario,
        fornecedor: '',
        tipo: '',
        total: data.total
      }

      this.updateTable(newItem);

    });
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

  createNewItem() {
    var newItem: ItemInterno = {
      id: uuidv4(),
      descricao: '',
      quantidade: 0,
      valor_unitario: 0,
      fornecedor: '',
      tipo: '',
      total: 0
    }

    this.openBottomSheet(newItem)
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
