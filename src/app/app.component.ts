import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  showNew:boolean=false

  toggleNew(){
    this.showNew=!this.showNew
  }

}
