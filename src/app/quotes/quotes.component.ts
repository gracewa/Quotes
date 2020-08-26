import { Component, Input, Output, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[]=[
    new Quote('Steve Jobs', 'If you really look closely, most overnight successes took a long time.', 'Grace', '2020-08-23'),
    new Quote('Wangari Maathai','Mother Nature is very generous but very unforgiving' , 'Mercy', '2020-08-18'),
    new Quote('Unknown', 'No one is coming to save you, plan accordingly', 'Diana', '2020-08-16'),

  ];

  toggleNew(index){
    this.quotes[index].showNew=!this.quotes[index].showNew
  }



  deleteQuote(isDelete, index){
    if (isDelete) {
      this.quotes.splice(index,1)
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
