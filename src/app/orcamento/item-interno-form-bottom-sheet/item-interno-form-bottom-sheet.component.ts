import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {v4 as uuidv4} from 'uuid';
import { Item } from '../dto/Item';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ItemFormBottomSheetComponent } from '../item-form-bottom-sheet/item-form-bottom-sheet.component';

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
    tipo: new FormControl(''),
    desconto: new FormControl(0),
});

   constructor(private _bottomSheetRef: MatBottomSheetRef<ItemFormBottomSheetComponent>,
     @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
   ) {};
 
  sendToTable(){
    const formValues = this.itemInternoForm.value;
    const valorTotalItem = this.calTotalItem(formValues.valor_unitario ?? 0, formValues.quantidade ?? 0, formValues.desconto ?? 0);
    
    const itemUpdated : Item = {
      id: formValues.id ?? uuidv4(),
      descricao : formValues.descricao ?? "Descrição Invalida",
      quantidade : Number(formValues.quantidade) ?? 0,
      valor_unitario : Number(formValues.valor_unitario) ?? 0,
      desconto: Number(formValues.desconto) ?? 0,
      total : valorTotalItem
    }

    // this.itemToSend.emit(itemUpdated);
    this._bottomSheetRef.dismiss();
  
  }

  calTotalItem(valor_unitario: number = 0, quantidade: number = 0 , desconto: number = 0){
    return  quantidade * valor_unitario * (1- (desconto /100)) ;
  }
}
