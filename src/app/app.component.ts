import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  that =this;
  lists= this.find();
  value;
  
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
  console.log(this);
  }
  
  find(){  
  var lists;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === this.DONE) {
      var listmovies= JSON.parse(this.responseText);
      lists = listmovies.results;
      console.log(lists);
      window.sessionStorage.setItem =lists;
      

    }
  }
  xhr.open("GET", "https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=f509dad62270f06d7624a7de2b25b127");
  xhr.send();

}
}