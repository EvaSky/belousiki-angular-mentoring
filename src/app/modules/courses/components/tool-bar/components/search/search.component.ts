import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    @Output() search: EventEmitter<string> = new EventEmitter();

    searchForm: FormGroup;

    constructor() {
    }

    ngOnInit() {
        this.searchForm = new FormGroup({
            search: new FormControl('')
        });
    }

    onSearch(): void {
        console.log('search: ' + this.searchForm.value.search);
        this.search.emit(this.searchForm.value.search);
    }

}
