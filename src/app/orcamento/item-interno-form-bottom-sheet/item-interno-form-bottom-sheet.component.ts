import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ItemInterno } from '../dto/ItemInterno';

@Component({
  selector: 'app-item-interno-form-bottom-sheet',
  templateUrl: './item-interno-form-bottom-sheet.component.html',
  styleUrls: ['./item-interno-form-bottom-sheet.component.css']
})
export class ItemInternoFormBottomSheetComponent {

  itemInternoForm = new FormGroup({
    id: new FormControl(uuidv4()),
    descricao: new FormControl(''),
    quantidade: new FormControl(0),
    valor_unitario: new FormControl(0),
    fornecedor: new FormControl(''),
    tipo: new FormControl('')
  });


  @Output() itemToSend = new EventEmitter<ItemInterno>();

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<ItemInternoFormBottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) { };

  
  ngOnInit() {
    this.itemInternoForm.setValue({
      id: this.data.item.id,
      descricao: this.data.item.descricao,
      quantidade: this.data.item.quantidade,
      valor_unitario: this.data.item.valor_unitario,
      fornecedor: this.data.item.fornecedor,
      tipo: this.data.item.tipo
    });
  }

  sendToTable() {
    const formValues = this.itemInternoForm.value;
    const valorTotalItem = this.calTotalItem(formValues.valor_unitario ?? 0, formValues.quantidade ?? 0);

    const itemUpdated: ItemInterno = {
      id: formValues.id ?? uuidv4(),
      descricao: formValues.descricao ?? "Descrição Invalida",
      quantidade: Number(formValues.quantidade) ?? 0,
      valor_unitario: Number(formValues.valor_unitario) ?? 0,
      fornecedor: formValues.fornecedor ?? "Fornecedor Invalido",
      tipo: formValues.tipo ?? "Tipo Invalido",
      total: valorTotalItem
    }
    
    this.itemToSend.emit(itemUpdated);
    this._bottomSheetRef.dismiss();

  }
  
  calTotalItem(valor_unitario: number = 0, quantidade: number = 0) {
    return quantidade * valor_unitario;
  }
}
