import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Item } from '../dto/Item';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-item-form-bottom-sheet',
  templateUrl: './item-form-bottom-sheet.component.html',
  styleUrls: ['./item-form-bottom-sheet.component.css']
})
export class ItemFormBottomSheetComponent {

  itemForm = new FormGroup({
      id: new FormControl(uuidv4()),
      descricao: new FormControl(''),
      quantidade: new FormControl(0),
      valor_unitario: new FormControl(0),
      desconto: new FormControl(0),
  });

  @Output() itemToSend = new EventEmitter<Item>();

  constructor(private _bottomSheetRef: MatBottomSheetRef<ItemFormBottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {};

  ngOnInit() {
    this.itemForm.setValue({
      id: this.data.item.id,
      descricao: this.data.item.descricao,
      quantidade: this.data.item.quantidade,
      valor_unitario: this.data.item.valor_unitario,
      desconto: this.data.item.desconto
    });
  }
  
  sendToTable(){
    const formValues = this.itemForm.value;
    const valorTotalItem = this.calTotalItem(formValues.valor_unitario ?? 0, formValues.quantidade ?? 0, formValues.desconto ?? 0);
    
    const itemUpdated : Item = {
      id: formValues.id ?? uuidv4(),
      descricao : formValues.descricao ?? "Descrição Invalida",
      quantidade : Number(formValues.quantidade) ?? 0,
      valor_unitario : Number(formValues.valor_unitario) ?? 0,
      desconto: Number(formValues.desconto) ?? 0,
      total : valorTotalItem
    }

    this.itemToSend.emit(itemUpdated);
    this._bottomSheetRef.dismiss();
  
  }

  calTotalItem(valor_unitario: number = 0, quantidade: number = 0 , desconto: number = 0){
    return  quantidade * valor_unitario * (1- (desconto /100)) ;
  }

}
