export class Movie {
    id: string;
    title: string;
    overview: string;
    poster: string;

    // listType: Lists;

    constructor(id: string, title: string, overview: string, poster: string){
        this.id = id;
        this.title = title;
        this.overview = overview;
        this.poster = 'https://image.tmdb.org/t/p/original/' + poster;
    }
}

type Lists = 'Favorites' | 'TopRated' | 'Popular' | 'Upcoming' ;