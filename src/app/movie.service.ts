import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MovieService {
  favoritemovies: FirebaseListObservable<any[]>;
  constructor(private database:AngularFireDatabase) { 
    this.favoritemovies=database.list('favorite');
  }
   
  addfavorite(newfav:Movie){
     this.favoritemovies.push(newfav);
   }
}
