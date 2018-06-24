import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tool-bar',
    templateUrl: './tool-bar.component.html',
    styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    add() {
        console.log('add course');
    }

}
