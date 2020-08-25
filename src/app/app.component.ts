import { Component } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quoteModel = new Quote('Steve Jobs', 'If you really look closely, most overnight successes took a long time.', 'Grace', '2020-8-22')

}
