import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../../modules/courses/models/course';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CoursesDataService } from '../../modules/courses/services/courses-data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {

  courseModel: Course;
  
  constructor( private route: ActivatedRoute,
              private router: Router,
              private coursesDataService: CoursesDataService) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      map((params: ParamMap) =>
        this.coursesDataService.getCourseById(params.get('id'))
    ))
    .subscribe(retrievedCourse => {
      const course = retrievedCourse;
      this.courseModel = course || new Course();
    });
  }

  save() {
    console.log(this.courseModel);
    if (this.courseModel.id) {
      this.coursesDataService.updateCourse(this.courseModel);
    } else {
      this.coursesDataService.addCourse(this.courseModel);
    }
    this.router.navigate(['/courses']);
  }

  close() {
    this.router.navigate(['/courses']);
  }
}
