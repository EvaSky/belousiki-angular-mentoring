import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../../models/course';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

    @Input() course: Course = new Course();
    @Output() deleteCourse: EventEmitter<Course> = new EventEmitter<Course>();

    constructor(private modalService: NgbModal) {
    }

    ngOnInit() {
    }

    edit() {
        console.log('edit');
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
