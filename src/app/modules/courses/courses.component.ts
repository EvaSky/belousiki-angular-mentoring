import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { AppState } from '../../store';
import { CourseAction } from './models/course-action.enum';
import { CoursesDataService } from './services/courses-data.service';
import { Course } from './models/course';
import { Observable, Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { LoaderService } from '../../components/loader/services/loader.service';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {

    @Output() open: EventEmitter<Course> = new EventEmitter<Course>();

    public courses: Course[];
    public courses$: Observable<Course[]>;
    public displayedCourses: Course[] = [];
    private destroy$: Subject<boolean> = new Subject<boolean>();
    private start: number = 0;
    private count: number = 10;
    private searchInput = '';

    constructor(private coursesDataService: CoursesDataService,
                private loaderService: LoaderService,
                private store$: Store<AppState>) {
        this.courses$ = this.store$.select('courses');
    }

    ngOnInit() {
        this.store$.dispatch({type: CourseAction.GET_ALL_COURSES, payload: {start: this.start, count: this.count}});
        //this.retrieveAllCourses(this.start, this.count);
    }

    retrieveAllCourses(start, count) {
        this.loaderService.show();
        this.coursesDataService.getCourses(start, count)
            .pipe(takeUntil(this.destroy$),
                  finalize(() => this.loaderService.hide())
            )
            .subscribe((data: Course[]) => {
                this.courses = data;
                this.displayedCourses = start === 0 ?
                    this.courses : this.displayedCourses.concat(this.courses);
            });
    }

    deleteCourse(course: Course) {
        this.coursesDataService.removeCourse(course);
        this.retrieveAllCourses(this.start, this.count);
    }

    findCourses(searchInput, start?): void {
        this.loaderService.show();
        this.searchInput = searchInput;
        this.start = start || 0;
        this.coursesDataService.getCourses(this.start, this.count, searchInput)
            .pipe(takeUntil(this.destroy$),
                finalize(() => this.loaderService.hide()))
            .subscribe((data: Course[]) => {
                this.courses = data;
                this.displayedCourses = this.start === 0 ?
                    this.courses : this.displayedCourses.concat(this.courses);
            });
    }

    loadMore() {
        this.start++;
        if (this.searchInput){
            this.findCourses(this.searchInput, this.start);
        } else {
            this.retrieveAllCourses(this.start, this.count);
        }
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        // Now let's also unsubscribe from the subject itself:
        this.destroy$.unsubscribe();
    }
}
