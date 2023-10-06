import { MovieCredits } from "./movie-credits";
import { MovieTrailer } from "./movie-trailer";

export class MovieDetails {
    id: string;
    title: string;
    poster: string;
    votes: number;
    overview: string;
    genres: string[];
    launch: string;

    trailers: MovieTrailer[] = [];
    credits: MovieCredits[] = [];

    constructor(
        id: string, 
        title: string,
        poster: string,
        votes: number,
        overview: string,
        genres: string[],
        launch: string,
        trailers: MovieTrailer[],
        credits: MovieCredits[]
    ){
        this.id = id;
        this.title = title;
        this.poster = 'https://image.tmdb.org/t/p/original/' + poster;
        this.votes = votes;
        this.overview = overview;
        this.genres = genres?.map((g: any) => g.name)!;
        this.launch = launch.slice(0, 4);
        this.trailers = trailers;
        this.credits = credits;
    }
}