import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav} from '@angular/material/sidenav';
import {CdkMenu, CdkMenuItem} from '@angular/cdk/menu';

@Component({
  selector: 'app-bar-side',
  templateUrl: './bar-side.component.html',
  styleUrls: ['./bar-side.component.css']
})
export class BarSideComponent {

  @Input("toggleMenu") openMenu: boolean = false;
  
  @ViewChild('sidenav')
  sidenav!: MatSidenav;


  toggleMenu(){
    console.log("MENUU")
    this.sidenav.toggle();
  }


}
