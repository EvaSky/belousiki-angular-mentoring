import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseItemComponent } from './components/course-list/components/course-item/course-item.component';
import { SearchComponent } from './components/tool-bar/components/search/search.component';
import { CoursesDataService } from './services/courses-data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCourseModalComponent } from './components/course-list/components/course-item/components/edit-course-modal/edit-course-modal.component';
import { StatusCourseDirective } from './components/course-list/components/course-item/directives/status-course.directive';
import { DurationPipe } from './components/course-list/components/course-item/pipes/duration.pipe';
import { OrderByPipe } from './components/course-list/pipes/order-by.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        CoursesComponent
    ],
    declarations: [
        CoursesComponent,
        ToolBarComponent,
        CourseListComponent,
        CourseItemComponent,
        SearchComponent,
        EditCourseModalComponent,
        StatusCourseDirective,
        DurationPipe,
        OrderByPipe
    ],
    providers: [
        CoursesDataService,
        SearchPipe
    ]
})
export class CoursesModule {
}
