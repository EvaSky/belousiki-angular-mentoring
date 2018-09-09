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

    user: User;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.authService.userSub
        .subscribe(user => this.user = user);
    }

    login(): void {
        this.router.navigate(['/login']);
    }
    
    logout(): void {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    isAuthenticated(): boolean {
        return this.authService.isAuthenticated();
    }

}
