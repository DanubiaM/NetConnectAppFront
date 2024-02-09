import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.css']
})
export class CardDashboardComponent {

  @Input('valor') valor : string ='';
  @Input ('color-border-left') colorCorderLeft : string = '#c7c7c7';


}
