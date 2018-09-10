import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

    courseModel: Course = new Course();
    currentPage: string;
    courseForm: FormGroup;

    constructor( private route: ActivatedRoute,
                private router: Router,
                private formBuilder: FormBuilder,
                private coursesDataService: CoursesDataService) { }

    ngOnInit() {
        this.createForm();
        this.route.paramMap
        .subscribe((params: ParamMap) => {
            if (params.get('id')) {
                this.coursesDataService.getCourseById(params.get('id'))
                .subscribe(retrievedCourse => {
                  this.courseModel = retrievedCourse || this.courseModel;
                  this.currentPage = this.courseModel.name || 'Add new course';
                });
            } else {
                this.currentPage = 'Add new course';
            }
        });
    }

    createForm() {
        this.courseForm = this.formBuilder.group({
            name: new FormControl(this.courseModel.name,
              [Validators.required, Validators.maxLength(50)]),
            description: new FormControl(this.courseModel.description,
              [Validators.required, Validators.maxLength(500)]),
            creationDate: new FormControl(this.courseModel.creationDate),
            duration: new FormControl(this.courseModel.length),
            authors: new FormControl('')
        });
    }

    save() {
        this.populateCourseModel(this.courseForm.value);
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

    private populateCourseModel(course: any) {
        this.courseModel.name = course.name;
        this.courseModel.description = course.description;
        this.courseModel.creationDate = course.creationDate;
        this.courseModel.length = course.duration;
        this.courseModel.authors = course.authors;
    }
}
