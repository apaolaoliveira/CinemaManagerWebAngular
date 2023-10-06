export class MovieTrailer {
    id: number;
    source: string;

    constructor(id: number, source: string){
        this.id = id;
        this.source = 'https://www.youtube.com/embed/' + source;
    }
}