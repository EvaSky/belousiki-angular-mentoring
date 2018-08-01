import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseItemComponent } from './components/course-list/components/course-item/course-item.component';
import { SearchComponent } from './components/tool-bar/components/search/search.component';
import { CoursesDataService } from './services/courses-data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusCourseDirective } from './components/course-list/components/course-item/directives/status-course.directive';
import { DurationPipe } from './components/course-list/components/course-item/pipes/duration.pipe';
import { OrderByPipe } from './components/course-list/pipes/order-by.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbsModule } from '../../components/breadcrumbs/breadcrumbs.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbModule,
        BreadcrumbsModule
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
        StatusCourseDirective,
        DurationPipe,
        OrderByPipe,
        SearchPipe
    ],
    providers: [
        CoursesDataService,
        SearchPipe
    ]
})
export class CoursesModule {
}
