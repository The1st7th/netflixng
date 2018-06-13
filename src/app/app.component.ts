import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  

  select(event){
    console.log(event);
    let nid : Number = event.path[1].id;
    let array: NodeListOf<Element> = document.getElementsByClassName("midicons");
    console.log(array);
    for(var i=0; i< array.length;i++){
      if( nid == parseInt(array[i].id)){
        array[i].lastElementChild.className = "text selected";
      }
      else{
        array[i].lastElementChild.className = "text nonselected";
      }
  }
}
}