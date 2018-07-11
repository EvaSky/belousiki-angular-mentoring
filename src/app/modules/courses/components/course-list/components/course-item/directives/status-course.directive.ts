import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appStatusCourse]'
})
export class StatusCourseDirective implements OnInit {

  @Input() createdDate: Date;
  
  constructor(private el: ElementRef) {
    
  }

  ngOnInit() {
    this.defineStatus();
  }

  defineStatus() {
    const now = new Date();
    const twoWeeksBefore = new Date()
    twoWeeksBefore.setDate(twoWeeksBefore.getDate() - 14);
    if(this.createdDate < now && this.createdDate >= twoWeeksBefore ) {
      this.el.nativeElement.style.borderColor = 'green';
    } else if(this.createdDate > now) {
      this.el.nativeElement.style.borderColor = 'blue';
    }
  }

}
