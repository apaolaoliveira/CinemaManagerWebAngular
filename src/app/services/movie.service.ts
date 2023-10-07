import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environment/environment";
import { Movie } from "../models/movie";
import { MovieDetails } from "../models/movie-details";
import { MovieTrailer } from "../models/movie-trailer";
import { MovieCredits } from "../models/movie-credits";

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private API_URL = 'https://api.themoviedb.org/3/movie/';

    constructor(private http: HttpClient){}

    public selectMovieDetails(id: number): Observable<MovieDetails>{
        const url = `${this.API_URL}${id}?append_to_response=videos,credits`;
        
        return this.http
            .get<any>(url, this.getAuthorization())
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
            this.mapMovieTrailer(obj.videos.results),
            this.mapMovieCredits(obj.credits.crew.concat(obj.credits.cast))
        );
    }

    private mapMovieTrailer(objs: any[]): MovieTrailer[]{
        return objs.map((obj) => {
            return new MovieTrailer(obj.id, obj.key);
        });
    }

    private mapMovieCredits(objs: any[]): MovieCredits[]{
        const uniqueCreditsSet = new Set(objs.map(obj => obj.name)); 

        const uniqueCreditsArray = Array.from(uniqueCreditsSet);

        return uniqueCreditsArray.map(name => {
            const matchingObj = objs.find(obj => obj.name === name);

            return new MovieCredits(
                matchingObj.order,
                matchingObj.name,
                matchingObj.known_for_department,
                matchingObj.profile_path,
                matchingObj.character
            );
        });
    }

    public selectMoviesByList(listType: string, changedPage: number): Observable<Movie[]>{
        let type: string = '';

        switch(listType){
            case 'popular': type = 'popular'; break;
            case 'topRated': type = 'top_rated'; break;            
            case 'upcoming': type = 'upcoming'; break;
        }

        const apiVariables = type + `?page=${changedPage}`;

        const url = this.API_URL + apiVariables;

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