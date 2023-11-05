import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bar-top',
  templateUrl: './bar-top.component.html',
  styleUrls: ['./bar-top.component.css']
})
export class BarTopComponent {


  @Output() emitterMenu = new EventEmitter();
  

  toggleMenu(){
 
    this.emitterMenu.emit();
  }
}
