import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { CoursesMock } from '../../../../mocks/courses-mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CoursesDataService {

    readonly baseUrl = `http://localhost:3004/courses`;

    courses: Course[] = CoursesMock;

    constructor(private http: HttpClient) { }

    public getCourses(start, count, searchInput = ''): Observable<Course[]> {
        return this.http.get<Array<any>>(this.baseUrl, {params: {textFragment : `${searchInput}`,
        start: `${start}`, count: `${count}`}})
                .pipe(map(courses => {
                    return courses.map(course => new Course(course));
                }));
    }

    public addCourse(course: Course): void {
        this.courses.push(course);
    }

    public getCourseById(id: string):  Observable<Course> {
        //return this.courses.find(course => course.id === id);
        return this.http.get<any>(`${this.baseUrl}/${id}`)
                .pipe(map(course => new Course(course)));
    }

    public updateCourse(course: Course) {
        //this.removeCourse(this.getCourseById(course.id));
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
