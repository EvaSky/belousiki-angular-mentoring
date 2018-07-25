import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../../modules/courses/models/course';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {

  @Input() course: Course;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  courseModel: Course;
  
  constructor() { }

  ngOnInit() {
    this.courseModel = this.course || new Course();
  }
}
