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
  getfav(){
    return this.favoritemovies;
  }
  getmoviebyid(movieid: number)
  {
    return this.database.object('favorite/' + movieid);
  }
  deleteFav(todelete){
    var albumEntryInFirebase = this.getmoviebyid(todelete.$key);
    albumEntryInFirebase.remove();
  }
  updatefav(movie){
 var thisonetoupdate = this.getmoviebyid(movie.$key);
 thisonetoupdate.update({title: movie.title,
  poster: movie.poster,
  overview: movie.overview});
  }
}
