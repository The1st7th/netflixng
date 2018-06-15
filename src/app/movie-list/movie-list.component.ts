import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  topmovies=this.getmovies();
  constructor(private http: Http) { }

  ngOnInit() {
    
  }
  getmovies(){
  this.http.get("https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=f509dad62270f06d7624a7de2b25b127").subscribe(response => {
    this.topmovies = response.json();
    console.log(this.topmovies);
});
  }
}
