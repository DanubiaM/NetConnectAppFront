import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-editar-item-bottom-sheet',
  templateUrl: './editar-item-bottom-sheet.component.html',
  styleUrls: ['./editar-item-bottom-sheet.component.css']
})
export class EditarItemBottomSheetComponent {

  constructor(private _bottomSheetRef: MatBottomSheetRef<EditarItemBottomSheetComponent>) {}
  
}
