import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  dropDownContent : any = [
    {
      id : 1,
      text : "Organization Structure",
      icon : 'home'
    },
    {
      id : 2,
      text : "Configurations",
      icon : ''

    },
    {
      id : 3,
      text : "Reports",
      icon : ''

    },
    {
      id : 4,
      text : "ETL",
      icon : ''

    }
  ]
    
  

}
