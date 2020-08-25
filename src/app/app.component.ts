import { Component } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quoteModel = new Quote('Steve Jobs', 'If you really look closely, most overnight successes took a long time.', 'Grace', '2020-8-22')

  public previousAuthor : string = "Steve Jobs"
  public previousQuote: string = "If you really look closely, most overnight successes took a long time."
  public previousSubmitter: string = "Grace"
  public previousDate: string = "25/08/2020"

  numberOfVotes : number = 0;

  upvoteButtonClick(){
    this.numberOfVotes++;
  }

  downvoteButtonClick(){
    this.numberOfVotes--;
  }
}
