import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  urlTrailer: SafeResourceUrl | undefined;

  constructor(private movieService: MovieService, private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    this.movieService.selectMovieDetails(5).subscribe((res) => {
      this.movie = res;
      this.urlTrailer = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailers[0].source);
    });
  }
}
