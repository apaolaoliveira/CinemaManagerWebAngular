import { Component, Input, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/models/movie-details';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  isFavorite: boolean = false;
  movie: MovieDetails | undefined;

  constructor(private movieService: MovieService){

  }

  ngOnInit(): void {
    this.movieService.selectMovieDetails(5).subscribe((res) => {
      this.movie = res;
    });
  }
}
