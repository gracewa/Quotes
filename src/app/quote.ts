export class Quote {
  showNew:boolean;
  constructor(
    public author: string,
    public quote: string,
    public submitter: string,
    public date: string
  ){
    this.showNew=false;
  }
}
