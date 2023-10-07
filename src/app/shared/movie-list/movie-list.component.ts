import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit{
    page: number = 1;
    movies: Movie[] = [];

    @Input() listType: 'popular' | 'topRated' | 'upcoming' = 'popular';

    constructor(private movieService: MovieService) {}

    ngOnInit(): void {
        this.uploadPage(1);
    }

    uploadPage(changedPage: number){
        this.movieService.selectMoviesByList(this.listType, changedPage).subscribe((res) => this.movies = res);
    }
}
