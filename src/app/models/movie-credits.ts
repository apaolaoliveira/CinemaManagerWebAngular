export class MovieCredits{
    order: number;
    name: string;
    department: string;
    picture: string;
    role: string;

    constructor(
        order: number,
        name: string,
        department: string,
        picture: string,
        role: string
    ){
        this.order = order;
        this.name = name;
        this.department = department;
        this.picture = 'https://image.tmdb.org/t/p/original/' + picture;
        this.role = role;
    }
}