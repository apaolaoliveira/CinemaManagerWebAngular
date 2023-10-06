export class Movie {
    id: string;
    title: string;
    poster: string;

    // listType: Lists;

    constructor(id: string, title: string, poster: string){
        this.id = id;
        this.title = title;
        this.poster = 'https://image.tmdb.org/t/p/original/' + poster;
    }
}
