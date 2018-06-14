import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseItemComponent } from './components/course-list/components/course-item/course-item.component';
import { SearchComponent } from './components/tool-bar/components/search/search.component';
import { CoursesDataService } from './services/courses-data.service';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CoursesComponent
    ],
    declarations: [
        CoursesComponent,
        ToolBarComponent,
        CourseListComponent,
        CourseItemComponent,
        SearchComponent
    ],
    providers: [
        CoursesDataService
    ]
})
export class CoursesModule {
}
