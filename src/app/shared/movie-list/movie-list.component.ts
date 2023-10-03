import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
    movies: Movie[] = [];

    @Input() listType: 'popular' | 'topRated' | 'upcoming' | 'favorites' = 'popular';

    constructor(private movieService: MovieService) {}

    ngOnInit(): void {
        this.movieService.selectMoviesByList(this.listType).subscribe((res) => this.movies = res);
    }
}
