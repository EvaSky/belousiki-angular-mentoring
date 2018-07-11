import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../../../models/course';

@Component({
    selector: 'app-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

    @Input() course: Course = new Course();

    constructor() {
    }

    ngOnInit() {
    }

    edit() {
        console.log('edit');
    }

    delete() {
        console.log('delete');
    }

}
