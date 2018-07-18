import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(login, pass): void {
    localStorage.setItem('currentUser', JSON.stringify({'login': login, 'password': pass}));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  } 

  isAuthenticated(): boolean {
    const user = localStorage.getItem('currentUser');
    return user !== undefined && user !== null;
  }

  getUserInfo(): any {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

}
