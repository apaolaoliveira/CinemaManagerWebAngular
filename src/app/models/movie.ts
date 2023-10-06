export class Movie {
    id: number;
    title: string;
    poster: string;

    constructor(id: number, title: string, poster: string){
        this.id = id;
        this.title = title;
        this.poster = 'https://image.tmdb.org/t/p/original/' + poster;
    }
}
