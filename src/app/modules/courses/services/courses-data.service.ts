import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { CoursesMock } from '../../../../mocks/courses-mock';
import { Observable, of } from 'rxjs';

@Injectable()
export class CoursesDataService {

    courses: Course[] = CoursesMock;

    constructor() { }

    public getCourses(): Observable<Course[]> {
        return of(this.courses);
    }

    public addCourse(course: Course): void {
        this.courses.push(course);
    }

    public getCourseById(id: string): Course {
        return this.courses.find(course => course.id === id);
    }

    public updateCourse(course: Course) {
        this.removeCourse(this.getCourseById(course.id));
        this.addCourse(course);
    }

    public removeCourse(course: Course) {
        const index = this.courses.indexOf(course);
        if (index > -1) {
            this.courses.splice(index, 1);
        }
        console.log(this.courses);
    }

}
