import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[]=[
    new Quote('Steve Jobs', 'If you really look closely, most overnight successes took a long time.', 'Grace', '2020-08-23'),
    new Quote('Steve Jobs1', 'If you really look closely, most overnight successes took a long time.', 'Grace', '2020-08-23'),
    new Quote('Steve Jobs2', 'If you really look closely, most overnight successes took a long time.', 'Grace', '2020-08-23'),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
