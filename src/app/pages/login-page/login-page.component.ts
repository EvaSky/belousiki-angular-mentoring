import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string;
  pass: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    console.log(`username: ${this.username}, password: ${this.pass}`);
    this.authService.login(this.username, this.pass);
  }

}
