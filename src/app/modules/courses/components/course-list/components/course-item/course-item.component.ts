import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../../../models/course';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
    selector: 'app-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {

    @Input() course: Course = new Course();
    @Output() deleteCourse: EventEmitter<Course> = new EventEmitter<Course>();

    constructor(private modalService: NgbModal,
                private router: Router) {
    }

    ngOnInit() {
    }

    edit() {
        this.router.navigate(['/courses', this.course.id]);
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
