import { OrcamentoService } from './../orcamento.service';
import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Item } from '../dto/Item';
import { MatTable } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ItemFormBottomSheetComponent } from '../item-form-bottom-sheet/item-form-bottom-sheet.component';
import {v4 as uuidv4} from 'uuid';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-detalhamento-externo',
  templateUrl: './detalhamento-externo.component.html',
  styleUrls: ['./detalhamento-externo.component.css']
})
export class DetalhamentoExternoComponent implements OnInit  {
  displayedColumns: string[] = ['descricao', 'quantidade', 'valor_unitario',  'desconto', 'total', 'settings'];
  dataSource : Item[] = [];
  totalOrcamentoSemDesconto : number = 0;
  private _totalOrcamento : number = 0;
  totalDesconto : number = 0;
  qtdItens : number = 0;
  observacoes = new FormControl('');
  tipoDesconto = new FormControl('%');
  valorDesconto = new FormControl(0);

  @ViewChild(MatTable) table!: MatTable<Item>;
 
  constructor( 
    private _snackBar: MatSnackBar, 
    private _bottomSheet: MatBottomSheet,
    private orcamentoService: OrcamentoService) 
  {
  }
  
  get totalOrcamento(): number {
    return this._totalOrcamento;
  }

  set totalOrcamento(valor: number) {
    this._totalOrcamento = valor;
    this.orcamentoService.setTotalOrcamento(valor);
  }

  ngOnInit() {
    this.tipoDesconto.valueChanges.subscribe(valor => {    
      this.calcularDesconto();
    });

    this.valorDesconto.valueChanges.subscribe(valor => {
      this.calcularDesconto();
    });

  }
 
  deleteItem(id: string){

    this.dataSource.filter((item,index) => {
      if(item.id == id){
        this.dataSource.splice(index,1)
        this.totalOrcamentoSemDesconto -= item.total;
      }
    })
    this.calcularDesconto()
    this.table.renderRows();
    this.openSnackBar("Item removido com sucesso!")
  }

  sendItemToInternDetail(item: Item){
    this.orcamentoService.sendItem(item);
    this.openSnackBar("Item adicionado ao detalhamento interno!")
  }

  editItem(item: Item){
    this.openBottomSheet(item);
  }

  createNewItem() {
    var newItem: Item = {
      id: uuidv4(),
      descricao: "",
      quantidade: 0,
      valor_unitario: 0,
      desconto: 0,
      total: 0
    };

    this.openBottomSheet(newItem)
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

  updateItem(updatedItem: Item) {
    this.totalOrcamentoSemDesconto += updatedItem.total;

    this.dataSource.forEach( (item, index) => {
      if(item.id === updatedItem.id){
        this.dataSource.splice(index,1);
        this.totalOrcamentoSemDesconto -= item.total;
      }
    });

    this.calcularDesconto()
    this.updateTable(updatedItem);

  }

  updateTable(newRow: Item){
    this.dataSource.push(newRow)
    this.qtdItens = this.dataSource.length;
    this.table.renderRows();
    this.openSnackBar("Tabela atualizado com sucesso!")
  }

  openSnackBar(mensagem: string ) {
    this._snackBar.open(mensagem, "✔️",{ duration: 5000});
  }

  calcularDesconto(){

    var tipo : string = this.tipoDesconto.value ? this.tipoDesconto.value : '%';
    var valorDesconto : number = this.valorDesconto.value ? this.valorDesconto.value : 0;

    if (tipo == '%') {
      this.totalDesconto = this.totalOrcamentoSemDesconto * (valorDesconto / 100);
      this.totalOrcamento = this.totalOrcamentoSemDesconto - this.totalDesconto;
    }

    if (tipo == 'R$') {
      this.totalDesconto = valorDesconto;
      this.totalOrcamento = this.totalOrcamentoSemDesconto - valorDesconto;
    }
  }
 
}
