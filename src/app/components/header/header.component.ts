import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../modules/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    userName: string;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {
    }

    login() {
        this.router.navigate(['/login']);
    }
    
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }

    getUserName() {
        return this.authService.getUserInfo().login;
    }

}
