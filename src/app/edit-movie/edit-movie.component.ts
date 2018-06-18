import { Component, OnInit, Input } from '@angular/core';
import {MovieService} from '../movie.service'

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  @Input() selectedmovie;
  constructor(private movieservice: MovieService) { }

  ngOnInit() {
  }
updatemovie(movie){
  this.movieservice.updatefav(movie);
}
}
