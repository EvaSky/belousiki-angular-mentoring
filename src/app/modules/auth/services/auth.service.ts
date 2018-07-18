import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserAuthenticated: boolean;

  constructor() { }

  login(login, pass): void {
    localStorage.setItem('currentUser', JSON.stringify({'login': login, 'password': pass}));
    this.isUserAuthenticated = true;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.isUserAuthenticated = false;
  } 

  isAuthenticated(): boolean {
    return this.isUserAuthenticated;
  }

  getUserInfo(): any {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

}
