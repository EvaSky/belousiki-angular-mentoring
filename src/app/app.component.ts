import { Component } from '@angular/core';
import { AuthService } from './modules/auth/services/auth.service';
import { Course } from './modules/courses/models/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isAddCoursePageOpen: boolean;
  editedCourse: Course;

  constructor(private authService: AuthService) {}

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  openAddCoursePage(course: Course) {
    this.editedCourse = course;
    this.isAddCoursePageOpen = true;
  }

  close() {
    this.isAddCoursePageOpen = false;
  }

}
