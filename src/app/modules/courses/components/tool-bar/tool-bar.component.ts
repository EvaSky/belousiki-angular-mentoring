import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-tool-bar',
    templateUrl: './tool-bar.component.html',
    styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

    @Output() search: EventEmitter<string> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    add() {
        console.log('add course');
    }

    doSearch(searchInput) {
        this.search.emit(searchInput);
    }

}
