import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Input() user: User;

    userName: string;

    constructor() {
    }

    ngOnInit() {
        this.userName = this.user ? `${this.user.firstName} ${this.user.lastName}` : 'User Name';
    }

}
