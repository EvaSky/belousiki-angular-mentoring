import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../../models/course';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tool-bar',
    templateUrl: './tool-bar.component.html',
    styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

    @Output() search: EventEmitter<string> = new EventEmitter();

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    doSearch(searchInput) {
        this.search.emit(searchInput);
    }

    openAddCourse() {
        this.router.navigate(['/courses/new']);
    }

}
