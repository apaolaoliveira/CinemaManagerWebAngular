export class Movie {
    id: string;
    title: string;
    overview: string;
    poster: string;

    listType: Lists;

    constructor(id: string, title: string, overview: string, poster: string, listType: Lists){
        this.id = id;
        this.title = title;
        this.overview = overview;
        this.poster = poster;
        this.listType = listType;
    }
}

type Lists = 'Favorites' | 'Launches' | 'Trending' | 'Upcoming' | 'TopRated';