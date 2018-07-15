import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(courses: Course[], searchInput: string): Course[] {
    return courses.filter(course => course.title.toLowerCase().includes(searchInput.toLowerCase()));
  }

}
