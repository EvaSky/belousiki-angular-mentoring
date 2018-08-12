import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../modules/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string;
  pass: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(`username: ${this.username}, password: ${this.pass}`);
    this.authService.login(this.username, this.pass)
      .subscribe(() => {
        if (this.authService.isAuthenticated) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/courses';

        // Redirect the user
        this.router.navigate([redirect]);
        }
      }, () => {
        console.warn('error');
      });
  
  }

}
