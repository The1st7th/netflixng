import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-mid',
  templateUrl: './main-mid.component.html',
  styleUrls: ['./main-mid.component.css']
})
export class MainMidComponent implements OnInit {
  nid:Number=1;
  constructor() { }

  ngOnInit() {
  }
  select(event){
    
    this.nid = event.path[1].id;
    console.log(this.nid);
    let array: NodeListOf<Element> = document.getElementsByClassName("midicons");
    console.log(array);
    for(var i=0; i< array.length;i++){
      if( this.nid == parseInt(array[i].id)){
        array[i].lastElementChild.className = "text selected";
      }
      else{
        array[i].lastElementChild.className = "text nonselected";
      }
  }
  // console.log(this);
  }
}
