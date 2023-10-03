import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environment/environment";
import { Movie } from "../models/movie";

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private API_URL = 'https://api.themoviedb.org/3/movie/';

    constructor(private http: HttpClient){}

    public selectPopularMovies(): Observable<Movie[]> {
        const url = this.API_URL + 'popular?language=pt-BR'

        return this.http.get<any>(url, this.getAuthorization())
            .pipe(
                map((res) => res.results),
                map((obj) => this.MapMovies(obj))
            );
    }

    public selectTopRatedMovies(): Observable<Movie[]>{
        const url = this.API_URL + 'top_rated?language=pt-BR'

        return this.http.get<any>(url, this.getAuthorization())
            .pipe(
                map((res) => res.results),
                map((obj) => this.MapMovies(obj))
            );
    }

    public selectMoviesByList(listType: string): Observable<Movie[]>{
        let type: string = '';

        switch(listType){
            case 'popular':
                type = 'popular?language=pt-BR';
                break;

            case 'topRated':
                type = 'top_rated?language=pt-BR';
                break;
            
            case 'upcoming':
                type = 'upcoming?language=pt-BR';
                break;

            case 'favorites':
                break;
        }

        const url = this.API_URL + type;
        return this.http.get<any>(url, this.getAuthorization())
            .pipe(
                map((res) => res.results),
                map((obj) => this.MapMovies(obj))
            );
    }

    private MapMovies(objs: any[]): Movie[]{
        return objs.map((obj: any): Movie => {
            return new Movie(obj.id, obj.title, obj.overview, obj.poster_path)
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