import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environment/environment";
import { Movie } from "../models/movie";
import { MovieDetails } from "../models/movie-details";

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private API_URL = 'https://api.themoviedb.org/3/movie/';

    constructor(private http: HttpClient){}

    public selectMovieDetails(id: number): Observable<MovieDetails>{
        const url = `${this.API_URL}${id}`;
        
        return this.http.get<any>(url, this.getAuthorization())
        .pipe(map((obj) => this.mapMovieDetails(obj)));
    }

    public mapMovieDetails(obj: any): MovieDetails{
        return new MovieDetails (
            obj.id,
            obj.title,
            obj.poster_path,
            obj.vote_count,
            obj.overview,
            obj.genres,
            obj.release_date,
            [],
            []
        );
    }

    public selectMoviesByList(listType: string, changedPage: number): Observable<Movie[]>{
        let type: string = '';

        switch(listType){
            case 'popular': type = 'popular'; break;
            case 'topRated': type = 'top_rated'; break;            
            case 'upcoming': type = 'upcoming'; break;
            case 'favorites': break;
        }

        const apiVariables = `?page=${changedPage}` //&language=pt-BR
        const url = this.API_URL + type + apiVariables;
        console.log(url);

        return this.http.get<any>(url, this.getAuthorization())
            .pipe(
                map((res) => res.results),
                map((obj) => this.MapMovies(obj))
            );
    }

    private MapMovies(objs: any[]): Movie[]{
        return objs.map((obj: any): Movie => {
            return new Movie(obj.id, obj.title, obj.poster_path)
        });
    }

    private getAuthorization(){
        return {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: environment.API_KEY
            }
        };
    }
}