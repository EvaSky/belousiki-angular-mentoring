import { ICourse } from './course.interface';

export class Course implements ICourse {
    creationDate: Date;
    description: string;
    duration: number;
    id: string;
    title: string;
}
