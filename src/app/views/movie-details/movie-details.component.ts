import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Movie } from 'src/app/models/movie';
import { MovieDetails } from 'src/app/models/movie-details';
import { LocalStorageService } from 'src/app/services/local-storage.service';
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

  constructor(
    private movieService: MovieService, 
    private localStorageService: LocalStorageService,
    private toastService: ToastrService,
    private sanitizer: DomSanitizer,
    private router: ActivatedRoute
    ){}

  ngOnInit(): void {
    const id = parseInt(this.router.snapshot.paramMap.get('id')!);

    if(!id) return;

    this.movieService.selectMovieDetails(id).subscribe((res) => {
      this.movie = res;
      this.urlTrailer = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailers[0].source);
      this.toggleFavorite();
    });
  }

  manageFavorite(){
    if(this.isFavorite){
      this.localStorageService.unfavoriteMovie(this.movie!.id);
      this.toastService.success(`"${this.movie!.title}" was removed from favorites`, 'Success');
    } else {
      this.localStorageService.favoriteMovie(this.movie!);
      this.toastService.success(`"${this.movie!.title}" was added to favorites`, 'Success')
    }

    this.toggleFavorite();
  }

  private toggleFavorite(){
    const favoriteFounded = this.localStorageService.selectMovieById(this.movie!.id);

    if(favoriteFounded){
      this.isFavorite = true;
    } else {
      this.isFavorite = false;
    }
  }
}
