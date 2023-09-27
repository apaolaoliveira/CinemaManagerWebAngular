export class movieDetails {
    id: string;
    title: string;
    poster: string;
    votes: number;
    overview: string;
    genres: string[];
    trailer: string;
    launch: string;

    constructor(
        id: string, 
        title: string,
        poster: string,
        votes: number,
        overview: string,
        genres: string[],
        trailer: string,
        launch: string
    ){
        this.id = id;
        this.title = title;
        this.poster = poster;
        this.votes = votes;
        this.overview = overview;
        this.genres = genres;
        this.trailer = trailer;
        this.launch = launch;
    }
}