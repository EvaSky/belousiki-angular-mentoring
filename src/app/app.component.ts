import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/auth/services/auth.service';
import { Course } from './modules/courses/models/course';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: User;

  isAddCoursePageOpen: boolean;
  editedCourse: Course;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if (this.isAuthenticated()) {
      this.authService.getUserInfo()
        .subscribe(user => this.user = user);
    }
  }

  private isAuthenticated(): boolean {
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
