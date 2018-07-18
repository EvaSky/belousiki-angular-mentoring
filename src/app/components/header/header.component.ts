import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../modules/auth/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Input() user: User;

    userName: string;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.userName = this.user ? `${this.user.firstName} ${this.user.lastName}` : 'User Name';
    }

    logout() {
        console.log('logout');
        this.authService.logout();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }

    getUserName() {
        return this.authService.getUserInfo().name;
    }

}
