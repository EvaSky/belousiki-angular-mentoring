import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { SearchComponent } from './components/tool-bar/components/search/search.component';
import { CourseItemComponent } from './components/course-list/components/course-item/course-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesDataService } from './services/courses-data.service';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ 
        CoursesComponent, 
        ToolBarComponent, 
        CourseListComponent, 
        CourseItemComponent,
        SearchComponent
      ],
      providers: [ CoursesDataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
