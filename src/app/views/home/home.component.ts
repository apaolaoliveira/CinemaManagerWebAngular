import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  launchMovies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.selectPopularMovies().subscribe((res) => this.popularMovies = res);
    this.movieService.selectTopRatedMovies().subscribe((res) => this.launchMovies = res);
  }
}
