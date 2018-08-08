import { Component, OnDestroy, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { CoursesDataService } from './services/courses-data.service';
import { Course } from './models/course';
import { Observable, Subject, Subscription } from 'rxjs';
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
    public displayedCourses: Course[] = [];
    public isDisplayed: boolean;
    private _courseSub: Observable<Course[]>;
    private destroy$: Subject<boolean> = new Subject<boolean>();
    private start: number = 0;
    private count: number = 10;

    constructor(private coursesDataService: CoursesDataService,
        private searchPipe: SearchPipe) { }

    ngOnInit() {
        this.retrieveAllCourses(this.start, this.count);
    }

    ngOnChanges() {
        this.retrieveAllCourses(this.start, this.count);
    }

    retrieveAllCourses(start, count) {

        this.coursesDataService.getCourses(start, count)
            .pipe(takeUntil(this.destroy$))
            .subscribe(data => {
                this.courses = data;
                this.displayedCourses = this.displayedCourses.concat(this.courses);
                this.isDisplayed = true;
            });
    }

    deleteCourse(course: Course) {
        this.coursesDataService.removeCourse(course);
        this.retrieveAllCourses(this.start, this.count);
    }

    findCourses(searchInput): void {
        this.displayedCourses = this.searchPipe.transform(this.courses, searchInput);
    }

    loadMore() {
        this.start++;
        this.retrieveAllCourses(this.start, this.count);
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        // Now let's also unsubscribe from the subject itself:
        this.destroy$.unsubscribe();
    }

}
