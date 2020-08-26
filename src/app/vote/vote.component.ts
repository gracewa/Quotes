import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  numberOfVotes : number = 0;

  upvoteButtonClick(){
    this.numberOfVotes++;
  }

  downvoteButtonClick(){
    this.numberOfVotes--;

  }

  @Input() quote: Quote;
  @Output() isDelete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isDelete.emit(complete);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
