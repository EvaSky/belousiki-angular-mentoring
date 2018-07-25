import { Component, OnDestroy, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { CoursesDataService } from './services/courses-data.service';
import { Course } from './models/course';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SearchPipe } from './pipes/search.pipe';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy, OnChanges {

    @Output() open: EventEmitter<Course> = new EventEmitter<Course>();

    public courses: Course[];
    public displayedCourses: Course[];
    private _courseSub: Observable<Course[]>;
    private destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private coursesDataService: CoursesDataService,
        private searchPipe: SearchPipe) { }

    ngOnInit() {
        this.retrieveAllCourses();
    }

    ngOnChanges() {
        this.retrieveAllCourses();
    }

    retrieveAllCourses() {
        this.coursesDataService.getCourses()
            .pipe(takeUntil(this.destroy$))
            .subscribe(data => {
                this.courses = data;
                this.displayedCourses = [...this.courses];
            });
    }

    deleteCourse(course: Course) {
        this.coursesDataService.removeCourse(course);
        this.retrieveAllCourses();
    }

    findCourses(searchInput): void {
        this.displayedCourses = this.searchPipe.transform(this.courses, searchInput);
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        // Now let's also unsubscribe from the subject itself:
        this.destroy$.unsubscribe();
    }

}
