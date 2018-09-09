import { Action } from '@ngrx/store';
import { Course } from './models/course';
import { CourseAction } from './models/course-action.enum';

export function coursesReducer(state: Course[] = [], action: Action) {
    console.log(action.type, state);

    switch (action.type) {
        case CourseAction.GET_ALL_COURSES: {
            const start = action.payload.start;
            const count = action.payload.count;
            this.coursesDataService.getCourses(start, count)
                .subscribe((data: Course[]) => {
                    this.courses = data;
                    this.displayedCourses = start === 0 ?
                      this.courses : this.displayedCourses.concat(this.courses);
                    return this.displayedCourses;
                });
        }

        case CourseAction.FIND_COURSES:
            return [];

        default:
          return state;

    }
}
