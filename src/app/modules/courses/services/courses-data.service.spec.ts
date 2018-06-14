import { TestBed, inject } from '@angular/core/testing';

import { CoursesDataService } from './courses-data.service';

describe('CoursesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesDataService]
    });
  });

  it('should be created', inject([CoursesDataService], (service: CoursesDataService) => {
    expect(service).toBeTruthy();
  }));
});
