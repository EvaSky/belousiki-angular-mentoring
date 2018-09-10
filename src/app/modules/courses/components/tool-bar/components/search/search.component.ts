import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

    @Output() searchAction: EventEmitter<string> = new EventEmitter();

    searchForm: FormGroup;
    subscriptions: Subscription[] = [];

    constructor() {
    }

    ngOnInit(): void {
        this.searchForm = new FormGroup({
            search: new FormControl('')
        });
        this.subscriptions.push(this.searchForm.valueChanges
            .pipe(debounceTime(500),
                switchMap(value => {
                    return Observable.create((observer) => {
                        if (value && value.search) {
                            observer.next(value.search);
                        }
                    });
                }))
            .subscribe((searchInput: string) => {
                if (searchInput.length >= 3) {
                    this.searchAction.emit(searchInput);
                }
            }));
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    onSearch(): void {
        debugger;
        console.log('search: ' + this.searchForm.value.search);
        this.searchAction.emit(this.searchForm.value.search);
    }

}
