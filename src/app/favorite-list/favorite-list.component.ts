import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../movie.model';
import {MovieService} from '../movie.service'
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css'],
  providers:[MovieService]
})
export class FavoriteListComponent implements OnInit {
  selected = null;
  fm:FirebaseListObservable<any[]>;
  constructor(private movieservice: MovieService) { }

  ngOnInit() {
    this.fm = this.movieservice.getfav();
    
  }
  deletefav(todelete){
    console.log(todelete);
    this.movieservice.deleteFav(todelete);
  }
  toupdate(movie){
    console.log(movie);
    this.selected = movie;
  }
}
