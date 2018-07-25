import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../../../models/course';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {

    @Input() course: Course = new Course();
    @Output() deleteCourse: EventEmitter<Course> = new EventEmitter<Course>();
    @Output() editCourse: EventEmitter<Course> = new EventEmitter<Course>();

    constructor(private modalService: NgbModal) {
    }

    ngOnInit() {
    }

    edit() {
       this.editCourse.emit(this.course);
    }

    delete(content) {
        console.log('delete');
        this.modalService.open(content)
        .result.then(() => {
            this.deleteCourse.emit(this.course);
          }, () => {
            console.log('close');
          });
    }

}
