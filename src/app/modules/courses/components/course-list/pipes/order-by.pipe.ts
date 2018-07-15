import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../../models/course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: Course[], field: string): any {
    courses.sort((a: Course, b: Course) => {
      if (a[field] < b[field]) {
        return 1;
      } else if (a[field] > b[field]) {
        return -1;
      } else {
        return 0;
      }
    });
    return courses;
  }
}
