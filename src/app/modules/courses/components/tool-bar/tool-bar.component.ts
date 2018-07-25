import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../../models/course';

@Component({
    selector: 'app-tool-bar',
    templateUrl: './tool-bar.component.html',
    styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

    @Output() search: EventEmitter<string> = new EventEmitter();
    @Output() openAddCourse: EventEmitter<Course> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    doSearch(searchInput) {
        this.search.emit(searchInput);
    }

}
