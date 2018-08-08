import { TestBed, inject } from '@angular/core/testing';

import { CoursesDataService } from './courses-data.service';
import { CoursesMock } from '../../../../mocks/courses-mock';

describe('CoursesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesDataService]
    });
  });

  it('should be created', inject([CoursesDataService], (service: CoursesDataService) => {
    expect(service).toBeTruthy();
  }));

  it('data should be got', inject([CoursesDataService], (service: CoursesDataService) => {
    service.getCourses(0, 10).subscribe(courses => {
      expect(courses).toBeTruthy();
      expect(courses).toEqual(CoursesMock);
    })
  })); 
});
