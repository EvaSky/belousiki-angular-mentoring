import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { CoursesMock } from '../../../../mocks/courses-mock';
import { Observable, of } from 'rxjs';

@Injectable()
export class CoursesDataService {

  constructor() { }

  public getCourses(): Observable<Course[]> {
    return of(CoursesMock);
  }
}
