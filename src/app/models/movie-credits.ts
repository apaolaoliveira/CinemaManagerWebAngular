export class MovieCredits{
    order: number;
    name: string;
    department: string;
    profile: string;
    character: string;

    constructor(
        order: number,
        name: string,
        department: string,
        profile: string,
        character: string
    ){
        this.order = order;
        this.name = name;
        this.department = department;
        this.profile = 'https://image.tmdb.org/t/p/original/' + profile;
        this.character = character;
    }
}