import { ICourse } from './course.interface';

export class Course implements ICourse {
    creationDate: Date;
    description: string;
    length: number;
    id: string;
    name: string;
    isTopRated?: boolean = false;

    constructor(course) {
        this.creationDate = new Date(course.date);
        this.description = course.description;
        this.length = course.length;
        this.id = course.id;
        this.name = course.name;
        this.isTopRated = course.isTopRated;
    }
}
