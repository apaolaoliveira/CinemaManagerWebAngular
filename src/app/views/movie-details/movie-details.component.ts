import { Component, Input } from '@angular/core';
import { movieDetails } from 'src/app/models/movie-details';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
toggleFavorite(arg0: movieDetails) {
throw new Error('Method not implemented.');
}
  @Input() movie: movieDetails = {
    id: '',
    title: '',
    genres: [],
    overview: '',
    poster: '',
    trailer: '',
    launch: '',
    votes: 0
  }

  isFavorite: boolean = false;
}
