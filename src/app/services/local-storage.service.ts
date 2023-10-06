import { Injectable } from "@angular/core";
import { Movie } from "../models/movie";

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService{
    private localStorage: Storage;
    private key: string = "cinemaManagerAngular_favorites";

    private favorites: Movie[] = [];

    constructor(){
        this.localStorage = window.localStorage;
        this.favorites = this.getFavorites();
    }

    public favoriteMovie(movie: Movie): void {
        if(this.favorites.find((f) => f.id == movie.id)) return;

        this.favorites.push(movie);
        this.save();
    }

    public unfavoriteMovie(id: number): void {
        this.favorites = this.favorites.filter((m) => m.id != id);
        this.save();
    }

    private getFavorites(): Movie[]{
        const data = this.localStorage.getItem(this.key);

        if(!data) return [];

        const objs = JSON.parse(data);

        const movies = new Array<Movie>();

        for (const obj of objs){
            movies.push(new Movie(obj.id, obj.title, obj.poster));
        }

        return movies;
    }

    public selectMovieById(id: number): Movie | undefined {
        return this.favorites.find((i) => i.id == id);
    }

    private save(){
        const favoritesStringJson = JSON.stringify(this.favorites);
        this.localStorage.setItem(this.key, favoritesStringJson);
    }
}