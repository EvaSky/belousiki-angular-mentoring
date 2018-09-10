import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/auth/services/auth.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    user: User;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        if (this.isAuthenticated()) {
            this.authService.getUserInfo()
                .subscribe(user => this.user = user);
        }
    }

    isAuthenticated(): boolean {
      return this.authService.isAuthenticated();
    }
}
