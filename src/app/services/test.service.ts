import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../models/movie";

@Injectable({
    providedIn: 'root'
})
export class TestService {
    private readonly API = 'https://api.themoviedb.org/3/movie';

    constructor(private http: HttpClient) {}

    // private selectMovies(url: string): Observable<Movie[]>{
    //     return this.http.get<any>()
    // }

    
}