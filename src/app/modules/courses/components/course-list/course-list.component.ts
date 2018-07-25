import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../../models/course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

    @Input() courses: Course[];
    @Output() delete: EventEmitter<Course> = new EventEmitter<Course>();
    @Output() edit: EventEmitter<Course> = new EventEmitter<Course>();

    constructor() { }

    ngOnInit() {
    }

    doDelete(course: Course) {
        this.delete.emit(course);
    }

    doEdit(course: Course) {
        this.edit.emit(course);
    }

}
