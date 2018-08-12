import { ICourse } from './course.interface';

export class Course implements ICourse {
    creationDate: Date;
    description: string;
    length: number;
    id: string;
    name: string;
    isTopRated?: boolean = false;

    constructor(course?) {
        this.creationDate = course? new Date(course.date) : null;
        this.description = course? course.description : null;
        this.length = course? course.length : null;
        this.id = course? course.id : null;
        this.name = course? course.name : null;
        this.isTopRated = course? course.isTopRated : false;
    }
}
