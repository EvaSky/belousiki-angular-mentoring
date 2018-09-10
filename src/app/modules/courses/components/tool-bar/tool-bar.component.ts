import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tool-bar',
    templateUrl: './tool-bar.component.html',
    styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent {

    @Output() searchAction: EventEmitter<string> = new EventEmitter();

    constructor(private router: Router) {
    }

    doSearch(searchInput) {
        this.searchAction.emit(searchInput);
    }

    openAddCourse() {
        this.router.navigate(['/courses/new']);
    }

}
